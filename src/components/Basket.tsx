"use client";

import Link from "next/link";
import { formatPrice, getProduct, site } from "@/content/site";
import { ArtworkFrame } from "@/components/ArtworkFrame";
import { useCart } from "@/components/CartProvider";

export function Basket() {
  const { lines, setQty, remove, ready } = useCart();
  const items = lines
    .map((line) => {
      const product = getProduct(line.slug);
      if (!product) return null;
      return { line, product };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.line.qty,
    0,
  );

  if (!ready) {
    return <p className="text-sm text-ink/70">Loading basket…</p>;
  }

  if (items.length === 0) {
    return (
      <div>
        <p>{site.ui.emptyBasket}</p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
        >
          {site.ui.continueShopping}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ul className="divide-y divide-navy/10">
        {items.map(({ line, product }) => (
          <li
            key={product.slug}
            className="grid grid-cols-[96px_1fr] gap-4 py-6 sm:grid-cols-[120px_1fr_auto]"
          >
            <ArtworkFrame
              src={product.image}
              alt={product.alt}
              className="aspect-square w-full"
              sizes="120px"
            />
            <div>
              <Link href={`/product/${product.slug}`} className="font-serif text-2xl text-navy">
                {product.title}
              </Link>
              <p className="mt-1 text-sm">{formatPrice(product.price)}</p>
              <label className="mt-3 block text-sm" htmlFor={`qty-${product.slug}`}>
                {site.ui.quantity}
              </label>
              <input
                id={`qty-${product.slug}`}
                type="number"
                min={1}
                max={99}
                value={line.qty}
                onChange={(event) => {
                  const next = Number(event.target.value);
                  if (Number.isFinite(next)) setQty(product.slug, next);
                }}
                className="mt-1 w-20 border border-navy/20 px-2 py-1"
              />
              <button
                type="button"
                onClick={() => remove(product.slug)}
                className="mt-3 block text-sm uppercase tracking-[0.14em] text-pink"
              >
                {site.ui.remove}
              </button>
            </div>
            <p className="col-start-2 text-sm sm:col-start-auto sm:text-right">
              {formatPrice(product.price * line.qty)}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-baseline justify-between border-t border-navy/10 pt-6">
        <h2 className="text-3xl text-navy">{site.ui.subtotal}</h2>
        <p className="text-xl">{formatPrice(subtotal)}</p>
      </div>
      <p className="mt-4 max-w-xl text-sm leading-6 text-ink/80">{site.ui.paymentNote}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
        >
          {site.ui.askAboutOrder}
        </Link>
        <Link
          href="/shop"
          className="border border-navy px-5 py-3 text-sm uppercase tracking-[0.16em] text-navy"
        >
          {site.ui.continueShopping}
        </Link>
      </div>
    </div>
  );
}
