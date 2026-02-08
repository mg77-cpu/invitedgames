import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FindYourPath } from "@/components/landing/find-your-path";
import { FeaturedEvents } from "@/components/landing/featured-events";
import { Partners } from "@/components/landing/partners";
import { Pricing } from "@/components/landing/pricing";
import { PricingFeatures } from "@/components/landing/pricing-features";
import { FAQ } from "@/components/landing/faq";
import { CTAFooter } from "@/components/landing/cta-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <HowItWorks />
      <FindYourPath />
      <Partners />
      <FeaturedEvents />
      
      {/* Happening This Week Section Header */}
      <section className="bg-[#FAF9F6] pb-20 pt-10">
         <div className="mx-auto max-w-7xl px-6 md:px-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Happening This Week</h2>
            <p className="text-gray-500 text-sm">Don't miss these events starting soon</p>
         </div>
      </section>

      <Pricing />
      <PricingFeatures />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
