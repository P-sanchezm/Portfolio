/**
 * Fixed, decorative ambient background: deep navy base, faint technical grid,
 * and slowly drifting colored blobs. Purely cosmetic (aria-hidden) and CSS-
 * animated so it respects prefers-reduced-motion automatically.
 */
export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bg-main" />

      {/* technical grid, fading toward the edges */}
      <div className="bg-grid mask-radial absolute inset-0 opacity-50" />

      {/* drifting accent blobs */}
      <div
        className="ambient-blob animate-float-slow"
        style={{
          width: 540,
          height: 540,
          top: -160,
          left: -120,
          background:
            "radial-gradient(circle, rgba(0,194,168,0.45), transparent 70%)",
        }}
      />
      <div
        className="ambient-blob animate-drift"
        style={{
          width: 460,
          height: 460,
          top: "30%",
          right: -140,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)",
        }}
      />
      <div
        className="ambient-blob animate-float-slow"
        style={{
          width: 380,
          height: 380,
          bottom: -120,
          left: "30%",
          background:
            "radial-gradient(circle, rgba(214,170,79,0.22), transparent 70%)",
          animationDelay: "3s",
        }}
      />

      {/* top + bottom vignette to ground the content */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-main to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-main to-transparent" />
    </div>
  );
}
