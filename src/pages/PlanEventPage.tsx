import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { EVENT_CATEGORIES, IMAGES } from '../data/eventsData';
import { ImageWithFallback, Reveal, WordReveal } from '../components/MotionPrimitives';
import { EnquiryForm } from '../components/EnquiryForm';

const NEXT_STEPS = [
  {
    step: '01',
    title: '24-Hour Review',
    text: 'A dedicated producer reviews your date, location, and celebration goals.',
  },
  {
    step: '02',
    title: 'Discovery Call',
    text: 'We align on visual mood, guest experience, and budget options.',
  },
  {
    step: '03',
    title: 'Custom Proposal',
    text: 'Receive a tailored direction dossier with venues and transparent pricing.',
  },
];

export function PlanEventPage() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') || '';
  const [selectedEventType, setSelectedEventType] = useState(initialType);

  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      {/* Compact Hero */}
      <section className="relative pt-24 pb-10 sm:pt-30 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={IMAGES.ctaBanquet}
            alt="Twilight open-air estate celebration"
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1915]/82 via-[#1E1915]/70 to-[#F8F3EB]" />
        </div>

        <div className="relative z-10 max-w-[1000px] mx-auto px-4 sm:px-6 text-center space-y-3">
          <Reveal immediate>
            <p className="text-xs tracking-[0.2em] text-[#E6D3B3] font-medium">
              Event Enquiry
            </p>
          </Reveal>
          <WordReveal
            as="h1"
            immediate
            text="Plan Your Extraordinary Event."
            italicWord="Extraordinary"
            className="font-serif text-[36px] sm:text-[54px] leading-[1.06] text-[#FCF9F4]"
          />
          <Reveal immediate delay={0.15}>
            <p className="text-sm sm:text-base text-[#EDE2D3]/92 max-w-xl mx-auto">
              Pick an occasion below and share your event details to get started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Compact Quick-Select Buttons */}
      <section className="pb-8">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {EVENT_CATEGORIES.map((cat) => {
              const isSelected = selectedEventType === cat.title;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedEventType(cat.title)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#2A332C] text-[#F8F3EB] border-[#2A332C]'
                      : 'bg-[#FCF9F4] text-[#44382F] border-[#C5A77A]/35 hover:border-[#9A7B4F]'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                  <span>{cat.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Concierge Next Steps */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <EnquiryForm preselectedEventType={selectedEventType} compact />
          </div>

          <div className="lg:col-span-4 bg-[#EDE2D3]/65 border border-[#C5A77A]/30 rounded-2xl p-6 space-y-5">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#44382F]">What Happens Next</h2>
            <div className="space-y-4">
              {NEXT_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-3.5 pb-4 border-b border-[#C5A77A]/25 last:border-0 last:pb-0"
                >
                  <span className="font-serif text-xl text-[#9A7B4F] tabular-nums shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#44382F]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E5F53] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
