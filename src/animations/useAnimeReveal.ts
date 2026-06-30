import { useEffect, useRef } from "react";
import { animate, stagger, prefersReducedMotion, EASE, REVEAL_Y } from "./anime";

interface RevealOptions {
  /** Child selector to stagger in. Defaults to "[data-reveal]" children;
   *  if none are found, the element itself is revealed. */
  selector?: string;
  y?: number;
  duration?: number;
  staggerMs?: number;
  threshold?: number;
  /** Only animate the first time it enters the viewport. Default true. */
  once?: boolean;
}

/**
 * Scroll-triggered reveal powered by IntersectionObserver + Anime.js.
 * Attach the returned ref to a container; children marked with the
 * `reveal-init` class (and matching `selector`) fade + slide in with a stagger.
 */
export function useAnimeReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {}
) {
  const {
    selector = "[data-reveal]",
    y = REVEAL_Y,
    duration = 750,
    staggerMs = 90,
    threshold = 0.15,
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const found = selector ? el.querySelectorAll<HTMLElement>(selector) : [];
    const targets: HTMLElement[] = found.length ? Array.from(found) : [el];

    // Reduced motion (or no IO support): show everything immediately.
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      return;
    }

    let done = false;
    const reveal = () => {
      // Promote to a GPU layer only for the duration of the animation, then
      // release it so we don't keep a `will-change` layer alive per card.
      targets.forEach((t) => (t.style.willChange = "transform, opacity"));
      animate(targets, {
        opacity: [0, 1],
        translateY: [y, 0],
        duration,
        delay: stagger(staggerMs),
        ease: EASE.out,
        onComplete: () => targets.forEach((t) => (t.style.willChange = "")),
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            if (once) {
              observer.disconnect();
              done = true;
            }
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => {
      if (!done) observer.disconnect();
    };
  }, [selector, y, duration, staggerMs, threshold, once]);

  return ref;
}
