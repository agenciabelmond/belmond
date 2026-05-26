"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const SLIDES = [
  {
    titleWhite: "Treinamento de Secretária",
    titleGold: "e CRC",

    subtitle:
      "Treinamos sua equipe para oferecer um atendimento mais estratégico, profissional e preparado para aumentar conversões, fortalecer a experiência do paciente e gerar mais agendamentos.",

    points: [
      {
        highlight: "alto impacto",
        full: "Comunicação de alto impacto para construir um time de Alta Performance",
      },
      {
        highlight: "converter 3x mais pacientes",
        full: "Método estruturado para converter 3x mais pacientes",
      },
      {
        highlight: "execução e evolução",
        full: "Acompanhamento contínuo para garantir execução e evolução da equipe",
      },
    ],

    badgeLine1: "Mais agendamentos na agenda.",
    badgeLine2: "Mais faturamento no caixa.",

    image: "/treinamento.jpg",
  },

  {
    titleWhite: "Treinamento de Negociação",
    titleGold: "e Fechamento",

    subtitle:
      "Treinamos sua equipe para conduzir negociações de forma mais estratégica, segura e profissional, aumentando a taxa de fechamento e elevando o faturamento da clínica sem depender apenas de novos leads.",

    points: [
      {
        full: "Técnicas de negociação e fechamento consultivo",
        highlight: "fechamento consultivo",
      },
      {
        full: "Como gerar mais valor antes de falar sobre preço",
        highlight: "mais valor",
      },
      {
        full: "Estratégias para reduzir objeções e aumentar conversões",
        highlight: "aumentar conversões",
      },
      {
        full: "Posicionamento e comunicação para transmitir mais autoridade",
        highlight: "mais autoridade",
      },
    ],

    badgeLine1:
      "Uma negociação bem conduzida não pressiona o paciente.",

    badgeLine2:
      "Ela gera confiança, segurança e decisão.",

    image: "/negociação.png",
  },

  {
    titleWhite: "Captação de Pacientes",
    titleGold: "Tráfego Pago Estratégico",

    subtitle:
      "Criamos campanhas estratégicas para atrair pacientes qualificados, aumentar o reconhecimento da sua clínica e transformar visualizações em oportunidades reais de agendamento.",

    points: [
      {
        full: "Anúncios direcionados para o público ideal",
        highlight: "público ideal",
      },
      {
        full: "Estratégias focadas em captação de pacientes",
        highlight: "captação de pacientes",
      },
      {
        full: "Campanhas com foco em reconhecimento e conversão",
        highlight: "reconhecimento e conversão",
      },
      {
        full: "Posicionamento para destacar sua clínica na região",
        highlight: "destacar sua clínica",
      },
      {
        full:
          "O resultado vem quando sua clínica aparece para as pessoas certas",
        highlight: "pessoas certas",
      },
    ],

    badgeLine1: "Não basta aparecer para milhares.",

    badgeLine2:
      "Sua clínica precisa aparecer para as pessoas certas.",

    image: "/trafego.png",
  },

  {
    titleWhite: "Inteligência Artificial",
    titleGold: "para Clínicas",

    subtitle:
      "Sua clínica atendendo pacientes 24 horas por dia, com mais agilidade, organização e oportunidades de fechamento.",

    points: [
      {
        full: "Atendimento automático e inteligente no WhatsApp",
        highlight: "inteligente no WhatsApp",
      },
      {
        full: "Respostas rápidas, organizadas e mais profissionais",
        highlight: "mais profissionais",
      },
      {
        full: "Mais agilidade no atendimento sem sobrecarregar a equipe",
        highlight: "sem sobrecarregar a equipe",
      },
      {
        full: "Nenhum paciente perdido por demora no atendimento",
        highlight: "Nenhum paciente perdido",
      },
      {
        full: "Mais oportunidades de conversão todos os dias",
        highlight: "mais oportunidades de conversão",
      },
    ],

    badgeLine1:
      "A IA não substitui a equipe.",

    badgeLine2:
      "Ela potencializa resultados e melhora a experiência do paciente.",

    image: "/ia.png",
  },

  {
    titleWhite: "Google Meu Negócio",
    titleGold: "Estratégico",

    subtitle:
      "A maioria das clínicas perde pacientes todos os dias sem perceber simplesmente porque não transmite autoridade no Google.",

    points: [
      {
        full:
          "Otimização completa para fortalecer sua presença no Google",
        highlight: "fortalecer sua presença",
      },
      {
        full:
          "Estratégias para aumentar alcance, relevância e autoridade local",
        highlight: "autoridade local",
      },
      {
        full:
          "Perfil mais profissional, elegante e preparado para gerar confiança imediata",
        highlight: "confiança imediata",
      },
      {
        full:
          "Mais visibilidade para transformar pesquisas em novos contatos",
        highlight: "novos contatos",
      },
      {
        full:
          "Sua clínica transmitindo mais credibilidade antes do primeiro atendimento",
        highlight: "mais credibilidade",
      },
    ],

    badgeLine1:
      "Um Google Meu Negócio bem posicionado",

    badgeLine2:
      "faz o paciente sentir que encontrou a clínica certa.",

    image: "/gmn.png",
  },

  {
    titleWhite: "Posicionamento",
    titleGold: "e Marca",

    subtitle:
      "Criamos uma presença digital estratégica para posicionar sua clínica como autoridade, aumentando reconhecimento, confiança e preferência entre os pacientes da sua região.",

    points: [
      {
        full: "Comunicação estratégica para gerar confiança",
        highlight: "gerar confiança",
      },
      {
        full: "Conteúdo voltado para percepção de valor",
        highlight: "percepção de valor",
      },
      {
        full: "Sua clínica lembrada antes da concorrência",
        highlight: "antes da concorrência",
      },
    ],

    badgeLine1:
      "Pacientes não escolhem apenas pelo serviço.",

    badgeLine2:
      "Eles escolhem a clínica que transmite mais autoridade e confiança.",

    image: "/gerenciamento.png",
  },

  {
    titleWhite: "Sites Estratégicos",
    titleGold: "para Clínicas",

    subtitle:
      "Sua clínica precisa transmitir autoridade antes mesmo do primeiro contato.",

    points: [
      {
        full:
          "Design sofisticado e alinhado ao posicionamento da clínica",
        highlight: "Design sofisticado",
      },
      {
        full:
          "Estrutura pensada para transmitir confiança e credibilidade",
        highlight: "confiança e credibilidade",
      },
      {
        full:
          "Experiência profissional para transformar visitantes em pacientes",
        highlight: "transformar visitantes em pacientes",
      },
      {
        full:
          "Integração com WhatsApp, formulários e canais de atendimento",
        highlight: "Integração com WhatsApp",
      },
    ],

    badgeLine1:
      "Um site bem construído não serve apenas para estar na internet.",

    badgeLine2:
      "Ele transmite valor, autoridade e desejo pela sua clínica.",

    image: "/site.png",
  },
]

function HighlightText({
  text,
  highlight,
}: {
  text: string
  highlight: string
}) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>

  const parts = text.split(highlight)

  return (
    <>
      {parts[0]}
      <span className="font-semibold text-[#C6A75E]">
        {highlight}
      </span>
      {parts[1]}
    </>
  )
}

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
      className="relative overflow-hidden bg-black py-10 md:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(198,167,94,0.12)_0%,_transparent_60%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4">

        {/* HEADER */}
        <header className="mb-8 text-center">
          <div className="mb-3 flex w-full items-center justify-center gap-4">
            <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#C6A75E]/60" />

            <span
              className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C6A75E]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Soluções Estratégicas
            </span>

            <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#C6A75E]/60" />
          </div>

          <h2
            className="text-center text-[25px] font-black leading-[1.05] tracking-[-0.02em] text-white sm:text-[42px]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            CRESCIMENTO COM{" "}
            <span className="text-[#C6A75E]">
              CONTROLE
            </span>
          </h2>
        </header>

        {/* CARD */}
        <div
          className="relative overflow-visible rounded-2xl shadow-[0_0_80px_rgba(198,167,94,0.07)]"
          style={{
            background: "#000000",
            border: "1px solid rgba(198,167,94,0.15)",
          }}
        >
          <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/60 to-transparent" />

          {/* DESKTOP ARROWS */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 hidden md:block">

            {/* LEFT */}
          {/* LEFT */}
        <button
          onClick={() => navigate("prev")}
          className="pointer-events-auto absolute -left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#E7D3A1] via-[#C6A75E] to-[#A67C35] text-black shadow-[0_0_25px_rgba(198,167,94,0.35)] transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

            {/* RIGHT */}
            <button
              onClick={() => navigate("next")}
              className="pointer-events-auto absolute -right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#E7D3A1] via-[#C6A75E] to-[#A67C35] text-black shadow-[0_0_25px_rgba(198,167,94,0.35)] transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
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
                  setCurrent((p) => (p + 1) % SLIDES.length)
                }

                if (info.offset.x > threshold) {
                  setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length)
                }
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="grid cursor-grab active:cursor-grabbing lg:grid-cols-2"
            >

              {/* LEFT SIDE */}
              <div className="flex flex-col justify-center p-6 md:px-8 md:py-8">

                {/* MOBILE SWIPE */}
                <div className="mb-3 flex items-center gap-2 text-xs text-white/30 md:hidden">
                  <span>Arraste para o lado</span>

                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="text-[#C6A75E]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* TITLE */}
                <h3
                  className="mb-3 leading-tight"
                  style={{
                    fontFamily:
                      "'Playfair Display', Georgia, serif",
                  }}
                >
                  <span className="block text-3xl font-extrabold text-white md:text-4xl">
                    {activeSlide.titleWhite}
                  </span>

                  <span className="block text-3xl font-extrabold text-[#C6A75E] md:text-4xl">
                    {activeSlide.titleGold}
                  </span>
                </h3>

                {/* SUBTITLE */}
                <p className="mb-4 text-[13px] leading-relaxed text-neutral-300">
                  {activeSlide.subtitle}
                </p>

                <div className="mb-4 h-[2px] w-10 rounded-full bg-[#C6A75E]/60" />

                {/* POINTS */}
                <ul className="mb-4 space-y-0">
                  {activeSlide.points.map((point, i) => (
                    <li key={i}>

                      <div className="flex items-start gap-3 py-2">

                        <div
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                          style={{
                            border:
                              "1.5px solid rgba(198,167,94,0.5)",
                          }}
                        >
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="#C6A75E"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>

                        <span className="text-[13px] leading-snug text-neutral-200">
                          <HighlightText
                            text={point.full}
                            highlight={point.highlight}
                          />
                        </span>
                      </div>

                      {i < activeSlide.points.length - 1 && (
                        <div className="h-px bg-white/[0.06]" />
                      )}
                    </li>
                  ))}
                </ul>

                {/* BADGE */}
                <div
                  className="flex items-center gap-4 rounded-xl px-4 py-3"
                  style={{
                    border:
                      "1px solid rgba(198,167,94,0.25)",
                    background: "rgba(198,167,94,0.04)",
                  }}
                >
                  <div className="shrink-0 text-[#C6A75E]">
                    <TrendingUp
                      className="h-6 w-6"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div
                    className="h-7 w-px shrink-0"
                    style={{
                      background:
                        "rgba(198,167,94,0.25)",
                    }}
                  />

                  <p className="text-[13px] leading-snug text-white">
                    {activeSlide.badgeLine1}
                    <br />
                    {activeSlide.badgeLine2}
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative min-h-[280px] overflow-hidden lg:rounded-r-2xl">

                <Image
                  src={activeSlide.image}
                  alt={activeSlide.titleWhite}
                  fill
                  priority
                  className="object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* NUMBER */}
                <div className="absolute bottom-5 right-6">

                  <span
                    className="select-none text-6xl font-black leading-none"
                    style={{
                      fontFamily:
                        "'Playfair Display', Georgia, serif",
                      color: "rgba(198,167,94,0.10)",
                    }}
                  >
                    0{current + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
        </div>

        {/* DOTS */}
        <div className="mt-5 flex items-center justify-center gap-2">

          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="rounded-full transition-all duration-300"
              style={{
                height: "3px",
                width:
                  current === index ? "40px" : "12px",
                background:
                  current === index
                    ? "linear-gradient(90deg, #E7D3A1, #C6A75E)"
                    : "rgba(255,255,255,0.12)",
              }}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-400">
            Selecionamos as soluções certas para a realidade atual da sua clínica,
            desde a estrutura inicial até a escala comercial.
          </p>

          <a
            href="https://wa.me/555391685956?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 inline-flex h-[48px] items-center justify-center gap-3 overflow-hidden rounded-sm bg-gradient-to-r from-[#E7D3A1] via-[#C6A75E] to-[#A67C35] px-7 text-[11px] font-bold uppercase tracking-[0.15em] text-black shadow-[0_0_50px_rgba(198,167,94,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_70px_rgba(198,167,94,0.5)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

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