
import { Button } from "@/components/ui/button";
import { Download, Menu, X, User, Briefcase, FolderKanban, Code2, GraduationCap, BadgeCheck, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

const navItems: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "#about",        label: "About",        Icon: User          },
  { href: "#experience",   label: "Experience",   Icon: Briefcase     },
  { href: "#projects",     label: "Projects",     Icon: FolderKanban  },
  { href: "#skills",       label: "Skills",       Icon: Code2         },
  { href: "#education",    label: "Education",    Icon: GraduationCap },
  { href: "#certificates", label: "Certificates", Icon: BadgeCheck    },
  { href: "#contact",      label: "Contact",      Icon: Mail          },
];

export function Header() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm shadow-slate-900/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <a href="#" aria-label="K Ganesh Krishna — home" className="flex items-center gap-3 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
          >
            GK
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-display">
              Ganesh Krishna
            </span>
            <span className="font-mono-code text-[10px] text-slate-400 dark:text-slate-500 ml-1.5">
              .backend
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {navItems.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Icon size={13} className="flex-shrink-0 opacity-70" />
              {label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            size="sm"
            onClick={() => window.open("https://drive.google.com/file/d/1_JwCnj34P1hvTPNAVUN66bCeLdTT-icS/view?usp=sharing", "_blank")}
            className="gap-2 text-xs font-semibold h-8 px-3"
            style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "#fff", border: "none" }}
            aria-label="Download resume (opens in new tab)"
          >
            <Download size={12} /> Resume
          </Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="h-9 w-9"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 py-4 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {navItems.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Icon size={14} className="flex-shrink-0 opacity-60" />
                {label}
              </a>
            ))}
            <Button
              className="mt-3 w-full gap-2"
              onClick={() => { window.open("https://drive.google.com/file/d/1_JwCnj34P1hvTPNAVUN66bCeLdTT-icS/view?usp=sharing", "_blank"); close(); }}
              style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)", color: "#fff", border: "none" }}
            >
              <Download size={14} /> Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
