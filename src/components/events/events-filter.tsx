"use client";

import React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export function EventsFilter() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <Input 
          placeholder="Search events..." 
          className="pl-10 bg-white border-gray-200 focus-visible:ring-[#013B26]"
        />
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <select className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#013B26] focus:outline-none focus:ring-1 focus:ring-[#013B26]">
            <option>All Sports</option>
            <option>Basketball</option>
            <option>Soccer</option>
            <option>Tennis</option>
            <option>Golf</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#013B26] focus:outline-none focus:ring-1 focus:ring-[#013B26]">
            <option>All Ages</option>
            <option>U9</option>
            <option>U11</option>
            <option>U13</option>
            <option>U15</option>
            <option>High School</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative flex-1">
          <select className="w-full appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-[#013B26] focus:outline-none focus:ring-1 focus:ring-[#013B26]">
            <option>All Organizations</option>
            <option>Youth Sports Academy</option>
            <option>Dallas Country Club</option>
            <option>Premier Hoops</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500 pt-2">
        <span>Showing 23 events</span>
        <button className="flex items-center text-[#013B26] font-medium hover:underline">
          <Filter className="mr-2 h-4 w-4" />
          Advanced Filters
        </button>
      </div>
    </div>
  );
}
