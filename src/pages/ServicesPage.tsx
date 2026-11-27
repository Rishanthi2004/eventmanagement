import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { IMAGES, SERVICES } from '../data/eventsData';
import { ImageWithFallback, Reveal, WordReveal } from '../components/MotionPrimitives';
import { ServiceIcon } from '../components/ServiceIcon';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';

export function ServicesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(SERVICES[0].id);

  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      {/* Compact Split Hero */}
      <section className="pt-24 pb-10 sm:pt-30 sm:pb-14 bg-gradient-to-b from-[#EDE2D3]/60 to-[#F8F3EB]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Reveal immediate>
                <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                  Full-Service Production Atelier
                </p>
              </Reveal>
              <WordReveal
                as="h1"
                immediate
                text="Ten Disciplines, One Seamless Vision."
                italicWord="Seamless"
                className="font-serif text-[36px] sm:text-[52px] leading-[1.06] text-[#44382F]"
              />
              <Reveal immediate delay={0.15}>
                <p className="text-sm sm:text-base text-[#6E5F53] leading-relaxed max-w-xl">
                  From full planning and venue booking to floral design, catering, entertainment,
                  and seamless on-day coordination—tap any service to view what is included.
                </p>
              </Reveal>
              <Reveal immediate delay={0.22}>
                <Link
                  to="/plan-your-event"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620] transition-colors group"
                >
                  <span>Build Your Custom Scope</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>

            <Reveal immediate direction="left" className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-[#C5A77A]/30 shadow-md">
                <ImageWithFallback
                  src={IMAGES.concert}
                  alt="Orchestral lighting and stage craft"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clean Compact Expandable Service Cards (Super Easy on Mobile & Desktop) */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {SERVICES.map((service) => {
              const isOpen = expandedId === service.id;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-2xl overflow-hidden transition-colors hover:border-[#C5A77A]/60"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isOpen ? null : service.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-full bg-[#EDE2D3] text-[#9A7B4F] flex items-center justify-center shrink-0 mt-0.5">
                        <ServiceIcon name={service.icon} className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#9A7B4F] font-medium tabular-nums">
                          {service.index}
                        </p>
                        <h2 className="font-serif text-xl sm:text-2xl text-[#44382F] leading-snug">
                          {service.title}
                        </h2>
                        <p className="mt-1 text-xs sm:text-sm text-[#6E5F53] leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#9A7B4F] shrink-0 mt-2 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-[#EDE2D3] space-y-4">
                          <div className="rounded-xl overflow-hidden h-40 bg-[#EDE2D3]">
                            <ImageWithFallback
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm text-[#6E5F53] leading-relaxed">
                            {service.longDesc}
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.deliverables.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs sm:text-sm text-[#44382F]"
                              >
                                <Check className="w-4 h-4 text-[#9A7B4F] mt-0.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CinematicCtaBanner />
    </div>
  );
}
