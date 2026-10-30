import React from 'react';
import { CalendarCheck, Search, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      icon: CalendarCheck,
      title: 'Book Your Visit',
      desc: 'Pick your preferred evening date and time slot (4:00 PM – 9:30 PM). Book directly online, call +92 333 8585265, or message us on WhatsApp.'
    },
    {
      step: '02',
      icon: Search,
      title: 'Consult & Plan',
      desc: 'Dr. Maher conducts a thorough, gentle oral examination using low-dose digital imaging. We discuss clear options with transparent upfront fees.'
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Treat & Smile',
      desc: 'Relax in our sterile, comfortable dental chair. Receive pain-free, world-class dental care and leave with a healthy, confident smile you love.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#EAF8FF]/60 border-b border-[#B3F6FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002429] tracking-tight">
            How Your Treatment Journey Works
          </h2>
          <p className="text-sm sm:text-base text-[#002429]/75 max-w-xl mx-auto">
            We eliminate dental anxiety through total transparency, gentle bedside care, and comfortable evening scheduling in Quetta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-[#B3F6FF] shadow-xs hover:shadow-cyan-soft transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-[#00BCD5]/30">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#002429] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#002429]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#EAF8FF] flex items-center text-xs font-semibold text-[#00BCD5]">
                  <span>Step {item.step} Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
