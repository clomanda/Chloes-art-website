import Link from "next/link";
import { formatPrice, type Product } from "@/content/site";
import { Placeholder } from "@/components/Placeholder";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="min-w-0">
      <Link href={`/product/${product.slug}`} className="block">
        <Placeholder className="aspect-[4/5] w-full" />
        <h2 className="mt-3 text-2xl leading-tight text-navy">{product.title}</h2>
      </Link>
      <p className="mt-1 text-sm text-ink/80">{formatPrice(product.price)}</p>
      {!product.available ? (
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-pink">Sold</p>
      ) : null}
    </article>
  );
}
