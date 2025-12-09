"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header
      className="bg-black border-b border-accent/20 overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        e.currentTarget.style.setProperty("--hx", `${x}px`)
        e.currentTarget.style.setProperty("--hy", `${y}px`)
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-30">
        <div className="flex items-center">
          <Image
            src="/belmond-logo.webp"
            alt="Belmond - Agência de Resultados"
            width={180}
            height={41}
            className="h-12 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {[
            ["#metodo", "Método"],
            ["#servicos", "Serviços"],
            ["#resultados", "Resultados"],
            ["#depoimentos", "Depoimentos"],
            ["#treinamento", "Treinamento"]
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="group relative text-base font-medium text-white hover:text-accent transition-colors pb-1"
            >
              {label}
              <span
                className="
                  absolute left-0 bottom-0
                  h-[1px] w-full bg-white 
                  scale-x-0 group-hover:scale-x-100 
                  transition-transform duration-300 
                  origin-left 
                  drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
                "
              ></span>
            </a>
          ))}
        </nav>

        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
          Agendar Consultoria
        </Button>
      </div>
    </header>
  )
}
