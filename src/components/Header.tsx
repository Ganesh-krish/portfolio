
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useState } from "react";

interface NavItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className="text-foreground/80 hover:text-primary transition-colors px-4 py-2 rounded-md"
      >
        {label}
      </a>
    </li>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/137AkA3UMimqLFz0HuTo-LtRytha5-N6u/view?usp=drivesdk", "_blank");
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#" className="text-xl md:text-2xl font-bold text-primary">
            GK<span className="text-foreground"></span>
          </a>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                onClick={closeMenu}
              />
            ))}
            <li className="ml-2">
              <Button 
                size="sm" 
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-primary hover:from-blue-600 hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={handleDownloadResume}
              >
                <Download size={16} className="animate-bounce-subtle" /> Resume
              </Button>
            </li>
            <li className="ml-1">
              <ThemeToggle />
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu />
          </Button>
        </div>
        
        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-b animate-fade-in">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavItem
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  onClick={closeMenu}
                />
              ))}
              <li className="pt-2">
                <Button 
                  className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-blue-500 to-primary hover:from-blue-600 hover:to-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={handleDownloadResume}
                >
                  <Download size={16} className="animate-bounce-subtle" /> Resume
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
