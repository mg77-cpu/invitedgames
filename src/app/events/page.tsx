"use client";

import React from "react";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EventsFilter } from "@/components/events/events-filter";
import { EventCard, EventProps } from "@/components/events/event-card";

// Mock Data
const EVENTS: EventProps[] = [
  {
    id: "1",
    title: "U9 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U9",
    organization: "Youth Sports Academy",
    date: "Feb 17, 2025",
    participants: 4,
    status: "Open"
  },
  {
    id: "2",
    title: "U12 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U12",
    organization: "Youth Sports Academy",
    date: "Feb 17, 2025",
    participants: 12,
    status: "Open"
  },
  {
    id: "3",
    title: "U15 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U15",
    organization: "Youth Sports Academy",
    date: "Feb 17, 2025",
    participants: 8,
    status: "Full"
  },
  {
    id: "4",
    title: "U10 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U10",
    organization: "Youth Sports Academy",
    date: "Feb 18, 2025",
    participants: 6,
    status: "Open"
  },
  {
    id: "5",
    title: "Boys Basketball Camp",
    sport: "Basketball",
    ageGroup: "Boys",
    organization: "Youth Sports Academy",
    date: "Feb 18, 2025",
    participants: 15,
    status: "Open"
  },
  {
    id: "6",
    title: "U13 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U13",
    organization: "Youth Sports Academy",
    date: "Feb 19, 2025",
    participants: 9,
    status: "Open"
  },
  {
    id: "7",
    title: "U18 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U18",
    organization: "Youth Sports Academy",
    date: "Feb 19, 2025",
    participants: 20,
    status: "Waitlist"
  },
  {
    id: "8",
    title: "U8 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U8",
    organization: "Youth Sports Academy",
    date: "Feb 19, 2025",
    participants: 5,
    status: "Open"
  },
  {
    id: "9",
    title: "U6 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U6",
    organization: "Youth Sports Academy",
    date: "Feb 19, 2025",
    participants: 3,
    status: "Open"
  },
  {
    id: "10",
    title: "U8 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U8",
    organization: "Youth Sports Academy",
    date: "Feb 18, 2025",
    participants: 7,
    status: "Open"
  },
  {
    id: "11",
    title: "Open Basketball Camp",
    sport: "Basketball",
    ageGroup: "Open",
    organization: "Youth Sports Academy",
    date: "Feb 20, 2025",
    participants: 12,
    status: "Open"
  },
  {
    id: "12",
    title: "U9 Basketball Camp",
    sport: "Basketball",
    ageGroup: "U9",
    organization: "Youth Sports Academy",
    date: "Feb 20, 2025",
    participants: 4,
    status: "Open"
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <Link href="/" className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-[#013B26]" />
            <span className="font-serif text-xl font-bold tracking-tight text-[#013B26]">InvitedGames</span>
          </Link>
          
          <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/events" className="text-[#013B26] font-semibold">Events</Link>
            <Link href="#" className="hover:text-[#013B26] transition-colors">Calendar</Link>
            <Button 
              className="bg-[#013B26] text-white hover:bg-[#012d1d] px-6 rounded-full"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold font-serif text-gray-900 mb-3">Browse Events</h1>
          <p className="text-gray-500 text-lg">
            Discover sports events happening at country clubs, schools, and community centers.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-100">
          <EventsFilter />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Pagination / Load More */}
        <div className="mt-16 flex justify-center">
          <Button variant="outline" className="px-8 border-gray-200 text-gray-600 hover:text-[#013B26] hover:border-[#013B26]">
            Load More Events
          </Button>
        </div>
      </main>
    </div>
  );
}
