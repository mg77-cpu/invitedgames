
import React from "react";
import { RankingsList } from "@/components/rankings/rankings-list";
import { Methodology } from "@/components/rankings/methodology";
import { Trophy } from "lucide-react";

export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-24">
      {/* Page Header */}
      <div className="bg-[#FAF9F6] border-b border-gray-100/50 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-[#013B26]" />
            <h1 className="text-4xl font-bold font-serif text-[#013B26]">
              National Rankings
            </h1>
          </div>
          <p className="text-gray-500 max-w-2xl text-lg leading-relaxed">
            Official rankings from Invited Games league and tournament competitions. 
            Updated weekly based on performance in our operated events, strength of schedule, and championship victories.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-12">
        <RankingsList />
      </div>

      {/* Methodology Footer */}
      <Methodology />
    </main>
  );
}
