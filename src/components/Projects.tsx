import { useState } from "react";
import { ExternalLink, Lock, Zap, Building2, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { warxProjects } from "@/data/projects";

/* ─── Anjana project data ─── */
const anjanaProjects = [
  {
    title: "Blockchain Bank Transaction Traceability",
    description: "Secure transaction traceability using Hyperledger Fabric — stores logs on a private blockchain for fraud detection.",
    image: "/bank.webp",
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Hyperledger Fabric", "Docker"],
    link: "https://drive.google.com/file/d/10BAFo-od4U0lqgDAv3CjPXMxaY-xmr4y/view?usp=sharing",
    linkText: "View Publication",
  },
  {
    title: "Anjana Infotech",
    description: "Responsive company website showcasing software development, IT consulting, and technical support services.",
    image: "/ai.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://anjanainfotech.in",
    linkText: "Visit Website",
  },
  {
    title: "Vyasa Womens College",
    description: "College website — courses, faculty, admissions, and campus life with responsive interface.",
    image: "/vyasa.webp",
    technologies: ["HTML", "CSS", "Bootstrap", "MySQL", "PHP", "CodeIgniter"],
    link: "https://vyasawomenscollege.edu.in",
    linkText: "Visit Website",
  },
  {
    title: "Sunstra Naturals",
    description: "Cosmetics ecommerce with integrated Razorpay and Stripe payment gateways.",
    image: "/sunstra.webp",
    technologies: ["PHP", "Laravel", "MySQL", "Razorpay", "Bootstrap"],
    link: "https://sunstraanaturals.com",
    linkText: "Visit Website",
  },
  {
    title: "Subha Mahal",
    description: "Wedding venue booking website — availability checking and event booking.",
    image: "/subha.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Arudhra Collections",
    description: "Clothing retail e-commerce with product catalogue and shopping features.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=500&h=280",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Thavamani Graphics",
    description: "E-commerce platform for stationery and notebooks.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=500&h=280",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Anjac Panorama",
    description: "College campus navigation and virtual tour guide platform.",
    image: "/anjac.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://panoview.knsmedutrust.com/",
    linkText: "View Website",
  },
];

/* ─── WarX project card (image-card style) ─── */
function WarxCard({ project }: { project: typeof warxProjects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full"
      style={{
        boxShadow: hovered
          ? `0 20px 48px ${project.color}25, 0 4px 16px rgba(0,0,0,0.08)`
          : "0 1px 4px rgba(15,23,42,0.06)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Colored gradient header (replaces image) */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ aspectRatio: "16/9", background: `linear-gradient(135deg, ${project.color}, ${project.color}99)` }}
      >
        {/* Large watermark index */}
        <span
          aria-hidden="true"
          className="absolute -bottom-2 -right-1 text-[7rem] font-bold leading-none select-none pointer-events-none text-white"
          style={{ opacity: 0.12 }}
        >
          {project.index}
        </span>

        {/* Dot grid pattern overlay */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full opacity-10"
          style={{ color: "#fff" }}
        >
          <pattern id={`dots-${project.slug}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="currentcolor" />
          </pattern>
          <rect width="100%" height="100%" fill={`url(#dots-${project.slug})`} />
        </svg>

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-bold font-mono uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
            style={{ background: "rgba(0,0,0,0.28)" }}
          >
            {project.type}
          </span>
        </div>

        {/* Status + Private badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
          <span className="badge-live">Live · Production</span>
          <span className="badge-private">
            <Lock className="h-2.5 w-2.5" /> Private
          </span>
        </div>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.52)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
            style={{ transform: hovered ? "translateY(0)" : "translateY(8px)", transition: "transform 0.3s ease" }}
          >
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Name + role */}
        <div>
          <h3 className="font-bold text-slate-900 dark:text-slate-100 font-display text-lg leading-snug">
            {project.name}
          </h3>
          <p className="text-xs font-semibold mt-1" style={{ color: project.color }}>
            {project.role}
          </p>
        </div>

        {/* Description (solution as description) */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 line-clamp-2">
          {project.solution}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full border text-slate-500 dark:text-slate-400 dark:border-slate-700 border-slate-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full text-slate-400">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Footer: rating + CTA */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {project.index === "01" ? "4.9" :
               project.index === "02" ? "4.8" :
               project.index === "03" ? "4.7" :
               project.index === "04" ? "4.6" : "5.0"}
            </span>
          </div>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
            style={{ color: project.color }}
          >
            View Details <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ─── Anjana project card ─── */
function AnjanaCard({ project }: { project: typeof anjanaProjects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col h-full"
      style={{
        boxShadow: hovered
          ? "0 16px 40px rgba(15,23,42,0.12)"
          : "0 1px 4px rgba(15,23,42,0.06)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          loading="lazy"
          decoding="async"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "rgba(15,23,42,0.72)",
            opacity: hovered && project.link ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
              style={{ transform: hovered ? "translateY(0)" : "translateY(8px)", transition: "transform 0.3s ease" }}
            >
              {project.linkText} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 font-display leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ─── Main section ─── */
export function Projects() {
  const sectionRef = useIntersectionObserver();
  const [tab, setTab] = useState<"warx" | "anjana">("warx");

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)" }}
      />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">

          <div className="mb-10 stagger-item">
            <span className="section-eyebrow">what I've shipped</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 mb-10 stagger-item p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full sm:w-fit shadow-sm">
            <button
              onClick={() => setTab("warx")}
              className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold font-mono-code transition-all duration-200"
              style={
                tab === "warx"
                  ? { background: "linear-gradient(135deg, #2563EB, #1d4ed8)", color: "#fff", boxShadow: "0 2px 8px rgba(37,99,235,0.35)" }
                  : {}
              }
              aria-pressed={tab === "warx"}
            >
              <Zap className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="sm:hidden">WarX Digital</span>
              <span className="hidden sm:inline">Production @ WarX Digital</span>
            </button>
            <button
              onClick={() => setTab("anjana")}
              className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold font-mono-code transition-all duration-200"
              style={
                tab === "anjana"
                  ? { background: "linear-gradient(135deg, #7C3AED, #6d28d9)", color: "#fff", boxShadow: "0 2px 8px rgba(124,58,237,0.35)" }
                  : {}
              }
              aria-pressed={tab === "anjana"}
            >
              <Building2 className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="sm:hidden">Anjana Infotech</span>
              <span className="hidden sm:inline">Client Work @ Anjana Infotech</span>
            </button>
          </div>

          {/* ── WarX tab ── */}
          {tab === "warx" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {warxProjects.map((project) => (
                <div key={project.slug} className="stagger-item visible h-full">
                  <WarxCard project={project} />
                </div>
              ))}
            </div>
          )}

          {/* ── Anjana tab ── */}
          {tab === "anjana" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 items-stretch">
              {anjanaProjects.map((p, i) => (
                <div key={i} className="stagger-item visible h-full">
                  <AnjanaCard project={p} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
