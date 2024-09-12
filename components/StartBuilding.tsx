import Link from "next/link";
import React from "react";
import GradientBorder from "./ui/button";

const StartBuilding = () => {
  return (
    <section id="start-building" className="py-20 sm:py-32 text-center w-full">
      <GradientBorder>
        The developer-friendly authentication platform
      </GradientBorder>
      <h2 className="mt-4 sm:mt-8 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700">
        Start building with Stack today
      </h2>
      <p className="mt-4 text-lg text-zinc-500">
        Secure your application with the best open-source authentication and
        user management platform.
      </p>
      <Link
        target="_blank"
        href="https://www.ycombinator.com/companies/stack-auth"
        className="inline-block mt-8"
      >
        <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white backdrop-blur-3xl">
            Getting Started
          </span>
        </button>
      </Link>
    </section>
  );
};

export default StartBuilding;
