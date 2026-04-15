import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const premiumEase = [0.76, 0, 0.24, 1];

const links = [
  { hash: '#projects', label: 'Projects' },
  { hash: '#services-detail', label: 'Services' },
  { hash: '#contact', label: 'Contact' },
  { href: '/merch', label: 'Merch' },
];

function NavLink({ hash, href, label, atTop, onNavigate }) {
  const router = useRouter();
  const pathname = usePathname();

  const className = `text-sm cursor-pointer font-medium transition-colors duration-300 ${
    atTop ? 'text-white/80 hover:text-white' : 'text-grey/70 hover:text-grey'
  }`;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onNavigate}>
        {label}
      </Link>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    onNavigate?.();
    if (pathname === '/') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollTarget', hash);
      router.push('/');
    }
  };

  return (
    <a
      href={`/${hash}`}
      onClick={handleClick}
      className={className}
    >
      {label}
    </a>
  );
}

export default function Navbar({ isLoading }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const atTop = isHome && !scrolled;

  return (
    <>
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
                <Image
                  src="/logo.png"
                  alt="P Cubed Inc."
                  width={180}
                  height={56}
                  className="h-14 w-auto"
                  priority
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
            {links.map(({ hash, href, label }) => (
              <NavLink key={label} hash={hash} href={href} label={label} atTop={atTop} />
            ))}
          </motion.div>

          {/* Mobile hamburger / close */}
          <motion.button
            className="md:hidden cursor-pointer p-2 -mr-2 z-10"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={atTop && !menuOpen ? '#ffffff' : '#212325'} strokeWidth="1.5">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ backgroundColor: 'rgba(243,240,236,0.97)', backdropFilter: 'blur(12px)' }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: premiumEase }}
          >
            <div className="flex flex-col justify-center flex-1 px-8 gap-8 pt-20">
              {links.map(({ hash, href, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.06, ease: premiumEase }}
                >
                  {href ? (
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="text-[clamp(2rem,8vw,3rem)] font-bold tracking-[-0.03em] text-grey cursor-pointer"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={`/${hash}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        if (pathname === '/') {
                          setTimeout(() => {
                            const el = document.querySelector(hash);
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        } else {
                          sessionStorage.setItem('scrollTarget', hash);
                          window.location.href = '/';
                        }
                      }}
                      className="text-[clamp(2rem,8vw,3rem)] font-bold tracking-[-0.03em] text-grey cursor-pointer"
                    >
                      {label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12 border-t border-taupe/40 pt-8">
              <p className="font-mono text-xs text-grey/40 uppercase tracking-widest">P Cubed, Inc.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
