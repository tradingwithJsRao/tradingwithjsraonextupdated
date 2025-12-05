import { Card } from "@/components/ui/card";
// Static path to about banner stored in public/assets. Avoid importing the image so Next can serve it directly.
const aboutBanner = "/assets/about-banner.png";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative animate-fade-in perspective-container order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-3xl animate-float" />
            <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-primary/30 card-3d glow-effect">
              <img 
                src={aboutBanner} 
                alt="JS Rao - About" 
                className="w-full h-full object-cover image-3d"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-fade-in-up order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Hi. I'm <span className="gradient-text">JS RAO</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Halal trader specializing exclusively in <span className="text-foreground font-semibold">spot trading</span> across diverse financial markets.
                My expertise spans <span className="gradient-text font-semibold">cryptocurrencies</span>, <span className="gradient-text font-semibold">forex</span>, <span className="gradient-text font-semibold">commodities</span>,
                <span className="gradient-text font-semibold"> stocks</span>, and <span className="gradient-text font-semibold">indices</span>.
              </p>
              
              <p>
                With over nine years of experience as a trader and investor, including navigating three bull runs, I bring a wealth of practical market knowledge. 
                My background also includes serving in the multinational sector as a <span className="text-foreground font-semibold">Chartered Accountant</span> and currently leading
                my family's industrial business as <span className="text-foreground font-semibold">CEO</span>.
              </p>
              
              <p>
                For the past two years, I have been actively influencing <span className="gradient-text font-semibold">Pakistan's crypto industry</span> through TikTok and YouTube, where
                I also share my knowledge by teaching cryptocurrency and forex trading. Trading, for me, is a passion more than a profession, 
                and I'm recognized as a <span className="text-foreground font-semibold">fundamentals expert</span>.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <div className="inline-block">
                <div className="text-3xl sm:text-4xl font-bold gradient-text italic">JS Rao</div>
                <div className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
