import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

import foto1 from "@/images/foto1.jpg";
import foto2 from "@/images/foto2.jpg";
import foto3 from "@/images/foto3.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#fdf8f3]">
      {/* -------- GALERIA FULL-BLEED CENTRALIZADA -------- */}
      {/* Desktop/Tablet */}
      <div className="hidden sm:block w-screen relative left-1/2 -translate-x-1/2">
        <div className="grid grid-cols-3 gap-0 overflow-hidden h-[130px] md:h-[160px] lg:h-[190px] bg-[#fdf8f3]">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={foto1}
              alt="Inspiração 1"
              className="max-h-full object-contain block"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={foto2}
              alt="Inspiração 2"
              className="max-h-full object-contain block"
            />
          </div>
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={foto3}
              alt="Inspiração 3"
              className="max-h-full object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden w-screen relative left-1/2 -translate-x-1/2 bg-[#fdf8f3]">
        <div className="h-[140px] flex items-center justify-center overflow-hidden">
          <img
            src={foto2}
            alt="Inspiração destaque"
            className="max-h-full object-contain block"
          />
        </div>
      </div>
      {/* ----------------------------------------------- */}

      {/* Elementos decorativos */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* ---------------------- CONTEÚDO ---------------------- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-10 pb-20 space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-accent/20 shadow-soft">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-poppins font-medium text-foreground/80">
            Clube da Noiva
          </span>
        </div>

        {/* Título */}
        <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight">
          Entre para o
          <br className="hidden sm:block" />{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent">
            Clube da Noiva 2026
          </span>
        </h1>

        {/* Descrição curta */}
        <p className="font-poppins text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
          e descubra como transformar cada detalhe do seu casamento em uma
          experiência inesquecível.
        </p>

        {/* Descrição longa */}
        <p className="font-poppins text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          O espaço exclusivo da{" "}
          <span className="font-semibold text-accent">
            Paper Memories Conviteria
          </span>
          , referência há mais de 12 anos em papelaria de luxo, criado para
          noivas que desejam viver o grande dia com elegância, propósito e
          identidade.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={scrollToForm}
            className="
              w-full sm:w-auto
              max-w-[320px] sm:max-w-none
              px-5 sm:px-8
              py-5 sm:py-6
              text-sm sm:text-base
              leading-snug
              font-poppins font-medium
              bg-accent hover:bg-accent/90 text-white
              shadow-elegant hover:shadow-xl
              transition-all duration-500 hover:scale-105
              whitespace-normal break-words
            "
          >
            <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Quero entrar para o Clube e receber meu checklist
          </Button>
        </div>
      </div>
    </section>
  );
};
