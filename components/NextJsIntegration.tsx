import { cn } from "@/lib/utils";
import {
  AppWindow,
  BrainCircuit,
  LayoutDashboard,
  Settings,
  User,
} from "lucide-react";
import React from "react";
const items = [
  {
    icon: BrainCircuit,
    title: "<SignIn />",
    description:
      "Effortlessly integrate user authentication with our intuitive SignIn component. Enable quick and secure account access with minimal setup.",
    image: "/sign-in.webp",
  },
  {
    icon: AppWindow,
    title: "Admin Dashboard",
    description:
      "Streamline administrative tasks with our Admin Dashboard. Monitor user activity, manage accounts, and configure settings from a centralized interface.",
    image: "/dashboard.webp",
  },
  {
    icon: LayoutDashboard,
    title: "Email Templates",
    description:
      "Customize and automate your communications with pre-built Email Templates. Send professional welcome messages, password resets, and notifications effortlessly.",
    image: "/email.webp",
  },
  {
    icon: Settings,
    title: "<AccountSettings />",
    description:
      "Provide users with comprehensive account management. Allow them to update personal details and adjust security preferences in one convenient place.",
    image: "/account-settings-new.webp",
  },
  {
    icon: User,
    title: "<UserButton />",
    description:
      "Enhance user experience with the UserButton. Let users easily manage their profiles and access account settings with a single click.",
    image: "/user-button.webp",
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

      <h2 className="text-center text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700">
        Beautiful Next.js integration
      </h2>

      <p className="opacity-60 mt-2 text-lg text-center">
        We pride ourselves with our lean and responsive design. <br /> Your
        users will love it, and your developers too.
      </p>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2 mt-10 md:mt-20 relative">
        {items.map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className={cn(
              "glass-background glass-shadow border border-t-0 border-zinc-800  rounded-2xl hover:brightness-110 backdrop-blur p-4 card",
              {
                "md:col-span-2": idx === 1 || idx === 3 || idx === 4,
              }
            )}
          >
            <div className="card-content ">
              <Icon
                strokeWidth={0.05}
                opacity={0.4}
                strokeOpacity={0.8}
                color="#71717a"
                className="w-full h-64"
              />
              <h2 className="text-lg">{title}</h2>
              <p className="text-zinc-400 text-sm">{description}</p>
              {/* Put image as svg when available */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NextJsIntegration;
