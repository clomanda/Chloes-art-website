import Link from "next/link";
import { ChloePortrait } from "@/components/ChloePortrait";
import { HeroSlider } from "@/components/HeroSlider";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <ChloePortrait className="aspect-[4/5] w-full" />
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-pink">
            {site.home.aboutKicker}
          </p>
          <h2 className="mt-2 text-5xl text-navy">{site.home.aboutHeading}</h2>
          <p className="mt-4 max-w-xl text-base leading-7">{site.home.aboutText}</p>
          <Link
            href="/about"
            className="mt-6 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
          >
            {site.ui.readStory}
          </Link>
        </div>
      </section>

      <section className="bg-navy/5">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.28em] text-pink">
            {site.home.shopKicker}
          </p>
          <h2 className="mt-2 text-5xl text-navy">{site.home.shopHeading}</h2>
          <p className="mt-4 max-w-2xl leading-7">{site.home.shopText}</p>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {site.categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/shop/${category.slug}`} className="block">
                  <Placeholder className="aspect-[4/5] w-full" />
                  <h3 className="mt-3 text-2xl text-navy">{category.title}</h3>
                </Link>
                <p className="mt-2 text-sm leading-6 text-ink/80">{category.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-pink">
          {site.home.learnKicker}
        </p>
        <h2 className="mt-2 max-w-3xl text-5xl text-navy">{site.home.learnHeading}</h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
          {site.classes.map((offering) => (
            <li key={offering.slug} className="min-w-0">
              <Placeholder className="aspect-[4/5] w-full" />
              <h3 className="mt-3 text-2xl text-navy">{offering.title}</h3>
              <p className="mt-2 text-sm leading-6">{offering.summary}</p>
              <Link
                href="/classes"
                className="mt-3 inline-block text-sm uppercase tracking-[0.16em] text-pink"
              >
                {site.ui.enquire}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-pink">
              {site.home.practiceKicker}
            </p>
            <h2 className="mt-2 text-5xl">{site.home.practiceHeading}</h2>
            <p className="mt-4 leading-7 text-white/90">{site.home.practiceText}</p>
            <ul className="mt-6 space-y-3">
              {site.home.practicePoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6">
                  <span aria-hidden className="text-pink">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/shop"
              className="mt-8 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
            >
              {site.home.practiceLink}
            </Link>
          </div>
          <Placeholder className="aspect-[4/5] w-full" />
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-16 text-center md:py-24">
        <p className="text-xs uppercase tracking-[0.28em] text-pink">
          {site.home.commissionKicker}
        </p>
        <h2 className="mt-2 text-5xl text-navy">{site.home.commissionHeading}</h2>
        <p className="mt-4 leading-7">{site.home.commissionText}</p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-pink px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
        >
          {site.ui.requestCommission}
        </Link>
      </section>

      <section className="border-t border-navy/10">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
          <p className="text-xs uppercase tracking-[0.28em] text-pink">
            {site.home.notesKicker}
          </p>
          <h2 className="mt-2 text-5xl text-navy">{site.home.notesHeading}</h2>
          <p className="mt-4 max-w-2xl leading-7">{site.home.notesText}</p>
          <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {site.news.map((post) => (
              <li key={post.slug}>
                <Link href={`/news/${post.slug}`} className="block">
                  <Placeholder className="aspect-square w-full" />
                  <h3 className="mt-3 text-2xl leading-tight text-navy">{post.title}</h3>
                </Link>
                <p className="mt-2 text-sm leading-6 text-ink/80">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
