import { ArrowUpRight } from "lucide-react";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { LogoBadge } from "../ui/LogoBadge";
import { timeline } from "../../data/timeline";
import type { TimelineEntry } from "../../types";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

const startYear = (entry: TimelineEntry): number => parseInt(entry.start, 10) || 0;
const journey = [...timeline].sort((a, b) => startYear(a) - startYear(b));

function formatRange(entry: TimelineEntry): string {
  if (!entry.end || entry.end === entry.start) return entry.start;
  return `${entry.start} – ${entry.end}`;
}

export function Timeline() {
  const ref = useStaggeredCards<HTMLOListElement>(55);

  return (
    <Section id="timeline" spacing="tight">
      <SectionHeader
        index="03"
        eyebrow="Journey"
        title="Madrid, Boston—and Singapore next."
        description="The education and team experience behind the projects. Singapore is marked as a planned 2027 chapter, not as something that has already happened."
      />

      <ol ref={ref} className="mt-10 border-t border-glass-border">
        {journey.map((entry, index) => {
          const future = startYear(entry) > 2026;
          return (
            <li
              key={entry.id}
              data-card
              className="reveal-init grid gap-5 border-b border-glass-border py-7 sm:grid-cols-[3.5rem_8rem_1fr] lg:grid-cols-[3.5rem_9rem_0.8fr_1.2fr] lg:gap-8"
            >
              <span className="font-mono text-xs text-accent-gold">0{index + 1}</span>
              <span>
                <span className="block font-mono text-xs text-text-main">{formatRange(entry)}</span>
                {future && (
                  <span className="mt-2 inline-block border border-accent-gold px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-accent-gold">
                    Next
                  </span>
                )}
              </span>

              <span className="flex items-start gap-4">
                <LogoBadge src={entry.logo} name={entry.organization} size={44} />
                <span>
                  <strong className="block font-display text-xl font-medium text-text-main sm:text-2xl">
                    {entry.organization}
                  </strong>
                  <span className="mt-1 block text-sm text-text-muted">{entry.location}</span>
                </span>
              </span>

              <span className="sm:col-start-3 lg:col-start-auto">
                <strong className="block text-sm font-medium text-text-main">{entry.title}</strong>
                <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-text-muted">
                  {entry.description}
                </span>
                <span className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  {(entry.tags ?? []).map((tag) => (
                    <span key={tag} className="font-mono text-[0.64rem] uppercase tracking-[0.08em] text-text-faint">
                      {tag}
                    </span>
                  ))}
                  {(entry.links ?? []).map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent-gold hover:text-text-main"
                    >
                      {link.label} <ArrowUpRight className="size-3" />
                    </a>
                  ))}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
