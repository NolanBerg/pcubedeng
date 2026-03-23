import React from 'react';
import FadeUp from './FadeUp';

export default function About() {
  return (
    <>
      <section className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-6 md:pb-8">
        <div id="services" className="max-w-[1600px] mx-auto">
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-6">(001)</p>
                <h2 className="text-[clamp(1.6rem,3vw,3rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey">
                  Powering the Western United States with expert technical services.
                </h2>
              </div>
              <div className="md:pt-10">
                <p className="leading-[1.7] text-grey/65 text-base md:text-lg max-w-xl">
                  P Cubed, Inc. provides comprehensive technical services to the power industry. From construction management to quality assurance, our experienced team delivers reliable results across Wyoming and the Western United States.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Decorative curvy ribbons between About and Our Projects */}
      <div className="relative overflow-hidden h-24 md:h-32">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1400 200"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gold ribbon */}
          <path
            d="M-100 100 C200 40, 400 160, 700 90 S1100 20, 1500 80"
            stroke="#D4A017"
            strokeWidth="3"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M-100 115 C200 55, 400 175, 700 105 S1100 35, 1500 95"
            stroke="#D4A017"
            strokeWidth="2"
            strokeOpacity="0.55"
            fill="none"
          />
          {/* Brown ribbon */}
          <path
            d="M-50 140 C250 70, 500 180, 800 120 S1150 50, 1500 130"
            stroke="#7B4F1E"
            strokeWidth="3"
            strokeOpacity="0.7"
            fill="none"
          />
          <path
            d="M-50 155 C250 85, 500 195, 800 135 S1150 65, 1500 145"
            stroke="#7B4F1E"
            strokeWidth="2"
            strokeOpacity="0.75"
            fill="none"
          />
          {/* Thinner accent lines */}
          <path
            d="M-200 50 C100 10, 350 100, 650 50 S1000 0, 1500 40"
            stroke="#D4A017"
            strokeWidth="1.5"
            strokeOpacity="0.6"
            fill="none"
          />
          <path
            d="M-150 170 C150 120, 450 200, 750 150 S1100 90, 1500 160"
            stroke="#7B4F1E"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}
