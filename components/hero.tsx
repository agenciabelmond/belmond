'use client'

import Image from 'next/image'
import { Open_Sans, Montserrat, STIX_Two_Text } from 'next/font/google'
import { Button } from '@/components/ui/button'

// =====================
// Fonts
// =====================

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
})

export const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  style: ['normal','italic'],
})

// =====================
// Component
// =====================

export function Hero() {
  return (
    <div className={`${openSans.className} min-h-screen bg-[#0a0f18] text-white`}>
      <section className="relative w-full min-h-screen bg-black">

        {/* Top bar */}
        <div className="w-full bg-[#F4D27A] py-3 text-center text-sm font-semibold tracking-wide text-black">
          EXCLUSIVO PARA CLÍNICAS QUE QUEREM FATURAR MAIS
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="container mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pt-10 pb-20">
            
            <p className="text-center text-sm uppercase tracking-[0.18em] text-[#F7DFA1]">
              Estratégia, gestão e performance para clínicas
            </p>

            <h1 className="text-left text-4xl font-serif leading-tight sm:text-5xl">
              Potencialize o crescimento da sua clínica com o{' '}
              <span className="text-[#F4D27A]">PowerClinic</span>
            </h1>

            {/* Image */}
            <div className="relative w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <div className="relative overflow-hidden rounded-xl ring-1 ring-white/5">
                
                <Image
                  src="/fotoequipe.png"
                  alt="Equipe PowerClinic"
                  width={1000}
                  height={700}
                  className="h-auto w-full object-cover"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 
                bg-[radial-gradient(circle_at_center,transparent_75%,rgba(0,0,0,0.22)_100%)]" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 
                bg-gradient-to-b from-transparent to-black/50" />

              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="rounded-lg bg-[#1EB85A] px-10 py-5 text-lg font-semibold text-white shadow-[0_0_30px_#1EB85A88] hover:bg-[#1EB85A]/90 sm:px-12 sm:py-6 sm:text-xl"
              >
                Fale com um Especialista
              </Button>

              <p className="max-w-md text-center text-base text-gray-200">
                Entenda como grandes clínicas brasileiras estão aumentando o seu faturamento
                com a nossa parceria e a nossa estratégia.
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          <div className="container mx-auto grid max-w-7xl grid-cols-[1.05fr_1.8fr] items-start gap-12 px-6 pt-16 pb-32">
            
            {/* Text */}
            <div className="space-y-8 mt-4">
              <p className="text-base uppercase tracking-[0.18em] text-[#F7DFA1]">
                Estratégia, gestão e performance para clínicas
              </p>

              <h1 className="text-6xl font-serif leading-tight">
                Potencialize o crescimento da sua clínica com o{' '}
                <span className="text-[#F4D27A]">PowerClinic</span>
              </h1>

              <Button
                size="lg"
                className="rounded-lg bg-[#1EB85A] px-12 py-6 text-xl font-semibold text-white shadow-[0_0_30px_#1EB85A88] hover:bg-[#1EB85A]/90"
              >
                Fale com um Especialista
              </Button>

              <p className="max-w-xl text-lg text-gray-200">
                Entenda como grandes clínicas brasileiras estão aumentando o seu faturamento
                com a nossa parceria e a nossa estratégia.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-[75vh] w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 overflow-hidden rounded-xl ring-1 ring-white/5">

                <Image
                  src="/equipe.png"
                  alt="Equipe PowerClinic"
                  fill
                  className="object-cover object-top"
                  priority
                />

                <div className="pointer-events-none absolute inset-0 
                bg-[radial-gradient(circle_at_center,transparent_75%,rgba(0,0,0,0.22)_100%)]" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 
                bg-gradient-to-b from-transparent to-black/50" />

              </div>

              {/* 🔥 Badges MAIS PARA BAIXO */}
              <div className="hidden md:flex absolute right-6 top-[65%] flex-col items-end gap-4">
                <Badge value="+5" label="Anos de mercado" />
                <Badge value="+250" label="Clínicas atendidas" />
                <Badge value="30%" label="Aumento médio na conversão" />
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  )
}

// =====================
// Badge Component
// =====================

function Badge({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[#F4D27A]/70 bg-black/40 px-4 py-2 backdrop-blur-xl shadow-[0_0_18px_rgba(244,210,122,0.3)]">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl font-extrabold text-[#F4D27A]">
          {value}
        </span>
        <span className="text-xs sm:text-sm text-gray-200">
          {label}
        </span>
      </div>
    </div>
  )
}