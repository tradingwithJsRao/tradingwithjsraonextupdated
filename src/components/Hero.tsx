import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";

// Static path to hero banner stored in public/assets. Avoid importing the image so Next can serve it directly.
// When served through the `next/image` component, Next.js will automatically optimise the image
// and serve modern formats like WebP when the browser supports them. Keeping the string
// separate from the import allows static file serving from the `public` directory.
const heroBanner = "/assets/hero-banner.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-bounce-slow">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold">10+ Years Experience</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-shadow-glow">
            JS RAO
            <span className="gradient-text block mt-2">CA</span>
          </h1>
          
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["CA", "ACCA", "ICAEW", "Trader"].map((badge, i) => (
              <span 
                key={badge} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card border border-primary/20 text-xs sm:text-sm font-semibold hover:bg-primary/10 hover:scale-110 transition-all duration-300 card-3d"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Expert guidance in Crypto, Forex, Commodities & Stocks trading with professional Chartered Accountant expertise.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="group w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('services')}
              className="w-full sm:w-auto"
            >
              Explore Services
            </Button>
          </div>
        </div>

        <div className="relative animate-slide-in-right perspective-container mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full animate-float" />
        <div className="relative aspect-square max-w-sm sm:max-w-lg mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-primary/30 card-3d glow-effect">
            {/*
              Use the `next/image` component instead of a standard <img> tag for the hero banner.  
              Providing explicit width and height allows Next.js to calculate intrinsic sizes and prevents
              layout shifts. The `sizes` prop tells the browser which image size to request based on the
              viewport width: full width on mobile, half width on medium devices and one third on large
              screens. The `priority` prop marks this image as highest priority so it is downloaded
              quickly and improves Largest Contentful Paint (LCP) metrics.  
            */}
            <Image
              src={heroBanner}
              alt="JS Rao - Professional Trader and Chartered Accountant"
              fill
              className="object-cover image-3d"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
