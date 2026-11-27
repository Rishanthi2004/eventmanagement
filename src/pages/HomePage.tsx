import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import {
  ArrowRight,
  Award,
  Check,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import {
  CONTACT_INFO,
  EVENT_CATEGORIES,
  IMAGES,
  PROCESS_STEPS,
  SERVICES,
  ServiceItem,
  STATS,
} from '../data/eventsData';
import { BotanicalDivider, BotanicalSprig } from '../components/BotanicalOrnament';
import {
  AnimatedCounter,
  ImageWithFallback,
  Reveal,
  WordReveal,
} from '../components/MotionPrimitives';
import { ServiceIcon } from '../components/ServiceIcon';
import { GalleryShowcase } from '../components/GalleryShowcase';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { CinematicCtaBanner } from '../components/CinematicCtaBanner';
import { EnquiryForm } from '../components/EnquiryForm';

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

const ABOUT_PILLARS = [
  { icon: Sparkles, title: 'Creative Event Planning' },
  { icon: Award, title: 'Professional Coordination' },
  { icon: Users, title: 'Trusted Vendor Network' },
  { icon: HeartHandshake, title: 'Personalized Experiences' },
];

export function HomePage() {
  const prefersReduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroImageY = useTransform(heroScroll, [0, 1], ['0%', prefersReduced ? '0%' : '8%']);

  const [showAllEvents, setShowAllEvents] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const visibleEvents = showAllEvents ? EVENT_CATEGORIES : EVENT_CATEGORIES.slice(0, 6);
  const visibleServices = showAllServices ? SERVICES : SERVICES.slice(0, 6);

  return (
    <div className="bg-[#F8F3EB] text-[#44382F]">
      {/* 1. HERO SECTION — Clean, Immediate, Single-Screen Editorial Composition */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-10 sm:pt-28 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#F8F3EB] via-[#F5EDE1] to-[#F8F3EB]"
      >
        <div className="hidden lg:block absolute -left-10 top-20 w-36 opacity-45 pointer-events-none">
          <BotanicalSprig />
        </div>

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            {/* Left Copy — immediate mount animation so headline is NEVER blank */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <Reveal immediate delay={0.02} distance={10}>
                <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                  Every Celebration Deserves to Be Extraordinary
                </p>
              </Reveal>

              <WordReveal
                as="h1"
                immediate
                text="Every Moment Deserves a Grand Celebration."
                italicWord="Grand"
                delay={0.05}
                className="font-serif text-[36px] sm:text-[48px] xl:text-[56px] leading-[1.06] tracking-[-0.01em] text-[#44382F]"
              />

              <Reveal immediate delay={0.2} distance={12}>
                <p className="text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#6E5F53] max-w-lg">
                  From unforgettable weddings and joyful birthdays to extraordinary corporate
                  gatherings, we transform your ideas into beautifully planned experiences.
                </p>
              </Reveal>

              <Reveal immediate delay={0.3} distance={12}>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    to="/plan-your-event"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620] transition-colors shadow-sm group whitespace-nowrap"
                  >
                    <span>Plan Your Event</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#our-events"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-[#44382F] text-sm font-medium hover:bg-[#EDE2D3] transition-colors whitespace-nowrap"
                  >
                    <span>Explore Our Events</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Cinematic Photography */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[240px] sm:h-[360px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(68,56,47,0.12)] border border-[#C5A77A]/25">
                <motion.div
                  className="w-full h-full"
                  style={{ y: heroImageY }}
                  initial={prefersReduced ? false : { scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: LUXURY_EASE }}
                >
                  <ImageWithFallback
                    src={IMAGES.heroGala}
                    alt="Traditional Tamil Nadu mandapam adorned with jasmine garlands and brass lamps"
                    loading="eager"
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-5 left-5 sm:left-auto text-right">
                  <p className="font-serif italic text-lg sm:text-xl text-[#FCF9F4]">
                    Tamil Weddings · Seemantham · Pongal · Corporate &amp; More
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Compact 4-Column Proof Strip */}
          <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 py-5 px-5 sm:px-8 rounded-2xl bg-[#FCF9F4] border border-[#C5A77A]/25">
            {STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={idx !== 0 ? 'lg:border-l lg:border-[#EDE2D3] lg:pl-6' : ''}
              >
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#44382F]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#44382F]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR EVENT CATEGORIES — Compact 2-Col Mobile / 3-Col Desktop + Expand to All 10 */}
      <section id="our-events" className="py-12 sm:py-16 lg:py-20 bg-[#F8F3EB]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                Our Event Categories
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#44382F]">
                Whatever the Occasion, We Make It{' '}
                <span className="italic font-normal text-[#9A7B4F]">Extraordinary.</span>
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9A7B4F] hover:text-[#44382F] transition-colors shrink-0"
            >
              <span>All 10 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {visibleEvents.map((category, idx) => (
              <Reveal key={category.slug} delay={(idx % 3) * 0.05} distance={16}>
                <Link
                  to={`/events/${category.slug}`}
                  className="group relative block h-[140px] sm:h-[245px] lg:h-[270px] rounded-xl overflow-hidden bg-[#EDE2D3] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    fallbackTitle={category.title}
                    className={`w-full h-full object-cover ${
                      category.imagePosition || 'object-center'
                    } transition-transform duration-500 ease-out group-hover:scale-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915]/88 via-[#1E1915]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-5">
                    <p className="hidden sm:block text-[11px] tracking-[0.12em] text-[#E6D3B3] mb-1">
                      {category.group}
                    </p>
                    <h3 className="font-serif text-[15px] sm:text-2xl leading-tight text-white">
                      {category.title}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1 text-[10.5px] sm:text-xs font-medium text-[#E6D3B3]">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={() => setShowAllEvents((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-sm font-medium text-[#44382F] hover:bg-[#EDE2D3] transition-colors cursor-pointer"
            >
              <span>{showAllEvents ? 'Show Fewer Categories' : 'Show All 10 Event Categories'}</span>
              {showAllEvents ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION — Clean & Simple Split Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#EDE2D3]/55 border-y border-[#C5A77A]/20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <Reveal direction="right" className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-md border border-[#C5A77A]/25">
                <ImageWithFallback
                  src={IMAGES.ctaBanquet}
                  alt="Beautifully decorated open-air luxury banquet venue"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#FCF9F4]/92 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-[#C5A77A]/30">
                  <p className="font-serif italic text-base text-[#44382F]">
                    Because every detail matters...
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-7 space-y-4 sm:space-y-5">
              <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                About Eterna Events
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#44382F]">
                Creating Memories That{' '}
                <span className="italic font-normal text-[#9A7B4F]">Last Forever.</span>
              </h2>
              <p className="text-sm sm:text-[15.5px] leading-[1.7] text-[#6E5F53]">
                We transform ordinary occasions into extraordinary experiences—handling creative
                concepts, floral design, trusted vendors, and calm on-day coordination for every
                type of celebration.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {ABOUT_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.title}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCF9F4] border border-[#C5A77A]/20"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#EDE2D3] flex items-center justify-center text-[#9A7B4F] shrink-0">
                        <Icon className="w-4 h-4" strokeWidth={1.6} />
                      </div>
                      <span className="font-serif text-base sm:text-lg font-semibold text-[#44382F] leading-tight">
                        {pillar.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2A332C] text-[#F8F3EB] text-sm font-medium hover:bg-[#1E2620] transition-colors group"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES — Compact 2-Col Mobile / 3-Col Desktop + Toggle All 10 */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F3EB]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                Our Services
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#44382F]">
                Complete Event{' '}
                <span className="italic font-normal text-[#9A7B4F]">Craft &amp; Production.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9A7B4F] hover:text-[#44382F] shrink-0"
            >
              <span>Full Services Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
            {visibleServices.map((service, idx) => (
              <Reveal key={service.id} delay={(idx % 3) * 0.04} distance={14}>
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="group w-full h-full text-left bg-[#FCF9F4] border border-[#C5A77A]/25 rounded-xl p-3 sm:p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C5A77A] hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#EDE2D3] text-[#9A7B4F] flex items-center justify-center mb-2 sm:mb-3.5 transition-colors group-hover:bg-[#2A332C] group-hover:text-[#F8F3EB]">
                      <ServiceIcon name={service.icon} className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="font-serif text-[15px] sm:text-2xl font-semibold leading-tight text-[#44382F]">
                      {service.title}
                    </h3>
                    <p className="hidden sm:block mt-1.5 text-sm text-[#6E5F53] line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <span className="mt-2.5 pt-2 sm:mt-3 sm:pt-2.5 border-t border-[#EDE2D3] inline-flex items-center justify-between w-full text-[11px] sm:text-xs font-medium text-[#9A7B4F] group-hover:text-[#2A332C]">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 text-center">
            <button
              type="button"
              onClick={() => setShowAllServices((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-sm font-medium text-[#44382F] hover:bg-[#EDE2D3] transition-colors cursor-pointer"
            >
              <span>{showAllServices ? 'Show Fewer Services' : 'View All 10 Services'}</span>
              {showAllServices ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 5. FEATURED EVENTS / GALLERY — Concise 4-Item Preview + Filters & Lightbox */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#EDE2D3]/45 border-t border-[#C5A77A]/20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
              Selected Portfolio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#44382F]">
              Moments We&apos;ve Made{' '}
              <span className="italic font-normal text-[#9A7B4F]">Extraordinary.</span>
            </h2>
          </Reveal>

          <GalleryShowcase limit={4} compact />

          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#44382F]/25 bg-[#FCF9F4] text-sm font-medium text-[#44382F] hover:bg-[#2A332C] hover:text-[#F8F3EB] transition-colors group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. OUR PLANNING PROCESS — Sequential 5-Step Editorial Timeline */}
      <section className="py-16 sm:py-24 bg-[#F8F3EB]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <p className="text-xs tracking-[0.2em] text-[#9A7B4F] font-medium">
              Our Planning Process
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl leading-[1.12] text-[#44382F]">
              From Your Idea to an{' '}
              <span className="italic font-normal text-[#9A7B4F]">Unforgettable Experience.</span>
            </h2>
            <BotanicalDivider className="pt-2" />
          </Reveal>

          <div className="relative">
            {/* Animated horizontal connecting rule on desktop */}
            <motion.div
              aria-hidden="true"
              initial={prefersReduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 'some' }}
              transition={{ duration: 1.0, ease: LUXURY_EASE }}
              className="hidden lg:block absolute top-8 left-12 right-12 h-px bg-gradient-to-r from-[#C5A77A]/30 via-[#C5A77A] to-[#C5A77A]/30 origin-left"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
              {PROCESS_STEPS.map((step, idx) => (
                <Reveal key={step.number} delay={idx * 0.1} distance={20}>
                  <div className="relative h-full flex flex-row lg:flex-col items-start lg:items-center lg:text-center gap-3.5 lg:gap-0 bg-[#FCF9F4] lg:bg-transparent border border-[#C5A77A]/25 lg:border-0 rounded-xl p-4 lg:p-2">
                    <div className="relative z-10 w-11 h-11 lg:w-16 lg:h-16 rounded-full bg-[#FCF9F4] border border-[#C5A77A] flex items-center justify-center shadow-xs shrink-0 lg:mb-5">
                      <span className="font-serif text-lg lg:text-2xl font-semibold text-[#9A7B4F] tabular-nums">
                        {step.number}
                      </span>
                    </div>
                    <div>
                      <p className="text-[11px] lg:text-xs tracking-[0.14em] text-[#9A7B4F] font-medium mb-0.5 lg:mb-1">
                        {step.subtitle}
                      </p>
                      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[#44382F] mb-1 lg:mb-2.5">
                        {step.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-[#6E5F53] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS — Compact Carousel */}
      <section className="py-8 sm:py-14 bg-[#F8F3EB]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. CALL-TO-ACTION BANNER */}
      <CinematicCtaBanner />

      {/* 9. STREAMLINED CONTACT / ENQUIRY SECTION */}
      <section id="enquiry" className="py-12 sm:py-16 lg:py-20 bg-[#F8F3EB]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <Reveal direction="right" className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <p className="text-xs tracking-[0.18em] text-[#9A7B4F] font-medium">
                  Private Concierge
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl leading-[1.12] text-[#44382F]">
                  Start Planning Your{' '}
                  <span className="italic font-normal text-[#9A7B4F]">Celebration.</span>
                </h2>
                <p className="text-sm text-[#6E5F53] leading-relaxed">
                  Share your date and vision—our senior producers reply within 24 hours.
                </p>
              </div>

              <div className="space-y-3 py-4 border-y border-[#C5A77A]/25 text-sm">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#9A7B4F] shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="font-medium text-[#44382F]">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#9A7B4F] shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium text-[#44382F]">
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#9A7B4F] mt-0.5 shrink-0" />
                  <span className="text-[#44382F]">{CONTACT_INFO.address}</span>
                </div>
              </div>

              <div className="hidden lg:block rounded-2xl overflow-hidden aspect-[16/10] border border-[#C5A77A]/25">
                <ImageWithFallback
                  src={IMAGES.privateParty}
                  alt="Eterna Events terrace reception ambiance"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal direction="left" className="lg:col-span-7">
              <EnquiryForm compact />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[85] bg-[#1C1814]/70 backdrop-blur-xs flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedService.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: LUXURY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-[#FCF9F4] border border-[#C5A77A]/35 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#1C1814]/70 text-white hover:bg-[#1C1814] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="h-44 sm:h-52 overflow-hidden">
                <ImageWithFallback
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 sm:p-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EDE2D3] text-[#9A7B4F] flex items-center justify-center">
                    <ServiceIcon name={selectedService.icon} className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#44382F]">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="text-sm text-[#6E5F53] leading-relaxed">
                  {selectedService.longDesc}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#EDE2D3]">
                  {selectedService.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs sm:text-sm text-[#44382F]">
                      <Check className="w-4 h-4 text-[#9A7B4F] mt-0.5 shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <Link
                    to="/services"
                    onClick={() => setSelectedService(null)}
                    className="text-xs sm:text-sm font-medium text-[#6E5F53] hover:text-[#44382F]"
                  >
                    All Services
                  </Link>
                  <Link
                    to="/plan-your-event"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2A332C] text-[#F8F3EB] text-xs sm:text-sm font-medium hover:bg-[#1E2620]"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
