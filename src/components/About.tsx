import { Music, Zap, Award } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="neon-glow-cyan text-primary">KAS</span> MES ESAME
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            BonusFX – jūsų patikimas partneris profesionaliai scenų ir garso įrangai. 
            Mes atnešame energiją ir galią, kad kiekvienas renginys taptų legendinis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:box-glow-cyan group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Music className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Aukščiausios Kokybės Įranga</h3>
            <p className="text-muted-foreground leading-relaxed">
              Pažangiausia garso, apšvietimo ir sceninė įranga, užtikrinanti profesionalų rezultatą kiekvieną kartą.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:box-glow-red group">
            <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Žaibiškai Greiti</h3>
            <p className="text-muted-foreground leading-relaxed">
              Greitas montavimas, patikimas veikimas ir akimirksnis atsakas. Esame pasirengę, kai jūsų reikia.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:box-glow-cyan group">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Įrodyta Kokybė</h3>
            <p className="text-muted-foreground leading-relaxed">
              Daugelio metų patirtis kuriant nepamirštamus festivalius, koncertus ir ypatingus renginius.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
