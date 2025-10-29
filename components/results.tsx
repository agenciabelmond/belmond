import { Card } from "@/components/ui/card"

export function Results() {
  const results = [
    {
      clinic: "Clínica Odonto Excellence",
      metric: "+450%",
      description: "Aumento em agendamentos em 6 meses",
      testimonial:
        "A Belmond transformou completamente nossa captação de pacientes. Hoje temos uma agenda cheia e previsível.",
    },
    {
      clinic: "Dental Care Premium",
      metric: "R$ 180k",
      description: "Faturamento adicional no primeiro trimestre",
      testimonial:
        "O monitoramento de atendimento foi um diferencial. Nossa equipe melhorou muito a conversão de leads.",
    },
    {
      clinic: "Sorriso Perfeito",
      metric: "3.2x",
      description: "ROI nas campanhas de tráfego pago",
      testimonial: "Investimento que realmente vale a pena. Cada real investido retorna multiplicado.",
    },
  ]

  return (
    <section id="resultados" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-primary">
            Resultados Reais de <span className="text-accent">Clínicas Reais</span>
          </h2>
          <p className="text-xl text-primary/70 text-pretty leading-relaxed">
            Veja como o Método Power Clinic está transformando clínicas odontológicas em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {results.map((result, index) => (
            <Card
              key={index}
              className="p-8 space-y-6 bg-white border-2 border-accent/20 hover:border-accent/40 hover:shadow-xl transition-all"
            >
              <div className="space-y-3 pb-6 border-b border-accent/20">
                <div className="text-4xl md:text-5xl font-bold text-accent">{result.metric}</div>
                <div className="text-sm font-semibold text-primary uppercase tracking-wide">{result.description}</div>
              </div>
              <p className="text-primary/70 italic leading-relaxed text-lg">"{result.testimonial}"</p>
              <div className="text-sm font-semibold text-primary/60">— {result.clinic}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
