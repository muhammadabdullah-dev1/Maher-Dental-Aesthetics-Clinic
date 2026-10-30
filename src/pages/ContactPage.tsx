import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ExternalLink, 
  Navigation, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { AppointmentForm } from '../components/AppointmentForm';
import { CLINIC_CONFIG, getClinicOpenStatus } from '../config/clinicData';

interface ContactPageProps {
  initialTreatment?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialTreatment = '' }) => {
  const status = getClinicOpenStatus();

  return (
    <div className="py-12 sm:py-16 space-y-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Evening Clinic in Patel Bagh, Quetta</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002429] tracking-tight">
            Book an Appointment or Visit Us
          </h1>
          <p className="text-base sm:text-lg text-[#002429]/80 leading-relaxed">
            Convenient evening consulting hours from 4:00 PM to 9:30 PM. We welcome scheduled appointments as well as emergency walk-ins.
          </p>
        </div>

        {/* 2-Column Split: Booking Form (7 cols) + Contact Details Card (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Appointment Form (7 cols) */}
          <div className="lg:col-span-7">
            <AppointmentForm initialTreatment={initialTreatment} />
          </div>

          {/* Column 2: Contact Card & Live Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#B3F6FF] shadow-cyan-soft space-y-6">
              
              {/* Header with Live Status Badge */}
              <div className="flex items-center justify-between border-b border-[#EAF8FF] pb-4">
                <div>
                  <h3 className="text-lg font-bold text-[#002429]">Clinic Contact</h3>
                  <p className="text-xs text-[#002429]/70">Direct lines & consultation hours</p>
                </div>

                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  status.isOpen 
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                    : 'bg-[#EAF8FF] text-[#00BCD5] border border-[#B3F6FF]'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-[#00BCD5]'}`} />
                  <span>{status.statusBadge}</span>
                </div>
              </div>

              {/* Address with Landmark */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#002429] uppercase tracking-wider block">
                    Address & Landmark
                  </span>
                  <p className="text-sm font-semibold text-[#002429]">
                    {CLINIC_CONFIG.address.line1}
                  </p>
                  <p className="text-xs text-[#00BCD5] font-semibold">
                    📍 {CLINIC_CONFIG.address.landmark}
                  </p>
                  <p className="text-xs text-[#002429]/70">
                    Quetta, {CLINIC_CONFIG.address.postalCode}, Pakistan
                  </p>
                  <p className="text-[11px] text-[#002429]/60 font-mono mt-1">
                    Plus Code: {CLINIC_CONFIG.address.plusCode}
                  </p>
                </div>
              </div>

              {/* Click to Call Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#002429] uppercase tracking-wider block">
                    Direct Phone Line
                  </span>
                  <a
                    href={CLINIC_CONFIG.phone.telLink}
                    className="text-base sm:text-lg font-bold text-[#00BCD5] hover:underline tabular-nums block"
                  >
                    {CLINIC_CONFIG.phone.display}
                  </a>
                  <p className="text-xs text-[#002429]/70">
                    Call directly for urgent dental pain or questions
                  </p>
                </div>
              </div>

              {/* WhatsApp direct */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#002429] uppercase tracking-wider block">
                    Instant WhatsApp Support
                  </span>
                  <a
                    href={CLINIC_CONFIG.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-600 hover:underline block"
                  >
                    Chat on WhatsApp ({CLINIC_CONFIG.whatsapp.display})
                  </a>
                  <p className="text-xs text-[#002429]/70">
                    Fast response during clinic hours
                  </p>
                </div>
              </div>

              {/* Hours details */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#002429] uppercase tracking-wider block">
                    Clinic Consulting Hours
                  </span>
                  <p className="text-sm font-bold text-[#002429]">
                    Opens at 4:00 PM (Evening Clinic)
                  </p>
                  <p className="text-xs text-[#002429]/80">
                    {CLINIC_CONFIG.hours.scheduleDisplay}
                  </p>
                  <p className="text-xs text-[#002429]/60">
                    Sunday: Emergency calls & prior appointments only
                  </p>
                  <p className="text-[11px] text-[#00BCD5] font-medium pt-0.5">
                    {status.statusDetail}
                  </p>
                </div>
              </div>

              {/* Action buttons inside card */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={CLINIC_CONFIG.phone.telLink}
                  className="py-2.5 px-3 rounded-xl border-2 border-[#00BCD5] text-[#002429] hover:bg-[#EAF8FF] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00BCD5]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={CLINIC_CONFIG.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Facebook Social Card */}
            <div className="bg-[#EAF8FF] rounded-2xl p-5 border border-[#B3F6FF] flex items-center justify-between gap-4">
              <div className="text-xs">
                <span className="font-bold text-[#002429] block">Follow Us on Facebook</span>
                <span className="text-[#002429]/70">Updates, tips, and clinical photos</span>
              </div>
              <a
                href={CLINIC_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white text-xs font-bold shadow-xs transition-colors inline-flex items-center gap-1.5 shrink-0"
              >
                <span>Visit Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

        {/* Embedded Map Section & Directions */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#B3F6FF] shadow-cyan-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
                Find Our Clinic
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#002429]">
                Maher Dental & Aesthetics Clinic Location
              </h3>
              <p className="text-xs sm:text-sm text-[#002429]/70">
                Located in Patel Bagh, near Saleem Complex, Quetta, 87300, Pakistan
              </p>
            </div>

            <a
              href={CLINIC_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-bold text-xs sm:text-sm shadow-cyan-soft transition-all flex items-center justify-center gap-2 shrink-0 self-start sm:self-auto"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map representation */}
          <div className="relative rounded-2xl overflow-hidden border border-[#B3F6FF] aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
            {/* Embedded map iframe pointing to Quetta Patel Bagh / Saleem complex area */}
            <iframe
              title="Maher Dental Clinic Location Map"
              src="https://maps.google.com/maps?q=Patel%20Bagh%2C%20near%20Saleem%20Complex%2C%20Quetta&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating location card on map */}
            <div className="absolute bottom-4 left-4 max-w-xs bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#B3F6FF] shadow-lg text-xs hidden sm:block">
              <p className="font-bold text-[#002429]">Maher Dental & Aesthetics Clinic</p>
              <p className="text-[11px] text-[#002429]/75">Patel Bagh, near Saleem Complex, Quetta</p>
              <div className="flex items-center gap-2 mt-1.5 text-[10px] text-[#00BCD5] font-semibold">
                <span>Google Plus Code: 52R4+4W</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
