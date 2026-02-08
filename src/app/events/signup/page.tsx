"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Building, Trophy } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function EventSignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Navbar variant="light" isLoggedIn={true} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Back Link */}
        <Link 
          href="/events" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Event Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Event Info Card */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">U6 Basketball Camp</h1>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Basketball</span>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 rounded-sm px-1.5 py-0 text-xs">U6</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                      <Calendar className="h-5 w-5" />
                      Date & Time
                    </div>
                    <p className="text-muted-foreground text-sm pl-7">
                      Tuesday, February 17, 2026
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-900 font-semibold mb-1">
                      <Users className="h-5 w-5" />
                      Participants
                    </div>
                    <p className="text-muted-foreground text-sm pl-7">
                      0 registered
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hosted By Card */}
            <Card className="border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-semibold">Hosted By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-slate-100 flex items-center justify-center">
                    <Building className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Youth Sports Academy</h3>
                    <p className="text-sm text-muted-foreground">School</p>
                    <p className="text-sm text-muted-foreground mt-1">Youth sports programs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-1">
            <Card className="border-border shadow-sm sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any special requirements or notes..."
                    className="min-h-[100px] resize-none"
                  />
                </div>

                <Button className="w-full bg-[#013B26] hover:bg-[#012d1d] text-white h-12 text-base font-semibold">
                  Register Now
                </Button>
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
