import { useEffect, useRef } from "react";

/**
 * Reading-progress bar that lives just under the navbar pill and matches its
 * width. Scroll-linked (passive listener + scaleX transform) so it tracks the
 * scrollbar exactly and stays cheap on the main thread.
 *
 * Note: the transform is driven entirely from inline style. We deliberately
 * avoid Tailwind's `scale-x-*` utilities — in Tailwind v4 those compile to the
 * CSS `scale` property, which would multiply against this transform and pin the
 * bar to zero width.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let ticking = false;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(doc.scrollTop / max, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="pointer-events-none h-1 w-full overflow-hidden bg-glass-border"
      aria-hidden
    >
      <div
        ref={barRef}
        className="relative h-full w-full bg-accent-gold"
        style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          fill="none"
          className="absolute right-0 top-1/2 size-2.5 -translate-y-1/2 text-accent-gold"
        >
          <path
            d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
