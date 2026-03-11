import React from 'react';
import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video background */}
      <video
        src="/windmill.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-16">
            <FadeUp>
              <h1 className="text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[1.05] font-bold tracking-[-0.03em] text-white max-w-4xl">
                Technical Services,<br />Established in 2008.
              </h1>
              <p className="mt-6 text-sm text-white/70 leading-[1.7] max-w-sm">
                Based in Wyoming, servicing the power industries in the Western United States.
              </p>
            </FadeUp>
            <FadeUp className="hidden md:block pb-2">
              <p className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3">
                Scroll to explore
              </p>
              <div className="w-px h-12 bg-white/30" />
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
