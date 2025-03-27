'use client';

import Image from "next/image"
import Header from "@/components/header"
import Footer from "../../components/footer"
import StatsSection from "@/components/stats-section"
import { useTranslation } from 'react-i18next'

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      <main className="pb-10">
        <section className="relative h-[25vh] md:h-screen w-full overflow-hidden mb-12">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-fill"
              src="/home/banner-logo.png"
              alt="banner"
              fill
            />
          </div>
        </section>

        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              {/* Item 1: Planning & Goals */}
              <div className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4">
                <div className="w-[100px] h-[100px] fle10items-center justify-center">
                  <Image src="/us/Branding & Marketing Solution.png" alt="Lập kế hoạch & Mục tiêu" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Lập kế hoạch & Mục tiêu
                </p>
              </div>

              {/* Item 2: Brand Audit */}
              <div className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/D2C Solution.png" alt="Lập kế hoạch & Mục tiêu" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Kiểm toán thương hiệu
                </p>
              </div>

              {/* Item 3: Market Research */}
              <div className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/Market research & Localization.png" alt="Lập kế hoạch & Mục tiêu" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Nghiên cứu thị trường
                </p>
              </div>

              {/* Item 4: Strategic Planning */}
              <div className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/Distribution.png" alt="Lập kế hoạch & Mục tiêu" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Tài quy hoạch chiến lược
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="container mx-auto px-4 mb-16 mt-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/us/giá trị cốt lõi.png"
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
                src="/us/tầm nhìn chúng tôi.png"
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
                src="/us/sứ mệnh.png"
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

        <section className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/us/tầm nhìn chúng tôi.png"
                alt={t('aboutUs.visionImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.distribution.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.distribution.description')}
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

