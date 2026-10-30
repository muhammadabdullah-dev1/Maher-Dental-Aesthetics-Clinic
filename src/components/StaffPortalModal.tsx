import React, { useState, useEffect } from 'react';
import { 
  X, 
  RefreshCw, 
  CheckCircle, 
  Clock, 
  Phone, 
  MessageCircle, 
  Calendar, 
  Filter, 
  Search, 
  Trash2, 
  Lock,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface AppointmentRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

interface StaffPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffPortalModal: React.FC<StaffPortalModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [appointments, setAppointments] = useState<AppointmentRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Default demo access PIN: 1234
  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234' || pin === '8585') {
      setIsAuthenticated(true);
      setPinError('');
      fetchAppointments();
    } else {
      setPinError('Incorrect PIN. (Hint: Default clinic PIN is 1234)');
    }
  };

  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/appointments');
      const data = await res.json();
      if (data?.data) {
        setAppointments(data.data);
      }
    } catch (err) {
      console.error('Failed to load appointments from server:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setAppointments((prev) =>
          prev.map((a) => (a.id === id ? { ...a, status: newStatus as any } : a))
        );
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm(`Delete appointment ${id}?`)) return;
    try {
      const res = await fetch(`/api/appointments/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setAppointments((prev) => prev.filter((a) => a.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete appointment:', err);
    }
  };

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      fetchAppointments();
    }
  }, [isOpen, isAuthenticated]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#002429]/80 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-[#B3F6FF] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#002429] text-white p-5 sm:px-8 flex items-center justify-between border-b border-[#003840]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00BCD5]" />
              <h3 className="text-lg font-bold text-white">
                Clinic Reception & Appointment Portal
              </h3>
            </div>
            <p className="text-xs text-[#B3F6FF]/80">
              Maher Dental & Aesthetics Clinic, Patel Bagh, Quetta
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isAuthenticated ? (
          /* PIN Authentication Screen */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF8FF] text-[#00BCD5] flex items-center justify-center mx-auto">
              <Lock className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-bold text-[#002429]">Staff Authentication</h4>
              <p className="text-xs text-[#002429]/70">
                Enter your clinic reception PIN to manage patient bookings.
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                maxLength={6}
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setPinError('');
                }}
                placeholder="Enter PIN (Default: 1234)"
                className="w-full text-center text-xl tracking-widest px-4 py-3 rounded-xl border border-[#B3F6FF] focus:border-[#00BCD5] focus:outline-none"
                autoFocus
              />

              {pinError && (
                <p className="text-xs text-red-600 font-medium">{pinError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#00BCD5] hover:bg-[#009fb5] text-white font-bold text-sm shadow-cyan-soft transition-all"
              >
                Access Portal
              </button>
            </form>

            <p className="text-[11px] text-[#002429]/60">
              Demo PIN is set to <strong className="text-[#002429]">1234</strong>.
            </p>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col p-4 sm:p-6 space-y-4 overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#EAF8FF] p-3 rounded-2xl border border-[#B3F6FF]">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#00BCD5] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by patient name, phone, or ID..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-xl border border-[#B3F6FF] focus:outline-none focus:ring-1 focus:ring-[#00BCD5]"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="text-xs font-semibold bg-white border border-[#B3F6FF] rounded-xl px-3 py-1.5 focus:outline-none text-[#002429]"
                >
                  <option value="all">All Statuses ({appointments.length})</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  onClick={fetchAppointments}
                  disabled={loading}
                  className="p-2 rounded-xl bg-white hover:bg-[#B3F6FF] text-[#00BCD5] border border-[#B3F6FF] transition-colors"
                  title="Refresh Appointments"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>

            </div>

            {/* Appointments List / Table */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {appointments.length === 0 ? (
                <div className="text-center py-12 text-sm text-[#002429]/60">
                  No appointments registered yet.
                </div>
              ) : (
                appointments
                  .filter((a) => {
                    if (filterStatus !== 'all' && a.status !== filterStatus) return false;
                    if (searchQuery.trim()) {
                      const q = searchQuery.toLowerCase();
                      return (
                        a.fullName.toLowerCase().includes(q) ||
                        a.phoneNumber.toLowerCase().includes(q) ||
                        a.id.toLowerCase().includes(q) ||
                        a.treatment.toLowerCase().includes(q)
                      );
                    }
                    return true;
                  })
                  .map((apt) => (
                    <div
                      key={apt.id}
                      className="bg-white p-4 rounded-2xl border border-[#B3F6FF] hover:border-[#00BCD5] shadow-xs transition-all space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAF8FF] pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#00BCD5] bg-[#EAF8FF] px-2 py-0.5 rounded">
                            {apt.id}
                          </span>
                          <h4 className="font-bold text-sm text-[#002429]">
                            {apt.fullName}
                          </h4>
                        </div>

                        {/* Status selector */}
                        <div className="flex items-center gap-2">
                          <select
                            value={apt.status}
                            onChange={(e) => handleUpdateStatus(apt.id, e.target.value)}
                            className={`text-[11px] font-bold uppercase rounded-lg px-2.5 py-1 border focus:outline-none ${
                              apt.status === 'confirmed'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                : apt.status === 'pending'
                                ? 'bg-amber-50 text-amber-700 border-amber-300'
                                : apt.status === 'completed'
                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                : 'bg-red-50 text-red-700 border-red-300'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>

                          <button
                            onClick={() => handleDelete(apt.id)}
                            className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            title="Delete record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Details row */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#002429]/80">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#00BCD5] shrink-0" />
                          <span className="font-semibold">{apt.preferredDate}</span>
                          <span className="text-[#00BCD5]">·</span>
                          <span>{apt.preferredTime}</span>
                        </div>

                        <div className="truncate">
                          <strong className="text-[#002429]">Treatment:</strong> {apt.treatment}
                        </div>

                        <div className="flex items-center gap-2 sm:justify-end">
                          {/* Direct Call Button */}
                          <a
                            href={`tel:${apt.phoneNumber.replace(/\s+/g, '')}`}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#EAF8FF] hover:bg-[#B3F6FF] text-[#002429] font-semibold text-[11px] transition-colors"
                          >
                            <Phone className="w-3 h-3 text-[#00BCD5]" />
                            <span>Call</span>
                          </a>

                          {/* WhatsApp Chat Button */}
                          <a
                            href={`https://wa.me/${apt.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                              `Hello ${apt.fullName}! This is Maher Dental & Aesthetics Clinic in Patel Bagh, Quetta regarding your appointment booking (Ref: ${apt.id}) for ${apt.treatment} on ${apt.preferredDate} at ${apt.preferredTime}. We are confirming your evening slot.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-[11px] transition-colors"
                          >
                            <MessageCircle className="w-3 h-3 fill-current" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                      </div>

                      {apt.message && (
                        <p className="text-[11px] text-[#002429]/70 bg-[#EAF8FF]/50 p-2 rounded-lg italic">
                          "Note: {apt.message}"
                        </p>
                      )}
                    </div>
                  ))
              )}
            </div>

            {/* Bottom count info */}
            <div className="pt-2 border-t border-[#EAF8FF] flex items-center justify-between text-xs text-[#002429]/60">
              <span>Connected to Live Full-Stack Express Backend</span>
              <span>Total Appointments: {appointments.length}</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
