'use client';

import Image from "next/image"
import Header from "@/components/header"
import Footer from "../../components/footer"
import StatsSection from "@/components/stats-section"
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"

export default function AboutUs() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <Header />

      <main className="pb-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative h-[25vh] md:h-screen w-full overflow-hidden mb-12"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              className="w-full h-full object-fill"
              src="/home/banner-logo.png"
              alt="banner"
              fill
            />
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren}
          className="py-10 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {/* Item 1: Planning & Goals */}
              <motion.div
                variants={slideUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => scrollToSection('core-values')}
                className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4 h-[200px] cursor-pointer hover:border-[#33ccff] transition-colors"
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/Market research & Localization.png" alt="Market research & Localization" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Market research & Localization
                </p>
              </motion.div>

              {/* Item 2: Brand Audit */}
              <motion.div
                variants={slideUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => scrollToSection('vision')}
                className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4 h-[200px] cursor-pointer hover:border-[#33ccff] transition-colors"
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/D2C Solution.png" alt="D2C Solution" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  D2C Solution
                </p>
              </motion.div>

              {/* Item 3: Market Research */}
              <motion.div
                variants={slideUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => scrollToSection('mission')}
                className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4 h-[200px] cursor-pointer hover:border-[#33ccff] transition-colors"
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/Branding & Marketing Solution.png" alt="Branding & Marketing Solution" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Branding & Marketing Solution
                </p>
              </motion.div>

              {/* Item 4: Strategic Planning */}
              <motion.div
                variants={slideUp}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => scrollToSection('distribution')}
                className="flex flex-col items-center text-center gap-4 border-2 border-gray-200 rounded-lg p-4 h-[200px] cursor-pointer hover:border-[#33ccff] transition-colors"
              >
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image src="/us/Distribution.png" alt="Distribution" width={120} height={120} />
                </div>
                <p className="text-sm font-semibold text-gray-800">
                  Distribution
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section
          id="core-values"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          className="container mx-auto px-4 mb-16 mt-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="md:w-1/2"
            >
              <Image
                src="/us/giá trị cốt lõi.png"
                alt={t('aboutUs.teamImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={slideUp}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.coreValues.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.coreValues.description')}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-600">In-depth Market Research</li>
                <li className="text-gray-600">Strategic Planning</li>
                <li className="text-gray-600">Brand Development</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Vision Section */}
        <motion.section
          id="vision"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          className="container mx-auto px-4 mb-16"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="md:w-1/2"
            >
              <Image
                src="/us/tầm nhìn chúng tôi.png"
                alt={t('aboutUs.visionImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={slideUp}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.vision.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.vision.description')}
              </p>
              <div className="space-y-4">
                <p className="font-semibold">Omni-commerce</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-600">Quick commerce</li>
                  <li className="text-gray-600">Ecommerce</li>
                  <li className="text-gray-600">Social commerce</li>
                  <li className="text-gray-600">Brand commerce</li>
                </ul>
                <p className="font-semibold">OmO Activation</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-600">Booth Activation</li>
                  <li className="text-gray-600">MoMo Activation</li>
                  <li className="text-gray-600">Web/ Zalo Activation</li>
                </ul>
                <p className="font-semibold">Technology solution</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Mission Section */}
        <motion.section
          id="mission"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          className="container mx-auto px-4 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="md:w-1/2"
            >
              <Image
                src="/us/sứ mệnh.png"
                alt={t('aboutUs.missionImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={slideUp}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.mission.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.mission.description')}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-600">Marketing Strategy</li>
                <li className="text-gray-600">Branding Communication</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Distribution Section */}
        <motion.section
          id="distribution"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideUp}
          className="container mx-auto px-4 mb-16"
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="md:w-1/2"
            >
              <Image
                src="/us/tầm nhìn chúng tôi.png"
                alt={t('aboutUs.visionImageAlt')}
                width={400}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={slideUp}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">{t('aboutUs.distribution.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('aboutUs.distribution.description')}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-600">GT (General Trade)</li>
                <li className="text-gray-600">MT (Supermarket, CVS, Mini mart,...)</li>
                <li className="text-gray-600">HORECA (Hotels, Restaurants, Cafés)</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

