import { cn } from "@/lib/utils";
import { Box, Lock, Settings, Square, User } from "lucide-react";
import Image from "next/image";
import React from "react";
const items = [
  {
    icon: Lock,
    title: "<SignIn/>",
    description: "Sign in to your account",
    image: "/sign-in.webp",
  },
  {
    icon: Settings,
    title: "<AccountSettings/>",
    description: "Sign in to your account",
    image: "/account-settings-new.webp",
  },
  {
    icon: User,
    title: "<UserButton/>",
    description: "Sign in to your account",
    image: "/user-button.webp",
  },
  {
    icon: Box,
    title: "Email templates",
    description: "Sign in to your account",
    image: "/email.webp",
  },
  {
    icon: Square,
    title: "Admin Dashboard",
    description: "Sign in to your account",
    image: "/dashboard.webp",
  },
];

const NextJsIntegration = () => {
  return (
    <section className="py-12 sm:py-24 w-full bg-black relative">
      <div
        aria-hidden="true"
        className="line-bg left-1/2 top-0 w-[40%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
      />
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[100px] w-[70%] md:h-[300px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2 conic-bg"
      />

      <h2 className="text-center text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700">
        Beautiful Next.js integration
      </h2>

      <p className="opacity-60 mt-2 text-lg text-center">
        We pride ourselves with our lean and responsive design. <br /> Your
        users will love it, and your developers too.
      </p>

      <div className="w-full max-w-7xl mx-auto flex flex-wrap gap-2 mt-10 sm:mt-20 relative">
        {items.map(({ icon: Icon, title, description, image }, idx) => (
          <div
            key={idx}
            className={cn(
              "bg-black glass-shadow border border-t-0 border-zinc-800  rounded-2xl hover:brightness-110 backdrop-blur",
              {
                "md:row-span-2": idx === 0,
                // "md:col-span-2": idx === 0 || idx === 3,
                "md:col-span-3": idx === items.length - 1,
                "bg-[#09090b]": idx === 0 || idx === items.length - 1,
              },
            )}
          >
            {/* <h2 className="text-2xl">{title}</h2>
            <p className="text-zinc-400">{description}</p> */}
            <div className="w-full relative overflow-hidden">
              <Image
                src={image}
                alt="a"
                width={1920}
                height={1080}
                className="w-full h-fit object-contain bg-top"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextJsIntegration;
