import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Lock,
  Star,
  CheckCircle2,
  Layers,
  Target,
  Lightbulb,
  Cpu,
  TrendingUp,
  Home,
  ChevronRight,
} from "lucide-react";
import { warxProjects } from "@/data/projects";

/* Simple Icons CDN slug for each tech — https://cdn.simpleicons.org/{slug} */
const TECH_ICON_SLUG: Record<string, string> = {
  "PHP":                    "php",
  "CI3":                    "codeigniter",
  "CodeIgniter 3":          "codeigniter",
  "MySQL":                  "mysql",
  "MySQL (via ERP API)":    "mysql",
  "MySQL (via API)":        "mysql",
  "Firebase":               "firebase",
  "Firebase OTP":           "firebase",
  "Firebase RT":            "firebase",
  "Firebase Real-time DB":  "firebase",
  "Google OAuth":           "google",
  "Zoho OAuth":             "zoho",
  "Meta Graph API":         "meta",
  "Instagram Webhooks":     "instagram",
  "React":                  "react",
  "TypeScript":             "typescript",
  "JavaScript":             "javascript",
  "Bootstrap":              "bootstrap",
  "jQuery":                 "jquery",
  "Postman":                "postman",
  "Burp Suite":             "burpsuite",
  "Git":                    "git",
  "Razorpay":               "razorpay",
  "Stripe":                 "stripe",
  "Cloudinary":             "cloudinary",
  "cPanel":                 "cpanel",
};

const TECH_COLORS: Record<string, string> = {
  "PHP": "#777BB4",
  "CI3": "#EF4223",
  "CodeIgniter 3": "#EF4223",
  "MySQL": "#4479A1",
  "Firebase": "#FFCA28",
  "Firebase OTP": "#FFCA28",
  "Firebase RT": "#FFCA28",
  "Firebase Real-time DB": "#FFCA28",
  "REST APIs": "#6366F1",
  "Webhooks": "#6366F1",
  "Instagram Webhooks": "#E4405F",
  "Meta Graph API": "#1877F2",
  "Google OAuth": "#4285F4",
  "Zoho OAuth": "#E42527",
  "RBAC": "#8B5CF6",
  "MFA": "#10B981",
  "Postman": "#FF6C37",
  "Burp Suite": "#FF6633",
  "Git": "#F05032",
  "React": "#61DAFB",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Bootstrap": "#7952B3",
  "Razorpay": "#3395FF",
  "Stripe": "#635BFF",
  "cPanel": "#FF6C2C",
  "Cloudinary": "#3448C5",
  "OneCompiler API": "#2563EB",
  "Taxpro API": "#16a34a",
  "Etimeoffice": "#0891B2",
  "ZeptoMail": "#FF6B35",
  "AJAX": "#F59E0B",
  "jQuery": "#0769AD",
  "B2B": "#1E40AF",
  "GST Pricing": "#DC2626",
  "Multi-tier Pricing": "#7C3AED",
  "ERP REST APIs": "#059669",
  "MySQL (via ERP API)": "#4479A1",
  "MySQL (via API)": "#4479A1",
  "Swastik ERP REST API": "#059669",
  "Taxpro API (GST e-Invoice / e-Way Bill)": "#16a34a",
  "Etimeoffice Biometric Sync": "#0891B2",
  "Firebase Real-time DB": "#FFCA28",
};

const NAV_SECTIONS = [
  { id: "overview",   label: "Overview",    Icon: Layers },
  { id: "problem",    label: "Problem",     Icon: Target },
  { id: "solution",   label: "Solution",    Icon: Lightbulb },
  { id: "features",   label: "Key Features",Icon: CheckCircle2 },
  { id: "tech-stack", label: "Tech Stack",  Icon: Cpu },
  { id: "impact",     label: "Results",     Icon: TrendingUp },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = warxProjects.find((p) => p.slug === slug);
  const active = useActiveSection(NAV_SECTIONS.map((s) => s.id));

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50 dark:bg-slate-950">
        <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">Project not found.</p>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
      </div>
    );
  }

  const c = project.color;
  const ratings: Record<string, string> = {
    drillu: "4.9", lifeboat: "4.8", "swastik-erp": "4.7",
    "swastik-ecommerce": "4.6", surge: "5.0",
  };
  const rating = ratings[project.slug] ?? "4.9";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">

      {/* ── TOPBAR ── */}
      <header
        className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl"
      >
        <div className="w-full pl-3 md:pl-6 pr-3 md:pr-6 h-14 flex items-center gap-3">
          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors mr-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          {/* Divider */}
          <span className="text-slate-300 dark:text-slate-700 text-lg font-light">|</span>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="flex items-center gap-1 text-sm min-w-0">
            <Link to="/" className="flex items-center gap-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex-shrink-0">
              <Home className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <Link to="/#projects" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors flex-shrink-0">
              Projects
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600 flex-shrink-0" />
            <span className="font-semibold truncate" style={{ color: c }}>
              {project.name}
            </span>
          </nav>

          {/* Right badges */}
          <div className="ml-auto flex items-center gap-2 flex-shrink-0">
            <span className="badge-live hidden sm:inline-flex">Live · Production</span>
            <span className="badge-private hidden sm:inline-flex">
              <Lock className="h-2.5 w-2.5" /> Private
            </span>
          </div>
        </div>
      </header>

      {/* ── BODY: 3-column layout ── */}
      <div className="w-full pl-3 md:pl-6 pr-3 md:pr-6 py-6 flex gap-4 items-start">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="hidden lg:block w-52 flex-shrink-0 sticky top-[4.5rem]">
          <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-2 px-2">
            Contents
          </p>
          <nav className="flex flex-col gap-0.5">
            {NAV_SECTIONS.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm font-medium text-left transition-all duration-200"
                  style={
                    isActive
                      ? { background: `${c}18`, color: c }
                      : { color: "var(--tw-color-slate-500, #64748b)" }
                  }
                >
                  <Icon className="h-3.5 w-3.5 flex-shrink-0" />
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <Link
              to="/#projects"
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All Projects
            </Link>
          </div>
        </aside>

        {/* ── CENTER CONTENT ── */}
        <main className="flex-1 min-w-0">

          {/* Hero banner */}
          <div
            className="relative rounded-2xl overflow-hidden mb-8"
            style={{
              background: `linear-gradient(135deg, ${c}, ${c}99)`,
              aspectRatio: "21/7",
            }}
          >
            {/* Dot grid */}
            <svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-10" style={{ color: "#fff" }}>
              <pattern id="pd-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1.5" fill="currentcolor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pd-dots)" />
            </svg>

            {/* Large index */}
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -right-2 text-[9rem] font-bold leading-none select-none text-white"
              style={{ opacity: 0.1 }}
            >
              {project.index}
            </span>

            <div className="relative p-6 md:p-10 h-full flex flex-col justify-between">
              <span
                className="self-start text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white"
                style={{ background: "rgba(0,0,0,0.25)" }}
              >
                {project.type}
              </span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{project.name}</h1>
                <p className="text-white/75 text-sm">{project.role} &middot; {project.year}</p>
              </div>
            </div>
          </div>

          {/* ── Mobile section nav (lg sidebar hidden) ── */}
          <div className="lg:hidden -mx-3 md:-mx-6 px-3 md:px-6 mb-8 overflow-x-auto">
            <div className="flex gap-2 min-w-max border-b border-slate-200 dark:border-slate-800 pb-1">
              {NAV_SECTIONS.map(({ id, label, Icon }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium whitespace-nowrap transition-all border-b-2 -mb-[1px]"
                    style={
                      isActive
                        ? { color: c, borderBottomColor: c }
                        : { color: "#94a3b8", borderBottomColor: "transparent" }
                    }
                  >
                    <Icon className="h-3 w-3 flex-shrink-0" />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Section: Overview ── */}
          <section id="overview" className="mb-12 scroll-mt-24">
            <SectionHeading icon={<Layers />} label="Overview" color={c} />
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {project.overview}
            </p>
          </section>

          {/* ── Section: Problem ── */}
          <section id="problem" className="mb-12 scroll-mt-24">
            <SectionHeading icon={<Target />} label="Problem" color={c} />
            <blockquote
              className="border-l-4 pl-5 py-1 rounded-r-lg text-slate-700 dark:text-slate-300 text-base leading-relaxed italic"
              style={{ borderColor: c, background: `${c}0a` }}
            >
              {project.problem}
            </blockquote>
          </section>

          {/* ── Section: Solution ── */}
          <section id="solution" className="mb-12 scroll-mt-24">
            <SectionHeading icon={<Lightbulb />} label="Solution" color={c} />
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
              {project.solution}
            </p>
          </section>

          {/* ── Section: Key Features ── */}
          <section id="features" className="mb-12 scroll-mt-24">
            <SectionHeading icon={<CheckCircle2 />} label="Key Features" color={c} />
            <ul className="flex flex-col gap-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold"
                    style={{ background: c }}
                  >
                    {i + 1}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Section: Tech Stack ── */}
          <section id="tech-stack" className="mb-12 scroll-mt-24">
            <SectionHeading icon={<Cpu />} label="Tech Stack" color={c} />
            <div className="flex flex-col gap-4">
              {project.techGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-[11px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const slug = TECH_ICON_SLUG[item];
                      return (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium"
                          style={{ background: `${c}12`, color: c, border: `1px solid ${c}30` }}
                        >
                          {slug && (
                            <img
                              src={`https://cdn.simpleicons.org/${slug}`}
                              alt=""
                              className="w-3.5 h-3.5 object-contain flex-shrink-0"
                              loading="lazy"
                            />
                          )}
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: Impact / Results ── */}
          <section id="impact" className="mb-12 scroll-mt-24">
            <SectionHeading icon={<TrendingUp />} label="Results & Impact" color={c} />
            <div className="flex flex-col gap-3">
              {project.impact.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl text-sm leading-relaxed"
                  style={{ background: `${c}0a`, border: `1px solid ${c}20` }}
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: c }} />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* ── RIGHT ASIDE ── */}
        <aside className="hidden xl:block w-64 flex-shrink-0 sticky top-[4.5rem]">
          {/* Single panel — no border radius */}
          <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">

            {/* Colored header strip */}
            <div
              className="px-4 py-4 text-white"
              style={{ background: `linear-gradient(135deg, ${c}, ${c}bb)` }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-75 mb-2">{project.type}</p>
              <div className="flex items-end gap-2 mb-2">
                <Star className="h-4 w-4 fill-white stroke-white mb-0.5 flex-shrink-0" />
                <span className="text-2xl font-bold leading-none">{rating}</span>
                <span className="text-xs opacity-70 mb-0.5">/ 5.0</span>
              </div>
              <p className="text-[11px] opacity-80 leading-snug">{project.role} · {project.year}</p>
            </div>

            {/* Tech Stack with brand colors */}
            <div className="px-4 py-3">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 mb-3">
                Tech Stack
              </p>
              <div className="grid grid-cols-2 gap-2">
                {project.tags.map((tag) => {
                  const brandColor = TECH_COLORS[tag] ?? c;
                  const slug = TECH_ICON_SLUG[tag];
                  const initials = tag.replace(/[^A-Z0-9]/gi, " ").split(" ").filter(Boolean).map(w => w[0].toUpperCase()).join("").slice(0, 2);
                  return (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-2 py-2 border"
                      style={{ borderColor: `${brandColor}30`, background: `${brandColor}0e` }}
                    >
                      <span className="w-6 h-6 flex items-center justify-center flex-shrink-0 rounded-sm bg-white dark:bg-slate-800">
                        {slug ? (
                          <img
                            src={`https://cdn.simpleicons.org/${slug}`}
                            alt={tag}
                            className="w-4 h-4 object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-[9px] font-bold" style={{ color: brandColor }}>
                            {initials}
                          </span>
                        )}
                      </span>
                      <span className="text-[10px] font-semibold leading-tight text-slate-700 dark:text-slate-200 truncate">
                        {tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Other projects */}
            <div className="border-t border-slate-200 dark:border-slate-800">
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 px-4 pt-3 pb-1">
                Other Projects
              </p>
              {warxProjects
                .filter((p) => p.slug !== project.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    to={`/projects/${p.slug}`}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 border-b border-slate-100 dark:border-slate-800/60 last:border-0 transition-colors"
                    onMouseEnter={(e) => (e.currentTarget.style.background = `${p.color}10`)}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: p.color }}
                    />
                    {p.name}
                  </Link>
                ))}
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}

/* ── Sub-components ── */

function SectionHeading({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <span
        className="w-7 h-7 rounded-lg flex items-center justify-center text-white flex-shrink-0"
        style={{ background: color }}
      >
        <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{icon}</span>
      </span>
      <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">{label}</h2>
      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

function InfoRow({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">{label}</p>
      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300" style={color ? { color } : {}}>
        {value}
      </p>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-slate-100 dark:bg-slate-800" />;
}

function AsideRow({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div className="px-4 py-2.5 flex items-start justify-between gap-2">
      <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500 flex-shrink-0 mt-0.5">
        {label}
      </p>
      <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 text-right" style={valueColor ? { color: valueColor } : {}}>
        {value}
      </p>
    </div>
  );
}
