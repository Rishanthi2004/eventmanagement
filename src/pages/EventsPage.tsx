import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Users } from 'lucide-react';
import { EVENT_CATEGORIES, IMAGES } from '../data/eventsData';
import { ImageWithFallback, Reveal, WordReveal } from '../components/MotionPrimitives';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';

const GROUPS = ['All', 'Social & Private', 'Corporate & Brand', 'Cultural & Live'] as const;
type GroupFilter = (typeof GROUPS)[number];

export function EventsPage() {
  const [group, setGroup] = useState<GroupFilter>('All');

  const visible =
    group === 'All'
      ? EVENT_CATEGORIES
      : EVENT_CATEGORIES.filter((c) => c.group === group);

  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      {/* Compact Panoramic Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.cultural}
            alt="Luminous celebration courtyard"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1915]/80 via-[#1E1915]/68 to-[#F8F3EB]" />
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 text-center">
          <Reveal immediate>
            <p className="text-xs tracking-[0.2em] text-[#E6D3B3] font-medium mb-3">
              All-Occasion Event Direction
            </p>
          </Reveal>
          <WordReveal
            as="h1"
            immediate
            text="Ten Worlds of Celebration."
            italicWord="Worlds"
            className="font-serif text-[38px] sm:text-[54px] leading-[1.06] text-[#FCF9F4]"
          />
          <Reveal immediate delay={0.15}>
            <p className="mt-3 text-sm sm:text-base text-[#EDE2D3]/92 max-w-xl mx-auto">
              Select an occasion below to explore tailored styling, packages, and planning details.
            </p>
          </Reveal>

          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-1.5 bg-[#FCF9F4]/95 p-1.5 rounded-full border border-[#C5A77A]/35 shadow-md">
            {GROUPS.map((g) => {
              const active = group === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  className={`relative px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    active ? 'text-[#F8F3EB]' : 'text-[#6E5F53] hover:text-[#44382F]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="events-group-tab"
                      className="absolute inset-0 bg-[#2A332C] rounded-full"
                      transition={{ duration: 0.22 }}
                    />
                  )}
                  <span className="relative z-10">{g}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clean Responsive Card Grid (2-col mobile / 3-col desktop) */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((cat) => (
                <motion.article
                  key={cat.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <Link
                      to={`/events/${cat.slug}`}
                      className="group block aspect-[16/10] overflow-hidden bg-[#EDE2D3]"
                    >
                      <ImageWithFallback
                        src={cat.image}
                        alt={cat.title}
                        fallbackTitle={cat.title}
                        className={`w-full h-full object-cover ${
                          cat.imagePosition || 'object-center'
                        } transition-transform duration-500 group-hover:scale-105`}
                      />
                    </Link>
                    <div className="p-5 space-y-2">
                      <p className="text-[11px] tracking-[0.12em] text-[#9A7B4F] font-medium">
                        {cat.group}
                      </p>
                      <h2 className="font-serif text-2xl text-[#44382F] leading-snug">
                        {cat.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#6E5F53] leading-relaxed line-clamp-2">
                        {cat.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-[#EDE2D3] flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-[#6E5F53] tabular-nums">
                      <Users className="w-3.5 h-3.5 text-[#9A7B4F]" />
                      {cat.guestRange}
                    </span>
                    <Link
                      to={`/events/${cat.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-[#2A332C] hover:text-[#9A7B4F] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CinematicCtaBanner />
    </div>
  );
}
