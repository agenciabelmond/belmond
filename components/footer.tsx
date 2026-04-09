import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-14">

        {/* CONTEÚDO */}
        <div className="flex flex-col items-center text-center space-y-10 md:flex-row md:justify-between md:text-left">

          {/* BRAND */}
          <div className="space-y-2">
            <h3 className="text-xl font-light tracking-[0.35em] text-white">
              BELMOND
            </h3>
            <p className="text-[11px] tracking-[0.3em] text-white/60 uppercase">
              Marketing Digital
            </p>

            {/* INSTAGRAM */}
            <div className="pt-3 flex justify-center md:justify-start">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 40%, #d6249f 70%, #285AEB 100%)",
                }}
              >
                <Instagram className="h-5 w-5 text-white" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <Link
              href="/politicadeprivacidade"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Política de Privacidade
            </Link>

            <p className="text-[10px] tracking-[0.2em] text-white/50 uppercase">
              © {new Date().getFullYear()} Belmond. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}