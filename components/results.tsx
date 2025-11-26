"use client"
"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Results() {
  const slides = [
    {
      title: "Tráfego Pago",
      subtitle: "Gestão dos seus anúncios online no Google e Meta",
      points: [
        "Atraia seus clientes para seu funil de vendas",
        "Abasteça seu atendimento com oportunidades de venda",
        "Tenha mais previsibilidade e mensure o retorno do seu investimento",
      ],
      image: "/images/paginas.jpg",
    },
    {
      title: "Gestão de Mídia Social",
      subtitle:
        "Seus anúncios criados pelos copywriters e designers da Belmond",
      points: [
        "Mais foco em conversão, não apenas estética",
        "Criados com base na experiência de mais de 100 clínicas atendidas",
        "Feitos por profissionais que recebem treinamento constantemente",
      ],
      image: "/images/paginas.jpg",
    },
    {
      title: "Soluções Comerciais",
      subtitle: "A expertise do nosso time de vendas à disposição da sua empresa",
      points: [
        "Estruturamos todo o seu comercial do zero",
        "Treinamos e desenvolvemos seus vendedores",
        "Fornecemos nossos executivos para venderem seu serviço ou produto",
      ],
      image: "/images/paginas.jpg",
    },
    {
      title: "Páginas",
      subtitle: "Landing pages projetadas para gerar oportunidades reais",
      points: [
        "Feitas com as melhores práticas do mercado digital",
        "Fácil de implementar e editar",
        "Projetadas com as melhores ferramentas do mercado",
      ],
      image: "/images/paginas.jpg",
    },
    {
      title: "Monitoramento e Acompanhamento",
      subtitle:
        "Acompanhamento diário do atendimento da clínica com feedbacks e relatórios",
      points: [],
      image: "/images/paginas.jpg",
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section
      id="resultados"
      className="relative py-20 bg-[#050510] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a25] via-transparent to-black opacity-60"></div>
      <div className="container relative mx-auto px-6 text-center mb-2 space-y-4 -mt-4">

        <span className="px-4 py-1.5 text-sm rounded-full bg-white text-[#e9d2a6] border border-white/10">
          O QUE FAZEMOS NA BELMOND
        </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight relative top-1">

            Muito além de números.
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#e9d2a6] to-[#bfa574]">
            Transformações Reais.
          </span>
        </h2>

        <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-3xl mx-auto">
          Conheça tudo o que trabalhamos para gerar resultados consistentes e crescimento
          previsível para sua clínica.
        </p>
      </div>

      {/* CARROSSEL (menor, com mais tensão entre texto e imagem) */}
      <div className="relative max-w-4xl mx-auto px-6 -mt-8">

        <Card className="relative w-full max-w-4xl h-[420px] p-8 rounded-3xl bg-white border border-white/10 shadow-xl flex flex-row items-stretch justify-between gap-6">
          {/* COLUNA ESQUERDA — conteúdo levemente deslocado para direita (pl-8) */}
          <div className="w-1/2 p-6 pl-8 flex flex-col justify-start">
            <h3 className="transform -translate-y-2 -ml-1 text-3xl font-extrabold text-[#e9d2a6] mb-4">
              {slides[current].title}
            </h3>

            <p className="text-black font-extrabold text-base mb-4 max-w-md">
              {slides[current].subtitle}
            </p>

            <ul className="space-y-3 text-black/80 text-left max-w-md pl-3 border-l-4 border-black/10">
              {slides[current].points && slides[current].points.length > 0 ? (
                slides[current].points.map((point, idx) => (
                  <li key={idx} className="leading-relaxed text-base">
                    • {point}
                  </li>
                ))
              ) : (
                <li className="leading-relaxed text-base">
                  • Acompanhamento diário com feedbacks e relatórios
                </li>
              )}
            </ul>
          </div>

          {/* COLUNA DIREITA: imagem ligeiramente maior e mais próxima (cria tensão) */}
          <div className="w-1/2 flex items-center justify-center">
            {/* Usa a imagem do slide se existir; caso contrário, mantém placeholder */}
            {slides[current].image ? (
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-80 h-80 object-cover rounded-xl border border-black/5"
              />
            ) : (
              <div className="w-80 h-80 bg-gray-100 rounded-xl border border-black/5 flex items-center justify-center">
                <span className="text-black/40">Imagem do tópico</span>
              </div>
            )}
          </div>
        </Card>

        {/* SETAS — recuadas um pouco para dentro */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#e9d2a6]/10 hover:bg-[#e9d2a6]/20 p-3 rounded-full border border-white/10 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="text-[#e9d2a6]" size={26} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#e9d2a6]/10 hover:bg-[#e9d2a6]/20 p-3 rounded-full border border-white/10 z-10"
          aria-label="Próximo"
        >
          <ChevronRight className="text-[#e9d2a6]" size={26} />
        </button>
      </div>

      {/* INDICADORES (pontinhos estilo Instagram) */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`rounded-full transition-all duration-300 ${
              current === idx ? "bg-[#e9d2a6] w-6 h-3 rounded-full" : "bg-white/30 w-3 h-3"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* CTA BUTTON — cor reforçada */}
     <div className="w-full flex justify-center mt-8 mb-20 relative z-10">
      <a
        href="https://wa.me/5511999999999?text=Olá! Quero saber mais." 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
      >
        Agende sua reunião agora
      </a>
    </div>

    </section>
  )
}
