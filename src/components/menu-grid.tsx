import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Check, Zap, Shield, BarChart3, Smartphone, CreditCard } from "lucide-react";

const services = [
  {
    id: 1,
    name: "QR Code Ordering System",
    description: "Customers scan QR codes to access your digital menu and place orders directly from their phones",
    icon: Smartphone,
    features: ["Custom QR codes", "Mobile-optimized", "Offline capability"],
    badge: "Most Popular"
  },
  {
    id: 2,
    name: "Real-time Analytics",
    description: "Track sales, popular items, and customer behavior with detailed analytics dashboard",
    icon: BarChart3,
    features: ["Sales reports", "Customer insights", "Inventory tracking"],
    badge: "Analytics"
  },
  {
    id: 3,
    name: "Payment Processing",
    description: "Secure payment processing with multiple payment options and no transaction fees",
    icon: CreditCard,
    features: ["Multiple payment methods", "Secure transactions", "No fees"],
    badge: "Secure"
  },
  {
    id: 4,
    name: "Order Management",
    description: "Streamline kitchen operations with real-time order tracking and management tools",
    icon: Zap,
    features: ["Kitchen display", "Order tracking", "Staff notifications"],
    badge: "Efficient"
  }
];

export function MenuGrid() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services & Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to modernize your restaurant and increase revenue
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer bg-white">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <Badge className="bg-orange-600 text-white">
                    {service.badge}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Pricing Section */}
        <div className="mt-20 text-center">
          <h3 className="text-4xl font-bold mb-8">Simple, Transparent Pricing</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
              <h4 className="text-2xl font-bold mb-4">Monthly Plan</h4>
              <div className="text-5xl font-bold text-orange-600 mb-2">$19</div>
              <div className="text-lg text-gray-600 mb-6">per month</div>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>No commission on transactions</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>All features included</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1">
                Best Value
              </Badge>
              <h4 className="text-2xl font-bold mb-4">Annual Plan</h4>
              <div className="text-5xl font-bold text-orange-600 mb-2">$190</div>
              <div className="text-lg text-gray-600 mb-2">per year</div>
              <div className="text-sm text-green-600 font-semibold mb-6">Save $38 (2 months free!)</div>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Everything in Monthly</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Priority support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom branding</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span>Free setup & training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}