import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import CopyToClipboard from "./CopyToClipboard";

const Hero = () => {
  return (
    <div className="h-screen w-full relative pt-32 sm:pt-0 px-4">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6d28d9] to-[#8b5cf6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] wave-bg"></div>
      </div>
      <section
        id="hero"
        className="text-center relative h-full flex flex-col items-center justify-center"
      >
        <Link
          href={"https://www.ycombinator.com/companies/stack-auth"}
          target="_blank"
          className="inline-flex gap-1 mb-4 text-transparent bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text"
        >
          <div className="flex items-center justify-center gap-1">
            Backed by{" "}
            <span className="w-7 h-7 grid place-items-center bg-zinc-700 text-zinc-100 rounded-md font-semibold glass-shadow ml-2">
              Y
            </span>
            Combinator
          </div>
        </Link>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text text-center tracking-tight">
          The open-source <br />
          <span className="bg-black/5">Auth0 alternative.</span>
        </h1>
        <p className="text-normal sm:text-lg mt-4 text-center text-zinc-400">
          We build your sign in page so you don&apos;t have to.
          <br />
          AuthN, authZ, and user management in just 5 minutes.
        </p>
        <div className="text-center mt-8">
          <span className="text-sm font-bold text-zinc-400">
            Next.js setup wizard:
          </span>
          <div className="code_wrapper p-2 rounded-lg backdrop-blur mt-4">
            <div className="bg-zinc-900/40 px-0 pl-2 sm:px-8 py-6 w-fit rounded-lg mx-auto relative border border-zinc-800 backdrop-blur">
              <div className="w-24 h-24 bg-violet-500 rounded-lg absolute z-[-1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-[76px] animate-pulse" />
              <div className="pt-6 flex gap-2 items-center">
                <span className="font-mono ">
                  $ npx @stackframe/init-stack@latest
                </span>
                <CopyToClipboard text="npx @stackframe/init-stack@latest" />
              </div>
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 w-fit mx-auto z-10">
          <div className="relative w-fit mx-auto px-6 py-2 rounded-2xl">
            <Link
              href={"https://docs.stack-auth.com/getting-started/setup"}
              target="_blank"
              className="inline-flex gap-1"
            >
              Get Started <ArrowRight className="text-violet-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-violet-600 group-hover:bg-gradient-to-l z-[-1] rounded-lg transition-all duration-300 glass-shadow" />
              <div className="absolute inset-px bg-zinc-900/80 rounded-lg z-[-1] backdrop-blur" />
            </Link>
          </div>
          <Link href={"https://discord.stack-auth.com/"} target="_blank">
            <div className="flex items-center gap-1 relative w-fit mx-auto px-6 py-2 rounded-full glass-shadow backdrop-blur ">
              <Image
                src="/discord.svg"
                width={20}
                height={20}
                alt="Discord"
                className="w-5 h-5"
              />
              Join Discord
            </div>
          </Link>
        </div>
        <Link
          href={"https://docs.stack-auth.com/"}
          target="_blank"
          className="inline-flex items-center mt-4 gap-1 text-zinc-300 px-6 py-3 hover:bg-zinc-900 rounded-full group z-10"
        >
          Documentation{" "}
          <ChevronRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform text-zinc-500" />
        </Link>
      </section>
    </div>
  );
};

export default Hero;
