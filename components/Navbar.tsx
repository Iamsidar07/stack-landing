import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubStarsButton from "./GithubStarsButton";
import { ChevronRight } from "lucide-react";

const NAVLINKS = [
  { name: "Docs", href: "https://docs.stack-auth.com/overview" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Github", href: "https://github.com/stack-auth/stack" },
  { name: "Discord", href: "https://discord.com/invite/pD4nyYyKrb" },
];
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[999] flex w-full justify-center px-4 py-3 -translate-x-1/2 left-1/2">
      <nav className="h-[76px] w-full rounded-2xl max-w-7xl mx-auto border-[1px] border-zinc-800 flex items-center justify-between px-6 py-4 inset-1 backdrop-blur glass-background">
        <Link href="/" className="h-5">
          <Image
            src="/logo.svg"
            alt="Stack Auth"
            width={40}
            height={40}
            className="w-full h-full object-contain"
          />
        </Link>
        <div className="items-center gap-6 hidden md:flex">
          {NAVLINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.includes("http") ? "_blank" : "_self"}
              className="text-white/60 font-semibold text-sm hover:text-white transition-opacity capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex">
            <GithubStarsButton />
          </span>
          <Link
            href={"https://app.stack-auth.com/"}
            className="text-white/60 font-semibold text-sm hover:text-white transition-opacity capitalize"
          >
            Sign in
          </Link>
          <Link
            href={"https://app.stack-auth.com/handler/signup"}
            className="flex items-center gap-1 group bg-white text-black px-6 py-2 rounded-full glass-shadow"
          >
            Sign up{" "}
            <ChevronRight className="w-4 h-4 text-zinc-800 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
