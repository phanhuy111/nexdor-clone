'use client'

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react';

// Function to fetch blog post by slug
async function getBlogPost(slug: string) {
  const res = await fetch(`https://nexdor.tech/wp-json/wp/v2/posts?slug=${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog post");
  }

  return res.json();
}

export default function ServicesPage() {
  const { t } = useTranslation();
  const [blogPost, setBlogPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const blogSlug = "services"; // Replace with the actual slug you want to fetch

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const post = await getBlogPost(blogSlug);
        if (post && post.length > 0) {
          setBlogPost(post[0]);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [blogSlug]);

  const serviceCategories = [
    {
      title: t('services.categories.branding.title'),
      icon: "/placeholder.svg?height=24&width=24",
      services: [
        { name: t('services.categories.branding.items.consulting'), slug: "brand-consulting" },
        { name: t('services.categories.branding.items.development'), slug: "brand-development" },
        { name: t('services.categories.branding.items.design'), slug: "brand-design" },
        { name: t('services.categories.branding.items.performance'), slug: "digital-performance" }
      ]
    },
    {
      title: t('services.categories.commerce.title'),
      icon: "/placeholder.svg?height=24&width=24",
      services: [
        { name: t('services.categories.commerce.items.ecommerce'), slug: "e-commerce" },
        { name: t('services.categories.commerce.items.qcommerce'), slug: "q-commerce" },
        { name: t('services.categories.commerce.items.social'), slug: "social-commerce" }
      ]
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-[600px] bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Image Column (Left) */}
              <div className="w-full md:w-1/2 lg:w-5/12">
                <div className="w-full h-auto">
                  <Image
                    src="https://chuyendoiso2.maugiaodien.com/wp-content/uploads/2023/05/giai-phap.png"
                    alt={t('services.solutionImageAlt')}
                    width={540}
                    height={502}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Content Column (Right) */}
              <div className="w-full md:w-1/2 lg:w-7/12">
                <div className="space-y-4">
                  <p className="text-red-600 font-semibold">{t('services.solutionTitle')}</p>
                  <div className="h-4"></div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                    <span>{t('services.leadSolution.part1')}</span>
                    <span>{t('services.leadSolution.part2')}<br /></span>
                    <span>{t('services.leadSolution.part3')}</span>
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('services.leadSolution.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="w-[400px] rounded-lg border border-gray-200 p-6">
                <div className="w-12 h-12 bg-[#33ccff] rounded-lg flex items-center justify-center mb-4">
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="font-bold text-lg mb-3">{category.title}</h3>
                <ul className="space-y-2 text-sm">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center cursor-pointer hover:text-red-600 transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#33ccff] rounded-full mr-2"></div>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Blog Detail Section */}
          {loading ? (
            <p>Loading blog post...</p>
          ) : blogPost ? (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{blogPost.title.rendered}</h2>
              <div className="mt-4" dangerouslySetInnerHTML={{ __html: blogPost.content.rendered }} />
            </div>
          ) : (
            <p>No blog post found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

