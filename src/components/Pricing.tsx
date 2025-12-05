import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, X } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  
  const handleChoosePlan = (plan: any) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      name: "3 Months",
      price: "$100",
      period: "3 months",
      features: [
        "Scalps",
        "1 user",
        "WhatsApp Group support",
        "Intra-day & Swing Trades",
        "Portfolio Management",
        "Premium JS Team Support"
      ],
      popular: false
    },
    {
      name: "6 Months",
      price: "$180",
      period: "6 months",
      features: [
        "Scalps",
        "1 user",
        "WhatsApp Group support",
        "Intra-day & Swing Trades",
        "Portfolio Management",
        "Premium JS Team Support"
      ],
      popular: true
    },
    {
      name: "Yearly Premium",
      price: "$300",
      period: "Yearly",
      features: [
        "Scalps",
        "1 user",
        "WhatsApp Group support",
        "Intra-day & Swing Trades",
        "Portfolio Management",
        "Premium JS Team Support"
      ],
      popular: false
    },
    {
      name: "Premium Plus Yearly",
      price: "$500",
      period: "Yearly",
      features: [
        "1-on-1 Live Trade",
        "Personal Inbox Access",
        "Scalps",
        "1 user",
        "WhatsApp Group support",
        "Intra-day & Swing Trades",
        "Portfolio Management",
        "Premium JS Team Support"
      ],
      popular: false,
      premium: true
    },
    {
      name: "Pro Premium Plus",
      price: "$700",
      period: "Lifetime",
      features: [
        "1-on-1 Live Trade",
        "Live Crypto Course",
        "Personal Inbox Access",
        "Scalps",
        "1 user",
        "WhatsApp Group support",
        "Intra-day & Swing Trades",
        "Portfolio Management",
        "Premium JS Team Support"
      ],
      popular: false,
      premium: true
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 animate-fade-in">
          J.S RAO <span className="gradient-text">Premium Plans</span>
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12">Experience your Trading Journey with a Chartered Accountant</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden p-6 sm:p-8 card-gradient border-0 hover-lift animate-scale-in card-3d ${
                plan.popular ? 'ring-2 ring-primary shadow-lg shadow-primary/20' : ''
              } ${plan.premium ? 'border-2 border-primary/50' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold rounded-bl-lg">
                  Popular
                </div>
              )}
              
              {plan.premium && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-glow-pulse" />
                </div>
              )}
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-sm sm:text-base text-muted-foreground">/ {plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.premium ? "premium" : plan.popular ? "default" : "outline"}
                  className="w-full text-sm sm:text-base"
                  onClick={() => handleChoosePlan(plan)}
                >
                  {plan.premium && <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />}
                  Choose Plan
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 card-gradient border-primary/20 card-3d">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 gradient-text">Disclaimer</h3>
          <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-2 sm:mb-3 lg:mb-4">
            Please be aware that requesting the psychometric test without intending to join the group may result in a waste of time and resources. We appreciate your understanding in this matter.
          </p>
          <p className="text-xs sm:text-sm lg:text-base font-semibold">
            NOTE: To become our Premium Member, you must pass our Psychometric Test.
          </p>
        </Card>
      </div>

      <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto card-gradient border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl gradient-text flex items-center gap-2">
              {selectedPlan?.premium && <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-glow-pulse" />}
              {selectedPlan?.name}
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg">
              {selectedPlan?.period}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-bold gradient-text">{selectedPlan?.price}</span>
              <span className="text-muted-foreground text-lg sm:text-xl">/ {selectedPlan?.period}</span>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg sm:text-xl font-semibold">What's Included:</h4>
              <ul className="space-y-2 sm:space-y-3">
                {selectedPlan?.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-card/50 border border-primary/20">
              <h4 className="text-base sm:text-lg font-semibold">Bank Details</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
                  <p className="font-semibold text-foreground">IBAN NO:</p>
                  <p className="text-muted-foreground font-mono break-all">PK10FAYS3206301000001734</p>
                </div>
                <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
                  <p className="font-semibold text-foreground">Bank Name:</p>
                  <p className="text-muted-foreground">FAYSAL BANK LTD</p>
                </div>
                <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
                  <p className="font-semibold text-foreground">Account Title:</p>
                  <p className="text-muted-foreground">JANSHERKHAN</p>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-3 sm:pt-4 mt-3 sm:mt-4">
                <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">USDT TRC-20 Address:</h4>
                <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
                  <p className="text-muted-foreground font-mono text-xs break-all">TLoLeNJumnEZd5ubqv4D8qJvxQomfeR2Bu</p>
                </div>
              </div>

              <div className="p-2 sm:p-3 bg-background/50 rounded-lg">
                <p className="font-semibold text-foreground text-xs sm:text-sm">Binance ID:</p>
                <p className="text-muted-foreground text-xs sm:text-sm">458260839 (js-rao)</p>
              </div>

              <div className="border-t border-primary/20 pt-3 sm:pt-4 mt-3 sm:mt-4">
                <h4 className="text-sm sm:text-base font-semibold mb-2">How to pay:</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Copy the USDT TRC-20 address or Binance ID.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Open your crypto wallet or Binance account.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Send the specified amount to the provided address or Binance ID.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Include any necessary transaction details (e.g., memo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Contact us with the transaction ID/hash for confirmation.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/30 p-3 sm:p-4 rounded-lg mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm font-semibold text-foreground mb-2">Note:</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">After payment send screenshot with your name and Email address to:</p>
                <div className="p-2 bg-background/50 rounded">
                  <p className="font-semibold text-foreground text-xs sm:text-sm">Gmail:</p>
                  <p className="text-primary font-mono text-xs sm:text-sm break-all">raojansher04@gmail.com</p>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">You will be shortly added to the group after passing the Psychometric Test.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button 
                variant="outline" 
                className="flex-1 text-sm sm:text-base"
                onClick={() => setSelectedPlan(null)}
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Cancel
              </Button>
              <Button 
                variant={selectedPlan?.premium ? "premium" : "default"}
                className="flex-1 text-sm sm:text-base"
                onClick={() => {
                  toast.success(`${selectedPlan?.name} selected!`, {
                    description: "Redirecting to registration..."
                  });
                  setSelectedPlan(null);
                }}
              >
                {selectedPlan?.premium && <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />}
                Confirm Selection
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Pricing;