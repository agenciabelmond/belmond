import { Card } from "@/components/ui/card";
import { Target, Users, BarChart3, Headphones } from "lucide-react";

export function PowerClinicMethod() {
  const steps = [
    {
      icon: Target,
      title: "Atração Qualificada",
      description:
        "Campanhas de tráfego pago direcionadas para atrair exatamente os pacientes ideais para sua clínica.",
    },
    {
      icon: Users,
      title: "Conversão Estratégica",
      description:
        "Funis de conversão e landing pages desenvolvidos especificamente para transformar leads em pacientes.",
    },
    {
      icon: Headphones,
      title: "Monitoramento de Atendimento",
      description:
        "Acompanhamento em tempo real do atendimento, garantindo a melhor experiência e fidelização do paciente.",
    },
    {
      icon: BarChart3,
      title: "Otimização Contínua",
      description:
        "Análise de dados detalhada e ajustes constantes para maximizar resultados e retorno sobre investimento.",
    },
  ];

  return (
    <section id="metodo" className="py-28 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-balance">
            O Método <span className="text-accent">Power Clinic</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Uma metodologia completa que vai além do tráfego pago, garantindo que cada lead se transforme em paciente fidelizado.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
<Card
  key={index}
  className="
    p-8 space-y-6 
    border-2 border-yellow-400/15  /* borda mais suave */
    rounded-2xl 
    bg-white/5 backdrop-blur-md 
    transition-all 
    relative overflow-hidden 
    hover:border-yellow-400/30      /* hover mais discreto */
    hover:shadow-[0_0_20px_rgba(255,217,102,0.2)] /* sombra mais sutil */
  "
>
  {/* Efeito de brilho dinâmico */}
  <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-tr from-yellow-400/5 to-yellow-300/5 opacity-0 transition-opacity hover:opacity-20"></div>

  <div className="relative z-10 w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center mx-auto">
    <step.icon className="w-8 h-8 text-accent" />
  </div>
  <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
    {step.title}
  </h3>
  <p className="text-white/70 leading-relaxed text-center">
    {step.description}
  </p>
</Card>

          ))}
        </div>
      </div>
    </section>
  );
}
