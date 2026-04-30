import { Card } from "@/components/ui/card"
import { Target, Users, BarChart3, Headphones } from "lucide-react"

export function PowerClinicMethod() {
  const steps = [
    {
      icon: Target,
      title: "Atração Qualificada",
      description: "Campanhas de tráfego pago otimizadas para atrair pacientes ideais para sua clínica odontológica",
    },
    {
      icon: Users,
      title: "Conversão Estratégica",
      description: "Landing pages e funis de conversão desenvolvidos especificamente para o setor odontológico",
    },
    {
      icon: Headphones,
      title: "Monitoramento de Atendimento",
      description: "Acompanhamento em tempo real do atendimento da sua equipe para garantir a melhor experiência",
    },
    {
      icon: BarChart3,
      title: "Otimização Contínua",
      description: "Análise de dados e ajustes constantes para maximizar seus resultados mês após mês",
    },
  ]

  return (
    <section id="metodo" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            O Método <span className="text-accent">Power Clinic</span>
          </h2>
          <p className="text-xl text-white/70 text-pretty leading-relaxed">
            Uma metodologia completa que vai além do tráfego pago, garantindo que cada lead se transforme em paciente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 hover:shadow-2xl hover:shadow-accent/20 transition-all border-accent/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <step.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
