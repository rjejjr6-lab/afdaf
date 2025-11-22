import { CheckCircle2 } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    "Profesionali įranga iš pirmaujančių gamintojų",
    "Patyrusių technikų ir montavimo komanda",
    "Lankstūs nuomos paketai, tinkantys bet kokiam biudžetui",
    "24/7 skubi pagalba jūsų renginio metu",
    "Pilna įrangos draudimo apsauga",
    "Individualūs sprendimai, pritaikyti jūsų poreikiams",
    "Greitas atsako laikas ir patikimas pristatymas",
    "Konkurencingos kainos be kompromisų kokybei"
  ];

  return (
    <section id="why-us" className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            KODĖL <span className="neon-glow-red text-accent">PASIRINKTI MUS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mes ne tik nuomojame įrangą – mes kuriame nepamirštamus įspūdžius.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-background/50 p-6 rounded-lg border border-border hover:border-primary transition-all duration-300 group"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:animate-pulse-glow" />
                <p className="text-foreground font-medium text-lg">{reason}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
