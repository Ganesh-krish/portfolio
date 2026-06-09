
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, Lock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const warxProjects = [
  {
    name: "DrillU",
    type: "EdTech Platform",
    problem: "Institutions had no single platform to manage courses, assessments, and run proctored coding tests — everything was disconnected.",
    solution: "Unified EdTech platform where institutions register, manage courses, create assessments, and run live in-browser proctored coding tests all in one place.",
    tags: ["PHP", "CodeIgniter 3", "MySQL", "OneCompiler API", "Cloudinary", "Google OAuth", "RBAC"],
    role: "Backend Developer (sole)",
  },
  {
    name: "LifeBoat",
    type: "Scholarship Management System",
    problem: "Scholarship management was entirely manual — paper applications, spreadsheet tracking, offline payments, and scattered communication across emails and calls.",
    solution: "Centralised platform connecting students, institutions, donors, and admins for the full scholarship lifecycle — application to approval to disbursement — with automated comms and secure auth.",
    tags: ["PHP", "CodeIgniter 3", "MySQL", "Firebase OTP", "Zoho OAuth", "Google OAuth", "MFA", "Zoho Pay", "ZeptoMail", "Zoho SalesIQ"],
    role: "Backend Developer (sole)",
  },
  {
    name: "Swastik ERP",
    type: "Auditor & GST Compliance ERP",
    problem: "Auditors relied on spreadsheets for GST invoicing, manual attendance, and compliance — e-Invoice and e-Way Bill generation was error-prone and there was no real-time visibility.",
    solution: "Full enterprise ERP digitising the entire auditor workflow — GST e-Invoice & e-Way Bill via Taxpro API, biometric attendance sync, real-time notifications, and large report exports using file-chunking.",
    tags: ["PHP", "CodeIgniter 3", "MySQL", "Taxpro API", "Etimeoffice API", "Firebase RT", "AJAX", "jQuery", "Burp Suite"],
    role: "Backend Developer (sole)",
  },
  {
    name: "Swastik Ecommerce",
    type: "B2B Industrial Storefront",
    problem: "Industrial buyers had no self-serve way to browse machines and spares with correct tiered pricing — sales teams handled every inquiry manually over phone and email.",
    solution: "React-based B2B ecommerce site consuming Swastik ERP REST APIs. Buyers browse the full catalogue at their correct price tier (Dealer · Wholesale · MOP) and generate formal Sales Quotations.",
    tags: ["React", "ERP REST APIs", "MySQL", "B2B", "GST Pricing", "Multi-tier Pricing", "Quotation Flow"],
    role: "Frontend Developer (React)",
  },
  {
    name: "Surge",
    type: "Instagram Automation Tool",
    problem: "Brands get hundreds of comments on posts but can't reply manually at scale — most go unanswered, losing engagement and potential leads.",
    solution: "Full-stack automation tool that monitors every comment via Meta Graph API webhooks, verifies if the commenter follows the account, then auto-sends a public reply and a private DM in real time.",
    tags: ["React", "PHP", "CodeIgniter 3", "MySQL", "Meta Graph API", "Instagram Webhooks", "Automation"],
    role: "Full-Stack (React + CI3 Backend)",
  },
];

const anjanaProjects = [
  {
    title: "Block Chain Based Bank Transaction Traceability",
    description: "Developed a secure banking transaction traceability system using Hyperledger Fabric to store transaction logs on a private blockchain for fraud detection and pattern discovery.",
    image: "/bank.webp",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Spring Boot", "PostgreSQL", "Hyperledger Fabric", "Go", "Razorpay", "Docker"],
    link: "https://drive.google.com/file/d/10BAFo-od4U0lqgDAv3CjPXMxaY-xmr4y/view?usp=sharing",
    linkText: "View Publication",
  },
  {
    title: "Anjana Infotech",
    description: "Developed a user-friendly and responsive website for Anjana Infotech showcasing services including software development, IT consulting, and technical support.",
    image: "/ai.webp",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://anjanainfotech.in",
    linkText: "Visit Website",
  },
  {
    title: "Vyasa Womens College",
    description: "Led frontend development with a responsive and intuitive interface, providing detailed information on courses, faculty, admissions, and campus life.",
    image: "/vyasa.webp",
    technologies: ["HTML", "JavaScript", "CSS", "Bootstrap", "MySQL", "PHP", "CodeIgniter"],
    link: "https://vyasawomenscollege.edu.in",
    linkText: "Visit Website",
  },
  {
    title: "Sunstra Naturals",
    description: "Integrated a secure payment gateway to support cosmetic product sales, focusing on delivering a smooth and reliable transaction experience.",
    image: "/sunstra.webp",
    technologies: ["Razorpay", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL", "PHP", "Laravel"],
    link: "https://sunstraanaturals.com",
    linkText: "Visit Website",
  },
  {
    title: "Subha Mahal",
    description: "Wedding Mahal booking website allowing users to check availability and book venues for events.",
    image: "/subha.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Arudhra Collections",
    description: "Clothing retail e-commerce website with product catalog and online shopping features.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=500&h=280",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Thavamani Graphics",
    description: "E-commerce platform for selling notebooks and stationery items.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=500&h=280",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Anjac Panorama",
    description: "College campus navigation and guide platform to help students and visitors navigate the campus.",
    image: "/anjac.webp",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://panoview.knsmedutrust.com/",
    linkText: "View Website",
  },
];

export function Projects() {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div ref={sectionRef} className="flex flex-col items-center justify-center animate-section">
          <h2 className="section-title">Projects</h2>

          <div className="mt-8 w-full max-w-5xl">
            <Tabs defaultValue="warx" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="warx">
                  Production @ WarX Digital
                </TabsTrigger>
                <TabsTrigger value="anjana">
                  Client Work @ Anjana Infotech
                </TabsTrigger>
              </TabsList>

              {/* WarX Digital Projects */}
              <TabsContent value="warx">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {warxProjects.map((project, index) => (
                    <Card key={index} className="glass-card h-full flex flex-col stagger-item">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <CardTitle className="text-xl">{project.name}</CardTitle>
                            <span className="text-sm text-muted-foreground">{project.type}</span>
                          </div>
                          <div className="flex flex-col gap-1 items-end">
                            <Badge className="bg-green-500/15 text-green-400 border border-green-500/30 text-xs">
                              Live · Production
                            </Badge>
                            <Badge variant="outline" className="text-xs flex items-center gap-1 text-muted-foreground">
                              <Lock className="h-3 w-3" /> Private Codebase
                            </Badge>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Role: {project.role}</p>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col gap-4">
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Problem</p>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">What I Built</p>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-auto pt-2">
                          {project.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary" className="font-normal text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Anjana Infotech Projects */}
              <TabsContent value="anjana">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {anjanaProjects.map((project, index) => (
                    <Card key={index} className="glass-card h-full overflow-hidden flex flex-col stagger-item">
                      <div className="overflow-hidden">
                        <AspectRatio ratio={16 / 9} className="bg-muted">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                            loading="lazy"
                          />
                        </AspectRatio>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-4 flex-1 flex flex-col">
                        <p className="text-sm text-muted-foreground flex-1">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="font-normal text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline inline-flex items-center gap-1 text-sm font-medium transition-transform hover:translate-x-1 mt-4"
                          >
                            {project.linkText} <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
