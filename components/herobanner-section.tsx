import { animate, motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
}

export default function HeroBannerSection() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="relative h-[25vh] md:h-[90vh] w-full overflow-hidden"
        >
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    className="w-full h-full object-contain"
                    src="/home/banner-homepage.png"
                    alt="banner"
                    fill
                />
            </div>
        </motion.section>
    )
}