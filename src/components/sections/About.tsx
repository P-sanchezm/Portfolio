import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { profile } from "../../data/profile";
import { aboutPillars } from "../../data/interests";
import { useAnimeReveal } from "../../animations/useAnimeReveal";

export function About() {
  const ref = useAnimeReveal<HTMLDivElement>({ selector: "[data-reveal]" });

  return (
    <Section id="about">
      <div ref={ref}>
        <SectionHeader
          index="02"
          eyebrow="About"
          title="One degree was never going to be enough."
          description="Industrial engineering gives me the systems; business gives me the questions around them; software is often how I turn both into something usable."
        />

        <div className="mt-12 grid gap-12 border-t border-glass-border pt-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-reveal className="reveal-init">
            <p className="max-w-3xl font-display text-2xl leading-relaxed text-text-main sm:text-3xl">
              {profile.bio}
            </p>
          </div>

          <ol className="border-t border-glass-border lg:border-t-0">
            {aboutPillars.map((pillar, index) => (
              <li
                key={pillar.title}
                data-reveal
                className="reveal-init grid grid-cols-[2.5rem_1fr] gap-3 border-b border-glass-border py-6"
              >
                <span className="font-mono text-xs text-accent-gold">0{index + 1}</span>
                <span>
                  <strong className="block font-display text-2xl font-medium text-text-main">
                    {pillar.title}
                  </strong>
                  <span className="mt-2 block text-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
