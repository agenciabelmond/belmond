"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

export function SocialProofSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "R. Jefferson",
      rating: 5,
      text: "A melhor possível! Desde a explicação inicial, contratação, explicação do produto com Maestria e Diligência! Empresa que , ao meu ver, entrega mais do que o investimento! Destaque para o profissionalismo e facilidade de explicação detalhada, com foco no objetivo de treinar os colaboradores a serem a melhor linha de frente do consultório! Muito feliz já com os primeiros resultados! Obrigado Belmond!!!",
      image: "/luiz.png",
    },
    {
      id: 2,
      name: "Jaqueline Ramos",
      rating: 5,
      text: "Curso muito satisfatório e esclarecedor! Aprendemos várias coisas novas para melhorar nosso atendimento, Jonathan muito simpático e passa o curso de uma forma que conseguimos entender sem dificuldades",
      image: "/jaqueline.png",
    },
    {
      id: 3,
      name: "Francielli Dourado",
      rating: 5,
      text: "Uma experiência incrível. A empresa ajuda a expandir os horizontes e organizar muito bem o serviço de quem os contrata.",
      image: "/fran.png",
    },
    {
      id: 4,
      name: "Alex Brum",
      rating: 5,
      text: "Equipe super qualificada, profissionais atenciosos, educados. Treinamentos com explicações detalhadas.",
      image: "/alexbrum.png",
    },
    {
      id: 5,
      name: "Vírginia Reis",
      rating: 5,
      text: "Uma equipe qualificada, disposta a auxiliar com profissionalismo e atenção aos pequenos detalhes. Estou muito satisfeita com as modificações que fizeram nos nossos atendimentos.",
      image: "/virginia.png",
    },
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">

      {/* TÍTULO */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white leading-tight tracking-tight">
            Cases de Sucesso
          </h2>

          <div className="max-w-4xl mx-auto mt-8 mb-4">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light tracking-wide">
              Nossa abordagem exclusiva integra o{" "}
              <span className="text-[#e9d2a6] font-medium border-b border-[#e9d2a6]/30">
                Método PowerClinic
              </span>{" "}
              ao treinamento estratégico de equipes.
            </p>

            <p className="text-base md:text-lg text-white/70 leading-relaxed mt-4 font-light">
              A <span className="text-[#e9d2a6] font-medium">Belmond</span> transforma clínicas em autoridades de mercado.
            </p>
          </div>

        </div>
      </div>

      {/* VÍDEO */}
      <div className="w-full px-6 mt-16 mb-28">
        <div className="max-w-2xl mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#e9d2a6]/30 shadow-[0_15px_45px_rgba(233,210,166,0.35)]">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Vj-dVlwcdBA"
              title="Depoimento Cliente"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#e9d2a6]" fill="#e9d2a6" />
              ))}
            </div>

            <h3 className="font-bold text-xl mb-1 text-white">
              Dr. Luiz César Freddi
            </h3>

            <p className="text-base text-white/70">
              Master Quality Odontologia 
            </p>
          </div>
        </div>
      </div>

      {/* CARROSSEL */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Avaliações no Google
              </h3>
              <p className="text-white/70">
                Veja o que nossos clientes dizem sobre nossa parceria estratégica.
              </p>
            </div>

            <div className="relative hidden md:block">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {testimonials.map((t) => (
                    <div key={t.id} className="w-full flex-shrink-0 px-8">
                      <div className="bg-white rounded-2xl p-10 shadow-md border border-[#e9d2a6]/30">
                        <div className="flex items-center mb-6">
                          <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-black">{t.name}</h3>
                            <div className="flex mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < t.rating
                                      ? "fill-[#e9d2a6] text-[#e9d2a6]"
                                      : "text-black/30"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-black/80 italic text-lg">"{t.text}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTÕES */}
              <button
                onClick={prevTestimonial}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#e9d2a6] text-black p-3 rounded-full"
              >
                ‹
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#e9d2a6] text-black p-3 rounded-full"
              >
                ›
              </button>

              {/* INDICADORES */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-[#e9d2a6] scale-110"
                        : "bg-gray-500/50 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  )
}