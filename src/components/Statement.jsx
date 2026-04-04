import React from 'react';
import FadeUp from './FadeUp';

const stats = [
  { value: '18+',  label: 'Years Experience'    },
  { value: '150+', label: 'Projects Completed'  },
  { value: '$1B+', label: 'Projects Managed'      },
];

export default function Statement() {
  return (
    <section className="px-6 md:px-10 lg:px-16 pb-20 md:pb-32">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: safety quote */}
          <FadeUp>
            <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-6">&mdash;</p>
            <p className="text-[clamp(1.3rem,2.2vw,2rem)] leading-[1.45] text-grey/80">
              P Cubed prioritizes safety above all else. Our dedicated safety supervisors ensure that every project site maintains the highest standards of compliance and worker protection throughout the entire project lifecycle.
            </p>
          </FadeUp>

          {/* Right: display stats */}
          <FadeUp>
            <div className="grid grid-cols-3 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="pt-5 border-t border-taupe/40">
                  <p className="text-[clamp(2.5rem,4vw,4.5rem)] font-normal leading-none tracking-[-0.03em] text-grey">
                    {value}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-grey/40 mt-3 leading-[1.5]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
