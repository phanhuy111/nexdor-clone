import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Fetch single post data
async function getPost(slug: string) {
    const res = await fetch(`https://nexdor.tech/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    const posts = await res.json();
    return posts[0];
}

// Fetch related posts
async function getRelatedPosts() {
    const res = await fetch("https://nexdor.tech/wp-json/wp/v2/posts?per_page=3&_embed", {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch related posts");
    }

    return res.json();
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    const relatedPosts = await getRelatedPosts();

    return (
        <div className="min-h-screen bg-white text-black">

            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg?height=400&width=1200"}
                    alt={post.title.rendered}
                    width={1200}
                    height={400}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p className="text-lg">
                            {new Date(post.date).toLocaleDateString()} • Nexdor
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Content */}
                        <div className="lg:w-3/4">
                            <article className="prose max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                            </article>

                            {/* Share Buttons */}
                            <div className="mt-8 border-t border-b py-6">
                                <h3 className="text-lg font-bold mb-4">Chia sẻ bài viết</h3>
                                <div className="flex gap-4">
                                    <button className="p-2 rounded-full bg-blue-600 text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-blue-400 text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                        </svg>
                                    </button>
                                    <button className="p-2 rounded-full bg-green-600 text-white">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/4">
                            {/* Categories */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4">Danh mục</h3>
                                <div className="border rounded-lg p-4">
                                    <Link
                                        href="/blog/category/all"
                                        className="block py-2 px-4 bg-gray-100 rounded-md mb-2 hover:bg-red-100 transition-colors"
                                    >
                                        Tất cả
                                    </Link>
                                    <Link
                                        href="/blog/category/social-commerce"
                                        className="block py-2 px-4 rounded-md mb-2 hover:bg-red-100 transition-colors"
                                    >
                                        Social Commerce
                                    </Link>
                                    <Link
                                        href="/blog/category/digital-marketing"
                                        className="block py-2 px-4 rounded-md mb-2 hover:bg-red-100 transition-colors"
                                    >
                                        Digital Marketing
                                    </Link>
                                    <Link
                                        href="/blog/category/tiktok"
                                        className="block py-2 px-4 rounded-md mb-2 hover:bg-red-100 transition-colors"
                                    >
                                        TikTok
                                    </Link>
                                </div>
                            </div>

                            {/* Related Posts */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Bài viết liên quan</h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((relatedPost: any) => (
                                        <div key={relatedPost.id} className="flex gap-3 group">
                                            <Image
                                                src={relatedPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg?height=60&width=80"}
                                                alt={relatedPost.title.rendered}
                                                width={80}
                                                height={60}
                                                className="w-20 h-16 object-cover rounded"
                                            />
                                            <div>
                                                <Link
                                                    href={`/blog/${relatedPost.slug}`}
                                                    className="text-sm font-medium group-hover:text-red-600 transition-colors"
                                                    dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                                                />
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {new Date(relatedPost.date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
} 