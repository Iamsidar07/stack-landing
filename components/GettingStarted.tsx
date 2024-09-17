import React from "react";
import GradientBorder from "./ui/button";
const qna = [
  {
    q: "Can I integrate Stack into my existing project?",
    ans: "Yes! It is very straightforward! Stack does not require any special architecture and can merge well into any Next.js project that uses the App router.",
  },
  {
    q: "How can I integrate Stack into my backend?",
    ans: "Stack provides a Next.js server side SDK that you can just import and use. If you are using a different language or framework, you can use our REST API.",
  },
  {
    q: "How do I sync user data with my database?",
    ans: "For most of the time, you don't need to sync user data with your database. You can store JSON data in the user object itself. However, if you really need to sync data, you can use our webhooks.",
  },
  {
    q: "Does Stack support SSO with SAML?",
    ans: "Yes! Let's get in touch and we can help you.",
  },
  {
    q: "Can I deploy Stack on my own servers?",
    ans: "Yes! Stack is fully open-source and you can self-host it on your own servers.",
  },
  {
    q: " What kind of support do you offer?",
    ans: "We offer a range of support from data migration to custom on-premise deployments.",
  },
];
const GettingStarted = () => {
  return (
    <section id="faq" className="px-4 py-12 md:py-24 text-center w-full">
      <GradientBorder>Getting started with Stack</GradientBorder>
      <h2 className="mt-4 sm:mt-8 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 gradient-text-support">
        Everything you need to know
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 max-w-7xl mx-auto pt-12 sm:pt-24">
        {qna.map(({ q, ans }) => (
          <div key={q} className="text-left">
            <h3 className="font-bold text-white/80 text-normal sm:text-lg">{q}</h3>
            <p className="mt-2 text-gray-500 leading-relaxed text-sm">{ans}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GettingStarted;
