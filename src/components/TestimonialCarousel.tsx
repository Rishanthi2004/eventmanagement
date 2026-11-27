import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/eventsData';
import { ImageWithFallback } from './MotionPrimitives';

export function TestimonialCarousel({ showMoreLink = true }: { showMoreLink?: boolean }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (paused || prefersReduced) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, prefersReduced]);

  const current = TESTIMONIALS[index];

  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <div
      className="bg-[#EDE2D3]/70 border border-[#C5A77A]/25 rounded-2xl p-5 sm:p-8 lg:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Editorial Title Column */}
        <div className="lg:col-span-3 space-y-3 sm:space-y-4">
          <p className="text-xs tracking-[0.16em] text-[#9A7B4F] font-medium">
            Client Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-[1.12] text-[#44382F]">
            Beautiful Memories, <span className="italic font-normal text-[#9A7B4F]">Happy Clients.</span>
          </h2>

          <div className="flex items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-[#44382F] hover:bg-[#2A332C] hover:text-[#F8F3EB] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-[#44382F] hover:bg-[#2A332C] hover:text-[#F8F3EB] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="ml-1 text-xs text-[#6E5F53] tabular-nums">
              0{index + 1} / 0{TESTIMONIALS.length}
            </span>
          </div>

          {showMoreLink && (
            <Link
              to="/reviews"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#44382F] hover:text-[#9A7B4F] transition-colors"
            >
              <span>Read All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        {/* Center Testimonial Card */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-xl p-5 sm:p-7 space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <Quote className="w-6 h-6 text-[#C5A77A]" />
                <div className="flex items-center gap-0.5" aria-label={`${current.rating} out of 5 stars`}>
                  {Array.from({ length: current.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-[#C5A77A] text-[#C5A77A]" />
                  ))}
                </div>
              </div>

              <blockquote className="font-serif text-lg sm:text-xl leading-relaxed text-[#44382F]">
                “{current.quote}”
              </blockquote>

              <div className="flex items-center gap-3 pt-3 border-t border-[#EDE2D3]">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C5A77A]/40 shrink-0 bg-[#EDE2D3]">
                  <ImageWithFallback
                    src={current.eventImage}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-base sm:text-lg font-semibold text-[#44382F] leading-tight">
                    {current.name}
                  </p>
                  <p className="text-xs text-[#6E5F53]">
                    {current.category} · {current.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Editorial Polaroid Accent (desktop only for clean mobile view) */}
        <div className="lg:col-span-4 hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-photos`}
              initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReduced ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="relative h-[260px] flex items-center justify-center"
            >
              <div className="absolute right-2 top-2 w-44 bg-white p-2 pb-6 rounded-lg shadow-md rotate-[5deg] border border-[#EDE2D3]">
                <div className="aspect-[4/3] overflow-hidden rounded-xs">
                  <ImageWithFallback
                    src={current.accentImage}
                    alt={`${current.role} detail`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="relative z-10 -translate-x-6 translate-y-3 w-52 bg-white p-2 pb-7 rounded-lg shadow-lg -rotate-[3deg] border border-[#EDE2D3]">
                <div className="aspect-[4/3] overflow-hidden rounded-xs">
                  <ImageWithFallback
                    src={current.eventImage}
                    alt={current.role}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-center font-serif italic text-xs text-[#6E5F53]">
                  {current.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {TESTIMONIALS.map((t, idx) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setIndex(idx)}
            aria-label={`View story from ${t.name}`}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === index ? 'w-7 bg-[#9A7B4F]' : 'w-2 bg-[#C5A77A]/45 hover:bg-[#C5A77A]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
