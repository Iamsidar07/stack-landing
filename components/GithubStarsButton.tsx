import Image from "next/image";
import Link from "next/link";
import React from "react";

const GithubStarsButton = async () => {
  const response = await fetch("https://api.github.com/repos/stack-auth/stack");
  const data = await response.json();
  if (!data) return null;
  const stars = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(data["watchers_count"]);
  return (
    <Link
      href="https://github.com/stack-auth/stack"
      target="_blank"
      className="relative mr-4"
    >
      <Image
        width={18}
        height={18}
        alt="github"
        src="/github.svg"
        className="object-contain invert"
      />
      <span className="absolute -top-1/2 -right-full text-xs bg-clip-text text-transparent bg-gradient-to-b from-zinc-300 to-violet-700">
        {stars}
      </span>
    </Link>
  );
};

export default GithubStarsButton;
