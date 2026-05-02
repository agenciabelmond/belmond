"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="relative bg-black py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
          {/* Background Video */}
          <video
            src="/prediovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-[500px] md:h-[580px] w-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

          {/* Main Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <h2
                className="mb-6 text-3xl font-serif leading-tight text-white md:text-5xl lg:text-6xl"
                style={{
                  textShadow: "0 4px 20px rgba(0,0,0,0.45)",
                }}
              >
                Pronto para levar sua clínica{" "}
                <span className="text-accent">às alturas?</span>
              </h2>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/85 md:text-xl">
                Fale com nossa equipe agora mesmo e agende uma reunião
                estratégica para descobrir como podemos gerar mais pacientes
                e escalar sua clínica odontológica.
              </p>

              <Link
                href="https://wa.me/555391685956?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="group h-auto rounded-xl bg-white px-10 py-6 text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-white/90"
                >
                  <span className="flex items-center gap-3">
                    AGENDAR REUNIÃO NO WHATSAPP
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}