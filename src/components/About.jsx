import React from 'react';
import FadeUp from './FadeUp';

export default function About() {
  return (
    <section className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-20 md:pb-32">
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
  );
}
