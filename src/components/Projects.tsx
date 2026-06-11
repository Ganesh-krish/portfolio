
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Lock, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef, useCallback, useEffect } from "react";
import { useElementParallax } from "@/hooks/useParallax";

const warxProjects = [
  {
    name: "DrillU",
    type: "EdTech Platform",
    problem: "Institutions had no single platform to manage courses, assessments, and run proctored coding tests online.",
    solution: "Unified EdTech platform — institution registration, course creation, student enrollment, live in-browser proctored coding tests via OneCompiler API, and role-based access: Admin · Institution · Instructor · Student.",
    tags: ["PHP", "CI3", "MySQL", "OneCompiler API", "Cloudinary", "Google OAuth", "RBAC"],
    role: "Backend Developer (sole)",
    color: "#2563EB",
    size: "large",
  },
  {
    name: "LifeBoat",
    type: "Scholarship Management",
    problem: "Scholarship management was entirely manual — paper applications, spreadsheet tracking, offline payments.",
    solution: "Centralised platform connecting students, institutions, donors, and admins for the full scholarship lifecycle — application to disbursement — with automated comms, MFA, and multi-auth.",
    tags: ["PHP", "CI3", "MySQL", "Firebase OTP", "Zoho OAuth", "Google OAuth", "MFA", "Zoho Pay", "ZeptoMail"],
    role: "Backend Developer (sole)",
    color: "#7C3AED",
    size: "normal",
  },
  {
    name: "Swastik ERP",
    type: "Auditor & GST Compliance ERP",
    problem: "Auditors relied on spreadsheets for GST invoicing and manual attendance — error-prone.",
    solution: "Full enterprise ERP — GST e-Invoice & e-Way Bill via Taxpro API, biometric attendance sync (Etimeoffice), Firebase notifications, file-chunked large report exports.",
    tags: ["PHP", "CI3", "MySQL", "Taxpro API", "Etimeoffice", "Firebase RT", "AJAX", "Burp Suite"],
    role: "Backend Developer (sole)",
    color: "#0891B2",
    size: "normal",
  },
  {
    name: "Swastik Ecommerce",
    type: "B2B Industrial Storefront",
    problem: "Industrial buyers had no self-serve way to browse machines with correct tiered pricing.",
    solution: "React B2B ecommerce consuming Swastik ERP REST APIs. Buyers browse at their correct price tier (Dealer · Wholesale · MOP) and generate formal Sales Quotations.",
    tags: ["React", "ERP REST APIs", "MySQL", "B2B", "GST Pricing", "Multi-tier Pricing"],
    role: "Frontend Developer (React)",
    color: "#059669",
    size: "normal",
  },
  {
    name: "Surge",
    type: "Instagram Automation Tool",
    problem: "Brands get hundreds of comments on posts but can't reply at scale.",
    solution: "Full-stack automation — monitors every comment via Meta Graph API webhooks, verifies follower status, auto-sends public reply and private DM in real time.",
    tags: ["React", "PHP", "CI3", "MySQL", "Meta Graph API", "Instagram Webhooks"],
    role: "Full-Stack (React + CI3 Backend)",
    color: "#E11D48",
    size: "large",
  },
];

const anjanaProjects = [
  {
    title: "Blockchain Bank Transaction Traceability",
    description: "Secure transaction traceability using Hyperledger Fabric — stores logs on a private blockchain for fraud detection.",
    image: "/bank.webp",
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Hyperledger Fabric", "Go", "Razorpay", "Docker"],
    link: "https://drive.google.com/file/d/10BAFo-od4U0lqgDAv3CjPXMxaY-xmr4y/view?usp=sharing",
    linkText: "View Publication",
  },
  { title: "Anjana Infotech", description: "Responsive company website showcasing software development, IT consulting, and technical support services.", image: "/ai.webp", technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"], link: "https://anjanainfotech.in", linkText: "Visit Website" },
  { title: "Vyasa Womens College", description: "College website — courses, faculty, admissions, and campus life with responsive interface.", image: "/vyasa.webp", technologies: ["HTML", "CSS", "Bootstrap", "MySQL", "PHP", "CodeIgniter"], link: "https://vyasawomenscollege.edu.in", linkText: "Visit Website" },
  { title: "Sunstra Naturals", description: "Cosmetics ecommerce with integrated Razorpay and Stripe payment gateways.", image: "/sunstra.webp", technologies: ["PHP", "Laravel", "MySQL", "Razorpay", "Bootstrap"], link: "https://sunstraanaturals.com", linkText: "Visit Website" },
  { title: "Subha Mahal", description: "Wedding venue booking website — availability checking and event booking.", image: "/subha.webp", technologies: ["HTML", "CSS", "JavaScript"] },
  { title: "Arudhra Collections", description: "Clothing retail e-commerce with product catalogue and shopping features.", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=500&h=280", technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"] },
  { title: "Thavamani Graphics", description: "E-commerce platform for stationery and notebooks.", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=500&h=280", technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"] },
  { title: "Anjac Panorama", description: "College campus navigation and virtual tour guide platform.", image: "/anjac.webp", technologies: ["HTML", "CSS", "JavaScript"], link: "https://panoview.knsmedutrust.com/", linkText: "View Website" },
];

function TiltProjectCard({ project, children }: { project: typeof warxProjects[0]; children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * 8;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -8;
    el.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateZ(4px)`;
  }, []);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      className="bento-card p-6 flex flex-col gap-4 stagger-item"
      style={{ borderTop: `3px solid ${project.color}` }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100 font-display leading-tight">{project.name}</h3>
          <p className="font-mono-code text-xs text-slate-400 dark:text-slate-500 mt-0.5">{project.type}</p>
          <p className="text-xs mt-1 font-medium" style={{ color: project.color }}>{project.role}</p>
        </div>
        <div className="flex flex-col gap-1.5 items-end flex-shrink-0">
          <span className="badge-live">Live · Production</span>
          <span className="badge-private"><Lock className="h-2.5 w-2.5" /> Private</span>
        </div>
      </div>

      {/* Problem / Solution */}
      <div className="space-y-3 flex-1">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1 font-mono-code" style={{ color: project.color }}>
            // Problem
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1 font-mono-code" style={{ color: project.color }}>
            // Solution
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{project.solution}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag, j) => (
          <span
            key={j}
            className="text-xs px-2 py-0.5 rounded-md font-medium"
            style={{ background: `${project.color}0d`, color: project.color, border: `1px solid ${project.color}22` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function revealTabItems(tabValue: string) {
  const panel = document.querySelector<HTMLElement>(`[role="tabpanel"][data-value="${tabValue}"]`);
  if (!panel) return;
  panel.querySelectorAll<HTMLElement>(".stagger-item").forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), 60 * (i + 1));
  });
}

export function Projects() {
  const sectionRef = useIntersectionObserver();
  const { ref: orbRef, offset: orbOffset } = useElementParallax<HTMLDivElement>(0.12);

  useEffect(() => {
    const t = setTimeout(() => revealTabItems("warx"), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50">
      <div
        ref={orbRef}
        aria-hidden="true"
        className="parallax-orb"
        style={{
          width: 600, height: 600,
          top: "0%", left: "50%",
          transform: `translate(-50%, ${orbOffset}px)`,
          background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)",
          transition: "transform 0.05s linear",
        }}
      />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">

          <div className="mb-12 stagger-item">
            <span className="section-eyebrow">what I've shipped</span>
            <h2 className="section-title">Projects</h2>
            <div className="section-line" />
          </div>

          <Tabs defaultValue="warx" className="w-full" onValueChange={revealTabItems}>
            <TabsList className="h-12 mb-10 p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm w-full max-w-xl">
              <TabsTrigger
                value="warx"
                className="flex-1 text-xs font-semibold font-mono-code rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                <Zap className="h-3 w-3 mr-1" /> Production @ WarX Digital
              </TabsTrigger>
              <TabsTrigger
                value="anjana"
                className="flex-1 text-xs font-semibold font-mono-code rounded-lg data-[state=active]:bg-violet-600 data-[state=active]:text-white"
              >
                Client Work @ Anjana Infotech
              </TabsTrigger>
            </TabsList>

            {/* WarX — bento-style grid */}
            <TabsContent value="warx" forceMount data-value="warx" className="data-[state=inactive]:!hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-auto">
                {/* Large first card spans 2 cols on xl */}
                <div className="xl:col-span-2">
                  <TiltProjectCard project={warxProjects[0]} />
                </div>
                {/* Normal card */}
                <TiltProjectCard project={warxProjects[1]} />
                <TiltProjectCard project={warxProjects[2]} />
                <TiltProjectCard project={warxProjects[3]} />
                {/* Large last card spans 2 cols on xl */}
                <div className="xl:col-span-2">
                  <TiltProjectCard project={warxProjects[4]} />
                </div>
              </div>
            </TabsContent>

            {/* Anjana — image grid */}
            <TabsContent value="anjana" forceMount data-value="anjana" className="data-[state=inactive]:!hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {anjanaProjects.map((p, i) => (
                  <div key={i} className="bento-card overflow-hidden flex flex-col stagger-item">
                    <AspectRatio ratio={16 / 9} className="bg-slate-100 dark:bg-slate-800">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    </AspectRatio>
                    <div className="p-5 flex flex-col flex-1 gap-3">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 font-display">{p.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 flex-1 leading-relaxed">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.technologies.map((t, j) => (
                          <span
                            key={j}
                            className="text-xs px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {p.linkText} <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </section>
  );
}
