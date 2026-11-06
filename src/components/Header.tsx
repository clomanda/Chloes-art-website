"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cartLabel, site } from "@/content/site";
import { useCart } from "@/components/CartProvider";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/shop") {
    return pathname.startsWith("/shop") || pathname.startsWith("/product");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const label = cartLabel(count);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenPath(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy text-white">
        <div className="flex h-[72px] items-center justify-between gap-4 px-4 lg:px-8">
          <Link href="/" className="leading-none text-white">
            <span className="block font-serif text-[2rem] italic tracking-wide">
              {site.name}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.35em] text-white/75">
              Artwork
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href, pathname) ? "page" : undefined}
                className={`text-[13px] uppercase tracking-[0.16em] ${
                  isActive(item.href, pathname) ? "text-pink" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className={`text-[13px] uppercase tracking-[0.16em] ${
                pathname === "/cart" ? "text-pink" : "text-white"
              }`}
            >
              {label}
            </Link>
          </nav>

          <button
            type="button"
            className="grid size-11 place-items-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">
              {open ? site.ui.closeMenu : site.ui.openMenu}
            </span>
            {open ? (
              <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            )}
          </button>
        </div>

        {open ? (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t-4 border-pink bg-navy lg:hidden"
          >
            <ul>
              {site.nav.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href, pathname) ? "page" : undefined}
                    className={`block px-6 py-4 text-sm uppercase tracking-[0.22em] ${
                      isActive(item.href, pathname) ? "text-pink" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cart"
                  className={`block px-6 py-4 text-sm uppercase tracking-[0.22em] ${
                    pathname === "/cart" ? "text-pink" : "text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      {open ? (
        <button
          type="button"
          aria-label={site.ui.closeMenu}
          className="fixed inset-0 z-40 bg-black/55 lg:hidden"
          onClick={() => setOpenPath(null)}
        />
      ) : null}
    </>
  );
}
