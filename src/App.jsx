import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ImageGrid from './components/ImageGrid';
import Statement from './components/Statement';
import Process from './components/Process';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

const premiumEase = [0.76, 0, 0.24, 1];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutGroup>
              <div className="relative min-h-screen bg-cream overflow-hidden">
                {/* PRELOADER */}
                <AnimatePresence>
                  {isLoading && (
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
                  <Navbar isLoading={isLoading} premiumEase={premiumEase} />

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{
                      opacity: isLoading ? 0 : 1,
                      y: isLoading ? 40 : 0,
                    }}
                    transition={{ duration: 1, delay: 0.5, ease: premiumEase }}
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
          }
        />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}
