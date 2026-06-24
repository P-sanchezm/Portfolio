import { clsx } from "clsx";
import { useAnimeReveal } from "../../animations/useAnimeReveal";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Reveal direct children marked [data-reveal] with a stagger instead
   *  of the wrapper as a single block. */
  stagger?: boolean;
  staggerMs?: number;
}

/**
 * Drop-in wrapper that fades + slides its content into view on scroll.
 * Use `stagger` to cascade child elements marked with `data-reveal`.
 */
export function AnimatedReveal({
  children,
  className,
  stagger = false,
  staggerMs = 90,
}: AnimatedRevealProps) {
  const ref = useAnimeReveal<HTMLDivElement>(
    stagger
      ? { selector: "[data-reveal]", staggerMs }
      : { selector: "" }
  );

  return (
    <div ref={ref} className={clsx(!stagger && "reveal-init", className)}>
      {children}
    </div>
  );
}
