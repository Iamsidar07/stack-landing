import { allPosts } from "@/.contentlayer/generated";
import { Mdx } from "@/mdx-components";
import { ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { useMemo } from "react";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
) {
  const post = allPosts.find((post) => post.slug === "/" + params.slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      images: [post?.image, ...previousImages],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = useMemo(
    () => allPosts.find((post) => post.slug === "/" + params.slug),
    [params.slug],
  );
  if (!post) notFound();
  return (
    <section>
      <div className="max-w-3xl mx-auto w-full px-6 pb-32 pt-12 md:pt-10">
        <h1 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support">
          {post.title}
        </h1>
        <time className="text-lg opacity-60 mt-6 mb-12 block">
          {new Date(post.published).toLocaleString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <Mdx code={post?.body.code} />
      </div>
    </section>
  );
}
