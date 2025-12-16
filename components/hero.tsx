'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Open_Sans, Montserrat, STIX_Two_Text } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

// Caso vá usar no futuro, mantenha. Senão, remova.
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const stixTwoText = STIX_Two_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

export function Hero() {
  return (
    <div className={`${openSans.className} min-h-screen bg-[#0a0f18] text-white`}>
      <section className="relative w-full min-h-screen bg-black">
        {/* Faixa topo */}
        <div className="w-full bg-[#F4D27A] py-3 text-center text-sm font-semibold tracking-wide text-black">
          EXCLUSIVO PARA CLÍNICAS QUE QUEREM FATURAR MAIS
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="container mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 pt-8 pb-20">
            <p className="text-center text-sm uppercase tracking-[0.18em] text-[#F7DFA1]">
              Estratégia, gestão e performance para clínicas
            </p>

            <h1 className="mb-10 text-left text-5xl font-serif leading-tight text-balance">
              Potencialize o crescimento da sua clínica com o{' '}
              <span className="text-[#F4D27A]">PowerClinic</span>
            </h1>

            <div className="relative w-full">
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src="/equipe.png"
                  alt="Equipe PowerClinic"
                  width={900}
                  height={600}
                  className="h-auto w-full scale-[1.12] object-cover"
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-black/60 to-black" />
              </div>

              <div className="absolute right-3 -bottom-30 flex flex-col items-end gap-3">
                <div className="rounded-xl border border-[#F4D27A]/70 bg-black/40 px-4 py-2 backdrop-blur-xl shadow-[0_0_18px_rgba(244,210,122,0.3)]">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-[#F4D27A]">+5</span>
                    <span className="text-xs text-gray-200">Anos de mercado</span>
                  </div>
                </div>
              <div className="min-w-[160px] rounded-lg border border-[#F4D27A]/70 bg-black/40 px-4 py-2 backdrop-blur-xl shadow-[0_0_18px_rgba(244,210,122,0.35)]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold text-[#F4D27A]">+150</span>
                  <span className="text-xs text-gray-200">Clínicas atendidas</span>
                </div>
              </div>



                <div className="rounded-xl border border-[#F4D27A]/70 bg-black/40 px-4 py-2 backdrop-blur-xl shadow-[0_0_18px_rgba(244,210,122,0.3)]">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-[#F4D27A]">30%</span>
                    <span className="text-xs text-gray-200">Aumento médio na conversão</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-28 flex flex-col items-center gap-4">
              <Button
                size="lg"
                className="rounded-lg bg-[#1EB85A] px-12 py-6 text-xl font-semibold text-white shadow-[0_0_30px_#1EB85A88] hover:bg-[#1EB85A]/90"
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
          <div className="container mx-auto grid max-w-7xl grid-cols-[1.1fr_1.6fr] items-center gap-10 px-6 pt-24 pb-44">
            <div className="space-y-8">
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

            <div className="relative w-full">
              <div className="relative w-full overflow-hidden rounded-xl">
                <Image
                  src="/equipe.png"
                  alt="Equipe PowerClinic"
                  width={1100}
                  height={700}
                  className="h-auto w-full scale-[1.03] object-cover"
                  priority
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-black/60 to-black" />
              </div>

              <div className="absolute right-6 -bottom-16 flex flex-col items-end gap-4">
                <div className="rounded-lg border border-[#F4D27A]/60 bg-black/40 px-5 py-3 backdrop-blur-xl shadow-[0_0_18px_rgba(244,210,122,0.3)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[26px] font-extrabold text-[#F4D27A]">+5</span>
                    <span className="text-sm text-gray-200">Anos de mercado</span>
                  </div>
                </div>

                <div className="rounded-lg border border-[#F4D27A]/60 bg-black/40 px-5 py-3 backdrop-blur-xl shadow-[0_0_20px_rgba(244,210,122,0.32)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[26px] font-extrabold text-[#F4D27A]">+250</span>
                    <span className="text-sm text-gray-200">Clínicas atendidas</span>
                  </div>
                </div>

                <div className="rounded-lg border border-[#F4D27A]/60 bg-black/40 px-5 py-3 backdrop-blur-xl shadow-[0_0_20px_rgba(244,210,122,0.32)]">
                  <div className="flex items-center gap-2">
                    <span className="text-[26px] font-extrabold text-[#F4D27A]">30%</span>
                    <span className="text-sm text-gray-200">Aumento médio na conversão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
