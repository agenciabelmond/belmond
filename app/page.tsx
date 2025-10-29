import { Hero } from "@/components/hero"
import { PowerClinicMethod } from "@/components/power-clinic-method"
import { Services } from "@/components/services"
import { TrainingSection } from "@/components/training-section"
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
      <PowerClinicMethod />
      <Services />
      <TrainingSection />
      <Results />
      <VideoTestimonials />
      <ExclusivityBanner />
      <CTA />
    </main>
  )
}
