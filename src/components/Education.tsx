
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "M.Sc (Computer Science)",
      institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
      period: "June 2023 - May 2025",
      percentage: "80%",
    
    },
    {
      degree: "B.Sc (Computer Science)",
      institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
      period: "June 2020 - May 2023",
      percentage: "77%",
    },
    {
      degree: "HSC",
      institution: "Srivi Lions Matriculation Higher Secondary School, Srivilliputtur",
      period: "June 2019 - April 2020",
      percentage: "77%",
    },
  ];

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
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">Percentage:</span>
                      <span>{item.percentage}</span>
                     
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
