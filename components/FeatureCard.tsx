import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText?: string;
  actionLink: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  actionText = "Learn More",
  actionLink,
}: FeatureCardProps) => {
  return (
    <div className="relative p-4 sm:p-0 rounded-3xl hover:brightness-150 transition-all group">
      <div className="bg-gradient-to-b from-zinc-900 w-16 h-16 rounded-2xl grid place-content-center glass-shadow relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t to-violet-900 from-teal-500 z-[-1]" />
        <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 z-[-1]" />
        <Icon className="text-zinc-700 text-5xl z-[1]" />
      </div>
      <h2 className="mt-4 text-lg sm:text-xl">{title}</h2>
      <p className="mt-2 text-zinc-500">{description}</p>
      <Link
        href={actionLink}
        className="flex items-center justify-end md:opacity-0 md:group-hover:opacity-100 transition-opacity mt-4"
      >
        {actionText}{" "}
        <ArrowRight className="delay-150 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default FeatureCard;
