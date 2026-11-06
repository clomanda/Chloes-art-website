import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Classes" };

export default function ClassesPage() {
  return (
    <>
      <PageHero title="Classes" ctaLabel="See the classes" />
      <div id="page-content" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="max-w-3xl text-5xl text-navy">{site.home.learnHeading}</h2>
        <ul className="mt-12 space-y-16">
          {site.classes.map((offering) => (
            <li key={offering.slug} id={offering.slug} className="grid items-center gap-8 md:grid-cols-2">
              <Placeholder className="aspect-[4/3] w-full" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-pink">{offering.meta}</p>
                <h3 className="mt-2 text-4xl text-navy">{offering.title}</h3>
                <p className="mt-4 leading-7">{offering.summary}</p>
                <div className="mt-4 space-y-3 leading-7">
                  {offering.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
                >
                  {site.ui.enquire}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
