import { useState } from "react";
import { clsx } from "clsx";

interface ProjectCoverProps {
  src?: string;
  title: string;
  className?: string;
}

/** Up to two uppercase initials, used for the placeholder watermark. */
function initials(title: string): string {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Project cover image with a graceful gradient + monogram placeholder for
 * when the image file is missing (so the layout never breaks before you've
 * added real screenshots). The placeholder shows only a faint monogram — the
 * title and category live in the card body, so they aren't repeated here.
 */
export function ProjectCover({ src, title, className }: ProjectCoverProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={clsx(
          "bg-grid relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-tertiary via-bg-secondary to-bg-main",
          className
        )}
      >
        <span
          aria-hidden
          className="select-none font-display text-6xl font-bold tracking-tight text-white/[0.08]"
        >
          {initials(title)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setErrored(true)}
      className={clsx("h-full w-full object-cover", className)}
    />
  );
}
