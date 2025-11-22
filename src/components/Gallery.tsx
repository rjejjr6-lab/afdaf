import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import { useState } from "react";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    { src: gallery1, alt: "Mobili scenų priekaba paruošta transportavimui" },
    { src: gallery2, alt: "Lauko scenos montavimas su profesiionaliu apšvietimu" },
    { src: gallery3, alt: "Kompleksinis mobilios scenos sprendimas" },
    { src: gallery4, alt: "Profesionali sceninė įranga veikiant" }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="neon-glow-cyan text-primary">MŪSŲ</span> DARBAI
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pamatykite mūsų profesionalią scenų ir įrangos instaliaciją veikiant
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-foreground font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-auto rounded-lg border-2 border-primary box-glow-cyan"
              />
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-background/80 hover:bg-accent rounded-full flex items-center justify-center text-foreground hover:text-accent-foreground transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
