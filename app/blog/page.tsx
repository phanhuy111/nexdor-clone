import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "../../components/footer";

async function getPosts(categoryId?: number) {
  let url = "https://nexdor.tech/wp-json/wp/v2/posts?_embed";

  if (categoryId) {
    url += `&categories=${categoryId}`;
  }

  console.log('url', url)
  const res = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts(5);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[400px]">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Blog Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">BLOG</h1>
          <p className="text-lg md:text-xl">Kiến thức của Vibula về Social và Digital Marketing</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {posts.map((post: any) => {
                    console.log('post', post)
                    return (
                      <div key={post.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={post.featured_media ? post._embedded?.["wp:featuredmedia"]?.[0]?.source_url : "/placeholder.svg?height=200&width=300"}
                            alt={post.title.rendered}
                            width={300}
                            height={200}
                            className="w-full h-48 object-cover"
                          />
                        </Link>
                        <div className="p-4">
                          <Link href={`/blog/${post.slug}`} className="block">
                            <h2
                              className="text-lg font-bold mb-2 hover:text-red-600 transition-colors"
                              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />
                          </Link>
                          <p className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()} • Vibula
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold mb-6">Bài viết mới nhất</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.slice(0, 3).map((post: any) => (
                  <div key={post.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.featured_media ? post._embedded?.["wp:featuredmedia"]?.[0]?.source_url : "/placeholder.svg?height=200&width=300"}
                        alt={post.title.rendered}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-4">
                      <Link href={`/blog/${post.slug}`} className="block">
                        <h2
                          className="text-lg font-bold mb-2 hover:text-red-600 transition-colors"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </Link>
                      <p className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()} • Vibula
                      </p>
                    </div>
                  </div>
                ))}
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

              {/* Popular Posts */}
              <div>
                <h3 className="text-xl font-bold mb-4">Bài viết phổ biến</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post: any) => (
                    <div key={post.id} className="flex gap-3 group">
                      <Image
                        src={post.featured_media ? post._embedded?.["wp:featuredmedia"]?.[0]?.source_url : "/placeholder.svg?height=60&width=80"}
                        alt={post.title.rendered}
                        width={80}
                        height={60}
                        className="w-20 h-16 object-cover rounded"
                      />
                      <div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-medium group-hover:text-red-600 transition-colors"
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString()}
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

      {/* <Footer /> */}
    </div>
  );
}