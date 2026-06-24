import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Icon } from "../ui/icons";
import { profile } from "../../data/profile";
import { aboutPillars } from "../../data/interests";
import { useAnimeReveal } from "../../animations/useAnimeReveal";

export function About() {
  const ref = useAnimeReveal<HTMLDivElement>({ selector: "[data-reveal]" });

  return (
    <Section id="about">
      <div ref={ref}>
        <SectionHeader
          index="01"
          eyebrow="Profile"
          title={
            <>
              Technical, but <span className="text-gradient">not only</span>{" "}
              technical.
            </>
          }
        />

        <p
          data-reveal
          className="reveal-init mt-6 max-w-3xl text-lg leading-relaxed text-text-muted"
        >
          {profile.bio}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutPillars.map((pillar, i) => (
            <GlassCard
              key={pillar.title}
              interactive
              data-reveal
              className="reveal-init p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent-green/10 text-accent-green">
                  <Icon name={pillar.icon} className="size-6" />
                </span>
                <span className="font-mono text-sm text-text-faint">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-text-main">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {pillar.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  );
}
