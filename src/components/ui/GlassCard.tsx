import { forwardRef } from "react";
import { clsx } from "clsx";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds an animated gradient hairline + hover lift. */
  interactive?: boolean;
  /** Lighter blur variant for nested / secondary surfaces. */
  soft?: boolean;
}

/**
 * The frosted glass surface used throughout the UI (hero card, timeline
 * cards, project cards, interest cards, contact panel...).
 */
export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, interactive = false, soft = false, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={clsx(
        soft ? "glass-soft" : "glass",
        "rounded-3xl",
        interactive &&
          "gradient-border transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_100px_rgba(0,0,0,0.5)]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
);

GlassCard.displayName = "GlassCard";
