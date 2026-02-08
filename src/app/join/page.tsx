"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, Trophy, Shield, Settings, Laptop } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Navbar variant="light" isLoggedIn={false} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">Join the League</h1>
          <p className="text-lg text-muted-foreground">
            Apply for membership in America's premier private club league
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Benefits & Info */}
          <div className="space-y-6 lg:col-span-1">
            {/* Benefits Card */}
            <Card className="border-border shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5 text-emerald-600" />
                  Membership Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <BenefitItem 
                  title="National Rankings"
                  description="Track your club's performance across all sports"
                />
                <BenefitItem 
                  title="Championship Events"
                  description="Compete in exclusive tournaments"
                />
                <BenefitItem 
                  title="Professional Management"
                  description="We handle scheduling, brackets, and results"
                />
                <BenefitItem 
                  title="Technology Platform"
                  description="Modern tools for teams and athletes"
                />
              </CardContent>
            </Card>

            {/* Invitation Only Card */}
            <Card className="bg-[#FFFBEB] border-yellow-100 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3 text-[#B45309] font-bold">
                  <Sparkles className="h-5 w-5" />
                  Invitation Only
                </div>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  Membership is selective and limited to established private clubs and schools. 
                  Our vetting process ensures a competitive and prestigious league environment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Club Application</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Complete the form below to apply for league membership
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  {/* Organization Information */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold flex items-center gap-2 text-gray-900">
                      <Shield className="h-4 w-4" />
                      Organization Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="clubName">Club/School Name *</Label>
                        <Input id="clubName" placeholder="e.g., Preston Trail Golf Club" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="orgType">Organization Type *</Label>
                        <div className="relative">
                          <select 
                            id="orgType"
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                          >
                            <option value="" disabled selected>Select type</option>
                            <option value="private_club">Private Club</option>
                            <option value="private_school">Private School</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="memberCount">Number of Members</Label>
                        <Input id="memberCount" placeholder="e.g., 500" type="number" />
                      </div>
                    </div>
                  </div>

                  {/* Primary Contact */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold flex items-center gap-2 text-gray-900">
                      <UsersIcon className="h-4 w-4" />
                      Primary Contact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input id="contactName" placeholder="Full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="email@example.com" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold flex items-center gap-2 text-gray-900">
                      Organization Location
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="address">Street Address *</Label>
                        <Input id="address" placeholder="123 Main Street" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" placeholder="Dallas" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Input id="state" placeholder="TX" />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <Label htmlFor="zip">ZIP Code *</Label>
                        <Input id="zip" placeholder="75001" />
                      </div>
                    </div>
                  </div>

                  {/* League Participation */}
                  <div className="space-y-4">
                    <h3 className="text-base font-bold flex items-center gap-2 text-gray-900">
                      League Participation
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="tier">Preferred Membership Tier *</Label>
                        <div className="relative">
                          <select 
                            id="tier"
                            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                          >
                            <option value="" disabled selected>Select tier</option>
                            <option value="bronze">Bronze</option>
                            <option value="silver">Silver</option>
                            <option value="gold">Gold</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground underline cursor-pointer hover:text-foreground">View tier details</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sports">Primary Sports of Interest *</Label>
                        <Input id="sports" placeholder="e.g., Tennis, Soccer, Swimming" />
                        <p className="text-xs text-muted-foreground">List the sports your club wants to compete in</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea 
                          id="additionalInfo" 
                          placeholder="Tell us more about your club and why you'd like to join..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-[#013B26] hover:bg-[#012d1d] text-white h-12 text-base font-semibold">
                      Submit Application
                    </Button>
                    <p className="text-xs text-center text-muted-foreground mt-3">
                      By submitting, you agree to be contacted by our membership team
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

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

function BenefitItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-full bg-emerald-100 p-1">
        <Check className="h-3 w-3 text-emerald-600" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
