"use client";
import { AlignJustify, X } from "lucide-react";
import React from "react";
import { NAVLINKS } from "./Navbar";
import { useRouter } from "next/navigation";

const MobileNavigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="block sm:hidden">
      {isOpen ? (
        <X onClick={() => setIsOpen(false)} className="w-5 h-5" />
      ) : (
        <AlignJustify onClick={() => setIsOpen(true)} className="w-5 h-5" />
      )}

      {isOpen && (
        <div
          className={
            "absolute top-[80px] left-0 right-0 w-full border border-zinc-900 rounded-lg bg-zinc-950/80 backdrop-blur flex flex-col gap-2 p-4 pb-6"
          }
        >
          {NAVLINKS.map((link) => (
            <span
              onClick={() => {
                router.push(link.href);
                setIsOpen(false);
              }}
              key={link.href}
              className="text-white/60 text-sm capitalize"
            >
              {link.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
