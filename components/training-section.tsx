"use client"

import { useState } from "react"
import { Plus, ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const FAQ_ITEMS = [
  {
    question: "Como funciona o treinamento online?",
    answer:
      "O treinamento acontece de forma 100% online com foco em aplicação prática. Sua equipe recebe scripts validados, simulações reais de atendimento e acompanhamento contínuo para maximizar conversão.",
  },
  {
    question: "O que está incluído no monitoramento?",
    answer:
      "Monitoramos indicadores essenciais como tempo de resposta, taxa de conversão e oportunidades perdidas. Você recebe análises estratégicas e planos de ação recorrentes.",
  },
  {
    question: "Esse método funciona para clínicas pequenas ou em fase de crescimento?",
    answer:
      "Sim. A metodologia é adaptada ao momento da clínica, seja estruturação inicial ou escala comercial.",
  },
  {
    question: "O tráfego pago garante agendamentos?",
    answer:
      "Tráfego gera demanda qualificada. Quando alinhado ao processo comercial e treinamento da equipe, cria previsibilidade real de agendamentos.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="bg-black py-20 md:py-24 -mt-6">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <aside className="lg:col-span-5">
            <div className="sticky top-20">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e9d2a6]">
                FAQ
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Perguntas
                <span className="mt-2 block font-serif italic text-[#e9d2a6]">
                  frequentes
                </span>
              </h2>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-white/50">
                Tudo que você precisa entender sobre como estruturamos aquisição, conversão e crescimento comercial para clínicas.
              </p>

              <button className="mt-10 hidden items-center gap-2 text-[#e9d2a6] transition hover:opacity-80 lg:inline-flex">
                Falar com um especialista
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </aside>

          <div className="border-white/10 lg:col-span-7 lg:border-t">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = activeIndex === index

              return (
                <div
                  key={item.question}
                  className="border-b border-white/10"
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="group flex w-full items-center justify-between py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-lg font-medium transition-colors md:text-xl ${
                        isOpen
                          ? "text-[#e9d2a6]"
                          : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Plus className="h-5 w-5 text-[#e9d2a6]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 text-base leading-relaxed text-white/50">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}

            <button className="mt-10 flex w-full items-center justify-center rounded-2xl bg-[#e9d2a6] px-6 py-4 font-semibold text-black transition hover:opacity-90 lg:hidden">
              Falar com um especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
