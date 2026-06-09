
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`p-3 bg-primary rounded-full inline-flex items-center justify-center hover:bg-primary/90 transition-all duration-500 shadow-lg fixed bottom-6 right-6 z-50 ${
        showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 text-primary-foreground" />
    </button>
  );
}
