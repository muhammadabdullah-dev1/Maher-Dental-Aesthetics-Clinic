import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#B3F6FF] px-3 py-2 shadow-lg">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={CLINIC_CONFIG.phone.telLink}
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white border-2 border-[#00BCD5] text-[#002429] font-bold text-xs shadow-xs active:bg-[#EAF8FF] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#00BCD5] shrink-0" />
          <span className="truncate">Call Clinic</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC_CONFIG.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-xs active:bg-[#20ba5a] transition-colors"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
