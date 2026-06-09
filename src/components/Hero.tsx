
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Download } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState, useRef } from "react";

const roles = [
  "Backend Developer",
  "API Integration Engineer",
  "CodeIgniter · PHP · MySQL",
  "5 Products in Production",
];

const stats = [
  { value: 5, suffix: "", label: "Products Shipped" },
  { value: 15, suffix: "+", label: "API Integrations" },
  { value: 1, suffix: " yr", label: "Production Experience" },
  { value: 3, suffix: "", label: "Auth Systems Built" },
];

function useCounter(target: number, duration = 1500, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 1200, start);
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-lg bg-primary/5 border border-primary/20">
      <span className="text-2xl md:text-3xl font-bold text-primary">
        {count}{suffix}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground mt-1 text-center">{label}</span>
    </div>
  );
}

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/137AkA3UMimqLFz0HuTo-LtRytha5-N6u/view?usp=drivesdk", "_blank");
  };

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 items-center text-center">
          <div
            className="mb-6 transition-transform duration-500 hover:scale-110 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <Avatar className="h-40 w-40 border-4 border-primary shadow-lg">
              <AvatarImage src="/gk.webp" alt="K Ganesh Krishna" />
              <AvatarFallback>GK</AvatarFallback>
            </Avatar>
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold tracking-tighter animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <span className="text-primary">K Ganesh</span> Krishna
          </h1>

          <div
            className="h-8 flex items-center justify-center animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <p className="text-xl md:text-2xl text-primary font-semibold transition-all duration-500">
              {roles[roleIndex]}
            </p>
          </div>

          <p
            className="text-base md:text-lg text-muted-foreground max-w-[680px] mt-2 animate-fade-in"
            style={{ animationDelay: "700ms" }}
          >
            Backend developer who ships real products, not tutorials.
            <br />
            <span className="font-medium text-foreground">5 live products · 15+ integrations · 1 year · All in production.</span>
          </p>

          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 w-full max-w-xl animate-fade-in"
            style={{ animationDelay: "900ms" }}
          >
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} start={visible} />
            ))}
          </div>

          <div
            className="flex gap-4 mt-6 animate-fade-in"
            style={{ animationDelay: "1100ms" }}
          >
            <a href="#projects">
              <Button className="gap-2">
                <FileText size={18} />
                View Projects
              </Button>
            </a>
            <Button variant="outline" className="gap-2" onClick={handleDownloadResume}>
              <Download size={18} />
              Download Resume
            </Button>
          </div>

          <div
            className="flex gap-4 mt-4 animate-fade-in"
            style={{ animationDelay: "1300ms" }}
          >
            <a
              href="https://linkedin.com/in/k-ganesh-krishna-584652364"
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
