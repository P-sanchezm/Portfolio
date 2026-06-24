import { useState } from "react";
import { clsx } from "clsx";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { LogoBadge } from "../ui/LogoBadge";
import { Tag } from "../ui/Tag";
import { Icon } from "../ui/icons";
import { timeline, timelineFilters } from "../../data/combinedTimeline";
import type { TimelineEntry, TimelineType } from "../../types";
import { useStaggeredCards } from "../../animations/useStaggeredCards";

const typeIcon: Record<TimelineType, "graduation" | "briefcase" | "award"> = {
  education: "graduation",
  experience: "briefcase",
  accreditation: "award",
};

const typeLabel: Record<TimelineType, string> = {
  education: "Education",
  experience: "Experience",
  accreditation: "Accreditation",
};

function formatDates(entry: TimelineEntry): string {
  if (!entry.end || entry.end === entry.start) return entry.start;
  return `${entry.start} — ${entry.end}`;
}

function TimelineRow({ entry, last }: { entry: TimelineEntry; last: boolean }) {
  return (
    <div data-card className="reveal-init relative flex gap-4 sm:gap-6">
      {/* Rail */}
      <div className="relative flex flex-col items-center">
        <LogoBadge src={entry.logo} name={entry.organization} size={52} />
        {!last && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-glass-border to-transparent" />
        )}
      </div>

      {/* Card */}
      <GlassCard interactive className="mb-6 flex-1 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-green/10 px-3 py-1 text-xs font-medium text-accent-green">
            <Icon name={typeIcon[entry.type]} className="size-3.5" />
            {typeLabel[entry.type]}
          </span>
          <span className="rounded-full border border-glass-border px-3 py-1 font-mono text-xs text-text-muted">
            {formatDates(entry)}
          </span>
        </div>

        <h3 className="mt-3 font-display text-lg font-semibold text-text-main">
          {entry.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-accent-green/90">
          {entry.organization}
        </p>
        {entry.location && (
          <p className="mt-0.5 flex items-center gap-1 text-xs text-text-faint">
            <Icon name="mapPin" className="size-3" />
            {entry.location}
          </p>
        )}

        {entry.description && (
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {entry.description}
          </p>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}

        {entry.links && entry.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {entry.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent-green"
              >
                <Icon name={link.icon ?? "external"} className="size-4" />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </GlassCard>
    </div>
  );
}

/** Keyed by filter so the reveal animation replays on filter change. */
function TimelineList({ entries }: { entries: TimelineEntry[] }) {
  const ref = useStaggeredCards<HTMLDivElement>(70);
  return (
    <div ref={ref} className="mt-12">
      {entries.length === 0 ? (
        <p className="text-text-muted">Nothing here yet.</p>
      ) : (
        entries.map((entry, i) => (
          <TimelineRow
            key={entry.id}
            entry={entry}
            last={i === entries.length - 1}
          />
        ))
      )}
    </div>
  );
}

export function Timeline() {
  const [filter, setFilter] = useState<string>("all");

  const entries =
    filter === "all"
      ? timeline
      : timeline.filter((e) => e.type === filter);

  return (
    <Section id="timeline">
      <SectionHeader
        index="02"
        eyebrow="Journey"
        title="Education, experience & accreditations"
        description="Where I've studied, built and grown — across Madrid, Boston and Singapore."
      />

      {/* Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {timelineFilters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-sm transition-colors",
              filter === f.key
                ? "border-accent-green/40 bg-accent-green/10 text-accent-green"
                : "border-glass-border text-text-muted hover:text-text-main"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <TimelineList key={filter} entries={entries} />
    </Section>
  );
}
