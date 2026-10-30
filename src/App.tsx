import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { AppointmentForm } from './components/AppointmentForm';
import { X } from 'lucide-react';
import { CLINIC_CONFIG } from './config/clinicData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');

  // Handle opening the appointment booking form
  const handleOpenBooking = (treatment?: string) => {
    if (treatment) {
      setSelectedTreatment(treatment);
    } else {
      setSelectedTreatment('');
    }
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EAF8FF] text-[#002429]">
      {/* Shared Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleNavigate}
        onOpenBooking={(treatment) => handleOpenBooking(treatment)}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onOpenBooking={(treatment) => handleOpenBooking(treatment)}
            onNavigate={handleNavigate}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {activeTab === 'services' && (
          <ServicesPage
            onOpenBooking={(treatment) => handleOpenBooking(treatment)}
          />
        )}

        {activeTab === 'reviews' && (
          <div className="py-8 space-y-8">
            <ReviewsCarousel onOpenBooking={() => handleOpenBooking()} />
          </div>
        )}

        {activeTab === 'contact' && (
          <ContactPage
            initialTreatment={selectedTreatment}
          />
        )}
      </main>

      {/* Shared Deep Teal-Black Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile-Only Sticky Bottom Bar (Call & WhatsApp) */}
      <MobileStickyBar />

      {/* Appointment Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002429]/70 backdrop-blur-xs animate-fade-in">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-1">
            {/* Close Button */}
            <button
              onClick={handleCloseBooking}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#EAF8FF] text-[#002429] hover:bg-[#B3F6FF] hover:text-[#00BCD5] transition-colors focus:outline-none"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Embedded validated appointment form */}
            <div className="p-2 sm:p-4">
              <AppointmentForm
                initialTreatment={selectedTreatment}
                onSuccess={() => {
                  // Keep modal open so patient sees the success confirmation & WhatsApp button
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
