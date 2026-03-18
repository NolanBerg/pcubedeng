'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import ImageGrid from '../src/components/ImageGrid';
import Statement from '../src/components/Statement';
import Process from '../src/components/Process';
import BottomCTA from '../src/components/BottomCTA';
import Footer from '../src/components/Footer';

const premiumEase = [0.76, 0, 0.24, 1];

export default function HomePage() {
  // Check before state init — during client-side nav, window IS available
  const isReturning = typeof window !== 'undefined' && sessionStorage.getItem('hasVisited') === 'true';

  const [isLoading, setIsLoading] = useState(!isReturning);
  const [skipPreloader, setSkipPreloader] = useState(isReturning);

  useEffect(() => {
    if (skipPreloader) {
      const scrollTarget = sessionStorage.getItem('scrollTarget');
      if (scrollTarget) {
        sessionStorage.removeItem('scrollTarget');
        requestAnimationFrame(() => {
          const el = document.querySelector(scrollTarget);
          if (el) el.scrollIntoView({ behavior: 'instant' });
        });
      }
      return;
    }

    // Fresh visit — show preloader
    sessionStorage.setItem('hasVisited', 'true');
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.style.overflow = '';
      setIsLoading(false);
    }, 1800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [skipPreloader]);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen bg-cream overflow-hidden">
        {/* PRELOADER — only on fresh visit, never on internal nav */}
        <AnimatePresence>
          {isLoading && !skipPreloader && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
              exit={{
                opacity: 0,
                transition: { duration: 0.8, ease: 'easeInOut', delay: 0.4 },
              }}
            >
              <motion.div
                layoutId="site-logo"
                transition={{ duration: 1.2, ease: premiumEase }}
                className="flex items-center justify-center p-6 md:p-8"
              >
                <motion.img
                  src="/logo.png"
                  alt="P Cubed Inc."
                  className="w-52 md:w-80 h-auto"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SITE */}
        <div className="relative z-10">
          <Navbar isLoading={isLoading && !skipPreloader} premiumEase={premiumEase} />

          <motion.div
            initial={skipPreloader ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            animate={{
              opacity: isLoading && !skipPreloader ? 0 : 1,
              y: isLoading && !skipPreloader ? 40 : 0,
            }}
            transition={skipPreloader ? { duration: 0 } : { duration: 1, delay: 0.5, ease: premiumEase }}
          >
            <Hero />
            <About />
            <ImageGrid />
            <Statement />
            <Process />
            <BottomCTA />
            <Footer />
          </motion.div>
        </div>
      </div>
    </LayoutGroup>
  );
}
