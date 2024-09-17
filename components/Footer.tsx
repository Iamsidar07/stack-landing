import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterColProps {
  title: string;
  items: { name: string; href: string }[];
}

const productLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Pricing & Plans", href: "/pricing" },
  { name: "FAQS", href: "/#faq" },
];

const companyLinks = [
  { name: "About us", href: "https://www.linkedin.com/company/stackframe-inc" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "mailto:team@stack-auth.com" },
  { name: "Contact us", href: "mailto:team@stack-auth.com" },
];
const legalLinks = [
  {
    name: "Terms & Conditions",
    href: "https://www.iubenda.com/terms-and-conditions/19290387",
  },
  {
    name: "Privacy Policy",
    href: "https://www.iubenda.com/terms-and-conditions/19290387",
  },
  {
    name: "Cookie Policy",
    href: "https://www.iubenda.com/privacy-policy/19290387/cookie-policy",
  },
];

const FooterCol = ({ title, items }: FooterColProps) => {
  return (
    <div className="text-left">
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-6 text-sm flex flex-col gap-4">
        {items.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target={link.href.includes("http") ? "_blank" : "_self"}
              className="text-zinc-400 tracking-wide"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="px-8 py-12 sm:py-24 text-center w-full border-t border-zinc-900 bg-black rounded-t-3xl relative overflow-hidden">
      <div
        aria-hidden="true"
        className="line-bg left-1/2 top-0 w-[40%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[100px] w-[70%] md:h-[300px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2 conic-bg"
      ></div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
        <div className="md:col-span-2 text-left flex flex-col">
          <div className="flex-1">
            <Link href="" className="h-8 inline-block">
              <Image
                src="/logo.svg"
                alt="Stack Auth"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </Link>
            <p className="opacity-80 text-sm mt-2">
              &copy; Stackframe Inc. - All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-12 md:mt-0">
            <Link
              href=""
              target="_blank"
              className="p-1 glass-shadow rounded-lg glass-background w-8 h-8 border border-t-0 border-violet-600"
            >
              <Image
                src="/discord.svg"
                width={20}
                height={20}
                alt="Discord"
                className="w-full h-full object-contain"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/stackframe-inc"
              target="_blank"
              className="p-1 glass-shadow rounded-lg glass-background w-8 h-8 border border-t-0 border-violet-600"
            >
              <Image
                src="/linkedin.svg"
                width={20}
                height={20}
                alt="Linkedin"
                className="w-full h-full object-contain invert"
              />
            </Link>
            <Link
              href="https://github.com/stack-auth/stack"
              target="_blank"
              className="p-1 glass-shadow rounded-lg glass-background w-8 h-8 border border-t-0 border-violet-600"
            >
              <Image
                src="/github.svg"
                width={20}
                height={20}
                alt="Github"
                className="w-full h-full object-contain invert"
              />
            </Link>
          </div>
        </div>
        <FooterCol title="Products" items={productLinks} />
        <FooterCol title="Company" items={companyLinks} />
        <FooterCol title="Legals" items={legalLinks} />
      </div>
    </footer>
  );
};

export default Footer;
