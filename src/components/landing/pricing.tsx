"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Trophy, Crown, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  const plans = [
    {
      name: "Bronze",
      icon: Trophy,
      description: "Perfect for Getting Started",
      price: billingCycle === "annual" ? "2,500" : "250",
      period: billingCycle === "annual" ? "per year" : "per month",
      save: billingCycle === "annual" ? "Save $500" : null,
      bestFor: "Ideal for clubs testing league participation or with 1-2 competitive teams",
      features: [
        { name: "League membership for your organization", included: true },
        { name: "Up to 3 sports programs", included: true },
        { name: "Up to 5 teams per sport", included: true },
        { name: "National rankings inclusion", included: true },
        { name: "Basic club profile page", included: true },
        { name: "Online roster management", included: true },
        { name: "Email support (48hr response)", included: true },
        { name: "Championship qualification eligibility", included: true },
        { name: "Discounted tournament entry fees", included: false },
        { name: "Priority event scheduling", included: false },
        { name: "Dedicated account manager", included: false },
        { name: "Custom branding options", included: false },
      ],
      tournamentFees: "$150 per team",
      teamFee: "Small clubs, single sport programs, schools testing league participation",
      popular: false,
      color: "text-amber-700",
      bg: "bg-amber-50",
    },
    {
      name: "Silver",
      icon: Crown,
      description: "Most Popular for Active Clubs",
      price: billingCycle === "annual" ? "5,000" : "500",
      period: billingCycle === "annual" ? "per year" : "per month",
      save: billingCycle === "annual" ? "Save $1,000" : null,
      bestFor: "Best for established clubs with multiple competitive programs",
      features: [
        { name: "League membership for your organization", included: true },
        { name: "Up to 6 sports programs", included: true },
        { name: "Up to 10 teams per sport", included: true },
        { name: "National rankings inclusion", included: true },
        { name: "Enhanced club profile with photos & videos", included: true },
        { name: "Online roster management", included: true },
        { name: "Priority email support (24 hr response)", included: true },
        { name: "Championship qualification eligibility", included: true },
        { name: "10% discount on tournament entry fees", included: true },
        { name: "Priority event scheduling", included: true },
        { name: "Quarterly strategy calls", included: true },
        { name: "Custom branding options", included: false },
      ],
      tournamentFees: "$125 per team (Save 17%)",
      teamFee: "Growing clubs, athletic clubs, private schools with 3+ sports",
      popular: true,
      color: "text-slate-600",
      bg: "bg-slate-50",
    },
    {
      name: "Gold",
      icon: Star,
      description: "Premium for Elite Programs",
      price: billingCycle === "annual" ? "10,000" : "1,000",
      period: billingCycle === "annual" ? "per year" : "per month",
      save: billingCycle === "annual" ? "Save $2,000" : null,
      bestFor: "Complete solution for premier clubs running comprehensive athletic programs",
      features: [
        { name: "League membership for your organization", included: true },
        { name: "Unlimited sports programs", included: true },
        { name: "Unlimited teams", included: true },
        { name: "National rankings inclusion", included: true },
        { name: "Premium club profile with custom design", included: true },
        { name: "Online roster management", included: true },
        { name: "Priority phone & email support (1hr response)", included: true },
        { name: "Championship qualification eligibility", included: true },
        { name: "20% discount on tournament entry fees", included: true },
        { name: "Priority event scheduling", included: true },
        { name: "Dedicated account manager", included: true },
        { name: "Custom branding & co-marketing opportunities", included: true },
      ],
      tournamentFees: "$100 per team (Save 33%)",
      teamFee: "Large country clubs, elite private schools, multi-sport athletic clubs",
      popular: false,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <section className="bg-[#FAF9F6] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200 border-green-200 px-4 py-1 text-sm font-medium rounded-full">
            Pricing for Country Clubs & Private Schools
          </Badge>
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">
            Transparent Pricing, <span className="text-[#013B26]">Championship Results</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Choose the membership tier that fits your club's competitive ambitions. All tiers include league access, national rankings, and championship eligibility.
          </p>

          {/* Toggle */}
          <div className="flex justify-center items-center">
            <div className="bg-white p-1 rounded-full border border-gray-200 inline-flex relative">
              <button
                onClick={() => setBillingCycle("annual")}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  billingCycle === "annual" ? "text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Annual (Save 17%)
                {billingCycle === "annual" && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#22C55E] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  billingCycle === "monthly" ? "text-white" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Monthly
                {billingCycle === "monthly" && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#22C55E] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              <Card
                className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? "border-2 border-[#22C55E] shadow-lg" : "border-gray-200 shadow-sm"
                }`}
              >
                <CardHeader className="text-center pb-8 pt-8">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${plan.bg}`}>
                    <plan.icon className={`h-8 w-8 ${plan.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center text-gray-900">
                    <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                  </div>
                  <div className="flex flex-col items-center mt-1">
                    <span className="text-sm text-gray-500">{plan.period}</span>
                    {plan.save && (
                      <span className="text-xs font-medium text-[#22C55E] mt-1">{plan.save}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 px-6">
                  <p className="text-sm text-gray-600 mb-8 text-center italic">
                    {plan.bestFor}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#22C55E] shrink-0 mr-3" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300 shrink-0 mr-3" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">
                      Tournament Entry Fees
                    </p>
                    <p className="text-sm text-gray-600">{plan.tournamentFees}</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <p className="text-xs font-semibold text-blue-800 uppercase tracking-wide mb-1">
                      Best For
                    </p>
                    <p className="text-xs text-blue-700 leading-relaxed">
                      {plan.teamFee}
                    </p>
                  </div>
                </CardContent>

                <CardFooter className="pb-8 pt-4 px-6">
                  <Button
                    className={`w-full h-12 text-base font-semibold ${
                      plan.popular
                        ? "bg-[#22C55E] hover:bg-[#16A34A] text-white"
                        : "bg-[#013B26] hover:bg-[#012d1d] text-white"
                    }`}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 italic">
            *All plans are billed annually. Prices do not include additional tournament fees or travel costs.
          </p>
          <div className="mt-2 text-sm text-gray-500">
            Need a custom solution for your organization? <a href="#" className="text-[#22C55E] font-medium hover:underline">Contact our team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
