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
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {(index || eyebrow) && (
        <div
          className={clsx(
            "mb-4 flex items-center gap-3 text-sm",
            align === "center" && "justify-center"
          )}
          data-reveal
        >
          {index && (
            <span className="font-mono text-accent-green">{index}</span>
          )}
          <span className="h-px w-8 bg-gradient-to-r from-accent-green/60 to-transparent" />
          {eyebrow && (
            <span className="uppercase tracking-[0.2em] text-text-muted">
              {eyebrow}
            </span>
          )}
        </div>
      )}

      <h2
        className="text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem]"
        data-reveal
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-4 text-pretty text-base leading-relaxed text-text-muted"
          data-reveal
        >
          {description}
        </p>
      )}
    </div>
  );
}
