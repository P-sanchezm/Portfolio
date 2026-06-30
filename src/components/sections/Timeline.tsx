import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { LogoBadge } from "../ui/LogoBadge";
import { Icon } from "../ui/icons";
import { timeline } from "../../data/combinedTimeline";
import type { TimelineEntry } from "../../types";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

/** Leading 4-digit year of an entry's start, for chronological ordering. */
const startYear = (entry: TimelineEntry): number =>
  parseInt(entry.start, 10) || 0;

/** Oldest → newest, so the strip reads left-to-right as a journey. */
const journey = [...timeline].sort((a, b) => startYear(a) - startYear(b));

function formatRange(entry: TimelineEntry): string {
  if (!entry.end || entry.end === entry.start) return entry.start;
  return `${entry.start} – ${entry.end}`;
}

/** A single stop on the journey: logo, dates, place and organization. */
function Stop({ entry }: { entry: TimelineEntry }) {
  return (
    <li
      data-card
      className="reveal-init relative flex flex-1 items-start gap-4 sm:flex-col sm:items-center sm:gap-3 sm:text-center"
    >
      <LogoBadge
        src={entry.logo}
        name={entry.organization}
        size={48}
        className="relative z-10"
      />
      <div className="min-w-0">
        <p className="font-mono text-xs text-accent-green">
          {formatRange(entry)}
        </p>
        {entry.location && (
          <p className="mt-1 flex items-center gap-1 font-display text-sm font-semibold text-text-main sm:justify-center">
            <Icon name="mapPin" className="size-3.5 shrink-0 text-text-faint" />
            {entry.location}
          </p>
        )}
        <p className="mt-0.5 text-xs text-text-muted">{entry.organization}</p>
      </div>
    </li>
  );
}

export function Timeline() {
  const ref = useStaggeredCards<HTMLUListElement>(70);

  return (
    <Section id="timeline" spacing="tight">
      <SectionHeader
        index="02"
        eyebrow="Journey"
        title="The path so far"
        description="Madrid, Boston and Singapore — where I've studied, built and grown."
      />

      <ul
        ref={ref}
        className="relative mt-12 flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-4"
      >
        {/* Connecting rail — vertical on mobile, horizontal through the badges on desktop. */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-6 top-2 w-px bg-gradient-to-b from-transparent via-glass-border to-transparent sm:inset-x-6 sm:bottom-auto sm:top-6 sm:h-px sm:w-auto sm:bg-gradient-to-r"
        />
        {journey.map((entry) => (
          <Stop key={entry.id} entry={entry} />
        ))}
      </ul>
    </Section>
  );
}
