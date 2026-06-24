/**
 * Thin wrapper around Anime.js (v4) plus a few shared animation presets.
 *
 * Centralising the imports here means the rest of the app imports from one
 * place, and we can tweak global timing/easing in a single file.
 */
import { animate, createTimeline, stagger, svg, eases } from "animejs";

export { animate, createTimeline, stagger, svg, eases };

/** Returns true if the user has asked the OS for reduced motion. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Shared easing names (Anime.js v4 string eases). */
export const EASE = {
  out: "outExpo",
  outSoft: "outQuart",
  inOut: "inOutQuad",
  back: "outBack",
} as const;

/** Default reveal distance in pixels. */
export const REVEAL_Y = 28;
