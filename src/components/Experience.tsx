
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "WarX Digital Private Limited",
    role: "Backend Developer",
    type: "Full-time",
    duration: "Jun 2025 – Jun 2026",
    location: "Erode, Tamil Nadu",
    summary: "Sole backend developer owning 5 simultaneous production products at a product-first company.",
    bullets: [
      "Sole backend dev owning 5 production systems simultaneously — REST APIs, webhooks, business logic, and DB schemas built from scratch in CodeIgniter 3 (PHP)",
      "Designed secure RESTful APIs supporting React-based frontends for complex workflows: GST compliance, scholarship approvals, course management, and social media automation",
      "Integrated 15+ third-party APIs across payments (Zoho Pay, Razorpay, Stripe), communication (ZeptoMail, Zoho SMTP, Gmail SMTP, Zoho SalesIQ), compliance (Taxpro e-Invoice & e-Way Bill), biometric attendance (Etimeoffice), media (Cloudinary), and automation (Meta Graph API)",
      "Implemented Google OAuth, Zoho OAuth, Firebase Phone OTP, and MFA with RBAC across 3 platforms — student, institution, donor, admin, and auditor roles",
      "Optimised MySQL queries and conducted API security testing using Burp Suite",
      "Built file-chunking strategy for large ERP report exports without memory overflow",
    ],
    tags: ["PHP", "CodeIgniter 3", "MySQL", "Firebase", "REST APIs", "Webhooks", "Burp Suite", "Postman", "Git"],
  },
  {
    company: "Anjana Infotech",
    role: "Part-Time Web Developer",
    type: "Part-time (Weekends only)",
    duration: "Jan 2022 – May 2023",
    location: "Rajapalayam, Tamil Nadu",
    summary: "Weekend part-time role during undergraduate studies — client websites, payment integrations, and live deployment.",
    bullets: [
      "Built responsive client websites using HTML, CSS, JavaScript, Bootstrap, Core PHP, and MySQL",
      "Integrated Razorpay and Stripe payment gateways into client projects",
      "Managed end-to-end deployment — domain setup, DNS, cPanel and OVI panel — with project documentation for each release",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Razorpay", "Stripe", "cPanel"],
    certificate: "https://drive.google.com/file/d/10ZwO9qqKiF8nRlidUXzd0-NXXM4FAib9/view?usp=drivesdk",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Experience</h2>

          <div className="mt-8 w-full max-w-4xl space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card">
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full mt-1">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <p className="text-primary font-medium text-base">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs self-start sm:self-auto whitespace-nowrap">
                      {exp.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground italic ml-14 mt-1">{exp.summary}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 ml-6 list-disc text-sm text-muted-foreground">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-sm hover:text-primary/80 inline-block mt-1"
                    >
                      View Certificate
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
