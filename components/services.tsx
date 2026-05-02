"use client"

import { useMemo } from "react"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const SERVICES = [
  {
    tag: "Aquisição",
    title: "Previsibilidade de pacientes todos os dias",
    highlight: "Crescimento com controle e escala",
    description:
      "Estruturamos a aquisição de pacientes com foco em previsibilidade, eliminando sazonalidade e criando um fluxo constante de oportunidades.",
    points: [
      "Geração contínua de demanda qualificada",
      "Otimização de custo por aquisição (CAC)",
      "Escala sustentada com dados reais",
    ],
  },
  {
    tag: "Conversão",
    title: "Transforme atendimento em faturamento",
    highlight: "Mais consultas com o mesmo tráfego",
    description:
      "Refinamos cada etapa do atendimento para aumentar a conversão de leads em pacientes efetivos.",
    points: [
      "Scripts comerciais validados",
      "Redução de perdas no funil",
      "Aumento de comparecimento e fechamento",
    ],
  },
  {
    tag: "Automação",
    title: "Operação inteligente e escalável",
    highlight: "Seu sistema continua vendendo",
    description:
      "Automatizamos follow-ups, relacionamento e qualificação para manter sua operação performando 24/7.",
    points: [
      "Follow-up multicanal automatizado",
      "Integração com CRM e WhatsApp",
      "Qualificação inteligente de oportunidades",
    ],
  },
]

export default function Services() {
  const cards = useMemo(() => SERVICES, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e9d2a6]/20 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <header className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-neutral-700">
            Soluções Estratégicas
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-black md:text-6xl">
            Crescimento estruturado
            <span className="mt-2 block font-serif italic text-neutral-400">
              para clínicas modernas
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-500">
            Um ecossistema completo de aquisição, conversão e automação para criar previsibilidade real de faturamento.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.45 }}
            >
              <Card className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#c5a87d] to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    {service.tag}
                  </span>

                  <div className="rounded-full bg-neutral-100 p-2 transition group-hover:bg-black group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-black leading-tight">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm font-medium text-[#b89a6a]">
                  {service.highlight}
                </p>

                <p className="mb-8 text-sm leading-relaxed text-neutral-500">
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-neutral-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#c5a87d]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.02] opacity-0 transition group-hover:opacity-100" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
