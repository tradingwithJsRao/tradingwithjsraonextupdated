import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
// Static paths to gallery images stored in public/assets. Avoid importing the images so Next can serve them directly.
const gallery1 = "/assets/gallery-1.jpg";
const gallery3 = "/assets/gallery-3.jpg";
const gallery4 = "/assets/gallery-4.jpg";

const Gallery = () => {
  const events = [
    { id: 1, location: "Islamabad", type: "Meetup", image: gallery1 },
    { id: 2, location: "Karachi", type: "Event", image: gallery3 },
    { id: 3, location: "Karachi", type: "Event", image: gallery4 },
 
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 animate-fade-in">
          Event <span className="gradient-text">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <Card 
              key={event.id}
              className="group relative overflow-hidden card-gradient border-0 hover-lift cursor-pointer animate-scale-in card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-[300px] sm:h-[350px]">
                <img 
                  src={event.image} 
                  alt={`${event.location} ${event.type}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 sm:p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold">{event.location}</h3>
                    <p className="text-sm text-muted-foreground">{event.type}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
