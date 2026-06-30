import { useRef } from "react";
import { clsx } from "clsx";
import { Icon } from "./icons";
import type { IconName } from "../../types";
import { useReducedMotion } from "../../animations/useReducedMotion";

type Variant = "primary" | "gold" | "linkedin" | "ghost" | "outline";
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
  linkedin:
    "text-white font-semibold bg-gradient-to-r from-[#0a66c2] to-accent-blue shadow-[0_8px_30px_rgba(10,102,194,0.3)] hover:shadow-[0_0_36px_var(--blue-glow)]",
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
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  // Cache the rect on enter and write the transform inside one rAF per frame,
  // so the per-move handler never forces a layout read or double-writes style.
  const handleEnter = () => {
    if (!magnetic || reduced) return;
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };
  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || reduced) return;
    const r = rectRef.current;
    if (!r) return;
    posRef.current = {
      x: e.clientX - (r.left + r.width / 2),
      y: e.clientY - (r.top + r.height / 2),
    };
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = ref.current;
      if (!el) return;
      const { x, y } = posRef.current;
      el.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
    });
  };

  const handleLeave = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
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
        onMouseEnter={handleEnter}
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
