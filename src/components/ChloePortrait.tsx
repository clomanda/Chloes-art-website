import Image from "next/image";

type ChloePortraitProps = {
  className?: string;
};

export function ChloePortrait({ className = "" }: ChloePortraitProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/chloe-meehan.jpg"
        alt="Chloe Meehan smiling by a mountain lake"
        fill
        sizes="(min-width: 768px) 36rem, 100vw"
        className="object-cover"
      />
    </div>
  );
}
