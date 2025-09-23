'use client'

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { MenuGrid } from "@/components/menu-grid";
import { MultiLocationPricing } from "@/components/multi-location-pricing";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { PWAApp } from "@/components/pwa-app";
import { RestaurantApp } from "@/components/restaurant/restaurant-app";

export default function Home() {
  const [showPWA, setShowPWA] = useState(false);
  const [showRestaurant, setShowRestaurant] = useState(false);

  if (showPWA) {
    return <PWAApp />;
  }

  if (showRestaurant) {
    return <RestaurantApp />;
  }

  return (
    <div className="min-h-screen">
      <Header 
        onLaunchApp={() => setShowPWA(true)} 
        onRestaurantSignup={() => setShowRestaurant(true)}
      />
      <main>
        <Hero onLaunchApp={() => setShowPWA(true)} />
        <section id="features">
          <Features onLaunchApp={() => setShowPWA(true)} />
        </section>
        <section id="services">
          <MenuGrid />
        </section>
        <section id="pricing">
          <MultiLocationPricing onGetQuote={(data) => {
            console.log('Pricing quote requested:', data);
            // Handle quote request
          }} />
        </section>
        <section id="how-it-works">
          <HowItWorks onLaunchApp={() => setShowPWA(true)} />
        </section>
        <section id="faq">
          <FAQ onLaunchApp={() => setShowPWA(true)} />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
