import React, { useState } from 'react';
import { Star, CheckCircle, ChevronLeft, ChevronRight, ExternalLink, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA, CLINIC_CONFIG } from '../config/clinicData';

interface ReviewsCarouselProps {
  onOpenBooking: () => void;
}

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#B3F6FF]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Google Rating lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FF] border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
              <Star className="w-3.5 h-3.5 fill-[#00BCD5]" />
              <span>Real Patient Experiences</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002429] tracking-tight">
              Trusted by Hundreds Across Quetta
            </h2>
            <p className="text-sm sm:text-base text-[#002429]/75 max-w-xl">
              Don't just take our word for it. Here is what our patients share about Dr. Maher's gentle touch, painless care, and clinic cleanliness.
            </p>
          </div>

          {/* Google 4.9 Score Box */}
          <div className="bg-[#EAF8FF] p-4 sm:p-5 rounded-2xl border border-[#B3F6FF] flex items-center gap-4 shrink-0 shadow-cyan-soft">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-amber-500 shadow-xs">
              <span className="text-xl font-black text-[#002429]">4.9</span>
            </div>
            <div>
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#002429] mt-0.5">
                147 Google Reviews
              </p>
              <a
                href={CLINIC_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#00BCD5] font-semibold hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>Read on Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid (Desktop) & Carousel controls (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#EAF8FF]/40 rounded-2xl p-6 border border-[#B3F6FF] hover:border-[#00BCD5] hover:bg-white hover:shadow-cyan-soft transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                {/* 5-Star Rating & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#002429]/60">{rev.timeAgo}</span>
                </div>

                {/* Patient Comment */}
                <p className="text-xs sm:text-sm text-[#002429]/80 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Treatment */}
              <div className="pt-4 mt-4 border-t border-[#B3F6FF]/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#B3F6FF] text-[#002429] flex items-center justify-center text-xs font-bold shrink-0">
                    {rev.author.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#002429] truncate flex items-center gap-1">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <span title="Verified Patient" className="inline-flex items-center">
                          <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                        </span>
                      )}
                    </p>
                    <p className="text-[11px] text-[#00BCD5] truncate">
                      {rev.treatment}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* External Google Link & Booking CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLINIC_CONFIG.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-white border border-[#00BCD5] text-[#002429] hover:bg-[#EAF8FF] font-semibold text-xs sm:text-sm transition-all flex items-center gap-2"
          >
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>See All 147 Reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00BCD5]" />
          </a>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-semibold text-xs sm:text-sm shadow-cyan-soft transition-all flex items-center gap-2"
          >
            <span>Book Your Comfortable Visit</span>
          </button>
        </div>

      </div>
    </section>
  );
};
