import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stage.jpg";
import { Phone, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="neon-glow-cyan text-primary">BONUS</span>
          <span className="neon-glow-red text-accent">FX</span>
        </h1>
        <p className="text-xl md:text-3xl mb-4 text-foreground font-bold tracking-wide">
          PROFESIONALI SCENŲ IR GARSO ĮRANGA
        </p>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Galingas garsas ir įspūdinga vaizdinė technika nepamirštamiems renginiams
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 box-glow-cyan transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            GAUTI PASIŪLYMĄ
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            SUSISIEKITE
          </Button>
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-foreground/80">
          <a 
            href="tel:+37065657016" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse-glow" />
            <span className="font-semibold">+370 656 57016</span>
          </a>
          <span className="hidden sm:block text-muted-foreground">|</span>
          <a 
            href="mailto:bonusfx@gmail.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:animate-pulse-glow" />
            <span className="font-semibold">bonusfx@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
