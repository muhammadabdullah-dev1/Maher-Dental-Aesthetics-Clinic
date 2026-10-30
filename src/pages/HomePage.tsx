import React from 'react';
import { ArrowRight, Calendar, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ServiceCard } from '../components/ServiceCard';
import { SmileConcernFinder } from '../components/SmileConcernFinder';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ReviewsCarousel } from '../components/ReviewsCarousel';
import { HowItWorks } from '../components/HowItWorks';
import { SERVICES_DATA, CLINIC_CONFIG } from '../config/clinicData';

interface HomePageProps {
  onOpenBooking: (treatment?: string) => void;
  onNavigate: (tabId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onNavigate }) => {
  // 6 marquee services preview
  const previewServiceIds = [
    'cleaning-scaling',
    'teeth-whitening',
    'dental-implants',
    'braces-aligners',
    'root-canal',
    'smile-makeover'
  ];
  const previewServices = SERVICES_DATA.filter((s) => previewServiceIds.includes(s.id));

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero 
        onOpenBooking={() => onOpenBooking()} 
        onExploreServices={() => onNavigate('services')} 
      />

      {/* 2. Trust Strip (4 Badges) */}
      <TrustStrip />

      {/* 3. Services Preview Section (6 Marquee Cards) */}
      <section className="py-16 sm:py-20 bg-[#EAF8FF]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
                Comprehensive Dental Care
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002429] tracking-tight">
                Featured Dental & Aesthetic Treatments
              </h2>
              <p className="text-sm sm:text-base text-[#002429]/75 max-w-xl">
                From emergency pain relief and gentle hygiene to cosmetic smile makeovers, our modern clinic is equipped with the latest dental technology.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#00BCD5] text-[#002429] hover:bg-[#EAF8FF] text-xs sm:text-sm font-bold transition-all shadow-xs shrink-0 self-start md:self-auto"
            >
              <span>View All 12 Treatments</span>
              <ArrowRight className="w-4 h-4 text-[#00BCD5]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={(title) => onOpenBooking(title)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Interactive Smile Concern Finder Quiz */}
      <SmileConcernFinder 
        onSelectTreatment={(treatmentTitle) => onOpenBooking(treatmentTitle)} 
      />

      {/* 5. Before & After Drag-to-Compare Slider */}
      <BeforeAfterSlider 
        onOpenBooking={() => onOpenBooking()} 
      />

      {/* 6. Patient Reviews (4.9 Star Google Proof) */}
      <ReviewsCarousel 
        onOpenBooking={() => onOpenBooking()} 
      />

      {/* 7. How It Works (3 Steps) */}
      <HowItWorks 
        onOpenBooking={() => onOpenBooking()} 
      />

      {/* 8. Final CTA Banner on Deep Teal-Black (#002429) */}
      <section className="bg-[#002429] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BCD5]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-[#B3F6FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#00BCD5]" />
            <span>Evening Clinic Opens 4:00 PM · Quetta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Ready for a Smile You Love? <br className="hidden sm:inline" />
            Book Your Visit Today.
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Experience gentle, sterile, and pain-free dental care at Maher Dental & Aesthetics Clinic. Convenient evening appointments available Monday through Saturday.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-bold text-base shadow-cyan-soft transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Online</span>
            </button>

            <a
              href={CLINIC_CONFIG.phone.telLink}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-transparent hover:bg-white/10 border-2 border-[#00BCD5] text-white font-bold text-base transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#00BCD5]" />
              <span className="tabular-nums">Call {CLINIC_CONFIG.phone.display}</span>
            </a>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00BCD5]" />
              <span>Patel Bagh, near Saleem Complex</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00BCD5]" />
              <span>Rated 4.9★ from 147 Reviews</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00BCD5]" />
              <span>Strict Class-B Autoclave Protocol</span>
            </span>
          </div>
        </div>
      </section>

    </div>
  );
};
