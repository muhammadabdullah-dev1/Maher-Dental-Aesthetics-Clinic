export interface ServiceItem {
  id: string;
  title: string;
  category: 'general' | 'aesthetic';
  shortDesc: string;
  idealFor: string;
  features: string[];
  duration: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  treatment: string;
  verified: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    sublabel?: string;
    value: string;
    recommendedServiceId: string;
    treatmentTitle: string;
  }[];
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  subtitle: string;
  rating: number;
  reviewCount: number;
  address: {
    line1: string;
    landmark: string;
    city: string;
    postalCode: string;
    country: string;
    plusCode: string;
  };
  phone: {
    display: string;
    raw: string;
    telLink: string;
  };
  whatsapp: {
    display: string;
    url: string;
  };
  facebook: string;
  googleMapsUrl: string;
  hours: {
    opensText: string;
    scheduleDisplay: string;
    days: string;
    openTime24: number; // 16 for 4 PM
    closeTime24: number; // 21.5 for 9:30 PM
  };
  doctor: {
    name: string;
    title: string;
    qualifications: string;
    experience: string;
    bio: string;
    specialties: string[];
  };
}
