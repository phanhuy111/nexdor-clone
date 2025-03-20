'use client';

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "../../components/footer"
import StatsSection from "@/components/stats-section"
import { useTranslation } from 'react-i18next'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      <main className="py-10">
        <section className="container mx-auto px-4 mb-16">
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

        {/* Our Mission Section */}
        <section className="container mx-auto px-4 mb-16 mt-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={t('aboutUs.teamImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.coreValues.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.coreValues.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={t('aboutUs.visionImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.vision.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.vision.description')}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt={t('aboutUs.missionImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.mission.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.mission.description')}
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

