"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={site.ui.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-4 z-40 grid size-12 place-items-center bg-pink text-white shadow-md"
    >
      <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
        <path
          d="M6 14l6-6 6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    </button>
  );
}
