
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Experience</h2>
          
          <div className="mt-8 w-full max-w-4xl">
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>Intern - Anjana Infotech</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>June 2021 - May 2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 ml-6 list-disc">
                  <li>Worked as a part-time intern while pursuing my undergraduate degree</li>
                  <li>Gained hands-on experience in full stack web development</li>
                  <li>Shared knowledge with students from other colleges</li>
                  <li>Took online and offline classes to teach college students</li>
                  <li>Enjoyed learning and growing with others through teaching</li>
                </ul>
                <div className="text-sm text-muted-foreground pt-2">
                  <strong>Contact:</strong> Mr. M. Sakthi Saravanan, Founder & Manager, Anjana Infotech – 97879 70633
                </div>
                 <div className="pt-2">
    <a
      href="https://drive.google.com/file/d/10ZwO9qqKiF8nRlidUXzd0-NXXM4FAib9/view?usp=drivesdk" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary underline text-sm hover:text-primary/80"
    >
      View Certificate
    </a>
  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
