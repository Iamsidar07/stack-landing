import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar:
      "https://stack-auth.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnicola-lanzilotto.64c81a06.webp&w=64&q=75",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="text-center px-4 py-12 md:py-24 w-full"
    >
      <h2 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700">
        Join the community
      </h2>
      <p className="opacity-60 mt-6 text-lg">
        As an open-source project, we rely on organic growth. <br /> Here&apos;s
        what our users have to say.
      </p>
      <div className="w-full h-[30rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="fast"
        />
      </div>
    </section>
  );
};

export default Testimonials;
