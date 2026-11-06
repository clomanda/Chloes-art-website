import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getPost, site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.news.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post?.title ?? "News", description: post?.excerpt };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageHero title={post.title} ctaLabel="Read the note" />
      <article id="page-content" className="mx-auto w-full max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.16em] text-pink">{post.date}</p>
        <div className="mt-6 space-y-4 leading-7">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/news"
          className="mt-10 inline-block text-sm uppercase tracking-[0.16em] text-pink"
        >
          Back to news
        </Link>
      </article>
    </>
  );
}
