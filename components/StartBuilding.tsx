import Link from "next/link";
import React from "react";
import GradientBorder from "./ui/button";
import { ArrowRight } from "lucide-react";

const StartBuilding = () => {
  return (
    <section
      id="start-building"
      className="py-20 sm:py-32 text-center w-full bg-dot-white/[0.2] relative max-w-7xl mx-auto"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
        href={"https://docs.stack-auth.com/getting-started/setup"}
        target="_blank"
        className="inline-flex items-center mt-8 gap-1 bg-zinc-100 text-zinc-600 justify-center px-4 py-2 rounded-full shadow-lg hover:opacity-90 group"
      >
        Get Started{" "}
        <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
};

export default StartBuilding;
