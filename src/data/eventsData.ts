export interface EventPackage {
  name: string;
  idealFor: string;
  investment: string;
  features: string[];
}

export interface EventCategory {
  slug: string;
  title: string;
  shortTitle: string;
  group: 'Social & Private' | 'Corporate & Brand' | 'Cultural & Live';
  tagline: string;
  summary: string;
  description: string;
  image: string;
  secondaryImage: string;
  imagePosition?: string;
  guestRange: string;
  leadTime: string;
  signatureStyle: string;
  highlights: string[];
  deliverables: string[];
  packages: EventPackage[];
  faqs: { q: string; a: string }[];
  featuredStory: {
    title: string;
    location: string;
    guests: string;
    outcome: string;
  };
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon:
    | 'Compass'
    | 'Building2'
    | 'Flower2'
    | 'Palette'
    | 'Camera'
    | 'UtensilsCrossed'
    | 'Music'
    | 'Sparkles'
    | 'Users'
    | 'ClipboardCheck';
  deliverables: string[];
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Weddings' | 'Birthdays' | 'Corporate' | 'Private Events' | 'Celebrations';
  eventType: string;
  location: string;
  guests: string;
  season: string;
  description: string;
  image: string;
  imagePosition?: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  category: string;
  location: string;
  rating: number;
  quote: string;
  outcome: string;
  initials: string;
  eventImage: string;
  accentImage: string;
}

export const IMAGES = {
  heroGala: '/src/assets/images/indian_hero_mandapam_gala_1795765251674.jpg',
  wedding: '/src/assets/images/tamil_wedding_mandapam_1795765253297.jpg',
  birthday: '/src/assets/images/indian_birthday_celebration_1795765255202.jpg',
  corporate: '/src/assets/images/indian_corporate_summit_1795765255834.jpg',
  babyShower: '/src/assets/images/tamil_seemantham_shower_1795765257637.jpg',
  anniversary: '/src/assets/images/indian_anniversary_banquet_1795765257843.jpg',
  college: '/src/assets/images/indian_college_function_1795765260058.jpg',
  concert: '/src/assets/images/indian_cta_grand_mandapam_1795765266476.jpg',
  cultural: '/src/assets/images/indian_pongal_diwali_festival_1795765265051.jpg',
  privateParty: '/src/assets/images/indian_private_reception_1795765266276.jpg',
  ctaBanquet: '/src/assets/images/indian_cta_grand_mandapam_1795765266476.jpg',
} as const;

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    slug: 'weddings-engagements',
    title: 'Weddings & Engagements',
    shortTitle: 'Weddings',
    group: 'Social & Private',
    tagline: 'Traditional Tamil Nadu mandapams, fresh jasmine cascades, and multi-day wedding artistry.',
    summary:
      'From auspicious Muhurtham ceremonies and Nichayathartham engagements to grand Chettinad receptions crafted with heirloom grace.',
    description:
      'Every family tradition deserves reverence and refined beauty. Our wedding studio orchestrates Tamil Nadu Muhurtham weddings, Chettinad heritage celebrations, Nichayathartham engagements, and grand evening receptions adorned with carved wooden mandapams, cascading malli poo garlands, brass kuthuvilakku lamps, and warm South Indian hospitality.',
    image: IMAGES.wedding,
    secondaryImage: IMAGES.heroGala,
    guestRange: '100 – 1,500 Guests',
    leadTime: '4 – 12 Months',
    signatureStyle: 'Heritage Mandapam & Fresh Jasmine Floristry',
    highlights: [
      'Carved teak & temple-inspired mandapams draped with fresh jasmine and marigolds',
      'Seamless coordination of Nichayathartham, Oonjal, Muhurtham & Reception',
      'Traditional banana-leaf Kalyana Virundhu & curated contemporary banquets',
      'Live Nadaswaram, Thavil & Carnatic classical ensembles',
    ],
    deliverables: [
      'Complete creative direction & custom mandapam architectural design',
      'Mandapam, resort & heritage Chettinad bungalow booking',
      'Fresh floral artistry, kolam styling & brass lamp decor',
      'Multi-day family concierge, priest coordination & hospitality management',
    ],
    packages: [
      {
        name: 'Intimate Muhurtham Atelier',
        idealFor: 'Nichayathartham & boutique weddings up to 250 guests',
        investment: 'From ₹6,50,000',
        features: [
          'Traditional mandapam & fresh jasmine-marigold styling',
          'Venue & vetted vendor coordination',
          'Nadaswaram ensemble & documentary photography',
          'Dedicated on-day wedding managers',
        ],
      },
      {
        name: 'Grand Heritage Wedding',
        idealFor: 'Multi-day Tamil Nadu weddings & receptions up to 1,500 guests',
        investment: 'From ₹18,00,000',
        features: [
          'Bespoke carved mandapam, reception stage & ambient lighting',
          'Complete guest RSVP, hotel hospitality & welcome thamboolam hampers',
          'Traditional Kalyana Virundhu & live gala catering curation',
          'Full 10-member on-site production crew',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you coordinate traditional Tamil Nadu Muhurtham rituals and timings?',
        a: 'Yes. Our planners work closely with family elders and Vedic priests so every auspicious ritual—from Vratham and Oonjal to Muhurtham and Nalangu—unfolds calmly and on time.',
      },
      {
        q: 'Can you style heritage Chettinad mansions and beach resorts across Tamil Nadu?',
        a: 'Absolutely. We regularly produce destination weddings across Chennai, Mahabalipuram, Karaikudi, Coimbatore, Madurai, and Pondicherry.',
      },
    ],
    featuredStory: {
      title: 'Chettinad Courtyard Jasmine Muhurtham',
      location: 'Karaikudi & Chennai, Tamil Nadu',
      guests: '480 Guests',
      outcome: 'Three-day celebration with custom carved mandapam, 2,000 feet of fresh jasmine, and flawless guest hospitality.',
    },
  },
  {
    slug: 'birthday-celebrations',
    title: 'Birthday Celebrations',
    shortTitle: 'Birthdays',
    group: 'Social & Private',
    tagline: 'Joyful Indian family milestones, floral arches, and warm luxury banquets.',
    summary:
      'Refined first birthdays, Ayush Homam milestones, 25th and 50th family celebrations designed with champagne-gold elegance.',
    description:
      'Celebrate every chapter surrounded by family and warmth. Whether an auspicious first birthday (Ayush Homam) or a joyful 50th milestone dinner in Chennai, we style warm cream-and-gold stages, fresh jasmine-and-peach marigold arches, bespoke tiered cakes, and memorable family hospitality.',
    image: IMAGES.birthday,
    secondaryImage: IMAGES.privateParty,
    guestRange: '30 – 400 Guests',
    leadTime: '3 – 12 Weeks',
    signatureStyle: 'Warm Family Luxury & Fresh Floral Backdrops',
    highlights: [
      'Custom jasmine, rose & soft marigold floral arches with brass accents',
      'Artisan tiered ivory-and-gold cakes & curated multi-cuisine Indian buffets',
      'Live acoustic singers, interactive family games & candid portrait booths',
      'Curated return gifts & traditional silk-inspired invitation suites',
    ],
    deliverables: [
      'Custom theme styling & floral stage fabrication',
      'Hotel banquet or private bungalow venue curation',
      'Catering, custom cake & warm fairy-light ambience',
      'End-to-end hosting flow, photography & family coordination',
    ],
    packages: [
      {
        name: 'Intimate Family Milestone',
        idealFor: 'Home or boutique hall celebrations of 30–100 guests',
        investment: 'From ₹1,85,000',
        features: [
          'Bespoke floral backdrop & warm candlelight tablescapes',
          'Tiered designer cake & curated hospitality menu',
          'Candid family photography & highlight film',
        ],
      },
      {
        name: 'Grand Celebration Gala',
        idealFor: 'Hotel ballroom milestones of 120–400 guests',
        investment: 'From ₹4,50,000',
        features: [
          'Full hall drapery, floral archways & illuminated entrance',
          'Live music band, emcee & kids hospitality corner',
          'Custom return gifts & valet guest management',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you organize traditional 1st Birthday Ayush Homam followed by an evening party?',
        a: 'Yes. We seamlessly transition venues from serene morning rituals with banana-leaf lunch to a glowing champagne-gold evening celebration.',
      },
      {
        q: 'Can you decorate our family bungalow or terrace for an intimate birthday?',
        a: 'Certainly—we bring custom floral frames, brass lamps, cream lounge seating, and boutique catering directly to your residence.',
      },
    ],
    featuredStory: {
      title: 'The Ivory & Jasmine Milestone Evening',
      location: 'MRC Nagar, Chennai',
      guests: '160 Guests',
      outcome: 'Bespoke jasmine-marigold stage, 3-tier gold-leaf cake, and live classical fusion ensemble.',
    },
  },
  {
    slug: 'corporate-events',
    title: 'Corporate Events',
    shortTitle: 'Corporate',
    group: 'Corporate & Brand',
    tagline: 'Executive summits, annual awards galas, and refined Indian hospitality.',
    summary:
      'Commanding stages, crisp audio-visual production, ceremonial lamp lighting, and effortless hospitality for leading enterprises.',
    description:
      'From national leadership summits and annual dealer meets to executive awards nights across Chennai, Bengaluru, and Mumbai, Eterna blends technical precision with dignified Indian hospitality—from auspicious kuthuvilakku inauguration to black-tie gala dining.',
    image: IMAGES.corporate,
    secondaryImage: IMAGES.heroGala,
    guestRange: '50 – 1,500 Guests',
    leadTime: '1 – 6 Months',
    signatureStyle: 'Contemporary Warmth & Precision Stagecraft',
    highlights: [
      'Custom LED stage backdrops framed with fresh white jasmine and orchids',
      'Traditional brass kuthuvilakku lamp lighting for auspicious openings',
      'VIP executive check-in, speaker green rooms & seamless show calling',
      'Five-star hospitality menus & curated corporate gifting',
    ],
    deliverables: [
      'Full AV engineering, lighting cues & stage fabrication',
      'Five-star hotel ballroom contracting & floor layouts',
      'Delegate registration, badge desk & executive hospitality',
      'Dedicated show director & corporate photography/film coverage',
    ],
    packages: [
      {
        name: 'Executive Conference & Summit',
        idealFor: 'Leadership forums, board summits & corporate offsites',
        investment: 'From ₹4,80,000',
        features: [
          'Custom stage branding, AV suite & lamp-lighting podium',
          'Seamless delegate check-in & executive dining',
          'Event photography & keynote highlight video',
        ],
      },
      {
        name: 'Annual Gala & Awards Night',
        idealFor: '250–1,500 guest corporate banquets & ceremonies',
        investment: 'From ₹12,50,000',
        features: [
          'Full show production, concert audio & award choreography',
          'Gala banquet dining & live classical-contemporary entertainment',
          'VIP arrival lounge & sponsor branding',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you manage multi-city corporate roadshows and leadership conferences?',
        a: 'Yes. Our corporate division produces summits across Chennai, Bengaluru, Hyderabad, Coimbatore, and Mumbai under one unified production lead.',
      },
      {
        q: 'Can you blend modern brand guidelines with traditional Indian welcome rituals?',
        a: 'That is our signature—pairing clean architectural staging with warm floral welcomes, brass lamp inaugurations, and five-star service.',
      },
    ],
    featuredStory: {
      title: 'India Leadership Summit & Awards Gala',
      location: 'ITC Grand Chola, Chennai',
      guests: '520 Executives',
      outcome: '98.6% delegate satisfaction across two days of keynotes and an evening awards banquet.',
    },
  },
  {
    slug: 'baby-showers-naming-ceremonies',
    title: 'Seemantham & Baby Showers',
    shortTitle: 'Seemantham',
    group: 'Social & Private',
    tagline: 'Auspicious Tamil Nadu Seemantham, Valaikaappu swings, and naming ceremonies.',
    summary:
      'Carved teak oonjal swings draped in fresh jasmine and mango leaves, glass bangle rituals, and heartwarming Namakaranam ceremonies.',
    description:
      'Welcoming a new life is among the most cherished moments in an Indian home. We craft authentic Tamil Nadu Seemantham (Valaikaappu) ceremonies and baby naming celebrations with carved wooden swings, fragrant malli poo & marigold garlands, brass trays of fruits and glass bangles, and joyful family feasts.',
    image: IMAGES.babyShower,
    secondaryImage: IMAGES.wedding,
    guestRange: '30 – 250 Guests',
    leadTime: '2 – 10 Weeks',
    signatureStyle: 'Traditional Oonjal Grace & Fresh Mango-Leaf Florals',
    highlights: [
      'Carved wooden oonjal swings adorned with jasmine, marigolds & mango thoranam',
      'Curated brass seer trays with colorful glass bangles, turmeric, fruits & sweets',
      'Traditional five-variety rice feast (Kalanda Sadam) & South Indian sweets',
      'Warm family portraits & tender ceremonial coverage',
    ],
    deliverables: [
      'Complete Seemantham oonjal or cradle floral installation',
      'Traditional brass lamps, kolam artistry & seating choreography',
      'Authentic banana-leaf feast & artisan sweet boxes',
      'Stress-free setup, hosting support & candid photography',
    ],
    packages: [
      {
        name: 'Intimate Valaikaappu Atelier',
        idealFor: 'Home or boutique hall Seemantham (30–80 guests)',
        investment: 'From ₹1,45,000',
        features: [
          'Floral oonjal swing & fresh jasmine-marigold backdrop',
          'Curated bangle & thamboolam return gift trays',
          'Traditional catering & candid family photography',
        ],
      },
      {
        name: 'Grand Seemantham & Naming Ceremony',
        idealFor: 'Family celebrations of 100–250 guests',
        investment: 'From ₹3,40,000',
        features: [
          'Elaborate carved swing or floral cradle pavilion & brass lamps',
          'Full traditional feast, live veena music & guest concierge',
          'Custom silver-finish return gift hampers & film coverage',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you arrange all traditional Valaikaappu glass bangles, seer plates, and thamboolam?',
        a: 'Yes. We curate authentic brass plates, colorful glass bangles, fresh jasmine strands, turmeric-kumkum packs, and bespoke thamboolam bags.',
      },
      {
        q: 'Can you style both traditional Seemantham and modern pastel baby showers?',
        a: 'Yes—we specialize in timeless champagne-gold and rose palettes that honor traditional rituals while looking effortlessly editorial.',
      },
    ],
    featuredStory: {
      title: 'The Teak Oonjal Seemantham Morning',
      location: 'Boat Club Road, Chennai',
      guests: '110 Guests',
      outcome: 'Carved wooden swing draped in jasmine and mango leaves with traditional Kalanda Sadam feast.',
    },
  },
  {
    slug: 'anniversary-celebrations',
    title: 'Anniversary Celebrations',
    shortTitle: 'Anniversaries',
    group: 'Social & Private',
    tagline: 'Silver jubilees, Shashtiabdapoorthi, and golden Chettinad courtyard banquets.',
    summary:
      'Honoring 25th, 50th, and 60th wedding milestones with traditional blessings, family banquets, and heirloom storytelling.',
    description:
      'Celebrate decades of companionship surrounded by children, grandchildren, and lifelong friends. Whether a sacred Shashtiabdapoorthi (60th milestone) or an intimate 25th silver jubilee dinner in a Chettinad courtyard, we design heartfelt gatherings glowing with brass lamps, jasmine runners, and archival family memories.',
    image: IMAGES.anniversary,
    secondaryImage: IMAGES.ctaBanquet,
    guestRange: '30 – 300 Guests',
    leadTime: '1 – 5 Months',
    signatureStyle: 'Chettinad Heritage Courtyard & Candlelit Brass',
    highlights: [
      'Traditional Chettinad courtyard tablescapes with fresh jasmine runners',
      'Sacred vow renewal & Shashtiabdapoorthi ritual coordination',
      'Curated family memory photo walks & tribute film screenings',
      'Live veena, flute & retro melody ensembles',
    ],
    deliverables: [
      'Heritage courtyard styling, kolam & brass kuthuvilakku lighting',
      'Archival family gallery & tribute documentary edit',
      'Traditional feast & evening banquet catering',
      'Full hospitality coordination for elderly family members',
    ],
    packages: [
      {
        name: 'Silver Jubilee Courtyard Dinner',
        idealFor: '25th anniversaries of 30–100 family & friends',
        investment: 'From ₹2,20,000',
        features: [
          'Linen banquet table with jasmine runners & brass tableware',
          'Family memory tribute display & live instrumental duo',
          'Multi-course South Indian & contemporary dining',
        ],
      },
      {
        name: 'Grand Shashtiabdapoorthi Celebration',
        idealFor: '60th & 50th milestones of 120–300 guests',
        investment: 'From ₹6,20,000',
        features: [
          'Traditional homam mandapam & evening banquet transformation',
          'Complete priest, nadaswaram & elder-friendly hospitality',
          'Heirloom printed photo album & family cinema film',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you secretly organize a surprise 25th or 50th anniversary for our parents?',
        a: 'Yes! We frequently partner with children living in India and abroad to plan heartfelt surprise gatherings and tribute videos.',
      },
      {
        q: 'Do you ensure comfortable seating and accessibility for senior family members?',
        a: 'Always. We design shaded courtyard seating, low-step stage access, and attentive hospitality aides for senior guests.',
      },
    ],
    featuredStory: {
      title: '25th Silver Jubilee Chettinad Courtyard',
      location: 'Poes Garden, Chennai',
      guests: '120 Guests',
      outcome: 'Sunlit heritage courtyard dinner with brass kuthuvilakku lamps, jasmine runners, and family tribute film.',
    },
  },
  {
    slug: 'college-school-events',
    title: 'College & School Events',
    shortTitle: 'College Events',
    group: 'Cultural & Live',
    tagline: 'Grand Tamil Nadu campus cultural fests, Sangam nights, and convocation galas.',
    summary:
      'Vibrant college cultural days, traditional ethnic days, alumni homecomings, and graduation ceremonies produced at scale.',
    description:
      'Campus milestones create lifelong memories. We partner with universities, colleges, and heritage schools across South India to produce annual cultural festivals, Bharatanatyam & music showcases, ethnic-day celebrations, and convocation ceremonies with safe crowd logistics and radiant staging.',
    image: IMAGES.college,
    secondaryImage: IMAGES.concert,
    guestRange: '250 – 5,000+ Attendees',
    leadTime: '1 – 5 Months',
    signatureStyle: 'Heritage Campus Architecture & Festive Marigold Lighting',
    highlights: [
      'Illuminated open-air campus stages adorned with marigold & jasmine drapes',
      'Concert-grade audio arrays, warm fairy-light canopies & LED screens',
      'Classical dance, band battles, celebrity guest booking & stage direction',
      'Organized student entry, VIP faculty lounges & sponsor stalls',
    ],
    deliverables: [
      'Campus master site map, stage rigging & safety planning',
      'Sound engineering, theatrical lighting & live show calling',
      'Artist & chief guest hospitality coordination',
      'Multi-camera live feed & high-energy campus aftermovie',
    ],
    packages: [
      {
        name: 'Annual Day & Convocation',
        idealFor: 'School/college formal ceremonies & ethnic days',
        investment: 'From ₹3,50,000',
        features: [
          'Traditional floral stage backdrop, brass lamp & fairy lighting',
          'Crystal-clear auditorium or quadrangle audio',
          'VIP faculty hospitality & event coverage',
        ],
      },
      {
        name: 'Flagship College Cultural Fest',
        idealFor: 'Multi-day university festivals up to 5,000 students',
        investment: 'From ₹11,50,000',
        features: [
          'Main concert stage, lighting trusses & pro line-array audio',
          'Headline artist booking & student performance choreography',
          'Full crowd operations, barricading & aftermovie',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you coordinate directly with college management and student cultural committees?',
        a: 'Yes. We provide structured budgets, safety approvals, and collaborative run-of-show sessions with both faculty coordinators and student secretaries.',
      },
      {
        q: 'Can you handle both classical showcases and evening pro-show concerts?',
        a: 'Certainly—our audio and lighting directors seamlessly transition from classical Bharatanatyam recitals to high-energy live concerts.',
      },
    ],
    featuredStory: {
      title: 'Sangam Heritage Campus Cultural Night',
      location: 'Historic Stone Quadrangle, Tamil Nadu',
      guests: '1,800 Students & Faculty',
      outcome: 'Illuminated heritage courtyard, classical dance showcase, and seamless crowd flow.',
    },
  },
  {
    slug: 'concerts-live-shows',
    title: 'Concerts & Live Shows',
    shortTitle: 'Concerts',
    group: 'Cultural & Live',
    tagline: 'Margazhi Carnatic sabhas, devotional evenings, and grand live music concerts.',
    summary:
      'Acoustically refined Carnatic concerts, classical fusion nights, and open-air temple courtyard music festivals.',
    description:
      'From intimate Margazhi season Carnatic vocal and veena recitals to grand open-air orchestral fusion concerts inside heritage mandapams, Eterna engineers warm acoustic clarity, sculpted jasmine-and-brass stage aesthetics, and dignified patron hospitality.',
    image: IMAGES.concert,
    secondaryImage: IMAGES.college,
    guestRange: '150 – 4,000 Guests',
    leadTime: '1 – 6 Months',
    signatureStyle: 'Temple Mandapam Acoustics & Golden Lamp Ambience',
    highlights: [
      'Balanced acoustic sound engineering tailored for classical & contemporary instruments',
      'Sculpted brass lamp, uruli & cascading jasmine stage framing',
      'Acclaimed Carnatic, playback & indie artist contracting and hospitality',
      'Patron seating choreography, filter-coffee intermissions & VIP lounges',
    ],
    deliverables: [
      'FOH audio engineering, stage monitors & warm concert lighting',
      'Artist rider fulfillment & backstage green-room management',
      'Pass distribution, ushering & VIP patron welcome',
      'Multi-camera live video recording & broadcast audio mix',
    ],
    packages: [
      {
        name: 'Intimate Chamber & Sabha Concert',
        idealFor: 'Private estate recitals & cultural sabhas (150–400 guests)',
        investment: 'From ₹4,20,000',
        features: [
          'Traditional jasmine & brass lamp stage design',
          'Precision classical acoustic reinforcement',
          'Patron hospitality & multi-cam recording',
        ],
      },
      {
        name: 'Grand Open-Air Music Festival',
        idealFor: 'Major concerts & charity galas (500–4,000 guests)',
        investment: 'From ₹14,00,000',
        features: [
          'Full concert rigging, architectural lighting & LED backdrops',
          'Headline artist logistics & VIP hospitality suites',
          'Ticketing, crowd flow & security management',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you book renowned Carnatic musicians, playback singers, or classical dance troupes?',
        a: 'Yes. We maintain direct relationships with leading South Indian classical ensembles, playback vocalists, and contemporary fusion bands.',
      },
      {
        q: 'How do you manage sound clarity in historic stone courtyards?',
        a: 'Our audio engineers use directional line-array speakers tuned specifically to minimize echo while keeping natural acoustic warmth intact.',
      },
    ],
    featuredStory: {
      title: 'Twilight Mandapam Classical Music Gala',
      location: 'Heritage Stone Courtyard, Madurai',
      guests: '650 Patrons',
      outcome: 'Sold-out evening recital surrounded by floating flower urulis and glowing clay diyas.',
    },
  },
  {
    slug: 'product-launches-brand-events',
    title: 'Product Launches & Brand Events',
    shortTitle: 'Brand Launches',
    group: 'Corporate & Brand',
    tagline: 'Heritage luxury showcases for Indian jewellery, silk, beauty, and lifestyle houses.',
    summary:
      'High-impact brand unveilings, Kanchipuram silk couture previews, and luxury jewellery exhibitions crafted for media and collectors.',
    description:
      'When an iconic Indian brand unveils a new collection, the setting must radiate craftsmanship and prestige. We design bespoke exhibition halls, illuminated display plinths, creator preview dinners, and press launches blending warm ivory minimalism with authentic Indian floral artistry.',
    image: IMAGES.heroGala,
    secondaryImage: IMAGES.corporate,
    imagePosition: 'object-center',
    guestRange: '50 – 600 Guests',
    leadTime: '3 – 12 Weeks',
    signatureStyle: 'Indian Luxury Couture & Architectural Florals',
    highlights: [
      'Custom teak, travertine & champagne-brass product display installations',
      'Media preview scheduling, celebrity guest arrivals & VIP collector lounges',
      'Editorial photo backdrops designed for high-impact press & social coverage',
      'Curated artisanal snacks, filter-coffee bars & branded keepsake hampers',
    ],
    deliverables: [
      'Experiential brand spatial concept & 3D visualizations',
      'Custom scenic fabrication, floral installations & reveal cues',
      'Press, influencer & VIP buyer check-in hospitality',
      'Same-night editorial stills & launch reel delivery',
    ],
    packages: [
      {
        name: 'Boutique Press & Collector Preview',
        idealFor: 'Jewellery, silk couture & luxury lifestyle previews',
        investment: 'From ₹4,50,000',
        features: [
          'Sculptural floral & brass product display styling',
          'Curated hospitality bar & VIP seating lounge',
          'Same-day press photography gallery',
        ],
      },
      {
        name: 'Flagship Collection Unveiling',
        idealFor: 'Large-scale brand launches of 200–600 guests',
        investment: 'From ₹13,50,000',
        features: [
          'Custom stage reveal, theatrical lighting & runway/exhibition build',
          'Live classical-contemporary soundscape & gourmet dinner',
          'VIP gifting atelier & media management',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you collaborate with jewellery, silk saree, and real estate brands across South India?',
        a: 'Yes—we regularly design flagship showroom launches, bridal couture previews, and luxury hospitality unveilings across Chennai, Coimbatore, and Bengaluru.',
      },
      {
        q: 'Can you deliver rapid turnarounds for festive season launches?',
        a: 'Our in-house production and floral teams can fabricate press-ready brand showcases in as little as three weeks.',
      },
    ],
    featuredStory: {
      title: 'Heirloom Gold & Kanchipuram Couture Showcase',
      location: 'Nungambakkam Heritage Hall, Chennai',
      guests: '320 Press & VIP Patrons',
      outcome: '38 editorial features and record opening-weekend private collection bookings.',
    },
  },
  {
    slug: 'festivals-cultural-celebrations',
    title: 'Pongal, Diwali & Cultural Festivals',
    shortTitle: 'Pongal & Diwali',
    group: 'Cultural & Live',
    tagline: 'Radiant Tamil Nadu Pongal mornings, Diwali diya courtyards, and Navaratri galas.',
    summary:
      'Authentic Pongal harvest courtyards with brass pots and sugarcane, luminous Diwali soirées, and community cultural celebrations.',
    description:
      'Indian festivals come alive through color, fragrance, and togetherness. From traditional Thai Pongal celebrations with decorated brass pots, sugarcane, and intricate pulli kolam to twilight Diwali evenings glowing with thousands of clay diyas, brass urulis, and jasmine garlands—we honor every custom with luxury polish.',
    image: IMAGES.cultural,
    secondaryImage: IMAGES.ctaBanquet,
    guestRange: '60 – 2,500 Guests',
    leadTime: '3 – 12 Weeks',
    signatureStyle: 'Luminous Diyas, Kolam Artistry & Harvest Florals',
    highlights: [
      'Traditional decorated brass Pongal pots, fresh sugarcane & live Sakkarai Pongal stations',
      'Hand-drawn rice-flour kolams, brass urulis & thousands of glowing clay diyas',
      'Folk arts, Parai & Bharatanatyam performances, and live Carnatic music',
      'Curated festive mithai counters, filter coffee & traditional return hampers',
    ],
    deliverables: [
      'Authentic cultural decor honoring Tamil & pan-Indian traditions',
      'Courtyard lighting, marigold-jasmine garlands & kolam artistry',
      'Traditional performance programming & interactive craft stalls',
      'Festive hospitality, family photography & full event coordination',
    ],
    packages: [
      {
        name: 'Heritage Courtyard Festival',
        idealFor: 'Family or corporate Pongal & Diwali gatherings (60–250 guests)',
        investment: 'From ₹2,40,000',
        features: [
          'Pongal pot & sugarcane setup or Diwali diya-uruli transformation',
          'Intricate kolam artistry & fresh jasmine-marigold garlands',
          'Traditional snacks, festive feast & live folk/classical music',
        ],
      },
      {
        name: 'Grand Community & Corporate Utsav',
        idealFor: 'Large residential, institutional or brand festivals (400–2,500 guests)',
        investment: 'From ₹9,50,000',
        features: [
          'Multi-zone cultural pavilions, craft village & main stage',
          'Traditional art troupes, live kitchens & illuminated courtyards',
          'Full operations, hospitality & documentary film',
        ],
      },
    ],
    faqs: [
      {
        q: 'Do you organize corporate Pongal and Diwali celebrations for offices and tech parks?',
        a: 'Yes! We transform corporate campuses and hotel lawns into authentic festive villages with live Pongal cooking, traditional games, folk artists, and festive banquets.',
      },
      {
        q: 'Do you also style Navaratri Golu showcases and Karthigai Deepam evenings?',
        a: 'Absolutely—we curate stepped Golu displays, floral backdrops, brass deepam lighting, and intimate evening musical gatherings.',
      },
    ],
    featuredStory: {
      title: 'Chettinad Courtyard Pongal & Deepam Utsav',
      location: 'Heritage Mansion, Karaikudi',
      guests: '340 Guests',
      outcome: 'Overflowing brass Pongal pot, 1,500 glowing clay diyas, intricate kolam, and traditional folk ensemble.',
    },
  },
  {
    slug: 'private-parties-special-occasions',
    title: 'Private Parties & Family Gatherings',
    shortTitle: 'Private Parties',
    group: 'Social & Private',
    tagline: 'Heritage veranda receptions, Grihapravesham celebrations, and intimate soirées.',
    summary:
      'Bespoke housewarmings (Grihapravesham), veranda tea receptions, family reunions, and private estate dinners.',
    description:
      'Whether blessing a newly built home with a serene Grihapravesham or hosting an intimate golden-hour reception on a pillared veranda, we handle every floral garland, brass lantern, filter-coffee service, and gourmet spread so you enjoy unhurried time with loved ones.',
    image: IMAGES.privateParty,
    secondaryImage: IMAGES.anniversary,
    guestRange: '25 – 250 Guests',
    leadTime: '2 – 10 Weeks',
    signatureStyle: 'Heritage Bungalow Veranda & Warm South Indian Hospitality',
    highlights: [
      'Pillared veranda styling with ivory silk drapes, jasmine & brass lanterns',
      'Grihapravesham entrance mango-leaf thoranams, kolam & floral arches',
      'Curated South Indian high-tea, brass davara filter coffee & fine dining',
      'Attentive residential hospitality staff & spotless post-event care',
    ],
    deliverables: [
      'Home & veranda floral decor with non-intrusive installations',
      'Custom cream lounge seating & brass accent styling',
      'Private chef catering & warm beverage service',
      'Complete setup, guest welcome & next-morning restoration',
    ],
    packages: [
      {
        name: 'Veranda Tea & Evening Soirée',
        idealFor: 'Intimate home gatherings & reunions (25–80 guests)',
        investment: 'From ₹1,65,000',
        features: [
          'Fresh jasmine & marigold pillar wraps with brass hanging lanterns',
          'Artisan snacks, filter coffee bar & fine dining service',
          'Warm ambient lighting & candid photography',
        ],
      },
      {
        name: 'Grand Grihapravesham & Estate Reception',
        idealFor: 'New home blessings & milestone private dinners (100–250 guests)',
        investment: 'From ₹4,20,000',
        features: [
          'Full residence floral architecture, entrance arch & kolam welcome',
          'Morning ritual coordination + evening veranda reception',
          'Live instrumental ensemble, valet & complete guest care',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can you style a Grihapravesham housewarming without damaging new walls or woodwork?',
        a: 'Yes. We use freestanding teak frames, gentle cotton-tied floral wraps, and floor-protective coverings to keep your new home immaculate.',
      },
      {
        q: 'Do you handle both traditional tiffin menus and contemporary dinner spreads?',
        a: 'Yes—our catering partners craft everything from heirloom banana-leaf breakfasts to refined multi-course evening banquets.',
      },
    ],
    featuredStory: {
      title: 'Golden Hour Chettinad Veranda Reunion',
      location: 'Adyar Heritage Bungalow, Chennai',
      guests: '95 Guests',
      outcome: 'Teak-pillared veranda draped in cream silk and jasmine with hanging brass lanterns and three-generation family hospitality.',
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'complete-event-planning',
    index: '01',
    title: 'Complete Event Planning',
    shortDesc: 'End-to-end stewardship from auspicious dates, budgets, and timelines to the final farewell.',
    longDesc:
      'Your single dedicated point of leadership from day one. We structure realistic budgets, ritual and event schedules, creative moodboards, and contingency plans so every occasion unfolds with calm grace.',
    icon: 'Compass',
    deliverables: [
      'Master budget planning & transparent vendor tracking',
      'End-to-end production timeline & ritual schedules',
      'Contract coordination across all venues & artisans',
      'Dedicated lead planner & family concierge support',
    ],
    image: IMAGES.heroGala,
  },
  {
    id: 'venue-selection-booking',
    index: '02',
    title: 'Venue Selection & Booking',
    shortDesc: 'Curated access to traditional mandapams, Chettinad mansions, five-star hotels, and coastal resorts.',
    longDesc:
      'The right space anchors the soul of every celebration. We arrange private walkthroughs across heritage Tamil Nadu mandapams, Chettinad courtyards, luxury city ballrooms, and serene coastal properties.',
    icon: 'Building2',
    deliverables: [
      'Curated shortlist matched to guest count & ritual needs',
      'Site visits & technical space feasibility checks',
      'Venue negotiation, dates blocking & floor layouts',
      'Seamless rain-plan & guest parking architecture',
    ],
    image: IMAGES.wedding,
  },
  {
    id: 'stage-venue-decoration',
    index: '03',
    title: 'Stage & Mandapam Decor',
    shortDesc: 'Carved wooden mandapams, cascading jasmine & marigold garlands, brass lamps, and cream silk drapes.',
    longDesc:
      'Our floral and scenic atelier transforms halls and courtyards into luminous sanctuaries using fresh Madurai jasmine, golden marigolds, carved teak pillars, brass kuthuvilakku lamps, and refined champagne drapery.',
    icon: 'Flower2',
    deliverables: [
      'Carved wooden mandapams & bespoke reception stages',
      'Fresh jasmine, marigold, rose & mango-leaf floral artistry',
      'Brass kuthuvilakku lamps, uruli bowls & kolam welcomes',
      'Full on-site fabrication, fresh flower conditioning & strike',
    ],
    image: IMAGES.ctaBanquet,
  },
  {
    id: 'theme-concept-design',
    index: '04',
    title: 'Theme & Concept Design',
    shortDesc: 'Cohesive cream-and-gold color palettes, custom invitations, thamboolam hampers, and spatial styling.',
    longDesc:
      'Every celebration carries its own visual rhythm. We design custom moodboards, floral palettes, traditional-modern invitation suites, welcome signage, and bespoke return gifts tailored to your occasion.',
    icon: 'Palette',
    deliverables: [
      'Editorial color palettes & spatial moodboards',
      '3D stage and mandapam visualizations before build',
      'Custom wedding/event invitations & welcome signage',
      'Curated silk-pouch thamboolam & VIP return gifts',
    ],
    image: IMAGES.babyShower,
  },
  {
    id: 'photography-videography',
    index: '05',
    title: 'Photography & Videography',
    shortDesc: 'Candid documentary photography, traditional ceremony coverage, and timeless 4K cinema films.',
    longDesc:
      'We pair your celebration with seasoned Indian editorial photographers and filmmakers who capture every heartfelt glance, silk texture, ritual blessing, and joyful family portrait in warm natural tones.',
    icon: 'Camera',
    deliverables: [
      'Candid & traditional photography teams',
      '4K cinematic wedding & celebration films',
      'Curated family portrait scheduling without delays',
      'Fine-art heirloom albums & fast highlight edits',
    ],
    image: IMAGES.anniversary,
  },
  {
    id: 'catering-hospitality',
    index: '06',
    title: 'Catering & Hospitality',
    shortDesc: 'Authentic banana-leaf Kalyana Virundhu, Chettinad feasts, live tiffin counters, and bespoke cakes.',
    longDesc:
      'Hospitality is the heart of every Indian gathering. We partner with acclaimed South Indian and pan-Indian culinary teams to deliver unforgettable banana-leaf feasts, brass davara filter coffee, artisan sweets, and five-star banquets.',
    icon: 'UtensilsCrossed',
    deliverables: [
      'Traditional banana-leaf Kalyana Virundhu & regional menus',
      'Live South Indian tiffin, filter coffee & chaat counters',
      'Custom tiered floral cakes & traditional mithai displays',
      'Attentive dining-hall coordination & dietary care',
    ],
    image: IMAGES.birthday,
  },
  {
    id: 'entertainment-artists',
    index: '07',
    title: 'Entertainment & Artists',
    shortDesc: 'Nadaswaram maestros, Carnatic vocalists, Bharatanatyam troupes, live bands, and cultural hosts.',
    longDesc:
      'We curate the musical soul of your celebration—from auspicious morning Nadaswaram and veena recitals to Bharatanatyam showcases, live contemporary bands, and polished bilingual emcees.',
    icon: 'Music',
    deliverables: [
      'Nadaswaram, Thavil & Carnatic classical ensembles',
      'Bharatanatyam & traditional Tamil folk troupes',
      'Live contemporary bands, playback singers & DJs',
      'Artist contracting, scheduling & green-room hospitality',
    ],
    image: IMAGES.concert,
  },
  {
    id: 'sound-lighting',
    index: '08',
    title: 'Sound & Lighting',
    shortDesc: 'Warm architectural uplighting, fairy-light canopies, temple-courtyard glow, and crisp concert audio.',
    longDesc:
      'Warm lighting elevates every silk saree and floral garland. Our technical team crafts flattering golden illumination, twinkling courtyard canopies, and crystal-clear sound for vows, speeches, and live music.',
    icon: 'Sparkles',
    deliverables: [
      'Warm champagne uplighting & floral pin-spotting',
      'Acoustic sound clarity for mantras, keynotes & concerts',
      'Fairy-light canopies & courtyard chandelier rigging',
      'Dedicated lighting and sound engineers throughout',
    ],
    image: IMAGES.college,
  },
  {
    id: 'guest-management',
    index: '09',
    title: 'Guest Management',
    shortDesc: 'Warm family hospitality desks, RSVP tracking, hotel rooms, airport pickups, and elder care.',
    longDesc:
      'True Indian hospitality ensures every relative and VIP feels welcomed from arrival to departure. Our hospitality desk manages travel transfers, room welcome baskets, seating comfort, and personalized assistance.',
    icon: 'Users',
    deliverables: [
      'Dedicated family RSVP desk & digital itineraries',
      'Hotel blocks, airport transfers & room welcome hampers',
      'Thoughtful seating & elder-guest concierge care',
      'Multilingual welcome hosts at every venue entrance',
    ],
    image: IMAGES.privateParty,
  },
  {
    id: 'event-coordination',
    index: '10',
    title: 'Event Coordination',
    shortDesc: 'Calm, behind-the-scenes on-day direction coordinating rituals, vendors, cues, and hospitality.',
    longDesc:
      'When celebration day arrives, your family steps fully into the joy while our senior coordinators quietly orchestrate vendor arrivals, floral readiness, dining turnovers, and every stage cue.',
    icon: 'ClipboardCheck',
    deliverables: [
      'Minute-by-minute master cue sheet & ritual tracker',
      'Full vendor load-in supervision & quality checks',
      'Stage, dining & photography timeline management',
      'Proactive problem-solving from dawn to close',
    ],
    image: IMAGES.corporate,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Chettinad Mandapam Jasmine Celebration',
    category: 'Celebrations',
    eventType: 'Heritage Mandapam Gala',
    location: 'Chennai, Tamil Nadu',
    guests: '420 Guests',
    season: 'Margazhi',
    description:
      'Carved wooden pillars adorned with cascading white jasmine garlands, brass kuthuvilakku oil lamps, and intricate floor kolams.',
    image: IMAGES.heroGala,
    aspect: 'wide',
  },
  {
    id: 'gal-2',
    title: 'Traditional Tamil Nadu Muhurtham Wedding',
    category: 'Weddings',
    eventType: 'Tamil Heritage Wedding',
    location: 'Coimbatore, Tamil Nadu',
    guests: '600 Guests',
    season: 'Thai',
    description:
      'Bride in ivory-rose Kanchipuram silk saree and groom in gold-bordered silk veshti seated before the sacred homam framed by fresh jasmine curtains.',
    image: IMAGES.wedding,
    aspect: 'tall',
  },
  {
    id: 'gal-3',
    title: 'Ivory & Jasmine Family Birthday Evening',
    category: 'Birthdays',
    eventType: 'Milestone Birthday Celebration',
    location: 'MRC Nagar, Chennai',
    guests: '160 Guests',
    season: 'Spring',
    description:
      'A radiant family celebration beneath jasmine and soft peach marigold arches with a tiered ivory-gold floral cake.',
    image: IMAGES.birthday,
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'India Leadership Summit & Awards Gala',
    category: 'Corporate',
    eventType: 'Corporate Leadership Summit',
    location: 'Chennai, Tamil Nadu',
    guests: '520 Executives',
    season: 'Autumn',
    description:
      'Refined champagne-gold stage framed with white jasmine installations and ceremonial brass kuthuvilakku lamps for senior executives.',
    image: IMAGES.corporate,
    aspect: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Traditional Oonjal Seemantham Ceremony',
    category: 'Private Events',
    eventType: 'Tamil Seemantham & Valaikaappu',
    location: 'Boat Club Road, Chennai',
    guests: '110 Guests',
    season: 'Spring',
    description:
      'Expectant mother in pastel rose Kanchipuram silk seated on a teak wood oonjal draped in jasmine, marigolds, and mango leaves.',
    image: IMAGES.babyShower,
    aspect: 'tall',
  },
  {
    id: 'gal-6',
    title: '25th Silver Jubilee Chettinad Courtyard',
    category: 'Celebrations',
    eventType: 'Silver Anniversary Banquet',
    location: 'Poes Garden, Chennai',
    guests: '120 Guests',
    season: 'Summer',
    description:
      'Multi-generational family gathering in a carved Chettinad courtyard with jasmine table runners and glowing brass lamps.',
    image: IMAGES.anniversary,
    aspect: 'square',
  },
  {
    id: 'gal-7',
    title: 'Sangam Heritage College Cultural Night',
    category: 'Celebrations',
    eventType: 'University Cultural Festival',
    location: 'Madurai, Tamil Nadu',
    guests: '1,800 Students',
    season: 'Spring',
    description:
      'Students in pastel silk sarees and cream veshtis celebrating beneath marigold-draped stone arches and warm fairy lights.',
    image: IMAGES.college,
    aspect: 'wide',
  },
  {
    id: 'gal-8',
    title: 'Twilight Stone Mandapam Music Evening',
    category: 'Celebrations',
    eventType: 'Classical Music & Cultural Gala',
    location: 'Thanjavur, Tamil Nadu',
    guests: '650 Patrons',
    season: 'Winter',
    description:
      'Carved stone mandapam courtyard illuminated by brass flower urulis, glowing clay diyas, and hanging jasmine curtains.',
    image: IMAGES.concert,
    aspect: 'tall',
  },
  {
    id: 'gal-9',
    title: 'Chettinad Pongal & Deepam Utsav',
    category: 'Celebrations',
    eventType: 'Pongal & Diwali Festival',
    location: 'Karaikudi, Tamil Nadu',
    guests: '340 Guests',
    season: 'Thai Pongal',
    description:
      'Traditional brass Pongal pot under sugarcane stalks surrounded by intricate pulli kolam, brass urulis, and glowing clay diyas.',
    image: IMAGES.cultural,
    aspect: 'square',
  },
  {
    id: 'gal-10',
    title: 'Golden Hour Heritage Veranda Soirée',
    category: 'Private Events',
    eventType: 'Private Family Reception',
    location: 'Adyar, Chennai',
    guests: '95 Guests',
    season: 'Summer',
    description:
      'Teak-pillared bungalow veranda styled with cream drapes, brass hanging lanterns, and fresh jasmine bowls for an intimate reunion.',
    image: IMAGES.privateParty,
    aspect: 'wide',
  },
  {
    id: 'gal-11',
    title: 'Auspicious Evening Mandapam Reception',
    category: 'Weddings',
    eventType: 'Grand Wedding Reception',
    location: 'Mahabalipuram, Tamil Nadu',
    guests: '750 Guests',
    season: 'Winter',
    description:
      'Open-air pillared courtyard aglow with hundreds of clay diyas, cascading jasmine curtains, and live Nadaswaram melodies.',
    image: IMAGES.ctaBanquet,
    aspect: 'wide',
  },
  {
    id: 'gal-12',
    title: 'Heirloom Silk & Jewellery Preview',
    category: 'Corporate',
    eventType: 'Luxury Brand Showcase',
    location: 'Nungambakkam, Chennai',
    guests: '320 Guests',
    season: 'Festive',
    description:
      'Warm carved-wood gallery adorned with fresh jasmine chandeliers welcoming collectors and media in Kanchipuram silk.',
    image: IMAGES.heroGala,
    imagePosition: 'object-right',
    aspect: 'square',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Vision & Traditions',
    description:
      'We listen closely to your occasion, family customs, guest count, and desired atmosphere.',
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Bespoke Styling',
    description:
      'We craft warm cream-and-gold concepts, mandapam sketches, floral palettes, and spatial layouts.',
  },
  {
    number: '03',
    title: 'Plan',
    subtitle: 'Curated Logistics',
    description:
      'We book premier venues, vetted florists, caterers, musicians, lighting teams, and master schedules.',
  },
  {
    number: '04',
    title: 'Execute',
    subtitle: 'Seamless Production',
    description:
      'Our senior directors oversee every floral garland, ritual cue, sound check, and dining course.',
  },
  {
    number: '05',
    title: 'Celebrate',
    subtitle: 'Joyful Presence',
    description:
      'Enjoy unhurried moments with your family and guests while we handle every detail gracefully.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    name: 'Meenakshi & Karthik Subramanian',
    role: 'Tamil Nadu Muhurtham Wedding',
    category: 'Weddings & Engagements',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    quote:
      'Eterna created the exact carved Chettinad mandapam we dreamed of—overflowing with fresh Madurai jasmine and warm brass lamps. Every elder in our family praised how calmly and respectfully every ritual flowed.',
    outcome: '600 guests hosted across Muhurtham and reception with seamless timing.',
    initials: 'MK',
    eventImage: IMAGES.wedding,
    accentImage: IMAGES.heroGala,
  },
  {
    id: 't-2',
    name: 'Rajeshwari Sundaram',
    role: 'VP of People & Brand, Dakshin FinTech',
    category: 'Corporate Events',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    quote:
      'Our annual leadership summit blended five-star technical precision with authentic South Indian warmth—from the brass kuthuvilakku lighting to flawless executive dining. Truly world-class production.',
    outcome: '520 executives · 98.6% attendee satisfaction score.',
    initials: 'RS',
    eventImage: IMAGES.corporate,
    accentImage: IMAGES.heroGala,
  },
  {
    id: 't-3',
    name: 'Divya & Arvind Natarajan',
    role: 'Traditional Oonjal Seemantham',
    category: 'Seemantham & Baby Showers',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    quote:
      'Seeing the teak wood oonjal draped in jasmine, marigolds, and mango leaves brought tears of joy to my parents. Every bangle tray, kolam, and traditional feast detail was thoughtfully taken care of.',
    outcome: '110 family guests · Traditional Valaikaappu & banana-leaf feast.',
    initials: 'DA',
    eventImage: IMAGES.babyShower,
    accentImage: IMAGES.privateParty,
  },
  {
    id: 't-4',
    name: 'Dr. Senthil Kumaravel',
    role: 'Dean of Student Affairs, Heritage Institute',
    category: 'College & School Events',
    location: 'Madurai, Tamil Nadu',
    rating: 5,
    quote:
      'Transforming our historic stone quadrangle for Sangam Cultural Night with marigold drapes, crisp sound, and dignified hospitality made it the most memorable annual day in our college history.',
    outcome: '1,800 students & alumni · Zero delays across 14 stage performances.',
    initials: 'SK',
    eventImage: IMAGES.college,
    accentImage: IMAGES.concert,
  },
  {
    id: 't-5',
    name: 'Lakshmi & Venkatraman Iyer',
    role: 'Chettinad Pongal & Deepam Utsav',
    category: 'Pongal, Diwali & Cultural Festivals',
    location: 'Karaikudi, Tamil Nadu',
    rating: 5,
    quote:
      'From the decorated brass Pongal pot and sugarcane stalks to the intricate kolam and hundreds of glowing clay diyas at dusk, our entire extended family felt transported to timeless tradition.',
    outcome: '340 guests · Authentic heritage Pongal & evening lamp lighting.',
    initials: 'LV',
    eventImage: IMAGES.cultural,
    accentImage: IMAGES.anniversary,
  },
  {
    id: 't-6',
    name: 'Priya & Prakash Krishnan',
    role: 'Milestone Family Birthday Evening',
    category: 'Birthday Celebrations',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    quote:
      'We wanted a refined Indian birthday celebration—warm ivory, fresh jasmine, and genuine family warmth instead of loud party props. Eterna delivered an evening our family still talks about.',
    outcome: '160 guests · Bespoke floral arch, tiered cake & live acoustic ensemble.',
    initials: 'PP',
    eventImage: IMAGES.birthday,
    accentImage: IMAGES.privateParty,
  },
];

export const STATS = [
  { value: 250, suffix: '+', label: 'Events Organized', detail: 'Across Tamil Nadu & South India' },
  { value: 150, suffix: '+', label: 'Happy Clients', detail: 'Families & corporate leaders' },
  { value: 50, suffix: '+', label: 'Trusted Artisans', detail: 'Florists, chefs, musicians & AV' },
  { value: 10, suffix: '+', label: 'Event Categories', detail: 'Every tradition & milestone' },
];

export const STUDIO_TEAM = [
  {
    name: 'Ananya Sundaresan',
    role: 'Founder & Creative Director',
    bio: 'Fifteen years curating Tamil Nadu heritage weddings, Chettinad courtyard florals, and bespoke family celebrations.',
    initials: 'AS',
    specialty: 'Mandapam Architecture & Floral Design',
  },
  {
    name: 'Vikramaditya Menon',
    role: 'Head of Corporate & Live Production',
    bio: 'Directs executive summits, college cultural fests, and classical concerts with calm technical precision.',
    initials: 'VM',
    specialty: 'Stagecraft, Acoustics & Show Calling',
  },
  {
    name: 'Kavitha Balasubramanian',
    role: 'Director of Hospitality & Rituals',
    bio: 'Specializes in traditional Kalyana Virundhu catering, Seemantham curation, and white-glove family concierge.',
    initials: 'KB',
    specialty: 'Culinary Heritage & Guest Hospitality',
  },
  {
    name: 'Pranav Raghavan',
    role: 'Lead Scenographer & Lighting Architect',
    bio: 'Sculpts warm champagne illumination, brass lamp arrangements, and carved wooden structures for heritage venues.',
    initials: 'PR',
    specialty: 'Lighting Design & Heritage Scenography',
  },
];

export const CONTACT_INFO = {
  phone: '+91 98401 43210',
  secondaryPhone: '+91 80 4128 8890',
  email: 'concierge@eternaevents.in',
  pressEmail: 'press@eternaevents.in',
  address: 'No. 42, Khader Nawaz Khan Road, Nungambakkam, Chennai 600006',
  hours: 'Monday – Saturday · 9:30 AM – 7:30 PM (Private Appointments Available)',
};
