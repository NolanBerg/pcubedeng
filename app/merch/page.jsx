'use client';

import React from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar isLoading={false} />

      <main className="flex-1 flex items-center justify-center px-6 md:px-10 lg:px-16">
        <div className="max-w-[1600px] mx-auto w-full text-center py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-brown mb-6">
            Coming Soon
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,6rem)] leading-[1.05] font-bold tracking-[-0.03em] text-grey mb-6"
          >
            Merch Website
          </h1>
          <p className="text-base leading-[1.7] text-grey/50 max-w-sm mx-auto">
            We&rsquo;re working on something. Check back soon.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
