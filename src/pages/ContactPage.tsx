import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO, IMAGES } from '../data/eventsData';
import { ImageWithFallback, Reveal, WordReveal } from '../components/MotionPrimitives';
import { EnquiryForm } from '../components/EnquiryForm';

export function ContactPage() {
  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      <section className="pt-24 pb-8 sm:pt-30 sm:pb-12">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <Reveal immediate>
            <p className="text-xs tracking-[0.2em] text-[#9A7B4F] font-medium">
              Contact Our Atelier
            </p>
          </Reveal>
          <WordReveal
            as="h1"
            immediate
            text="Let's Begin a Conversation."
            italicWord="Conversation."
            className="font-serif text-[36px] sm:text-[54px] leading-[1.06] text-[#44382F]"
          />
          <Reveal immediate delay={0.15}>
            <p className="text-sm sm:text-base text-[#6E5F53] max-w-xl">
              Reach our concierge directly or send your event details below for a response within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#9A7B4F] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-[#6E5F53]">Telephone</p>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm font-medium text-[#44382F]">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#9A7B4F] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-[#6E5F53]">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-medium text-[#44382F]">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9A7B4F] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-[#6E5F53]">Flagship Studio</p>
                  <p className="text-sm font-medium text-[#44382F]">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#9A7B4F] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-[#6E5F53]">Hours</p>
                  <p className="text-sm text-[#44382F]">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[16/10] border border-[#C5A77A]/25">
              <ImageWithFallback
                src={IMAGES.babyShower}
                alt="Sunlit Eterna garden celebration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <EnquiryForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
