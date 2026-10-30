import React from 'react';
import { Calendar, Phone, Star, MapPin, Clock, CheckCircle2, Shield } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_IMAGES } from '../config/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:py-16">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B3F6FF]/35 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#00BCD5]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location & Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#B3F6FF] text-xs font-medium text-[#002429] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#00BCD5]" />
              <span>Patel Bagh, near Saleem Complex, Quetta</span>
              <span className="text-[#00BCD5] font-bold">·</span>
              <span className="text-[#002429]/70">Evening Clinic Opens 4 PM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#002429] tracking-tight leading-[1.15]">
              Your Healthiest, Most Confident Smile{' '}
              <span className="text-[#00BCD5] relative whitespace-nowrap">
                Starts Here
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#002429]/80 leading-relaxed max-w-2xl">
              Gentle, modern dental and aesthetic care in Quetta. From pain-free rotary root canals and routine ultrasonic scaling to titanium implants and radiant cosmetic whitening, experience world-class dentistry designed around your comfort.
            </p>

            {/* Trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#002429]/85 font-medium pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BCD5] shrink-0" />
                <span>100% Painless gentle techniques</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BCD5] shrink-0" />
                <span>Strict Class-B autoclave sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BCD5] shrink-0" />
                <span>Transparent pricing, no hidden costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00BCD5] shrink-0" />
                <span>Convenient evening slots (4 PM – 9:30 PM)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-base font-bold text-white bg-[#00BCD5] hover:bg-[#009fb5] active:scale-98 rounded-xl shadow-cyan-soft hover:shadow-cyan-hover transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href={CLINIC_CONFIG.phone.telLink}
                className="px-6 py-3.5 text-base font-bold text-[#002429] bg-white hover:bg-[#EAF8FF] border-2 border-[#00BCD5] active:scale-98 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-[#00BCD5]" />
                <span className="tabular-nums">Call {CLINIC_CONFIG.phone.display}</span>
              </a>
            </div>

            {/* Doctor reassurance line */}
            <div className="pt-1 text-xs text-[#002429]/70 flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#00BCD5]" />
              <span>Led by Dr. Maher Baloch (BDS, RDS Pak) & Certified Specialists</span>
            </div>

          </div>

          {/* Right Column: Hero Visual & Floating Social Proof Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-2xl bg-white aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={CLINIC_IMAGES.hero}
                alt="Maher Dental & Aesthetics Clinic modern operatory room"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002429]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm bg-[#002429]/80 backdrop-blur-md p-3 rounded-xl border border-white/20">
                <p className="font-semibold text-white">State-of-the-art Dental Operatory</p>
                <p className="text-white/80 text-xs">High-definition digital sensors & ergonomic comfort chair</p>
              </div>
            </div>

            {/* Floating Review Badge */}
            <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 sm:p-4 rounded-2xl shadow-cyan-hover border border-[#B3F6FF] flex items-center gap-3.5 max-w-[260px] sm:max-w-xs animate-bounce-subtle">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-extrabold text-[#002429]">4.9 ★</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-medium text-[#002429]/80">
                  from 147 Google Reviews
                </p>
                <span className="text-[10px] text-emerald-600 font-semibold uppercase tracking-wide">
                  Top Rated in Quetta
                </span>
              </div>
            </div>

            {/* Floating Schedule Pill */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white py-2.5 px-3.5 rounded-xl shadow-cyan-soft border border-[#B3F6FF] flex items-center gap-2.5 text-xs text-[#002429]">
              <Clock className="w-4 h-4 text-[#00BCD5]" />
              <div>
                <span className="font-bold block">Mon - Sat: 4 PM - 9:30 PM</span>
                <span className="text-[11px] text-[#002429]/70">Walk-ins & Appointments</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
