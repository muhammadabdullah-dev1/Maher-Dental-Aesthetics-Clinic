import React from 'react';
import { Award, CheckCircle2, ShieldCheck, HeartHandshake, Calendar, Phone } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_IMAGES } from '../config/clinicData';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenBooking }) => {
  const { doctor } = CLINIC_CONFIG;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#B3F6FF] shadow-cyan-soft">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Doctor Photo & Badges (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border-4 border-[#EAF8FF] shadow-lg aspect-[3/4] bg-slate-100 max-w-sm mx-auto">
            <img
              src={CLINIC_IMAGES.doctor}
              alt={doctor.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002429]/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B3F6FF]">
                Lead Dental Surgeon
              </span>
              <p className="text-lg font-bold text-white">{doctor.name}</p>
              <p className="text-xs text-white/80">{doctor.qualifications}</p>
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute -bottom-3 -right-2 sm:right-4 bg-white p-3 rounded-xl border border-[#B3F6FF] shadow-cyan-soft flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#002429] block">{doctor.experience}</span>
              <span className="text-[10px] text-[#002429]/70">Trusted in Quetta</span>
            </div>
          </div>
        </div>

        {/* Doctor Bio & Specialties (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF8FF] border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5] mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Certified Dental Expert</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002429] tracking-tight">
              Meet {doctor.name}
            </h3>
            <p className="text-sm font-semibold text-[#00BCD5] mt-1">
              {doctor.title}
            </p>
            <p className="text-xs text-[#002429]/70 mt-0.5">
              {doctor.qualifications} · Member, Pakistan Dental Association
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#002429]/80 leading-relaxed">
            {doctor.bio}
          </p>

          {/* Clinical philosophy quote */}
          <div className="p-4 rounded-2xl bg-[#EAF8FF] border-l-4 border-[#00BCD5] text-xs sm:text-sm text-[#002429] italic">
            "Every patient comes to us with distinct hopes and anxieties. My primary duty is to listen first, numb gently, and execute with surgical precision so you always look forward to your dental visits."
          </div>

          {/* Specialties list */}
          <div>
            <h4 className="text-xs font-bold text-[#002429] uppercase tracking-wider mb-2.5">
              Core Areas of Clinical Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.specialties.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#002429]/85">
                  <CheckCircle2 className="w-4 h-4 text-[#00BCD5] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white text-xs sm:text-sm font-bold shadow-cyan-soft transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation with {doctor.name.split(' ')[1] || 'Doctor'}</span>
            </button>
            <a
              href={CLINIC_CONFIG.phone.telLink}
              className="px-5 py-3 rounded-xl bg-white border border-[#B3F6FF] hover:bg-[#EAF8FF] text-[#002429] text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00BCD5]" />
              <span>Direct Clinic Call</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
