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
];

const ComparasionCard = ({
  name,
  description,
  content,
  link,
}: ProductProps) => {
  return (
    <div className="p-4 md:p-8 border-b border-zinc-700 rounded-3xl glass-shadow leading-loose mt-12 glass-background glass-shadow relative">
      <div
        aria-hidden="true"
        className="line-bg right-0 top-0 w-[20%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
      ></div>
      <h2
        className="
text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700"
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
        className="ml-auto flex items-center gap-2 mt-8 justify-end group"
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
    <section className="px-6 md:px-0 py-12 md:py-24 w-full bg-black relative">
      <h2 className="text-center text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700">
        Here&apos;s how we compare
      </h2>

      <p className="opacity-60 mt-2 text-lg text-center">
        Among its competitors, Stack Auth is unique by being open-source,
        <br />
        developer-friendly, and feature-rich.
      </p>
      <div className="mt-10 md:mt-20 max-w-4xl mx-auto">
        <div className="flex items-center gap-6 flex-wrap">
          {products.map((item, index) => (
            <div
              className="flex flex-col items-center gap-2 group"
              key={index}
              onClick={() => setCurrentTab(index)}
            >
              <div
                className={cn(
                  "w-20 h-20 border-b border-zinc-800 glass-background rounded-2xl glass-shadow p-2 hover:border-violet-600 transition-all cursor-pointer active:scale-95",
                  {
                    "border-violet-600": currentTab === index,
                  },
                )}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={10}
                  height={10}
                  className="w-full h-full object-contain group-hover:brightness-125"
                />
              </div>
              <p className="group-hover:brightness-150 mt-1">{item.name}</p>
            </div>
          ))}
        </div>
        <ComparasionCard {...products[currentTab]} />
      </div>
    </section>
  );
};

export default ComparasionWithCompetitors;
