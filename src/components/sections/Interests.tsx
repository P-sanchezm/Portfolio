import { clsx } from "clsx";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Icon } from "../ui/icons";
import { interests } from "../../data/interests";
import type { InterestGroup } from "../../types";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

const accentMap: Record<
  NonNullable<InterestGroup["accent"]>,
  { text: string; bg: string; glow: string }
> = {
  green: {
    text: "text-accent-green",
    bg: "bg-accent-green/10",
    glow: "hover:shadow-[0_0_44px_var(--green-glow)]",
  },
  blue: {
    text: "text-accent-blue",
    bg: "bg-accent-blue/10",
    glow: "hover:shadow-[0_0_44px_var(--blue-glow)]",
  },
  gold: {
    text: "text-accent-gold",
    bg: "bg-accent-gold/10",
    glow: "hover:shadow-[0_0_44px_var(--gold-glow)]",
  },
  teal: {
    text: "text-accent-teal",
    bg: "bg-accent-teal/10",
    glow: "hover:shadow-[0_0_44px_var(--green-glow)]",
  },
};

function InterestCard({ group }: { group: InterestGroup }) {
  const accent = accentMap[group.accent ?? "green"];
  const isLarge = group.size === "lg";

  return (
    <GlassCard
      interactive
      data-card
      className={clsx(
        "reveal-init group relative flex flex-col overflow-hidden p-6 transition-shadow duration-300",
        accent.glow,
        isLarge && "lg:col-span-2"
      )}
    >
      {/* Watermark icon */}
      <Icon
        name={group.icon}
        className={clsx(
          "pointer-events-none absolute -bottom-6 -right-6 size-36 opacity-[0.06] transition-transform duration-500 group-hover:scale-110",
          accent.text
        )}
        aria-hidden
      />

      <span
        className={clsx(
          "flex size-12 items-center justify-center rounded-2xl",
          accent.bg,
          accent.text
        )}
      >
        <Icon name={group.icon} className="size-6" />
      </span>

      <h3 className="mt-5 font-display text-xl font-semibold text-text-main">
        {group.title}
      </h3>
      {group.description && (
        <p className="mt-1.5 text-sm text-text-muted">{group.description}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs text-text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}

export function Interests() {
  const ref = useStaggeredCards<HTMLDivElement>(80);

  return (
    <Section id="interests">
      <SectionHeader
        index="04"
        eyebrow="Interests"
        title="What keeps me curious."
        description="The themes that connect my work — from global strategy to building things and staying sharp."
      />

      <div
        ref={ref}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {interests.map((group) => (
          <InterestCard key={group.id} group={group} />
        ))}
      </div>
    </Section>
  );
}
