import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import {
  getCategory,
  productsInCategory,
  site,
} from "@/content/site";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return site.categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return { title: category?.title ?? "Shop" };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const products = productsInCategory(category.slug);

  return (
    <>
      <PageHero
        title={category.title}
        ctaLabel={`View ${category.title}`}
        image={category.image}
        alt={category.alt}
      />
      <div id="page-content" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <p className="max-w-2xl leading-7">{category.summary}</p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/70">{site.ui.sampleShopNote}</p>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
