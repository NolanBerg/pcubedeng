import React from 'react';
import FadeUp from './FadeUp';

export default function Statement() {
  return (
    <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="max-w-3xl">
            <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-6">&mdash;</p>
            <p className="text-[clamp(1.3rem,2.2vw,2rem)] leading-[1.45] text-grey/80">
              P Cubed prioritizes safety above all else. Our dedicated safety supervisors ensure that every project site maintains the highest standards of compliance and worker protection throughout the entire project lifecycle.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
