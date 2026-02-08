"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Bell, 
  Trophy, 
  MapPin, 
  Camera, 
  Heart,
  Check,
  ArrowRight
} from "lucide-react";

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar variant="transparent" isLoggedIn={true} />

      {/* Hero Section */}
      <section className="relative bg-[#1A66FF] text-white pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
            <Heart className="w-3 h-3" />
            For Parents & Families
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Stay Connected to <br />
            <span className="text-white/90 italic font-light">Every Moment</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Follow your athlete's journey with real-time updates, schedules, rankings, and achievements—all in one place
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-12 px-8 bg-white text-[#1A66FF] hover:bg-gray-50 font-semibold text-base">
              View Events
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent">
              Check Rankings
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Everything You Need to Stay Involved
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools designed to keep you informed and connected to your athlete's competitive journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-[#1A66FF]" />}
              title="Event Schedules"
              description="Never miss a game with complete schedules, locations, and directions for all tournaments and events."
              features={[
                "Full season calendar",
                "Game times & locations",
                "Add to your calendar"
              ]}
            />
            <FeatureCard 
              icon={<Bell className="h-6 w-6 text-[#1A66FF]" />}
              title="Real-Time Updates"
              description="Get instant notifications for schedule changes, scores, and important team announcements."
              features={[
                "Live score updates",
                "Schedule change alerts",
                "Team announcements"
              ]}
            />
            <FeatureCard 
              icon={<Trophy className="h-6 w-6 text-[#1A66FF]" />}
              title="Rankings & Stats"
              description="Track your athlete's progress with national rankings, performance stats, and achievement milestones."
              features={[
                "National rankings",
                "Performance statistics",
                "Achievement badges"
              ]}
            />
            <FeatureCard 
              icon={<MapPin className="h-6 w-6 text-[#1A66FF]" />}
              title="Venue Information"
              description="Get detailed venue information including addresses, parking, amenities, and directions."
              features={[
                "Venue addresses & maps",
                "Parking information",
                "Facility amenities"
              ]}
            />
            <FeatureCard 
              icon={<Camera className="h-6 w-6 text-[#1A66FF]" />}
              title="Photos & Highlights"
              description="Access tournament photos, game highlights, and memorable moments from your athlete's season."
              features={[
                "Event photo galleries",
                "Game highlights",
                "Download & share"
              ]}
            />
            <FeatureCard 
              icon={<Heart className="h-6 w-6 text-[#1A66FF]" />}
              title="Team Communication"
              description="Stay in touch with coaches and other parents through team messaging and announcements."
              features={[
                "Coach messages",
                "Parent group chat",
                "Important updates"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Parents Love Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Parents Love Invited Games
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peace of mind and connection to every step of your athlete's journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <TestimonialItem 
              title="Never Miss a Moment"
              description="Get real-time updates on scores, schedule changes, and important announcements so you're always in the loop."
            />
            <TestimonialItem 
              title="Track Progress"
              description="Watch your athlete climb the rankings and celebrate achievements with detailed stats and milestones."
            />
            <TestimonialItem 
              title="Stay Organized"
              description="One calendar for all tournaments, practices, and events. Sync to your phone and never double-book again."
            />
            <TestimonialItem 
              title="Connect with Community"
              description="Join a network of parents supporting their athletes in elite competition across the country."
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 md:px-12 bg-[#1A66FF] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Be Part of Their Journey
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of families following their athletes in America's premier private club league
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-12 px-8 bg-white text-[#1A66FF] hover:bg-gray-50 font-semibold text-base">
              Browse Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent">
              View Rankings
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Badge */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-black text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Made with Manus
        </div>
      </div>
    </div>
  );
}

// Sub-components

function FeatureCard({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  features: string[] 
}) {
  return (
    <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <div className="mt-auto">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                <Check className="h-3.5 w-3.5 text-[#1A66FF] mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function TestimonialItem({ 
  title, 
  description 
}: { 
  title: string, 
  description: string 
}) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
        <Check className="h-6 w-6 text-[#1A66FF]" />
      </div>
      <div>
        <h3 className="text-lg font-bold font-serif text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
