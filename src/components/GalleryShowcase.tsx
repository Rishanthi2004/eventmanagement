import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/eventsData';
import { ImageWithFallback } from './MotionPrimitives';

const FILTERS = ['All', 'Weddings', 'Birthdays', 'Corporate', 'Private Events', 'Celebrations'] as const;
type FilterType = (typeof FILTERS)[number];

export function GalleryShowcase({
  limit,
  initialFilter = 'All',
  compact = false,
}: {
  limit?: number;
  initialFilter?: FilterType;
  compact?: boolean;
}) {
  const [activeFilter, setActiveFilter] = useState<FilterType>(initialFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const filtered =
    activeFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const visibleItems = limit ? filtered.slice(0, limit) : filtered;

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visibleItems.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + visibleItems.length) % visibleItems.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, visibleItems.length]);

  const currentLightboxItem: GalleryItem | null =
    lightboxIndex !== null && visibleItems[lightboxIndex]
      ? visibleItems[lightboxIndex]
      : null;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Compact Scrollable Filter Tabs on Mobile */}
      <div
        role="tablist"
        aria-label="Filter gallery by event category"
        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2"
      >
        {FILTERS.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setActiveFilter(filter);
                setLightboxIndex(null);
              }}
              className={`relative px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-[13.5px] font-medium rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                active
                  ? 'text-[#F8F3EB]'
                  : 'text-[#6E5F53] hover:text-[#44382F] bg-[#EDE2D3]/70 hover:bg-[#EDE2D3]'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="gallery-filter-pill"
                  className="absolute inset-0 bg-[#2A332C] rounded-full"
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          );
        })}
      </div>

      {/* Compact 2-Column Mobile / Asymmetric Desktop Grid */}
      <motion.div
        layout={!prefersReduced}
        className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, idx) => {
            const pattern = idx % 6;
            const spanClass = compact
              ? idx === 0
                ? 'col-span-2 md:col-span-7 h-[210px] sm:h-[290px]'
                : idx === 1
                ? 'col-span-2 md:col-span-5 h-[200px] sm:h-[290px]'
                : 'col-span-1 md:col-span-6 h-[175px] sm:h-[250px]'
              : pattern === 0
              ? 'col-span-2 md:col-span-7 h-[220px] sm:h-[340px]'
              : pattern === 1
              ? 'col-span-1 md:col-span-5 h-[190px] sm:h-[340px]'
              : pattern === 2
              ? 'col-span-1 md:col-span-4 h-[190px] sm:h-[280px]'
              : pattern === 3
              ? 'col-span-1 md:col-span-4 h-[190px] sm:h-[280px]'
              : pattern === 4
              ? 'col-span-1 md:col-span-4 h-[190px] sm:h-[280px]'
              : 'col-span-2 md:col-span-12 h-[220px] sm:h-[340px]';

            return (
              <motion.article
                key={item.id}
                layout={!prefersReduced}
                initial={prefersReduced ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-xl bg-[#EDE2D3] cursor-pointer ${spanClass}`}
                onClick={() => setLightboxIndex(idx)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  fallbackTitle={item.title}
                  className={`w-full h-full object-cover ${
                    item.imagePosition || 'object-center'
                  } transition-transform duration-500 ease-out group-hover:scale-105`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1915]/85 via-[#1E1915]/20 to-transparent" />

                <span
                  aria-hidden="true"
                  className="hidden sm:flex absolute top-3 right-3 w-9 h-9 rounded-full bg-[#F8F3EB]/90 text-[#44382F] items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Expand className="w-4 h-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 text-[#F8F3EB]">
                  <p className="text-[10.5px] sm:text-xs text-[#E6D3B3] truncate">
                    {item.eventType}
                  </p>
                  <h3 className="font-serif text-base sm:text-2xl leading-snug text-white line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#1C1814]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={currentLightboxItem.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#F8F3EB] rounded-2xl overflow-hidden shadow-2xl border border-[#C5A77A]/30"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#1C1814]/75 text-[#F8F3EB] hover:bg-[#1C1814] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative bg-[#1C1814] aspect-[16/10] max-h-[62vh] w-full overflow-hidden">
                <ImageWithFallback
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className={`w-full h-full object-cover ${
                    currentLightboxItem.imagePosition || 'object-center'
                  }`}
                />
                {visibleItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex(
                          (lightboxIndex - 1 + visibleItems.length) % visibleItems.length
                        )
                      }
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F8F3EB]/90 text-[#44382F] hover:bg-white flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxIndex((lightboxIndex + 1) % visibleItems.length)
                      }
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F8F3EB]/90 text-[#44382F] hover:bg-white flex items-center justify-center shadow-md cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-[#9A7B4F] font-medium">
                    {currentLightboxItem.eventType} · {currentLightboxItem.location} ·{' '}
                    {currentLightboxItem.guests}
                  </p>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#44382F]">
                    {currentLightboxItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E5F53] leading-relaxed">
                    {currentLightboxItem.description}
                  </p>
                </div>
                <p className="text-xs text-[#6E5F53] tabular-nums shrink-0">
                  {lightboxIndex + 1} / {visibleItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
