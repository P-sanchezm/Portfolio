import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { interests } from "../../data/interests";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

export function Interests() {
  const ref = useStaggeredCards<HTMLOListElement>(50);

  return (
    <Section id="interests">
      <SectionHeader
        index="04"
        eyebrow="Interests"
        title="What else I love to learn about and do"
        description="Not a list of professional traits—just the subjects and activities I genuinely spend time on."
      />

      <ol ref={ref} className="mt-10 grid border-t border-l border-glass-border sm:grid-cols-2 lg:grid-cols-5">
        {interests.map((group, index) => (
          <li
            key={group.id}
            data-card
            className="reveal-init flex min-h-72 flex-col border-r border-b border-glass-border p-5 sm:p-6"
          >
            <span className="font-mono text-xs text-accent-gold">0{index + 1}</span>
            <h3 className="mt-10 font-display text-2xl font-medium leading-tight text-text-main">
              {group.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{group.description}</p>
            <p className="mt-auto pt-8 font-mono text-[0.64rem] uppercase leading-relaxed tracking-[0.08em] text-text-faint">
              {group.items.join(" / ")}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
