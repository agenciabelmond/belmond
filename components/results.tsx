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
      testimonial:
        "Investimento que realmente vale a pena. Cada real investido retorna multiplicado.",
    },
  ]

  return (
    <section
      id="resultados"
      className="relative py-28 bg-[#050510] overflow-hidden"
    >
      {/* Luz de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a25] via-transparent to-black opacity-60"></div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
          <span className="px-4 py-1.5 text-sm rounded-full bg-white/5 text-blue-300 border border-white/10">
            Resultados
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Muito além de números.  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Transformações Reais.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            Resultados consistentes com tecnologia, performance e estratégia — como nas operações apresentadas.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {results.map((result, index) => (
            <Card
              key={index}
              className="
                relative p-8 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-xl shadow-xl
                hover:border-blue-500/40 hover:shadow-blue-500/20
                transition-all duration-300
              "
            >
              {/* Glow superior */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
              </div>

              <div className="space-y-4 pb-6 border-b border-white/10">
                <div className="text-5xl font-extrabold text-blue-400 drop-shadow-lg">
                  {result.metric}
                </div>

                <div className="text-sm font-semibold uppercase tracking-wider text-white/60">
                  {result.description}
                </div>
              </div>

              <p className="text-white/70 italic leading-relaxed text-lg mt-6">
                "{result.testimonial}"
              </p>

              <div className="text-sm font-semibold text-white/50 mt-4">
                — {result.clinic}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
