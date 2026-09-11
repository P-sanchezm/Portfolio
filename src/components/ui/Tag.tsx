import { clsx } from "clsx";

interface TagProps {
  children: React.ReactNode;
  className?: string;
  /** Highlighted (accent) style for category pills. */
  accent?: boolean;
}

/** Compact technical label used for categories and metadata. */
export function Tag({ children, className, accent = false }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center border px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em]",
        accent
          ? "border-accent-gold/40 bg-accent-gold/5 text-accent-gold"
          : "border-glass-border bg-transparent text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
