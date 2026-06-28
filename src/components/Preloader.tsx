
import { useEffect, useState } from "react";

const lines = [
  { prompt: true,  text: "git clone github.com/Ganesh-krish/portfolio",    color: "#f1f5f9" },
  { prompt: false, text: "↳ cloning 5 projects · 15+ integrations",        color: "#4b5563" },
  { prompt: false, text: "import { Backend } from './warx-digital'",        color: "#93c5fd" },
  { prompt: false, text: "backend · php · mysql · firebase",                  color: "#c4b5fd" },
  { prompt: false, text: "compiled 1 yr of production experience",           color: "#4b5563" },
  { prompt: false, text: "✓  portfolio ready · launching now...",            color: "#4ade80" },
];

const STEP    = 290;
const TOTAL   = lines.length * STEP + 80;
const FADE    = TOTAL + 300;
const UNMOUNT = FADE + 700;

export function Preloader() {
  const [visible, setVisible] = useState(0);
  const [hiding,  setHiding]  = useState(false);
  const [gone,    setGone]    = useState(false);

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => t.push(setTimeout(() => setVisible(i + 1), 120 + i * STEP)));
    t.push(setTimeout(() => setHiding(true),  FADE));
    t.push(setTimeout(() => setGone(true),    UNMOUNT));
    return () => t.forEach(clearTimeout);
  }, []);

  if (gone) return null;

  const progress = Math.round((visible / lines.length) * 100);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #020817 0%, #0c0920 55%, #020c17 100%)",
        opacity: hiding ? 0 : 1,
        transform: hiding ? "translateY(-28px) scale(0.97)" : "translateY(0) scale(1)",
        transition: hiding
          ? "opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)"
          : "none",
        pointerEvents: hiding ? "none" : "all",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='white' stroke-opacity='0.025' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)" }} />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 65%)" }} />

      <div className="relative w-[520px] max-w-[94vw] px-4">

        {/* Identity */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0 font-display"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          >
            GK
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">K Ganesh Krishna</p>
            <p className="font-mono text-[10px]" style={{ color: "#4b5563" }}>Backend Developer · WarX Digital</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ade80" }} />
            <span className="font-mono text-[10px]" style={{ color: "#4ade80" }}>online</span>
          </div>
        </div>

        {/* Terminal window */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "#0d1117",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow:
              "0 0 0 1px rgba(37,99,235,0.10), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(37,99,235,0.06)",
          }}
        >
          {/* Title bar */}
          <div
            className="relative flex items-center px-4 py-3 select-none border-b"
            style={{ background: "#161b22", borderColor: "rgba(255,255,255,0.04)" }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-2 z-10">
              <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
              <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
            </div>
            {/* Centered label */}
            <span
              className="absolute left-1/2 -translate-x-1/2 font-mono text-[11px]"
              style={{ color: "#374151" }}
            >
              portfolio — zsh — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <div className="px-5 pt-5 pb-3 font-mono text-[12px] leading-7 min-h-[214px]">
            {lines.slice(0, visible).map((line, i) => {
              const isSuccess = line.text.startsWith("✓");
              return (
                <div key={i} className="flex items-start gap-2.5 preloader-line">
                  {/* Prompt glyph */}
                  {line.prompt ? (
                    <span className="select-none flex-shrink-0 mt-px" style={{ color: "#22c55e" }}>❯</span>
                  ) : isSuccess ? (
                    <span className="select-none flex-shrink-0 mt-px" style={{ color: "#22c55e" }}>✓</span>
                  ) : (
                    <span className="select-none flex-shrink-0 opacity-0">✓</span>
                  )}
                  <span style={{ color: line.color }}>
                    {isSuccess ? line.text.slice(2) : line.text}
                  </span>
                </div>
              );
            })}

            {/* Blinking block cursor */}
            {!hiding && visible < lines.length && (
              <div className="flex items-center gap-2.5">
                <span style={{ color: "#22c55e" }}>❯</span>
                <span
                  className="inline-block animate-pulse"
                  style={{ width: "8px", height: "14px", background: "#64748b", verticalAlign: "middle", marginTop: "4px" }}
                />
              </div>
            )}
          </div>

          {/* Separator */}
          <div className="mx-5 h-px" style={{ background: "rgba(255,255,255,0.04)" }} />

          {/* Progress */}
          <div className="px-5 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px]" style={{ color: "#374151" }}>loading portfolio</span>
              <span className="font-mono text-[10px] font-semibold" style={{ color: "#818cf8" }}>
                {progress}%
              </span>
            </div>
            <div className="h-[3px] rounded-full overflow-hidden" style={{ background: "#1c2128" }}>
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #2563EB 0%, #7C3AED 60%, #e11d48 100%)",
                  boxShadow: progress > 10 ? "0 0 8px rgba(124,58,237,0.45)" : "none",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
