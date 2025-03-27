'use client'

import Image from "next/image"
import Header from "@/components/header"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Footer from "../components/footer"
import ServicesSlider from "@/components/services-slider"
import NewsSection from "@/components/blog-section"
import { useTranslation } from 'react-i18next'
import ContactForm from "@/components/contact-form"
import Link from "next/link"
import StatsSection from "@/components/stats-section"
import PartnerSection from "@/components/partner-section"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Video Section */}
        <section className="relative h-[25vh] md:h-screen w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-fill"
              src="/home/banner-homepage.png"
              alt="banner"
              fill
            />
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16 mt-16">
          <h2 className="text-3xl font-bold text-center mb-10">{t('aboutUs.title')}</h2>

          <div className="flex justify-center">
            <div className="border-2 border-[#33ccff] rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-center text-[#33ccff] font-bold mb-4">{t('aboutUs.companyName')}</h3>
              <div className="text-center">
                <p className="mb-2">
                  {t('aboutUs.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <StatsSection />

        <ServicesSlider />

        {/* About Us Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-8 text-center">{t('home.aboutUs')}</h2>

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold text-[#33ccff] mb-4">{t('home.nexdor.title')}</h2>
                <p className="text-black mb-4">
                  {t('home.nexdor.description')}
                </p>
                <button className="px-6 py-2 border border-[#33ccff] text-[#33ccff] rounded-full hover:bg-[#33ccff] hover:text-white transition duration-300">
                  <Link href="/about-us">
                    {t('home.nexdor.cta')}
                  </Link>
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img src="/home/us.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <PartnerSection />

        <section className="container mx-auto px-4 mb-16 mt-16">
          <Image src="/home/banner.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" width={1920} height={1080} />
        </section>

        <section className="container mx-auto px-4 mb-16 mt-16">
          <Image src="/home/banner-1.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" width={1920} height={1080} />
        </section>

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

