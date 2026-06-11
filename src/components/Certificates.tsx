
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const certificates = [
  { id: 1,  title: "JavaScript",                             issuer: "Guvi Geek Networks", date: "June 25, 2023",     image: "/c1.webp"  },
  { id: 2,  title: "HTML & CSS",                             issuer: "Guvi Geek Networks", date: "June 29, 2023",     image: "/c2.webp"  },
  { id: 3,  title: "Git",                                    issuer: "Guvi Geek Networks", date: "June 25, 2023",     image: "/c3.webp"  },
  { id: 4,  title: "MongoDB",                                issuer: "Guvi Geek Networks", date: "June 23, 2023",     image: "/c4.webp"  },
  { id: 5,  title: "Spring Boot",                            issuer: "Guvi Geek Networks", date: "December 26, 2023", image: "/c5.webp"  },
  { id: 6,  title: "MySQL",                                  issuer: "Guvi Geek Networks", date: "June 24, 2023",     image: "/c6.webp"  },
  { id: 7,  title: "Data Analytics Using Pandas",            issuer: "Guvi Geek Networks", date: "June 25, 2023",     image: "/c7.webp"  },
  { id: 8,  title: "Cyber Security & Ethical Hacking",       issuer: "Guvi Geek Networks", date: "January 5, 2024",   image: "/c8.webp"  },
  { id: 9,  title: "Java",                                   issuer: "Guvi Geek Networks", date: "November 22, 2023", image: "/c9.webp"  },
  { id: 10, title: "Servlets & JSP",                         issuer: "Guvi Geek Networks", date: "December 14, 2024", image: "/c10.webp" },
  { id: 11, title: "Vue.js",                                 issuer: "Guvi Geek Networks", date: "July 30, 2023",     image: "/c11.webp" },
];

const TOTAL = certificates.length;

export function Certificates() {
  const sectionRef = useIntersectionObserver();
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [paused, setPaused] = useState(false);

  const goPrev = useCallback(() => {
    setDir("prev");
    setCurrent(c => (c - 1 + TOTAL) % TOTAL);
  }, []);

  const goNext = useCallback(() => {
    setDir("next");
    setCurrent(c => (c + 1) % TOTAL);
  }, []);

  const goTo = (i: number) => {
    setDir(i > current ? "next" : "prev");
    setCurrent(i);
  };

  /* Auto-advance */
  useEffect(() => {
    if (paused) return;
    const t = setInterval(goNext, 4500);
    return () => clearInterval(t);
  }, [paused, goNext]);

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext]);

  const cert = certificates[current];

  return (
    <section
      id="certificates"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "hsl(var(--muted) / 0.3)" }}
    >
      <div ref={sectionRef} className="animate-section">

        {/* Header */}
        <div className="container px-6 md:px-10 lg:px-16 mb-12 stagger-item">
          <span className="section-eyebrow">Verified</span>
          <h2 className="section-title">Certificates</h2>
          <div className="section-line" />
        </div>

        {/* ── Main viewer ── */}
        <div
          className="container px-6 md:px-10 lg:px-16 stagger-item"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="max-w-4xl mx-auto">

            {/* Certificate card */}
            <div className="relative">

              {/* Glow behind card */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl blur-3xl scale-[0.92] opacity-25 pointer-events-none"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
              />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">

                {/* Counter badge */}
                <div
                  className="absolute top-4 right-4 z-20 font-mono text-[11px] font-semibold px-3 py-1 rounded-full text-white pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(8px)" }}
                >
                  {current + 1} / {TOTAL}
                </div>

                {/* Arrow — left */}
                <button
                  onClick={goPrev}
                  aria-label="Previous certificate"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95"
                  style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Arrow — right */}
                <button
                  onClick={goNext}
                  aria-label="Next certificate"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-all hover:scale-110 active:scale-95"
                  style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Certificate image */}
                <div key={`${cert.id}-${dir}`} className={dir === "next" ? "cert-slide-next" : "cert-slide-prev"}>
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    className="w-full h-auto block"
                    style={{ aspectRatio: "16 / 10", objectFit: "cover" }}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>

                {/* Progress bar at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/10 z-10">
                  <div
                    className="h-full transition-none"
                    style={{
                      width: `${((current + 1) / TOTAL) * 100}%`,
                      background: "linear-gradient(90deg, #2563EB, #7C3AED)",
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Certificate info */}
            <div
              key={`info-${cert.id}`}
              className={`text-center mt-6 ${dir === "next" ? "cert-slide-next" : "cert-slide-prev"}`}
            >
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <BadgeCheck className="w-5 h-5 flex-shrink-0" style={{ color: "#2563EB" }} />
                <h3 className="font-bold text-xl md:text-2xl font-display text-slate-900 dark:text-slate-100 leading-tight">
                  {cert.title}
                </h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold" style={{ color: "#2563EB" }}>{cert.issuer}</span>
                <span className="mx-2 text-slate-300 dark:text-slate-600">·</span>
                {cert.date}
              </p>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to certificate ${i + 1}`}
                  className="rounded-full transition-all duration-300 ease-out"
                  style={{
                    width:   i === current ? "28px" : "8px",
                    height:  "8px",
                    background: i === current
                      ? "linear-gradient(90deg, #2563EB, #7C3AED)"
                      : "rgba(37,99,235,0.2)",
                  }}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
