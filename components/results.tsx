"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Check, ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const SLIDES = [
  {
    title: "Monitoramento Comercial",
    tag: "Gestão",
    subtitle:
      "Acompanhamento diário da equipe comercial da clínica com feedbacks estratégicos e planos de ação contínuos.",
    points: [
      "Roteiros aplicados à rotina da secretária",
      "Processo claro de quebra de objeções",
      "Acompanhamento para garantir execução",
    ],
    image: "/treinamento.png",
  },
  {
    title: "Tráfego Pago",
    tag: "Aquisição",
    subtitle:
      "Gestão de campanhas em Google e Meta orientada por performance e previsibilidade.",
    points: [
      "Captação de pacientes qualificados",
      "Oportunidades diárias de agendamento",
      "Otimização contínua com dados reais",
    ],
    image: "/trafego.jpg",
  },
  {
    title: "Gestão de Mídia Social",
    tag: "Branding",
    subtitle:
      "Conteúdo e posicionamento estratégico para gerar autoridade e conversão.",
    points: [
      "Foco em geração de demanda",
      "Validado em mais de 250 clínicas",
      "Produção recorrente e atualizada",
    ],
    image: "/gestaomidiasocial.png",
  },
  {
    title: "Soluções Comerciais",
    tag: "Vendas",
    subtitle:
      "Estruturamos processos comerciais para sustentar o crescimento da operação.",
    points: [
      "Estruturação da equipe",
      "Treinamento de alta performance",
      "Métricas, CRM e previsibilidade",
    ],
    image: "/solucaocomercial.png",
  },
  {
    title: "Landing Page",
    tag: "Conversão",
    subtitle:
      "Páginas desenhadas para transformar tráfego em agendamentos reais.",
    points: [
      "Arquitetura de alta conversão",
      "Testes e melhoria contínua",
      "Foco em ROI mensurável",
    ],
    image: "/siterbs (3).png",
  },
]

export default function Results() {
  const [current, setCurrent] = useState(0)

  const activeSlide = useMemo(() => SLIDES[current], [current])

  const navigate = (direction: "next" | "prev") => {
    setCurrent((prev) =>
      direction === "next"
        ? (prev + 1) % SLIDES.length
        : (prev - 1 + SLIDES.length) % SLIDES.length,
    )
  }

  return (
    <section id="servicos" className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9d2a6]/5 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <header className="mb-14 text-center">
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#e9d2a6]">
            Soluções Estratégicas
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Crescimento com <span className="italic">controle e escala</span>
          </h2>
        </header>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid min-h-[520px] lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="mb-6 w-fit rounded-full bg-[#e9d2a6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  {activeSlide.tag}
                </span>

                <h3 className="mb-4 text-3xl font-semibold text-white">
                  {activeSlide.title}
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-neutral-400">
                  {activeSlide.subtitle}
                </p>

                <ul className="space-y-4">
                  {activeSlide.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-neutral-300">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e9d2a6]/15">
                        <Check className="h-3 w-3 text-[#e9d2a6]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[320px]">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  priority
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-[#e9d2a6]"
                    : "w-3 bg-white/15 hover:bg-white/30"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("prev")}
              className="rounded-full border border-white/10 p-3 text-white transition hover:bg-white/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={() => navigate("next")}
              className="rounded-full bg-[#e9d2a6] p-3 text-black transition hover:scale-105"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-neutral-300">
            Selecionamos as soluções certas para a realidade atual da sua clínica, desde a estrutura inicial até a escala comercial.
          </p>

          <a
            href="https://wa.me/+55555391685956?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1EB85A] px-8 py-4 font-semibold text-white transition hover:-translate-y-1"
          >
            Diagnosticar minha clínica
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
