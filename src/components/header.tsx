'use client'

import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onLaunchApp: () => void;
}

export function Header({ onLaunchApp }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <h1 className="text-2xl font-bold text-orange-600">MenuPRO</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">Features</a>
          <a href="#services" className="text-gray-600 hover:text-orange-600 transition-colors">Services</a>
          <a href="#testimonials" className="text-gray-600 hover:text-orange-600 transition-colors">Reviews</a>
          <Button 
            onClick={onLaunchApp}
            variant="outline" 
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            Get Started
          </Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}