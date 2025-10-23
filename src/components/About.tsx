import { Heart } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-soft border border-accent/10 hover:shadow-elegant transition-all duration-500">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full">
              <Heart className="w-12 h-12 text-accent" />
            </div>
          </div>
          
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-center text-foreground mb-6">
            O que é o Clube da Noiva 2026
          </h2>
          
          <div className="space-y-6 font-poppins text-lg text-foreground/70 leading-relaxed">
            <p>
              O <span className="font-semibold text-accent">Clube da Noiva 2026</span> é um grupo VIP criado especialmente para noivas que desejam planejar o casamento ideal com organização, elegância e acesso às principais tendências da nova temporada.
            </p>
            
            <p>
              Ao entrar, você garante acesso a conteúdos exclusivos e ao <span className="font-semibold text-secondary">Checklist da Noiva Organizada 2026</span> — um guia completo que ajuda você a visualizar e planejar cada etapa com tranquilidade e sofisticação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
