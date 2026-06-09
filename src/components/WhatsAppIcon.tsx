
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { WhatsappLogo } from "phosphor-react";

export function WhatsAppIcon() {
  const [showIcon, setShowIcon] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/916380249114", "_blank");
  };

  return (
    <div className={`fixed bottom-6 left-6 z-40 transition-all duration-500 ${
      showIcon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
    }`}>
      {/* Tooltip */}
      <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm px-3 py-1.5 rounded-full shadow-lg transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      } whitespace-nowrap font-medium`}>
        Chat with me
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white dark:border-t-gray-800"></div>
      </div>
      
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
      
      {/* Button */}
      <Button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded-full p-4 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="icon"
        aria-label="Contact on WhatsApp"
      >
        <div className="text-white">
          <WhatsappLogo weight="fill" size={32} />
        </div>
      </Button>
    </div>
  );
}
