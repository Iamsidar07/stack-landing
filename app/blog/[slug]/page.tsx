import { allPosts } from "@/.contentlayer/generated";
import { Mdx } from "@/mdx-components";
import { notFound } from "next/navigation";
import { useMemo } from "react";
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = useMemo(
    () => allPosts.find((post) => post.slug === "/" + params.slug),
    [params.slug],
  );
  if (!post) notFound();
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6d28d9] to-[#8b5cf6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] wave-bg"></div>
      </div>

      <div className="max-w-3xl mx-auto w-full px-4 py-32 ">
        <h1 className="text-2xl md:text-5xl mt-12 font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 text-center">
          {post.title}
        </h1>
        <p className="opacity-60 mt-2 mb-6 text-lg text-center">
          {post.description}
        </p>
        <Mdx code={post?.body.code} />
      </div>
    </section>
  );
}
