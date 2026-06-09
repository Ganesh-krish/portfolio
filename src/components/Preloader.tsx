
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">GK</span>
          </div>
        </div>
        <p className="mt-4 text-lg font-medium text-primary">Loading...</p>
      </div>
    </div>
  );
}
