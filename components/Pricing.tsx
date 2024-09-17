import { ArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = ({
  withTopGradientBorder = true,
}: {
  withTopGradientBorder?: boolean;
}) => {
  return (
    <section
      id="pricing"
      className="px-4 py-12 md:py-24 text-center w-full relative"
    >
      {withTopGradientBorder && (
        <>
          <div
            aria-hidden="true"
            className="line-bg left-1/2 top-0 w-[40%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
          ></div>
          <div
            aria-hidden="true"
            className="-top-1 left-1/2 h-[100px] w-[70%] md:h-[300px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2 conic-bg"
          ></div>
        </>
      )}
      <span className="px-6 py-2 rounded-full text-sm text-zinc-500 glass-shadow">
        Managed hosting
      </span>
      <h2 className="mt-4 sm:mt-8 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support">
        Simple plan for everyone
      </h2>
      <p className="opacity-60 mt-2 text-lg">Self-hosting is always free.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 sm:mt-24 gap-6 md:gap-0 w-full max-w-7xl mx-auto">
        <div className="glass-shadow border border-zinc-900 p-4 sm:p-8 rounded-2xl text-left flex flex-col h-full">
          <span className="font-bold text-lg">Stack</span>
          <p className="text-zinc-500 text-lg font-semibold">For Individuals</p>
          <div className="flex items-center gap-2 py-6">
            <span className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 to-zinc-600 gradient-text-support">
              $0
            </span>
            <span className="text-zinc-500 text-sm font-semibold">/ month</span>
          </div>
          <div className="h-px bg-zinc-900 w-full my-8" />
          <div className="flex flex-col gap-4 flex-1 pb-12 sm:pb-24">
            {[
              "10k Monthly active users",
              "Unlimited active teams",
              "Unlimited projects",
              "1 dashboard admins",
              "Custom SSO branding",
              "SSO with OIDC/OAuth",
              "Basic support",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-zinc-400"
              >
                <CircleCheck className="w-4 h-4 " />
                <p className="text-white/90">{feature}</p>
              </div>
            ))}
          </div>

          <Link
            href={"https://docs.stack-auth.com/getting-started/setup"}
            target="_blank"
            className="inline-flex items-center mt-4 gap-1 w-full bg-zinc-100 text-zinc-600 justify-center px-6 py-3 rounded-xl shadow-lg hover:opacity-90 group"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="p-4 sm:p-8 rounded-2xl text-left flex flex-col h-full md:scale-105 z-[2] bg-gradient-to-br from-zinc-900 to-zinc-950 team-shadow border border-zinc-800">
          <span className="font-bold text-lg">Team</span>
          <p className="text-zinc-500 text-lg font-semibold">
            For early startups and small teams
          </p>
          <div className="flex items-center gap-2 py-6">
            <span className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 to-zinc-600 gradient-text-support">
              $49
            </span>
            <span className="text-zinc-500 text-sm font-semibold">/ month</span>
          </div>
          <div className="h-px bg-zinc-900 w-full my-8" />
          <div className="flex flex-col gap-4 flex-1 pb-12 sm:pb-24">
            {[
              "50k Monthly active users",
              "Unlimited active teams",
              "Unlimited projects",
              "3(then $39 each) dashboard admins",
              "Custom SSO branding",
              "SSO with OIDC/OAuth",
              "Basic support",
              "Priority support",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-zinc-400"
              >
                <CircleCheck className="w-4 h-4 " />
                <p className="text-white/90">{feature}</p>
              </div>
            ))}
          </div>
          <Link
            href={"https://docs.stack-auth.com/getting-started/setup"}
            target="_blank"
            className="inline-flex items-center mt-4 gap-1 w-full bg-violet-700 justify-center px-6 py-3 rounded-xl shadow-lg hover:opacity-90 font-medium group"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="glass-shadow border border-zinc-900 p-4 sm:p-8 rounded-2xl text-left flex flex-col h-full">
          <span className="font-bold text-lg">Growth</span>
          <p className="text-zinc-500 text-lg font-semibold">
            For growing businesses and teams
          </p>
          <div className="flex items-center gap-2 py-6">
            <span className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 to-zinc-600 gradient-text-support">
              $299
            </span>
            <span className="text-zinc-500 text-sm font-semibold">/ month</span>
          </div>
          <div className="h-px bg-zinc-900 w-full my-8" />
          <div className="flex flex-col gap-4 flex-1 pb-12 sm:pb-24">
            {[
              "Unlimited Monthly active users",
              "Unlimited active teams",
              "Unlimited projects",
              "5(then $39 each) dashboard admins",
              "Custom SSO branding",
              "SSO with OIDC/OAuth",
              "SSO with SAML",
              "Basic support",
              "Premium support",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-zinc-400"
              >
                <CircleCheck className="w-4 h-4 " />
                <p className="text-white/90">{feature}</p>
              </div>
            ))}
          </div>
          <Link
            href={"https://docs.stack-auth.com/getting-started/setup"}
            target="_blank"
            className="inline-flex items-center mt-4 gap-1 w-full bg-zinc-100 text-zinc-600 justify-center px-6 py-3 rounded-xl shadow-lg hover:opacity-90 group"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
