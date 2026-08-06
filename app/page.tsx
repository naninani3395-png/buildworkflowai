'use client';

import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Solutions } from '@/components/landing/Solutions';
import { AISection } from '@/components/landing/AISection';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(39,103,255,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.08),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#0f172a_55%,_#111827_100%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Navbar />
      </div>

      <Hero />
      <Solutions />
      <AISection />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
