'use client'

import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { MenuGrid } from "@/components/menu-grid";
import { Testimonials } from "@/components/testimonials";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { PWAApp } from "@/components/pwa-app";

export default function Home() {
  const [showPWA, setShowPWA] = useState(false);

  if (showPWA) {
    return <PWAApp />;
  }

  return (
    <div className="min-h-screen">
      <Header onLaunchApp={() => setShowPWA(true)} />
      <main>
        <Hero onLaunchApp={() => setShowPWA(true)} />
        <section id="features">
          <Features onLaunchApp={() => setShowPWA(true)} />
        </section>
        <section id="services">
          <MenuGrid />
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
