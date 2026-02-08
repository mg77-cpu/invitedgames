import React from "react";

const steps = [
  {
    number: "1",
    title: "Clubs Join the League",
    description: "Private clubs and schools apply for membership in America's premier league system",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    number: "2",
    title: "Teams Register for Events",
    description: "Member clubs register their teams for tournaments and league competitions we operate",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
  {
    number: "3",
    title: "Rankings Update Weekly",
    description: "National rankings reflect performance across all Invited Games competitions",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    number: "4",
    title: "Top Teams Qualify",
    description: "Elite performers earn invitations to championship tournaments and national finals",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 md:text-4xl mb-4">How It Works</h2>
          <p className="text-gray-500">Four simple steps to elite competition</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className={`flex h-24 w-24 items-center justify-center rounded-full ${step.bgColor} ${step.textColor} text-2xl font-bold mb-6`}>
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
