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
  name: z
    .string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z
    .string()
    .trim()
    .email({ message: "E-mail inválido" })
    .max(160, { message: "E-mail muito longo" }),
  whatsapp: z
    .string()
    .trim()
    .min(10, { message: "WhatsApp inválido" })
    .max(20, { message: "WhatsApp inválido" })
    .regex(/^[\d\s()\-\+]+$/, { message: "WhatsApp deve conter apenas números" }),
  dataCasamento: z
    .string()
    .trim()
    .min(1, { message: "Data do casamento é obrigatória" }),
});

type FormValues = z.infer<typeof formSchema>;

export const SignupForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      dataCasamento: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // Converter YYYY-MM-DD -> DD/MM/AAAA
      let dataCasamentoFormatted = values.dataCasamento;
      if (/^\d{4}-\d{2}-\d{2}$/.test(values.dataCasamento)) {
        const [year, month, day] = values.dataCasamento.split("-");
        dataCasamentoFormatted = `${day}/${month}/${year}`;
      }

      // Enviar para o Google Apps Script (multipart/form-data)
      const formData = new FormData();
      formData.append("nome", values.name);
      formData.append("email", values.email);
      formData.append("whatsapp", values.whatsapp);
      formData.append("dataCasamento", dataCasamentoFormatted);
      // (opcional) origem da página
      formData.append("source", window.location.href);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw-_kmqhoQscWdEvmxjEBjizuaUqKsOD6B1BrAnMy4Wtj1R0OsLFpdUql5DeMJcmg7Rzw/exec",
        {
          method: "POST",
          body: formData,
          redirect: "follow",
        }
      );

      if (!response.ok) throw new Error("Erro ao enviar dados");

      toast({
        title: "Bem-vinda ao Clube da Noiva! 💕",
        description: "Você será redirecionada para o grupo do WhatsApp.",
      });

      form.reset();

      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/LOHVhUUKmT3FTyp4ShyRdz";
      }, 1500);
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
            Receba agora o seu <span className="font-semibold text-accent">Checklist da Noiva Organizada 2026</span> e
            o link de acesso ao grupo exclusivo no WhatsApp.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-poppins font-medium text-foreground">Nome Completo</FormLabel>
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-poppins font-medium text-foreground">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seuemail@exemplo.com"
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
                    <FormLabel className="font-poppins font-medium text-foreground">WhatsApp</FormLabel>
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

              <FormField
                control={form.control}
                name="dataCasamento"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-poppins font-medium text-foreground">Data do Casamento</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
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
              useEffect(() => {
              const button = document.querySelector('button[type="submit"]');
              if (button) {
                button.addEventListener('click', () => {
                  window.parent?.postMessage(
                    {
                      source: 'lovable',
                      type: 'fbq',
                      event: 'Lead',
                      meta: { label: 'cta_clube_noiva' },
                    },
                    '*'
                  );
                  console.log('[Lovable→Bagy] Evento Lead enviado');
                });
              }
            }, []);
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
