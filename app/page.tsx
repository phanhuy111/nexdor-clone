'use client'

import Image from "next/image"
import Header from "@/components/header"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Footer from "../components/footer"
import ServicesSlider from "@/components/services-slider"
import NewsSection from "@/components/blog-section"
import { useTranslation } from 'react-i18next'
import router from "next/router"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Video Section */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              className="w-full h-full scale-125"
              src="https://www.youtube.com/embed/1F3jfWlG3xA?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=1F3jfWlG3xA"
              title="VIBULA 2024 ver2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                pointerEvents: 'none',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '100%',
                minHeight: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </section>

        <ServicesSlider />

        {/* About Us Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-8 text-center">{t('home.aboutUs')}</h2>

            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold text-red-600 mb-4">{t('home.nexdor.title')}</h2>
                <p className="text-gray-700 mb-4">
                  {t('home.nexdor.description')}
                </p>
                <button onClick={() => router.push('/about')} className="px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
                  {t('home.nexdor.cta')}
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img src="https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/11.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" />
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

