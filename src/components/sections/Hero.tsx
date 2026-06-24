import { useState } from "react";
import { MapPin } from "lucide-react";
import { profile } from "../../data/profile";
import { Button } from "../ui/Button";
import { useHeroAnimation } from "../../animations/useHeroAnimation";

/** Profile photo with an initials-gradient fallback. */
function Avatar() {
  const [errored, setErrored] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  if (!profile.photo || errored) {
    return (
      <div className="flex size-full items-center justify-center bg-gradient-to-br from-accent-teal/30 via-bg-secondary to-accent-blue/30">
        <span className="font-display text-4xl font-bold text-gradient">
          {initials}
        </span>
      </div>
    );
  }
  return (
    <img
      src={profile.photo}
      alt={profile.name}
      onError={() => setErrored(true)}
      className="size-full object-cover"
    />
  );
}

export function Hero() {
  const heroRef = useHeroAnimation<HTMLDivElement>();

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: copy */}
        <div>
          <span
            data-hero-fade
            className="glass-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-text-muted"
            style={{ opacity: 0 }}
          >
            <span className="size-2 animate-pulse rounded-full bg-accent-green" />
            Open to internships & collaborations
          </span>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span
              data-hero-line
              className="block text-text-main"
              style={{ opacity: 0 }}
            >
              Pablo
            </span>
            <span
              data-hero-line
              className="block text-gradient"
              style={{ opacity: 0 }}
            >
              Sánchez
            </span>
          </h1>

          <p
            data-hero-line
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl"
            style={{ opacity: 0 }}
          >
            {profile.headline}
          </p>

          <p
            data-hero-fade
            className="mt-4 text-sm font-medium tracking-wide text-text-faint"
            style={{ opacity: 0 }}
          >
            Industrial Engineering + Business Administration
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>
            ICAI–ICADE · Boston University · Singapore Management University
          </p>

          <div
            data-hero-fade
            className="mt-8 flex flex-wrap gap-3"
            style={{ opacity: 0 }}
          >
            <Button href="#projects" variant="primary" magnetic iconRight="layers">
              View Projects
            </Button>
            <Button
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              variant="gold"
              icon="download"
            >
              Download CV
            </Button>
            <Button
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              icon="linkedin"
            >
              LinkedIn
            </Button>
          </div>
        </div>

        {/* Right: profile card + orbit */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">
          {/* Decorative orbit (drawn by Anime.js) */}
          <svg
            viewBox="0 0 400 400"
            className="pointer-events-none absolute -inset-10 -z-0 size-[120%] opacity-70"
            aria-hidden
          >
            <defs>
              <linearGradient id="orbit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#4fffd2" />
                <stop offset="1" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <g
              fill="none"
              stroke="url(#orbit)"
              strokeWidth="1"
              strokeOpacity="0.5"
            >
              <ellipse data-hero-draw cx="200" cy="200" rx="180" ry="150" />
              <ellipse
                data-hero-draw
                cx="200"
                cy="200"
                rx="150"
                ry="185"
                transform="rotate(30 200 200)"
              />
              <circle data-hero-draw cx="200" cy="200" r="120" />
            </g>
            <circle cx="380" cy="200" r="4" fill="#4fffd2" className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }} />
          </svg>

          {/* Profile card */}
          <div data-hero-card className="relative" style={{ opacity: 0 }}>
            <div className="animate-float-slow">
              <div className="glass gradient-border rounded-3xl p-5">
                <div className="aspect-square overflow-hidden rounded-2xl border border-glass-border">
                  <Avatar />
                </div>

                <div className="mt-5">
                  <h2 className="font-display text-xl font-semibold text-text-main">
                    {profile.name}
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">
                    {profile.current}
                  </p>
                </div>

                {/* Location chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {profile.locations.map((loc) => (
                    <span
                      key={loc}
                      className="inline-flex items-center gap-1 rounded-full border border-glass-border bg-white/5 px-3 py-1 text-xs text-text-muted"
                    >
                      <MapPin className="size-3 text-accent-green" />
                      {loc}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-glass-border pt-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-sm font-semibold text-accent-green">
                        {stat.value.split(" ")[0]}
                      </div>
                      <div className="mt-0.5 text-[0.7rem] leading-tight text-text-faint">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-glass-border p-1">
          <div className="size-1.5 animate-bounce rounded-full bg-accent-green" />
        </div>
      </div>
    </section>
  );
}
