"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Search, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#013B26] font-sans text-white md:aspect-video aspect-[4/5]">
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
      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-[#D4AF37]" /> {/* Gold Trophy */}
          <span className="font-serif text-xl font-bold tracking-tight text-[#D4AF37]">InvitedGames</span>
        </div>
        
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-200 md:flex">
          <Link href="/events" className="hover:text-white transition-colors">Events</Link>
          <Link href="#" className="hover:text-white transition-colors">Membership</Link>
          <Link href="#" className="hover:text-white transition-colors">Rankings</Link>
          <Link href="#" className="hover:text-white transition-colors">Shop</Link>
        </div>

        <Button 
          className="rounded-md bg-[#D97706] px-6 font-medium text-white hover:bg-[#B45309]"
        >
          Member Portal
        </Button>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 mx-auto flex max-w-5xl flex-1 flex-col items-center justify-center px-4 pt-10 pb-24 text-center md:pt-16">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
          Ages 4 - 16
        </div>

        {/* Headline */}
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
          The Country Club Experience
          <span className="mt-2 block font-light italic">for the Next Generation</span>
        </h1>

        {/* Sub-headline */}
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
          Premier youth sports leagues exclusively for Junior Members. Soccer,
          Tennis, Golf, Pickleball, and more—organized with the hospitality you
          expect.
        </p>

        {/* Features */}
        <div className="mb-12 flex flex-wrap justify-center gap-6 text-sm font-medium text-[#D4AF37]">
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

        {/* Search & Filters */}
        <div className="mb-12 w-full max-w-3xl">
            <div className="relative mb-4">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input 
                    type="text" 
                    placeholder="Search for events, sports, or locations..." 
                    className="h-14 w-full rounded-lg border-white/20 bg-white/5 pl-12 text-white placeholder:text-gray-400 focus-visible:border-[#D4AF37] focus-visible:ring-[#D4AF37]"
                />
            </div>
            <div className="flex justify-center gap-4">
                 <Button variant="outline" className="h-10 min-w-[120px] justify-between border-white/20 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white">
                    All Sports
                    <ChevronDown className="h-4 w-4 opacity-50" />
                 </Button>
                 <Button variant="outline" className="h-10 min-w-[120px] justify-between border-white/20 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white">
                    All Ages
                    <ChevronDown className="h-4 w-4 opacity-50" />
                 </Button>
            </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Button 
                size="lg" 
                className="h-12 min-w-[200px] bg-white px-8 font-semibold text-[#013B26] hover:bg-gray-100"
            >
                Apply for Membership
            </Button>
          </motion.div>

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
        </div>

      </main>
      
      {/* Decorative Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#013B26]/50 to-[#013B26] pointer-events-none" />
    </div>
  );
}
