import React from 'react';
import { ShieldCheck, Heart, Sparkles, Award, Eye, Target, Microscope, CheckCircle2, Calendar } from 'lucide-react';
import { DoctorProfile } from '../components/DoctorProfile';
import { CLINIC_CONFIG, CLINIC_IMAGES } from '../config/clinicData';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Sterilization",
      desc: "Every instrument undergoes strict 4-stage disinfection and Class-B vacuum autoclave sterilization sealed in single-use pouches for complete hygiene security."
    },
    {
      icon: Microscope,
      title: "Advanced Digital Technology",
      desc: "Equipped with low-radiation digital radiography, high-definition intraoral cameras, and rotary apex locators for pinpoint diagnosis."
    },
    {
      icon: Heart,
      title: "Comfort & Pain-Free Focus",
      desc: "We prioritize patient emotional comfort above all else. Modern buffered numbing agents and gentle handling remove dental fear."
    },
    {
      icon: Award,
      title: "Transparent, Honest Pricing",
      desc: "Clear upfront quotes with itemized options before starting any procedure. We never recommend unnecessary or redundant dental work."
    }
  ];

  const galleryImages = [
    {
      src: CLINIC_IMAGES.hero,
      title: "Modern Operatory Room",
      subtitle: "Ergonomic leather chair with surgical lighting"
    },
    {
      src: CLINIC_IMAGES.sterilization,
      title: "Sterilization Suite",
      subtitle: "Autoclave and 3D digital oral imaging equipment"
    },
    {
      src: CLINIC_IMAGES.smile,
      title: "Cosmetic Aesthetic Results",
      subtitle: "Natural radiant smile design results"
    },
    {
      src: CLINIC_IMAGES.doctor,
      title: "Consultation Lounge",
      subtitle: "Personalized patient planning and discussions"
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B3F6FF] text-xs font-semibold text-[#00BCD5]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gentle & Aesthetic Dental Practice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002429] tracking-tight">
            Our Story, Philosophy & Commitment to Quetta
          </h1>
          <p className="text-base sm:text-lg text-[#002429]/80 leading-relaxed">
            Founded with a simple vision: to bring patient-centric, gentle, and technologically advanced dental healthcare to families and professionals in Quetta, Pakistan.
          </p>
        </div>

        {/* Doctor Profile Card */}
        <DoctorProfile onOpenBooking={onOpenBooking} />

        {/* Clinic Story & Philosophy Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#B3F6FF] shadow-xs">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
              The Maher Dental Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002429]">
              Dentistry Designed Around Empathy and Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#002429]/80 leading-relaxed">
              For generations, visiting the dentist has been accompanied by fear and hesitation. At Maher Dental & Aesthetics Clinic, we set out to dismantle that anxiety. Located in Patel Bagh near Saleem Complex, our clinic is designed to feel calm, unhurried, and welcoming.
            </p>
            <p className="text-sm sm:text-base text-[#002429]/80 leading-relaxed">
              We combine restorative precision with cosmetic artistry. Whether you require a delicate root canal to save a natural tooth or porcelain veneers to transform your career and wedding confidence, our treatment plans are built on total honesty and patient dialogue.
            </p>
          </div>
        </section>

        {/* Mission and Vision Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-[#EAF8FF] rounded-2xl p-8 border border-[#B3F6FF] space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-white text-[#00BCD5] flex items-center justify-center shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002429]">Our Mission</h3>
            <p className="text-sm text-[#002429]/80 leading-relaxed">
              To provide the highest standard of painless dental care in Quetta through rigorous sterilization, modern technology, empathetic bedside care, and ethical treatment decisions.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-[#EAF8FF] rounded-2xl p-8 border border-[#B3F6FF] space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-white text-[#00BCD5] flex items-center justify-center shadow-xs">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#002429]">Our Vision</h3>
            <p className="text-sm text-[#002429]/80 leading-relaxed">
              To be Balochistan’s leading center for aesthetic smile restoration and gentle restorative dentistry, empowering every patient with lifelong oral wellness and radiant self-confidence.
            </p>
          </div>
        </section>

        {/* Why Patients Trust Us (4 Pillars) */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
              Safety & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002429]">
              Why Patients Trust Maher Dental Clinic
            </h2>
            <p className="text-sm text-[#002429]/75 max-w-xl mx-auto">
              Our clinical protocols adhere strictly to international dental associations for hygiene and patient safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#B3F6FF] shadow-xs hover:shadow-cyan-soft transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#002429]">{pillar.title}</h3>
                  <p className="text-xs text-[#002429]/75 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Clinic Photo Gallery Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-[#00BCD5] uppercase tracking-wider">
              Clinic Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002429]">
              Take a Virtual Tour of Our Quetta Facility
            </h2>
            <p className="text-xs sm:text-sm text-[#002429]/75">
              Spotless operatory rooms, sterile sterilization suites, and comfortable consultation areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-[#B3F6FF] bg-white aspect-[4/3] shadow-xs"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002429]/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <h4 className="text-sm font-bold text-white">{img.title}</h4>
                  <p className="text-[11px] text-[#B3F6FF]">{img.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Booking CTA */}
        <div className="bg-[#002429] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Experience Gentle Dental Healthcare in Quetta?
          </h3>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Our evening clinic slots are designed around your busy schedule. Book your visit or contact Dr. Maher Baloch directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-bold text-sm shadow-cyan-soft transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment (Opens 4 PM)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
