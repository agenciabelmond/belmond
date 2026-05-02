import React from "react"
import { Button } from "@/components/button"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const HERO_CONTENT = {
  title: "Sua clínica em",
  highlight: "crescimento constante",
  subtitle:
    "Elevamos o padrão da sua clínica odontológica com gestão inteligente e estratégias de performance desenhadas para o mercado de alto padrão.",
  whatsappUrl: "https://wa.me/SEUNUMERO",
}

const STARS = Array.from({ length: 5 })

const primaryButtonStyles =
  "w-full sm:w-auto bg-[#E7D3A1] text-black hover:bg-[#C6A75E] font-semibold tracking-[0.15em] text-[11px] uppercase px-12 h-14 rounded-full shadow-[0_10px_30px_rgba(198,167,94,0.25)] transition-all duration-500 hover:scale-[1.03]"

const secondaryButtonStyles =
  "w-full sm:w-auto bg-white border-white text-black hover:bg-gray-100 font-medium tracking-[0.15em] text-[11px] uppercase px-10 h-14 rounded-full backdrop-blur-sm transition-all"

function GoogleReviewBadge() {
  return (
    <div
      aria-label="Avaliação 5 estrelas no Google"
      className="relative inline-flex items-center gap-4 rounded-2xl px-5 py-3 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/90 shadow-sm ring-1 ring-black/5">
        <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>

      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-2">
          <span className="text-base font-light text-white/90 tracking-tight">
            5.0
          </span>

          <div className="flex gap-0.5">
            {STARS.map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#C6A75E]/80 text-[#C6A75E]/80"
              />
            ))}
          </div>
        </div>

        <span className="text-[10px] font-light tracking-[0.16em] text-white/25 uppercase">
          Avaliação Premium no Google
        </span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-[#050505]"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C6A75E]/10 rounded-full blur-[80px] md:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 max-w-2xl -translate-y-8 sm:translate-y-0 transition-transform">
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-[1.1] tracking-tight"
              >
                {HERO_CONTENT.title} <br />
                <span className="italic font-normal bg-gradient-to-r from-[#E7D3A1] via-[#C6A75E] to-[#8F6B2E] bg-clip-text text-transparent">
                  {HERO_CONTENT.highlight}
                </span>
              </h1>

              <p className="text-base md:text-lg text-white/60 leading-relaxed font-light max-w-lg border-l border-[#C6A75E]/40 pl-6">
                {HERO_CONTENT.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Button asChild className={primaryButtonStyles}>
                <a
                  href="https://wa.me/555391685956?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com especialista no WhatsApp"
                  className="flex items-center justify-center gap-2 w-full"
                >
                  Falar com Especialista
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>

              <Button asChild variant="outline" className={secondaryButtonStyles}>
                <Link href="#metodo">
                  Entender o PowerClinic
                </Link>
              </Button>
            </div>

            <GoogleReviewBadge />
          </div>

          {/* Imagem oculta no mobile e tablet */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full aspect-[4/5] lg:aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src="/equipe.png"
                alt="Equipe PowerClinic"
                fill
                priority
                className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -right-8 bottom-12 z-20 hidden md:block">
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[220px]">
                <p className="text-[11px] tracking-wider text-white font-bold uppercase">
                  Gestão Inteligente
                </p>

                <p className="text-[12px] text-white/50 mt-1">
                  Mais controle sobre processos, agendas e organização interna da clínica.
                </p>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 border border-[#C6A75E]/20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}