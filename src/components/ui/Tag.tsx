import { clsx } from "clsx";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  /** Highlighted (accent) style for category pills. */
  accent?: boolean;
}

/** Small rounded pill used for tags, categories and metadata. */
export function Tag({ children, className, accent = false }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        accent
          ? "border-accent-green/30 bg-accent-green/10 text-accent-green"
          : "border-white/10 bg-white/5 text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
