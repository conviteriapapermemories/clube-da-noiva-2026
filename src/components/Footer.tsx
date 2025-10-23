import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-white/30 backdrop-blur-sm border-t border-accent/20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-3 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full">
            <Heart className="w-8 h-8 text-accent" />
          </div>
        </div>
        
        <h3 className="font-playfair font-bold text-3xl text-foreground">
          Paper Memories Conviteria
        </h3>
        
        <div className="space-y-2 font-poppins text-foreground/70">
          <p className="text-lg">
            Há mais de 12 anos criando histórias que vivem experiências inesquecíveis.
          </p>
          <p className="text-base">
            ✨ Convites, caixas e papelaria personalizada de luxo.
          </p>
        </div>
        
        <div className="pt-6 border-t border-accent/20">
          <p className="font-poppins text-sm text-muted-foreground">
            © 2025 Paper Memories – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
