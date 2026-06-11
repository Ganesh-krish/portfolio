
import { useEffect, useRef } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  threshold  = 0.12,
  rootMargin = "0px 0px -80px 0px",
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            const staggerItems = entry.target.querySelectorAll(".stagger-item");
            staggerItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, 90 * (index + 1));
            });

            if (triggerOnce) observer.unobserve(entry.target);
          } else if (!triggerOnce) {
            entry.target.classList.remove("visible");
            entry.target
              .querySelectorAll(".stagger-item")
              .forEach((item) => item.classList.remove("visible"));
          }
        });
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}
