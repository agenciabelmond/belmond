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
    <section
      id="servicos"
      className="relative overflow-hidden bg-black py-16 md:py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#e9d2a6]/5 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        <header className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 w-full">
  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#E4C978]/60" />

  <span
    className="text-[10px] font-bold tracking-[0.35em] text-[#E4C978] uppercase"
    style={{ fontFamily: "'Lato', sans-serif" }}
  >
    Soluções Estratégicas
  </span>

  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#E4C978]/60" />
</div>

          <h2
  className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl"
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
  }}
>
  CRESCIMENTO COM  <span className=" text-[#E4C978]">CONTROLE</span>
</h2>
        </header>

        {/* CARD */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
          
          {/* NAVIGATION (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-between px-4 md:flex">
            <button
              onClick={() => navigate("prev")}
              className="pointer-events-auto rounded-full border border-white/10 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              onClick={() => navigate("next")}
              className="pointer-events-auto rounded-full bg-[#e9d2a6] p-3 text-black transition hover:scale-105"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 80

                if (info.offset.x < -threshold) {
                  setCurrent((prev) => (prev + 1) % SLIDES.length)
                }

                if (info.offset.x > threshold) {
                  setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
                }
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="grid min-h-[420px] cursor-grab active:cursor-grabbing lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 md:p-12">
                
                <span className="mb-4 w-fit rounded-full bg-[#E4C978] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  {activeSlide.tag}
                </span>

                {/* 👇 INDICADOR MOBILE DE SWIPE */}
                <div className="mb-3 flex items-center gap-2 text-xs text-white/40 md:hidden">
                  <span>Arraste para o lado</span>

                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="text-[#e9d2a6]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </div>

                <h3 className="mb-4 text-3xl font-semibold text-white">
                  {activeSlide.title}
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-neutral-400">
                  {activeSlide.subtitle}
                </p>

                <ul className="space-y-4">
                  {activeSlide.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-neutral-300"
                    >
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

        {/* DOTS */}
        <div className="mt-6 flex items-center justify-center gap-2">
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-neutral-300">
            Selecionamos as soluções certas para a realidade atual da sua clínica,
            desde a estrutura inicial até a escala comercial.
          </p>

          <a
  href="https://wa.me/555391685956?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
  target="_blank"
  rel="noopener noreferrer"
  className="group relative mt-8 inline-flex h-[52px] items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#E7D3A1] via-[#C6A75E] to-[#A67C35] px-8 text-[11px] font-bold uppercase tracking-[0.1em] text-black shadow-[0_0_50px_rgba(198,167,94,0.35)] transition-all duration-300 hover:scale-[1.03]"
>
  {/* brilho animado */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

  <span className="relative z-10">
    Diagnosticar minha clínica
  </span>

  <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
</a>
        </div>
      </div>
    </section>
  )
}