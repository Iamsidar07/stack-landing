import { Metadata } from "next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

async function fetchChangelog() {
  try {
    const res = await fetch(
      "https://raw.githubusercontent.com/commercialhaskell/stack/master/ChangeLog.md",
    );
    return await res.text();
  } catch (e) {
    console.log("Got error", e);
    throw e;
  }
}

export const metadata: Metadata = {
  title: "Changelog-Stack Auth",
};

export default async function Changelog() {
  const content = await fetchChangelog();

  return (
    <section className="px-4 pt-12 md:pt-20 max-w-5xl mx-auto">
      <div className="mx-auto md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support">
          Stack Changelog
        </h1>
        <p className="opacity-60 mt-2 text-lg">
          New updates and improvements to Stack Auth.
        </p>
      </div>
      <div className="border-b border-zinc-800 mt-12" />
      {content && (
        <div className="prose-sm md:prose-lg text-zinc-100 prose-headings:text-zinc-300 prose-p:text-zinc-100 prose-strong:text-zinc-400 prose-headings:font-medium prose-code:bg-zinc-700/40 prose-code:px-3 prose-code:py-1 prose-code:rounded-md prose-code:text-zinc-300 prose-a:text-violet-500 pt-12 px-4 md:px-0 mx-auto w-full md:max-w-4xl overflow-x-hidden">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {content}
          </Markdown>
        </div>
      )}
    </section>
  );
}
