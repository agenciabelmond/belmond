import React from "react"
import { Target, Megaphone, Users } from "lucide-react"

const CARDS = [
  {
    num: "01",
    icon: <Target className="h-5 w-5" />,
    title: "Posicionamento",
    desc:
      "Construímos autoridade e presença digital para tornar sua clínica referência na mente dos pacientes.",
    tags: ["Estratégia de conteúdo", "Branding", "Instagram"],
  },
  {
    num: "02",
    icon: <Megaphone className="h-5 w-5" />,
    title: "Captação",
    desc:
      "Tráfego pago inteligente focado em gerar pacientes qualificados todos os dias para sua clínica.",
    tags: ["Anúncios", "Funis", "Landing Pages"],
  },
  {
    num: "03",
    icon: <Users className="h-5 w-5" />,
    title: "Treinamento CRC",
    desc:
      "Treinamento comercial e acompanhamento estratégico para transformar contatos em pacientes fidelizados.",
    tags: ["Treinamento CRC", "Scripts", "Monitoramento"],
  },
]

function CheckCircle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke="rgba(198,167,94,0.5)"
        strokeWidth="1.2"
      />
      <path
        d="M5 8.5l2 2 4-4"
        stroke="#C6A75E"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Metodo() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-[#080808] px-5 py-[60px] sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(198,167,94,0.10),transparent_60%)]" />

      <div className="relative z-10 mb-4 flex items-center justify-center gap-3">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A75E]" />
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-[#C6A75E]">
          Metodologia Exclusiva
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A75E]" />
      </div>

      <h2
        className="relative z-10 text-center text-[32px] font-bold leading-[1.05] tracking-[-0.02em] text-white sm:text-[42px]"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        O MÉTODO <span className="text-[#C6A75E]">POWERCLINIC</span>
      </h2>

      <p className="relative z-10 mx-auto mt-3 mb-10 max-w-[460px] text-center font-sans text-[14px] font-light leading-[1.6] text-white/60 sm:text-[15px]">
        Unimos captação, atendimento e relacionamento em uma estrutura aplicada
        para clínicas que querem{" "}
        <span className="font-normal text-[#C6A75E]">
          crescer de forma previsível.
        </span>
      </p>

      <div className="relative z-10 mx-auto grid max-w-[1250px] grid-cols-1 gap-6 sm:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.num}
            className="
              group relative overflow-hidden rounded-2xl
              border border-[#C6A75E]/12
              bg-[#0F0F0F]
              p-8
              min-h-[340px]
              transition-all duration-500
              hover:-translate-y-2
              hover:border-[#C6A75E]/30
              hover:shadow-[0_0_40px_rgba(198,167,94,0.08)]
            "
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(198,167,94,0.06),transparent_55%)]" />

            <div className="relative z-10 mb-6 flex items-start justify-between">
              <span
                className="text-[40px] leading-none text-[#C6A75E]/40"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {card.num}
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C6A75E]/20 text-[#C6A75E] transition-all duration-500 group-hover:scale-110">
                {card.icon}
              </div>
            </div>

            <h3 className="relative z-10 mb-3 font-sans text-[15px] font-semibold uppercase tracking-[0.16em] text-white">
              {card.title}
            </h3>

            <p className="relative z-10 mb-6 font-sans text-[15px] font-light leading-[1.8] text-white">
              {card.desc}
            </p>

            <div className="relative z-10 mb-4 h-px bg-[#C6A75E]/10" />

            <div className="relative z-10 flex flex-wrap items-center gap-x-1.5 gap-y-1">
              <CheckCircle />
              {card.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="font-sans text-[12px] text-white/60">
                    {tag}
                  </span>

                  {i < card.tags.length - 1 && (
                    <span className="text-white/50">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-10 h-px max-w-[1250px] bg-gradient-to-r from-transparent via-[#C6A75E]/35 to-transparent" />
    </section>
  )
}
