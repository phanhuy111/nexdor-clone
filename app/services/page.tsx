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
      <div className="h-full bg-white">
        <div className="flex flex-col gap-10">
          <div className="container w-full h-auto">
            <Image
              src="/banner1.jpg"
              alt={t('services.solutionImageAlt')}
              width={540}
              height={502}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          <div className="flex justify-center gap-6">
            {serviceCategories.map((category, index) => (
              <div key={index} className="w-[400px] rounded-lg border border-gray-200 p-6">

                <h3 className="font-bold text-lg mb-3 text-center text-white bg-gradient-to-r from-[#33ccff] to-[#00aae3] p-2 rounded-lg">
                  {category.title}
                </h3>
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
            <div className="container">
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

