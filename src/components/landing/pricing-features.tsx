import React from "react";
import { Trophy, Crown, Sparkles, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "League Access",
    description: "Full participation in all Invited Games competitions and tournaments",
    icon: Trophy,
  },
  {
    title: "National Rankings",
    description: "Real-time rankings updated weekly across all sports and age groups",
    icon: Crown,
  },
  {
    title: "Championship Path",
    description: "Eligibility for regional and national championship tournaments",
    icon: Sparkles,
  },
  {
    title: "Management Tools",
    description: "Online roster management, scheduling, and team communication",
    icon: Users,
  },
];

export function PricingFeatures() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            What's Included in Every Tier
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Core features available to all league members, regardless of tier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <feature.icon className="h-10 w-10 text-[#22C55E]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
