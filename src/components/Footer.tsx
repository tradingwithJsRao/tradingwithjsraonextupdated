// src/components/Footer.tsx
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/share/1DJcVPdd5J/", label: "Facebook" },
    { icon: Instagram, url: "https://www.instagram.com/jsraoaca?igsh=YzdrYWtrZ3g1Z2cw", label: "Instagram" },
    { icon: Youtube, url: "https://youtube.com/@cryptowithjsrao?si=a8aTR3gbiDmdKkbE", label: "YouTube" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-card border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">JS RAO</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expert guidance in Crypto, Forex, Commodities & Stocks trading with professional Chartered Accountant expertise.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 flex items-center justify-center transition-all duration-300 hover-lift"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Pricing", "Testimonials", "Gallery"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    type="button"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              {["Crypto Trading", "Forex Trading", "Commodities", "Stocks Trading"].map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:raojs04@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                 raojansher04@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://whatsapp.com/channel/0029VactXmlId7nSPgwgTP21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Pakistan</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-primary/20">
              <h5 className="text-sm font-semibold mb-2">More Channels</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://t.me/JsRaoACCA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Telegram Channel
                  </a>
                </li>
                <li>
                  <a
                    href="https://vt.tiktok.com/ZSBdGqEkE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    TikTok Bulletin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@js.rao5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    TikTok Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} JS RAO. All rights reserved.
            </p>
        

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground items-center">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link href="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <span>•</span>
              {/* Newly added refund policy link for payment gateway compliance */}
              <Link href="/refund" className="hover:text-primary transition-colors">
                Refund & Cancellation
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
