'use client'

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

const services = [
    {
        id: 1,
        title: "Tư vấn thương hiệu",
        description: "Tổng đài Asterisk hỗ trợ hầu như tất cả các giao thức VOIP có trên thị trường từ SIP, H323, MGCP (của Cisco) Unistim của Nortel... thậm chí cả WebRTC (hiện nay TAS đã xây dựng thành công",
        icon: "https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/book.png"
    },
    {
        id: 2,
        title: "Xây dựng và phát triển thương hiệu",
        description: "Là nơi các nhân viên trực điện thoại ngồi bên máy tính để gọi điện hoặc trả lời cuộc gọi của khách một cách thuận lợi và nhanh chóng, tối ưu hoàn toàn hiệu quả công việc",
        icon: "https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/book.png"
    },
    {
        id: 3,
        title: "Thiết kế thương hiệu",
        description: "SMS Brandname quảng cáo là Dịch vụ SMS quảng cáo bằng tin nhắn cho phép doanh nghiệp quảng bá sản phẩm, dịch vụ của mình đến khách hàng thông qua thuê bao di động của khách hàng.",
        icon: "https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/book.png"
    },
    {
        id: 4,
        title: "Dịch vụ E-commerce",
        description: "Triển khai cuộc gọi tự động cho một số người dùng bên ngoài dựa vào một số đặc tính định nghĩa trước hoặc theo phương pháp AI để lọc được những khách hàng tiềm năng thông qua thời...",
        icon: "https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/book.png"
    },
    {
        id: 5,
        title: "Dịch vụ Q-Commerce",
        description: "Triển khai cuộc gọi tự động cho một số người dùng bên ngoài dựa vào một số đặc tính định nghĩa trước hoặc theo phương pháp AI để lọc được những khách hàng tiềm năng thông qua thời...",
        icon: "https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/book.png"
    },
    {
        id: 6,
        title: "Dịch vụ Social Commerce",
        description: "Triển khai cuộc gọi tự động cho một số người dùng bên ngoài dựa vào một số đặc tính định nghĩa trước hoặc theo phương pháp AI để lọc được những khách hàng tiềm năng thông qua thời...",
        icon: "https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/book.png"
    }
]

export default function ServicesSlider() {
    const { t } = useTranslation()

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 flex flex-col gap-10">
                <h2 className="text-center text-xl md:text-xl font-bold text-gray-800 leading-relaxed md:leading-normal">
                    Với
                    <strong className="text-red-600"> bộ giải pháp của Nexdor Solutions</strong> sẽ giúp hoàn thiện hoạt động chuyển đổi số cho doanh nghiệp phát triển thành
                    <strong className="text-orange-600"> doanh nghiệp số</strong>,
                    <br className="hidden md:block" /> cho phép
                    <strong className="text-red-600"> tự động hoá quy trình</strong> kinh doanh đa kênh để bứt phá doanh số
                </h2>

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
                                <Card className="relative h-[400px] p-5 group cursor-pointer hover:shadow-lg transition-shadow duration-300">
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
                                        <div className="p-6">
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