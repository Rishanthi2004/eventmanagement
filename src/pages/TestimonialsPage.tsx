import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { IMAGES, TESTIMONIALS } from '../data/eventsData';
import { ImageWithFallback, Reveal, WordReveal } from '../components/MotionPrimitives';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';

const CATEGORIES = ['All', ...Array.from(new Set(TESTIMONIALS.map((t) => t.category)))];

export function TestimonialsPage() {
  const [selected, setSelected] = useState('All');

  const filtered =
    selected === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === selected);

  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      <section className="pt-24 pb-10 sm:pt-30 sm:pb-12 bg-gradient-to-b from-[#EDE2D3]/60 to-[#F8F3EB]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 text-center space-y-3">
          <Reveal immediate>
            <p className="text-xs tracking-[0.2em] text-[#9A7B4F] font-medium">
              Client Reviews
            </p>
          </Reveal>
          <WordReveal
            as="h1"
            immediate
            text="Beautiful Memories, Happy Clients."
            italicWord="Happy"
            className="font-serif text-[36px] sm:text-[54px] leading-[1.06] text-[#44382F]"
          />
          <Reveal immediate delay={0.15}>
            <p className="text-sm sm:text-base text-[#6E5F53] max-w-xl mx-auto">
              Real reflections from couples, corporate leaders, families, and cultural hosts.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-6 sm:py-10">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel showMoreLink={false} />
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-8">
            {CATEGORIES.map((cat) => {
              const active = selected === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelected(cat)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#2A332C] text-[#F8F3EB]'
                      : 'bg-[#EDE2D3]/70 text-[#6E5F53] hover:text-[#44382F]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="h-44 overflow-hidden bg-[#EDE2D3]">
                    <ImageWithFallback
                      src={item.eventImage}
                      alt={item.role}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <Quote className="w-5 h-5 text-[#C5A77A]" />
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: item.rating }).map((_, s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-[#C5A77A] text-[#C5A77A]" />
                        ))}
                      </div>
                    </div>
                    <p className="font-serif text-lg leading-relaxed text-[#44382F]">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-[#EDE2D3]">
                  <p className="font-serif text-base font-semibold text-[#44382F]">{item.name}</p>
                  <p className="text-xs text-[#6E5F53]">
                    {item.role} · {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CinematicCtaBanner
        headline="Your Celebration Could Be Our Next Story."
        image={IMAGES.anniversary}
      />
    </div>
  );
}
