"use client";
import React, { useState } from "react";
import { Check, Clipboard } from "lucide-react";

interface Props {
  text: string;
  onCopy?: () => void;
}

const CopyToClipboard = ({ text, onCopy }: Props) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(text);
    if (onCopy) onCopy();
    setTimeout(() => {
      setCopied(false);
    }, 700);
  };
  return (
    <div
      onClick={handleCopy}
      className="cursor-copy w-8 h-8 flex items-center justify-center glass-shadow bg-gradient-to-b from-zinc-900 to-zinc-950 rounded p-1 border-b border-teal-600"
    >
      {copied ? (
        <Check className="text-teal-600 w-4 h-4" />
      ) : (
        <Clipboard className="text-zinc-600 w-4 h-4" />
      )}
    </div>
  );
};

export default CopyToClipboard;
