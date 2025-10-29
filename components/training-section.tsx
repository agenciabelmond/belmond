import { CheckCircle2, Users, FileText, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TrainingSection() {
  const features = [
    {
      icon: Users,
      title: "Treinamento Completo",
      description: "Ensinamos sua secretária a converter leads em pacientes agendados",
    },
    {
      icon: FileText,
      title: "Scripts Validados",
      description: "Mais de 50 clínicas já aprovaram e utilizam nossos roteiros de atendimento",
    },
    {
      icon: Award,
      title: "Grandes Franquias",
      description: "Trabalhamos com Oral Unic, Odonto Company e outras redes de sucesso",
    },
  ]

  return (
    <section id="treinamento" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-black">Aumente sua taxa de conversão em até 85%</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-black">
                Não basta gerar leads, é preciso <span className="text-accent">converter</span>
              </h2>
              <p className="text-xl text-black/70 mb-8 text-pretty leading-relaxed">
                O diferencial da Belmond está no treinamento completo da sua equipe. Transformamos sua recepção em uma
                máquina de conversão.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-accent/10 hover:border-accent/30 transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-black">{feature.title}</h3>
                      <p className="text-black/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-8 rounded-2xl bg-accent/10 border-2 border-accent/30">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-xl mb-3 text-black">Metodologia Comprovada</p>
                    <p className="text-black/70 leading-relaxed text-lg">
                      Scripts testados e aprovados em mais de 50 clínicas odontológicas, incluindo grandes franquias do
                      setor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="bg-accent text-black hover:bg-accent/90 font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  Quero Treinar Minha Equipe
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-black/80 border-2 border-accent/20">
                <img
                  src="/modern-ai-technology-dashboard-with-analytics-and-.jpg"
                  alt="Tecnologia de conversão"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black p-8 rounded-2xl shadow-2xl border-2 border-accent/30 max-w-xs">
                <p className="text-4xl font-bold text-accent mb-2">+50</p>
                <p className="text-sm text-white/90 font-semibold">Clínicas com scripts validados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
