
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowRight, Terminal, RefreshCw, Wrench, Server } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useScrollY } from "@/hooks/useParallax";
import { BentoProjectCards } from "./BentoProjectCards";

const slogans = [
  "Googled it. Broke it. Fixed it. Shipped it.",
  "Learning by building. Growing by shipping.",
  "From docs to production. One bug at a time.",
];

const roles = [
  "Backend Developer",
  "API Integration Engineer",
  "CodeIgniter · PHP · MySQL",
  "5 Products in Production",
];

const phrases = [
  { top: "code → debug",  bot: "→ deploy → repeat", color: "#2563EB", Icon: Terminal,  spin: false },
  { top: "lose → learn",  bot: "→ win → repeat",    color: "#7C3AED", Icon: RefreshCw, spin: true  },
  { top: "build → break", bot: "→ fix → ship",      color: "#059669", Icon: Wrench,    spin: false },
  { top: "stay backend.", bot: "always building.",   color: "#D97706", Icon: Server,    spin: false },
];

function PhraseCard({ top, bot, color, Icon, spin }: {
  top: string; bot: string; color: string;
  Icon: React.ComponentType<{ className?: string }>;
  spin: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col gap-2.5 p-4 rounded-2xl border cursor-default"
      style={{
        borderColor: hovered ? `${color}50` : `${color}28`,
        background: `${color}09`,
        boxShadow: hovered ? `0 10px 30px ${color}22` : "0 1px 3px rgba(0,0,0,0.04)",
        transform: hovered ? "translateY(-7px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center"
        style={{
          background: hovered ? `${color}22` : `${color}14`,
          color,
          transform: hovered
            ? spin ? "rotate(180deg) scale(1.1)" : "scale(1.18) rotate(-10deg)"
            : "none",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease",
        }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="font-mono-code text-[11px] font-bold leading-snug" style={{ color }}>
        {top}
      </div>
      <div className="font-mono-code text-[10px] leading-snug" style={{ color: `${color}99` }}>
        {bot}
      </div>
    </div>
  );
}



export function Hero() {
  const [roleIndex,   setRoleIndex]   = useState(0);
  const [roleKey,     setRoleKey]     = useState(0);
  const [sloganIndex, setSloganIndex] = useState(0);
  const [sloganKey,   setSloganKey]   = useState(0);
  const scrollY = useScrollY();

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
      setRoleKey((k) => k + 1);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSloganIndex((i) => (i + 1) % slogans.length);
      setSloganKey((k) => k + 1);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="relative min-h-[94vh] flex items-center overflow-hidden py-16 md:py-20 bg-white dark:bg-slate-950"
    >
      <div className="blob blob-1" aria-hidden="true" style={{ transform: `translateY(${scrollY * 0.14}px)` }} />
      <div className="blob blob-2" aria-hidden="true" style={{ transform: `translateY(${-scrollY * 0.1}px)` }} />
      <div className="absolute inset-0 dot-grid pointer-events-none" aria-hidden="true"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }} />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(37,99,235,0.04) 0%, transparent 70%)" }} />

      <div className="container px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-12 lg:gap-6 items-center">

          {/* ── LEFT: Text + Avatar + Stats ── */}
          <div
            className="flex flex-col gap-5 md:gap-6 order-1 text-center lg:text-left items-center lg:items-start"
            style={{ transform: `translateY(${scrollY * 0.04}px)`, transition: "transform 0.05s linear" }}
          >

            {/* Cycling slogan chip */}
            <div className="animate-fade-in" style={{ animationDelay: "50ms" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/60 dark:border-blue-800/50 bg-blue-50/60 dark:bg-blue-950/30 shadow-sm overflow-hidden">
                <span className="font-mono-code text-[11px] text-blue-500 dark:text-blue-400 select-none flex-shrink-0">//</span>
                <span
                  key={sloganKey}
                  className="animate-role-in text-xs font-medium text-slate-700 dark:text-slate-300 italic whitespace-nowrap"
                >
                  "{slogans[sloganIndex]}"
                </span>
              </div>
            </div>

            {/* ── Avatar + Name row ── */}
            <div className="animate-fade-in flex flex-col lg:flex-row items-center lg:items-start gap-5" style={{ animationDelay: "120ms" }}>
              <div className="relative flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-full blur-xl opacity-40 scale-110"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED, #059669)" }}
                />
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  aria-hidden="true"
                  style={{
                    background: "conic-gradient(from 0deg, #2563EB, #7C3AED, #059669, #2563EB)",
                    padding: "2px", margin: "-3px", borderRadius: "50%",
                    opacity: 0.7,
                  }}
                />
                <div
                  className="relative rounded-full p-[3px]"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED, #059669)" }}
                >
                  <div className="rounded-full p-[3px] bg-white dark:bg-slate-950">
                    <Avatar className="h-24 w-24 lg:h-28 lg:w-28 rounded-full">
                      <AvatarImage
                        src="/gk.webp"
                        alt="K Ganesh Krishna - Backend Developer"
                        loading="eager"
                        decoding="async"
                      />
                      <AvatarFallback
                        className="text-2xl font-bold rounded-full"
                        style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "#fff" }}
                      >
                        GK
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div
                  className="absolute bottom-1 right-1 w-5 h-5 rounded-full border-2 border-white dark:border-slate-950 bg-emerald-500 flex items-center justify-center z-10"
                  aria-hidden="true"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] lg:self-end">
                <span className="gradient-text-name block">K Ganesh</span>
                <span className="gradient-text-name block">Krishna</span>
              </h1>
            </div>

            {/* Role indicator */}
            <div className="animate-fade-in flex items-center gap-2 h-7" style={{ animationDelay: "260ms" }}>
              <Terminal className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" aria-hidden="true" />
              <span
                key={roleKey}
                className="animate-role-in font-mono-code text-sm sm:text-base font-medium text-blue-700 dark:text-blue-400"
                aria-live="polite"
                aria-atomic="true"
              >
                {roles[roleIndex]}
              </span>
              <span
                className="w-0.5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full"
                style={{ animation: "code-blink 1.2s step-end infinite" }}
                aria-hidden="true"
              />
            </div>

            {/* Bio */}
            <p
              className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-md animate-fade-in"
              style={{ animationDelay: "340ms" }}
            >
              Backend developer who ships real products, not tutorials.{" "}
              <span className="text-slate-900 dark:text-slate-200 font-semibold">
                5 live products · 15+ integrations · 1 year · All in production.
              </span>
            </p>

            {/* ── Phrase cards ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-md lg:max-w-none">
              {phrases.map((p, i) => (
                <div
                  key={p.top}
                  className="animate-fade-in"
                  style={{ animationDelay: `${440 + i * 90}ms` }}
                >
                  <PhraseCard {...p} />
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-in w-full sm:w-auto"
              style={{ animationDelay: "560ms" }}
            >
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 font-semibold h-11 px-6"
                  style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "#fff", border: "none" }}
                >
                  View Projects <ArrowRight size={16} />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold h-11 px-6 border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors w-full sm:w-auto"
                onClick={() => window.open("https://drive.google.com/file/d/137AkA3UMimqLFz0HuTo-LtRytha5-N6u/view?usp=drivesdk", "_blank")}
                aria-label="Download resume (opens in new tab)"
              >
                <Download size={16} /> Resume
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-1 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: "660ms" }}>
              <a
                href="https://linkedin.com/in/k-ganesh-krishna-584652364"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-slate-500 hover:text-[#0A66C2] hover:bg-[#0A66C2]/08 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Ganesh-krish"
                target="_blank" rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:ganeshkrishnak202@gmail.com"
                aria-label="Gmail"
                className="p-2 rounded-lg text-slate-500 hover:text-[#EA4335] hover:bg-[#EA4335]/08 transition-all"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/916380249114"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg text-slate-500 hover:text-[#25D366] hover:bg-[#25D366]/08 transition-all"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg text-slate-500 hover:text-[#E1306C] hover:bg-[#E1306C]/08 transition-all"
              >
                <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Bento project cards ── */}
          <div
            className="relative flex justify-center items-center order-2 animate-fade-in"
            style={{
              animationDelay: "200ms",
              transform: `translateY(${-scrollY * 0.08}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            <BentoProjectCards />
          </div>

        </div>
      </div>
    </section>
  );
}
