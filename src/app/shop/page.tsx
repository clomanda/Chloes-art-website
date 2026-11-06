import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  return (
    <>
      <PageHero title="Shop" ctaLabel="Browse the collection" />
      <div id="page-content" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="text-5xl text-navy">{site.home.shopHeading}</h2>
        <p className="mt-4 max-w-2xl leading-7">{site.home.shopText}</p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/70">{site.ui.sampleShopNote}</p>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {site.categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/shop/${category.slug}`} className="block">
                <Placeholder className="aspect-[4/5] w-full" />
                <h3 className="mt-3 text-2xl text-navy">{category.title}</h3>
              </Link>
              <p className="mt-2 text-sm leading-6">{category.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
