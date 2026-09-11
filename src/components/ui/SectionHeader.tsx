import { clsx } from "clsx";

interface SectionHeaderProps {
  /** e.g. "03" — rendered as a monospace index. */
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent heading block for every section. */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={clsx(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {(index || eyebrow) && (
        <div
          className={clsx(
            "mb-6 flex items-center gap-3 border-t border-glass-border pt-4 text-sm",
            align === "center" && "justify-center"
          )}
          data-reveal
        >
          {index && (
            <span className="font-mono text-xs text-accent-gold">{index}</span>
          )}
          <span className="h-px w-8 bg-accent-gold" />
          {eyebrow && (
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      <h2
        className="text-balance font-display text-4xl font-medium leading-[1.02] sm:text-5xl md:text-6xl"
        data-reveal
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-text-muted"
          data-reveal
        >
          {description}
        </p>
      )}
    </div>
  );
}
