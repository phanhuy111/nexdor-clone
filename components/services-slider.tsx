'use client'

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "react-i18next"


export default function ServicesSlider() {
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            title: t("services.brandConsulting"),
            description: t("services.brandConsultingDescription"),
            icon: "/services/tư vấn thương hiệu nd.png"
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
            icon: "/services/social com.png"
        }
    ]

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 flex flex-col gap-10">
                <div className="w-full flex justify-center">
                    <h2 className="w-[70%] text-center text-xl md:text-xl font-bold text-gray-800 leading-relaxed md:leading-normal">
                        {t('services.sliderHeading.part1')}{" "}
                        <strong className="text-[#33ccff]">{t('services.sliderHeading.part2')}</strong> {t('services.sliderHeading.part3')}{" "}
                        <strong className="text-[#33ccff]">{t('services.sliderHeading.part4')}</strong>,
                        <br className="hidden md:block" /> {t('services.sliderHeading.part5')}{" "}
                        <strong className="text-[#33ccff]">{t('services.sliderHeading.part6')}</strong> {t('services.sliderHeading.part7')}
                    </h2>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-7xl mx-auto"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {services.map((service) => (
                            <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="relative h-[515px] p-5 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-0">
                                        <div className="bg-white rounded-full flex items-center justify-center">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={200}
                                                height={200}
                                                className="w-[200px] h-[200px] object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                            <p className="text-gray-600 text-sm">{service.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:flex justify-center mt-8 gap-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    )
} 