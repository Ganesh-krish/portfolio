
import { useEffect, useState } from "react";

const lines = [
  { text: "git clone https://github.com/Ganesh-krish/portfolio", color: "#e2e8f0", prompt: true  },
  { text: "Cloning 3 repos · 5 products · 15+ integrations...",  color: "#64748b", prompt: false },
  { text: "import { Backend } from './warx-digital'",            color: "#93c5fd", prompt: false },
  { text: "const stack = ['PHP', 'CI3', 'MySQL', 'Firebase']",   color: "#c4b5fd", prompt: false },
  { text: "compiled 1yr of production experience",               color: "#64748b", prompt: false },
  { text: "✓  portfolio ready · launching now...",               color: "#4ade80", prompt: false },
];

const STEP   = 280;
const TOTAL  = lines.length * STEP + 100;
const FADE   = TOTAL + 150;
const UNMOUNT = FADE + 550;

export function Preloader() {
  const [visible, setVisible] = useState(0);
  const [hiding,  setHiding]  = useState(false);
  const [gone,    setGone]    = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) =>
      timers.push(setTimeout(() => setVisible(i + 1), 120 + i * STEP))
    );
    timers.push(setTimeout(() => setHiding(true),  FADE));
    timers.push(setTimeout(() => setGone(true),    UNMOUNT));
    return () => timers.forEach(clearTimeout);
  }, []);

  if (gone) return null;

  const progress = Math.round((visible / lines.length) * 100);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{
        background: "linear-gradient(135deg, #020817 0%, #0c0920 60%, #020c17 100%)",
        opacity: hiding ? 0 : 1,
        pointerEvents: hiding ? "none" : "all",
      }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 48 0 L 0 0 0 48' fill='none' stroke='white' stroke-opacity='0.03' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blue glow */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative w-[500px] max-w-[92vw] px-4">
        {/* GK logo */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-white text-sm font-bold font-display flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          >
            GK
          </div>
          <div>
            <p className="text-white text-sm font-semibold font-display leading-tight">K Ganesh Krishna</p>
            <p className="font-mono text-[10px] text-slate-500">Backend Developer</p>
          </div>
        </div>

        {/* Terminal window */}
        <div
          className="rounded-2xl overflow-hidden border border-slate-700/50"
          style={{ background: "#0d1117" }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-700/40"
            style={{ background: "#161b22" }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
            <span className="ml-auto font-mono text-[10px] text-slate-500 select-none">portfolio — bash — 80×24</span>
          </div>

          {/* Terminal body */}
          <div className="px-5 pt-5 pb-4 font-mono text-xs leading-6 min-h-[210px]">
            {lines.slice(0, visible).map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-2 preloader-line"
              >
                {line.prompt && (
                  <span className="select-none flex-shrink-0" style={{ color: "#22c55e" }}>~$</span>
                )}
                {!line.prompt && line.text.startsWith("✓") && (
                  <span className="select-none flex-shrink-0" style={{ color: "#22c55e" }}>  </span>
                )}
                {!line.prompt && !line.text.startsWith("✓") && (
                  <span className="select-none flex-shrink-0 opacity-0">  </span>
                )}
                <span style={{ color: line.color }}>
                  {line.text.startsWith("✓") ? line.text : line.text}
                </span>
              </div>
            ))}
            {/* blinking cursor */}
            {!hiding && visible < lines.length && (
              <div className="flex items-center gap-2">
                <span style={{ color: "#22c55e" }}>~$</span>
                <span className="animate-pulse text-slate-400">▋</span>
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="px-5 pb-5 pt-1">
            <div className="h-[2px] rounded-full overflow-hidden" style={{ background: "#1c2128" }}>
              <div
                className="h-full rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #2563EB, #7C3AED)",
                }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-mono text-[10px] text-slate-600">initializing</span>
              <span className="font-mono text-[10px]" style={{ color: "#818cf8" }}>
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
