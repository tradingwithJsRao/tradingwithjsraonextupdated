import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Bitcoin, TrendingUp, Gem, BarChart3, ArrowRight } from "lucide-react";

// Public image paths (served by Next optimally with next/image)
const service1 = "/assets/service-1.jpg";
const service2 = "/assets/service-2.jpg";
const service3 = "/assets/service-3.jpg";
const service4 = "/assets/service-4.jpg";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  image: string;
  alt: string;
  excerpt: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel: string;
  slug: string; // used for JSON-LD
};

const Services = () => {
  const services: Service[] = [
    {
      icon: Bitcoin,
      title: "Crypto Trading",
      image: service1,
      alt:
        "Crypto trading analysis dashboard showing candlestick chart and indicators used by TradingWithJSRao",
      excerpt:
        "End-to-end support for crypto traders: market structure, risk management, entries/exits, and portfolio allocation—backed by data and repeatable rules.",
      bullets: [
        "Multi-timeframe technical analysis (price action + confluence)",
        "Risk management frameworks (position sizing, max drawdown, ATR-based SL)",
        "Clear entry/exit plans with invalidation and scaling logic",
        "Market regime detection (trend, range, volatility clusters)",
        "Education + playbooks so you can execute with confidence",
      ],
      ctaHref: "/contact",
      ctaLabel: "Start Crypto Trading",
      slug: "crypto-trading",
    },
    {
      icon: TrendingUp,
      title: "Forex Trading",
      image: service2,
      alt:
        "Forex trading screen with EURUSD chart, trendlines, and technical indicators for education and signals",
      excerpt:
        "Institutional-style Forex trading with strict risk controls, economic calendar awareness, and technically sound setups that fit your timezone and routine.",
      bullets: [
        "Major pairs and high-liquidity crosses only (tight spreads)",
        "Structure + imbalance + liquidity pools for high-probability entries",
        "News risk planning around CPI, NFP, FOMC, and rate decisions",
        "Trade journaling templates to improve win-rate over time",
        "Live reviews of executed trades for continuous learning",
      ],
      ctaHref: "/contact",
      ctaLabel: "Improve Forex Edge",
      slug: "forex-trading",
    },
    {
      icon: Gem,
      title: "Commodities Trading",
      image: service3,
      alt:
        "Commodities trading view with gold and oil charts highlighting support and resistance levels",
      excerpt:
        "Trade Gold, Oil, and Silver with a clean process: directional bias, defined invalidation, and time-of-day execution that avoids chop.",
      bullets: [
        "Bias from higher-timeframe structure and order-flow clues",
        "Session timing: London/NY overlaps for better follow-through",
        "Volatility filters to reduce false signals on event days",
        "Playbooks for XAUUSD and WTI with backtested guidelines",
        "Weekly prep sheets and post-session debriefs",
      ],
      ctaHref: "/contact",
      ctaLabel: "Trade Commodities Smarter",
      slug: "commodities-trading",
    },
    {
      icon: BarChart3,
      title: "Stocks Trading",
      image: service4,
      alt:
        "Stock market dashboard with candlestick chart and volume profile used for swing and position trading",
      excerpt:
        "Evidence-based stock trading: liquidity zones, break-of-structure, and volume context for cleaner swing entries—without overtrading.",
      bullets: [
        "Watchlists and scanners for momentum & mean-reversion",
        "Swing trade frameworks with multi-week targets",
        "Volume + liquidity: where moves are likely to continue",
        "Risk-adjusted sizing and multiple take-profit ladders",
        "Weekly market outlook + trade ideas recap",
      ],
      ctaHref: "/contact",
      ctaLabel: "Plan Better Stock Trades",
      slug: "stocks-trading",
    },
  ];

  // Optional: JSON-LD Service markup to help Google understand offerings
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.title,
      description: s.excerpt,
      url: `https://tradingwithjsrao.com#${s.slug}`,
      provider: {
        "@type": "Organization",
        name: "TradingWithJSRao",
        url: "https://tradingwithjsrao.com",
      },
      areaServed: "Global",
    })),
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* JSON-LD can live in the component; for maximum control you can also move it to the page <Head> */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 animate-fade-in">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">
          Trading services for Crypto, Forex, Commodities, and Stocks. Learn the process, apply the rules,
          and compound skill over time. Explore the summaries below and{" "}
          <Link href="/blog" className="underline underline-offset-4 decoration-primary">
            read detailed guides on the blog
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                id={service.slug}
                className="group relative overflow-hidden card-gradient border-0 hover-lift animate-fade-in-up card-3d"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0} // help LCP on first card
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <div className="relative p-6 sm:p-8">
                  <div className="absolute -top-6 sm:-top-8 left-6 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold pt-6 sm:pt-8">{service.title}</h3>

                  <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.excerpt}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm sm:text-base list-disc pl-5">
                    {service.bullets.map((b, i) => (
                      <li key={i} className="marker:text-primary">
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm sm:text-base hover:opacity-90 transition"
                      aria-label={`${service.ctaLabel} — ${service.title}`}
                    >
                      {service.ctaLabel}
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/blog"
                      className="text-sm sm:text-base hover:underline underline-offset-4 text-muted-foreground"
                    >
                      See Tutorials & Case Studies
                    </Link>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
