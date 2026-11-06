import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { getPolicy, site } from "@/content/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return site.policies.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const policy = getPolicy(slug);
  return { title: policy?.title ?? "Policy", description: policy?.intro };
}

export default async function PolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  return (
    <>
      <PageHero title={policy.title} ctaLabel="Read the policy" />
      <article id="page-content" className="mx-auto w-full max-w-3xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-lg leading-8">{policy.intro}</p>
        <div className="mt-10 space-y-10">
          {policy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl text-navy">{section.heading}</h2>
              <div className="mt-3 space-y-3 leading-7">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
