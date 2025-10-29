"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
         
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance text-white">
            Transforme sua clínica com o <span className="text-accent">Método Power Clinic</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
            Tráfego pago estratégico e monitoramento de atendimento para clínicas que querem crescer de forma previsível
            e sustentável
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent text-black hover:bg-accent/90 text-lg px-8 py-6 font-semibold shadow-2xl shadow-accent/30 hover:shadow-accent/50 transition-all hover:scale-105"
            >
              Quero Mais Pacientes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
              <Button
                size="lg"
                variant="outline"
                className="relative px-8 py-6 text-lg font-semibold text-white bg-transparent border-none overflow-hidden rounded-xl"
              >
                <span className="absolute inset-0 rounded-xl border-2 border-white/30"></span>
                <span className="absolute inset-0 rounded-xl border-2 border-white/0 animate-border-trace pointer-events-none"></span>
                <span className="relative z-10">Conhecer o Método</span>
              </Button>

              <style jsx>{`
                @keyframes borderTrace {
                  0% { background-position: 0% 0%; }
                  100% { background-position: 200% 0%; }
                }

                .animate-border-trace {
                  border: 2px solid transparent;
                  border-radius: 1rem;
                  background: linear-gradient(
                    90deg,
                    transparent 0%,
                    rgba(255, 255, 255, 1) 50%,
                    transparent 100%
                  ) 0 / 200% 100%;
                  background-repeat: no-repeat;
                  animation: borderTrace 2s linear infinite;
                }
              `}</style>
          </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center space-y-2 p-6 min-h-[180px] rounded-lg bg-white/5 border border-accent/30 backdrop-blur-sm hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-accent">+300%</div>
            <div className="text-sm text-white/70 font-medium text-center">Média de aumento em agendamentos</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-2 p-6 min-h-[180px] rounded-lg bg-white/5 border border-accent/30 backdrop-blur-sm hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-accent">R$ 2M+</div>
            <div className="text-sm text-white/70 font-medium text-center">Receita gerada para clientes</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-2 p-6 min-h-[180px] rounded-lg bg-white/5 border border-accent/30 backdrop-blur-sm hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-accent">50+</div>
            <div className="text-sm text-white/70 font-medium text-center">Clínicas atendidas</div>
          </div>

          <div className="flex flex-col justify-center items-center space-y-2 p-6 min-h-[180px] rounded-lg bg-white/5 border border-accent/30 backdrop-blur-sm hover:bg-white/10 transition-all">
            <div className="text-3xl md:text-4xl font-bold text-accent">98%</div>
            <div className="text-sm text-white/70 font-medium text-center">Taxa de satisfação dos clientes</div>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
