'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Check, 
  Star, 
  MapPin, 
  Users, 
  ArrowRight
} from "lucide-react";
import { CustomPricingModal } from "./custom-pricing-modal";

interface MultiLocationPricingProps {
  onGetQuote: (data: any) => void;
}

export function MultiLocationPricing({ onGetQuote }: MultiLocationPricingProps) {
  const [showCustomPricing, setShowCustomPricing] = useState(false);

  const pricingPlans = [
    {
      name: "Single Location",
      price: 19,
      period: "per month",
      description: "Perfect for one restaurant",
      features: [
        "QR Code Ordering System",
        "Digital Menu Management", 
        "Real-time Order Tracking",
        "Basic Analytics",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Multi-Location",
      price: 15,
      period: "per location/month",
      description: "Best for restaurant chains",
      features: [
        "Everything in Single Location",
        "Centralized Dashboard",
        "Location-specific Settings",
        "Advanced Analytics",
        "Priority Support"
      ],
      popular: true,
      minLocations: 2
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no commission charges. Just one flat rate that includes everything you need.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative border-2 transition-all hover:shadow-xl ${
              plan.popular 
                ? 'border-orange-500 shadow-lg scale-105' 
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-600 text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-orange-600">${plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Quote Question */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Have multiple locations? Try our{" "}
            <button 
              onClick={() => setShowCustomPricing(true)}
              className="text-orange-600 underline hover:text-orange-700 font-medium"
            >
              custom pricing
            </button>
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Why MenuPRO is Better</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">No Commission Fees</h4>
              <p className="text-gray-600 text-sm">
                Keep 100% of your revenue. Square takes 2.9% + 30&cent; per transaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Lower Monthly Cost</h4>
              <p className="text-gray-600 text-sm">
                $19/month vs Square&apos;s $69+/month. Save $600+ annually.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">All Features Included</h4>
              <p className="text-gray-600 text-sm">
                No hidden costs. Everything you need is included in one price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Pricing Modal */}
      <CustomPricingModal
        isOpen={showCustomPricing}
        onClose={() => setShowCustomPricing(false)}
        onGetQuote={onGetQuote}
      />
    </section>
  );
}