'use client'

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  CheckCircle, 
  X, 
  Calculator,
  DollarSign,
  Users,
  Building2,
  Smartphone,
  BarChart3,
  Clock,
  Shield
} from "lucide-react";

interface PricingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGetQuote: (data: any) => void;
}

const features = [
  {
    id: 'basic',
    name: 'Basic Features',
    price: 0,
    description: 'Essential features for small restaurants',
    items: [
      'QR Code Ordering System',
      'Digital Menu Management',
      'Basic Analytics',
      'Email Support'
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Features',
    price: 5,
    description: 'Enhanced features for growing restaurants',
    items: [
      'Real-time Order Management',
      'Inventory Tracking',
      'Customer Database',
      'Advanced Analytics',
      'Priority Support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Features',
    price: 10,
    description: 'Complete solution for large restaurants',
    items: [
      'Multi-location Management',
      'Staff Management',
      'Marketing Tools',
      'API Integration',
      'White-label Options',
      'Dedicated Support'
    ]
  }
];

const locationPricing = {
  single: { price: 19, label: 'Single Location', description: 'Perfect for one restaurant' },
  multi: { price: 15, label: 'Multi-Location', description: 'Per location (2+ locations)', minLocations: 2 }
};

export function PricingCalculatorModal({ isOpen, onClose, onGetQuote }: PricingCalculatorModalProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['basic']);
  const [locationType, setLocationType] = useState<'single' | 'multi'>('single');
  const [locationCount, setLocationCount] = useState(1);
  const [restaurantName, setRestaurantName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const calculatePrice = () => {
    let basePrice = locationType === 'single' ? locationPricing.single.price : locationPricing.multi.price;
    let totalLocations = locationType === 'multi' ? Math.max(locationCount, 2) : 1;
    
    // Add feature costs
    const featureCost = selectedFeatures.reduce((total, featureId) => {
      const feature = features.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    const totalPrice = (basePrice + featureCost) * totalLocations;
    return { totalPrice, basePrice, featureCost, totalLocations };
  };

  const { totalPrice, basePrice, featureCost, totalLocations } = calculatePrice();

  const handleFeatureToggle = (featureId: string) => {
    if (featureId === 'basic') {
      // Basic is always included
      return;
    }
    
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleGetQuote = () => {
    const quoteData = {
      restaurantName,
      contactEmail,
      locationType,
      locationCount: totalLocations,
      selectedFeatures,
      pricing: {
        basePrice,
        featureCost,
        totalPrice,
        monthlySavings: Math.max(0, (69 - totalPrice) * totalLocations) // vs Square
      }
    };
    
    onGetQuote(quoteData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <Calculator className="w-6 h-6 text-orange-600" />
            Custom Pricing Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Side - Configuration */}
          <div className="space-y-6">
            {/* Restaurant Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-600" />
                  Restaurant Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Enter your restaurant name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location Type */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  Location Type
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setLocationType('single')}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all relative ${
                      locationType === 'single' 
                        ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{locationPricing.single.label}</div>
                        <div className="text-sm text-gray-600">{locationPricing.single.description}</div>
                      </div>
                      {locationType === 'single' && (
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                  
                  <button
                    onClick={() => setLocationType('multi')}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all relative ${
                      locationType === 'multi' 
                        ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{locationPricing.multi.label}</div>
                        <div className="text-sm text-gray-600">{locationPricing.multi.description}</div>
                      </div>
                      {locationType === 'multi' && (
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                </div>

                {locationType === 'multi' && (
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Locations
                    </label>
                    <input
                      type="number"
                      min="2"
                      value={locationCount}
                      onChange={(e) => setLocationCount(Math.max(2, parseInt(e.target.value) || 2))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-orange-600" />
                  Choose Your Features
                </h3>
                <div className="space-y-3">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedFeatures.includes(feature.id)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleFeatureToggle(feature.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                            selectedFeatures.includes(feature.id)
                              ? 'border-orange-500 bg-orange-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedFeatures.includes(feature.id) && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="font-medium">{feature.name}</span>
                        </div>
                        {feature.price > 0 && (
                          <Badge variant="outline" className="text-orange-600 border-orange-600">
                            +${feature.price}/mo
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                      <ul className="text-xs text-gray-500 space-y-1">
                        {feature.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Pricing Summary */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  Pricing Summary
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Base Plan ({locationType === 'single' ? 'Single Location' : 'Multi-Location'})</span>
                    <span>${basePrice}/mo</span>
                  </div>
                  
                  {featureCost > 0 && (
                    <div className="flex justify-between">
                      <span>Additional Features</span>
                      <span>+${featureCost}/mo</span>
                    </div>
                  )}
                  
                  {totalLocations > 1 && (
                    <div className="flex justify-between">
                      <span>Locations ({totalLocations})</span>
                      <span>× {totalLocations}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total Monthly Cost</span>
                      <span className="text-orange-600">${totalPrice}/mo</span>
                    </div>
                  </div>
                </div>

                {/* Savings Comparison */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-800">You Save vs Square</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    ${Math.max(0, (69 - totalPrice) * totalLocations)}/mo
                  </div>
                  <div className="text-sm text-green-700">
                    Square charges $69+/month per location
                  </div>
                </div>

                {/* CTA */}
                <Button
                  onClick={handleGetQuote}
                  disabled={!restaurantName || !contactEmail}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3"
                >
                  Get Custom Quote
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  No commitment • 14-day free trial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
