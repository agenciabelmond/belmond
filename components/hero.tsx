import React from "react"
import { Button } from "@/components/button"
import { CirclePlay, Target, PhoneCall, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HERO_CONTENT = {
  title: "Sua clínica em",
  highlight: "crescimento constante",
  subtitle:
    "Elevamos o padrão da sua clínica com gestão estratégica e um plano de crescimento personalizado, focado em performance, previsibilidade e aumento real de faturamento.",
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[72svh] overflow-hidden bg-[#030303] text-white sm:min-h-[82svh] lg:min-h-[84svh]"
    >
      {/* Fundo base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_68%_38%,rgba(212,176,80,0.32),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_72%_55%,rgba(231,211,161,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_30%_80%,rgba(143,107,46,0.12),transparent_60%)]" />

      {/* Vinheta */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.88)_38%,rgba(0,0,0,0.18)_62%,rgba(0,0,0,0.72)_100%)]" />

      {/* SVG Background */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 860"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gold-line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E7D3A1" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C6A75E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8F6B2E" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="gold-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C6A75E" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#E7D3A1" stopOpacity="0.02" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <polygon
          points="780,30 1440,200 1440,820 980,820"
          fill="url(#gold-fill)"
          stroke="url(#gold-line)"
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />

        <polygon
          points="920,110 1380,260 1380,700 1060,700"
          fill="none"
          stroke="url(#gold-line)"
          strokeWidth="0.6"
          strokeOpacity="0.22"
        />

        <line
          x1="650"
          y1="-10"
          x2="1460"
          y2="340"
          stroke="url(#gold-line)"
          strokeWidth="1"
          strokeOpacity="0.5"
          filter="url(#glow)"
        />

        <line
          x1="700"
          y1="870"
          x2="1460"
          y2="480"
          stroke="url(#gold-line)"
          strokeWidth="0.9"
          strokeOpacity="0.4"
          filter="url(#glow)"
        />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid min-h-[88svh] items-center lg:min-h-[84svh] lg:grid-cols-[48%_52%]">

          {/* Texto */}
          <div className="relative z-20 pt-1 pb-2 lg:max-w-[660px] lg:-mt-20 lg:pb-20 lg:pt-10">

<h1 className="font-serif text-[30px] font-light leading-[1.02] tracking-[-0.03em] text-white sm:text-[56px] md:text-[66px] lg:text-[70px]">              {HERO_CONTENT.title}
              <br />
              <span className="bg-gradient-to-r from-[#F0DFA8] via-[#C6A75E] to-[#8F6B2E] bg-clip-text italic text-transparent drop-shadow-[0_0_24px_rgba(198,167,94,0.4)]">
                {HERO_CONTENT.highlight}
              </span>
            </h1>

            <p className="mt-4 max-w-[540px] border-l-2 border-[#C6A75E]/40 pl-4 font-sans text-[14px] font-light leading-[1.55] text-white sm:text-[15.5px] lg:text-[16.5px]">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Desktop buttons */}
            <div className="mt-8 hidden sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
             <Button
  asChild
  className="group relative h-[52px] overflow-hidden rounded-full bg-gradient-to-r from-[#E7D3A1] via-[#C6A75E] to-[#A67C35] px-8 text-[11px] font-bold uppercase tracking-[0.1em] text-black shadow-[0_0_50px_rgba(198,167,94,0.4)] transition-all duration-300 hover:scale-[1.03]"
>
  <a
    href="https://wa.me/55555391685956?text=Olá%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
    target="_blank"
    rel="noopener noreferrer"
  >
    Falar com especialista
  </a>
</Button>

              <Link
                href="#metodo"
                className="flex h-[52px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/4 px-8 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm"
              >
                <CirclePlay className="h-4 w-4" />
                Conhecer o método
              </Link>
            </div>
          </div>
              {/* Mobile hero (imagem + CTA juntos) */}
<div className="relative z-10 -mx-5 -mt-2 lg:hidden">

  {/* IMAGEM */}
<div className="relative h-[55vw] max-h-[340px] min-h-[240px] -translate-y-4">
      <div className="absolute bottom-0 left-1/2 h-[90%] w-[90%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_70%_60%_at_50%_90%,rgba(231,211,161,0.52)_0%,rgba(198,167,94,0.35)_30%,rgba(143,107,46,0.16)_60%,transparent_80%)] blur-[22px]" />

    <Image
      src="/equipe.png"
      alt="Equipe Belmond"
      fill
      priority
      className="object-contain object-top scale-125"
    />
  </div>

 {/* CTA COLADO NA IMAGEM */}
<div className="relative -mt-8 z-30 flex flex-col gap-3 px-2">
<Button
  asChild
  className="h-[52px] w-full rounded-full bg-gradient-to-r from-[#E7D3A1] via-[#C6A75E] to-[#A67C35] px-8 text-[11px] font-bold uppercase tracking-[0.1em] text-black"
>
  <a
    href="https://wa.me/55555391685956?text=Olá%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
    target="_blank"
    rel="noopener noreferrer"
  >
    Falar com especialista
  </a>
</Button>

  <Link
    href="#metodo"
    className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/4 px-8 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm"
  >
    <CirclePlay className="h-4 w-4" />
    Conhecer o método
  </Link>
</div>

</div>
          {/* Desktop image */}
          <div className="pointer-events-none absolute bottom-[130px] right-0 z-10 hidden h-[68vh] w-[54%] lg:block">
            <div className="absolute bottom-0 left-1/2 h-[40%] w-[75%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(231,211,161,0.5)_0%,rgba(198,167,94,0.32)_35%,rgba(143,107,46,0.14)_65%,transparent_80%)] blur-[50px]" />

            <Image
              src="/equipe.png"
              alt="Equipe Belmond"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Desktop cards */}
        <div className="absolute bottom-10 left-1/2 z-30 hidden w-[calc(100%-96px)] max-w-[1240px] -translate-x-1/2 lg:block">
          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-[#C6A75E]/18 bg-[#0A0A0A]/80 backdrop-blur-2xl">
            <InfoCard
              icon={<Target className="h-5 w-5" />}
              title="Posicionamento"
              text="Autoridade e presença digital para atrair os pacientes certos."
            />

            <InfoCard
              icon={<PhoneCall className="h-5 w-5" />}
              title="Captação"
              text="Tráfego pago inteligente para gerar oportunidades todos os dias."
              bordered
            />

            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title="Conversão"
              text="Treinamento comercial para transformar leads em agendamentos."
            />
          </div>
        </div>

        {/* Mobile cards */}
        <div className="relative z-30 mt-4 mb-4 flex flex-col overflow-hidden rounded-2xl border border-[#C6A75E]/16 bg-[#080808]/92 backdrop-blur-2xl lg:hidden">
          <MobileInfoCard
            icon={<Target className="h-[18px] w-[18px]" />}
            title="Posicionamento"
            text="Autoridade e presença digital para atrair os pacientes certos."
          />

          <MobileInfoCard
            icon={<PhoneCall className="h-[18px] w-[18px]" />}
            title="Captação"
            text="Tráfego pago inteligente para gerar oportunidades todos os dias."
            bordered
          />

          <MobileInfoCard
            icon={<Users className="h-[18px] w-[18px]" />}
            title="Conversão"
            text="Treinamento comercial para transformar leads em agendamentos."
          />
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  text,
  bordered = false,
}: {
  icon: React.ReactNode
  title: string
  text: string
  bordered?: boolean
}) {
  return (
    <div
      className={`group flex items-center gap-4 px-6 py-5 ${
        bordered ? "border-x border-[#C6A75E]/14" : ""
      }`}
    >
      <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl border border-[#C6A75E]/22 text-[#C6A75E]">
        {icon}
      </div>

      <div>
        <h3 className="mb-1 font-sans text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#C6A75E]">
          {title}
        </h3>

        <p className="max-w-[260px] font-sans text-[12px] font-light leading-[1.45] text-white">
          {text}
        </p>
      </div>
    </div>
  )
}

function MobileInfoCard({
  icon,
  title,
  text,
  bordered = false,
}: {
  icon: React.ReactNode
  title: string
  text: string
  bordered?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3.5 ${
        bordered ? "border-y border-[#C6A75E]/10" : ""
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#C6A75E]/22 text-[#C6A75E]">
        {icon}
      </div>

      <div>
        <h3 className="mb-0.5 font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-[#C6A75E]">
          {title}
        </h3>

        <p className="font-sans text-[11px] font-light leading-[1.45] text-white/55">
          {text}
        </p>
      </div>
    </div>
  )
}