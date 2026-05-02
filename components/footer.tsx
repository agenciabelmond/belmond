import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 py-12">
        
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-light tracking-[0.35em] text-white">
              BELMOND
            </h2>

            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-white/50">
              Marketing Digital
            </p>

            <Link
              href="https://instagram.com/belmond_digital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Instagram da Belmond"
              className="
                mt-5
                flex h-11 w-11 items-center justify-center
                rounded-full
                bg-gradient-to-tr
                from-yellow-300
                via-pink-500
                to-blue-600
                transition-all duration-300
                hover:scale-110 hover:shadow-lg
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            >
              <Instagram
                className="h-5 w-5 text-white"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-4 md:items-end">
            <Link
              href="/politicadeprivacidade"
              className="
                text-sm text-white/60
                transition-colors duration-300
                hover:text-white
              "
            >
              Política de Privacidade
            </Link>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              © {currentYear} Belmond. Todos os direitos reservados.
            </p>
          </nav>

        </div>
      </div>
    </footer>
  )
}