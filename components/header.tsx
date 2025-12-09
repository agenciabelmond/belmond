"use client"

import { Button } from "@/components/ui/button"
import { Open_Sans } from "next/font/google"
import { Montserrat, STIX_Two_Text } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
})

export const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export function Hero() {
  return (
    <div className={`${openSans.className} min-h-screen bg-[#0a0f18] text-white`}>
      <section className="relative w-full bg-black text-white min-h-screen">
        {/* Faixa topo */}
        <div className="w-full bg-[#F4D27A] text-black text-center font-semibold py-3 text-sm tracking-wide">
          EXCLUSIVO PARA CLÍNICAS QUE QUEREM FATURAR MAIS
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <div className="container mx-auto max-w-7xl px-6 pt-8 pb-20 flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[#F7DFA1] ">
              Gestão, performance e análise
            </p>

            <h1 className="text-4xl font-extrabold leading-tight ">
              Potencialize o crescimento da sua clínica com o {" "}
              <span className="text-[#F4D27A]">PowerClinic</span>
            </h1>

            <div className="relative w-full ">
              <img
                src="/equipe.png"
                alt="Equipe PowerClinic"
                className="w-full rounded-xl object-cover scale-[1.08]"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-black/70 to-black" />

              <div className="absolute right-3 bottom-[-40px] flex flex-col gap-3 items-end">
                <div className="backdrop-blur-xl px-4 py-2 rounded-xl border border-[#F4D27A]/70 shadow-[0_0_18px_rgba(244,210,122,0.3)]">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-[#F4D27A]">+5</span>
                    <span className="text-xs text-gray-200 leading-tight">Anos de mercado</span>
                  </div>
                </div>

                <div className="backdrop-blur-xl px-5 py-3 rounded-xl border border-[#F4D27A]/70 shadow-[0_0_22px_rgba(244,210,122,0.35)] min-w-[180px]">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-extrabold text-[#F4D27A]">+150</span>
                    <span className="text-xs text-gray-200 leading-tight">Clínicas atendidas</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#25D366] text-black hover:bg-[#25D366]/90 text-lg px-10 py-5 font-semibold rounded-lg mt-14 "
            >
              Fale com um especialista
            </Button>

            <p className="text-base text-gray-200 ">
              Entenda como grandes clínicas brasileiras estão aumentando o seu faturamento
              com a nossa parceria e a nossa estratégia.
            </p>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div className="container mx-auto max-w-7xl px-6 pt-24 pb-28 grid grid-cols-[1.1fr_1.6fr] gap-10 items-center">
            <div className="space-y-8 md:pr-4">
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-[#F7DFA1] ">
                Estratégia, gestão e performance para clínicas
              </p>

              <h1
                className="text-left  text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                Potencialize o crescimento da sua clínica com o {" "}
                <span className="text-[#F4D27A]">PowerClinic</span>
              </h1>

              <Button
                size="lg"
                className="bg-[#1EB85A] text-white hover:bg-[#1EB85A]/90 text-xl px-12 py-6 font-semibold rounded-lg shadow-[0_0_30px_#1EB85A88] animate-[pulseGlow_2s_ease-in-out_infinite] flex items-center gap-3 "
              >
                Fale com um Especialista
              </Button>

              <p className="text-base md:text-lg text-gray-200 max-w-xl ">
                Entenda como grandes clínicas brasileiras estão aumentando o seu faturamento
                com a nossa parceria e a nossa estratégia.
              </p>
            </div>

            <div className="relative flex justify-start w-full overflow-visible mr-4">
              <div className="relative block w-full">
                <img
                  src="/equipe.png"
                  alt="Equipe PowerClinic"
                  className="w-full max-w-none rounded-xl object-cover scale-[0.9]"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-black/70 to-black" />

                <div className="absolute right-6 bottom-[-30px] flex flex-col gap-4 items-end">
                  <div className="backdrop-blur-xl px-5 py-3 rounded-xl border border-[#F4D27A]/70 shadow-[0_0_20px_rgba(244,210,122,0.3)]">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-extrabold text-[#F4D27A]">+5</span>
                      <span className="text-sm text-gray-200 leading-tight">Anos de mercado</span>
                    </div>
                  </div>

                  <div className="backdrop-blur-xl px-6 py-4 rounded-xl border border-[#F4D27A]/70 shadow-[0_0_26px_rgba(244,210,122,0.35)] min-w-[220px]">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-extrabold text-[#F4D27A]">+150</span>
                      <span className="text-sm text-gray-200 leading-tight">Clínicas atendidas</span>
                    </div>
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
