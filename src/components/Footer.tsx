import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, EVENT_CATEGORIES } from '../data/eventsData';
import { EternaLogoMark } from './BotanicalOrnament';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'subscribed'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setStatus('subscribed');
    setErrorMsg('');
    setEmail('');
  };

  return (
    <footer className="bg-[#EDE2D3] border-t border-[#C5A77A]/30 text-[#44382F]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#C5A77A]/30">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link to="/" className="inline-flex items-center gap-2">
              <EternaLogoMark className="w-7 h-7" />
              <span className="font-serif text-xl font-semibold tracking-[0.15em] text-[#44382F]">
                ETERNA EVENTS
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#6E5F53] max-w-sm">
              Every Celebration Deserves to Be Extraordinary. Bespoke weddings, birthdays, corporate
              summits, concerts, cultural festivals, and private gatherings.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#44382F]/25 flex items-center justify-center text-[#44382F] hover:bg-[#2A332C] hover:text-[#F8F3EB] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#44382F]/25 flex items-center justify-center text-[#44382F] hover:bg-[#2A332C] hover:text-[#F8F3EB] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full border border-[#44382F]/25 flex items-center justify-center text-[#44382F] hover:bg-[#2A332C] hover:text-[#F8F3EB] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8.5 21.2c.6-2.4 1.3-5.2 1.6-6.7-.3-.6-.4-1.5-.4-2.3 0-2.1 1.2-3.7 2.8-3.7 1.3 0 1.9 1 1.9 2.2 0 1.3-.8 3.3-1.3 5.1-.3 1.5.7 2.7 2.2 2.7 2.6 0 4.4-3.3 4.4-7.2 0-3-2-5.2-5.7-5.2-4.1 0-6.7 3.1-6.7 6.5 0 1.2.4 2.1.9 2.7" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2-col compact links on mobile */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-5">
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-medium text-[#44382F]">Quick Links</h3>
              <ul className="space-y-2 text-[13.5px] text-[#6E5F53]">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'About Us', to: '/about' },
                  { label: 'Our Events', to: '/events' },
                  { label: 'Our Services', to: '/services' },
                  { label: 'Gallery', to: '/gallery' },
                  { label: 'Reviews', to: '/reviews' },
                  { label: 'Plan Your Event', to: '/plan-your-event' },
                ].map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-[#44382F] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-lg font-medium text-[#44382F]">Categories</h3>
              <ul className="space-y-2 text-[13.5px] text-[#6E5F53]">
                {EVENT_CATEGORIES.slice(0, 6).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/events/${cat.slug}`}
                      className="hover:text-[#44382F] transition-colors"
                    >
                      {cat.shortTitle}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-1 text-[#9A7B4F] font-medium hover:text-[#44382F]"
                  >
                    <span>All 10 Events</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#44382F]">Contact</h3>
            <ul className="space-y-2 text-[13.5px] text-[#6E5F53]">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#9A7B4F] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#44382F]">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#9A7B4F] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#44382F]">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#9A7B4F] mt-1 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>

            {status === 'subscribed' ? (
              <div className="flex items-center gap-2 text-xs text-[#2A332C] bg-[#F8F3EB] border border-[#C5A77A]/40 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-[#6C705E] shrink-0" />
                <span>Subscribed to the Eterna editorial list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="space-y-1">
                <div className="flex items-stretch">
                  <label htmlFor="footer-newsletter" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Newsletter email"
                    className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm bg-[#FCF9F4] border border-[#C5A77A]/40 rounded-l-lg text-[#44382F] placeholder:text-[#6E5F53]/70 focus:outline-none focus:border-[#9A7B4F]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="px-3.5 bg-[#2A332C] text-[#F8F3EB] rounded-r-lg hover:bg-[#1E2620] flex items-center justify-center cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-xs text-[#8C3B32]" role="alert">
                    {errorMsg}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#6E5F53]">
          <p>© {new Date().getFullYear()} ETERNA EVENTS. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#44382F]">
              Contact
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/plan-your-event" className="hover:text-[#44382F]">
              Plan Your Event
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
