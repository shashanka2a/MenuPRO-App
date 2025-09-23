'use client'

import { useState } from "react";
import { Card, CardContent } from "@ui/card";
import { Button } from "@ui/button";
import { ChevronDown, ChevronUp, HelpCircle, DollarSign, Smartphone, Shield, Clock, Users } from "lucide-react";

interface FAQProps {
  onLaunchApp: () => void;
}

export function FAQ({ onLaunchApp }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: 'Pricing & Plans',
      icon: DollarSign,
      questions: [
        {
          question: 'How much does MenuPRO cost compared to Square and Toast?',
          answer: 'MenuPRO starts at just $19/month with no commission fees, while Square charges $69+/month plus 2.9% transaction fees, and Toast costs $79+/month. For a restaurant doing $10,000/month in sales, MenuPRO saves you $500+ monthly compared to Square\'s fees alone.'
        },
        {
          question: 'Are there any hidden fees or commission charges?',
          answer: 'No hidden fees whatsoever. MenuPRO charges a flat $19/month subscription with zero commission on orders. Unlike Square (2.9% fees) or Toast (2.6% fees), you keep 100% of your revenue.'
        },
        {
          question: 'Do you offer volume discounts for multiple locations?',
          answer: 'Yes! We offer significant discounts for multi-location restaurants. Contact us for custom pricing that scales with your business growth.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start.'
        }
      ]
    },
    {
      category: 'Setup & Integration',
      icon: Smartphone,
      questions: [
        {
          question: 'How long does it take to set up MenuPRO?',
          answer: 'Most restaurants are up and running in under 15 minutes. Simply sign up, verify your email, upload your menu (we support OCR and PDF), and you\'re ready to receive orders.'
        },
        {
          question: 'Do I need special hardware or equipment?',
          answer: 'No hardware required! MenuPRO works with any device that can display a web browser. Customers use their own smartphones to scan QR codes and place orders.'
        },
        {
          question: 'Can I upload my existing menu automatically?',
          answer: 'Yes! Our AI-powered OCR can extract menu items from photos of your physical menu, or we can parse text from PDF menus. You can also manually add items if needed.'
        },
        {
          question: 'Do customers need to download an app?',
          answer: 'No app required! Customers simply scan the QR code with their phone camera and order directly through their web browser. This eliminates app store friction and increases order rates.'
        }
      ]
    },
    {
      category: 'Features & Functionality',
      icon: Shield,
      questions: [
        {
          question: 'What features does MenuPRO offer compared to Square and Toast?',
          answer: 'MenuPRO focuses on digital ordering and menu management with features like QR code ordering, real-time order tracking, analytics dashboard, multi-location support, and inventory management. While Square/Toast are full POS systems, MenuPRO specializes in digital ordering efficiency.'
        },
        {
          question: 'Can I manage multiple restaurant locations?',
          answer: 'Yes! MenuPRO includes multi-location management with centralized dashboards, location-specific menus, and unified analytics across all your restaurants.'
        },
        {
          question: 'Do you offer analytics and reporting?',
          answer: 'Absolutely! Get detailed insights on sales trends, popular items, peak hours, customer behavior, and revenue analytics to make data-driven decisions for your restaurant.'
        },
        {
          question: 'Can I customize the ordering experience?',
          answer: 'Yes! Customize your digital menu design, add item descriptions, set availability times, create special offers, and brand the experience to match your restaurant\'s style.'
        }
      ]
    },
    {
      category: 'Support & Reliability',
      icon: Clock,
      questions: [
        {
          question: 'What kind of support do you provide?',
          answer: 'We offer email support for all plans, with priority support for higher tiers. Our team responds within 24 hours and provides setup assistance, training, and ongoing support.'
        },
        {
          question: 'Is MenuPRO reliable for high-volume restaurants?',
          answer: 'Yes! MenuPRO is built on enterprise-grade infrastructure that can handle thousands of concurrent orders. We have 99.9% uptime and can scale with your restaurant\'s growth.'
        },
        {
          question: 'How does MenuPRO compare to other restaurant management systems?',
          answer: 'MenuPRO is specifically designed for digital ordering efficiency. While Square/Toast are comprehensive POS systems, MenuPRO excels at QR code ordering, reducing wait times, and increasing order accuracy. We\'re the perfect complement to existing POS systems.'
        },
        {
          question: 'Can I integrate MenuPRO with my existing POS system?',
          answer: 'Yes! MenuPRO can integrate with most major POS systems to sync orders, inventory, and customer data. Contact us to discuss your specific integration needs.'
        }
      ]
    }
  ];

  const quickStats = [
    { icon: Users, label: 'Restaurants', value: '500+' },
    { icon: DollarSign, label: 'Avg. Revenue Increase', value: '35%' },
    { icon: Clock, label: 'Setup Time', value: '15 min' },
    { icon: Shield, label: 'Uptime', value: '99.9%' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about MenuPRO, from pricing to features. 
            Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 4 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={questionIndex} className="border-none shadow-lg bg-white">
                      <CardContent className="p-6">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full text-left flex items-start justify-between"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="border-none shadow-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you get the most out of MenuPRO. 
                Get answers to your questions and see how we can help your restaurant succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={onLaunchApp}
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-xl rounded-full"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-xl rounded-full"
                >
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
