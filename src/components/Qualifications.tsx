import { Card } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
// Static paths to qualification certificate images stored in public/assets. Avoid importing the images so Next can serve them directly.
const catCert = "/assets/cat.jpg";
const accaCert = "/assets/acca.jpg";
const icaewCert = "/assets/icaew.jpg";

const Qualifications = () => {
  const qualifications = [
    { title: "Matriculation", institution: "DPS Rajanpur", icon: GraduationCap },
    { title: "Intermediate", institution: "FC College University Lahore", icon: GraduationCap },
    { title: "BS Hons Accounting & Finance", institution: "Oxford Brookes University England", icon: GraduationCap },
    { title: "Certified Accounting Technician (CAT)", institution: "ACCA", icon: Award, image: catCert },
    { title: "Association of Chartered Certified Accountants (ACCA)", institution: "ACCA", icon: Award, image: accaCert },
    { title: "The Institute of Chartered Accountants in England and Wales (ICAEW)", institution: "ICAEW", icon: Award, image: icaewCert },
    { title: "The Institute of Chartered Accountants of Pakistan (ICAP-ACA)", institution: "ICAP", icon: Award },
  ];

  return (
    <section id="qualifications" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          My <span className="gradient-text">Qualifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Professional Certifications & Education</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return (
              <Card 
                key={index}
                className="group card-gradient border-primary/20 hover-lift animate-scale-in card-3d overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {qual.image && (
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={qual.image} 
                      alt={qual.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-lg">{qual.title}</h3>
                      <p className="text-muted-foreground text-sm">{qual.institution}</p>
                    </div>
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

export default Qualifications;
