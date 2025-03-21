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
            <video
              className="w-full h-full object-contain md:object-cover"
              src="./video-banner.mp4"
              title="VIBULA 2024 ver2"
              autoPlay
              loop
              muted
              playsInline
              style={{
                pointerEvents: 'none',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </section>

        <ServicesSlider />

        {/* About Us Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-8 text-center">{t('home.aboutUs')}</h2>

            <div className="flex flex-col md:flex-row gap-20 items-center">
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
                <img src="/banner-us.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-8 text-center">{t('home.customerReviews')}</h2>
            <TestimonialCarousel />
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-6 text-center">{t('home.ourClients')}</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <Image
                src="/brands/com-tam-phuc-loc-tho.png"
                alt="L'OREAL"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/dau-ma-mix.png"
                alt="GARNIER"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/familao.png"
                alt="CUREL"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/ganuong.png"
                alt="BEAUTY BOX"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/lothamilk.png"
                alt="BIORÉ"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/luckypao.png"
                alt="SANOFI"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/nutrifood.png"
                alt="KAO"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/saplela.png"
                alt="MAYBELLINE"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
              <Image
                src="/brands/vui-coffee.png"
                alt="G.G.G"
                width={120}
                height={60}
                className="h-[180px] object-contain"
              />
            </div>
          </div>
        </section>

        <NewsSection />

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

