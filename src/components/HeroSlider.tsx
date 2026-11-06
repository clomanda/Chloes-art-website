"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const slides = site.slides;
  const slide = slides[index];
  const count = slides.length;

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <section
      className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-frame"
      aria-roledescription="carousel"
      aria-label="Studio highlights"
    >
      <div className="absolute inset-0 bg-navy/55" />
      <span className="pointer-events-none absolute inset-4 z-10 border border-dashed border-white/45" />
      <span className="absolute bottom-5 left-4 z-10 text-[11px] uppercase tracking-[0.22em] text-white/80">
        {site.imageLabel}
      </span>

      <div className="relative z-10 flex max-w-3xl flex-col items-center px-6 text-center text-white">
        <p className="text-xs uppercase tracking-[0.28em] text-white/80">
          {index + 1} / {count}
        </p>
        <h1 className="mt-4 text-5xl leading-tight md:text-7xl">{slide.title}</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/90 md:text-lg">
          {slide.text}
        </p>
        <Link
          href={slide.href}
          aria-label={slide.cta}
          className="mt-8 grid size-14 place-items-center bg-pink text-4xl leading-none text-white"
        >
          +
        </Link>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center text-white md:left-6"
      >
        <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
          <path
            d="M14 6l-6 6 6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center text-white md:right-6"
      >
        <svg viewBox="0 0 24 24" className="size-7" aria-hidden>
          <path
            d="M10 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>

      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((item, dot) => (
          <button
            key={`${item.title}-${dot}`}
            type="button"
            aria-label={`Show slide ${dot + 1}: ${item.title}`}
            aria-current={dot === index}
            onClick={() => setIndex(dot)}
            className={`size-2.5 ${dot === index ? "bg-pink" : "bg-white/70"}`}
          />
        ))}
      </div>
    </section>
  );
}
