"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-32 bg-black">
      <div className="container mx-auto px-4">
        <div
          className="
            relative max-w-6xl mx-auto rounded-xl overflow-hidden
            shadow-[0_0_45px_4px_rgba(0,0,0,0.55)]
          "
        >

          {/* Vídeo substituindo a imagem */}
          <video
            src="/prediovideo.mp4"   // coloque aqui o caminho do seu vídeo
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[580px] object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-8">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
          style={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
          }}
        >
          Pronto para levar sua clínica <span className="text-accent">às alturas?</span>
        </h2>


                      <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Selecione um de nossos planos e experiencie o poder de tráfego qualificado, gestão organizada e equipe
              profissional especializada em clínicas odontológicas.
            </p>
            <Button
              size="lg"
              className="
                relative 
                bg-black text-white
                text-lg px-12 py-7 font-extrabold 
                rounded-xl
                border border-white
                shadow-[0_0_15px_rgba(255,255,255,0.6)]
                transition-transform duration-300
                hover:scale-105
              "
            >
              <span className="relative flex items-center">
                AGENDAR REUNIÃO
                <ArrowRight className="ml-3 w-6 h-6" />
              </span>
            </Button>


          </div>
        </div>
      </div>
    </section>
  )
}
