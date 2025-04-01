'use client'

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const fadeIn = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
};

// Reusable component for animated number display
const AnimatedNumber = ({ value, isVisible }: { value: number; isVisible: boolean }) => {
    const [displayValue, setDisplayValue] = useState(0);
    return displayValue;
};

const MetricCard = ({ value, label, isVisible }: { value: number | string; label: string; isVisible: boolean }) => {

    return (
        <div className="bg-sky-300 p-6 flex flex-col items-center justify-center border-r border-white">
            <div className="font-bold text-white text-xl md:text-5xl">
                {value}<span className="text-4xl md:text-4xl">+</span>
            </div>
            <div className="text-white font-semibold text-center text-sm md:text-xl">{label}</div>
        </div>
    );
};

const CategoryCard = ({ value, label, isVisible }: { value: number; label: string; isVisible: boolean }) => {

    return (
        <div className="bg-sky-300 rounded-3xl p-4 flex flex-col items-center">
            <div className="font-bold text-sky-800 text-lg md:text-3xl">
                {value}<span className="text-2xl md:text-2xl">+</span>
            </div>
            <div className="text-sky-950 font-semibold text-center text-sm md:text-base">{label}</div>
        </div>
    );
};

const BulletPoint = ({ value, label, description, heading }: { value: number; label: string; description?: string; heading?: string }) => {
    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center border-4 border-sky-200"></div>
            <div className="flex flex-col">
                {heading && <span className="text-sky-500 text-sm md:text-2xl">{heading}</span>}
                <div className="flex items-center">
                    <span className="font-bold text-sky-800 text-lg md:text-3xl">
                        {value}<span className="text-2xl md:text-2xl">+</span>
                    </span>
                    <span className="text-sky-500 ml-2 text-sm md:text-2xl">{label}</span>
                    {description && <span className="text-sky-500 ml-2 text-sm md:text-2xl">{description}</span>}
                </div>
            </div>
        </div>
    );
};

export default function FootprintSection() {
    const { t } = useTranslation();
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="container mx-auto grid md:grid-cols-2 gap-4 px-4 md:mt-32 mt-12"
        >
            <motion.div className="flex justify-center" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image src="/home/banner-side.png" alt={t('home.nexdor.imageAlt')} className="w-full h-auto" width={1000} height={500} />
            </motion.div>

            <div ref={ref} className="max-w-4xl mx-auto p-6 font-sans">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    transition={{ duration: 1.2 }}
                    className="grid grid-cols-2 rounded-full overflow-hidden mb-6"
                >
                    <MetricCard value={100} label="F&B Project" isVisible={inView} />
                    <MetricCard value={"10M"} label="Customer data" isVisible={inView} />
                </motion.div>

                {/* Middle section - categories */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                >
                    <CategoryCard value={200} label="Channel Commerce" isVisible={inView} />
                    <CategoryCard value={90000} label="Partners" isVisible={inView} />
                    <CategoryCard value={1000} label="Coffee shops" isVisible={inView} />
                    <CategoryCard value={2000} label="Restaurants" isVisible={inView} />
                    <CategoryCard value={1000} label="Sellers" isVisible={inView} />
                </motion.div>

                {/* Bottom section - bullet points */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    transition={{ duration: 1.8, delay: 0.4 }}
                    className="space-y-6"
                >
                    <BulletPoint value={200} label="Project Comunication" isVisible={inView} />
                    <BulletPoint value={100000} label="Influencers/KOLs-KOCs" isVisible={inView} />
                    <BulletPoint value={60} label="Clients" isVisible={inView} />
                    <BulletPoint value={53} label="Provinces nationwide" heading={"Distribution network across"} isVisible={inView} />
                </motion.div>
            </div>
        </motion.section>
    )
} 