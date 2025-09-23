'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Check, 
  Star, 
  MapPin, 
  Users, 
  Calculator,
  Info,
  ArrowRight
} from "lucide-react";

interface MultiLocationPricingProps {
  onGetQuote: (data: PricingData) => void;
}

interface PricingData {
  locations: number;
  monthlyOrders: number;
  avgOrderValue: number;
  features: string[];
}

export function MultiLocationPricing({ onGetQuote }: MultiLocationPricingProps) {
  const [locations, setLocations] = useState(1);
  const [monthlyOrders, setMonthlyOrders] = useState(500);
  const [avgOrderValue, setAvgOrderValue] = useState(25);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['basic']);

  const calculatePricing = () => {
    const basePrice = 19; // Base price per location
    const locationMultiplier = locations > 1 ? 0.8 : 1; // 20% discount for multiple locations
    const orderVolumeDiscount = monthlyOrders > 1000 ? 0.9 : 1; // 10% discount for high volume
    
    const totalPrice = Math.round(basePrice * locations * locationMultiplier * orderVolumeDiscount);
    return totalPrice;
  };

  const getSavings = () => {
    const regularPrice = 19 * locations;
    const discountedPrice = calculatePricing();
    return regularPrice - discountedPrice;
  };

  const features = [
    {
      id: 'basic',
      name: 'Basic Features',
      description: 'QR ordering, basic analytics, email support',
      included: true
    },
    {
      id: 'advanced',
      name: 'Advanced Analytics',
      description: 'Detailed reports, customer insights, revenue tracking',
      price: 5
    },
    {
      id: 'multi-location',
      name: 'Multi-Location Management',
      description: 'Centralized dashboard, location-specific settings',
      price: 10
    },
    {
      id: 'priority-support',
      name: 'Priority Support',
      description: '24/7 phone support, dedicated account manager',
      price: 15
    },
    {
      id: 'custom-branding',
      name: 'Custom Branding',
      description: 'White-label solution, custom domain',
      price: 25
    }
  ];

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const getFeaturePrice = (featureId: string) => {
    const feature = features.find(f => f.id === featureId);
    return feature?.price || 0;
  };

  const calculateTotalPrice = () => {
    const basePrice = calculatePricing();
    const featurePrice = selectedFeatures
      .filter(id => id !== 'basic')
      .reduce((total, featureId) => total + getFeaturePrice(featureId), 0);
    
    return basePrice + featurePrice;
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flexible Pricing for Every Restaurant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scale your digital ordering system across multiple locations with our transparent, 
            volume-based pricing that grows with your business.
          </p>
        </div>

        {/* Pricing Calculator */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Calculator */}
          <Card className="border-none shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="w-6 h-6 mr-3" />
                Custom Pricing Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Number of Locations */}
                <div>
                  <Label htmlFor="locations" className="text-sm font-medium text-gray-700 mb-2 block">
                    Number of Locations
                  </Label>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setLocations(Math.max(1, locations - 1))}
                      variant="outline"
                      size="sm"
                      className="w-10 h-10"
                    >
                      -
                    </Button>
                    <Input
                      id="locations"
                      type="number"
                      value={locations}
                      onChange={(e) => setLocations(Math.max(1, parseInt(e.target.value) || 1))}
                      className="text-center font-semibold"
                      min="1"
                    />
                    <Button
                      onClick={() => setLocations(locations + 1)}
                      variant="outline"
                      size="sm"
                      className="w-10 h-10"
                    >
                      +
                    </Button>
                  </div>
                  {locations > 1 && (
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <Check className="w-4 h-4 mr-1" />
                      Multi-location discount applied!
                    </p>
                  )}
                </div>

                {/* Monthly Orders */}
                <div>
                  <Label htmlFor="orders" className="text-sm font-medium text-gray-700 mb-2 block">
                    Monthly Orders (per location)
                  </Label>
                  <Select value={monthlyOrders.toString()} onValueChange={(value) => setMonthlyOrders(parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="100">0-100 orders</SelectItem>
                      <SelectItem value="500">100-500 orders</SelectItem>
                      <SelectItem value="1000">500-1000 orders</SelectItem>
                      <SelectItem value="2000">1000+ orders</SelectItem>
                    </SelectContent>
                  </Select>
                  {monthlyOrders > 1000 && (
                    <p className="text-sm text-green-600 mt-2 flex items-center">
                      <Check className="w-4 h-4 mr-1" />
                      High volume discount applied!
                    </p>
                  )}
                </div>

                {/* Average Order Value */}
                <div>
                  <Label htmlFor="avgOrder" className="text-sm font-medium text-gray-700 mb-2 block">
                    Average Order Value
                  </Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <Input
                      id="avgOrder"
                      type="number"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(parseFloat(e.target.value) || 0)}
                      className="pl-8"
                      placeholder="25.00"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Price Summary */}
          <Card className="border-none shadow-xl bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Custom Quote</h3>
                <div className="text-5xl font-bold text-orange-600 mb-2">
                  ${calculateTotalPrice()}
                  <span className="text-xl text-gray-600">/month</span>
                </div>
                {getSavings() > 0 && (
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    Save ${getSavings()}/month
                  </Badge>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Base price ({locations} location{locations > 1 ? 's' : ''})</span>
                  <span className="font-semibold">${calculatePricing()}</span>
                </div>
                {selectedFeatures.filter(id => id !== 'basic').map(featureId => {
                  const feature = features.find(f => f.id === featureId);
                  return feature ? (
                    <div key={featureId} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-600">{feature.name}</span>
                      <span className="font-semibold">+${feature.price}</span>
                    </div>
                  ) : null;
                })}
                <div className="flex justify-between items-center py-2 font-bold text-lg">
                  <span>Total</span>
                  <span>${calculateTotalPrice()}</span>
                </div>
              </div>

              <Button 
                onClick={() => onGetQuote({
                  locations,
                  monthlyOrders,
                  avgOrderValue,
                  features: selectedFeatures
                })}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg rounded-xl"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Selection */}
        <Card className="border-none shadow-xl bg-white mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Choose Your Features</CardTitle>
            <p className="text-center text-gray-600">Select the features that best fit your restaurant's needs</p>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedFeatures.includes(feature.id)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleFeature(feature.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                        selectedFeatures.includes(feature.id)
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedFeatures.includes(feature.id) && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-900">{feature.name}</h3>
                    </div>
                    {feature.price > 0 && (
                      <span className="text-orange-600 font-bold">+${feature.price}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Multi-Location Support</h3>
              <p className="text-gray-600">
                Manage all your restaurant locations from one centralized dashboard with location-specific settings and analytics.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Volume Discounts</h3>
              <p className="text-gray-600">
                The more locations you have, the more you save. Our pricing scales with your business growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">No Hidden Fees</h3>
              <p className="text-gray-600">
                Transparent pricing with no commission fees. Pay only for what you use, when you use it.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start">
            <Info className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Need Help Choosing?</h4>
              <p className="text-blue-800 text-sm">
                Our team can help you determine the best plan for your restaurant. 
                Contact us for a personalized consultation and custom pricing based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
