"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">

        {/* ✅ Removido o fundo azul — fica só a imagem */}
        <img
          src="/skyscrapers-from-below-looking-up.jpg"
          alt="Prédios vistos de baixo"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay escuro para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Pronto para levar sua clínica <span className="text-accent">às alturas?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Selecione um de nossos planos e experiencie o poder de tráfego qualificado, gestão organizada e equipe
            profissional especializada em clínicas odontológicas.
          </p>

          <div className="pt-6">
            <Button
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 text-lg px-10 py-7 font-bold shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              Entre em Contato
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
