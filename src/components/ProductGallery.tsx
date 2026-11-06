"use client";

import Image from "next/image";
import { useState } from "react";

type GalleryPhoto = {
  src: string;
  alt: string;
};

export function ProductGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [index, setIndex] = useState(0);
  const photo = photos[index] ?? photos[0];
  if (!photo) return null;

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden bg-paper">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 36rem, 100vw"
          className="object-contain"
          priority
        />
      </div>
      {photos.length > 1 ? (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
          {photos.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <li key={item.src}>
                <button
                  type="button"
                  aria-current={selected ? "true" : undefined}
                  aria-label={item.alt}
                  onClick={() => setIndex(itemIndex)}
                  className={`relative block aspect-square w-full overflow-hidden bg-paper ${
                    selected ? "outline outline-2 outline-offset-2 outline-pink" : ""
                  }`}
                >
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
