import React from 'react';
import FadeUp from './FadeUp';

export default function BottomCTA() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.1] font-bold tracking-[-0.03em] text-grey max-w-4xl">
                Ready to Build<br />Your Vision?
              </h2>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 text-grey font-medium cursor-pointer group"
                >
                  <span className="text-base">Get in touch</span>
                  <svg
                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                    stroke="currentColor" strokeWidth="1.5"
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <path d="M4 10h12M12 6l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </div>
            <div id="careers" className="flex flex-col justify-center">
              <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-4">Careers</p>
              <h3 className="text-[clamp(1.4rem,2.5vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey mb-4">
                Interested in a Career?
              </h3>
              <p className="leading-[1.7] text-grey/60 text-base max-w-md mb-6">
                We're always looking for skilled professionals to join our team. If you have experience in the power industry and share our commitment to safety and quality, we'd love to hear from you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-grey font-medium cursor-pointer group"
              >
                <span className="text-base">Apply now</span>
                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M4 10h12M12 6l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
