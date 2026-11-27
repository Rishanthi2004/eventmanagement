import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  AnimatePresence,
} from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { EternaLogoMark } from './BotanicalOrnament';

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  immediate?: boolean;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 18,
  duration = 0.55,
  immediate = false,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { once: false, amount: 'some' });

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const initialOffset =
    direction === 'up'
      ? { y: distance, x: 0 }
      : direction === 'down'
      ? { y: -distance, x: 0 }
      : direction === 'left'
      ? { x: distance, y: 0 }
      : direction === 'right'
      ? { x: -distance, y: 0 }
      : { x: 0, y: 0 };

  const shouldShow = immediate || inView;

  return (
    <div ref={wrapperRef} className={className}>
      <motion.div
        initial={{ opacity: 0, ...initialOffset }}
        animate={shouldShow ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...initialOffset }}
        transition={{ duration, delay: shouldShow ? delay : 0, ease: LUXURY_EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface WordRevealProps {
  text: string;
  italicWord?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
  immediate?: boolean;
}

export function WordReveal({
  text,
  italicWord,
  className = '',
  as = 'h1',
  delay = 0.04,
  immediate,
}: WordRevealProps) {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLHeadingElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 'some' });
  const words = text.split(' ');
  const Tag = as;

  // Hero H1 headings always animate immediately on mount so they are never blank
  const isImmediate = immediate ?? as === 'h1';
  const shouldShow = isImmediate || inView;

  if (prefersReduced) {
    return (
      <Tag className={className}>
        {words.map((word, idx) => {
          const isItalic =
            italicWord &&
            word.toLowerCase().replace(/[^a-z]/g, '') ===
              italicWord.toLowerCase().replace(/[^a-z]/g, '');
          return (
            <span key={idx} className={isItalic ? 'italic font-normal text-[#9A7B4F]' : ''}>
              {word}
              {idx < words.length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </Tag>
    );
  }

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, idx) => {
        const isItalic =
          italicWord &&
          word.toLowerCase().replace(/[^a-z]/g, '') ===
            italicWord.toLowerCase().replace(/[^a-z]/g, '');
        return (
          <span key={idx} className="inline-block mr-[0.23em] last:mr-0">
            <motion.span
              className={`inline-block ${isItalic ? 'italic font-normal text-[#9A7B4F]' : ''}`}
              initial={{ y: 18, opacity: 0 }}
              animate={shouldShow ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
              transition={{
                duration: 0.55,
                delay: shouldShow ? delay + idx * 0.045 : 0,
                ease: LUXURY_EASE,
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

export function AnimatedCounter({
  target,
  suffix = '',
  duration = 1200,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 'some' });
  const prefersReduced = useReducedMotion();
  const [count, setCount] = useState(prefersReduced ? target : 0);

  useEffect(() => {
    if (prefersReduced) {
      setCount(target);
      return;
    }

    if (!inView) {
      setCount(0);
      return;
    }

    let rafId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration, prefersReduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
  loading = 'lazy',
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'lazy' | 'eager';
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EDE2D3] via-[#F8F3EB] to-[#E2D4C0] text-[#44382F] p-5 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <EternaLogoMark className="w-8 h-8 mb-2 opacity-80" />
        <span className="font-serif text-base tracking-wide text-[#44382F]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5A77A] via-[#9A7B4F] to-[#D8B9AD] origin-left z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.92 }}
          transition={{ duration: 0.2, ease: LUXURY_EASE }}
          className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-[#2A332C] text-[#F8F3EB] border border-[#C5A77A]/40 shadow-lg hover:bg-[#1E2620] flex items-center justify-center transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function BrandPreloader() {
  const prefersReduced = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('eterna_intro_seen');
  });

  useEffect(() => {
    if (!show || prefersReduced) {
      setShow(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('eterna_intro_seen', '1');
    }, 600);
    return () => window.clearTimeout(timer);
  }, [show, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: LUXURY_EASE } }}
          className="fixed inset-0 z-[100] bg-[#F8F3EB] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: LUXURY_EASE }}
            className="flex flex-col items-center gap-2.5"
          >
            <EternaLogoMark className="w-10 h-10" />
            <span className="font-serif text-2xl tracking-[0.2em] text-[#44382F]">
              ETERNA EVENTS
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
