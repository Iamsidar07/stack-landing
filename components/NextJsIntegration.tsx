import Image from "next/image";
import React from "react";
import * as motion from "framer-motion/client";

const GridItem = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="border border-zinc-900 bg-zinc-950 glass-shadow rounded-xl col-span-full md:col-span-6 px-6 py-8 overflow-hidden group flex flex-col">
    <div>
      <header>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="opacity-60 mt-2 text-sm">{description}</p>
      </header>
    </div>
    <div className="w-[calc(100%+64px)] flex items-end justify-center -m-8 mt-auto">
      {/*image*/}
      <picture className="flex items-start justify-start w-auto max-w-[calc(100%_+_2*24px)] max-h-[calc(100%_+_2*32px)] m-auto relative z-[1] flex-grow">
        <Image
          src={image}
          alt="Sch"
          width={1000}
          height={720}
          className="text-transparent cover object-left-top w-full max-w-full h-auto block group-hover:-translate-y-[2px] transition-transform"
        />
      </picture>
    </div>
  </div>
);

const items = [
  {
    title: "<SignIn />",
    description:
      "Effortlessly integrate user authentication with our intuitive SignIn component. Enable quick and secure account access with minimal setup.",
    image: "/sign-in.png",
  },
  {
    title: "Email Templates",
    description:
      "Customize and automate your communications with pre-built Email Templates. Send professional welcome messages, password resets, and notifications effortlessly.",
    image: "/email.png",
  },
  {
    title: "<AccountSettings />",
    description:
      "Provide users with comprehensive account management. Allow them to update personal details and adjust security preferences in one convenient place.",
    image: "/account-settings.png",
  },
  {
    title: "<UserButton />",
    description:
      "Enhance user experience with the UserButton. Let users easily manage their profiles and access account settings with a single click.",
    image: "/user-button.png",
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

      <h2 className="text-center text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support">
        Beautiful Next.js integration
      </h2>

      <p className="opacity-60 mt-2 text-lg text-center">
        We pride ourselves with our lean and responsive design. <br className="hidden md:inline-flex" /> Your
        users will love it, and your developers too.
      </p>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mt-10 md:mt-20 relative px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-shadow border border-zinc-900 bg-zinc-950 rounded-xl md:col-span-12 px-6 py-8 overflow-hidden group"
        >
          <div>
            <header>
              <h2 className="font-semibold text-lg">Next.js Integration</h2>
              <p className="opacity-60 mt-2 text-sm">
                Easily integrate your Next.js application with our components
                and features.
              </p>
            </header>
          </div>
          <div className="w-[calc(100%+64px)] flex items-end justify-center -m-8 mt-auto">
            {/*image*/}
            <picture className="flex items-start justify-start w-auto max-w-[calc(100%_+_2*24px)] max-h-[calc(100%_+_2*32px)] m-auto relative z-[1] flex-grow">
              <Image
                src="/dashboard.png"
                alt="Sch"
                width={2048}
                height={1016}
                className="text-transparent cover object-left-top w-full max-w-full h-auto block group-hover:-translate-y-[2px] transition-transform"
              />
            </picture>
          </div>
        </motion.div>
        {items.map((item, index) => (
          <GridItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NextJsIntegration;
