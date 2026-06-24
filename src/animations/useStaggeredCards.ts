import { useAnimeReveal } from "./useAnimeReveal";

/**
 * Convenience wrapper around useAnimeReveal tuned for grids of cards:
 * each child marked `[data-card]` lifts and fades in with a tight stagger
 * as the grid scrolls into view.
 */
export function useStaggeredCards<T extends HTMLElement = HTMLElement>(
  staggerMs = 80
) {
  return useAnimeReveal<T>({
    selector: "[data-card]",
    y: 34,
    duration: 700,
    staggerMs,
    threshold: 0.1,
  });
}
