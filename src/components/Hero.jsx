import React from 'react';
import { motion } from 'framer-motion';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import FadeUp from './FadeUp';

const socialLinks = [
  { href: '#', label: 'Facebook',  Icon: IconBrandFacebook  },
  { href: '#', label: 'Instagram', Icon: IconBrandInstagram },
  { href: '#', label: 'LinkedIn',  Icon: IconBrandLinkedin  },
];

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

      {/* Social rail — right edge, vertically centered, desktop only */}
      <div className="hidden md:flex absolute right-8 lg:right-10 top-[45%] -translate-y-1/2 z-20 flex-col items-center gap-5">
        <motion.div
          className="w-px bg-white/20"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          style={{ height: 32, transformOrigin: 'top' }}
        />
        {socialLinks.map(({ href, label, Icon }, i) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="p-2 text-white/60 hover:text-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 focus-visible:rounded-sm active:scale-90 transition-[color,transform] duration-200 cursor-pointer block"
          >
            <Icon size={34} strokeWidth={1.5} aria-hidden="true" />
          </motion.a>
        ))}
      </div>

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
              <p className="text-sm font-mono text-white/50 uppercase tracking-wider mb-3">
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
