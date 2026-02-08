"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navbar } from "@/components/layout/navbar";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#013B26] font-sans text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg" // Placeholder: Replace with actual asset path
          alt="Youth sports country club experience background"
          fill
          className="object-cover opacity-20"
          priority // Hero image should be eager loaded
          sizes="100vw"
        />
      </div>
      
      {/* Navbar (Integrated into Hero for transparency effect) */}
      <Navbar variant="transparent" isLoggedIn={true} />

      {/* Hero Content */}
      <main className="relative z-10 mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-20 pb-12 text-center md:pt-32 md:pb-16">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
          Ages 4 - 16
        </div>

        {/* Headline */}
        <h1 className="mb-4 font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
          The Country Club Experience
          <span className="mt-2 block font-light italic">for the Next Generation</span>
        </h1>

        {/* Sub-headline */}
        <p className="mb-6 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
          Premier youth sports leagues exclusively for Junior Members. Soccer,
          Tennis, Golf, Pickleball, and more—organized with the hospitality you
          expect.
        </p>

        {/* Features */}
        <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-[#D4AF37]">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span>Invitation Only</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span>National Rankings</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span>Championship Tournaments</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/join">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button 
                  size="lg" 
                  className="h-12 min-w-[200px] bg-white px-8 font-semibold text-[#013B26] hover:bg-gray-100"
              >
                  Apply for a Membership
              </Button>
            </motion.div>
          </Link>

          <Link href="/events">
            <motion.div
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-12 min-w-[200px] border-white/30 bg-transparent px-8 text-white hover:bg-white/10"
              >
                  View Events
              </Button>
            </motion.div>
          </Link>
        </div>

      </main>
      
      {/* Decorative Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#013B26]/50 to-[#013B26] pointer-events-none" />
    </div>
  );
}
