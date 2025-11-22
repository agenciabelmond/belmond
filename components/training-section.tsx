import { BarChart3, Brain, PenTool, Activity } from "lucide-react"
  const days = [
  { label: "Seg", value: 45 },
  { label: "Ter", value: 55 },
  { label: "Qua", value: 72 },
  { label: "Qui", value: 65 },
  { label: "Sex", value: 90 },
  { label: "Sáb", value: 100 },
  { label: "Dom", value: 40 },
    ]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-28 bg-[#0B0F17] text-white">
      <div className="container mx-auto px-4 max-w-7xl space-y-16">
        {/* AUTOMAÇÃO COM IA */}
        <div className="bg-[#111827] border border-blue-500/20 p-10 rounded-3xl shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <Brain className="text-blue-400 w-8 h-8" />
            <h2 className="text-3xl font-bold">Automação Comercial com IA</h2>
          </div>

          <p className="text-white/60 max-w-3xl leading-relaxed mb-8">
            Implementamos bots e fluxos inteligentes de qualificação, nutrição e follow-up.
            Menos trabalho manual, mais fechamento.
          </p>

          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-lg bg-blue-400/10 border border-blue-500/30">
              Comercial Automatizado
            </div>
            <div className="px-4 py-2 rounded-lg bg-blue-400/10 border border-blue-500/30">
              + Fechamentos
            </div>
          </div>
        </div>

        {/* 2 CARDS EM LINHA */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* DESIGN ESTRATÉGICO */}
          <div className="bg-[#111827] border border-blue-500/20 p-10 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <PenTool className="text-blue-400 w-8 h-8" />
              <h2 className="text-3xl font-bold">Design Estratégico</h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-8">
              Layouts, apresentações, identidade visual e criativos feitos para comunicar valor e
              destacar sua marca no mercado B2B.
            </p>

            <div className="space-y-3">
              {["Identidade Visual", "Sites | Dashboards", "Criativos"].map((item, i) => (
                <div key={i} className="bg-blue-500/10 border border-blue-500/30 px-4 py-3 rounded-lg text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* GESTÃO DE INDICADORES */}
          <div className="bg-[#111827] border border-blue-500/20 p-10 rounded-3xl shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <Activity className="text-blue-400 w-8 h-8" />
              <h2 className="text-3xl font-bold">Gestão de Indicadores e Melhoria Contínua</h2>
            </div>

            <p className="text-white/60 leading-relaxed mb-8">
              Painéis de acompanhamento, análise e otimização constante. O que não é medido,
              não cresce.
            </p>

            {/* GRÁFICO FAKE */}
            <div className="flex items-end justify-between gap-4 h-40 mb-8">
                {days.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group">
                    
                    {/* Barra animada */}
                    <div
                      style={{ height: `${day.value}%` }}
                      className="
                        w-4 rounded-lg relative
                        bg-gradient-to-t from-blue-700 to-blue-400
                        shadow-[0_0_12px_rgba(0,123,255,0.4)]
                        group-hover:opacity-80
                        transition-all duration-500 ease-out delay-[200ms]
                        animate-[grow_1s_ease-out]
                        origin-bottom
                      "
                    >
                      {/* Tooltip */}
                      <span className="
                        absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px]
                        rounded-md bg-blue-500/90 text-white opacity-0 group-hover:opacity-100
                        pointer-events-none transition-opacity
                      ">
                        {day.value}%
                      </span>
                    </div>

                    {/* Label */}
                    <span className="text-xs text-white/60">{day.label}</span>

                  </div>
                ))}
              </div>

            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold text-white">47%</p>
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500/40"></div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-400 rotate-45"></div>
                <p className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">55%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
