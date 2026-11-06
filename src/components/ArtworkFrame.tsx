import Image from "next/image";
import { Placeholder } from "@/components/Placeholder";

type ArtworkFrameProps = {
  src?: string;
  alt?: string;
  className?: string;
  sizes?: string;
};

export function ArtworkFrame({
  src,
  alt = "",
  className = "",
  sizes = "(min-width: 1024px) 20rem, 50vw",
}: ArtworkFrameProps) {
  if (!src) {
    return <Placeholder className={className} />;
  }

  return (
    <div className={`relative overflow-hidden bg-paper ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-contain" />
    </div>
  );
}
