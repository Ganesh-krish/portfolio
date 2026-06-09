
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Boxes, Plug, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Published Research Paper",
    description: "\"Blockchain-based Bank Transaction Traceability\" — IRJMETS, February 2025. Blockchain application in banking for transparent, tamper-proof transaction traceability.",
    link: "https://drive.google.com/file/d/10DJav9VZBOnTouBTbo77SfgHaKhYQVgh/view?usp=sharing",
    linkText: "View Paper",
  },
  {
    icon: <Boxes className="h-6 w-6 text-primary" />,
    title: "5 Production Products in First Year",
    description: "Built and shipped 5 live SaaS products in the first year of full-time employment — DrillU, LifeBoat, Swastik ERP, Swastik Ecommerce, and Surge.",
  },
  {
    icon: <Plug className="h-6 w-6 text-primary" />,
    title: "15+ Third-Party API Integrations",
    description: "Government APIs, payment gateways, biometric hardware, social media platforms, cloud services — all integrated and running in production systems.",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "M.Sc. Computer Science — CGPA 7.98 / 10",
    description: "Master of Science in Computer Science, Ayya Nadar Janaki Ammal College, Sivakasi (2023–2025).",
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "B.Sc. Computer Science — CGPA 8.0 / 10",
    description: "Bachelor of Science in Computer Science, Ayya Nadar Janaki Ammal College, Sivakasi (2019–2022).",
  },
];

export function Achievements() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Achievements</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {achievements.map((item, index) => (
              <Card key={index} className="glass-card overflow-hidden h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline block mt-2 text-sm"
                    >
                      {item.linkText}
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
