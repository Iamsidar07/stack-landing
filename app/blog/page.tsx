import { allPosts } from "@/.contentlayer/generated";
import { Timeline } from "@/components/ui/timeline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stack Auth | Blogs",
};

export default function BlogsPage() {
  const data = allPosts.map((post) => ({
    title: new Date(post.published).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    content: (
      <div className="group">
        <Link href={`/blog${post.slug}`}>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700">
            {post.title}
          </h2>
          <p className="opacity-60 mt-2 text-sm">{post.description}</p>
          <Image
            src={post.image}
            alt={post.title}
            width={640}
            height={75}
            className="rounded-lg glass-shadow border border-t-0 border-zinc-900 mt-6 p-px object-contain"
          />
        </Link>
      </div>
    ),
  }));
  return (
    <section className="px-4 pt-12 md:pt-10 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-5xl mt-12 font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 text-center">
        Blogs & Updates
      </h1>
      <p className="opacity-60 mt-2 text-lg text-center">
        We prepared some interesting articles for you. Stay tuned for more
        updates!
      </p>
      <div className="border-b border-zinc-800 mt-12 max-w-5xl mx-auto" />
      <Timeline data={data} />
    </section>
  );
}
