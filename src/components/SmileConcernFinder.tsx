import React, { useState } from 'react';
import { ArrowRight, RotateCcw, Calendar, Check, Sparkles, HelpCircle, ShieldAlert } from 'lucide-react';
import { SERVICES_DATA } from '../config/clinicData';

interface SmileConcernFinderProps {
  onSelectTreatment: (treatmentTitle: string) => void;
}

export const SmileConcernFinder: React.FC<SmileConcernFinderProps> = ({ onSelectTreatment }) => {
  const [step, setStep] = useState<number>(1);
  const [concern, setConcern] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [urgency, setUrgency] = useState<string>('');

  const concernOptions = [
    {
      id: 'pain',
      title: 'Tooth Pain or Throbbing Sensitivity',
      desc: 'Discomfort when chewing, hot/cold sensitivity, or lingering ache',
      recommendedServiceId: 'root-canal',
      serviceName: 'Painless Rotary Root Canal Treatment',
      advice: 'Tooth pain often signals pulp inflammation or a deep cavity. Immediate gentle diagnosis prevents infection spread and saves your natural tooth.'
    },
    {
      id: 'stained',
      title: 'Yellow, Stained, or Discolored Teeth',
      desc: 'Dullness from tea, coffee, tobacco, or general aging',
      recommendedServiceId: 'teeth-whitening',
      serviceName: 'Professional Laser Teeth Whitening',
      advice: 'Our enamel-safe laser whitening gently lifts deep internal stains in just one 60-minute visit, brightening your smile by up to 8 shades.'
    },
    {
      id: 'missing',
      title: 'Missing One or More Teeth',
      desc: 'Gap in smile, difficulty chewing, or drifting neighboring teeth',
      recommendedServiceId: 'dental-implants',
      serviceName: 'Permanent Titanium Dental Implants',
      advice: 'Dental implants provide a secure, lifetime anchor that preserves jaw bone structure and restores 100% of natural chewing function.'
    },
    {
      id: 'crooked',
      title: 'Crooked, Overlapping, or Spaced Teeth',
      desc: 'Irregular alignment, bite problems, or aesthetic concerns',
      recommendedServiceId: 'braces-aligners',
      serviceName: 'Clear Aligners & Aesthetic Braces',
      advice: 'Custom clear aligners straighten teeth without visible metal wires. They are removable, comfortable, and virtually invisible during conversation.'
    },
    {
      id: 'gums',
      title: 'Bleeding Gums or Bad Breath (Halitosis)',
      desc: 'Bleeding while brushing, inflamed gum margins, or persistent odor',
      recommendedServiceId: 'cleaning-scaling',
      serviceName: 'Ultrasonic Teeth Cleaning & Scaling',
      advice: 'Accumulated plaque and calculus harbor bacteria that cause gingivitis. Ultrasonic scaling thoroughly cleans beneath the gum line for fresh breath.'
    },
    {
      id: 'chipped',
      title: 'Chipped, Broken, or Worn Down Teeth',
      desc: 'Fractured tooth corner, visible crack, or uneven edges',
      recommendedServiceId: 'fillings',
      serviceName: 'Natural Tooth-Colored Composite Fillings',
      advice: 'Nano-hybrid composite restorations rebuild lost tooth structure with invisible aesthetic bonding that matches your natural shade.'
    }
  ];

  const durationOptions = [
    { id: 'sudden', label: 'Sudden onset (within the last 48 hours)' },
    { id: 'few-weeks', label: 'Past few weeks (1–3 weeks)' },
    { id: 'months', label: 'Several months (ongoing discomfort)' },
    { id: 'long-term', label: 'Long-term aesthetic goal I finally want to fix' },
  ];

  const urgencyOptions = [
    { id: 'high', label: 'Urgent – I need to see Dr. Maher today/tomorrow' },
    { id: 'medium', label: 'This week – Looking for a convenient evening slot' },
    { id: 'low', label: 'Flexible – Exploring options and treatment costs' },
  ];

  const selectedConcernData = concernOptions.find(c => c.id === concern);

  const handleReset = () => {
    setStep(1);
    setConcern('');
    setDuration('');
    setUrgency('');
  };

  const handleBookRecommendation = () => {
    if (selectedConcernData) {
      onSelectTreatment(selectedConcernData.serviceName);
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-[#B3F6FF]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF8FF] border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Smile Diagnostic</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002429] tracking-tight">
            Smile Concern Finder
          </h2>
          <p className="text-sm sm:text-base text-[#002429]/75 max-w-xl mx-auto">
            Not sure which treatment fits your situation? Answer 3 quick questions to receive a tailored clinical recommendation and personalized guidance.
          </p>

          {/* Stepper indicators */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step === s
                    ? 'w-10 bg-[#00BCD5]'
                    : step > s
                    ? 'w-6 bg-[#00BCD5]/60'
                    : 'w-6 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-[#EAF8FF]/60 rounded-2xl p-6 sm:p-8 border border-[#B3F6FF] shadow-cyan-soft relative">
          
          {/* STEP 1: What is bothering you? */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">Step 1 of 3</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002429]">
                    What is currently bothering your teeth or smile?
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {concernOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setConcern(opt.id);
                      setStep(2);
                    }}
                    className={`text-left p-4 rounded-xl border transition-all ${
                      concern === opt.id
                        ? 'bg-white border-[#00BCD5] shadow-sm ring-2 ring-[#00BCD5]/20'
                        : 'bg-white/80 hover:bg-white border-[#B3F6FF] hover:border-[#00BCD5]'
                    }`}
                  >
                    <div className="font-bold text-sm text-[#002429] mb-1">{opt.title}</div>
                    <div className="text-xs text-[#002429]/70">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: How long? */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">Step 2 of 3</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002429]">
                    How long have you noticed this issue?
                  </h3>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-[#00BCD5] hover:underline font-semibold"
                >
                  Back
                </button>
              </div>

              <div className="space-y-2.5">
                {durationOptions.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      setDuration(d.id);
                      setStep(3);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      duration === d.id
                        ? 'bg-white border-[#00BCD5] shadow-sm'
                        : 'bg-white/80 hover:bg-white border-[#B3F6FF]'
                    }`}
                  >
                    <span className="text-sm font-semibold text-[#002429]">{d.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#00BCD5]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Urgency */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">Step 3 of 3</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#002429]">
                    What is your preferred timeline for treatment?
                  </h3>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-[#00BCD5] hover:underline font-semibold"
                >
                  Back
                </button>
              </div>

              <div className="space-y-2.5">
                {urgencyOptions.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => {
                      setUrgency(u.id);
                      setStep(4);
                    }}
                    className="w-full text-left p-4 rounded-xl border bg-white/80 hover:bg-white border-[#B3F6FF] hover:border-[#00BCD5] transition-all flex items-center justify-between"
                  >
                    <span className="text-sm font-semibold text-[#002429]">{u.label}</span>
                    <Check className="w-4 h-4 text-[#00BCD5]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* RESULT SCREEN */}
          {step === 4 && selectedConcernData && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between border-b border-[#B3F6FF] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#B3F6FF] flex items-center justify-center text-[#002429]">
                    <Sparkles className="w-4 h-4 text-[#00BCD5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">Recommended Treatment Plan</span>
                    <h3 className="text-lg font-bold text-[#002429]">Based on your answers</h3>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-[#002429]/70 hover:text-[#00BCD5] font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start Over</span>
                </button>
              </div>

              {/* Treatment card recommendation */}
              <div className="bg-white rounded-xl p-5 border border-[#00BCD5]/40 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#EAF8FF] text-[#00BCD5]">
                      Primary Match
                    </span>
                    <h4 className="text-xl font-bold text-[#002429] mt-1.5">
                      {selectedConcernData.serviceName}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-[#002429]/70 sm:text-right">
                    Conducted by Dr. Maher Baloch
                  </span>
                </div>

                <p className="text-sm text-[#002429]/80 leading-relaxed">
                  {selectedConcernData.advice}
                </p>

                <div className="p-3.5 rounded-lg bg-[#EAF8FF] text-xs text-[#002429]/85 space-y-1">
                  <p className="font-semibold text-[#002429]">What happens next at Maher Dental:</p>
                  <p>1. In-person visual exam with intraoral camera</p>
                  <p>2. Transparent quote and tailored treatment procedure explained</p>
                  <p>3. Gentle, pain-free completion during your chosen evening slot</p>
                </div>
              </div>

              {/* CTA Handover to Appointment Form */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="text-xs text-[#002429]/70 text-center sm:text-left">
                  Slots available between 4:00 PM – 9:30 PM (Mon - Sat)
                </div>

                <button
                  onClick={handleBookRecommendation}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-bold text-sm shadow-cyan-soft transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book This Consultation</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
