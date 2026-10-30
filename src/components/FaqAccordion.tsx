import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { FAQ_DATA } from '../config/clinicData';

interface FaqAccordionProps {
  onOpenBooking: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#B3F6FF]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF8FF] border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Patient Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002429] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#002429]/75 max-w-xl mx-auto">
            Everything you need to know about our treatments, gentle anesthesia methods, and evening scheduling in Quetta.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#00BCD5] bg-[#EAF8FF]/30 shadow-xs'
                    : 'border-[#B3F6FF] bg-white hover:border-[#00BCD5]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#002429]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#00BCD5] text-white rotate-180' : 'bg-[#EAF8FF] text-[#00BCD5]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#002429]/80 leading-relaxed border-t border-[#B3F6FF]/40 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Cost Note Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-[#EAF8FF] border border-[#B3F6FF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#00BCD5] flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#002429]">
                Transparent Pricing Guarantee
              </h4>
              <p className="text-xs text-[#002429]/75 mt-0.5">
                Pricing depends on your individual case anatomy. Book an evening consultation for an exact, itemized quote with zero surprises.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white text-xs font-bold shadow-cyan-soft shrink-0 transition-all whitespace-nowrap"
          >
            Get an Exact Quote
          </button>
        </div>

      </div>
    </section>
  );
};
