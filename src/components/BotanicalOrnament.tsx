import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function EternaLogoMark({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Minimal editorial botanical crest inspired by the reference */}
      <path
        d="M20 35C20 26 20 15 20 6"
        stroke="#9A7B4F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M20 28C15 25.5 11.5 21 12 15.5C16.5 16.5 19.2 21 20 28Z"
        stroke="#C5A77A"
        strokeWidth="1.2"
        fill="#C5A77A"
        fillOpacity="0.18"
      />
      <path
        d="M20 24C25 21.5 28.5 17 28 11.5C23.5 12.5 20.8 17 20 24Z"
        stroke="#C5A77A"
        strokeWidth="1.2"
        fill="#C5A77A"
        fillOpacity="0.18"
      />
      <path
        d="M20 15.5C16.5 13 15 9.5 16.5 6C19 7.8 20 11.5 20 15.5Z"
        stroke="#9A7B4F"
        strokeWidth="1.15"
        fill="#D8B9AD"
        fillOpacity="0.28"
      />
      <path
        d="M20 15.5C23.5 13 25 9.5 23.5 6C21 7.8 20 11.5 20 15.5Z"
        stroke="#9A7B4F"
        strokeWidth="1.15"
        fill="#D8B9AD"
        fillOpacity="0.28"
      />
      <circle cx="20" cy="4.5" r="1.2" fill="#C5A77A" />
    </svg>
  );
}

export function BotanicalSprig({
  className = '',
  flip = false,
  float = true,
}: {
  className?: string;
  flip?: boolean;
  float?: boolean;
}) {
  const prefersReduced = useReducedMotion();

  const content = (
    <svg
      viewBox="0 0 180 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${flip ? '-scale-x-100' : ''} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M24 246C46 196 68 138 114 48"
        stroke="#A8A994"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.72"
      />
      <path
        d="M52 192C28 178 18 158 24 140C42 148 54 166 52 192Z"
        stroke="#A8A994"
        strokeWidth="1.1"
        fill="#A8A994"
        fillOpacity="0.14"
      />
      <path
        d="M68 156C94 148 116 154 128 170C106 176 82 172 68 156Z"
        stroke="#C5A77A"
        strokeWidth="1.1"
        fill="#C5A77A"
        fillOpacity="0.14"
      />
      <path
        d="M80 124C54 114 42 94 48 74C66 84 80 100 80 124Z"
        stroke="#A8A994"
        strokeWidth="1.1"
        fill="#A8A994"
        fillOpacity="0.14"
      />
      <path
        d="M94 94C120 84 142 88 156 102C134 110 110 108 94 94Z"
        stroke="#C5A77A"
        strokeWidth="1.1"
        fill="#D8B9AD"
        fillOpacity="0.18"
      />
      <path
        d="M104 66C84 54 78 36 86 20C100 30 108 46 104 66Z"
        stroke="#A8A994"
        strokeWidth="1.1"
        fill="#A8A994"
        fillOpacity="0.16"
      />
      <path
        d="M114 48C128 32 146 24 162 28C152 44 134 52 114 48Z"
        stroke="#C5A77A"
        strokeWidth="1.1"
        fill="#C5A77A"
        fillOpacity="0.18"
      />
    </svg>
  );

  if (!float || prefersReduced) {
    return content;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none select-none"
      animate={{
        y: [0, -8, 0],
        rotate: [0, flip ? -1.8 : 1.8, 0],
      }}
      transition={{
        duration: 8.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {content}
    </motion.div>
  );
}

export function BotanicalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-[#C5A77A]/45" />
      <svg viewBox="0 0 28 14" fill="none" className="w-7 h-3.5 text-[#C5A77A]">
        <path
          d="M14 7C10.5 3.5 5.5 2.5 2 4.5C5 8 9.5 9 14 7Z"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <path
          d="M14 7C17.5 3.5 22.5 2.5 26 4.5C23 8 18.5 9 14 7Z"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="currentColor"
          fillOpacity="0.2"
        />
        <circle cx="14" cy="7" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-[#C5A77A]/45" />
    </div>
  );
}
