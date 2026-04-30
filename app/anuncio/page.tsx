import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col scrollbar-thin scrollbar-thumb-black scrollbar-track-black">
      
      {/* Header / Menu */}
      {/* Header / Menu */}
<header className="w-full py-6 px-8 flex items-center justify-center border-b border-zinc-900">
  {/* Logo */}
  <Image
    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-belmond-BARrSRuUvIPN4xbQTXCUuSrY8fmTU2.png"
    alt="Belmond - Agência de Resultados"
    width={180}
    height={90}
    className="object-contain"
    priority
  />
</header>

      {/* Main Content */}
      <section className="flex-1 flex items-center justify-center px-6 py-16 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Subtitle */}
          <p className="text-[#d4af37] text-sm md:text-base tracking-wide uppercase">
            Estratégia, gestão e marketing para escalar clínicas de verdade.
          </p>

          {/* Smaller Title */}
<h2 className="text-2xl md:text-4xl font-semibold text-white leading-tight text-center">
  Marketing odontológico com gestão e crescimento
</h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Transformamos clínicas odontológicas em negócios lucrativos através de estratégias de marketing digital, gestão eficiente e processos de crescimento comprovados.
          </p>

          {/* CTA Button with pulse */}
          <div className="pt-4">
            <a
              href="https://wa.me/+555391685956?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] hover:from-[#c9a227] hover:to-[#b8922a] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/20 animate-pulse hover:animate-none"
            >
              <FaWhatsapp className="w-5 h-5" />
              Entrar em contato
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-zinc-900 bg-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 px-6">
          
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-belmond-BARrSRuUvIPN4xbQTXCUuSrY8fmTU2.png"
            alt="Belmond"
            width={100}
            height={50}
            className="object-contain"
          />

          <p className="text-gray-500 text-sm">
            Belmond © Todos os direitos reservados.
          </p>

        </div>
      </footer>

    </main>
  )
}