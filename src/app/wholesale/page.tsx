import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = { title: site.wholesale.title };

export default function WholesalePage() {
  return (
    <>
      <PageHero title={site.wholesale.title} ctaLabel="Read about wholesale" />
      <article id="page-content" className="mx-auto w-full max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-lg leading-8">{site.wholesale.intro}</p>
        <div className="mt-6 space-y-4 leading-7">
          {site.wholesale.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
        >
          {site.ui.enquire}
        </Link>
      </article>
    </>
  );
}
