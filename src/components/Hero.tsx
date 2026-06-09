
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center text-center">
          <div 
            className="mb-6 transition-transform duration-500 hover:scale-110 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <Avatar className="h-40 w-40 border-4 border-primary shadow-lg">
              <AvatarImage src="/gk.webp" alt="Profile" />
              <AvatarFallback>GK</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 
            className="text-3xl md:text-5xl font-bold tracking-tighter animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <span className="text-primary">K Ganesh</span> Krishna
          </h1>
          <p 
            className="text-xl md:text-2xl text-muted-foreground max-w-[800px] animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
           Computer Science Graduate | Passionate About  Building Web Apps 
          </p>
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-[800px] mt-2 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            Enthusiastic fresher with strong academic background and hands-on project experience.
            Eager to contribute innovative solutions in a dynamic team environment.
          </p>
          
          <div 
            className="flex gap-4 mt-6 animate-fade-in"
            style={{ animationDelay: "1000ms" }}
          >
            <a href="#contact">
              <Button className="gap-2">
                <Mail size={18} />
                Contact Me
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="gap-2">
                <FileText size={18} />
                View Projects
              </Button>
            </a>
          </div>
          
          <div 
            className="flex gap-4 mt-6 animate-fade-in"
            style={{ animationDelay: "1200ms" }}
          >
            <a 
              href="https://www.linkedin.com/in/k-ganesh-krishna584652364" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Ganesh-krish" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
