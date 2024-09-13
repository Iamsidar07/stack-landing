import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubStarsButton from "./GithubStarsButton";
import { ChevronRight } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

export const NAVLINKS = [
  { name: "Docs", href: "https://docs.stack-auth.com/overview" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Changelog", href: "/changelog" },
  { name: "Github", href: "https://github.com/stack-auth/stack" },
  { name: "Discord", href: "https://discord.com/invite/pD4nyYyKrb" },
];
const Navbar = () => {
  return (
    <div className="fixed top-0 z-[999] flex w-full justify-center px-4 pt-2 -translate-x-1/2 left-1/2">
      <nav className="w-full rounded-2xl max-w-7xl mx-auto border-[1px] border-zinc-800 flex items-center justify-between px-6 py-3 inset-1 backdrop-blur glass-background relative">
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
              className="text-white/60 font-semibold text-sm hover:text-zinc-100 transition-opacity capitalize"
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
            className="text-white/60 font-semibold text-sm hover:text-zinc-100 transition-opacity capitalize"
          >
            Sign in
          </Link>
          <Link
            href={"https://app.stack-auth.com/handler/signup"}
            className="flex items-center gap-1 group bg-zinc-100 text-black px-4 py-2 rounded-full glass-shadow"
          >
            Sign up{" "}
            <ChevronRight className="w-4 h-4 text-zinc-800 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/*Mobile navigation*/}
          <MobileNavigation />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
