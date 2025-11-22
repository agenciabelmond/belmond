import { Hero } from "@/components/hero"
import MetodoSection from "@/components/power"
import { Services } from "@/components/services"
import { ServicesSection } from "@/components/training-section"
import { Results } from "@/components/results"
import { VideoTestimonials } from "@/components/video-testimonials"
import { ExclusivityBanner } from "@/components/exclusivity-banner"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MetodoSection/>
      <Services />
      <ServicesSection />
      <Results />
      <VideoTestimonials />
      <ExclusivityBanner />
      <CTA />
    </main>
  )
}
