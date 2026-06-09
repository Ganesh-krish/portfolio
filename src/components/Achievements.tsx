
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Users } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Research Publication",
      description: "Published paper in the journal IRJMETS titled 'Blockchain-based bank transaction traceability'",
      link: "https://drive.google.com/file/d/10DJav9VZBOnTouBTbo77SfgHaKhYQVgh/view?usp=sharing",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Teaching",
      description: "Peer Taught school students programming languages as part of an extension activity, helping them gain early exposure to coding concepts",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title">Achievements</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card overflow-hidden h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {achievement.icon}
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground">
                    {achievement.description}
                    {achievement.link && (
                      <a 
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline block mt-2"
                      >
                        View Paper
                      </a>
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
