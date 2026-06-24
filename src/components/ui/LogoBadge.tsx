import { useState } from "react";
import { clsx } from "clsx";

interface LogoBadgeProps {
  src?: string;
  /** Organization / project name — used for the fallback monogram + alt. */
  name: string;
  size?: number;
  className?: string;
}

/** Derives up to two uppercase initials from a name. */
function monogram(name: string): string {
  const words = name
    .replace(/[^a-zA-ZÀ-ÿ0-9\s]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "•";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Rounded glass container for an institution / company / project logo.
 * Falls back to a generated monogram when no image is available.
 */
export function LogoBadge({ src, name, size = 56, className }: LogoBadgeProps) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  return (
    <div
      className={clsx(
        "glass-soft flex shrink-0 items-center justify-center overflow-hidden rounded-2xl",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden={!showImage ? undefined : true}
    >
      {showImage ? (
        <img
          src={src}
          alt={`${name} logo`}
          loading="lazy"
          className="h-full w-full object-contain p-2"
          onError={() => setErrored(true)}
        />
      ) : (
        <span
          className="font-display font-semibold text-gradient"
          style={{ fontSize: size * 0.34 }}
          title={name}
        >
          {monogram(name)}
        </span>
      )}
    </div>
  );
}
