
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useElementParallax } from "@/hooks/useParallax";

const highlights = [
  {
    label: "backend.php",
    title: "Backend Specialist",
    desc: "CodeIgniter 3 (PHP) — REST APIs, webhooks, business logic, DB schemas, auth, deployment. Full lifecycle ownership.",
    color: "#2563EB",
  },
  {
    label: "integrations.js",
    title: "15+ Integrations",
    desc: "Payments, compliance, biometric hardware, social platforms, cloud media, comms — all live in production.",
    color: "#7C3AED",
  },
  {
    label: "products.shipped",
    title: "5 Live Products",
    desc: "Sole backend dev on 5 simultaneous production systems — EdTech, Scholarship, ERP, B2B Ecommerce, Automation.",
    color: "#059669",
  },
];

const stats = [
  { value: "5",   label: "Products Shipped",    color: "#2563EB" },
  { value: "15+", label: "API Integrations",     color: "#7C3AED" },
  { value: "1yr", label: "Full-time Production", color: "#059669" },
];

export function About() {
  const sectionRef = useIntersectionObserver();
  const { ref: orbRef, offset: orbOffset } = useElementParallax<HTMLDivElement>(0.2);

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50" style={{ "--section-accent": "hsl(158,43%,33%)", "--section-accent-end": "hsl(158,50%,50%)" } as { [key: string]: string }}>
      <div
        ref={orbRef}
        aria-hidden="true"
        className="parallax-orb"
        style={{
          width: 400, height: 400,
          top: "5%", right: "-120px",
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          transform: `translateY(${orbOffset}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">

          {/* ── Header ── */}
          <div className="mb-10 stagger-item">
            <span className="section-eyebrow">who I am</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </div>

          {/* ── Row 1: Quote card + stat cards ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">

            {/* Quote — spans 8 cols */}
            <div
              className="lg:col-span-8 bento-card p-8 relative overflow-hidden stagger-item flex flex-col justify-between min-h-[210px]"
              style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.05),rgba(124,58,237,0.06))" }}
            >
              {/* Decorative glow blob */}
              <div
                aria-hidden="true"
                className="absolute -top-14 -right-14 w-44 h-44 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(124,58,237,0.14),transparent 70%)" }}
              />

              <div>
                <p className="font-mono-code text-xs text-slate-400 dark:text-slate-500 mb-4">/* about.md */</p>
                <blockquote className="text-2xl md:text-3xl font-bold font-display leading-tight text-slate-900 dark:text-slate-100">
                  "Most freshers have projects.
                  <br />
                  <span style={{ color: "#2563EB" }}>I have products."</span>
                </blockquote>
              </div>

              <div className="flex items-center gap-3 mt-8 flex-wrap">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
                >
                  GK
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-slate-100 font-display leading-tight">K Ganesh Krishna</p>
                  <p className="font-mono-code text-[10px] text-slate-400 dark:text-slate-500">Backend Developer · WarX Digital</p>
                </div>
                <div className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to work
                </div>
              </div>
            </div>

            {/* Stat cards — spans 4 cols, 3 rows */}
            <div className="lg:col-span-4 grid grid-rows-3 gap-4 stagger-item">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bento-card px-6 py-4 flex items-center gap-4 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  <span
                    className="text-3xl font-bold font-display leading-none tabular-nums w-14 flex-shrink-0"
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight block">{s.label}</span>
                    <div className="w-5 h-0.5 rounded-full mt-1.5" style={{ background: s.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Row 2: Bio card (full width) ── */}
          <div className="bento-card p-7 mb-4 stagger-item">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                I'm a backend developer specialising in{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-200">CodeIgniter (PHP)</span> — the kind
                of work that sits invisibly behind a product and keeps it running. API design, complex integrations,
                auth systems, database architecture, deployment. I own the full backend lifecycle.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                In my first year at{" "}
                <span className="font-semibold text-slate-900 dark:text-slate-200">WarX Digital</span>, I built and
                shipped 5 production systems used by real clients. I use AI-assisted workflows (Claude Code, Cursor) for frontend — so I can stay focused where I'm strongest: backend and integrations.
              </p>
            </div>
          </div>

          {/* ── Row 3: Feature cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bento-card p-6 flex flex-col gap-3 stagger-item hover:-translate-y-1 transition-transform duration-200"
                style={{ borderTop: `3px solid ${item.color}` }}
              >
                <span
                  className="font-mono-code text-[10px] font-semibold px-2 py-1 rounded-md self-start"
                  style={{ background: `${item.color}12`, color: item.color }}
                >
                  {item.label}
                </span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 font-display">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
