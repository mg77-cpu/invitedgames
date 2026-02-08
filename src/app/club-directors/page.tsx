"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, DollarSign, Users, BarChart3, Calendar, Shield, Building } from "lucide-react";

export default function ClubDirectorsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar variant="transparent" isLoggedIn={true} />

      {/* Hero Section */}
      <section className="relative bg-[#013B26] text-white pt-32 pb-24 px-6 md:px-12 text-center overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
            For Club Directors & HS ADs
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Run Elite Athletic Programs <br />
            <span className="text-[#D4AF37] italic font-light">With Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Secure Elite membership, manage budgets, oversee multiple teams, and deliver 
            championship-level experiences for your club or school.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/join">
              <Button className="h-12 px-8 bg-white text-[#013B26] hover:bg-gray-100 font-semibold text-base">
                Apply for Membership
              </Button>
            </Link>
            <Button variant="outline" className="h-12 px-8 border-white/30 text-white hover:bg-white/10 font-semibold text-base">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#013B26] mb-4">
              Everything You Need to Lead
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tools designed for directors managing multi-sport programs, budgets, and stakeholder expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<DollarSign className="h-6 w-6 text-emerald-600" />}
              title="Budget Management"
              description="Financial planning tools for athletic fees, tournament costs, coaches salaries, and operational expenses for multiple teams."
            />
            <FeatureCard 
              icon={<Users className="h-6 w-6 text-emerald-600" />}
              title="Multi-Team Oversight"
              description="Manage all your club's teams across multiple sports from a single dashboard. Assign coaches, track rosters, and monitor performance."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6 text-emerald-600" />}
              title="Analytics & Reporting"
              description="Gain insights into your club's success metrics, participation rates, and financial growth with detailed reporting tools."
            />
            <FeatureCard 
              icon={<Calendar className="h-6 w-6 text-emerald-600" />}
              title="Master Calendar"
              description="View all tournaments, practices, and events across your entire athletic program in one unified calendar view."
            />
            <FeatureCard 
              icon={<Shield className="h-6 w-6 text-emerald-600" />}
              title="Compliance & Safety"
              description="Ensure your program meets league standards with built-in compliance tracking, waiver management, and safety protocols."
            />
            <FeatureCard 
              icon={<Building className="h-6 w-6 text-emerald-600" />}
              title="Club Profile & Branding"
              description="Create a custom public profile for your program to attract top talent, showcase achievements, and build your brand."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#013B26] mb-4">
              Choose Your Tier
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible membership options that scale with your program size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Bronze Tier */}
            <PricingCard 
              tier="Bronze"
              price="$2,500"
              description="Small programs"
              features={[
                "Up to 5 teams",
                "Up to 50 athletes total",
                "Basic club profile"
              ]}
            />
            
            {/* Silver Tier (Popular) */}
            <div className="relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00A651] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                Most Popular
              </div>
              <PricingCard 
                tier="Silver"
                price="$5,000"
                description="Active clubs"
                features={[
                  "Up to 15 teams",
                  "Up to 200 athletes total",
                  "10% tournament discount",
                  "Enhanced analytics"
                ]}
                highlighted={true}
              />
            </div>

            {/* Gold Tier */}
            <PricingCard 
              tier="Gold"
              price="$10,000"
              description="Elite programs"
              features={[
                "Unlimited teams & rosters",
                "15% tournament discount",
                "Dedicated account manager",
                "Priority scheduling"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 md:px-12 bg-[#00A651] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Elevate Your Program?
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join 500+ country clubs and private schools delivering championship experiences.
          </p>
          <Link href="/join">
            <Button className="h-12 px-8 bg-white text-[#00A651] hover:bg-gray-100 font-semibold text-base">
              Apply for Membership
            </Button>
          </Link>
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

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function PricingCard({ 
  tier, 
  price, 
  description, 
  features, 
  highlighted = false 
}: { 
  tier: string, 
  price: string, 
  description: string, 
  features: string[], 
  highlighted?: boolean 
}) {
  return (
    <Card className={`h-full border transition-all ${highlighted ? 'border-[#00A651] shadow-lg ring-1 ring-[#00A651]/20' : 'border-slate-200 shadow-sm'}`}>
      <CardHeader className="text-center pb-8 border-b border-slate-100">
        <h3 className="text-lg font-bold text-[#D4AF37] uppercase tracking-wider mb-2">{tier}</h3>
        <div className="text-sm text-muted-foreground mb-4">{description}</div>
        <div className="text-4xl font-bold text-gray-900 mb-1">{price}</div>
        <div className="text-xs text-muted-foreground">per year</div>
      </CardHeader>
      <CardContent className="pt-8">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
              <Check className="h-4 w-4 text-[#00A651] mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button 
            className={`w-full ${highlighted ? 'bg-[#00A651] hover:bg-[#008c44]' : 'bg-[#013B26] hover:bg-[#012d1d]'} text-white`}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
