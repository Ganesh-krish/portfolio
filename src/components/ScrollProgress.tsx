import { useScrollProgress } from "@/hooks/useParallax";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress * 100)}
      className="fixed top-0 left-0 z-50 h-[3px] pointer-events-none"
      style={{
        width: `${progress * 100}%`,
        background: "linear-gradient(90deg, #58a6ff, #a855f7, #22d3ee)",
        boxShadow: "0 0 8px rgba(88,166,255,0.6)",
        transition: "width 0.05s linear",
      }}
    />
  );
}
