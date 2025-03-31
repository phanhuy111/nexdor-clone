'use client'

import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ServicesSlider() {
    const { t } = useTranslation();
    const services = [
        {
            id: 1,
            title: t("services.brandConsulting"),
            description: t("services.brandConsultingDescription"),
            icon: "/services/tư vấn thương hiệu.png"
        },
        {
            id: 2,
            title: t("services.brandDevelopment"),
            description: t("services.brandDevelopmentDescription"),
            icon: "/services/xây dựng thương hiệu.png"
        },
        {
            id: 3,
            title: t("services.brandDesign"),
            description: t("services.brandDesignDescription"),
            icon: "/services/thiết kế thương hiệu.png"
        },
        {
            id: 4,
            title: t("services.eCommerce"),
            description: t("services.eCommerceDescription"),
            icon: "/services/ecom.png"
        },
        {
            id: 5,
            title: t("services.qCommerce"),
            description: t("services.qCommerceDescription"),
            icon: "/services/qcom.png"
        },
        {
            id: 6,
            title: t("services.socialCommerce"),
            description: t("services.socialCommerceDescription"),
            icon: "/services/social.png"
        }
    ]

    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-row items-center bg-white rounded-lg shadow-lg p-5 transition-shadow duration-300 hover:shadow-xl">
                            <div className="bg-gray-100 rounded-full p-6 mb-4 flex items-center justify-center">
                                <Image src={service.icon} alt={service.title} width={60} height={60} className="object-contain" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
                                <p className="text-gray-600 text-center text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 