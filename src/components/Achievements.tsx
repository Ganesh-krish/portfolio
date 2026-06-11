
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ExternalLink } from "lucide-react";
import { useRef, useCallback } from "react";

const achievements = [
  {
    number: "01",
    title: "Published Research Paper",
    description: "\"Blockchain-based Bank Transaction Traceability\" — IRJMETS, February 2025. Blockchain in banking for transparent, tamper-proof transaction records.",
    link: "https://drive.google.com/file/d/10DJav9VZBOnTouBTbo77SfgHaKhYQVgh/view?usp=sharing",
    linkText: "View Paper",
    color: "#D97706",
    bg: "rgba(217,119,6,0.06)",
  },
  {
    number: "02",
    title: "5 Products in First Year",
    description: "Built and shipped 5 live SaaS products in the first year of full-time employment — DrillU, LifeBoat, Swastik ERP, Swastik Ecommerce, and Surge.",
    color: "#2563EB",
    bg: "rgba(37,99,235,0.06)",
  },
  {
    number: "03",
    title: "15+ API Integrations",
    description: "Government APIs, payment gateways, biometric hardware, social media platforms, cloud services — all integrated and running in live production systems.",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.06)",
  },
];

function AchievementCard({ item }: { item: typeof achievements[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -10;
    el.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateZ(6px)`;
  }, []);
  const onLeave = useCallback(() => { if (ref.current) ref.current.style.transform = ""; }, []);

  return (
    <div
      ref={ref}
      className="bento-card p-6 flex flex-col gap-3 stagger-item"
      style={{ background: item.bg, borderTop: `2px solid ${item.color}30` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Number watermark */}
      <span
        className="text-6xl md:text-7xl font-bold font-display leading-none select-none"
        style={{ color: `${item.color}18` }}
        aria-hidden="true"
      >
        {item.number}
      </span>

      <div className="flex flex-col gap-2 mt-1">
        <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 font-display leading-snug" style={{ color: item.color }}>
          {item.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold hover:underline mt-1"
            style={{ color: item.color }}
          >
            <ExternalLink className="h-3 w-3" /> {item.linkText}
          </a>
        )}
      </div>
    </div>
  );
}

export function Achievements() {
  const sectionRef = useIntersectionObserver();

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
      <div className="container px-6 md:px-10 lg:px-16">
        <div ref={sectionRef} className="animate-section">

          <div className="mb-12 stagger-item">
            <span className="section-eyebrow">milestones</span>
            <h2 className="section-title">Achievements</h2>
            <div className="section-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((item, i) => (
              <AchievementCard key={i} item={item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
