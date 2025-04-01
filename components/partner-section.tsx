import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const partnerCategories = [
    {
        title: "Payment",
        images: [
            "/partner/Payment/payment-1.png",
            "/partner/Payment/payment-2.png",
            "/partner/Payment/payment-3.png",
            "/partner/Payment/payment-4.png",
            "/partner/Payment/payment-5.png",
            "/partner/Payment/payment-6.png",
            "/partner/Payment/payment-7.png",
            "/partner/Payment/payment-8.png",
            "/partner/Payment/payment-9.png",
            "/partner/Payment/payment-10.png",
            "/partner/Payment/payment-11.png",
        ],
    },
    {
        title: "Platform",
        images: [
            "/partner/Platform/platform-1.png",
            "/partner/Platform/platform-2.png",
            "/partner/Platform/platform-3.png",
            "/partner/Platform/platform-4.png",
            "/partner/Platform/platform-5.png",
            "/partner/Platform/platform-6.png",
            "/partner/Platform/platform-7.png",
            "/partner/Platform/platform-8.png",
            // "/partner/Platform/platform-9.png",
            "/partner/Platform/platform-10.png"
        ],
    },
    {
        title: "Loyalty",
        images: [
            "/partner/Loyalty/loyalty-1.png",
            "/partner/Loyalty/loyalty-2.png",
            "/partner/Loyalty/loyalty-3.png",
            "/partner/Loyalty/loyalty-4.png",
        ],
    },
    {
        title: "Communication",
        images: [
            "/partner/Communication/communication-1.png",
            "/partner/Communication/communication-2.png",
            "/partner/Communication/communication-3.png",
            "/partner/Communication/communication-4.png",
            "/partner/Communication/communication-5.png",
            "/partner/Communication/communication-6.png",
            "/partner/Communication/communication-7.png",
            "/partner/Communication/communication-8.png",
            "/partner/Communication/communication-9.png",
            "/partner/Communication/communication-10.png",
            "/partner/Communication/communication-11.png",
            "/partner/Communication/communication-12.png",
        ],
    },
    {
        title: "PR",
        images: [
            "/partner/PR/pr-1.png",
            "/partner/PR/pr-2.png",
            "/partner/PR/pr-3.png",
            "/partner/PR/pr-4.png",
            "/partner/PR/pr-5.png",
            "/partner/PR/pr-6.png",
        ],
    },
];

export default function PartnerSection() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-10 text-center text-[#33ccff]">{t('home.ourClients')}</h2>
                <div className="flex flex-col gap-6">
                    {partnerCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-md"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="bg-blue-100 py-3 px-6">
                                <h3 className="text-xl font-bold text-blue-900">{category.title}</h3>
                            </div>

                            <div className="bg-white p-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                                    {category.images.map((image, imgIndex) => (
                                        <motion.div
                                            key={imgIndex}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: imgIndex * 0.05 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center justify-center p-4"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${category.title} Partner ${imgIndex + 1}`}
                                                width={120}
                                                height={60}
                                                className="h-[80px] object-contain"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}