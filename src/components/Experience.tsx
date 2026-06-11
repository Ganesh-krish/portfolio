
import { MapPin, Calendar, ExternalLink, Code2 } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useElementParallax } from "@/hooks/useParallax";

const experiences = [
  {
    company: "WarX Digital Private Limited",
    role: "Backend Developer",
    type: "Full-time",
    duration: "Jun 2025 – Jun 2026",
    location: "Erode, Tamil Nadu",
    summary: "Sole backend developer owning 5 simultaneous production products at a product-first company.",
    bullets: [
      "Sole backend dev owning 5 production systems — REST APIs, webhooks, business logic, DB schemas built from scratch in CodeIgniter 3 (PHP)",
      "Designed secure RESTful APIs supporting React frontends for complex workflows: GST compliance, scholarship approvals, course management, social media automation",
      "Integrated 15+ third-party APIs — payments (Zoho Pay, Razorpay, Stripe), comms (ZeptoMail, Zoho SMTP, Zoho SalesIQ), compliance (Taxpro e-Invoice & e-Way Bill), biometric (Etimeoffice), media (Cloudinary), automation (Meta Graph API)",
      "Implemented Google OAuth, Zoho OAuth, Firebase Phone OTP, and MFA with RBAC across 3 platforms",
      "Optimised MySQL queries and conducted API security testing with Burp Suite",
      "Built file-chunking strategy for large ERP report exports without memory overflow",
    ],
    tags: ["PHP", "CodeIgniter 3", "MySQL", "Firebase", "REST APIs", "Webhooks", "Burp Suite", "Postman", "Git"],
    color: "#2563EB",
    codeSnippet: "handle(Request $r)",
  },
  {
    company: "Anjana Infotech",
    role: "Part-Time Web Developer",
    type: "Part-time · Weekends",
    duration: "Jan 2022 – May 2023",
    location: "Rajapalayam, Tamil Nadu",
    summary: "Weekend role during undergraduate studies — client websites, payment integrations, and live deployment.",
    bullets: [
      "Built responsive client websites using HTML, CSS, JavaScript, Bootstrap, Core PHP, and MySQL",
      "Integrated Razorpay and Stripe payment gateways into client projects",
      "Managed end-to-end deployment — domain setup, DNS, cPanel and OVI panel — with documentation for each release",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Razorpay", "Stripe", "cPanel"],
    color: "#7C3AED",
    codeSnippet: "deploy(Project $p)",
    certificate: "https://drive.google.com/file/d/10ZwO9qqKiF8nRlidUXzd0-NXXM4FAib9/view?usp=drivesdk",
  },
];

export function Experience() {
  const sectionRef = useIntersectionObserver();
  const { ref: orbRef, offset: orbOffset } = useElementParallax<HTMLDivElement>(0.15);

  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-slate-950">
      <div
        ref={orbRef}
        aria-hidden="true"
        className="parallax-orb"
        style={{
          width: 360, height: 360,
          bottom: "5%", right: "-80px",
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          transform: `translateY(${orbOffset}px)`,
          transition: "transform 0.05s linear",
        }}
      />

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">

          <div className="mb-14 stagger-item">
            <span className="section-eyebrow">where I've worked</span>
            <h2 className="section-title">Experience</h2>
            <div className="section-line" />
          </div>

          <div className="timeline-container pl-14 max-w-3xl">
            {experiences.map((exp, i) => (
              <div key={i} className="relative mb-10 last:mb-0 stagger-item">

                {/* Timeline dot */}
                <div
                  className="timeline-dot absolute -left-14"
                  style={{ borderColor: exp.color, boxShadow: `0 0 0 4px ${exp.color}15` }}
                >
                  <Code2 className="h-4 w-4" style={{ color: exp.color }} />
                </div>

                {/* Card */}
                <div
                  className="glass-card p-6"
                  style={{ borderTop: `2px solid ${exp.color}` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">{exp.role}</h3>
                      <p className="font-semibold text-sm mt-0.5 font-mono-code" style={{ color: exp.color }}>{exp.company}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{exp.duration}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                        style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}25` }}
                      >
                        {exp.type}
                      </span>
                      {/* Code snippet label */}
                      <span className="font-mono-code text-[10px] text-slate-400 dark:text-slate-500">
                        fn {exp.codeSnippet}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-4 border-l-2 pl-3" style={{ borderLeftColor: `${exp.color}50` }}>
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                        style={{ background: `${exp.color}0d`, color: exp.color, border: `1px solid ${exp.color}22` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-xs font-semibold hover:underline"
                      style={{ color: exp.color }}
                    >
                      <ExternalLink className="h-3 w-3" /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
