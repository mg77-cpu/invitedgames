import React from "react";

const stats = [
  { value: "500+", label: "Private Clubs & Schools" },
  { value: "2,000+", label: "Tournaments Operated" },
  { value: "50K+", label: "Athletes Competing" },
  { value: "9", label: "League Sports" },
];

export function Stats() {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-[#22C55E] md:text-4xl font-sans">{stat.value}</span>
              <span className="mt-2 text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
