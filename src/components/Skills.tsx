
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Layout, Globe } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code2 className="h-5 w-5 text-primary" />,
      skills: ["C", "Java", "JavaScript", "Python", "PHP", "SQL","C++"],
    },
    {
      name: "Frameworks",
      icon: <Layout className="h-5 w-5 text-primary" />,
      skills: ["Spring Boot", "React.js", "Django",  "Laravel", "Node.js",  "Bootstrap"],
    },
    {
      name: "Databases",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase"],
    },
    {
      name: "Others",
      icon: <Globe className="h-5 w-5 text-primary" />,
      skills: ["Git", "Hyperledger Fabric","Docker", "RESTful APIs", "Razorpay"],
    },
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
        </div>
      </div>
    </section>
  );
}
