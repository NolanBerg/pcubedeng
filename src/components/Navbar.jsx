import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const premiumEase = [0.76, 0, 0.24, 1];

const links = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#services-detail', label: 'Services' },
  { href: '/#careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
];

export default function Navbar({ isLoading }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 py-1">
        {/* Logo — layoutId matches preloader */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer -ml-6" aria-label="Home">
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
          {links.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-grey/70 hover:text-grey cursor-pointer font-medium transition-colors duration-200"
            >
              {label}
            </a>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212325" strokeWidth="1.5">
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </motion.button>
      </div>
    </nav>
  );
}
