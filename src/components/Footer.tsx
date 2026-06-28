
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
            >
              GK
            </div>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 font-display">
              K Ganesh Krishna
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
            <span className="font-mono-code">Backend Developer</span>
            <span>·</span>
            <span>© {year}</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
