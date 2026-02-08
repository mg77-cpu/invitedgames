import React from "react";
import Link from "next/link";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface EventProps {
  id: string;
  title: string;
  sport: string;
  ageGroup: string;
  organization: string;
  date: string;
  participants: number;
  status?: "Open" | "Full" | "Waitlist";
}

export function EventCard({ event }: { event: EventProps }) {
  return (
    <Card className="h-full flex flex-col border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group">
      <CardContent className="flex-1 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-xl">
            🏀
          </div>
          {event.status === "Full" && (
            <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">Full</Badge>
          )}
        </div>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-[#013B26] transition-colors">
          {event.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-100">
            {event.sport}
          </Badge>
          <Badge variant="outline" className="text-gray-600 border-gray-200">
            {event.ageGroup}
          </Badge>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-gray-900">
            {event.organization}
          </p>
          
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-2 h-4 w-4 text-gray-400" />
            {event.date}
          </div>
          
          <div className="flex items-center text-sm text-gray-500">
            <Users className="mr-2 h-4 w-4 text-gray-400" />
            {event.participants} participants
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button 
          variant="outline" 
          className="w-full justify-between group-hover:border-[#013B26] group-hover:text-[#013B26] transition-colors"
          asChild
        >
          <Link href={`/events/${event.id}`}>
            View Details
            <ArrowRight className="h-4 w-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
