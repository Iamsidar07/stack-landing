import Pricing from "@/components/Pricing";
import PricingTable from "@/components/PricingTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing-Stack Auth",
};

export default async function PricingPage() {
  return (
    <section className="px-4 pt-32 md:pt-32 max-w-7xl mx-auto flex flex-col gap-24">
      <Pricing withTopGradientBorder={false} />
      <PricingTable />
    </section>
  );
}
