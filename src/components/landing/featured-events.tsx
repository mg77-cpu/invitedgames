import React from "react";
import Link from "next/link";
import { Calendar, Users, ArrowRight, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    title: "U6 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U6",
    ageColor: "bg-blue-100 text-blue-700 hover:bg-blue-100",
    date: "Feb 17, 2026",
    participants: "0 participants",
  },
  {
    title: "U6 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U6",
    ageColor: "bg-blue-100 text-blue-700 hover:bg-blue-100",
    date: "Feb 17, 2026",
    participants: "0 participants",
  },
  {
    title: "U8 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U8",
    ageColor: "bg-green-100 text-green-700 hover:bg-green-100",
    date: "Feb 17, 2026",
    participants: "0 participants",
  },
  {
    title: "U10 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U10",
    ageColor: "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
    date: "Feb 17, 2026",
    participants: "0 participants",
  },
  {
    title: "U12 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U12",
    ageColor: "bg-orange-100 text-orange-700 hover:bg-orange-100",
    date: "Feb 17, 2026",
    participants: "0 participants",
  },
  {
    title: "U14 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U14",
    ageColor: "bg-purple-100 text-purple-700 hover:bg-purple-100",
    date: "Feb 17, 2026",
    participants: "0 participants",
  },
];

export function FeaturedEvents() {
  return (
    <section className="bg-[#FAF9F6] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Search & Filters */}
        <div className="mb-12 w-full max-w-3xl mx-auto">
            <div className="relative mb-4">
                <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input 
                    type="text" 
                    placeholder="Search for events, sports, or locations..." 
                    className="h-14 w-full rounded-lg border-gray-200 bg-white pl-12 text-gray-900 placeholder:text-gray-400 focus-visible:border-[#D4AF37] focus-visible:ring-[#D4AF37]"
                />
            </div>
            <div className="flex justify-center gap-4">
                 <Button variant="outline" className="h-10 min-w-[120px] justify-between border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                    All Sports
                    <ChevronDown className="h-4 w-4 opacity-50" />
                 </Button>
                 <Button variant="outline" className="h-10 min-w-[120px] justify-between border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                    All Ages
                    <ChevronDown className="h-4 w-4 opacity-50" />
                 </Button>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-2">Featured Events</h2>
            <p className="text-gray-500 text-sm">Popular upcoming events you won't want to miss</p>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex text-xs h-8 bg-white border-gray-200">
            View All
            <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className="border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white">
              <CardHeader className="pb-3 pt-5">
                <CardTitle className="text-base font-bold text-gray-900">{event.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                     {event.sport}
                  </span>
                  <Badge variant="secondary" className={`rounded-sm px-1.5 py-0 text-[10px] font-medium border-0 ${event.ageColor}`}>
                    {event.ageGroup}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="mr-2 h-3.5 w-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Users className="mr-2 h-3.5 w-3.5" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0 pb-5">
                <Link href="/events/signup" className="w-full">
                  <Button className="w-full h-9 text-xs bg-[#013B26] hover:bg-[#012e1e] text-white">
                    Sign Up
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 flex justify-center md:hidden">
             <Button variant="outline" size="sm" className="text-xs h-9 bg-white border-gray-200 w-full">
                View All
                <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
        </div>
      </div>
    </section>
  );
}
