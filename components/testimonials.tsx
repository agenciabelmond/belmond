"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const testimonials = [
  {
    name: "Luiz Cezar Freddi Lomba",
    image: "/cristina.png",
    rating: 5,
    text: "A melhor possível! Desde a explicação inicial, contratação, explicação do produto com Maestria e Diligência! Empresa que , ao meu ver, entrega mais do que o investimento!",
  },
  {
    name: "Ana Cristina Soeiro",
    image: "/isabelle.png",
    rating: 5,
    text: "Fizemos o treinamento com a equipe da nossa clínica e a experiência foi excelente! O conteúdo foi muito útil, prático e diretamente aplicável à nossa rotina.",
  },
  {
    name: "Vírginia Reis",
    image: "/paloma.png",
    rating: 5,
    text: "Uma equipe qualificada, disposta a auxiliar com profissionalismo e atenção aos pequenos detalhes.",
  },
  {
    name: "Oral Unic Petrópolis",
    image: "/jaco.png",
    rating: 5,
    text: "Temos uma parceria com a agência de marketing há algum tempo e só temos elogios! Profissionais comprometidos, criativos e sempre prontos para entregar soluções eficazes.",
  },
  {
    name: "Wanessa Braga",
    image: "/patricia.png",
    rating: 5,
    text: "Contratei o serviço da empresa por 1 mês a princípio e foi uma experiência tão boa, devido a exclusividade, atenção com os detalhes, principalmente do Jhonnatha, que solicitei mais 1 mês pra acabar de lapidar minha equipe, ensinando até realizar entrevistas com candidatas a recepção.",
  },
    {
    name: "Flávia Martins",
    image: "/edineia.png",
    rating: 5,
    text: "Obtenho muitos resultados através da empresa e super indico .Pois nos ajuda muito nas questões, de treinamentos atuais e dinâmicos com a nossa equipe e preparação de antigos e novos colaboradore",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  // Função para verificar se pode scrollar
  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanLeft(scrollLeft > 10)
    // Usamos -20 para dar uma margem de erro de arredondamento no navegador
    setCanRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      checkScroll()
      // Adiciona listener para caso o usuário use o touch do celular
      el.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
    }
    return () => {
      el?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const handleScroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return

    const scrollAmount = 360 // Ajuste conforme a largura do seu card + gap
    
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    })
  }

  return (
    <section id="depoimentos" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C6A75E]  font-medium">
              Depoimentos
            </p>
            <h2 className="text-3xl md:text-4xl font-light mt-2">
              O que nossos <span className="text-yellow-200 italic">clientes</span> dizem
            </h2>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canLeft}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 disabled:opacity-20 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-yellow-200" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canRight}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 disabled:opacity-20 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-yellow-200" />
            </button>
          </div>
        </div>

        {/* CAROUSEL CONTÊINER */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
            style={{ 
              scrollbarWidth: "none",
              msOverflowStyle: "none"
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative min-w-[300px] md:min-w-[380px] snap-start rounded-2xl p-[1px]"
              >
                {/* Borda Animada */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-60 transition duration-500"
                  style={{
                    background: "linear-gradient(120deg, transparent, #fde047, transparent)",
                    backgroundSize: "200% 200%",
                    animation: "borderFlow 4s linear infinite",
                  }}
                />

                {/* Conteúdo do Card */}
                <div className="relative h-full rounded-2xl p-6 bg-zinc-900/80 border border-white/5 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-yellow-500/20">
                      <Image
                        src={`/${t.image}`} // Ajuste o caminho se necessário
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-zinc-100">{t.name}</p>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-zinc-400 italic">
                    "{t.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button
            onClick={() => handleScroll("left")}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center active:bg-yellow-500/20"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-200" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center active:bg-yellow-500/20"
          >
            <ChevronRight className="w-6 h-6 text-yellow-200" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}