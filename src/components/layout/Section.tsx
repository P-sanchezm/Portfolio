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
        "relative scroll-mt-20",
        spacing === "normal" ? "py-8 sm:py-16" : "py-6 sm:py-12",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-10 lg:px-16 xl:px-20">{children}</div>
    </section>
  );
}
