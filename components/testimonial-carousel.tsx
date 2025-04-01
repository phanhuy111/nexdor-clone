"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface Testimonial {
  id: number
  name: string
  company: string
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khách hàng",
    company: "Sạp Lê La",
    content:
      "Sạp Lê La là một thương hiệu mới hoàn toàn, nên giai đoạn đầu chúng tôi gặp không ít thách thức trong việc xây dựng hình ảnh và vận hành gian hàng trên các sàn TMĐT. Nexdor giúp chúng tôi tối ưu từ A-Z: thiết lập gian hàng, tạo nội dung, lên chiến lược giá và khuyến mãi hợp lý và cả chạy quảng cáo hiệu quả. Nhờ đó, Sạp Lê La đã có những đơn hàng đầu tiên một cách nhanh chóng. Điều tôi ấn tượng nhất là sự tận tâm và am hiểu thị trường của đội ngũ Nexdor, luôn đưa ra giải pháp phù hợp để tối ưu cả thời gian lẫn chi phí.",
    image: "/brands/saplela.png",
  },
  {
    id: 2,
    name: "Nguyễn A",
    company: "Đậu Má Mix",
    content:
      "Trước đây, Đậu Má Mix có gian hàng trên các nền tảng giao đồ ăn nhưng chưa tối ưu, hiệu suất chưa cao. Hợp tác với Nexdor Solution đã giúp các cửa hàng cải thiện từ hình ảnh, nội dung đến chiến lược giá, giúp gian hàng vận hành trơn tru hơn. Đơn hàng tăng trưởng rõ rệt sau khi hợp tác, xếp hạng gian hàng cũng cao hơn trên ShopeeFood, GrabFood. Nhờ đội ngũ Nexdor, việc kinh doanh của chúng tôi tiết kiệm được rất nhiều thời gian mà vẫn đạt hiệu quả tốt nhất.",
    image: "/brands/dau-ma-mix.png",
  },
  {
    id: 3,
    name: "Trần B",
    company: "Cơm tấm Ba Lộc",
    content:
      "Từ một quán cơm tấm nhỏ chỉ bán mang đi, Cơm tấm Ba Lộc nay đã có gần 10 hubs và sắp mở quán ăn tại chỗ. Nhờ NexDor, thương hiệu được xây dựng bài bản từ logo, nhân vật chú Ba Lộc đến fanpage chỉn chu, giúp Ba Lộc tiếp cận khách hàng tốt hơn. Không dừng lại ở đó, NexDor còn đưa Ba Lộc lên ShopeeFood, GrabFood, beFood và được nhiều TikToker ủng hộ. Nhờ vậy, thương hiệu Cơm tấm Ba Lộc cũng như hương vị của cơm tấm Long Xuyên ngày càng đến gần hơn với bà con!",
    image: "/brands/com-tam-phuc-loc-tho.png",
  },
  {
    id: 4,
    name: "Trần B",
    company: "Gà Nướng Ò Ó O",
    content:
      "Gà Nướng Ò Ó O là thương hiệu có hệ thống cửa hàng rộng khắp, nhưng việc tối ưu gian hàng online vẫn còn nhiều hạn chế. Nhờ NexDor, chúng tôi đã cải thiện đáng kể từ hình ảnh, nội dung đến chiến lược giá và khuyến mãi trên các nền tảng giao đồ ăn. Không chỉ giúp gian hàng vận hành hiệu quả hơn, NexDor còn đẩy mạnh truyền thông, giúp thương hiệu tiếp cận nhiều khách hàng mới. Điều chúng tôi ấn tượng nhất là sự chuyên nghiệp và tận tâm của đội ngũ NexDor – luôn đồng hành và đưa ra giải pháp tối ưu nhất để gia tăng doanh số bền vững.",
    image: "/brands/ganuong.png",
  },
  {
    id: 5,
    name: "Trần B",
    company: "Lucky Pao",
    content:
      "Khi Lucky Pao bắt đầu kinh doanh online, chúng tôi gặp nhiều khó khăn trong việc thu hút khách hàng và vận hành gian hàng hiệu quả. NexDor đã giúp tối ưu mọi mặt – từ xây dựng thương hiệu, cải thiện hình ảnh đến chạy chiến dịch marketing bài bản. Nhờ đó, không chỉ doanh số tăng trưởng mà Lucky Pao còn được nhiều khách hàng biết đến hơn. Chúng tôi thực sự ấn tượng với sự tận tâm và chuyên nghiệp của NexDor trong từng giải pháp đưa ra.",
    image: "/brands/luckypao.png",
  },
]

export default function TestimonialCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-4 h-full">
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-6 h-full">
                <Image
                  src={testimonial.image}
                  alt={testimonial.company}
                  width={100}
                  height={100}
                  className="w-[100px] h-[100px] object-contain rounded-full mb-4"
                />
                <p className="text-sm text-center mb-4">{testimonial.content}</p>
                <p className="text-sm text-gray-500 text-center">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <div className="hidden md:flex justify-center mt-4">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <CarouselNext className="static translate-y-0 ml-2" />
        </div>
      </div>
    </Carousel>
  )
}

