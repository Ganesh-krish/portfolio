
import { BadgeCheck, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function About() {
  const sectionRef = useIntersectionObserver();
  
  const highlights = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary" />,
      title: "Skills",
      description: "Proficient in multiple languages and frameworks including React, Spring Boot, and more",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Experience",
      description: "2 years of part-time internship experience at Anjana Infotech",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: "Education",
      description: "Successfully completed M.Sc. in Computer Science, maintaining a strong academic record throughout the course.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div ref={sectionRef} className="flex flex-col items-center justify-center animate-section">
          <h2 className="section-title">About Me</h2>
          
          <div className="mt-8 max-w-3xl text-justify">
            <p className="text-lg text-muted-foreground stagger-item">
              I'm a Computer Science professional with a passion for creating innovative web solutions. My journey includes experience as an intern at Anjana Infotech, where I gained valuable hands-on skills in full stack development. I enjoy sharing knowledge with others and have experience teaching programming to students.
            </p>
            
            <p className="text-lg text-muted-foreground mt-4 stagger-item">
              With a strong foundation in various programming languages and frameworks, I'm eager to apply my skills to real-world challenges and contribute to impactful projects.
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
