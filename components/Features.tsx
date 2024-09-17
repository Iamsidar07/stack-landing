import {
  BriefcaseBusiness,
  Globe,
  Link,
  Lock,
  LucidePersonStanding,
  Search,
  Webhook,
} from "lucide-react";
import React from "react";
import FeatureRow from "./FeatureRow";

const AUTHENTICATION = [
  {
    title: "Password, SSO, 2FA, and more",
    description:
      "Beautifully styled components to help you get started quickly. No need to worry about design and internal logic.",
    icon: Lock,
    actionText: "Get Started",
    actionLink: "/",
  },
  {
    title: "Headless or headful UI",
    description:
      "Integrate our shadcn/ui components, or build your own with our headless SDK.",
    icon: LucidePersonStanding,
    actionText: "Learn More",
    actionLink: "/",
  },
  {
    title: "JWTs without the JWTs",
    description:
      "Stack manages JWTs and access tokens for you, so you get the performance benefits without ever having to think about them.",
    icon: LucidePersonStanding,
    actionText: "Learn More",
    actionLink: "/",
  },
];
const AUTHORIZATION = [
  {
    title: "Organizations & teams",
    description:
      "Manage B2B customers with orgs & teams, supporting email invitations, team components, and management tools.",
    icon: BriefcaseBusiness,
    actionText: "Learn More",
    actionLink: "/",
  },
  {
    title: "Permissions & RBAC",
    description: "Define arbitrary permission trees and org-wide roles.",
    icon: LucidePersonStanding,
    actionText: "Learn More",
    actionLink: "/",
  },
  {
    title: "3rd-party OAuth",
    description:
      "Access third-party OAuth APIs such as Gmail or OneDrive without having to think about OAuth flows or token refreshes.",
    icon: Link,
    actionText: "Learn More",
    actionLink: "/",
  },
];
const USER_MANAGEMENT = [
  {
    title: "REST API",
    description:
      "Use our client and server APIs to build custom front- and backends.",
    icon: Globe,
    actionText: "Learn More",
    actionLink: "/",
  },
  {
    title: "Impersonation",
    description: "Impersonate users to debug issues or help your customers.",
    icon: Search,
    actionText: "Go To Dashboard",
    actionLink: "/",
  },
  {
    title: "Webhooks",
    description: "Sync with Slack, your database, or any other service.",
    icon: Webhook,
    actionText: "Learn More",
    actionLink: "/",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto w-full rounded-3xl px-4 py-12 sm:py-24 flex flex-col gap-4 relative z-[1]"
    >
      <div
        aria-hidden="true"
        className="line-bg left-1/2 top-0 w-[40%] center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        aria-hidden="true"
        className="-top-1 left-1/2 h-[100px] w-[70%] md:h-[300px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2 conic-bg"
      ></div>

      <h2 className="text-2xl text-center md:text-left md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-zinc-400 to-zinc-700 mb-12 gradient-text-support">
        Secure access, <br /> Seamless integration.
      </h2>
      <FeatureRow features={AUTHENTICATION} />
      <FeatureRow features={AUTHORIZATION} />
      <FeatureRow features={USER_MANAGEMENT} />
    </section>
  );
};

export default Features;
