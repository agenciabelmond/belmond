"use client"

import { Play, X } from "lucide-react"
import { useState } from "react"

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Carlos Mendes",
      clinic: "Clínica Sorrir Bem - São Paulo",
      thumbnail: "/professional-dental-clinic-interior.jpg",
      videoUrl: "/videos/depoimento1.mp4", // coloque seu vídeo aqui
      quote: "Em 3 meses aumentamos nossa agenda em 180% com a Belmond",
    },
    {
      id: 2,
      name: "Dra. Ana Paula Silva",
      clinic: "Odonto Excellence - Rio de Janeiro",
      thumbnail: "/modern-dental-reception.png",
      videoUrl: "/videos/depoimento2.mp4", // coloque seu vídeo aqui
      quote: "O treinamento da equipe foi fundamental para nossa conversão",
    },
  ]

  return (
    <section
      id="depoimentos"
      className="py-24 relative"
      style={{
        background: "radial-gradient(circle at center, #1a1a1a 0%, #000 80%)",
      }}
    >
      {/* textura leve no fundo */}
      <div className="absolute inset-0 opacity-[0.08] bg-[url('/noise.png')] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Veja o que nossos{" "}
            <span className="text-[#e9d2a6] drop-shadow-[0_0_10px_rgba(233,210,166,0.5)]">
              clientes dizem
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Resultados reais de clínicas que transformaram seus negócios com o Método PowerClinic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="group">
              {/* CARD DO VÍDEO */}
              <div
                className="relative aspect-video rounded-2xl overflow-hidden mb-6 cursor-pointer border-2 
                border-[#e9d2a6]/20 hover:border-[#e9d2a6]/60 transition-all shadow-xl"
                onClick={() => setActiveVideo(t.id)}
              >
                <img
                  src={t.thumbnail}
                  alt={`Depoimento ${t.name}`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition flex items-center justify-center">
                  <button
                    className="w-20 h-20 rounded-full bg-[#e9d2a6] flex items-center justify-center 
                    group-hover:scale-110 transition shadow-[0_0_25px_rgba(233,210,166,0.7)]"
                  >
                    <Play className="w-10 h-10 text-black fill-black ml-1" />
                  </button>
                </div>
              </div>

              {/* CARD DE TEXTO */}
              <div className="space-y-4 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-[#e9d2a6]/10 shadow-lg">
                <p className="text-lg font-medium text-white italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-[#e9d2a6]/20">
                  <p className="font-bold text-white text-lg">{t.name}</p>
                  <p className="text-sm text-white/60">{t.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL DE VÍDEO */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]">
            <button
              className="absolute top-6 right-6 text-white hover:text-[#e9d2a6] transition"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-10 h-10" />
            </button>

            <video
              src={
                testimonials.find((t) => t.id === activeVideo)?.videoUrl || ""
              }
              controls
              autoPlay
              className="w-[90%] max-w-3xl rounded-xl shadow-2xl border border-[#e9d2a6]/30"
            />
          </div>
        )}
      </div>
    </section>
  )
}
