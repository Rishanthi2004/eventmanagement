import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/eventsData';
import { ImageWithFallback, Reveal } from './MotionPrimitives';

export function CinematicCtaBanner({
  headline = "Let's Make Your Next Celebration Unforgettable.",
  description = "Tell us your dream. We'll take care of every detail.",
  image = IMAGES.ctaBanquet,
}: {
  headline?: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0">
        <ImageWithFallback
          src={image}
          alt="Grand twilight luxury celebration banquet"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#1E1915]/85 via-[#241E19]/75 to-[#1E1915]/78"
      />

      <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-5xl leading-[1.12] text-[#FCF9F4] max-w-2xl mx-auto">
            {headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#EDE2D3]/90 max-w-lg mx-auto">
            {description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/plan-your-event"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5A77A] text-[#1E1915] text-sm font-semibold hover:bg-[#D5BA92] transition-colors group whitespace-nowrap"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#F8F3EB]/45 bg-[#1E1915]/30 text-[#FCF9F4] text-sm font-medium hover:bg-[#FCF9F4] hover:text-[#2A332C] transition-colors whitespace-nowrap"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
