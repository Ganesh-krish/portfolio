
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, ArrowRight, Terminal, RefreshCw, Wrench, Server } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollY } from "@/hooks/useParallax";

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

/* ── Tech badges with brand logos ── */
const techBadges = [
  { name: "PHP",         logo: "https://cdn.simpleicons.org/php/777BB4",        color: "#777BB4", x: "-20%", y: "4%",  delay: "0s",   anim: "animate-float" },
  { name: "MySQL",       logo: "https://cdn.simpleicons.org/mysql/4479A1",       color: "#4479A1", x: "100%", y: "4%",  delay: "1s",   anim: "animate-float-alt" },
  { name: "React",       logo: "https://cdn.simpleicons.org/react/61DAFB",       color: "#61DAFB", x: "-22%", y: "24%", delay: "0.3s", anim: "animate-float-alt" },
  { name: "Git",         logo: "https://cdn.simpleicons.org/git/F05032",         color: "#F05032", x: "101%", y: "24%", delay: "1.3s", anim: "animate-float" },
  { name: "CodeIgniter", logo: "https://cdn.simpleicons.org/codeigniter/DD4814", color: "#DD4814", x: "-24%", y: "46%", delay: "0.5s", anim: "animate-float-alt" },
  { name: "Firebase",    logo: "https://cdn.simpleicons.org/firebase/FF6D00",    color: "#FF6D00", x: "102%", y: "46%", delay: "1.5s", anim: "animate-float" },
  { name: "Docker",      logo: "https://cdn.simpleicons.org/docker/2496ED",      color: "#2496ED", x: "-23%", y: "67%", delay: "0.6s", anim: "animate-float" },
  { name: "Vue.js",      logo: "https://cdn.simpleicons.org/vuedotjs/4FC08D",    color: "#4FC08D", x: "101%", y: "67%", delay: "2s",   anim: "animate-float-alt" },
  { name: "Razorpay",    logo: "https://cdn.simpleicons.org/razorpay/2563EB",    color: "#2563EB", x: "-18%", y: "87%", delay: "0.8s", anim: "animate-float" },
  { name: "Postman",     logo: "https://cdn.simpleicons.org/postman/FF6C37",     color: "#FF6C37", x: "100%", y: "87%", delay: "1.8s", anim: "animate-float-alt" },
];

/* ── Code syntax token helpers ── */
type Tok = { t: string; c?: string };
type Line = Tok[];

const codeLines: Line[] = [
  [{ t: "<?php", c: "code-cmt" }],
  [],
  [{ t: "/**", c: "code-cmt" }],
  [{ t: ' * "Most freshers have projects.', c: "code-cmt" }],
  [{ t: ' *  I have products."', c: "code-cmt" }],
  [{ t: " */", c: "code-cmt" }],
  [],
  [
    { t: "class ", c: "code-kw" },
    { t: "GaneshKrishna ", c: "code-cls" },
    { t: "extends ", c: "code-kw" },
    { t: "BackendDev", c: "code-cls" },
    { t: " {" },
  ],
  [],
  [
    { t: "  " }, { t: "protected ", c: "code-kw" },
    { t: "$stack", c: "code-var" }, { t: " = " },
    { t: "'PHP · CI3 · MySQL'", c: "code-str" }, { t: ";" },
  ],
  [
    { t: "  " }, { t: "protected ", c: "code-kw" },
    { t: "$products", c: "code-var" }, { t: " = " },
    { t: "5", c: "code-num" }, { t: "; " },
    { t: "// live in production", c: "code-cmt" },
  ],
  [],
  [
    { t: "  " }, { t: "public function ", c: "code-kw" },
    { t: "philosophy", c: "code-fn" }, { t: "(): " },
    { t: "string", c: "code-kw" }, { t: " {" },
  ],
  [
    { t: "    " }, { t: "return ", c: "code-kw" },
    { t: "'Ship real products, not tutorials.'", c: "code-str" }, { t: ";" },
  ],
  [{ t: "  }" }],
  [],
  [
    { t: "  " }, { t: "public function ", c: "code-kw" },
    { t: "daily", c: "code-fn" }, { t: "(): " },
    { t: "never", c: "code-kw" }, { t: " {" },
  ],
  [
    { t: "    " }, { t: "while", c: "code-kw" },
    { t: "(" }, { t: "true", c: "code-num" }, { t: ") {" },
  ],
  [
    { t: "      " }, { t: "$this", c: "code-var" },
    { t: "->" }, { t: "code", c: "code-fn" },
    { t: "()   " }, { t: "// write it", c: "code-cmt" },
  ],
  [
    { t: "           ->" }, { t: "debug", c: "code-fn" },
    { t: "()  " }, { t: "// break it", c: "code-cmt" },
  ],
  [
    { t: "           ->" }, { t: "ship", c: "code-fn" },
    { t: "();   " }, { t: "// deploy it", c: "code-cmt" },
  ],
  [{ t: "    }" }],
  [{ t: "  }" }],
  [{ t: "}" }],
];

function CodeQuote() {
  const [visible,  setVisible]  = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  // cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorOn(c => !c), 530);
    return () => clearInterval(id);
  }, []);

  // type each line progressively — empty lines appear faster
  useEffect(() => {
    if (visible >= codeLines.length) return;
    const delay = codeLines[visible].length === 0 ? 55 : 108;
    const t = setTimeout(() => setVisible(v => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  const typing = visible < codeLines.length;

  return (
    <div
      className="terminal-card w-full select-none"
      aria-hidden="true"
      style={{ maxWidth: 500 }}
    >
      {/* ── Title bar ── */}
      <div className="terminal-chrome" style={{ justifyContent: "flex-start" }}>
        <div className="terminal-dot" style={{ background: "#FF5F56" }} />
        <div className="terminal-dot" style={{ background: "#FFBD2E" }} />
        <div className="terminal-dot" style={{ background: "#27C93F" }} />
        <span className="terminal-filename" style={{ marginLeft: 10 }}>GaneshKrishna.php</span>
        <span style={{ marginLeft: "auto", fontSize: 9, color: "#475569", fontFamily: "JetBrains Mono,monospace" }}>PHP 8.2</span>
      </div>

      {/* ── Tab bar ── */}
      <div style={{ background: "#1e1e1e", borderBottom: "1px solid #252526", display: "flex", alignItems: "stretch", padding: "0 8px", height: 30 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "0 12px", background: "#1e1e1e", borderTop: "1.5px solid #2563EB", fontSize: 10.5, color: "#cccccc", fontFamily: "JetBrains Mono,monospace" }}>
          <span style={{ color: "#7DBCFF", fontSize: 9 }}>🐘</span>
          <span>GaneshKrishna.php</span>
        </div>
      </div>

      {/* ── Editor area ── */}
      <div
        className="terminal-body"
        style={{ display: "flex", gap: 0, padding: "14px 0", fontSize: "0.75rem", lineHeight: 1.72, overflowX: "hidden" }}
      >
        {/* Line numbers — dim until revealed */}
        <div style={{
          userSelect: "none", paddingRight: 14, paddingLeft: 12,
          textAlign: "right", minWidth: 42, flexShrink: 0,
          fontFamily: "JetBrains Mono, monospace",
        }}>
          {codeLines.map((_, i) => (
            <div
              key={i}
              style={{
                height: "1.72em",
                color: i < visible ? "#555e6e" : "#242a34",
                transition: "color 0.18s ease",
              }}
            >
              {i + 1}
            </div>
          ))}
        </div>

        {/* Code — lines appear one by one with slide-in */}
        <div style={{ flex: 1, paddingRight: 16, fontFamily: "JetBrains Mono, monospace", whiteSpace: "pre", overflowX: "hidden" }}>
          {codeLines.map((line, i) => (
            <div
              key={i}
              style={{
                height: "1.72em",
                display: "flex",
                alignItems: "center",
                opacity: i < visible ? 1 : 0,
                animation: i === visible - 1 ? "typeLine 0.13s ease-out both" : undefined,
              }}
            >
              {i < visible && (
                <>
                  {line.length === 0
                    ? <span>&#8203;</span>
                    : line.map((tok, j) => <span key={j} className={tok.c ?? ""}>{tok.t}</span>)
                  }
                  {/* cursor tracks the active line while typing, stays at last line when done */}
                  {((typing && i === visible - 1) || (!typing && i === codeLines.length - 1)) && (
                    <span style={{
                      display: "inline-block", width: 1.5, height: "0.9em",
                      background: cursorOn ? "#60A5FA" : "transparent",
                      marginLeft: 1, verticalAlign: "middle", transition: "background 0.08s",
                    }} />
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Status bar — Ln updates live while typing ── */}
      <div style={{
        height: 22, background: "#0078d4", display: "flex", alignItems: "center",
        padding: "0 12px", gap: 16, fontFamily: "JetBrains Mono, monospace",
        fontSize: 10, color: "rgba(255,255,255,0.75)", flexShrink: 0,
      }}>
        <span>⎇ main</span>
        <span style={{ marginLeft: "auto" }}>Ln {Math.min(visible, codeLines.length)}, Col 2</span>
        <span>UTF-8</span>
        <span>PHP</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Text + Avatar + Stats ── */}
          <div
            className="flex flex-col gap-5 md:gap-6 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start"
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
                        alt="K Ganesh Krishna — Backend Developer"
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

          {/* ── RIGHT: Code quote card + floating badges ── */}
          <div
            className="relative flex justify-center items-center order-1 lg:order-2 animate-fade-in"
            style={{
              animationDelay: "200ms",
              transform: `translateY(${-scrollY * 0.08}px)`,
              transition: "transform 0.05s linear",
            }}
          >
            {/* Mobile */}
            <div className="lg:hidden w-full max-w-sm mx-auto">
              <CodeQuote />
            </div>

            {/* Desktop: code card with floating tech badges */}
            <div className="hidden lg:block relative w-full max-w-lg">
              {/* Floating tech badges */}
              {techBadges.map((badge, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className={`float-code-tag ${badge.anim} flex items-center gap-1.5`}
                  style={{
                    left: badge.x,
                    top: badge.y,
                    animationDelay: badge.delay,
                    zIndex: 10,
                  }}
                >
                  <img src={badge.logo} alt={badge.name} className="w-4 h-4 flex-shrink-0" style={{ objectFit: "contain" }} />
                  <span style={{ color: badge.color }}>{badge.name}</span>
                </div>
              ))}

              {/* Code card */}
              <CodeQuote />

              {/* "15+ APIs" badge */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-5 z-20 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg text-xs font-mono-code text-slate-600 dark:text-slate-400 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-emerald-500 font-bold">✓</span> 15+ APIs integrated
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
