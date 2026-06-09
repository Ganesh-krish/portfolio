
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Globe, Lock, Plug, Wrench, Sparkles } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      skills: ["PHP", "Python", "Java", "JavaScript", "HTML5", "CSS3"],
    },
    {
      name: "Frameworks",
      icon: <Globe className="h-5 w-5 text-primary" />,
      skills: ["CodeIgniter 3", "Laravel", "Django", "Flask", "Spring Boot", "Bootstrap", "jQuery", "AJAX"],
    },
    {
      name: "Databases",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["MySQL", "Firebase Realtime Database", "MongoDB"],
    },
    {
      name: "Authentication & Security",
      icon: <Lock className="h-5 w-5 text-primary" />,
      skills: ["Google OAuth 2.0", "Zoho OAuth", "Firebase Phone OTP", "MFA", "RBAC", "Burp Suite", "API Security Testing"],
    },
    {
      name: "Tools & DevOps",
      icon: <Wrench className="h-5 w-5 text-primary" />,
      skills: ["Postman", "Swagger UI", "Git", "GitHub", "VS Code", "PyCharm", "cPanel", "OVI Panel", "PhpUnit"],
    },
    {
      name: "AI Tools",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      skills: ["Claude Code", "Cursor", "Lovable"],
    },
  ];

  const integrations = [
    { category: "Payments", items: ["Zoho Pay", "Razorpay", "Stripe"] },
    { category: "Compliance", items: ["Taxpro API (e-Invoice & e-Way Bill)"] },
    { category: "Auth", items: ["Google OAuth", "Firebase OTP", "Zoho OAuth"] },
    { category: "Comms", items: ["ZeptoMail", "Zoho SMTP", "Gmail SMTP", "Zoho SalesIQ"] },
    { category: "Media", items: ["Cloudinary"] },
    { category: "Dev Tools", items: ["OneCompiler API"] },
    { category: "Attendance", items: ["Etimeoffice Biometric API"] },
    { category: "Automation", items: ["Meta Graph API (Instagram)"] },
    { category: "Calendar", items: ["Google Calendar API"] },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Technical Skills</h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card overflow-hidden h-full">
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} className="bg-background/50 hover:bg-primary/20 text-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Integrations Showcase */}
          <div className="mt-12 w-full max-w-5xl">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Plug className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">15+ Third-Party Integrations</h3>
            </div>
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {integrations.map((group, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                        {group.category}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {group.items.map((item, j) => (
                          <Badge key={j} variant="outline" className="text-xs font-normal">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
