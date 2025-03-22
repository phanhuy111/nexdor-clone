import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getFirstImgSrcWithDOMParser, ENDPOINT_URL } from "@/lib/utils";

async function getPosts(categoryId?: number) {
  let url = `${ENDPOINT_URL}/wp-json/wp/v2/posts?_embed`;
  if (categoryId) {
    url += `&categories=${categoryId}`;
  }
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
          src="/banner-blog.png"
          alt="Blog Banner"
          width={1200}
          height={400}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {posts.map((post: any) => {
                    return (
                      <div key={post.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={getFirstImgSrcWithDOMParser(post.content.rendered) || "/placeholder.svg?height=200&width=300"}
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
                            {new Date(post.date).toLocaleDateString()} • Nexdor
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}