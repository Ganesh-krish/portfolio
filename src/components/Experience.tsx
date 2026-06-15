import { MapPin, Calendar, ExternalLink, Code2, Briefcase } from "lucide-react";
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
      "Integrated 15+ third-party APIs — payments (Zoho Pay, Razorpay, Stripe), comms (ZeptoMail, Zoho SMTP), compliance (Taxpro e-Invoice & e-Way Bill), biometric (Etimeoffice), media (Cloudinary), automation (Meta Graph API)",
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
      "Built 8+ responsive client websites from scratch using HTML, CSS, JavaScript, Bootstrap, Core PHP, and MySQL",
      "Integrated Razorpay and Stripe payment gateways into e-commerce client projects with webhook-based order confirmation",
      "Developed a college virtual campus tour platform using panoramic photography (Anjac Panorama)",
      "Tutored students and junior developers in web development; also conducted training sessions at college campus through an MOU signed between the college and Anjana Infotech",
      "Managed end-to-end deployment — domain setup, DNS, cPanel and OVI panel — with documentation for each release",
      "Collaborated directly with clients to gather requirements, translate briefs into UI, and deliver on deadlines",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Razorpay", "Stripe", "cPanel", "Git"],
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

          {/* 2-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {experiences.map((exp, i) => (
              <div key={i} className="stagger-item h-full">
                <div
                  className="glass-card p-6 h-full flex flex-col"
                  style={{ borderTop: `3px solid ${exp.color}` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${exp.color}15` }}
                      >
                        {i === 0
                          ? <Code2 className="h-5 w-5" style={{ color: exp.color }} />
                          : <Briefcase className="h-5 w-5" style={{ color: exp.color }} />
                        }
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display leading-tight">
                          {exp.role}
                        </h3>
                        <p className="font-semibold text-sm mt-0.5 font-mono-code" style={{ color: exp.color }}>
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    {/* Type badge */}
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                      style={{ background: `${exp.color}10`, color: exp.color, border: `1px solid ${exp.color}25` }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />{exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />{exp.location}
                    </span>
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic mb-4 border-l-2 pl-3 leading-relaxed"
                    style={{ borderLeftColor: `${exp.color}50` }}>
                    {exp.summary}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5 flex-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
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

                  {/* Certificate link */}
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold hover:underline mt-auto"
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
