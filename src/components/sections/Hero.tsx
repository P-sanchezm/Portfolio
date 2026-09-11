import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
import { getCvRequestUrl } from "../../lib/email";
import { useHeroAnimation } from "../../animations/useHeroAnimation";

function Portrait() {
  const [errored, setErrored] = useState(false);

  if (!profile.photo || errored) {
    return (
      <div className="bg-grid flex h-full items-center justify-center bg-bg-secondary">
        <span className="font-display text-7xl text-accent-gold">PS</span>
      </div>
    );
  }

  return (
    <img
      src={profile.photo}
      alt="Pablo Sánchez in the mountains wearing a Boston University jacket"
      onError={() => setErrored(true)}
      fetchPriority="high"
      className="h-full w-full object-cover object-[center_48%]"
    />
  );
}

export function Hero() {
  const heroRef = useHeroAnimation<HTMLDivElement>();

  return (
    <section id="home" ref={heroRef} className="pt-28 pb-10 sm:pt-32 sm:pb-16">
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid items-stretch gap-8 border-b border-glass-border pb-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:pb-12">
          <div className="min-w-0 flex flex-col justify-between py-1 lg:min-h-[34rem]">
            <p
              data-hero-fade
              className="font-mono text-xs uppercase tracking-[0.16em] text-text-faint"
              style={{ opacity: 0 }}
            >
              Portfolio / 2026
            </p>

            <div className="my-12 lg:my-8">
              <h1 className="font-display text-[clamp(3rem,7vw,7.5rem)] font-medium uppercase leading-[0.82] tracking-[0.01em] text-text-main">
                <span data-hero-line className="block" style={{ opacity: 0 }}>
                  Pablo
                </span>
                <span data-hero-line className="block" style={{ opacity: 0 }}>
                  Sánchez
                </span>
              </h1>

              <p
                data-hero-line
                className="mt-8 font-display text-2xl text-accent-green sm:text-3xl"
                style={{ opacity: 0 }}
              >
                {profile.headline}
              </p>
              <p
                data-hero-fade
                className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
                style={{ opacity: 0 }}
              >
                I like projects where physical systems, digital tools and
                practical decisions meet.
              </p>
              <p
                data-hero-fade
                className="mt-6 font-display text-xl italic text-accent-green sm:text-2xl"
                style={{ opacity: 0 }}
              >
                Madrid → Boston → Singapore, 2027
              </p>
            </div>

            <div
              data-hero-fade
              className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-glass-border pt-5"
              style={{ opacity: 0 }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-gold transition-colors hover:text-text-main"
              >
                Selected work <ArrowDown className="size-4" />
              </a>
              <a
                href={getCvRequestUrl()}
                className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-main"
              >
                Request CV <ArrowUpRight className="size-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-main"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <figure data-hero-card className="relative h-[29rem] self-start overflow-hidden lg:h-[34rem]" style={{ opacity: 0 }}>
            <Portrait />
            <figcaption className="absolute inset-x-0 bottom-0 flex justify-between bg-bg-main/90 px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-text-muted">
              <span>Field note 01</span>
              <span>Somewhere between projects</span>
            </figcaption>
          </figure>
        </div>

        <dl className="grid border-b border-glass-border sm:grid-cols-3">
          {profile.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-glass-border py-5 last:border-b-0 sm:block sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="font-mono text-xs text-accent-gold">0{index + 1}</dt>
              <dd>
                <span className="block text-sm font-medium text-text-main">{stat.value}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.12em] text-text-faint">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
