import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Metodo } from "@/components/powerclinic"
import Results from "@/components/results"
import { ExclusivityBanner } from "@/components/exclusivity-banner"
import { Testimonials } from "@/components/testimonials"
import FaqSection from "@/components/training-section"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <Hero />
      <Metodo />
      <Results />
      <ExclusivityBanner />
      <Testimonials />
      <FaqSection />
      <CTA />

      <Footer />
    </main>
  )
}