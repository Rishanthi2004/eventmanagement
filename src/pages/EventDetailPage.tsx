import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Sparkles,
  Users,
} from 'lucide-react';
import { EVENT_CATEGORIES } from '../data/eventsData';
import { ImageWithFallback, Reveal, WordReveal } from '../components/MotionPrimitives';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = EVENT_CATEGORIES.find((c) => c.slug === slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!category) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center bg-[#F8F3EB]">
        <p className="text-xs tracking-[0.2em] text-[#9A7B4F] mb-2">Event Not Found</p>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#44382F] mb-4">
          Category Not Found
        </h1>
        <Link
          to="/events"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View All Event Categories</span>
        </Link>
      </div>
    );
  }

  const related = EVENT_CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      {/* Compact Bespoke Hero */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-18 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={category.image}
            alt={category.title}
            loading="eager"
            className={`w-full h-full object-cover ${category.imagePosition || 'object-center'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915]/90 via-[#1E1915]/60 to-[#1E1915]/45" />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs tracking-[0.12em] text-[#E6D3B3] hover:text-white mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Events</span>
          </Link>

          <div className="max-w-2xl space-y-3.5">
            <p className="text-xs tracking-[0.18em] text-[#E6D3B3] font-medium">
              {category.group}
            </p>
            <WordReveal
              as="h1"
              immediate
              text={category.title}
              className="font-serif text-[36px] sm:text-[54px] leading-[1.06] text-[#FCF9F4]"
            />
            <p className="text-sm sm:text-base text-[#EDE2D3]/92 leading-relaxed">
              {category.tagline}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to={`/plan-your-event?type=${encodeURIComponent(category.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A77A] text-[#1E1915] text-sm font-semibold hover:bg-[#D5BA92] transition-colors group"
              >
                <span>Plan Your {category.shortTitle}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Specs Bar */}
      <section className="bg-[#FCF9F4] border-b border-[#C5A77A]/25">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Users className="w-4 h-4 text-[#9A7B4F] shrink-0" />
            <span className="text-sm text-[#44382F] tabular-nums">{category.guestRange}</span>
          </div>
          <div className="flex items-center gap-3 sm:border-l sm:border-[#EDE2D3] sm:pl-5">
            <Clock className="w-4 h-4 text-[#9A7B4F] shrink-0" />
            <span className="text-sm text-[#44382F]">Lead Time: {category.leadTime}</span>
          </div>
          <div className="flex items-center gap-3 sm:border-l sm:border-[#EDE2D3] sm:pl-5">
            <Sparkles className="w-4 h-4 text-[#9A7B4F] shrink-0" />
            <span className="text-sm text-[#44382F]">{category.signatureStyle}</span>
          </div>
        </div>
      </section>

      {/* Narrative & Deliverables */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal direction="right" className="lg:col-span-6 space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#44382F]">
              Tailored Direction for{' '}
              <span className="italic font-normal text-[#9A7B4F]">{category.shortTitle}.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E5F53] leading-relaxed">
              {category.description}
            </p>
            <ul className="space-y-2.5 pt-2">
              {category.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-[#44382F]">
                  <Check className="w-4 h-4 text-[#9A7B4F] mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="left" className="lg:col-span-6 space-y-5">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] border border-[#C5A77A]/25 shadow-md">
              <ImageWithFallback
                src={category.secondaryImage}
                alt={`${category.title} editorial atmosphere`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#EDE2D3]/65 border border-[#C5A77A]/30 space-y-1.5">
              <p className="text-xs text-[#9A7B4F] font-medium">
                Featured Highlight · {category.featuredStory.guests}
              </p>
              <h3 className="font-serif text-2xl text-[#44382F]">
                {category.featuredStory.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E5F53]">{category.featuredStory.outcome}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 sm:py-16 bg-[#EDE2D3]/50 border-y border-[#C5A77A]/20">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-1.5">
            <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">Collections</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#44382F]">Planning Tiers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {category.packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-[#FCF9F4] border border-[#C5A77A]/30 rounded-2xl p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between gap-3 border-b border-[#EDE2D3] pb-3">
                    <h3 className="font-serif text-2xl text-[#44382F]">{pkg.name}</h3>
                    <span className="font-serif text-xl text-[#9A7B4F] tabular-nums whitespace-nowrap">
                      {pkg.investment}
                    </span>
                  </div>
                  <p className="text-xs text-[#6E5F53]">{pkg.idealFor}</p>
                  <ul className="space-y-2 pt-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[#44382F]">
                        <Check className="w-4 h-4 text-[#9A7B4F] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/plan-your-event?type=${encodeURIComponent(category.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620]"
                >
                  <span>Inquire for {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-3">
          <h2 className="font-serif text-3xl text-[#44382F] text-center mb-6">
            Common Questions
          </h2>
          {category.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#44382F]">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9A7B4F] shrink-0 transition-transform ${
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
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-[#6E5F53] leading-relaxed border-t border-[#EDE2D3]/70 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-[#EDE2D3]/45 border-t border-[#C5A77A]/20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#44382F]">More Event Categories</h2>
            <Link to="/events" className="text-xs sm:text-sm font-medium text-[#9A7B4F]">
              View All 10 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/events/${item.slug}`}
                className="group relative h-48 sm:h-56 rounded-xl overflow-hidden block bg-[#EDE2D3]"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915]/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-xl text-white">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CinematicCtaBanner
        headline={`Let's Craft Your ${category.shortTitle} Together.`}
        image={category.secondaryImage}
      />
    </div>
  );
}
