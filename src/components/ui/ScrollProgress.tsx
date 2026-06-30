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
      className="pointer-events-none mt-2 h-[6px] w-full max-w-6xl overflow-hidden rounded-full bg-white/5"
      aria-hidden
    >
      <div
        ref={barRef}
        className="h-full w-full rounded-full bg-gradient-to-r from-accent-green via-accent-blue to-accent-gold shadow-[0_0_12px_var(--green-glow)]"
        style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
      />
    </div>
  );
}
