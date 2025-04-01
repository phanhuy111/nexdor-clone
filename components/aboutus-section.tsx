import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import Link from "next/link"


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

const AboutContent = () => {
    const { t } = useTranslation()

    return (
        <motion.div
            variants={slideUp}
            className="w-full md:w-1/3 mb-8 md:mb-0"
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
                <Link href="/solution">
                    {t('home.nexdor.cta')}
                </Link>
            </motion.button>
        </motion.div>
    )
}

const AboutImage = () => {
    const { t } = useTranslation()

    return (
        <motion.div
            variants={slideUp}
            className="w-full md:w-2/3"
        >
            <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                src="/home/us.png"
                alt={t('home.nexdor.imageAlt')}
                className="w-full h-auto"
            />
        </motion.div>
    )
}

export default function AboutUsSection() {
    const { t } = useTranslation()

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerChildren}
            className="bg-white"
        >
            <div className="container mx-auto px-4">
                <motion.h2 variants={slideUp} className="text-2xl font-bold text-center text-[#33ccff]">{t('home.aboutUs')}</motion.h2>

                <div className="flex flex-col md:gap-10 gap-2 md:flex-row items-center">
                    <AboutContent />
                    <AboutImage />
                </div>
            </div>
        </motion.section>
    )
}
