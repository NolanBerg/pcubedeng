import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

const navLinks = [
  { hash: '#projects', label: 'Projects' },
  { hash: '#services-detail', label: 'Services' },
  { hash: '#contact', label: 'Contact' },
  { href: '/merch', label: 'Merch' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/profile.php?id=61553395595330', Icon: IconBrandFacebook,  label: 'Facebook'  },
  { href: 'https://www.instagram.com/pcubedengineering/',           Icon: IconBrandInstagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/p-cubed-inc/',          Icon: IconBrandLinkedin,  label: 'LinkedIn'  },
];

const contactLinks = [
  { href: 'tel:+13073772328',           label: '(307) 377-2328'     },
  { href: 'mailto:bdonelan@p3eng.com',  label: 'bdonelan@p3eng.com' },
  { href: 'https://www.pcubedeng.com',  label: 'www.pcubedeng.com'  },
];

function FooterNavLink({ hash, href, label }) {
  const router = useRouter();
  const pathname = usePathname();

  const className = 'text-sm text-grey/60 hover:text-grey cursor-pointer transition-colors duration-200';

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('scrollTarget', hash);
      router.push('/');
    }
  };

  return (
    <a href={`/${hash}`} onClick={handleClick} className={className}>
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-taupe/50 px-6 md:px-10 lg:px-16 py-12 md:py-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-16">

          {/* Logo + tagline + social */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 cursor-pointer mb-4" aria-label="Home">
              <img src="/logo.png" alt="P Cubed Inc." className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-grey/50 leading-[1.7] max-w-sm mb-5">
              Technical services for the power industry. Based in Wyoming, servicing the Western United States since 2008.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-grey/40 hover:text-grey transition-colors duration-200 cursor-pointer"
                >
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-brand-brown uppercase tracking-widest mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ hash, href, label }) => (
                <FooterNavLink key={label} hash={hash} href={href} label={label} />
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-brand-gold uppercase tracking-widest mb-4">Contact Us</p>
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
