import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { EVENT_CATEGORIES } from '../data/eventsData';
import { EternaLogoMark } from './BotanicalOrnament';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Events', to: '/events', hasDropdown: true },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileEventsExpanded, setMobileEventsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F8F3EB]/96 backdrop-blur-md border-b border-[#C5A77A]/25 shadow-[0_6px_24px_rgba(68,56,47,0.06)] py-2.5'
            : 'bg-[#F8F3EB]/90 backdrop-blur-xs border-b border-transparent py-3'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Zone 1: Brand wordmark + floral emblem */}
          <Link
            to="/"
            className="flex items-center gap-2 whitespace-nowrap shrink-0 group"
            aria-label="ETERNA EVENTS Home"
          >
            <EternaLogoMark className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-105" />
            <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.14em] text-[#44382F]">
              ETERNA EVENTS
            </span>
          </Link>

          {/* Zone 2: Center navigation (visible on lg+ so laptops see full nav) */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.to);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.to}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-0.5">
                      <Link
                        to={item.to}
                        className={`relative py-1 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors ${
                          active ? 'text-[#44382F]' : 'text-[#6E5F53] hover:text-[#44382F]'
                        }`}
                      >
                        {item.label}
                        {active && (
                          <motion.span
                            layoutId="nav-active-underline"
                            className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#9A7B4F]"
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          />
                        )}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((v) => !v)}
                        aria-expanded={dropdownOpen}
                        aria-label="Toggle event categories menu"
                        className="p-1 text-[#6E5F53] hover:text-[#44382F] transition-colors cursor-pointer"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            dropdownOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[560px]"
                        >
                          <div className="bg-[#FCF9F4] border border-[#C5A77A]/30 rounded-xl shadow-[0_20px_50px_rgba(68,56,47,0.12)] p-5">
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EDE2D3]">
                              <span className="font-serif text-lg text-[#44382F]">
                                Event Categories
                              </span>
                              <Link
                                to="/events"
                                className="inline-flex items-center gap-1 text-xs font-medium text-[#9A7B4F] hover:text-[#44382F] whitespace-nowrap"
                              >
                                View All 10
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
                              {EVENT_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.slug}
                                  to={`/events/${cat.slug}`}
                                  className="group flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-[#EDE2D3]/60 transition-colors"
                                >
                                  <span className="text-[13px] text-[#44382F] font-medium">
                                    {cat.title}
                                  </span>
                                  <ArrowRight className="w-3 h-3 text-[#C5A77A] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative py-1 text-[13.5px] font-medium whitespace-nowrap shrink-0 transition-colors ${
                    active ? 'text-[#44382F]' : 'text-[#6E5F53] hover:text-[#44382F]'
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-[#9A7B4F]"
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/plan-your-event"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2A332C] text-[#F8F3EB] text-[13px] font-medium whitespace-nowrap shrink-0 hover:bg-[#1E2620] transition-colors group"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden w-10 h-10 rounded-lg border border-[#C5A77A]/40 bg-[#FCF9F4] text-[#44382F] flex items-center justify-center hover:bg-[#EDE2D3] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-[#2A332C]/45 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-[#F8F3EB] border-l border-[#C5A77A]/30 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#EDE2D3]">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2"
                >
                  <EternaLogoMark className="w-6 h-6" />
                  <span className="font-serif text-lg font-semibold tracking-[0.14em] text-[#44382F]">
                    ETERNA EVENTS
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[#44382F] hover:bg-[#EDE2D3] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-0.5">
                {NAV_LINKS.map((item) => {
                  const active = isActive(item.to);
                  if (item.hasDropdown) {
                    return (
                      <div key={item.to} className="border-b border-[#EDE2D3]/80 pb-1">
                        <div className="flex items-center justify-between">
                          <Link
                            to={item.to}
                            className={`py-2.5 font-serif text-xl ${
                              active ? 'text-[#9A7B4F]' : 'text-[#44382F]'
                            }`}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileEventsExpanded((v) => !v)}
                            aria-label="Toggle event categories"
                            className="p-2 text-[#6E5F53] cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                mobileEventsExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileEventsExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden pl-3 space-y-1 pb-2"
                            >
                              {EVENT_CATEGORIES.map((cat) => (
                                <Link
                                  key={cat.slug}
                                  to={`/events/${cat.slug}`}
                                  className="block py-1 text-sm text-[#6E5F53] hover:text-[#44382F]"
                                >
                                  {cat.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`block py-2.5 font-serif text-xl border-b border-[#EDE2D3]/80 ${
                        active ? 'text-[#9A7B4F]' : 'text-[#44382F]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-5 border-t border-[#EDE2D3] bg-[#EDE2D3]/40">
                <Link
                  to="/plan-your-event"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620] transition-colors"
                >
                  <span>Plan Your Event</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
