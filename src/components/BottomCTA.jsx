import React, { useState } from 'react';
import FadeUp from './FadeUp';

const inputClass =
  'bg-transparent border-b border-taupe/60 focus:border-brand-brown outline-none py-3 text-sm text-grey w-full transition-colors duration-200 placeholder:text-grey/30';
const labelClass = 'font-mono text-xs uppercase tracking-widest text-grey/40 mb-1 block';

export default function BottomCTA() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xreorbjd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-6 md:px-10 lg:px-16 py-10 md:py-14" style={{ scrollMarginTop: '4rem' }}>
      <div className="max-w-[1600px] mx-auto">
        <FadeUp>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">

            {/* Left — heading + contact form */}
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,3rem)] leading-[1.1] font-bold tracking-[-0.03em] text-grey">
                Ready to Build<br />Your Vision?
              </h2>

              <div className="mt-6">
                {status === 'success' ? (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-brand-gold mb-3">Message Sent</p>
                    <p className="text-sm text-grey/60 leading-[1.7]">
                      Thanks for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={fields.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={fields.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className={labelClass}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        placeholder="Tell us about your project..."
                        value={fields.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    {status === 'error' && (
                      <p className="text-xs text-red-500">Something went wrong. Please try again or email us directly.</p>
                    )}
                    <div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="bg-brand-brown hover:bg-brand-gold text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Sending…' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right — Careers */}
            <div id="careers" className="flex flex-col justify-center md:pl-10">
              <p className="font-mono text-xs text-brand-brown uppercase tracking-widest mb-4">Careers</p>
              <h3 className="text-[clamp(1.2rem,2vw,2rem)] leading-[1.15] font-bold tracking-[-0.03em] text-grey mb-3">
                Interested in a Career?
              </h3>
              <p className="leading-[1.6] text-grey/60 text-sm max-w-md mb-4">
                We're always looking for skilled professionals to join our team. If you have experience in the power industry and share our commitment to safety and quality, we'd love to hear from you.
              </p>
              <a
                href="mailto:bdonelan@p3eng.com"
                className="inline-flex items-center gap-3 text-brand-gold hover:text-brand-brown font-medium cursor-pointer group"
                style={{ transition: 'color 0.2s ease' }}
              >
                <span className="text-base">Apply now</span>
                <svg
                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M4 10h12M12 6l4 4-4 4" />
                </svg>
              </a>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  );
}
