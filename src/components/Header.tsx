import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Shield, Clock, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG, getClinicOpenStatus } from '../config/clinicData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: (treatment?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getClinicOpenStatus();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top subtle emergency/hours trust ribbon */}
      <div className="bg-[#002429] text-white text-xs py-2 px-4 border-b border-[#003840]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1.5 text-[#B3F6FF]">
              <Clock className="w-3.5 h-3.5 text-[#00BCD5]" />
              <span>Evening Clinic: Opens 4:00 PM</span>
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline text-white/80">
              Patel Bagh, near Saleem Complex, Quetta
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium ${
              status.isOpen 
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' 
                : 'bg-[#003840] text-[#B3F6FF]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-400' : 'bg-[#00BCD5]'}`}></span>
              {status.statusBadge}
            </span>
            <a 
              href={CLINIC_CONFIG.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-white text-[11px] hidden md:inline transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky top bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#B3F6FF]/60 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand element wordmark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BCD5] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00BCD5] to-[#008ba3] flex items-center justify-center text-white shadow-cyan-soft group-hover:scale-105 transition-transform">
              {/* Dental Tooth Logo SVG */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.5 2 6 4 5 7C4 10 4.5 13.5 5.5 16C6.5 18.5 7.5 22 9.5 22C11.5 22 11 18 12 18C13 18 12.5 22 14.5 22C16.5 22 17.5 18.5 18.5 16C19.5 13.5 20 10 19 7C18 4 15.5 2 12 2ZM12 4C14.8 4 16.8 5.6 17.5 8C18.2 10.4 17.8 13.2 16.9 15.4C16.1 17.4 15.1 20 14.3 20C13.8 20 13.7 18 13.2 17C12.7 16 11.3 16 10.8 17C10.3 18 10.2 20 9.7 20C8.9 20 7.9 17.4 7.1 15.4C6.2 13.2 5.8 10.4 6.5 8C7.2 5.6 9.2 4 12 4Z" />
              </svg>
            </div>
            <div className="whitespace-nowrap shrink-0">
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-[#002429]">
                Maher Dental
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-wider text-[#00BCD5]">
                & Aesthetics Clinic
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Single line, quiet hover underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#002429]/80">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors relative hover:text-[#00BCD5] ${
                  activeTab === link.id
                    ? 'text-[#00BCD5] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#00BCD5]'
                    : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Call & Primary Booking CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={CLINIC_CONFIG.phone.telLink}
              className="flex items-center gap-2 text-sm font-semibold text-[#002429] hover:text-[#00BCD5] transition-colors whitespace-nowrap shrink-0"
              title="Call clinic phone"
            >
              <div className="w-8 h-8 rounded-full bg-[#EAF8FF] flex items-center justify-center text-[#00BCD5]">
                <Phone className="w-4 h-4" />
              </div>
              <span className="tabular-nums">{CLINIC_CONFIG.phone.display}</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#00BCD5] hover:bg-[#009fb5] active:scale-98 rounded-xl shadow-cyan-soft hover:shadow-cyan-hover transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#00BCD5] rounded-lg shadow-xs"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#002429] hover:text-[#00BCD5] rounded-lg border border-[#B3F6FF] bg-[#EAF8FF]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#B3F6FF] px-4 pt-4 pb-6 space-y-3 shadow-lg">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#EAF8FF]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-left rounded-lg text-sm font-medium transition-colors ${
                    activeTab === link.id
                      ? 'bg-[#B3F6FF]/40 text-[#002429] font-bold border-l-2 border-[#00BCD5]'
                      : 'text-[#002429]/80 hover:bg-[#EAF8FF]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={CLINIC_CONFIG.phone.telLink}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#00BCD5] text-[#002429] font-semibold text-sm bg-white"
              >
                <Phone className="w-4 h-4 text-[#00BCD5]" />
                <span>Call {CLINIC_CONFIG.phone.display}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00BCD5] text-white font-semibold text-sm shadow-cyan-soft"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
