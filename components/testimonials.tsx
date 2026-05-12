"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

const testimonials = [
  {
    name: "Lucas Martins de Castro",
    image: "/lucascastro.png",
    rating: 5,
    text: "Gostaria de parabenizar a Belmond e toda a sua equipe. Extremamente profissionais e altamente qualificados. Espero que tenhamos uma parceria de sucesso e estamos bem felizes com todo o acompanhamento.",
  },
  {
    name: "Ana Cristina Soeiro",
    image: "/anacristina.png",
    rating: 5,
    text: "Fizemos o treinamento com a equipe da nossa clínica e a experiência foi excelente! O conteúdo foi muito útil, prático e diretamente aplicável à nossa rotina.",
  },
  {
    name: "Vírginia Reis",
    image: "/virginia.png",
    rating: 5,
    text: "Uma equipe qualificada, disposta a auxiliar com profissionalismo e atenção aos pequenos detalhes.",
  },
  {
    name: "Oral Unic Petrópolis",
    image: "/oralunic.png",
    rating: 5,
    text: "Temos uma parceria com a agência de marketing há algum tempo e só temos elogios! Profissionais comprometidos, criativos e sempre prontos para entregar soluções eficazes.",
  },
  {
    name: "Wanessa Braga",
    image: "/wanessa.png",
    rating: 5,
    text: "Contratei o serviço da empresa por 1 mês a princípio e foi uma experiência tão boa, devido a exclusividade, atenção com os detalhes, principalmente do Jhonnatha, que solicitei mais 1 mês pra acabar de lapidar minha equipe, ensinando até realizar entrevistas com candidatas a recepção.",
  },
  {
    name: "Flávia Martins",
    image: "/flavia.png",
    rating: 5,
    text: "Obtenho muitos resultados através da empresa e super indico. Pois nos ajuda muito nas questões de treinamentos atuais e dinâmicos com a nossa equipe e preparação de antigos e novos colaboradores.",
  },
]

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return

    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanLeft(scrollLeft > 10)
    setCanRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      checkScroll()
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

    const scrollAmount = 360

    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id="depoimentos" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C6A75E] font-medium">
              Depoimentos
            </p>

            <h2
              className="text-3xl md:text-4xl font-light mt-2"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              O QUE NOSSOS <span className="text-[#E4C978]">CLIENTES</span> DIZEM
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

        {/* CAROUSEL */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative min-w-[300px] md:min-w-[380px] snap-start rounded-2xl p-[1px] group"
              >
                {/* glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                <div className="relative h-full rounded-2xl p-6 bg-zinc-900/80 border border-white/5 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-yellow-500/30 group-hover:shadow-xl group-hover:shadow-yellow-500/10">

                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-yellow-500/20 group">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <p className="text-sm font-medium text-zinc-100">
                      {t.name}
                    </p>
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400"
                      />
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
            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-200" />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-yellow-200" />
          </button>
        </div>

      </div>
    </section>
  )
}