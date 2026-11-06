import { site } from "@/content/site";
import { Placeholder } from "@/components/Placeholder";

type PageHeroProps = {
  title: string;
  href?: string;
  ctaLabel?: string;
};

export function PageHero({
  title,
  href = "#page-content",
  ctaLabel = "Continue",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden md:min-h-[440px]">
      <Placeholder className="absolute inset-0" showLabel={false} />
      <div className="absolute inset-0 bg-navy/55" />
      <span className="pointer-events-none absolute inset-4 z-10 border border-dashed border-white/45" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center text-white">
        <h1 className="max-w-4xl text-5xl leading-tight md:text-7xl">{title}</h1>
        <a
          href={href}
          aria-label={ctaLabel}
          className="mt-6 grid size-14 place-items-center bg-pink text-4xl leading-none text-white"
        >
          +
        </a>
      </div>
      <span className="absolute bottom-4 left-4 z-10 text-[11px] uppercase tracking-[0.22em] text-white/80">
        {site.imageLabel}
      </span>
    </section>
  );
}
