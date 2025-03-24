'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/header'; // Giả định bạn có component Header   
import { useTranslation } from 'react-i18next';
import { use, useEffect, useState } from 'react';
import { ENDPOINT_URL } from '@/lib/utils';
// Dữ liệu dịch vụ đầy đủ
const allServices = [
    {
        category: "Dịch vụ thương hiệu",
        services: [
            {
                title: "Tư vấn thương hiệu",
                slug: "brand-consulting",
                description: "Giúp doanh nghiệp xây dựng và phát triển thương hiệu mạnh mẽ, định hướng thương hiệu và hệ thống hóa nhận diện thương hiệu để mở rộng quy mô và nâng tầm vị thế.",
                features: [
                    "Phân tích thị trường và đối thủ cạnh tranh",
                    "Định vị thương hiệu",
                    "Chiến lược phát triển thương hiệu",
                    "Đề xuất giải pháp marketing"
                ],
                benefits: [
                    "Tăng nhận diện thương hiệu",
                    "Tối ưu chi phí marketing",
                    "Tăng doanh thu bền vững",
                    "Xây dựng lòng trung thành khách hàng"
                ]
            },
            {
                title: "Xây dựng và phát triển thương hiệu",
                slug: "brand-development",
                description: "Hệ thống hóa và phát triển thương hiệu hiện có, tạo định hướng và thiết kế đồng bộ để tối ưu truyền thông.",
                features: [
                    "Hệ thống hóa (Brandbook/Brand Guideline)",
                    "Thiết kế dàn trang (Brochure, profiles, sale kits, leaflet)",
                    "Thiết kế template (social post, slide thuyết trình)",
                    "Xây dựng kế hoạch phát triển thương hiệu"
                ],
                benefits: [
                    "Tăng tính đồng bộ thương hiệu",
                    "Hỗ trợ truyền thông hiệu quả",
                    "Tối ưu hóa tài liệu marketing"
                ]
            },
            {
                title: "Thiết kế thương hiệu",
                slug: "brand-design",
                description: "Mang đến sự đồng bộ, nhất quán và khác biệt trong bộ nhận diện thương hiệu.",
                features: [
                    "Đặt tên thương hiệu",
                    "Thiết kế logo",
                    "Định hướng mỹ thuật",
                    "Xây dựng bộ nhận diện thương hiệu"
                ],
                benefits: [
                    "Tạo dấu ấn thương hiệu độc đáo",
                    "Tăng tính chuyên nghiệp",
                    "Hỗ trợ nhận diện thương hiệu mạnh mẽ"
                ]
            },
            {
                title: "Digital Performance",
                slug: "digital-performance",
                description: "Tối ưu hiệu suất kinh doanh qua chiến dịch kỹ thuật số với chiến lược data-driven và quảng cáo đa kênh.",
                features: [
                    "Quảng cáo Google Ads, Facebook Ads, TikTok Ads",
                    "Phân tích dữ liệu tiên tiến",
                    "Tăng tỷ lệ chuyển đổi và ROI vượt trội"
                ],
                benefits: [
                    "Tăng hiệu quả quảng cáo",
                    "Tối ưu chi phí kỹ thuật số",
                    "Gia tăng doanh thu bền vững"
                ]
            }
        ]
    },
    {
        category: "Thương mại đa kênh",
        services: [
            {
                title: "Dịch vụ E-commerce",
                slug: "e-commerce",
                description: "Cung cấp giải pháp toàn diện cho bán hàng online, từ thiết kế website đến quản lý gian hàng và quảng cáo trên các sàn TMĐT.",
                features: [
                    "Thiết kế website E-commerce tối ưu",
                    "Tối ưu quảng cáo trên Shopee, Lazada, TikTok Shop",
                    "Thiết lập và quản lý gian hàng chuyên nghiệp"
                ],
                benefits: [
                    "Tăng trải nghiệm khách hàng",
                    "Gia tăng doanh số online",
                    "Mở rộng thị trường hiệu quả"
                ]
            },
            {
                title: "Dịch vụ Q-Commerce",
                slug: "q-commerce",
                description: "Hỗ trợ bán hàng nhanh trên các nền tảng như GrabFood, ShopeeFood với quảng cáo và quản lý gian hàng tối ưu.",
                features: [
                    "Quảng cáo Q-commerce hiệu quả",
                    "Thiết lập gian hàng ấn tượng",
                    "Quản lý đơn hàng và SEO sản phẩm"
                ],
                benefits: [
                    "Tăng doanh số nhanh chóng",
                    "Tiếp cận khách hàng hiệu quả",
                    "Tối ưu vận hành sàn Q-commerce"
                ]
            },
            {
                title: "Social Commerce",
                slug: "social-commerce",
                description: "Tận dụng mạng xã hội (Facebook, Instagram, TikTok, Zalo) để tiếp cận khách hàng và tăng doanh số với chiến lược nội dung sáng tạo và quảng cáo tối ưu.",
                features: [
                    "Chiến lược nội dung sáng tạo",
                    "Quảng cáo tối ưu trên mạng xã hội",
                    "Quản lý kênh bán hàng trực tiếp"
                ],
                benefits: [
                    "Tăng tương tác khách hàng",
                    "Gia tăng doanh số bán hàng",
                    "Xây dựng mối quan hệ bền chặt với khách hàng"
                ]
            }
        ]
    }
];

// Hàm tìm dịch vụ theo slug
const findServiceBySlug = (slug: string) => {
    for (const category of allServices) {
        const service = category.services.find(s => s.slug === slug);
        if (service) {
            return { ...service, category: category.category };
        }
    }
    return null;
};

// Function to fetch related posts
async function getRelatedPosts({ categoryId, slug }: { categoryId: number; slug: string }) {
    const res = await fetch(`${ENDPOINT_URL}/wp-json/wp/v2/posts?categories=${categoryId}&slug=${slug}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch related posts");
    }

    return res.json();
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const { t } = useTranslation();
    const unwrappedParams = use(params as any);
    const serviceSlug = (unwrappedParams as any)?.slug;

    const service = findServiceBySlug(serviceSlug);

    if (!service) {
        notFound();
    }

    const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRelatedPosts = async () => {
            try {
                const posts = await getRelatedPosts({ categoryId: 6, slug: serviceSlug });
                setRelatedPosts(posts);
            } catch (error) {
                console.error("Error fetching related posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedPosts();
    }, [serviceSlug]);

    return (
        <>
            <Header />
            <div className="min-h-screen bg-white py-12">
                <div className="container mx-auto px-4">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <div className="flex items-center text-sm text-gray-600">
                            <Link href="/services" className="hover:text-red-600">{t('services.breadcrumb.services')}</Link>
                            <span className="mx-2">/</span>
                            <span>{service.category}</span>
                            <span className="mx-2">/</span>
                            <span className="text-red-600">{service.title}</span>
                        </div>
                    </div>

                    {/* Service Header */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                        <p className="text-gray-600 text-lg">{service.description}</p>
                    </div>

                    {/* Features and Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Features */}
                        {service.features && (
                            <div className="rounded-lg border border-gray-200 p-6">
                                <h2 className="text-2xl font-bold mb-6">{t('services.features.title')}</h2>
                                <ul className="space-y-4">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Benefits */}
                        {service.benefits && (
                            <div className="rounded-lg border border-gray-200 p-6">
                                <h2 className="text-2xl font-bold mb-6">{t('services.benefits.title')}</h2>
                                <ul className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></div>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Related Posts Section */}
                    {loading ? (
                        <></>
                    ) : (
                        <div className="py-8 mt-8 flex justify-center">
                            <div className="w-full md:w-[80%] max-w-5xl bg-white rounded-xl shadow-2xl p-8 md:p-10 border-t-4 border-indigo-500 transition-all duration-300 hover:shadow-3xl">
                                <div
                                    className="prose prose-lg prose-indigo max-w-none leading-loose tracking-wide text-gray-800"
                                    dangerouslySetInnerHTML={{ __html: relatedPosts[0].content.rendered }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}