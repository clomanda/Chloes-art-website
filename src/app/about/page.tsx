import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Me" ctaLabel="Read the story" />
      <div id="page-content" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Placeholder className="aspect-[4/5] w-full" />
          <div>
            <h2 className="text-5xl text-navy">{site.about.heading}</h2>
            <div className="mt-6 space-y-4 leading-7">
              {site.about.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl text-navy">{site.about.visionTitle}</h2>
            {site.about.vision.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="text-4xl text-navy">{site.about.studioTitle}</h2>
            {site.about.studio.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4">
          <Placeholder className="aspect-[4/3] w-full" />
          <Placeholder className="aspect-[4/3] w-full" />
        </div>

        <section className="mt-20">
          <h2 className="text-4xl text-navy">{site.about.showsTitle}</h2>
          <p className="mt-3 text-sm text-ink/70">{site.about.showsNote}</p>
          <ul className="mt-8 divide-y divide-navy/10">
            {site.about.shows.map((show) => (
              <li key={show.title} className="grid gap-2 py-5 md:grid-cols-[160px_1fr]">
                <p className="text-sm uppercase tracking-[0.14em] text-pink">{show.when}</p>
                <div>
                  <h3 className="text-2xl text-navy">{show.title}</h3>
                  <p className="mt-1 text-sm leading-6">{show.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 bg-navy px-6 py-12 text-center text-white md:px-12">
          <h2 className="text-4xl">{site.home.commissionHeading}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            {site.home.commissionText}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
          >
            {site.ui.requestCommission}
          </Link>
        </section>
      </div>
    </>
  );
}
