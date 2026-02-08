"use client";

import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar, 
  Star, 
  Share2,
  Check,
  ArrowRight
} from "lucide-react";

export default function AthletesPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar variant="transparent" isLoggedIn={true} />

      {/* Hero Section */}
      <section className="relative bg-[#7C3AED] text-white pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3 h-3" />
            For Athletes
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Own Your Game, <br />
            <span className="text-white/90 italic font-light">Claim Your Legacy</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Track your progress, showcase your achievements, and compete against the best in the country.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-12 px-8 bg-white text-[#7C3AED] hover:bg-gray-50 font-semibold text-base">
              View Rankings
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent">
              Create Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Level Up Your Career
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools designed to help you track your development and get noticed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Target className="h-6 w-6 text-[#7C3AED]" />}
              title="Performance Tracking"
              description="Log your stats, track your improvement over time, and see how you stack up against the competition."
              features={[
                "Detailed stat tracking",
                "Progress visualization",
                "Performance history"
              ]}
            />
            <FeatureCard 
              icon={<Trophy className="h-6 w-6 text-[#7C3AED]" />}
              title="National Rankings"
              description="Compete for the top spot. View live rankings by age group, region, and sport."
              features={[
                "Live leaderboards",
                "Regional & national rankings",
                "Ranking badges"
              ]}
            />
            <FeatureCard 
              icon={<Star className="h-6 w-6 text-[#7C3AED]" />}
              title="Athlete Profile"
              description="Build your digital athletic resume. Showcase your highlights, stats, and achievements to coaches and scouts."
              features={[
                "Highlight reels",
                "Verified stats",
                "Scout-ready format"
              ]}
            />
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-[#7C3AED]" />}
              title="Tournament Schedule"
              description="Keep track of upcoming tournaments, game times, and venue details in one personalized calendar."
              features={[
                "Personalized schedule",
                "Venue navigation",
                "Game reminders"
              ]}
            />
            <FeatureCard 
              icon={<TrendingUp className="h-6 w-6 text-[#7C3AED]" />}
              title="Skill Development"
              description="Access training resources and tips to improve your game and reach the next level."
              features={[
                "Training resources",
                "Skill challenges",
                "Development goals"
              ]}
            />
            <FeatureCard 
              icon={<Share2 className="h-6 w-6 text-[#7C3AED]" />}
              title="Share Your Success"
              description="Easily share your achievements, rankings, and game highlights on social media."
              features={[
                "Social sharing tools",
                "Achievement cards",
                "Highlight clips"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-[#7C3AED] mb-2">500+</div>
              <div className="text-gray-600 font-medium">Active Tournaments</div>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-[#7C3AED] mb-2">50k+</div>
              <div className="text-gray-600 font-medium">Athletes Competing</div>
            </div>
            <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-[#7C3AED] mb-2">100%</div>
              <div className="text-gray-600 font-medium">Verified Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 md:px-12 bg-[#7C3AED] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Make Your Mark?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join the community of elite athletes pushing their limits and achieving greatness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="h-12 px-8 bg-white text-[#7C3AED] hover:bg-gray-50 font-semibold text-base">
              Create Free Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-8 border-white text-white hover:bg-white/10 font-semibold text-base bg-transparent">
              Search Tournaments
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
        <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
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
                <Check className="h-3.5 w-3.5 text-[#7C3AED] mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
