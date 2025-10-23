import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  whatsapp: z.string()
    .trim()
    .min(10, { message: "WhatsApp inválido" })
    .max(20, { message: "WhatsApp inválido" })
    .regex(/^[\d\s\(\)\-\+]+$/, { message: "WhatsApp deve conter apenas números" })
});

type FormValues = z.infer<typeof formSchema>;

export const SignupForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const message = `Olá! Sou ${values.name} e quero fazer parte do Clube da Noiva 2026! 💍✨`;
      const whatsappNumber = values.whatsapp.replace(/\D/g, '');
      const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
      
      toast({
        title: "Bem-vinda ao Clube da Noiva! 💕",
        description: "Você será redirecionada para o WhatsApp para receber seu checklist exclusivo.",
      });
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup-form" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-elegant border border-accent/20">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
          </div>
          
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-center text-foreground mb-4">
            Preencha abaixo e faça parte do Clube da Noiva 2026
          </h2>
          
          <p className="font-poppins text-base text-center text-foreground/70 mb-8">
            Receba agora o seu <span className="font-semibold text-accent">Checklist da Noiva Organizada 2026</span> e o link de acesso ao grupo exclusivo no WhatsApp.
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-poppins font-medium text-foreground">
                      Nome Completo
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Digite seu nome" 
                        className="font-poppins bg-white/80 border-accent/30 focus:border-accent h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="font-poppins text-sm" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-poppins font-medium text-foreground">
                      WhatsApp
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(11) 99999-9999" 
                        className="font-poppins bg-white/80 border-accent/30 focus:border-accent h-12"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="font-poppins text-sm" />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group mt-6 py-6 text-base font-poppins font-medium bg-accent hover:bg-accent/90 text-white shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {isSubmitting ? "Enviando..." : "Quero entrar para o Clube"}
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
