import { Hero } from "@/components/hero"
import App from "@/components/power"
import { FaqSection } from "@/components/training-section"
import { Results } from "@/components/results"
import { VideoTestimonials } from "@/components/video-testimonials"
import { ExclusivityBanner } from "@/components/exclusivity-banner"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Testimonials } from "@/components/testimonials"
import { MethodologySection } from "@/components/powerclinic"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/*   <Header />*/}
      <Hero />
      <MethodologySection />
      <Results />
      <ExclusivityBanner />
      <Testimonials />
      <FaqSection />
      <CTA />
      <Footer/>



    </main>
  )
}

