import React from 'react';
import FadeUp from './FadeUp';

export default function FullImage() {
  return (
    <FadeUp>
      <section className="relative">
        <img
          src="https://placehold.co/1600x700/c4beb6/212325?text=Power+Industry+Expertise"
          alt="Power industry construction and electrical infrastructure"
          className="w-full h-[45vw] max-h-[600px] object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
      </section>
    </FadeUp>
  );
}
