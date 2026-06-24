import { useRef } from "react";
import { clsx } from "clsx";
import { Icon } from "./icons";
import type { IconName } from "../../types";
import { useReducedMotion } from "../../animations/useReducedMotion";

type Variant = "primary" | "gold" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Subtle pull-toward-cursor effect on hover. */
  magnetic?: boolean;
  icon?: IconName;
  iconRight?: IconName;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap select-none transition-[transform,box-shadow,border-color,background-color,color] duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[0.95rem] px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

const variants: Record<Variant, string> = {
  primary:
    "text-bg-main font-semibold bg-gradient-to-r from-accent-green to-accent-blue shadow-[0_8px_30px_rgba(0,194,168,0.25)] hover:shadow-[0_0_36px_var(--green-glow)]",
  gold: "text-bg-main font-semibold bg-gradient-to-r from-accent-gold to-[#f4d488] shadow-[0_8px_30px_rgba(214,170,79,0.25)] hover:shadow-[0_0_36px_var(--gold-glow)]",
  ghost:
    "glass-soft text-text-main hover:text-white hover:border-white/25 hover:bg-white/[0.07]",
  outline:
    "border border-glass-border text-text-main hover:border-accent-green/60 hover:text-white",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    magnetic = false,
    icon,
    iconRight,
    className,
    children,
    ...rest
  } = props;

  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || reduced) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const content = (
    <>
      {icon && <Icon name={icon} className="size-[1.05em]" aria-hidden />}
      {children}
      {iconRight && <Icon name={iconRight} className="size-[1.05em]" aria-hidden />}
    </>
  );

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (props.href !== undefined) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
