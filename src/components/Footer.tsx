import React from 'react';
import { MapPin, Phone, Clock, Star, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface FooterProps {
  onNavigate: (tabId: string) => void;
  onOpenBooking: () => void;
  onOpenStaffPortal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking, onOpenStaffPortal }) => {
  return (
    <footer className="bg-[#002429] text-white pt-16 pb-24 sm:pb-16 border-t border-[#003840]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00BCD5] to-[#008ba3] flex items-center justify-center text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.5 2 6 4 5 7C4 10 4.5 13.5 5.5 16C6.5 18.5 7.5 22 9.5 22C11.5 22 11 18 12 18C13 18 12.5 22 14.5 22C16.5 22 17.5 18.5 18.5 16C19.5 13.5 20 10 19 7C18 4 15.5 2 12 2Z" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-bold tracking-tight text-white">
                  Maher Dental
                </span>
                <span className="block text-xs font-semibold text-[#00BCD5] tracking-wider uppercase">
                  & Aesthetics Clinic · Quetta
                </span>
              </div>
            </div>

            <p className="text-white/75 text-sm leading-relaxed max-w-md">
              Providing gentle, modern dental healthcare and transformative smile aesthetics to patients across Quetta. Sterilized protocols, advanced digital technology, and pain-free treatments.
            </p>

            <div className="text-sm font-medium text-[#B3F6FF] italic">
              "Your smile, our priority."
            </div>

            {/* Google Social Proof Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0</span>
              <span className="text-white/60">·</span>
              <span className="text-white/80">147 Verified Google Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[#B3F6FF]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-[#00BCD5] transition-colors"
                >
                  Home & Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#00BCD5] transition-colors"
                >
                  About Dr. Maher & Clinic
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-[#00BCD5] transition-colors"
                >
                  General & Aesthetic Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('reviews')} 
                  className="hover:text-[#00BCD5] transition-colors"
                >
                  Patient Testimonials (4.9★)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-[#00BCD5] transition-colors"
                >
                  Location & Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenBooking()} 
                  className="hover:text-[#00BCD5] text-[#00BCD5] font-semibold transition-colors inline-flex items-center gap-1"
                >
                  <span>Book Evening Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold tracking-wide uppercase text-[#B3F6FF]">
              Clinic & Hours
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00BCD5] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{CLINIC_CONFIG.address.line1}</p>
                  <p className="text-xs text-white/60">{CLINIC_CONFIG.address.landmark}</p>
                  <p className="text-xs text-white/60">Quetta, {CLINIC_CONFIG.address.postalCode}, Pakistan</p>
                  <p className="text-[11px] text-[#B3F6FF] mt-0.5">Plus Code: {CLINIC_CONFIG.address.plusCode}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00BCD5] shrink-0" />
                <a 
                  href={CLINIC_CONFIG.phone.telLink} 
                  className="hover:text-[#00BCD5] transition-colors tabular-nums font-medium text-white"
                >
                  {CLINIC_CONFIG.phone.display}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#00BCD5] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">{CLINIC_CONFIG.hours.opensText} (Evening Clinic)</p>
                  <p className="text-xs text-white/60">{CLINIC_CONFIG.hours.scheduleDisplay}</p>
                  <p className="text-xs text-white/50">Sunday: Emergency on-call / by appointment</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={CLINIC_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Facebook Page</span>
                <ExternalLink className="w-3 h-3 text-[#B3F6FF]" />
              </a>

              <a
                href={CLINIC_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors inline-flex items-center gap-1.5"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#B3F6FF]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <span>Sterilized Class-B Autoclave Protocol</span>
            <span aria-hidden="true">·</span>
            <span>Quetta, Balochistan</span>
            {onOpenStaffPortal && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  onClick={onOpenStaffPortal}
                  className="text-[#B3F6FF] hover:underline font-medium"
                >
                  Staff Portal
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
