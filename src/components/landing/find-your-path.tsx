import React from "react";
import Link from "next/link";
import { Building2, ClipboardList, Heart, Trophy, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const paths = [
  {
    icon: Building2,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
    title: "Club Directors",
    description: "Manage membership, budgets, and multi-sport programs",
    features: [
      "League membership management",
      "Budget and pricing tools",
      "Multi-team oversight",
      "Club analytics dashboard",
    ],
    href: "/club-directors",
  },
  {
    icon: ClipboardList,
    iconColor: "text-yellow-600",
    iconBg: "bg-yellow-100",
    title: "Coaches",
    description: "Build rosters, schedule practices, and track performance",
    features: [
      "Team roster management",
      "Tournament registration",
      "Schedule coordination",
      "Performance tracking",
    ],
    href: "/coaches",
  },
  {
    icon: Heart,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "Parents",
    description: "Follow your athlete's journey and stay connected",
    features: [
      "Event schedules & locations",
      "Real-time score updates",
      "Rankings and achievements",
      "Team communication",
    ],
    href: "/parents",
  },
  {
    icon: Trophy,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
    title: "Athletes",
    description: "Compete, climb rankings, and chase championships",
    features: [
      "Personal rankings profile",
      "Competition history",
      "Upcoming tournaments",
      "Achievement tracking",
    ],
    href: "/athletes",
  },
];

export function FindYourPath() {
  return (
    <section className="bg-[#F8FAF9] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 md:text-4xl mb-4">Find Your Path</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you're running a club, coaching a team, supporting an athlete, or
            competing yourself—we have tools designed for you
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {paths.map((path, index) => {
            const CardContentWrapper = ({ children }: { children: React.ReactNode }) => (
              <Card className="border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                {children}
              </Card>
            );

            const content = (
              <>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${path.iconBg}`}>
                    <path.icon className={`h-8 w-8 ${path.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">{path.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-500 min-h-[40px]">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {path.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600">
                        <Check className="mr-2 h-3.5 w-3.5 text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button asChild variant="outline" className="w-full justify-between text-xs h-9 border-gray-200 text-gray-700 hover:text-gray-900 bg-white">
                    <div>
                      Learn More
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Button>
                </CardFooter>
              </>
            );

            return path.href ? (
              <Link key={index} href={path.href} className="block h-full">
                <CardContentWrapper>{content}</CardContentWrapper>
              </Link>
            ) : (
              <div key={index} className="block h-full">
                <CardContentWrapper>{content}</CardContentWrapper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
