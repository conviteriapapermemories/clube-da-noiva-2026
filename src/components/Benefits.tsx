import { CheckCircle2, Sparkles, Gift } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Checklist do Casamento Ideal 2026",
    description: "O guia essencial com todas as etapas — do planejamento à festa."
  },
  {
    icon: Sparkles,
    title: "Conteúdos e inspirações semanais",
    description: "Receba no grupo VIP orientações e tendências sobre convites, papelaria e identidade visual de casamento."
  },
  {
    icon: Gift,
    title: "Convite antecipado para a Paper Memories Wedding Experience 2026",
    description: "A experiência online que revela as novas coleções e condições especiais para noivas 2026."
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-white/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
            O que você vai receber ao se inscrever
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-secondary to-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-elegant border border-accent/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-4 text-center">
                  {benefit.title}
                </h3>
                
                <p className="font-poppins text-base text-foreground/70 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
