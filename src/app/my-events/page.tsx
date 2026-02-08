import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function MyEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="light" isLoggedIn={true} />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">My Events</h1>
            <p className="text-muted-foreground text-lg">
              Manage your registrations and created events
            </p>
          </div>
          <Button className="bg-[#013B26] hover:bg-[#012d1d] text-white px-6">
            Create Event
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <Button 
            variant="secondary" 
            className="bg-[#efebe6] hover:bg-[#e5e0d8] text-foreground font-medium rounded-md px-4 py-2"
          >
            Registered Events
          </Button>
          <Button 
            variant="ghost" 
            className="bg-[#efebe6] hover:bg-[#e5e0d8] text-muted-foreground hover:text-foreground font-medium rounded-md px-4 py-2"
          >
            Created Events
          </Button>
        </div>

        {/* Empty State Card */}
        <Card className="min-h-[400px] flex flex-col items-center justify-center p-12 text-center border shadow-sm">
          <p className="text-gray-500 text-lg mb-6">
            You haven't registered for any events yet
          </p>
          <Button className="bg-[#013B26] hover:bg-[#012d1d] text-white px-8 py-6 h-auto text-base">
            Browse Events
          </Button>
        </Card>
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
