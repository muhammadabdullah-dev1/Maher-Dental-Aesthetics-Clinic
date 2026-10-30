import React from 'react';
import { Star, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      icon: Star,
      title: `${CLINIC_CONFIG.rating} Star Rated`,
      desc: `${CLINIC_CONFIG.reviewCount} Verified Google Reviews`,
      highlight: true
    },
    {
      icon: Sparkles,
      title: "Modern Equipment",
      desc: "Digital 3D sensors & rotary tools",
      highlight: false
    },
    {
      icon: ShieldCheck,
      title: "Sterilized & Safe",
      desc: "Class-B hospital autoclave hygiene",
      highlight: false
    },
    {
      icon: HeartHandshake,
      title: "Painless Treatments",
      desc: "Gentle technique & comfort numbing",
      highlight: false
    }
  ];

  return (
    <section className="bg-white border-y border-[#B3F6FF]/70 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-[#EAF8FF]/50 border border-[#B3F6FF]/40 hover:bg-[#EAF8FF] transition-colors"
              >
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 ${
                  item.highlight 
                    ? 'bg-amber-100 text-amber-600' 
                    : 'bg-[#B3F6FF] text-[#002429]'
                }`}>
                  <Icon className={`w-5 h-5 ${item.highlight ? 'fill-amber-500 text-amber-500' : 'text-[#002429]'}`} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#002429] truncate">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#002429]/70 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
