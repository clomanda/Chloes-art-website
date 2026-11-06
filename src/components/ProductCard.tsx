import Link from "next/link";
import { ArtworkFrame } from "@/components/ArtworkFrame";
import { formatPrice, type Product } from "@/content/site";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="min-w-0">
      <Link href={`/product/${product.slug}`} className="block">
        <ArtworkFrame
          src={product.image}
          alt={product.alt}
          className="aspect-[4/5] w-full"
        />
        <h2 className="mt-3 text-2xl leading-tight text-navy">{product.title}</h2>
      </Link>
      <p className="mt-1 text-sm text-ink/80">{formatPrice(product.price)}</p>
      {!product.available ? (
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-pink">Sold</p>
      ) : null}
    </article>
  );
}
