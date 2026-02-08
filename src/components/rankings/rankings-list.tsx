
"use client";

import React, { useState } from "react";
import { rankingData } from "./rankings-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Trophy, Medal, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tabs = ["Overall", "Soccer", "Tennis", "Basketball", "Golf"];

export function RankingsList() {
  const [activeTab, setActiveTab] = useState("Overall");

  // Filter logic can be enhanced later. For now, we simulate different data or just shuffle/filter.
  // Since the mock data is generic, we'll just use the same data for all tabs but maybe limit or sort differently to simulate changes.
  // In a real app, each sport would have its own data or API endpoint.
  const displayData = rankingData; 

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pb-20">
      {/* Tabs */}
      <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex space-x-2 bg-[#EFEFEA] p-1.5 rounded-full w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab
                  ? "bg-white text-[#013B26] shadow-sm"
                  : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Table Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">
          {activeTab} Club Rankings
        </h2>
        <p className="text-sm text-gray-500">
          Comprehensive rankings across all sports and tournaments
        </p>
      </div>

      {/* List */}
      <div className="space-y-3">
        {/* Header Row (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-4">Club</div>
          <div className="col-span-1 text-center">Championships</div>
          <div className="col-span-2 text-center">Win Rate</div>
          <div className="col-span-2 text-center">Record</div>
          <div className="col-span-2 text-right">Points</div>
        </div>

        {displayData.map((club, index) => (
          <motion.div
            key={club.rank + activeTab} // Key change triggers animation on tab switch
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.03 }}
          >
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="grid grid-cols-12 gap-4 p-4 items-center">
                {/* Rank */}
                <div className="col-span-2 md:col-span-1 flex justify-center">
                  {club.rank === 1 ? (
                    <Trophy className="h-6 w-6 text-[#D4AF37]" fill="#D4AF37" />
                  ) : club.rank === 2 ? (
                    <Medal className="h-6 w-6 text-gray-400" fill="#9CA3AF" />
                  ) : club.rank === 3 ? (
                    <Medal className="h-6 w-6 text-amber-700" fill="#B45309" />
                  ) : (
                    <span className="text-lg font-bold text-gray-500 font-serif">
                      {club.rank}
                    </span>
                  )}
                </div>

                {/* Club Info */}
                <div className="col-span-10 md:col-span-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-base line-clamp-1">
                      {club.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "rounded-sm px-1.5 py-0 text-[10px] font-medium border-0",
                        club.type === "Country Club"
                          ? "bg-green-100 text-green-800"
                          : club.type === "School"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      )}
                    >
                      {club.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-400 font-medium">
                    {club.location}
                  </p>
                </div>

                {/* Mobile: Hide extra stats, show points only */}
                {/* Desktop: Show all stats */}
                <div className="hidden md:block col-span-1 text-center">
                  <span className="block font-bold text-gray-900">{club.championships}</span>
                  <span className="text-[10px] text-gray-400 uppercase">Championships</span>
                </div>

                <div className="hidden md:block col-span-2 text-center">
                  <span className="block font-bold text-gray-900">{club.winRate}</span>
                  <span className="text-[10px] text-gray-400 uppercase">Win Rate</span>
                </div>

                <div className="hidden md:block col-span-2 text-center">
                  <span className="block font-bold text-gray-900">{club.record}</span>
                  <span className="text-[10px] text-gray-400 uppercase">Record</span>
                </div>

                {/* Points & Trend */}
                <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-4 mt-2 md:mt-0 border-t md:border-t-0 pt-2 md:pt-0 border-gray-100">
                   <div className="text-right">
                      <span className="block font-bold text-gray-900 text-lg">{club.points}</span>
                      <span className="text-[10px] text-gray-400 uppercase">Points</span>
                   </div>
                   
                   <div className={cn(
                       "flex items-center gap-1 text-xs font-bold w-16 justify-end",
                       club.trend > 0 ? "text-green-600" : club.trend < 0 ? "text-red-500" : "text-gray-400"
                   )}>
                       {club.trend > 0 ? (
                           <TrendingUp className="h-3 w-3" />
                       ) : club.trend < 0 ? (
                           <TrendingDown className="h-3 w-3" />
                       ) : (
                           <Minus className="h-3 w-3" />
                       )}
                       {club.trend > 0 ? "+" : ""}{club.trend !== 0 ? club.trend : "0"}
                   </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
