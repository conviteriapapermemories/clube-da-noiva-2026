import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

// importe as imagens (já estão em src/images/)
import foto1 from "@/images/foto1.jpg";
import foto2 from "@/images/foto2.jpg";
import foto3 from "@/images/foto3.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-10 pb-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* === NOVO BLOCO DE FOTOS === */}
      {/* Desktop/Tablet: 3 fotos */}
      <div className="hidden sm:flex relative z-10 gap-6 md:gap-8 mb-8 md:mb-12">
        <img
          src={foto1}
          alt="Inspiração 1"
          className="w-36 h-48 md:w-48 md:h-64 object-cover rounded-2xl shadow-lg"
        />
        <img
          src={foto2}
          alt="Inspiração destaque"
          className="w-40 h-56 md:w-52 md:h-72 object-cover rounded-2xl shadow-lg"
        />
        <img
          src={foto3}
          alt="Inspiração 3"
          className="w-36 h-48 md:w-48 md:h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Mobile: somente a foto do meio */}
      <div className="sm:hidden relative z-10 mb-6">
        <img
          src={foto2}
          alt="Inspiração destaque"
          className="w-10/12 mx-auto object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Conteúdo textual */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-accent/20 shadow-soft">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-poppins font-medium text-foreground/80">
            Grupo VIP Exclusivo
          </span>
        </div>

        {/* Quebra controlada: apenas no desktop/tablet */}
        <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
          Entre para o
          <br className="hidden sm:block" />
          {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent">
            Clube da Noiva 2026
          </span>
        </h1>

        <p className="font-poppins text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          e descubra como transformar cada detalhe do seu casamento em uma experiência inesquecível.
        </p>

        <p className="font-poppins text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          O espaço exclusivo da{" "}
          <span className="font-semibold text-accent">Paper Memories Conviteria</span>, referência há
          mais de 12 anos em papelaria de luxo, criado para noivas que desejam viver o grande dia com
          elegância, propósito e identidade.
        </p>

        <Button
          size="lg"
          onClick={scrollToForm}
          className="group mt-8 px-8 py-6 text-base font-poppins font-medium bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-105"
        >
          <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
          Quero entrar para o Clube e receber meu checklist
        </Button>
      </div>
    </section>
  );
};
