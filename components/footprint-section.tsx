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

    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const end = value;
            const duration = 2; // Duration in seconds
            const stepTime = Math.abs(Math.floor(duration * 1000 / end)) / 10;
            const timer = setInterval(() => {
                start += 1;
                setDisplayValue(start);
                if (start === end || start > end) clearInterval(timer);
            }, stepTime);
            return () => clearInterval(timer);
        }
    }, [isVisible, value]);

    return displayValue;
};

const MetricCard = ({ value, label, isVisible }: { value: number; label: string; isVisible: boolean }) => {
    const displayValue = AnimatedNumber({ value, isVisible });

    return (
        <div className="bg-sky-300 p-6 flex flex-col items-center justify-center border-r border-white">
            <div className="text-5xl font-bold text-white">
                {displayValue}<span className="text-4xl">+</span>
            </div>
            <div className="text-xl text-white font-semibold text-center">{label}</div>
        </div>
    );
};

const CategoryCard = ({ value, label, isVisible }: { value: number; label: string; isVisible: boolean }) => {
    const displayValue = AnimatedNumber({ value, isVisible });

    return (
        <div className="bg-sky-300 rounded-3xl p-4 flex flex-col items-center">
            <div className="text-3xl font-bold text-sky-800">
                {displayValue}<span className="text-2xl">+</span>
            </div>
            <div className="text-base text-sky-950 font-semibold text-center">{label}</div>
        </div>
    );
};

const BulletPoint = ({ value, label, description, isVisible }: { value: number; label: string; description?: string; isVisible: boolean }) => {
    const displayValue = AnimatedNumber({ value, isVisible });

    return (
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center border-4 border-sky-200"></div>
            <div className="flex items-baseline">
                <span className="text-3xl font-bold text-sky-800">
                    {displayValue}<span className="text-2xl">+</span>
                </span>
                <span className="text-2xl text-sky-500 ml-2">{label}</span>
            </div>
            {description && <span className="text-2xl text-sky-500 ml-2">{description}</span>}
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
                    <MetricCard value={10} label="Customer data" isVisible={inView} />
                </motion.div>

                {/* Middle section - categories */}
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={fadeIn}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="grid grid-cols-3 gap-4 mb-8"
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
                    <BulletPoint value={200} label="ProjectComunication" isVisible={inView} />
                    <BulletPoint value={100000} label="Influencers/KOLs-KOCs" isVisible={inView} />
                    <BulletPoint value={60} label="Clients" description="Distribution network across" isVisible={inView} />
                    <BulletPoint value={53} label="Provinces nationwide" isVisible={inView} />
                </motion.div>
            </div>
        </motion.section>
    )
} 