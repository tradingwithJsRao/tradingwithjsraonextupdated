import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
// Static paths to testimonial images stored in public/assets. Avoid importing the images so Next can serve them directly.
const R1 = "/assets/R1.jpg";
const R2 = "/assets/R2.jpg";
const R3 = "/assets/R3.jpg";
const R5 = "/assets/R5.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Malik Usman",
      role: "Premium Member",
      rating: 5,
      image: R1
    },
    {
      name: "Community Member",
      role: "Member",
      rating: 5,
      image: R2
    },
    {
      name: "Trading Enthusiast",
      role: "Free Member",
      rating: 5,
      image: R3
    },
    {
      name: "Crypto Trader",
      role: "Free Member",
      rating: 5,
      image: R5
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 animate-fade-in">
          Client <span className="gradient-text">Reviews</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group p-6 card-gradient border-primary/10 hover:border-primary/30 transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors h-[300px] sm:h-[350px]">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} review`}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
