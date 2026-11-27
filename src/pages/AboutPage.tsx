import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { IMAGES, STATS, STUDIO_TEAM } from '../data/eventsData';
import {
  AnimatedCounter,
  ImageWithFallback,
  Reveal,
  WordReveal,
} from '../components/MotionPrimitives';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';

const VALUES = [
  {
    icon: Compass,
    title: 'Architectural Restraint',
    text: 'Proportion, floristry, and warm lighting working in harmony.',
  },
  {
    icon: Sparkles,
    title: 'Cross-Genre Mastery',
    text: 'Precision across weddings, corporate summits, concerts, and private galas.',
  },
  {
    icon: HeartHandshake,
    title: 'Invisible Hospitality',
    text: 'Seamless pacing so hosts enjoy every moment alongside their guests.',
  },
  {
    icon: Award,
    title: 'Vetted Artisan Guild',
    text: '50+ trusted florists, culinary chefs, lighting directors, and musicians.',
  },
];

export function AboutPage() {
  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      {/* Compact Editorial Split Hero */}
      <section className="pt-24 pb-12 sm:pt-30 sm:pb-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Reveal immediate>
                <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                  Our Story &amp; Ethos
                </p>
              </Reveal>
              <WordReveal
                as="h1"
                immediate
                text="Architects of Timeless Celebrations."
                italicWord="Timeless"
                className="font-serif text-[36px] sm:text-[52px] leading-[1.06] text-[#44382F]"
              />
              <Reveal immediate delay={0.15}>
                <p className="text-sm sm:text-base leading-[1.7] text-[#6E5F53] max-w-xl">
                  We unite editorial artistry with calm execution—transforming weddings, milestone
                  birthdays, executive summits, live concerts, and cultural festivals into lasting
                  memories.
                </p>
              </Reveal>
              <Reveal immediate delay={0.25} className="pt-1 flex flex-wrap gap-3">
                <Link
                  to="/plan-your-event"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620] transition-colors group"
                >
                  <span>Meet Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-sm font-medium text-[#44382F] hover:bg-[#EDE2D3]"
                >
                  <span>Explore Portfolio</span>
                </Link>
              </Reveal>
            </div>

            <Reveal immediate delay={0.1} className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden aspect-[16/11] border border-[#C5A77A]/25 shadow-md">
                <ImageWithFallback
                  src={IMAGES.heroGala}
                  alt="Eterna Events candlelit ballroom tablescape"
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compact Stats Bar */}
      <section className="py-10 bg-[#EDE2D3]/60 border-y border-[#C5A77A]/25">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-semibold text-[#44382F]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#44382F]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Core Values */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#44382F]">
              Editorial Taste Meets{' '}
              <span className="italic font-normal text-[#9A7B4F]">Operational Calm.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {VALUES.map((v, idx) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={idx * 0.06}>
                  <div className="h-full bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-xl p-5 sm:p-6 space-y-3">
                    <div className="w-10 h-10 rounded-full bg-[#EDE2D3] text-[#9A7B4F] flex items-center justify-center">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#44382F]">{v.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6E5F53] leading-relaxed">{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Leadership */}
      <section className="py-12 sm:py-16 bg-[#EDE2D3]/40 border-t border-[#C5A77A]/20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
              Leadership Team
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#44382F]">
              The Directors Behind Every Moment
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {STUDIO_TEAM.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 0.06}>
                <div className="h-full bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-xl p-4 sm:p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EDE2D3] to-[#D8B9AD]/50 border border-[#C5A77A]/40 flex items-center justify-center font-serif text-lg text-[#44382F]">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#44382F]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#9A7B4F] font-medium">{member.role}</p>
                  </div>
                  <p className="hidden sm:block text-xs text-[#6E5F53] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CinematicCtaBanner
        headline="Ready to Imagine Your Celebration?"
        description="Book a private studio or virtual consultation with our creative directors."
      />
    </div>
  );
}
