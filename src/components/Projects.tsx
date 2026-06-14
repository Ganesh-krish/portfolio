
import { useState } from "react";
import { ExternalLink, Lock, Zap, Building2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/* ─── Data ─── */
const warxProjects = [
  {
    index: "01",
    name: "DrillU",
    type: "EdTech Platform",
    problem: "Institutions had no single platform to manage courses, assessments, and run proctored coding tests online.",
    solution: "Unified EdTech platform — institution registration, course creation, student enrollment, live in-browser proctored coding tests via OneCompiler API, and role-based access: Admin · Institution · Instructor · Student.",
    tags: ["PHP", "CI3", "MySQL", "OneCompiler API", "Cloudinary", "Google OAuth", "RBAC"],
    role: "Backend Developer (sole)",
    color: "#2563EB",
    span: true,
  },
  {
    index: "02",
    name: "LifeBoat",
    type: "Scholarship Management",
    problem: "Scholarship management was entirely manual — paper applications, spreadsheet tracking, offline payments.",
    solution: "Centralised platform connecting students, institutions, donors, and admins for the full scholarship lifecycle — application to disbursement — with automated comms, MFA, and multi-auth.",
    tags: ["PHP", "CI3", "MySQL", "Firebase OTP", "Zoho OAuth", "Google OAuth", "MFA", "ZeptoMail"],
    role: "Backend Developer (sole)",
    color: "#7C3AED",
    span: false,
  },
  {
    index: "03",
    name: "Swastik ERP",
    type: "Auditor & GST Compliance ERP",
    problem: "Auditors relied on spreadsheets for GST invoicing and manual attendance — error-prone and slow.",
    solution: "Full enterprise ERP — GST e-Invoice & e-Way Bill via Taxpro API, biometric attendance sync, Firebase notifications, and chunked large report exports.",
    tags: ["PHP", "CI3", "MySQL", "Taxpro API", "Etimeoffice", "Firebase RT", "AJAX"],
    role: "Backend Developer (sole)",
    color: "#0891B2",
    span: false,
  },
  {
    index: "04",
    name: "Swastik Ecommerce",
    type: "B2B Industrial Storefront",
    problem: "Industrial buyers had no self-serve way to browse machines with correct tiered pricing.",
    solution: "React B2B ecommerce consuming Swastik ERP REST APIs. Buyers browse at their correct price tier (Dealer · Wholesale · MOP) and generate formal Sales Quotations.",
    tags: ["React", "ERP REST APIs", "MySQL", "B2B", "GST Pricing", "Multi-tier Pricing"],
    role: "Frontend Developer (React)",
    color: "#059669",
    span: false,
  },
  {
    index: "05",
    name: "Surge",
    type: "Instagram Automation Tool",
    problem: "Brands get hundreds of comments on posts but can't reply at scale.",
    solution: "Full-stack automation — monitors every comment via Meta Graph API webhooks, verifies follower status, auto-sends public reply and private DM in real time.",
    tags: ["React", "PHP", "CI3", "MySQL", "Meta Graph API", "Instagram Webhooks"],
    role: "Full-Stack (React + CI3 Backend)",
    color: "#E11D48",
    span: true,
  },
];

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

/* ─── WarX project card ─── */
function WarxCard({ project }: { project: typeof warxProjects[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderLeft: `3px solid ${project.color}`,
        boxShadow: hovered
          ? `0 20px 48px ${project.color}18, 0 4px 16px rgba(0,0,0,0.08)`
          : "0 1px 4px rgba(15,23,42,0.06)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-5"
    >
      {/* Faded watermark number */}
      <span
        aria-hidden="true"
        className="absolute -top-2 right-4 text-8xl font-bold leading-none select-none pointer-events-none"
        style={{
          color: project.color,
          opacity: hovered ? 0.07 : 0.04,
          fontFamily: "Space Grotesk, sans-serif",
          transition: "opacity 0.3s ease",
        }}
      >
        {project.index}
      </span>

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono-code text-[11px] text-slate-400 dark:text-slate-500 mb-1 tracking-wide">
            {project.type}
          </p>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display leading-tight">
            {project.name}
          </h3>
          <p className="text-xs font-semibold mt-1.5" style={{ color: project.color }}>
            {project.role}
          </p>
        </div>
        <div className="flex flex-col gap-1.5 flex-shrink-0 items-end">
          <span className="badge-live">Live · Production</span>
          <span className="badge-private">
            <Lock className="h-2.5 w-2.5" /> Private
          </span>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px"
        style={{ background: `linear-gradient(to right, ${project.color}30, transparent)` }}
      />

      {/* Problem / Solution */}
      <div className="flex flex-col gap-4 flex-1">
        <div>
          <span
            className="inline-block text-[10px] font-bold font-mono-code uppercase tracking-widest px-2 py-0.5 rounded mb-2"
            style={{ background: `${project.color}12`, color: project.color }}
          >
            Problem
          </span>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <span
            className="inline-block text-[10px] font-bold font-mono-code uppercase tracking-widest px-2 py-0.5 rounded mb-2"
            style={{ background: `${project.color}12`, color: project.color }}
          >
            Solution
          </span>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: `${project.color}0d`,
              color: project.color,
              border: `1px solid ${project.color}22`,
            }}
          >
            {tag}
          </span>
        ))}
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
      className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col"
      style={{
        boxShadow: hovered
          ? "0 16px 40px rgba(15,23,42,0.12)"
          : "0 1px 4px rgba(15,23,42,0.06)",
        transform: hovered ? "translateY(-3px)" : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Image */}
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
        {/* Hover overlay */}
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

      {/* Content */}
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
      {/* Ambient orb */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)" }}
      />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">

          {/* Heading */}
          <div className="mb-10 stagger-item">
            <span className="section-eyebrow">what I've shipped</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 mb-10 stagger-item p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit shadow-sm">
            <button
              onClick={() => setTab("warx")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold font-mono-code transition-all duration-200"
              style={
                tab === "warx"
                  ? { background: "linear-gradient(135deg, #2563EB, #1d4ed8)", color: "#fff", boxShadow: "0 2px 8px rgba(37,99,235,0.35)" }
                  : {}
              }
              aria-pressed={tab === "warx"}
            >
              <Zap className="h-3.5 w-3.5" />
              Production @ WarX Digital
            </button>
            <button
              onClick={() => setTab("anjana")}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold font-mono-code transition-all duration-200"
              style={
                tab === "anjana"
                  ? { background: "linear-gradient(135deg, #7C3AED, #6d28d9)", color: "#fff", boxShadow: "0 2px 8px rgba(124,58,237,0.35)" }
                  : {}
              }
              aria-pressed={tab === "anjana"}
            >
              <Building2 className="h-3.5 w-3.5" />
              Client Work @ Anjana Infotech
            </button>
          </div>

          {/* ── WarX tab ── */}
          {tab === "warx" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <div className="xl:col-span-2 stagger-item">
                <WarxCard project={warxProjects[0]} />
              </div>
              <div className="stagger-item">
                <WarxCard project={warxProjects[1]} />
              </div>
              <div className="stagger-item">
                <WarxCard project={warxProjects[2]} />
              </div>
              <div className="stagger-item">
                <WarxCard project={warxProjects[3]} />
              </div>
              <div className="xl:col-span-2 stagger-item">
                <WarxCard project={warxProjects[4]} />
              </div>
            </div>
          )}

          {/* ── Anjana tab ── */}
          {tab === "anjana" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {anjanaProjects.map((p, i) => (
                <div key={i} className="stagger-item visible">
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
