import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { EVENT_CATEGORIES } from '../data/eventsData';

export interface EnquiryFormValues {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  guests: string;
  budget: string;
  description: string;
}

const BUDGET_OPTIONS = [
  '₹1,50,000 – ₹3,50,000',
  '₹3,50,000 – ₹8,00,000',
  '₹8,00,000 – ₹18,00,000',
  '₹18,00,000 – ₹35,00,000',
  '₹35,00,000+',
  'Flexible / Seeking Guidance',
];

const INITIAL_VALUES: EnquiryFormValues = {
  fullName: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  location: '',
  guests: '',
  budget: '',
  description: '',
};

export function EnquiryForm({
  preselectedEventType = '',
  compact = false,
}: {
  preselectedEventType?: string;
  compact?: boolean;
}) {
  const [values, setValues] = useState<EnquiryFormValues>({
    ...INITIAL_VALUES,
    eventType: preselectedEventType,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormValues, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [submittedSnapshot, setSubmittedSnapshot] = useState<EnquiryFormValues | null>(null);

  useEffect(() => {
    if (preselectedEventType) {
      setValues((prev) => ({ ...prev, eventType: preselectedEventType }));
      setErrors((prev) => ({ ...prev, eventType: undefined }));
    }
  }, [preselectedEventType]);

  const validate = (): boolean => {
    const next: Partial<Record<keyof EnquiryFormValues, string>> = {};

    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      next.fullName = 'Please share your full name.';
    }
    const digits = values.phone.replace(/\D/g, '');
    if (digits.length < 7) {
      next.phone = 'Please enter a valid phone number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.eventType) {
      next.eventType = 'Please select the type of event.';
    }
    if (!values.eventDate) {
      next.eventDate = 'Please select your preferred event date.';
    }
    if (!values.location.trim()) {
      next.location = 'Please provide a city or preferred venue.';
    }
    const guestNum = Number(values.guests);
    if (!values.guests || Number.isNaN(guestNum) || guestNum < 5) {
      next.guests = 'Please enter an estimated guest count (5 or more).';
    }
    if (!values.budget) {
      next.budget = 'Please choose an estimated budget range.';
    }
    if (!values.description.trim() || values.description.trim().length < 15) {
      next.description = 'Tell us a bit about your celebration vision (at least 15 characters).';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const code = `ETR-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(code);
    setSubmittedSnapshot({ ...values });
  };

  const handleReset = () => {
    setValues({ ...INITIAL_VALUES, eventType: preselectedEventType });
    setErrors({});
    setSubmittedRef(null);
    setSubmittedSnapshot(null);
  };

  const updateField = <K extends keyof EnquiryFormValues>(key: K, value: EnquiryFormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  if (submittedRef && submittedSnapshot) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#FCF9F4] border border-[#C5A77A]/40 rounded-2xl p-8 sm:p-10 text-center space-y-6"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-[#EDE2D3] flex items-center justify-center text-[#2A332C]">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <p className="text-xs tracking-[0.16em] text-[#9A7B4F] font-medium">
            Enquiry Received · Reference {submittedRef}
          </p>
          <h3 className="font-serif text-3xl text-[#44382F]">
            Thank You, {submittedSnapshot.fullName}
          </h3>
          <p className="text-[15px] text-[#6E5F53] max-w-md mx-auto leading-relaxed">
            Our senior event concierge has received your brief for{' '}
            <span className="text-[#44382F] font-medium">{submittedSnapshot.eventType}</span> in{' '}
            <span className="text-[#44382F] font-medium">{submittedSnapshot.location}</span> and
            will reach out within 24 hours to schedule your private consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-5 border-y border-[#EDE2D3] text-left">
          <div>
            <p className="text-xs text-[#6E5F53]">Preferred Date</p>
            <p className="text-sm font-medium text-[#44382F] mt-0.5 tabular-nums">
              {submittedSnapshot.eventDate}
            </p>
          </div>
          <div>
            <p className="text-xs text-[#6E5F53]">Expected Guests</p>
            <p className="text-sm font-medium text-[#44382F] mt-0.5 tabular-nums">
              {submittedSnapshot.guests} Guests
            </p>
          </div>
          <div>
            <p className="text-xs text-[#6E5F53]">Estimated Budget</p>
            <p className="text-sm font-medium text-[#44382F] mt-0.5">
              {submittedSnapshot.budget}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#44382F]/25 text-sm font-medium text-[#44382F] hover:bg-[#EDE2D3] transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Submit Another Enquiry</span>
        </button>
      </motion.div>
    );
  }

  const inputBase =
    'w-full px-4 py-3 rounded-lg bg-[#FFFFFF] border text-[14.5px] text-[#44382F] placeholder:text-[#6E5F53]/60 transition-colors focus:outline-none';

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-[#FCF9F4] border border-[#C5A77A]/30 rounded-2xl ${
        compact ? 'p-6 sm:p-8' : 'p-7 sm:p-10'
      } shadow-[0_20px_60px_rgba(68,56,47,0.06)] space-y-5`}
    >
      <div className="space-y-1 pb-2 border-b border-[#EDE2D3]">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#44382F]">
          Tell Us About Your Celebration
        </h3>
        <p className="text-sm text-[#6E5F53]">
          Share your initial vision and our senior producers will craft a tailored proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-name" className="block text-[13px] font-medium text-[#44382F]">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            type="text"
            value={values.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="e.g. Meenakshi Sundaram"
            className={`${inputBase} ${
              errors.fullName
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          />
          {errors.fullName && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-phone" className="block text-[13px] font-medium text-[#44382F]">
            Phone Number *
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="+91 98401 55123"
            className={`${inputBase} ${
              errors.phone
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          />
          {errors.phone && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-email" className="block text-[13px] font-medium text-[#44382F]">
            Email Address *
          </label>
          <input
            id="enquiry-email"
            type="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="meenakshi@example.com"
            className={`${inputBase} ${
              errors.email
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          />
          {errors.email && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Event Type */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-type" className="block text-[13px] font-medium text-[#44382F]">
            Event Type *
          </label>
          <select
            id="enquiry-type"
            value={values.eventType}
            onChange={(e) => updateField('eventType', e.target.value)}
            className={`${inputBase} ${
              errors.eventType
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          >
            <option value="">Select event category</option>
            {EVENT_CATEGORIES.map((cat) => (
              <option key={cat.slug} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.eventType}</span>
            </p>
          )}
        </div>

        {/* Preferred Event Date */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-date" className="block text-[13px] font-medium text-[#44382F]">
            Preferred Event Date *
          </label>
          <input
            id="enquiry-date"
            type="date"
            value={values.eventDate}
            onChange={(e) => updateField('eventDate', e.target.value)}
            className={`${inputBase} tabular-nums ${
              errors.eventDate
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          />
          {errors.eventDate && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.eventDate}</span>
            </p>
          )}
        </div>

        {/* Event Location */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-location" className="block text-[13px] font-medium text-[#44382F]">
            Event Location *
          </label>
          <input
            id="enquiry-location"
            type="text"
            value={values.location}
            onChange={(e) => updateField('location', e.target.value)}
            placeholder="Chennai, Coimbatore, Madurai..."
            className={`${inputBase} ${
              errors.location
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          />
          {errors.location && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.location}</span>
            </p>
          )}
        </div>

        {/* Expected Guests */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-guests" className="block text-[13px] font-medium text-[#44382F]">
            Expected Number of Guests *
          </label>
          <input
            id="enquiry-guests"
            type="number"
            min={5}
            max={10000}
            value={values.guests}
            onChange={(e) => updateField('guests', e.target.value)}
            placeholder="e.g. 150"
            className={`${inputBase} tabular-nums ${
              errors.guests
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          />
          {errors.guests && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.guests}</span>
            </p>
          )}
        </div>

        {/* Estimated Budget */}
        <div className="space-y-1.5">
          <label htmlFor="enquiry-budget" className="block text-[13px] font-medium text-[#44382F]">
            Estimated Budget *
          </label>
          <select
            id="enquiry-budget"
            value={values.budget}
            onChange={(e) => updateField('budget', e.target.value)}
            className={`${inputBase} ${
              errors.budget
                ? 'border-[#8C3B32] focus:border-[#8C3B32]'
                : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
            }`}
          >
            <option value="">Select estimated budget</option>
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.budget}</span>
            </p>
          )}
        </div>
      </div>

      {/* Event Description */}
      <div className="space-y-1.5">
        <label htmlFor="enquiry-desc" className="block text-[13px] font-medium text-[#44382F]">
          Event Description *
        </label>
        <textarea
          id="enquiry-desc"
          rows={4}
          value={values.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Tell us about your dream atmosphere, themes, special traditions, entertainment ideas, or must-have details..."
          className={`${inputBase} resize-y ${
            errors.description
              ? 'border-[#8C3B32] focus:border-[#8C3B32]'
              : 'border-[#DDD0BE] focus:border-[#9A7B4F]'
          }`}
        />
        {errors.description && (
          <p className="flex items-center gap-1.5 text-xs text-[#8C3B32]" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.description}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#2A332C] text-[#F8F3EB] text-[15px] font-medium tracking-wide hover:bg-[#1E2620] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
      >
        <span>Let&apos;s Plan My Event</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </form>
  );
}
