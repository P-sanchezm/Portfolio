import { useEffect, useRef } from "react";
import {
  createTimeline,
  stagger,
  svg,
  prefersReducedMotion,
  EASE,
} from "./anime";

/**
 * Orchestrates the hero entrance with an Anime.js timeline:
 *   1. headline lines stagger up
 *   2. decorative SVG orbit lines draw themselves
 *   3. the glass profile card lifts + scales in
 *   4. supporting text / buttons / chips fade up
 *
 * Mark elements in the hero JSX with the matching data attributes.
 */
export function useHeroAnimation<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const q = (s: string) => Array.from(el.querySelectorAll<HTMLElement>(s));
    const lines = q("[data-hero-line]");
    const fades = q("[data-hero-fade]");
    const cards = q("[data-hero-card]");
    const draws = q("[data-hero-draw]");
    const all = [...lines, ...fades, ...cards];

    // Reduced motion: reveal instantly, skip the timeline entirely.
    if (prefersReducedMotion()) {
      all.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      return;
    }

    const tl = createTimeline({ defaults: { ease: EASE.out } });

    if (lines.length) {
      tl.add(
        lines,
        {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          delay: stagger(110),
        },
        0
      );
    }

    if (draws.length) {
      try {
        tl.add(
          svg.createDrawable(draws),
          { draw: ["0 0", "0 1"], duration: 1700, ease: EASE.inOut },
          150
        );
      } catch {
        /* createDrawable can throw on non-path SVGs — safe to ignore */
      }
    }

    if (cards.length) {
      tl.add(
        cards,
        {
          opacity: [0, 1],
          translateY: [44, 0],
          scale: [0.97, 1],
          duration: 950,
        },
        300
      );
    }

    if (fades.length) {
      tl.add(
        fades,
        {
          opacity: [0, 1],
          translateY: [22, 0],
          duration: 650,
          delay: stagger(85),
        },
        550
      );
    }

    return () => {
      tl.pause();
    };
  }, []);

  return ref;
}
