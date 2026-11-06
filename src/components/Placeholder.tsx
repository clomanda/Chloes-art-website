import { site } from "@/content/site";

type PlaceholderProps = {
  label?: string;
  className?: string;
  showLabel?: boolean;
};

export function Placeholder({
  label = site.imageLabel,
  className = "",
  showLabel = true,
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative grid place-items-center overflow-hidden bg-frame text-navy ${className}`}
    >
      <span className="pointer-events-none absolute inset-3 border border-dashed border-navy/25" />
      {showLabel ? (
        <span className="px-3 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-navy/70">
          {label}
        </span>
      ) : null}
    </div>
  );
}
