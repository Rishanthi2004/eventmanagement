import React from 'react';
import { Reveal, WordReveal } from '../components/MotionPrimitives';
import { GalleryShowcase } from '../components/GalleryShowcase';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';

export function GalleryPage() {
  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      <section className="pt-24 pb-8 sm:pt-30 sm:pb-12">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <Reveal immediate>
            <p className="text-xs tracking-[0.2em] text-[#9A7B4F] font-medium">
              Visual Portfolio
            </p>
          </Reveal>
          <WordReveal
            as="h1"
            immediate
            text="Moments We've Made Extraordinary."
            italicWord="Extraordinary."
            className="font-serif text-[36px] sm:text-[54px] leading-[1.06] text-[#44382F]"
          />
          <Reveal immediate delay={0.15}>
            <p className="text-sm sm:text-base text-[#6E5F53] max-w-xl mx-auto">
              Filter by celebration type and tap any photo to view full-screen details.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryShowcase />
        </div>
      </section>

      <CinematicCtaBanner />
    </div>
  );
}
