import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "News" };

export default function NewsPage() {
  return (
    <>
      <PageHero title="News" ctaLabel="Read the notes" />
      <div id="page-content" className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <h2 className="text-5xl text-navy">{site.home.notesHeading}</h2>
        <p className="mt-4 max-w-2xl leading-7">{site.home.notesText}</p>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
          {site.news.map((post) => (
            <li key={post.slug}>
              <Link href={`/news/${post.slug}`} className="block">
                <Placeholder className="aspect-[4/5] w-full" />
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-pink">{post.date}</p>
                <h3 className="mt-1 text-2xl leading-tight text-navy">{post.title}</h3>
              </Link>
              <p className="mt-2 text-sm leading-6">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
