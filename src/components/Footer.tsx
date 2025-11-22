import { Phone, Mail, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4">
              <span className="neon-glow-cyan text-primary">BONUS</span>
              <span className="neon-glow-red text-accent">FX</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Profesionali scenų ir garso įranga legendiniams renginiams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Nuorodos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Apie Mus
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Paslaugos
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Galerija
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontaktai
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Kontaktai</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+37065657016" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+370 656 57016</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bonusfx@gmail.com" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>bonusfx@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/dzonisfx/photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Galerija</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} BonusFX. Visos teisės saugomos. Sukurta rokui.</p>
        </div>
      </div>
    </footer>
  );
};
