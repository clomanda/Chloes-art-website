import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { ArtworkFrame } from "@/components/ArtworkFrame";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import {
  formatPrice,
  getCategory,
  getProduct,
  productsInCategory,
  site,
} from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product?.title ?? "Work",
    description: product?.summary,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.category);
  const related = productsInCategory(product.category)
    .filter((item) => item.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8 md:py-16">
      <p className="text-sm text-ink/70">
        <Link href="/" className="underline decoration-pink underline-offset-4">
          Home
        </Link>
        {" / "}
        <Link href="/shop" className="underline decoration-pink underline-offset-4">
          Shop
        </Link>
        {category ? (
          <>
            {" / "}
            <Link
              href={`/shop/${category.slug}`}
              className="underline decoration-pink underline-offset-4"
            >
              {category.title}
            </Link>
          </>
        ) : null}
        {" / "}
        {product.title}
      </p>

      <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
        {"gallery" in product && product.gallery.length > 0 ? (
          <ProductGallery
            photos={[
              { src: product.image, alt: product.alt },
              ...product.gallery,
            ]}
          />
        ) : (
          <ArtworkFrame
            src={product.image}
            alt={product.alt}
            className="aspect-square w-full"
            sizes="(min-width: 768px) 36rem, 100vw"
          />
        )}
        <div>
          <h1 className="text-5xl text-navy">{product.title}</h1>
          <p className="mt-4 text-2xl">{formatPrice(product.price)}</p>
          <dl className="mt-6 space-y-2 text-sm">
            <div className="flex gap-2">
              <dt className="font-medium">SKU</dt>
              <dd>{product.sku}</dd>
            </div>
            {category ? (
              <div className="flex gap-2">
                <dt className="font-medium">Category</dt>
                <dd>
                  <Link href={`/shop/${category.slug}`} className="underline decoration-pink underline-offset-4">
                    {category.title}
                  </Link>
                </dd>
              </div>
            ) : null}
            {product.details.map((detail) => (
              <div key={detail.label} className="flex gap-2">
                <dt className="font-medium">{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
            <div className="flex gap-2">
              <dt className="font-medium">Tags</dt>
              <dd>{product.tags.join(", ")}</dd>
            </div>
          </dl>
          <div className="mt-6 space-y-4 leading-7">
            {product.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <AddToCart slug={product.slug} available={product.available} />
          <p className="mt-4 max-w-md text-sm leading-6 text-ink/70">
            {site.ui.paymentNote}
          </p>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-4xl text-navy">{site.ui.related}</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
            {related.map((item) => (
              <li key={item.slug}>
                <ProductCard product={item} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
