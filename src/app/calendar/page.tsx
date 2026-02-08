"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Types
type Event = {
  id: string;
  title: string;
  category: string;
  date: string; // YYYY-MM-DD
};

// Mock Data
const MOCK_EVENTS: Event[] = [
  { id: "1", title: "Open Tennis Match", category: "Tennis", date: "2026-02-01" },
  { id: "2", title: "Open Tennis Match", category: "Tennis", date: "2026-02-01" },
  { id: "3", title: "Open Tennis Match", category: "Tennis", date: "2026-02-02" },
  { id: "4", title: "Open Tennis Match", category: "Tennis", date: "2026-02-02" },
  { id: "5", title: "Open Tennis Match", category: "Tennis", date: "2026-02-02" },
  { id: "6", title: "Basketball Showdown", category: "Basketball", date: "2026-02-03" },
  { id: "7", title: "Basketball Showdown", category: "Basketball", date: "2026-02-03" },
  { id: "8", title: "Golf Championship", category: "Golf", date: "2026-02-08" },
  { id: "9", title: "Golf Championship", category: "Golf", date: "2026-02-08" },
  { id: "10", title: "Golf Championship", category: "Golf", date: "2026-02-08" },
  { id: "11", title: "Golf Championship", category: "Golf", date: "2026-02-08" },
  { id: "12", title: "U6 Basketball League", category: "Basketball", date: "2026-02-17" },
  { id: "13", title: "U6 Basketball League", category: "Basketball", date: "2026-02-17" },
  { id: "14", title: "U6 Basketball League", category: "Basketball", date: "2026-02-18" },
  { id: "15", title: "Open Basketball", category: "Basketball", date: "2026-02-18" },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // Feb 2026
  const [selectedDate, setSelectedDate] = useState<string>("2026-02-08");

  // Calendar Logic
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sunday
  
  const days = [];
  // Previous month padding
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  // Days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getEventsForDate = (dateStr: string) => {
    return MOCK_EVENTS.filter(e => e.date === dateStr);
  };

  const selectedDateObj = new Date(selectedDate);
  const selectedDateEvents = getEventsForDate(selectedDate);

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today.toISOString().split('T')[0]);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar variant="light" isLoggedIn={true} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3">Event Calendar</h1>
          <p className="text-muted-foreground text-lg">
            View all upcoming sports events in a calendar format
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Grid (Takes up 2 columns) */}
          <div className="lg:col-span-2">
            <Card className="p-6 border shadow-sm">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold">
                  {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={goToToday}>
                    Today
                  </Button>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Days Header */}
              <div className="grid grid-cols-7 mb-4 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-sm font-medium text-muted-foreground py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((date, index) => {
                  if (!date) {
                    return <div key={`empty-${index}`} className="aspect-square" />;
                  }

                  const dateKey = formatDateKey(date);
                  const isSelected = selectedDate === dateKey;
                  const dayEvents = getEventsForDate(dateKey);
                  const hasEvents = dayEvents.length > 0;

                  return (
                    <button
                      key={dateKey}
                      onClick={() => setSelectedDate(dateKey)}
                      className={cn(
                        "relative aspect-square p-2 rounded-xl text-left transition-all border",
                        "hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
                        isSelected 
                          ? "bg-[#B4690E] text-white border-[#B4690E] shadow-md" 
                          : "bg-card hover:bg-accent/50 border-border"
                      )}
                    >
                      <span className={cn(
                        "text-sm font-medium block mb-1",
                        isSelected ? "text-white" : "text-foreground"
                      )}>
                        {date.getDate()}
                      </span>
                      
                      {/* Event Dots/Preview */}
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event, i) => (
                          <div 
                            key={i}
                            className={cn(
                              "text-[10px] truncate px-1 py-0.5 rounded",
                              isSelected 
                                ? "text-white/90 bg-black/10" 
                                : "text-muted-foreground bg-muted"
                            )}
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className={cn(
                            "text-[10px] px-1",
                            isSelected ? "text-white/80" : "text-muted-foreground"
                          )}>
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Side Panel (Takes up 1 column) */}
          <div className="lg:col-span-1">
            <Card className="h-full border shadow-sm flex flex-col">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {selectedDateObj.toLocaleDateString('en-US', { weekday: 'long' })}
                  </span>
                </div>
                <h2 className="text-2xl font-serif font-bold">
                  {selectedDateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </h2>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto max-h-[600px]">
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <div 
                        key={event.id} 
                        className="group flex flex-col gap-1 p-4 rounded-lg border hover:bg-accent transition-colors cursor-pointer"
                      >
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {event.category}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-4">
                    <p>No events scheduled for this date.</p>
                  </div>
                )}
              </div>
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
