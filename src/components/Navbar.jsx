import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const premiumEase = [0.76, 0, 0.24, 1];

const links = [
  { hash: '#projects', label: 'Projects' },
  { hash: '#services-detail', label: 'Services' },
  { hash: '#careers', label: 'Careers' },
  { hash: '#contact', label: 'Contact' },
];

function NavLink({ hash, label, atTop }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      // Already on homepage, just scroll
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage — home page will handle instant scroll
      sessionStorage.setItem('scrollTarget', hash);
      router.push('/');
    }
  };

  return (
    <a
      href={`/${hash}`}
      onClick={handleClick}
      className={`text-sm cursor-pointer font-medium transition-colors duration-300 ${
        atTop ? 'text-white/80 hover:text-white' : 'text-grey/70 hover:text-grey'
      }`}
    >
      {label}
    </a>
  );
}

export default function Navbar({ isLoading }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const atTop = isHome && !scrolled;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: atTop
          ? 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)'
          : undefined,
        backdropFilter: atTop ? 'none' : 'blur(8px)',
        backgroundColor: atTop ? 'transparent' : 'rgba(243,240,236,0.9)',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-1">
        {/* Logo — layoutId matches preloader */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer -ml-6" aria-label="Home">
          {!isLoading && (
            <motion.div
              layoutId="site-logo"
              transition={{ duration: 1.2, ease: premiumEase }}
              className="p-0"
            >
              <img
                src="/logo.png"
                alt="P Cubed Inc."
                className="h-14 w-auto"
              />
            </motion.div>
          )}
        </Link>

        {/* Desktop Nav */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            y: isLoading ? -10 : 0,
          }}
          transition={{ duration: 0.7, delay: 0.9, ease: premiumEase }}
        >
          {links.map(({ hash, label }) => (
            <NavLink key={label} hash={hash} label={label} atTop={atTop} />
          ))}
        </motion.div>

        {/* Mobile menu */}
        <motion.button
          className="md:hidden cursor-pointer p-2 -mr-2"
          aria-label="Open menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={atTop ? '#ffffff' : '#212325'} strokeWidth="1.5">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </motion.button>
      </div>
    </nav>
  );
}
