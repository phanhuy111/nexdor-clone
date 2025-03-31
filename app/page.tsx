'use client'

import Header from "@/components/header"
import Footer from "../components/footer"
import ServicesSlider from "@/components/services-slider"
import ContactForm from "@/components/contact-form"
import StatsSection from "@/components/stats-section"
import PartnerSection from "@/components/partner-section"
import NexdorSolutions from "@/components/solution-section"
import FootprintSection from "@/components/footprint-section"
import AboutUsSection from "@/components/aboutus-section"
import IntroductionSection from "@/components/introduce-section"
import HeroBannerSection from "@/components/herobanner-section"


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="overflow-hidden flex flex-col gap-20">
        <HeroBannerSection />

        <IntroductionSection />

        <StatsSection />

        <ServicesSlider />

        <AboutUsSection />

        <PartnerSection />

        <NexdorSolutions />

        <FootprintSection />

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

