import React from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  Activity, 
  Scissors, 
  Smile, 
  Sun, 
  Gem, 
  Anchor, 
  Layers, 
  Heart, 
  Sliders, 
  Clock, 
  ArrowRight,
  Check
} from 'lucide-react';
import { ServiceItem } from '../types/clinic';

const ICON_MAP: Record<string, React.ElementType> = {
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Activity,
  Scissors,
  Smile,
  Sun,
  Gem,
  Anchor,
  Layers,
  Heart,
  Sliders,
};

interface ServiceCardProps {
  service: ServiceItem;
  onBook: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onBook }) => {
  const IconComponent = ICON_MAP[service.iconName] || Sparkles;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#B3F6FF] shadow-xs hover:shadow-cyan-soft hover:border-[#00BCD5]/60 transition-all flex flex-col justify-between group">
      <div className="space-y-4">
        
        {/* Top badge & icon */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#EAF8FF] group-hover:bg-[#B3F6FF] text-[#00BCD5] group-hover:text-[#002429] flex items-center justify-center transition-colors shrink-0">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#002429]/70 bg-[#EAF8FF] px-2.5 py-1 rounded-full">
            <Clock className="w-3 h-3 text-[#00BCD5]" />
            <span>{service.duration}</span>
          </div>
        </div>

        {/* Title & Short description */}
        <div>
          <h3 className="text-lg font-bold text-[#002429] group-hover:text-[#00BCD5] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#002429]/75 mt-2 leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* "Ideal for" callout */}
        <div className="p-3 rounded-xl bg-[#EAF8FF]/60 border border-[#B3F6FF]/60 text-xs">
          <span className="font-bold text-[#002429] block mb-0.5">Ideal for:</span>
          <span className="text-[#002429]/80">{service.idealFor}</span>
        </div>

        {/* Key Features */}
        <ul className="space-y-1.5 text-xs text-[#002429]/80 pt-1">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#00BCD5] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Action Button */}
      <div className="pt-6 mt-4 border-t border-[#EAF8FF]">
        <button
          onClick={() => onBook(service.title)}
          className="w-full py-2.5 px-4 rounded-xl bg-[#EAF8FF] hover:bg-[#00BCD5] text-[#002429] hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-[#00BCD5] group-hover:text-white"
        >
          <span>Book This Treatment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
