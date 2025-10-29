"use client"

import { Play } from "lucide-react"
import { useState } from "react"

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Carlos Mendes",
      clinic: "Clínica Sorrir Bem - São Paulo",
      thumbnail: "/professional-dental-clinic-interior.jpg",
      videoUrl: "#", // Replace with actual video URL
      quote: "Em 3 meses aumentamos nossa agenda em 180% com a Belmond",
    },
    {
      id: 2,
      name: "Dra. Ana Paula Silva",
      clinic: "Odonto Excellence - Rio de Janeiro",
      thumbnail: "/modern-dental-reception.png",
      videoUrl: "#", // Replace with actual video URL
      quote: "O treinamento da equipe foi fundamental para nossa conversão",
    },
  ]

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-primary">
            Veja o que nossos <span className="text-accent">clientes dizem</span>
          </h2>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto text-pretty leading-relaxed">
            Resultados reais de clínicas que transformaram seus negócios com o Método Power Clinic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-6 cursor-pointer border-2 border-accent/20 hover:border-accent/60 transition-all">
                <img
                  src={testimonial.thumbnail || "/placeholder.svg"}
                  alt={`Depoimento ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <button
                    className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl"
                    onClick={() => setActiveVideo(testimonial.id)}
                  >
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 p-6 bg-gray-50 rounded-xl border border-accent/10">
                <p className="text-lg font-medium text-primary italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="pt-2 border-t border-accent/20">
                  <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                  <p className="text-sm text-primary/60 font-medium">{testimonial.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
