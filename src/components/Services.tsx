import { Disc3, Mic, Lightbulb, Truck } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Disc3,
      title: "Garso Sistemos",
      description: "Profesionali garso įranga su kristaliniu garso kokybe. Nuo nedidelių salių iki didelių lauko festivalių.",
      features: ["PA Sistemos", "Mikšeriai", "Belaidžiai Mikrofonai", "DJ Įranga"]
    },
    {
      icon: Lightbulb,
      title: "Sceninis Apšvietimas",
      description: "Dinaminiai apšvietimo sprendimai, kurie sukuria tobulą atmosferą. Intelektualūs šviestuvai, LED ekranai ir specialieji efektai.",
      features: ["LED Prožektoriai", "Judantys Šviestuvai", "Lazeriniai Efektai", "DMX Valdymas"]
    },
    {
      icon: Mic,
      title: "Mobilios Scenos",
      description: "Kompleksiniai mobilių scenų sprendimai, paruošti išvykti. Puikiai tinka lauko renginiams, festivalių ir gastroles.",
      features: ["Greitas Montavimas", "Atspari Orams", "Kelių Dydžių", "Profesionalus Dizainas"]
    },
    {
      icon: Truck,
      title: "Transportas ir Montavimas",
      description: "Pilnas paslaugų paketas: pristatymas, montavimas ir techninė pagalba. Mes pasirūpiname viskuo, kad jūs galėtumėte susikoncentruoti į pasirodymą.",
      features: ["Profesionali Komanda", "Tos Pačios Dienos Aptarnavimas", "Techninė Pagalba", "Įrangos Mokymai"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            MŪSŲ <span className="neon-glow-red text-accent">PASLAUGOS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Viskas, ko reikia jūsų renginiui. Profesionali įranga, ekspertų montavimas, legendiniai rezultatai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 group hover:box-glow-cyan"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
