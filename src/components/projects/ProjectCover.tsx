import { useState } from "react";
import { clsx } from "clsx";

interface ProjectCoverProps {
  src?: string;
  title: string;
  category?: string;
  className?: string;
}

/**
 * Project cover image with a graceful gradient + monogram placeholder for
 * when the image file is missing (so the layout never breaks before you've
 * added real screenshots).
 */
export function ProjectCover({
  src,
  title,
  category,
  className,
}: ProjectCoverProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={clsx(
          "bg-grid relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-tertiary via-bg-secondary to-bg-main",
          className
        )}
      >
        <div className="absolute -right-10 -top-10 size-40 rounded-full bg-accent-teal/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-40 rounded-full bg-accent-blue/20 blur-3xl" />
        <div className="relative px-6 text-center">
          {category && (
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-text-faint">
              {category}
            </span>
          )}
          <span className="font-display text-xl font-semibold text-gradient">
            {title}
          </span>
        </div>
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
