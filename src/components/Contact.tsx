import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="neon-glow-cyan text-primary">SUSISIEKITE</span> SU MUMIS
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pakalbėkime apie jūsų kitą didįjį renginį. Mes pasiruošę.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Kontaktinė Informacija</h3>
            
            <div className="space-y-6">
              <a 
                href="tel:+37065657016"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">TELEFONAS</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-primary">+370 656 57016</p>
                </div>
              </a>

              <a 
                href="mailto:bonusfx@gmail.com"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">EL. PAŠTAS</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-primary break-all">bonusfx@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">VIETA</p>
                  <p className="text-lg font-bold text-foreground">Lietuva</p>
                </div>
              </div>

              <a 
                href="https://www.facebook.com/dzonisfx/photos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-muted-foreground mb-1">SOCIALINIAI TINKLAI</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-primary">Žiūrėti galeriją Facebook'e</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
