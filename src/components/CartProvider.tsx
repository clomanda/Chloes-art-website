"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";

export type CartLine = {
  slug: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  ready: boolean;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "chloe-art-cart";
const CHANGE_EVENT = "chloe-cart-change";
const EMPTY: CartLine[] = [];

let cachedRaw: string | null = null;
let cachedLines: CartLine[] = EMPTY;

function isLine(value: unknown): value is CartLine {
  if (!value || typeof value !== "object") return false;
  const line = value as CartLine;
  return typeof line.slug === "string" && Number.isFinite(line.qty) && line.qty > 0;
}

function readLines(): CartLine[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedLines;
  cachedRaw = raw;
  if (!raw) {
    cachedLines = EMPTY;
    return cachedLines;
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    cachedLines = Array.isArray(parsed) ? parsed.filter(isLine) : EMPTY;
  } catch {
    cachedLines = EMPTY;
  }
  return cachedLines;
}

function writeLines(lines: CartLine[]) {
  const next = lines.filter((line) => line.qty > 0);
  cachedRaw = JSON.stringify(next);
  cachedLines = next.length ? next : EMPTY;
  localStorage.setItem(STORAGE_KEY, cachedRaw);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(subscribe, readLines, () => EMPTY);
  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((total, line) => total + line.qty, 0);
    return {
      lines,
      count,
      ready: true,
      add: (slug, qty = 1) => {
        const current = readLines();
        const existing = current.find((line) => line.slug === slug);
        const next = existing
          ? current.map((line) =>
              line.slug === slug ? { ...line, qty: line.qty + qty } : line,
            )
          : [...current, { slug, qty }];
        writeLines(next);
      },
      setQty: (slug, qty) => {
        const current = readLines();
        writeLines(
          qty <= 0
            ? current.filter((line) => line.slug !== slug)
            : current.map((line) => (line.slug === slug ? { ...line, qty } : line)),
        );
      },
      remove: (slug) => {
        writeLines(readLines().filter((line) => line.slug !== slug));
      },
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
