import type { Metadata } from "next";
import { Basket } from "@/components/Basket";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: site.ui.basket };

export default function CartPage() {
  return (
    <>
      <PageHero title={site.ui.basket} ctaLabel="Review the basket" />
      <div id="page-content" className="mx-auto w-full max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <Basket />
      </div>
    </>
  );
}
