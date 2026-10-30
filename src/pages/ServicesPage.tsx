import React, { useState } from 'react';
import { Sparkles, Shield, Stethoscope, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { FaqAccordion } from '../components/FaqAccordion';
import { SERVICES_DATA } from '../config/clinicData';

interface ServicesPageProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'aesthetic'>('all');

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Page Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>General & Aesthetic Dental Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002429] tracking-tight">
            Comprehensive Dental Care in Quetta
          </h1>
          <p className="text-base sm:text-lg text-[#002429]/80 leading-relaxed">
            From routine painless cleanings and restorative cavity care to smile makeovers, dental implants, and laser whitening. Every procedure is performed with clinical gentleness and strict sterilization.
          </p>

          {/* Interactive Category Segmented Tabs */}
          <div className="inline-flex items-center p-1.5 bg-[#EAF8FF] border border-[#B3F6FF] rounded-2xl shadow-xs mt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-[#00BCD5] text-white shadow-cyan-soft'
                  : 'text-[#002429]/80 hover:text-[#002429]'
              }`}
            >
              All Treatments (12)
            </button>
            <button
              onClick={() => setActiveCategory('general')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'general'
                  ? 'bg-[#00BCD5] text-white shadow-cyan-soft'
                  : 'text-[#002429]/80 hover:text-[#002429]'
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5" />
              <span>General Dentistry (6)</span>
            </button>
            <button
              onClick={() => setActiveCategory('aesthetic')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeCategory === 'aesthetic'
                  ? 'bg-[#00BCD5] text-white shadow-cyan-soft'
                  : 'text-[#002429]/80 hover:text-[#002429]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aesthetic & Cosmetic (6)</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBook={(title) => onOpenBooking(title)}
            />
          ))}
        </div>

        {/* Cost & Quote Callout Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#B3F6FF] shadow-cyan-soft flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
              Transparent Treatment Pricing
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#002429]">
              How Much Will My Treatment Cost?
            </h3>
            <p className="text-xs sm:text-sm text-[#002429]/80 max-w-2xl leading-relaxed">
              Dental costs vary according to tooth health, materials (e.g. zirconia vs composite), and procedural complexity. We believe in 100% financial clarity—Dr. Maher provides an itemized plan during your consultation before any treatment starts.
            </p>
          </div>

          <button
            onClick={() => onOpenBooking('General Consultation & Quote')}
            className="px-6 py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-bold text-xs sm:text-sm shadow-cyan-soft whitespace-nowrap shrink-0 transition-all flex items-center gap-2"
          >
            <span>Book Consultation & Quote</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Embedded FAQ Accordion */}
        <FaqAccordion onOpenBooking={() => onOpenBooking()} />

      </div>
    </div>
  );
};
