'use client'

import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Image from "next/image";

interface HeroProps {
  onLaunchApp: () => void;
}

export function Hero({ onLaunchApp }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNjYW5uaW5nJTIwcXIlMjBjb2RlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NTg0MDMxODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Customer scanning QR code at restaurant table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Digital Menu Platform for Restaurants
        </h1>
        <p className="text-lg md:text-xl mb-6 text-orange-200 font-medium">
          Scan, Order, and Serve — no tablets, no delays.
        </p>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          No commission fees. Just $19/month. Transform your restaurant with our complete digital ordering solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onLaunchApp}
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-xl rounded-full"
          >
            Start Free Trial
          </Button>
          <Button 
            onClick={onLaunchApp}
            size="lg" 
            variant="outline"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-xl rounded-full"
          >
            View Demo
          </Button>
        </div>
      </div>
    </section>
  );
}