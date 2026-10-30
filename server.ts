import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

export interface AppointmentRecord {
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

// In-memory appointments store with initial records
const appointments: AppointmentRecord[] = [
  {
    id: 'MDC-1041',
    fullName: 'Shahzeb Kasi',
    phoneNumber: '+92 333 7812901',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTime: '05:30 PM',
    treatment: 'Painless Rotary Root Canal Treatment',
    message: 'Upper left molar sensitivity when drinking cold water.',
    status: 'confirmed',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: 'MDC-1042',
    fullName: 'Bibi Zainab Baloch',
    phoneNumber: '+92 312 8990142',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '06:00 PM',
    treatment: 'Professional Laser Teeth Whitening',
    message: 'Wedding coming up next month in Quetta.',
    status: 'pending',
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'MDC-1043',
    fullName: 'Kamran Durrani',
    phoneNumber: '+92 300 9234811',
    preferredDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    preferredTime: '07:00 PM',
    treatment: 'Permanent Titanium Dental Implants',
    message: 'Want to replace missing lower molar.',
    status: 'pending',
    createdAt: new Date(Date.now() - 1800000).toISOString(),
  }
];

// --- REST API ROUTES ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Maher Dental & Aesthetics Clinic API',
    location: 'Patel Bagh, Quetta, Pakistan',
    serverTime: new Date().toISOString(),
  });
});

// GET all appointments
app.get('/api/appointments', (req, res) => {
  res.json({
    success: true,
    count: appointments.length,
    data: appointments,
  });
});

// POST new appointment
app.post('/api/appointments', (req, res) => {
  const { fullName, phoneNumber, preferredDate, preferredTime, treatment, message } = req.body;

  if (!fullName || !phoneNumber || !preferredDate || !treatment) {
    return res.status(400).json({
      success: false,
      error: 'Full name, phone number, preferred date, and treatment are required.',
    });
  }

  const newAppointment: AppointmentRecord = {
    id: `MDC-${Math.floor(1000 + Math.random() * 9000)}`,
    fullName: String(fullName).trim(),
    phoneNumber: String(phoneNumber).trim(),
    preferredDate: String(preferredDate).trim(),
    preferredTime: String(preferredTime || '05:00 PM').trim(),
    treatment: String(treatment).trim(),
    message: message ? String(message).trim() : undefined,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  appointments.unshift(newAppointment);

  console.log(`[API] New appointment booked: ${newAppointment.id} for ${newAppointment.fullName}`);

  res.status(201).json({
    success: true,
    message: 'Appointment request received successfully.',
    data: newAppointment,
  });
});

// PATCH update status
app.patch('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      error: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
    });
  }

  const appointment = appointments.find((a) => a.id === id);
  if (!appointment) {
    return res.status(404).json({
      success: false,
      error: 'Appointment not found.',
    });
  }

  appointment.status = status;
  res.json({
    success: true,
    message: `Appointment ${id} status updated to ${status}.`,
    data: appointment,
  });
});

// DELETE appointment
app.delete('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const index = appointments.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      error: 'Appointment not found.',
    });
  }

  const removed = appointments.splice(index, 1);
  res.json({
    success: true,
    message: `Appointment ${id} removed.`,
    data: removed[0],
  });
});

// --- VITE DEV / PRODUCTION MIDDLEWARE ---

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[Server] Maher Dental Clinic full-stack server running on port ${PORT}`);
  });
}

startServer();
