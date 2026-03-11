import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from './FadeUp';

const slides = [
  {
    title: 'Wind Farm Development — Wyoming',
    description: 'Full construction management and electrical inspection for large-scale wind energy installations.',
    src: 'https://placehold.co/1200x800/c4beb6/212325?text=Wind+Farm+Project',
  },
  {
    title: 'Substation Expansion — Montana',
    description: 'Quality assurance and safety supervision for a major substation expansion project.',
    src: 'https://placehold.co/1200x800/b8b2aa/212325?text=Substation+Project',
  },
  {
    title: 'Transmission Line Upgrade — Colorado',
    description: 'Electrical inspecting and construction management for high-voltage transmission line upgrades.',
    src: 'https://placehold.co/1200x800/a8a29a/212325?text=Transmission+Lines',
  },
  {
    title: 'Solar Array Installation — Utah',
    description: 'Comprehensive QA/QC and safety supervising for a utility-scale solar installation.',
    src: 'https://placehold.co/1200x800/d4cec6/212325?text=Solar+Array',
  },
];

export default function ImageGrid() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="mb-12">
            <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-4">(002)</p>
            <h2 className="text-[clamp(1.6rem,3vw,3rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey">
              Our Projects
            </h2>
          </div>
        </FadeUp>
        <FadeUp>
          <div className="relative">
            {/* Image area */}
            <div className="relative rounded-sm overflow-hidden h-[75vw] md:h-[500px] lg:h-[550px] max-w-5xl mx-auto">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={current}
                  src={slides[current].src}
                  alt={slides[current].title}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M12 4l-6 6 6 6" />
                </svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Next slide"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>

              {/* Bottom overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold tracking-[-0.03em] text-white mb-2">
                      {slides[current].title}
                    </h3>
                    <p className="text-sm text-white/70 leading-[1.7] max-w-lg">
                      {slides[current].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 focus-visible:outline-2 focus-visible:outline-grey ${
                    i === current ? 'w-8 bg-grey' : 'w-4 bg-grey/25 hover:bg-grey/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
