import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const navLinks = [
  { hash: '#projects', label: 'Projects' },
  { hash: '#services-detail', label: 'Services' },
  { hash: '#careers', label: 'Careers' },
  { hash: '#contact', label: 'Contact' },
];

function FooterNavLink({ hash, label }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <a
      href={`/${hash}`}
      onClick={handleClick}
      className="text-sm text-grey/60 hover:text-grey cursor-pointer transition-colors duration-200"
    >
      {label}
    </a>
  );
}

const contactLinks = [
  { href: 'mailto:info@pcubedeng.com', label: 'info@pcubedeng.com' },
  { href: 'https://www.pcubedeng.com', label: 'pcubedeng.com' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-taupe/50 px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 cursor-pointer mb-4" aria-label="Home">
              <img src="/logo.png" alt="P Cubed Inc." className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-grey/50 leading-[1.7] max-w-sm">
              Technical services for the power industry. Based in Wyoming, servicing the Western United States since 2008.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ hash, label }) => (
                <FooterNavLink key={label} hash={hash} label={label} />
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-grey/40 uppercase tracking-widest mb-4">Contact Us</p>
            <div className="flex flex-col gap-2">
              {contactLinks.map(({ href, label }) => (
                <a key={label} href={href} className="text-sm text-grey/60 hover:text-grey cursor-pointer transition-colors duration-200">
                  {label}
                </a>
              ))}
              <p className="text-sm text-grey/60 mt-2">Wyoming, United States</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-taupe/30">
          <p className="font-mono text-xs text-grey/30">&copy; 2026 P Cubed, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="font-mono text-xs text-grey/30 hover:text-grey/60 cursor-pointer transition-colors duration-200">Privacy</a>
            <a href="#" className="font-mono text-xs text-grey/30 hover:text-grey/60 cursor-pointer transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
