import StartBuilding from "@/components/StartBuilding";
import Features from "@/components/Features";
import GettingStarted from "@/components/GettingStarted";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import NextJsIntegration from "@/components/NextJsIntegration";
import ComparasionWithCompetitors from "@/components/ComparasionWithCompetitors";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center  min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Features />
      <NextJsIntegration />
      <ComparasionWithCompetitors />
      <Testimonials />
      <Pricing />
      <GettingStarted />
      <StartBuilding />
    </main>
  );
}
