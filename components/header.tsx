"use client"

import Image from "next/image"
import React, { MouseEvent, useCallback } from "react"
import { Button } from "@/components/ui/button"

const NAV_ITEMS = [
  { href: "#inicio", label: "Início" },
  { href: "#metodo", label: "Método" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const

const BANNER_ITEMS = [
  "Estratégia",
  "Gestão",
  "Performance",
  "Crescimento",
] as const

function TopBanner() {
  const items = [...BANNER_ITEMS, ...BANNER_ITEMS]

  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#F5E7B2] via-[#EED48F] to-[#E4C978] border-t border-black/5">
      <div className="relative">
        
        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex w-max animate-marquee gap-6 py-1.5">
            {items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex shrink-0 items-center gap-6 whitespace-nowrap"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/85">
                  {item}
                </span>

                <span className="h-1 w-1 rounded-full bg-black/25" />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-black/85">
          {BANNER_ITEMS.map((item, index) => (
            <React.Fragment key={item}>
              <span>{item}</span>

              {index < BANNER_ITEMS.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-black/25" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </div>
  )
}

export function Header() {
  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const element = event.currentTarget
      const { left, top } = element.getBoundingClientRect()

      const mouseX = event.clientX - left
      const mouseY = event.clientY - top

      element.style.setProperty("--hx", `${mouseX}px`)
      element.style.setProperty("--hy", `${mouseY}px`)
    },
    []
  )

  return (
   <header
  className="overflow-hidden bg-black"
  onMouseMove={handleMouseMove}
>
  <div className="container relative z-30 mx-auto flex items-center justify-center md:justify-between px-4 py-4">
    
    <Image
      src="/belmond-logo.webp"
      alt="Belmond - Agência de Resultados"
      width={180}
      height={41}
      className="h-12 w-auto"
      priority
    />

    <nav className="hidden items-center gap-10 md:flex">
      {NAV_ITEMS.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="group relative pb-1 text-base font-medium text-white transition-colors hover:text-accent"
        >
          {label}

          <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
        </a>
      ))}
    </nav>

    <a
      href="https://wa.me/555391685956?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:block"
    >
      <Button className="rounded-full bg-accent px-5 py-5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all duration-300 hover:scale-105 hover:bg-accent hover:shadow-xl hover:shadow-accent/50">
        Agendar Consultoria
      </Button>
    </a>

  </div>

  <TopBanner />
</header>
  )
}