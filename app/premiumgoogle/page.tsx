import { Header } from "@/components/pagamentos-header"
import { PricingSection } from "@/components/premiumgoogle"
import { Footer } from "@/components/footer"

export const dynamic = "force-dynamic";

export default function PagamentosPage() {
  return (
    <main className="min-h-screen bg-background relative">

      <div className="relative z-10">
        <Header />
        <PricingSection />
        <Footer />
      </div>
    </main>
  )
}