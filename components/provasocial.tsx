import { Play, Star } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">

    

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-6xl mb-6 text-white leading-tight tracking-tight">
                Cases de Sucesso
                </h2>

            <div className="max-w-4xl mx-auto mt-8 mb-4">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light tracking-wide">
                Nossa abordagem exclusiva integra o{" "}
                <span className="text-[#e9d2a6] font-medium border-b border-[#e9d2a6]/30">
                  Método Power Clinic
                </span>{" "}
                ao treinamento estratégico de equipes, criando um ecossistema completo de crescimento.
              </p>

              <p className="text-base md:text-lg text-white/70 leading-relaxed mt-4 font-light">
                A <span className="text-[#e9d2a6] font-medium">Belmond</span> não apenas desenvolve campanhas de marketing — 
                transformamos clínicas em autoridades de mercado, estabelecendo sistemas consistentes de aquisição e conversão 
                de pacientes qualificados.
              </p>
            </div>
           </div>

         {/* Video Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-12">
            {/* Video 1 */}
            <div className="group relative">
                <div className="relative aspect-[16/9] md:aspect-video rounded-2xl overflow-hidden border border-[#e9d2a6]/30 shadow-[0_8px_30px_rgba(233,210,166,0.2)] hover:shadow-[0_12px_40px_rgba(233,210,166,0.35)] transition-all duration-300">
                <video
                    className="w-full h-full object-cover"
                    poster="/professional-client-testimonial-video-thumbnail.jpg"
                    controls
                >
                    <source src="/videos/testimonial-1.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-[#e9d2a6] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </div>
                </div>
                </div>

                <div className="mt-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#e9d2a6]" fill="#e9d2a6" />
                    ))}
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">Dr. Ricardo Silva</h3>
                <p className="text-sm text-white/70">Clínica Odontológica Premium</p>
                </div>
            </div>

            {/* Video 2 */}
            <div className="group relative">
                <div className="relative aspect-[16/9] md:aspect-video rounded-2xl overflow-hidden border border-[#e9d2a6]/30 shadow-[0_8px_30px_rgba(233,210,166,0.2)] hover:shadow-[0_12px_40px_rgba(233,210,166,0.35)] transition-all duration-300">
                <video
                    className="w-full h-full object-cover"
                    poster="/professional-business-success-testimonial-video.jpg"
                    controls
                >
                    <source src="/videos/testimonial-2.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-[#e9d2a6] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                    </div>
                </div>
                </div>

                <div className="mt-4 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#e9d2a6]" fill="#e9d2a6" />
                    ))}
                </div>
                <h3 className="font-bold text-xl mb-2 text-white">Dra. Mariana Costa</h3>
                <p className="text-sm text-white/70">Clínica de Estética Avançada</p>
                </div>
            </div>
            </div>


              <div className="mt-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#e9d2a6]" fill="#e9d2a6" />
                  ))}
                </div>

                <h3 className="font-bold text-xl mb-2 text-white">Dra. Mariana Costa</h3>
                <p className="text-sm text-white/70">Clínica de Estética Avançada</p>
              </div>
            </div>

          </div>
            <div className="text-center mt-16">
            <div className="inline-block p-10 rounded-2xl bg-black border-2 border-[#e9d2a6]/40 shadow-[0_0_50px_rgba(233,210,166,0.15)]">
                <p className="text-2xl md:text-3xl font-bold text-white mb-3">
                Junte-se a{" "}
                <span className="text-[#e9d2a6] text-3xl md:text-4xl">mais de 150 clientes satisfeitos</span>
                </p>
                <p className="text-white/80 text-lg max-w-2xl">
                que transformaram suas clínicas em referências no mercado com a{" "}
                <span className="text-[#e9d2a6] font-semibold">Belmond</span>
                </p>
            </div>
            </div>


     

    </section>
  )
}
