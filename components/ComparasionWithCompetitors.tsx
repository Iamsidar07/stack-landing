"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ProductProps {
  name: string;
  logo: string;
  description: string;
  content: { subheding: string; desc: string }[];
  link: string;
}

const products = [
  {
    name: "Supabse",
    logo: "/supabase.svg",
    description: "Why not both?",
    content: [
      {
        subheding: "Stack is more than just authN",
        desc: "Instead of just logging you in, Stack also provides authZ (orgs/teams, permissions), impersonation, better emails, user management, and more.",
      },
      {
        subheding: "Use Stack + Supabase DB",
        desc: "Get the best of both worlds by dropping in Stack as a replacement for Supabase Auth, but keep using the Supabase DB features you love.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=supabase-auth",
  },
  {
    name: "Auth0",
    logo: "/auth0.svg",
    description: "Stack is built for devs who want to own their auth.",
    content: [
      {
        subheding: "Stack is open-source",
        desc: "Stack is 100% open-source and self-hostable.",
      },
      {
        subheding: "Stack has reasonable pricing",
        desc: "Stack grows organically without a marketing budget and sales team, and can afford to be multiple magnitudes cheaper.",
      },
      {
        subheding: "Stack integrates even deeper",
        desc: "Stack natively supports the Next.js app router, supporting RSC and Suspense on any configuration.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=auth0",
  },
  {
    name: "Auth.js",
    logo: "/next-auth.svg",
    description:
      "Stack is a hosted solution with near-instant setup, while still being 100% open-source.",
    content: [
      {
        subheding: "Stack has more features",
        desc: "Password-based auth, sign up e-mails, 2FA, custom metadata, impersonation, and automatic JWT refreshes — and everything else you missed from Auth.js.",
      },
      {
        subheding: "Stack is more than just authN",
        desc: "Instead of just logging you in, Stack also provides authZ (orgs/teams, permissions), impersonation, better emails, user management, and more.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=authjs",
  },
  {
    name: "Clerk",
    logo: "/clerk.svg",
    description: "Stack is the open-source Clerk alternative.",
    content: [
      {
        subheding: "Stack is open-source",
        desc: "Stack is 100% open-source and self-hostable.",
      },
      {
        subheding: "Stack has reasonable pricing",
        desc: "Stack grows organically without a marketing budget and sales team, and can afford to be multiple magnitudes cheaper.",
      },
      {
        subheding: "Stack integrates even deeper",
        desc: "Stack natively supports the Next.js app router, supporting RSC and Suspense on any configuration.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=clerk",
  },
  {
    name: "Keycloak",
    logo: "/keycloak.svg",
    description: "Stack is to Keycloak what Vercel is to AWS.",
    content: [
      {
        subheding: "Stack is managed for you",
        desc: "Don't worry about setting up and maintaining your own server, read replicas, backups, and scaling, because Stack Auth will do it for you.",
      },
      {
        subheding: "Stack is simple, yet powerful",
        desc: "Stack is simple, yet powerful Stack is built for developers. It's simple to understand, use, and integrate.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=keycloak",
  },
  {
    name: "SuperTokens",
    logo: "/super-tokens.svg",
    description: "",
    content: [
      {
        subheding: "Stack is open-source",
        desc: "Stack is 100% open-source and self-hostable.",
      },
      {
        subheding: "Stack has reasonable pricing",
        desc: "Stack grows organically without a marketing budget and sales team, and can afford to be multiple magnitudes cheaper.",
      },
      {
        subheding: "Stack integrates even deeper",
        desc: "Stack natively supports the Next.js app router, supporting RSC and Suspense on any configuration.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=supertokens",
  },
  {
    name: "Anyone else",
    logo: "/anything.svg",
    description: "",
    content: [
      {
        subheding: "Are they open-source?",
        desc: "Stack is 100% open-source and self-hostable, under OSI-approved licenses.",
      },
      {
        subheding: "Are they developer-friendly?",
        desc: "Stack is built for developers, not enterprises. It's simple to understand, use, and integrate into your Next.js + Postgres tech stack.",
      },
      {
        subheding: "Do they do more than just authN?",
        desc: "Instead of just logging you in, Stack also provides authZ (orgs/teams, permissions), impersonation, emails, user management, and more.",
      },
    ],
    link: "https://docs.stack-auth.com/getting-started/setup?competitor=anyone-else",
  },
];

const ComparasionCard = ({
  name,
  description,
  content,
  link,
}: ProductProps) => {
  return (
    <div className="p-4 md:p-8 border-b border-zinc-700 rounded-xl glass-shadow leading-loose glass-shadow relative bg-zinc-900/80">
      <div
        aria-hidden="true"
        className="line-bg right-0 top-0 w-[20%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
      ></div>
      <h2
        className="
text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support"
      >
        Stack vs {name}
      </h2>
      <p className="opacity-60 text-sm mb-8">{description}</p>
      {content.map((item, index) => (
        <div className="flex flex-col mt-2" key={index}>
          <h3 className="text-lg">{item.subheding}</h3>
          <p className="opacity-60 text-sm">{item.desc}</p>
        </div>
      ))}
      <Link
        href={link}
        target="_blank"
        className="ml-auto flex items-center gap-2 mt-8 justify-end group w-fittext-violet-500"
      >
        Learn more{" "}
        <ArrowRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const ComparasionWithCompetitors = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <section className="px-6 md:px-0 py-12 md:py-24 w-full bg-black relative bg-dot-white/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="text-center text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support">
        Here&apos;s how we compare
      </h2>

      <p className="opacity-60 mt-2 text-lg text-center">
        Among its competitors, Stack Auth is unique by being open-source,
        <br />
        developer-friendly, and feature-rich.
      </p>
      <div className="mt-10 md:mt-20 max-w-4xl mx-auto gap-8 min-h-[45vh] grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-1 md:col-span-1 z-[1]">
          {products.map((item, index) => (
            <div
              className={cn(
                "flex items-center gap-2 group border border-zinc-900 rounded p-2 hover:border-violet-600 transition-all cursor-pointer active:scale-95 w-full bg-zinc-900/50",
                {
                  "bg-gradient-to-r from-zinc-900 to-zinc-950 glass-shadow border border-violet-600":
                    currentTab === index,
                },
              )}
              key={index}
              onClick={() => setCurrentTab(index)}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={30}
                height={30}
                className="object-contain group-hover:brightness-125"
              />
              <span className="group-hover:brightness-150">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="md:col-span-2 z-[1]">
          <ComparasionCard {...products[currentTab]} />
        </div>
      </div>
    </section>
  );
};

export default ComparasionWithCompetitors;
