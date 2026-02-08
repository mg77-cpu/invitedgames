"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const partners = [
  { name: "Dallas Country Club", location: "Highland Park" },
  { name: "Brook Hollow Golf Club", location: "Dallas" },
  { name: "Northwood Club", location: "Dallas" },
  { name: "Royal Oaks Country Club", location: "Dallas" },
  { name: "Lakewood Country Club", location: "Dallas" },
  { name: "Bent Tree Country Club", location: "Dallas" },
  { name: "The Clubs of Prestonwood", location: "Dallas/Plano" },
  { name: "Gleneagles Country Club", location: "Plano" },
  { name: "Stonebriar Country Club", location: "Frisco" },
  { name: "Las Colinas Country Club", location: "Irving" },
  { name: "The Nelson Golf & Sports Club", location: "Irving" },
  { name: "Dallas Athletic Club", location: "Dallas" },
  { name: "Brookhaven Country Club", location: "Farmers Branch" },
  { name: "Canyon Creek Country Club", location: "Richardson" },
  { name: "Hackberry Creek Country Club", location: "Irving" },
  { name: "Maridoe Golf Club", location: "Carrollton" },
  { name: "TPC Craig Ranch", location: "McKinney" },
  { name: "Vaquero Club", location: "Westlake" },
  { name: "Stonebridge Ranch Country Club", location: "McKinney" },
  { name: "Trophy Club Country Club", location: "Trophy Club" },
];

export function Partners() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12 text-center mb-16">
        <h2 className="text-3xl font-bold font-serif text-gray-900 md:text-4xl mb-4">
          Our Partner Clubs
        </h2>
        <p className="text-gray-500">
          Proud to serve premier country clubs across the Dallas-Fort Worth metroplex
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <motion.div
          key="marquee-slow-400"
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <Card
              key={index}
              className="w-[280px] shrink-0 border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <CardContent className="flex flex-col items-center justify-center py-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
                  <Trophy className="h-6 w-6 text-[#013B26]" />
                </div>
                <h3 className="text-center font-bold text-gray-900 text-base mb-1">
                  {partner.name}
                </h3>
                <p className="text-center text-xs text-gray-500 font-medium uppercase tracking-wide">
                  {partner.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/join">
          <Button
            size="lg"
            className="bg-[#D97706] hover:bg-[#B45309] text-white font-medium rounded-md px-8 h-12"
          >
            Become a Partner Club
          </Button>
        </Link>
      </div>
    </section>
  );
}
