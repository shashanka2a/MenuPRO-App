'use client'

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQProps {
  onLaunchApp: () => void;
}

const faqs = [
  {
    question: "How much does MenuPRO cost?",
    answer: "MenuPRO costs just $19/month with no commission fees. This is significantly less than Square ($69+/month) and Toast ($79+/month). You keep 100% of your revenue with our flat-rate pricing."
  },
  {
    question: "How long does setup take?",
    answer: "Setup takes just 15 minutes on average. Simply upload your menu, generate QR codes, and you're ready to start taking digital orders. No technical expertise required."
  },
  {
    question: "Do I need any special equipment?",
    answer: "No special equipment needed! Customers use their own smartphones to scan QR codes and place orders. You just need a device to manage orders (tablet, phone, or computer)."
  },
  {
    question: "Can I use MenuPRO for multiple locations?",
    answer: "Yes! MenuPRO supports unlimited locations with centralized management. Each location gets its own QR codes and can have different menus, pricing, and settings."
  },
  {
    question: "What happens if customers don't have smartphones?",
    answer: "We provide backup options including printed menus with QR codes and staff-assisted ordering. Our system works on any device with a camera and internet connection."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 14-day free trial with no credit card required. You can test all features and see how MenuPRO works for your restaurant before committing."
  }
];

export function FAQ({ onLaunchApp }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MenuPRO
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-yellow-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={onLaunchApp}
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg rounded-full"
          >
            Start Free Trial
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  );
}