
import { Server, Plug, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function About() {
  const sectionRef = useIntersectionObserver();

  const highlights = [
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Specialist",
      description: "CodeIgniter 3 (PHP) backend architect — REST APIs, webhooks, business logic, DB schemas, authentication and deployment from scratch.",
    },
    {
      icon: <Plug className="h-10 w-10 text-primary" />,
      title: "15+ Integrations",
      description: "Payments, government compliance APIs, biometric hardware, social media platforms, cloud media, and communication services — all in production.",
    },
    {
      icon: <Layers className="h-10 w-10 text-primary" />,
      title: "5 Live Products",
      description: "Sole backend developer on 5 simultaneous production systems at WarX Digital — EdTech, Scholarship, ERP, B2B Ecommerce, and Automation.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div ref={sectionRef} className="flex flex-col items-center justify-center animate-section">
          <h2 className="section-title">About Me</h2>

          <div className="mt-8 max-w-3xl text-justify">
            <p className="text-lg text-muted-foreground stagger-item">
              <span className="text-foreground font-semibold">"Most freshers have projects. I have products."</span>
            </p>
            <p className="text-lg text-muted-foreground mt-4 stagger-item">
              I'm a backend developer specialising in CodeIgniter (PHP) backends — the kind of work that sits
              invisibly behind a product and keeps it running. API design, complex integrations, authentication
              systems, database architecture, deployment. I own the full backend lifecycle, not just individual features.
            </p>
            <p className="text-lg text-muted-foreground mt-4 stagger-item">
              In my first year at WarX Digital, I built and shipped 5 production systems used by real clients — an
              EdTech platform, a scholarship management system, an enterprise ERP, a B2B industrial ecommerce store,
              and an Instagram automation tool.
            </p>
            <p className="text-lg text-muted-foreground mt-4 stagger-item">
              I work with AI tools (Claude Code, Cursor, Lovable) for frontend — my focus and strength is the
              backend and integrations layer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
            {highlights.map((item, index) => (
              <Card key={index} className="glass-card overflow-hidden border-t-4 border-t-primary stagger-item">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 animate-float">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
