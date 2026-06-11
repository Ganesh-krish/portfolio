
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef, useCallback } from "react";
import { useElementParallax } from "@/hooks/useParallax";

const skillCategories = [
  { name: "Languages",       file: "languages.php",    skills: ["PHP", "Python", "Java", "JavaScript", "HTML5", "CSS3", "C", "C++"],                                            color: "#2563EB", cardClass: "skill-card-blue"   },
  { name: "Frameworks",      file: "frameworks.py",    skills: ["CodeIgniter 3", "Laravel", "Django", "Flask", "Spring Boot", "Bootstrap", "jQuery", "AJAX"],                   color: "#7C3AED", cardClass: "skill-card-purple" },
  { name: "Databases",       file: "database.sql",     skills: ["MySQL", "Firebase Realtime DB", "MongoDB"],                                                                    color: "#0891B2", cardClass: "skill-card-cyan"   },
  { name: "Auth & Security", file: "auth.guard.ts",    skills: ["Google OAuth 2.0", "Zoho OAuth", "Firebase OTP", "MFA", "RBAC", "Burp Suite", "API Security"],                color: "#059669", cardClass: "skill-card-green"  },
  { name: "Tools & DevOps",  file: "devops.sh",        skills: ["Postman", "Swagger UI", "Git", "GitHub", "VS Code", "PyCharm", "cPanel", "OVI Panel", "PhpUnit"],              color: "#D97706", cardClass: "skill-card-orange" },
  { name: "AI Tools",        file: "ai.config.json",   skills: ["Claude Code", "Cursor", "Lovable", "Gemini", "Ollama", "Codex", "Perplexity", "Blackbox", "GitHub Copilot"], color: "#CA8A04", cardClass: "skill-card-yellow" },
];

const integrations = [
  { category: "Payments",   items: ["Zoho Pay", "Razorpay", "Stripe"],                              color: "#059669" },
  { category: "Compliance", items: ["Taxpro e-Invoice", "Taxpro e-Way Bill"],                      color: "#2563EB" },
  { category: "Auth",       items: ["Google OAuth", "Firebase OTP", "Zoho OAuth"],                 color: "#7C3AED" },
  { category: "Comms",      items: ["ZeptoMail", "Zoho SMTP", "Gmail SMTP", "Zoho SalesIQ"],       color: "#0891B2" },
  { category: "Media",      items: ["Cloudinary"],                                                  color: "#E11D48" },
  { category: "Dev Tools",  items: ["OneCompiler API"],                                             color: "#D97706" },
  { category: "Attendance", items: ["Etimeoffice Biometric"],                                       color: "#CA8A04" },
  { category: "Automation", items: ["Meta Graph API (Instagram)"],                                  color: "#7C3AED" },
  { category: "Calendar",   items: ["Google Calendar API"],                                         color: "#059669" },
];

function TiltCard({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateZ(4px)`;
  }, []);
  const onLeave = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);
  return (
    <div ref={ref} className={`tilt-card ${className ?? ""}`} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

export function Skills() {
  const sectionRef = useIntersectionObserver();
  const { ref: orbRef, offset: orbOffset } = useElementParallax<HTMLDivElement>(0.18);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      <div
        ref={orbRef}
        aria-hidden="true"
        className="parallax-orb"
        style={{
          width: 480, height: 480,
          top: "10%", left: "-140px",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          transform: `translateY(${orbOffset}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">

          <div className="mb-12 stagger-item">
            <span className="section-eyebrow">what I work with</span>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-line" />
          </div>

          {/* Skill grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {skillCategories.map((cat, i) => (
              <TiltCard key={i} className={`${cat.cardClass} p-5 stagger-item`}>
                {/* File-style header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <span className="font-mono-code text-xs font-medium" style={{ color: cat.color }}>
                    {cat.file}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display mb-3">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: `${cat.color}08`,
                        borderColor: `${cat.color}20`,
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Integrations */}
          <div className="stagger-item">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-slate-100">
                15+ Third-Party Integrations
              </h3>
              <span className="font-mono-code text-xs text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full">
                // all live in production
              </span>
            </div>

            <div className="glass-card p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {integrations.map((group, i) => (
                  <div key={i}>
                    <p
                      className="font-mono-code text-[10px] font-bold uppercase tracking-widest mb-2.5"
                      style={{ color: group.color }}
                    >
                      [{group.category}]
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item, j) => (
                        <span key={j} className="integration-pill">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
