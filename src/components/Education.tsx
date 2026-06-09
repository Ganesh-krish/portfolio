
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "M.Sc. (Computer Science)",
    institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
    period: "Jun 2023 – Apr 2025",
    cgpa: "7.98 / 10.0",
  },
  {
    degree: "B.Sc. (Computer Science)",
    institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
    period: "Sep 2019 – Oct 2022",
    cgpa: "8.0 / 10.0",
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Education</h2>

          <div className="mt-8 space-y-6 w-full max-w-3xl">
            {education.map((item, index) => (
              <Card key={index} className="glass-card overflow-hidden">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-full mt-1">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <div className="flex items-center text-muted-foreground gap-2 text-sm mt-1">
                      <MapPin className="h-4 w-4" />
                      <span>{item.institution}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-16">
                  <div className="flex flex-wrap gap-x-8 gap-y-2">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="font-medium">CGPA:</span>
                      <span className="text-primary font-semibold">{item.cgpa}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
