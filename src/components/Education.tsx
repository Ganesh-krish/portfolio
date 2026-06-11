
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
    period: "Jun 2023 – Apr 2025",
    cgpa: "7.98 / 10.0",
    color: "#2563EB",
    file: "msc_cs.degree",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Ayya Nadar Janaki Ammal College, Sivakasi",
    period: "Sep 2019 – Oct 2022",
    cgpa: "8.0 / 10.0",
    color: "#7C3AED",
    file: "bsc_cs.degree",
  },
];

export function Education() {
  const sectionRef = useIntersectionObserver();

  return (
    <section
      id="education"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f8fafc 45%, #f5f3ff 100%)" }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='1.4' fill='%232563EB' fill-opacity='0.09'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top tint stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(37,99,235,0.05) 0%, transparent 100%)" }}
      />

      {/* Decorative glow — top right */}
      <div
        className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)" }}
      />
      {/* Decorative glow — bottom left */}
      <div
        className="absolute -bottom-20 left-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)" }}
      />

      {/* Floating academic icons — decorative */}
      <div className="absolute top-12 right-12 opacity-5 pointer-events-none hidden lg:block">
        <GraduationCap className="w-28 h-28 text-blue-600" />
      </div>
      <div className="absolute bottom-16 left-10 opacity-5 pointer-events-none hidden lg:block">
        <BookOpen className="w-20 h-20 text-violet-600" />
      </div>

      <div className="container px-6 md:px-10 lg:px-16 relative z-10">
        <div ref={sectionRef} className="animate-section">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="stagger-item">
              <span className="section-eyebrow">academic background</span>
              <h2 className="section-title">Education</h2>
              <div className="section-line mb-6" />
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                Postgraduate in Computer Science with strong academic performance throughout both degrees at Ayya Nadar Janaki Ammal College.
              </p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3 mt-8">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border"
                  style={{ background: "rgba(37,99,235,0.06)", borderColor: "rgba(37,99,235,0.2)", color: "#2563EB" }}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  PG · M.Sc CS
                </div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border"
                  style={{ background: "rgba(124,58,237,0.06)", borderColor: "rgba(124,58,237,0.2)", color: "#7C3AED" }}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  UG · B.Sc CS
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4">
              {education.map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-6 flex items-start gap-5 stagger-item hover:-translate-y-1 transition-transform duration-200"
                  style={{ borderLeft: `3px solid ${item.color}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}12` }}
                  >
                    <GraduationCap className="h-5 w-5" style={{ color: item.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 font-display">{item.degree}</h3>
                      <span
                        className="font-bold text-sm font-display whitespace-nowrap px-2.5 py-0.5 rounded-lg"
                        style={{ background: `${item.color}10`, color: item.color }}
                      >
                        CGPA {item.cgpa}
                      </span>
                    </div>
                    <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      {item.institution}
                    </p>
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                      <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="h-3 w-3" /> {item.period}
                      </span>
                      <span className="font-mono-code text-[10px] text-slate-400 dark:text-slate-500">
                        {item.file}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
