"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

const faqs = [
  {
    question: "What's included in the annual membership?",
    answer: "Annual membership includes league participation, national rankings, online tools, championship eligibility, and support. Tournament entry fees are separate and vary by tier.",
  },
  {
    question: "Can we upgrade or downgrade our tier mid-season?",
    answer: "Yes! You can upgrade anytime and receive prorated benefits. Downgrades take effect at your next renewal period to ensure continuity for your teams.",
  },
  {
    question: "How do tournament entry fees work?",
    answer: "Each team pays a separate entry fee per tournament, typically $150/team. Silver and Gold members receive automatic discounts of 10% and 20% respectively on all tournament entries.",
  },
  {
    question: "Is there a discount for private schools?",
    answer: "Yes! Private schools and educational institutions receive a 10% discount on any tier. Contact our team to verify your school status and receive your discount code.",
  },
  {
    question: "What if we have more than 6 sports programs?",
    answer: "Bronze and Silver tiers have sport limits. If you need more, we recommend the Gold tier with unlimited sports. Alternatively, contact us for custom enterprise pricing.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer monthly payment plans for all tiers. Annual payment receives a discount. We also accept purchase orders from schools and institutions.",
  },
  {
    question: "What happens if we don't renew?",
    answer: "Your club profile remains visible but teams cannot register for new events. Historical rankings and records are preserved. You can rejoin anytime to resume participation.",
  },
  {
    question: "Can we try before committing?",
    answer: "We offer a trial season for new clubs at 50% off Bronze tier pricing. This lets you test league participation before committing to a full annual membership.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about league membership pricing
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg overflow-hidden bg-white hover:border-gray-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className={`h-5 w-5 ${openIndex === index ? "text-[#22C55E]" : "text-gray-300"}`} />
                  <span className={`font-semibold ${openIndex === index ? "text-gray-900" : "text-gray-700"}`}>
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-gray-400" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-0 ml-9">
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
