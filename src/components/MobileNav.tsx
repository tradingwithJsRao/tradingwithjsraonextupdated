import { Home, Briefcase, DollarSign, Star, Image } from "lucide-react";
import { useState, useEffect } from "react";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "services", icon: Briefcase, label: "Services" },
    { id: "pricing", icon: DollarSign, label: "Pricing" },
    { id: "testimonials", icon: Star, label: "Reviews" },
    { id: "gallery", icon: Image, label: "Gallery" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-lg border-t border-primary/20 shadow-lg">
      <div className="flex justify-around items-center px-2 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-primary/20 text-primary scale-110"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "animate-bounce-slow" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
