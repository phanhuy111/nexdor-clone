'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getFirstImgSrcWithDOMParser } from "@/lib/utils";

export default function NewsSection() {
    const { t } = useTranslation();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        async function fetchPosts() {
            try {
                const res = await fetch("https://nexdor.tech/wp-json/wp/v2/posts?_embed&per_page=3&categories=5");
                if (!res.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await res.json();
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (!isMounted) {
        return <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="h-96"></div>
            </div>
        </section>;
    }

    if (isLoading) {
        return (
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                    </div>
                </div>
            </section>
        );
    }

    const formatDate = (dateString: string | number | Date) => {
        try {
            const date = new Date(dateString);
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        } catch (e) {
            return "";
        }
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Badge */}
                <div className="flex justify-center mb-4">
                    <h2 className="text-xl font-bold mb-6 text-center">{t('news.title', 'Tin tức')}</h2>
                </div>
                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.length === 0 ? (
                        <p className="text-center text-gray-500">{t('news.noArticles', 'Không có bài viết nào để hiển thị.')}</p>
                    ) : (
                        posts.map((post: any) => {
                            const imgSrc = getFirstImgSrcWithDOMParser(post.content.rendered) || "/placeholder.svg?height=200&width=300"
                            return (
                                <article
                                    key={post.id}
                                    className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                >
                                    {/* News Image */}
                                    <div className="w-full h-48">
                                        <Link href={`/blog/${post.slug}`}>
                                            <Image
                                                src={imgSrc}
                                                alt={post.title?.rendered || ""}
                                                width={400}
                                                height={200}
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                    </div>

                                    {/* News Content */}
                                    <div className="p-4 space-y-3">
                                        <h3 className="text-lg font-bold text-gray-900 hover:text-red-600 transition-colors">
                                            <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }} />
                                        </h3>

                                        {/* Meta Info */}
                                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                                            <span className="flex items-center">
                                                <i className="far fa-calendar mr-1"></i> {formatDate(post.date)}
                                            </span>
                                            <span className="flex items-center">
                                                <i className="far fa-eye mr-1"></i> {post.views || "0"} {t('news.views', 'lượt xem')}
                                            </span>
                                        </div>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 text-sm line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }} />

                                        {/* Learn More Button */}
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-block bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-orange-600 transition-colors"
                                        >
                                            {t('news.readMore', 'Tìm hiểu thêm')}
                                        </Link>
                                    </div>
                                </article>
                            )
                        })
                    )}
                </div>
            </div>
        </section>
    );
}