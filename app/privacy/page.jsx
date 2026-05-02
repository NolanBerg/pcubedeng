'use client';

import { useEffect } from 'react';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you submit the contact form on our website, we collect your name, email address, and the message you provide. We do not collect any additional personal information unless you voluntarily provide it.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Information submitted through our contact form is used solely to respond to your inquiry. We do not sell, trade, or otherwise transfer your personal information to third parties.',
  },
  {
    title: 'Contact Form Processor',
    body: 'Contact form submissions are sent via our own API endpoint using Resend, a transactional email service. Your name, email address, and message are transmitted securely to Resend for delivery. Your data is subject to Resend\'s privacy policy, available at resend.com/privacy.',
  },
  {
    title: 'Cookies',
    body: 'Our website uses sessionStorage to improve your browsing experience (e.g., remembering your scroll position when navigating back to a page). No tracking cookies or third-party analytics are set.',
  },
  {
    title: 'Data Retention',
    body: 'Contact form submissions are retained only as long as necessary to respond to your inquiry. You may request deletion of your information at any time by contacting us directly.',
  },
  {
    title: 'Contact Us',
    body: 'If you have any questions about this privacy policy or how we handle your information, please reach out at bdonelan@p3eng.com.',
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    sessionStorage.setItem('hasVisited', 'true');
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar isLoading={false} />

      <main className="flex-1 px-6 md:px-10 lg:px-16 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-brown mb-4">
            Legal
          </p>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em] text-grey mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-grey/40 mb-12">
            Last updated: April 2026
          </p>

          <p className="text-sm leading-[1.8] text-grey/65 mb-12">
            P Cubed, Inc. ("we", "us", or "our") operates the website at pcubedeng.com. This policy describes how we handle information collected through this site.
          </p>

          <div className="flex flex-col gap-10">
            {sections.map(({ title, body }) => (
              <div key={title}>
                <h2 className="text-base font-bold text-grey mb-2">{title}</h2>
                <p className="text-sm leading-[1.8] text-grey/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
