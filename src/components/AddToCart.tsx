"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { useCart } from "@/components/CartProvider";

export function AddToCart({
  slug,
  available,
}: {
  slug: string;
  available: boolean;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!available) {
    return (
      <p className="mt-6 text-sm uppercase tracking-[0.16em] text-pink">
        {site.ui.soldOut}
      </p>
    );
  }

  return (
    <form
      className="mt-6 flex flex-wrap items-center gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        add(slug, qty);
        setAdded(true);
      }}
    >
      <label className="text-sm" htmlFor="qty">
        {site.ui.quantity}
      </label>
      <div className="flex border border-navy/20">
        <button
          type="button"
          className="grid size-11 place-items-center"
          aria-label="Decrease quantity"
          onClick={() => setQty((value) => Math.max(1, value - 1))}
        >
          −
        </button>
        <input
          id="qty"
          value={qty}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isFinite(next)) setQty(Math.max(1, Math.min(99, next)));
          }}
          inputMode="numeric"
          className="w-12 border-x border-navy/20 text-center"
          aria-label={site.ui.quantity}
        />
        <button
          type="button"
          className="grid size-11 place-items-center"
          aria-label="Increase quantity"
          onClick={() => setQty((value) => Math.min(99, value + 1))}
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="bg-pink px-6 py-3 text-sm uppercase tracking-[0.16em] text-white"
      >
        {added ? site.ui.added : site.ui.addToCart}
      </button>
    </form>
  );
}
