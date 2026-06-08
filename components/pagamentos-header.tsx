"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Montserrat } from "next/font/google"
import { Menu, X } from "lucide-react"

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full py-4 md:py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Belmond - Agência de Marketing"
              width={220}
              height={88}
              className="h-10 sm:h-12 md:h-16 w-auto"
              priority
            />
          </motion.div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-montserrat text-base font-medium">
          <a
            href="https://www.agenciabelmond.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-fit"
          >
            <span className="text-white transition-colors group-hover:text-yellow-400">
              Conheça a Belmond
            </span>
            <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-yellow-400 transition-transform duration-300 origin-left group-hover:scale-x-100" />
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-2 font-montserrat text-base font-medium">
              <a
                href="https://www.agenciabelmond.com.br"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group relative w-fit"
              >
                <span className="transition-colors group-hover:text-yellow-400">
                  Conheça a Belmond
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-yellow-400 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}