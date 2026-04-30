"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Results() {
  const slides = [
    {
      title: "Monitoramento Comercial",
      tag: "Gestão",
      subtitle:
        "Acompanhamento diário da equipe comercial da clínica com feedbacks e planos de ação contínuos.",
      points: [
        "Roteiros aplicados à rotina da secretária",
        "Processo claro de quebra de objeções",
        "Acompanhamento para garantir a execução",
      ],
      image: "/treinamento.png",
    },
    {
      title: "Tráfego Pago",
      tag: "Aquisição",
      subtitle:
        "Gestão inteligente das campanhas no Google e Meta para gerar resultados consistentes.",
      points: [
        "Alcance pacientes ideais e qualificados",
        "Oportunidades diárias de agendamento",
        "Otimização baseada em performance real",
      ],
      image: "/trafego.jpg",
    },
    {
      title: "Gestão de Mídia Social",
      tag: "Branding",
      subtitle:
        "Conteúdos e anúncios focados em conversão e relacionamento, criados por especialistas.",
      points: [
        "Foco em agendamento, não apenas estética",
        "Baseado na experiência de 250 clínicas",
        "Produção contínua e atualizada",
      ],
      image: "/gestaomidiasocial.png",
    },
    {
      title: "Soluções Comerciais",
      tag: "Vendas",
      subtitle:
        "Estruturamos e potencializamos o setor comercial para acompanhar o seu crescimento.",
      points: [
        "Estruturação de equipe comercial",
        "Treinamento de alta performance",
        "Implementação de métricas e CRM",
      ],
      image: "/solucaocomercial.png",
    },
    {
      title: "Landing Page",
      tag: "Conversão",
      subtitle:
        "Páginas estrategicamente desenhadas para transformar tráfego em agendamentos reais.",
      points: [
        "Alta conversão e melhores práticas",
        "Fácil implementação e testes A/B",
        "Foco total em resultados mensuráveis",
      ],
      image: "/siterbs (3).png",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="py-20 relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#e9d2a6]/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#e9d2a6]">
            Soluções Customizadas
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white tracking-tight">
            Crescimento com <span className="text-white italic font-serif">controle e conversão.</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-neutral-900/40 backdrop-blur-md border border-white/10 rounded-[24px] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 min-h-[400px]"
              >
                <div className="p-8 md:p-12 flex flex-col justify-center border-r border-white/5">
                  <div className="mb-6">
                    <span className="inline-block bg-[#e9d2a6] text-black px-3 py-1 rounded-sm text-[12px] font-bold uppercase tracking-[0.2em]">
                      {slides[current].tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 leading-snug">
                    {slides[current].title}
                  </h3>

                  <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    {slides[current].subtitle}
                  </p>

                  <ul className="space-y-3">
                    {slides[current].points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-300">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#e9d2a6]/20 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-[#e9d2a6]" />
                        </div>
                        <span className="text-base md:text-lg font-light">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative h-56 lg:h-auto bg-neutral-800">
                  <img 
                    src={slides[current].image} 
                    alt={slides[current].title}
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 lg:from-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 flex items-center gap-3">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-[#e9d2a6] text-black hover:scale-110 transition-all shadow-lg shadow-[#e9d2a6]/20"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {slides.map((_, index) => (
              <div 
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[2px] cursor-pointer transition-all duration-500 ${
                  current === index ? "w-10 bg-[#e9d2a6]" : "w-2 bg-white/10 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center space-y-8">
        <p className="text-white text-sm md:text-base max-w-xl mx-auto whitespace-nowrap">
  Selecionamos as soluções certas para a realidade atual da sua clínica, do início à escala.
</p>
          <div className="flex justify-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 bg-[#1EB85A] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_#1EB85A44] hover:shadow-[#1EB85A66] transition-all duration-300 transform hover:-translate-y-1"
            >
              Diagnosticar minha clínica
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}