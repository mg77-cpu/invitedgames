import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CTAFooter() {
  return (
    <section className="relative bg-[#013B26] py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image
            src="/hero-bg.jpg"
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
         />
      </div>
      
      {/* Decorative Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#013B26] via-[#013B26]/80 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold font-serif text-white mb-6 md:text-4xl">
          Ready to Join the League?
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Start your application today and bring championship-level competition to your club or school
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-white text-[#013B26] hover:bg-gray-100 font-semibold px-8 h-12 w-full sm:w-auto"
          >
            Apply for Membership
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 h-12 w-full sm:w-auto bg-transparent"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Sales
          </Button>
        </div>

        <p className="text-gray-400 text-xs opacity-80">
          Questions? Call us at (555) 123-4567 or email membership@invitedgames.com
        </p>
      </div>
    </section>
  );
}
