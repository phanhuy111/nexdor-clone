'use client'

import Image from "next/image"
import Header from "@/components/header"
import Footer from "../components/footer"
import ServicesSlider from "@/components/services-slider"
import { useTranslation } from 'react-i18next'
import ContactForm from "@/components/contact-form"
import Link from "next/link"
import StatsSection from "@/components/stats-section"
import PartnerSection from "@/components/partner-section"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import NexdorSolutions from "@/components/solution-section"

export default function Home() {
  const { t } = useTranslation()

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative h-[25vh] md:h-screen w-full overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-fill"
              src="/home/banner-homepage.png"
              alt="banner"
              fill
            />
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          className="container mx-auto px-4 mb-16 mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">{t('aboutUs.title')}</h2>

          <div className="flex justify-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-2 border-[#33ccff] rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-center text-[#33ccff] font-bold mb-4">{t('aboutUs.companyName')}</h3>
              <div className="text-center">
                <p className="mb-2">
                  {t('aboutUs.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <StatsSection />

        <ServicesSlider />

        {/* About Us Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="py-12 bg-white"
        >
          <div className="container mx-auto px-4">
            <motion.h2 variants={slideUp} className="text-xl font-bold mb-8 text-center">{t('home.aboutUs')}</motion.h2>

            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                variants={slideUp}
                className="w-full md:w-1/2 mb-8 md:mb-0"
              >
                <h2 className="text-4xl font-bold text-[#33ccff] mb-4">{t('home.nexdor.title')}</h2>
                <p className="text-black mb-4">
                  {t('home.nexdor.description')}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 border border-[#33ccff] text-[#33ccff] rounded-full hover:bg-[#33ccff] hover:text-white transition duration-300"
                >
                  <Link href="/about-us">
                    {t('home.nexdor.cta')}
                  </Link>
                </motion.button>
              </motion.div>
              <motion.div
                variants={slideUp}
                className="w-full md:w-1/2"
              >
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  src="/home/us.png"
                  alt={t('home.nexdor.imageAlt')}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Clients Section */}
        <PartnerSection />

        <NexdorSolutions />

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="container mx-auto px-4 mb-16 mt-32"
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <Image src="/home/banner-1.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" width={1920} height={1080} />
          </motion.div>
        </motion.section>

        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

