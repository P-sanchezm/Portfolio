import { clsx } from "clsx";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  /** Vertical padding preset. */
  spacing?: "normal" | "tight";
}

/**
 * Standard section wrapper: provides the scroll anchor (with offset for the
 * fixed navbar), vertical rhythm and the centered max-width container.
 */
export function Section({
  id,
  className,
  children,
  spacing = "normal",
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative scroll-mt-28",
        spacing === "normal" ? "py-20 sm:py-28" : "py-14 sm:py-20",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
