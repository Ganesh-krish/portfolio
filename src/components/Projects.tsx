
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function Projects() {
  const sectionRef = useIntersectionObserver();
  
  const projects = [
    {
      title: "Block Chain Based Bank Transaction Traceability (Final Year Project)",
      description: "Developed a secure banking transaction traceability system using Hyperledger Fabric to store transaction logs on a private blockchain for fraud detection and pattern discovery.",
      image: "/bank.webp",
      technologies: ["React", "Tailwind CSS", "TypeScript", "Spring Boot", "PostgreSQL", "Hyperledger Fabric", "Go", "Razorpay", "Docker","WSL(Ubuntu)"],
      link: "https://drive.google.com/file/d/10BAFo-od4U0lqgDAv3CjPXMxaY-xmr4y/view?usp=sharing",
      linkText: "View Project publication",
    },
    {
      title: "Anjana Infotech",
      description: "Developed a user-friendly and responsive website for Anjana Infotech showcasing the company's services including software development, IT consulting, and technical support.",
      image: "/ai.webp",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://anjanainfotech.in",
      linkText: "Visit Website",
    },
    {
      title: "Vyasa Womens College",
      description: "Led frontend development with a responsive and intuitive interface, providing detailed information on courses, faculty, admissions, and campus life.",
      image: "/vyasa.webp",
      technologies: ["HTML", "JavaScript", "CSS", "Bootstrap", "MySQL", "PHP", "CodeIgnitor"],
      link: "https://vyasawomenscollege.edu.in",
      linkText: "Visit Website",
    },
    {
      title: "Sunstra Naturals",
      description: "Integrated a secure payment gateway to support cosmetic product sales, focusing on delivering a smooth and reliable transaction experience for users.",
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
      technologies: ["HTML", "CSS", "JavaScript","PHP","MySQL"],
    },
    {
      title: "Thavamani Graphics",
      description: "E-commerce platform for selling notebooks and stationery items,",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=500&h=280",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Anjac Panorama",
      description: "College campus navigation and guide platform to help students and visitors navigate the campus.",
      image: "/anjac.webp",
      technologies: ["HTML", "CSS", "JavaScript"],
      link:"https://panoview.knsmedutrust.com/",
      linkText:"View Website",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div ref={sectionRef} className="flex flex-col items-center justify-center animate-section">
          <h2 className="section-title">Projects</h2>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {projects.map((project, index) => (
              <Card key={index} className="glass-card h-full overflow-hidden flex flex-col stagger-item">
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9} className="bg-muted">
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
                <CardContent className="py-4 flex-1">
                  <CardDescription className="text-base">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
  <Badge key={i} variant="secondary" className="font-normal">
    {tech}
  </Badge>
))}

                  </div>
                </CardContent>
                {project.link && (
                  <CardFooter className="pt-0">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1 text-sm font-medium transition-transform hover:translate-x-1"
                    >
                      {project.linkText} <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
