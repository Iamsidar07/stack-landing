import React from "react";
import { ArrowRight, CircleCheck, X } from "lucide-react";
import Link from "next/link";

const PricingTable = () => {
  return (
    <div className="grid md:grid-cols-4 xl:-mx-6 text-sm [&amp;>div:nth-of-type(-n+4)]:py-6 [&amp;>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&amp;>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&amp;>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&amp;>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&amp;>div:nth-of-type(2)]:rounded-tl-3xl md:[&amp;>div:nth-of-type(4)]:rounded-tr-3xl md:[&amp;>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&amp;>div:nth-last-of-type(1)]:rounded-br-3xl [&amp;>div]:bg-slate-700/20 [&amp;>div:nth-of-type(4n+1)]:bg-transparent max-md:[&amp;>div:nth-of-type(4n+5)]:hidden max-md:[&amp;>div:nth-of-type(4n+2)]:order-1 max-md:[&amp;>div:nth-of-type(4n+3)]:order-2 max-md:[&amp;>div:nth-of-type(4n+4)]:order-3 max-md:md:[&amp;>div:nth-of-type(n)]:mb-0 [&amp;>div:nth-of-type(4n+3)]:relative before:[&amp;>div:nth-of-type(4n+3)]:absolute before:[&amp;>div:nth-of-type(4n+3)]:-inset-px before:[&amp;>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&amp;>div:nth-of-type(4n+3)]:border-x-2 before:[&amp;>div:nth-of-type(3)]:border-t-2 before:[&amp;>div:nth-last-of-type(2)]:border-b-2 before:[&amp;>div:nth-of-type(4n+3)]:border-red-500 before:[&amp;>div:nth-of-type(4n+3)]:-z-10 before:[&amp;>div:nth-of-type(4n+3)]:pointer-events-none py-6 md:py-24">
      <div className="px-6 flex flex-col justify-end"></div>
      <div className="px-6 flex flex-col justify-end">
        <div className="grow pb-4">
          <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
            Free
          </div>
        </div>
        <div className="pb-4 border-b border-zinc-900">
          <Link
            href={"https://docs.stack-auth.com/getting-started/setup"}
            target="_blank"
            className="inline-flex items-center mt-4 gap-1 w-full bg-zinc-100 text-zinc-600 justify-center px-6 py-3 rounded-md shadow-lg hover:opacity-90 group"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="grow pb-4">
          <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
            Team
          </div>
        </div>
        <div className="pb-4 border-b border-zinc-900">
          <Link
            href={"https://docs.stack-auth.com/getting-started/setup"}
            target="_blank"
            className="inline-flex items-center mt-4 gap-1 w-full bg-violet-700 justify-center px-6 py-3 rounded-md shadow-lg hover:opacity-90 font-medium group"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="grow pb-4 ">
          <div className="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5">
            Growth
          </div>
        </div>
        <div className="pb-4 border-b border-zinc-900">
          <Link
            href={"https://docs.stack-auth.com/getting-started/setup"}
            target="_blank"
            className="inline-flex items-center mt-4 gap-1 w-full bg-zinc-100 text-zinc-600 justify-center px-6 py-3 rounded-md shadow-lg hover:opacity-90 group"
          >
            Get Started{" "}
            <ArrowRight className="w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      <div className="py-2 text-slate-50 font-medium mt-4">Usage</div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Usage</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Usage</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Usage</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Monthly active users</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-600 w-4 h-4" />
          <span>
            10K <span className="md:hidden">Monthly active users</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            50K <span className="md:hidden">Monthly active users</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Monthly active users</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Monthly active teams</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Monthly active teams</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Monthly active teams</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Monthly active teams</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Number of projects</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Number of projects</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Number of projects</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            Unlimited <span className="md:hidden">Number of projects</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span># of dashboard admins</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            1 <span className="md:hidden"># of dashboard admins</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            3 (then $39 each){" "}
            <span className="md:hidden"># of dashboard admins</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            5 (then $49 each){" "}
            <span className="md:hidden"># of dashboard admins</span>
          </span>
        </div>
      </div>
      <div className="py-2 text-slate-50 font-medium mt-4">Features</div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Features</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Features</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Features</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Custom SSO branding</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Custom SSO branding</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Custom SSO branding</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Custom SSO branding</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>SSO with OIDC/OAuth</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">SSO with OIDC/OAuth</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">SSO with OIDC/OAuth</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">SSO with OIDC/OAuth</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>SSO with SAML</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <X className="text-red-500 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">SSO with SAML</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <X className="text-red-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">SSO with SAML</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">SSO with SAML</span>
          </span>
        </div>
      </div>
      <div className="py-2 text-slate-50 font-medium mt-4">Support</div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full py-2 text-slate-50 font-medium">
          <span>
            <span className="md:hidden">Support</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Basic support</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Basic support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Basic support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Basic support</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Priority support</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <X className="text-red-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Priority support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Priority support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Priority support</span>
          </span>
        </div>
      </div>
      <div className="pr-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <span>Premium support</span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <X className="text-red-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Premium support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <X className="text-red-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Premium support</span>
          </span>
        </div>
      </div>
      <div className="px-6 flex flex-col justify-end">
        <div className="flex items-center h-full border-b border-zinc-900 py-2 text-zinc-500  gap-1">
          <CircleCheck className="text-violet-700 w-4 h-4" />
          <span>
            {" "}
            <span className="md:hidden">Premium support</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
