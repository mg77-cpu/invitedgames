"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Trophy, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  ClipboardList,
  Check,
  ArrowRight
} from "lucide-react";

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar variant="transparent" isLoggedIn={true} />

      {/* Hero Section */}
      <section className="relative bg-[#E6A60F] text-white pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
            <ClipboardList className="w-3 h-3" />
            For Coaches & Team Managers
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Focus on Coaching, <br />
            <span className="text-white/90 italic font-light">We Handle the Rest</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Manage rosters, register for tournaments, track performance, and communicate with players—all from one powerful platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-12 px-8 bg-white text-[#E6A60F] hover:bg-gray-50 font-semibold text-base">
              Browse Tournaments
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Built for Coaches Who Win
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your team and compete at the highest level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Users className="h-6 w-6 text-[#E6A60F]" />}
              title="Roster Management"
              description="Build and maintain your team roster with player profiles, contact info, positions, and availability tracking."
              features={[
                "Player profiles & stats",
                "Availability tracking",
                "Emergency contacts"
              ]}
            />
            <FeatureCard 
              icon={<Trophy className="h-6 w-6 text-[#E6A60F]" />}
              title="Tournament Registration"
              description="Register your team for tournaments in seconds. View schedules, brackets, and results in real-time."
              features={[
                "One-click team registration",
                "Live brackets & schedules",
                "Automatic payment processing"
              ]}
            />
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-[#E6A60F]" />}
              title="Schedule Coordination"
              description="Keep your team on track with a unified calendar for practices, games, and tournaments."
              features={[
                "Practice & game scheduling",
                "Automatic reminders",
                "Calendar sync (Google/Outlook)"
              ]}
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6 text-[#E6A60F]" />}
              title="Performance Tracking"
              description="Monitor individual and team performance with stats, rankings, and progress reports."
              features={[
                "Player statistics tracking",
                "Team rankings & standings",
                "Season progress reports"
              ]}
            />
            <FeatureCard 
              icon={<MessageSquare className="h-6 w-6 text-[#E6A60F]" />}
              title="Team Communication"
              description="Stay connected with players and parents through built-in messaging and announcements."
              features={[
                "Team announcements",
                "Direct messaging",
                "Parent notifications"
              ]}
            />
            <FeatureCard 
              icon={<ClipboardList className="h-6 w-6 text-[#E6A60F]" />}
              title="Game Day Tools"
              description="Access lineups, substitution tracking, and score reporting from your mobile device on game day."
              features={[
                "Digital lineup cards",
                "Substitution tracking",
                "Mobile score reporting"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Get Started in Minutes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple workflow from roster to championship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-200 -z-10" />
            
            <WorkflowStep 
              number="1"
              title="Build Your Roster"
              description="Add players with contact info, positions, and availability"
            />
            <WorkflowStep 
              number="2"
              title="Register for Events"
              description="Browse tournaments and register your team with one click"
            />
            <WorkflowStep 
              number="3"
              title="Manage Schedule"
              description="Coordinate practices, games, and travel with your calendar"
            />
            <WorkflowStep 
              number="4"
              title="Track Performance"
              description="Monitor stats, rankings, and progress throughout the season"
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 md:px-12 bg-[#E6A60F] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Lead Your Team?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of coaches using Invited Games to manage their teams and compete for championships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-12 px-8 bg-white text-[#E6A60F] hover:bg-gray-50 font-semibold text-base">
              Browse Tournaments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent">
              Contact Us
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
        <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center mb-4">
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
                <Check className="h-3.5 w-3.5 text-[#E6A60F] mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

function WorkflowStep({ 
  number, 
  title, 
  description 
}: { 
  number: string, 
  title: string, 
  description: string 
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#FFF9E5] text-[#E6A60F] text-xl font-bold flex items-center justify-center mb-6 shadow-sm border border-yellow-100 relative z-10">
        {number}
      </div>
      <h3 className="text-lg font-bold font-serif text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}
