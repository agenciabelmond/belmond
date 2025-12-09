"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FloatingLines from "@/components/FloatingLines"

export function Results() {
  const slides = [
    {
      title: "Monitoramento e Treinamento Comercial",
      subtitle:
        "Acompanhamento diário da equipe comercial da clínica com feedbacks, relatórios detalhados e planos de ação contínuos para maximizar resultados.",
      points: [
        "Condução inteligente da conversa em todos os canais",
        "Estrutura completa de vendas, especialmente pensada para clínicas.",
        "Mais de 40 scripts validados e adaptáveis ao seu time",
      ],
      image: "/treinamento.png",
      icon: "📊",
    },
    {
      title: "Tráfego Pago",
      subtitle:
        "Gestão inteligente das campanhas no Google e Meta, ajustada ao momento e às necessidades da sua clínica para gerar resultados consistentes.",
      points: [
        "Alcance os pacientes ideais e qualifique seu funil de vendas.",
        "Gere oportunidades diariamente para o atendimento da clínica.",
        "Otimize campanhas com base em dados e performance real.",
      ],
      image: "/trafego.jpg",
      icon: "🎯",
    },
    {
      title: "Gestão de Mídia Social",
      subtitle:
        "Conteúdos e anúncios feitos pelos copywriters e designers da Belmond, pensando em conversão e relacionamento.",
      points: [
        "Mais foco em agendamento, não apenas em estética",
        "Criados com base na experiência de mais de 100 clínicas",
        "Produção contínua por um time em constante atualização",
      ],
      image: "/gestaomidiasocial.png",
      icon: "📱",
    },
    {
      title: "Soluções Comerciais",
      subtitle:
        "Estruturamos, otimizamos e potencializamos o setor comercial da sua clínica para acompanhar o crescimento e gerar resultados consistentes.",
      points: [
        "Montamos sua equipe comercial do zero ou reorganizamos estruturas existentes.",
        "Treinamos e desenvolvemos sua equipe de atendimento e vendas para máxima performance.",
        "Implementação de processos inteligentes e métricas para acompanhamento de resultados.",
      ],
      image: "/solucaocomercial.png",
      icon: "💼",
    },
    {
      title: "Landing Page",
      subtitle:
        "Landing pages estrategicamente desenhadas para transformar tráfego em agendamentos, alinhadas ao tipo de campanha da sua clínica.",
      points: [
        "Desenvolvidas com as melhores práticas de marketing digital para máxima conversão.",
        "Fáceis de implementar, editar e testar diferentes versões para otimização contínua.",
        "Foco em gerar resultados mensuráveis e acelerar o funil de vendas da clínica.",
      ],
      image: "/siterbs (3).png",
      icon: "💻",
    },
  ]

  const [current, setCurrent] = useState(0)
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
   <section className="pt-12 pb-[0px] px-4 relative overflow-hidden bg-black">

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div
          className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-40 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, #e9d2a640 0%, #fbbf2430 30%, transparent 70%)",
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute bottom-32 left-10 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl animate-pulse"
          style={{
            background: "radial-gradient(circle, #e9d2a630 0%, #f59e0b20 30%, transparent 70%)",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 space-y-3">
       <p className="text-xs md:text-sm tracking-[0.22em] uppercase text-[#e9d2a6]">
        Soluções completas para clínicas em diferentes momentos
      </p>

      <h1
        className="text-5xl md:text-5xl lg:text-6xl font-serif text-white text-center mb-10 text-balance"
      >
        Temos uma solução para cada necessidade da sua clínica.
      </h1>


          <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl md:max-w-3xl mx-auto">
            Do primeiro anúncio à organização do atendimento e do comercial,
            combinamos diferentes serviços para montar um plano sob medida para o seu contexto.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative bg-black rounded-3xl p-6 md:p-8 border border-amber-200/30 max-w-3xl mx-auto">

          {/* MOBILE */}
          <div className="md:hidden space-y-4 text-white">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#ffffff20" }}
            >
              {slides[current].icon}
            </div>

            <h3 className="text-2xl font-bold">{slides[current].title}</h3>
            <p className="text-sm text-white/80">{slides[current].subtitle}</p>

            <div className="relative h-48 rounded-2xl overflow-hidden ring-1 ring-amber-200/30">
              <img src={slides[current].image} alt="" className="w-full h-full object-cover" />
            </div>

            <ul className="space-y-2 px-2">
              {slides[current].points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full mt-1.5 bg-[#e9d2a6]" />
                  <span className="text-xs text-white/90">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 items-center text-white">
            <div className="space-y-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: "#ffffff20" }}
              >
                {slides[current].icon}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold">{slides[current].title}</h3>
              <p className="text-base text-white/80">{slides[current].subtitle}</p>

              <ul className="space-y-3">
                {slides[current].points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full mt-1.5 bg-[#e9d2a6]" />
                    <span className="text-sm text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[320px] rounded-2xl overflow-hidden ring-1 ring-amber-200/30">
              <img src={slides[current].image} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Botões */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 
                      w-10 h-10 md:w-12 md:h-12 text-white hover:bg-transparent"
            onClick={prevSlide}
          >
            <ChevronLeft className="!w-10 !h-10 text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 
                      w-10 h-10 md:w-12 md:h-12 text-white hover:bg-transparent"
            onClick={nextSlide}
          >
            <ChevronRight className="!w-10 !h-10 text-white" />
          </Button>

          {/* Indicadores (sem frase) */}
          <div className="flex flex-col items-center gap-3 mt-8 text-white">
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`${current === index ? "w-8" : "w-2 bg-gray-600 hover:bg-gray-500"} h-2 rounded-full transition-all`}
                  style={current === index ? { backgroundColor: "#e9d2a6" } : {}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FRASE FORA DO CARROSSEL */}
        <p className="text-base md:text-lg text-white/80 text-center max-w-xl mx-auto mt-10 mb-4">
          Atendemos desde clínicas que estão começando até redes consolidadas.
          Selecionamos as soluções certas para a realidade da sua clínica.
        </p>

        {/* CTA FINAL */}
        <div className="w-full flex justify-center mt-4 mb-20">
        <a
        href="https://wa.me/5511999999999?text=Olá! Quero entender qual solução da Belmond faz mais sentido para a minha clínica."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1EB85A] text-white hover:bg-[#1EB85A]/90 px-6 py-3 rounded-lg font-semibold shadow-[0_0_30px_#1EB85A88] animate-[pulseGlow_2s_ease-in-out_infinite] transition flex items-center justify-center"
      >
        Fale com um especialista e descubra o melhor plano para a sua clínica!
      </a>

        </div>

      </div>
    </section>
  )
}
