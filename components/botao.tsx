"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Novo tom dourado mais forte
const GOLD = "#d4af37" // dourado forte

const WHATSAPP_LINK =
  "https://wa.me/5599999999999?text=Ol%C3%A1%2C+quero+aumentar+minhas+vendas+com+marketing+digital"

export function Botao() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {open && (
        <div
          className="
            absolute bottom-20 right-0
            w-80 sm:w-96
            rounded-3xl overflow-hidden
            bg-white
            shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            border border-zinc-200
            animate-fadeIn
          "
        >
          {/* TOPO */}
          <div
            className="px-4 py-3 flex items-center justify-between"
            style={{ backgroundColor: GOLD }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">

                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center">
                  <div className="relative w-7 h-7">
                    <Image
                      src="/avatar.jpg"
                      alt="Consultor Belmond"
                      fill
                      className="rounded-full object-cover border border-white"
                    />
                  </div>
                </div>

                <span
                  className="
                    absolute -bottom-0.5 -right-0.5
                    w-3 h-3 rounded-full
                    bg-emerald-400 border border-white
                  "
                />
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">Consultor</p>
                <p className="text-[11px] text-white/90">Online agora</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-black/5 transition"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* CORPO DO CHAT */}
          <div className="px-4 py-4 space-y-3 bg-white">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center">
                <div className="relative w-4 h-4">
                  <Image
                    src="/avatar.jpg"
                    alt="Consultor"
                    fill
                    className="rounded-full object-cover border border-white"
                  />
                </div>
              </div>

              <div className="bg-zinc-100 rounded-2xl px-3 py-2 max-w-[85%] text-xs text-zinc-800">
                <p>Olá, eu sou o consultor da Belmond. Tudo bem com você?</p>
              </div>
            </div>

            <div className="bg-zinc-100 rounded-2xl px-3 py-3 text-xs text-zinc-800">
              <p>
                Quer <span className="font-semibold">aumentar suas vendas</span> com marketing digital?
              </p>

              <button
                onClick={() => window.open(WHATSAPP_LINK, "_blank")}
                className="
                  mt-3 w-full rounded-full px-4 py-2.5 text-white text-xs font-semibold shadow-md transition-transform duration-150 hover:scale-105
                "
                style={{ backgroundColor: GOLD }}
              >
                Sim, quero →
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          relative rounded-full p-3 bg-[#25D366]
          shadow-[0_10px_30px_rgba(0,0,0,0.3)]
          animate-pulseSoft
        "
      >
        <div className="relative w-12 h-12">
          <Image
            src="/avatar.jpg"
            alt="Consultor"
            fill
            className="rounded-full object-cover border-2 border-white"
          />

          {!open && (
            <span
              className="
                absolute -top-1 -right-1
                w-5 h-5 rounded-full bg-red-500 border border-white
                animate-pingSlow
              "
            />
          )}
        </div>
      </button>

    </div>
  )
}