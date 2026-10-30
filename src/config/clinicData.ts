import { ClinicConfig, ServiceItem, ReviewItem, BeforeAfterCase } from '../types/clinic';

export const CLINIC_CONFIG: ClinicConfig = {
  name: "Maher Dental & Aesthetics Clinic",
  tagline: "Your Healthiest, Most Confident Smile Starts Here",
  subtitle: "Gentle, modern dental and aesthetic care in Quetta. From routine hygiene to full smile transformations, we deliver sterile, painless treatments tailored to you.",
  rating: 4.9,
  reviewCount: 147,
  address: {
    line1: "Patel Bagh, near Saleem Complex",
    landmark: "Near Saleem Complex, Patel Bagh",
    city: "Quetta",
    postalCode: "87300",
    country: "Pakistan",
    plusCode: "52R4+4W Quetta, Pakistan",
  },
  phone: {
    display: "+92 333 8585265",
    raw: "+923338585265",
    telLink: "tel:+923338585265",
  },
  whatsapp: {
    display: "+92 333 8585265",
    url: "https://wa.me/923338585265",
  },
  facebook: "https://www.facebook.com/Maherdentalclinic.quetta",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Maher+Dental+%26+Aesthetics+Clinic+Patel+Bagh+Quetta",
  hours: {
    opensText: "Opens 4:00 PM",
    scheduleDisplay: "Monday – Saturday: 4:00 PM – 9:30 PM",
    days: "Monday – Saturday",
    openTime24: 16.0, // 4:00 PM
    closeTime24: 21.5, // 9:30 PM
  },
  doctor: {
    name: "Dr. Maher Baloch",
    title: "Chief Dental Surgeon & Aesthetic Specialist",
    qualifications: "BDS, RDS (Pak), Dip. Aesthetic Dentistry, Certified Implantologist",
    experience: "12+ Years Clinical Excellence",
    bio: "Dr. Maher Baloch is committed to compassionate, gentle dental healthcare. Trained in modern minimally invasive procedures, digital smile design, and pain-free rotary endodontics, Dr. Maher treats each patient like family with absolute transparency and comfort.",
    specialties: [
      "Digital Smile Design",
      "Painless Root Canal Treatments",
      "Immediate Dental Implants",
      "Laser Teeth Whitening",
      "Clear Aligners & Cosmetic Veneers"
    ]
  }
};

export const CLINIC_IMAGES = {
  hero: "/src/assets/images/hero_dental_clinic_1793354855579.jpg",
  doctor: "/src/assets/images/clinic_doctor_portrait_1793354856165.jpg",
  smile: "/src/assets/images/dental_smile_treatment_1793354857045.jpg",
  sterilization: "/src/assets/images/clinic_sterilization_tech_1793354857611.jpg",
};

export const SERVICES_DATA: ServiceItem[] = [
  // General Dentistry
  {
    id: "checkup-xray",
    title: "Comprehensive Dental Exam & Digital X-Ray",
    category: "general",
    shortDesc: "Complete oral health evaluation with high-resolution low-radiation digital imaging to detect issues before pain starts.",
    idealFor: "Routine 6-month checkups, gum health checks, cavity detection",
    features: ["Low-dose digital sensors", "Intraoral camera view", "Personalized treatment plan"],
    duration: "30 mins",
    iconName: "Stethoscope"
  },
  {
    id: "cleaning-scaling",
    title: "Ultrasonic Teeth Cleaning & Scaling",
    category: "general",
    shortDesc: "Gentle ultrasonic removal of stubborn plaque, tartar, and coffee/tea stains followed by polishing for fresh breath.",
    idealFor: "Bleeding gums, surface stains, preventative dental hygiene",
    features: ["Pain-free ultrasonic tips", "Air-flow polishing", "Fluoride enamel protection"],
    duration: "40 mins",
    iconName: "Sparkles"
  },
  {
    id: "fillings",
    title: "Natural Tooth-Colored Composite Fillings",
    category: "general",
    shortDesc: "Seamless aesthetic resin restorations that perfectly match the color and contour of your natural teeth.",
    idealFor: "Decayed teeth, chipped edges, replacing old metallic amalgam fillings",
    features: ["100% Mercury-free", "Shade-matched nano-hybrid resin", "Same-day cure"],
    duration: "30 - 45 mins",
    iconName: "ShieldCheck"
  },
  {
    id: "root-canal",
    title: "Painless Rotary Root Canal Treatment",
    category: "general",
    shortDesc: "Relieve severe toothaches and save your natural tooth with computer-guided rotary endodontics and local numbing.",
    idealFor: "Severe tooth pain, sensitivity to hot/cold, deep infections",
    features: ["Digital apex locators", "Rotary nickel-titanium files", "Single or two-visit completion"],
    duration: "45 - 60 mins",
    iconName: "Activity"
  },
  {
    id: "extractions",
    title: "Wisdom Tooth & Gentle Extractions",
    category: "general",
    shortDesc: "Minimally invasive extractions with gentle anesthesia techniques ensuring quick recovery and peace of mind.",
    idealFor: "Impacted wisdom teeth, severely damaged teeth, orthodontic space",
    features: ["Atraumatic technique", "Post-op healing pack", "Gentle local anesthesia"],
    duration: "40 - 50 mins",
    iconName: "Scissors"
  },
  {
    id: "pediatric",
    title: "Gentle Pediatric Dentistry",
    category: "general",
    shortDesc: "Kid-friendly dental checkups, sealants, and gentle care designed to build a lifetime of positive dental visits.",
    idealFor: "Children aged 2+, early cavity prevention, habit correction",
    features: ["Warm comforting bedside manner", "Dental fissure sealants", "Oral hygiene coaching"],
    duration: "30 mins",
    iconName: "Smile"
  },
  // Aesthetic Dentistry
  {
    id: "teeth-whitening",
    title: "Professional Laser Teeth Whitening",
    category: "aesthetic",
    shortDesc: "Brighten your smile up to 6–8 shades in a single comfortable clinical session with enamel-safe laser activation.",
    idealFor: "Dull, yellowed, tea/tobacco stained teeth, weddings & special events",
    features: ["Enamel-safe desensitizing gel", "Immediate 1-hour results", "Long-lasting radiant brightness"],
    duration: "60 mins",
    iconName: "Sun"
  },
  {
    id: "veneers",
    title: "Porcelain Veneers & Lumineers",
    category: "aesthetic",
    shortDesc: "Ultra-thin, handcrafted ceramic shells bonded to the front of teeth for a flawless Hollywood-grade smile.",
    idealFor: "Permanent discoloration, worn enamel, minor gaps, irregular tooth shapes",
    features: ["Natural translucency", "Stain-resistant porcelain", "Custom digital smile preview"],
    duration: "2 - 3 visits",
    iconName: "Gem"
  },
  {
    id: "dental-implants",
    title: "Permanent Titanium Dental Implants",
    category: "aesthetic",
    shortDesc: "The gold standard for replacing missing teeth. Permanent titanium root fuses securely to restore full chewing power and confidence.",
    idealFor: "Single or multiple missing teeth, alternatives to loose dentures",
    features: ["Medical-grade titanium", "Natural porcelain crown", "Lifetime durability with care"],
    duration: "Surgical + restorative phases",
    iconName: "Anchor"
  },
  {
    id: "braces-aligners",
    title: "Clear Aligners & Aesthetic Braces",
    category: "aesthetic",
    shortDesc: "Straighten crowded or spaced teeth discreetly using clear removable aligners or tooth-colored ceramic brackets.",
    idealFor: "Crowded teeth, gaps, bite misalignment, teens and adults wanting discreet treatment",
    features: ["Virtually invisible", "Removable for eating & brushing", "Digital 3D progress tracking"],
    duration: "6 - 18 months",
    iconName: "Layers"
  },
  {
    id: "smile-makeover",
    title: "Full Customized Smile Makeover",
    category: "aesthetic",
    shortDesc: "Comprehensive aesthetic rehabilitation combining whitening, contouring, and ceramic restorations tailored to your facial harmony.",
    idealFor: "Comprehensive aesthetic renewal, weddings, career milestones",
    features: ["Facial aesthetic analysis", "Multi-disciplinary approach", "Predictable cosmetic outcome"],
    duration: "Customized plan",
    iconName: "Heart"
  },
  {
    id: "gum-contouring",
    title: "Cosmetic Gum Contouring & Reshaping",
    category: "aesthetic",
    shortDesc: "Gentle laser reshaping of uneven or 'gummy' smiles to reveal symmetrical, beautifully proportioned teeth.",
    idealFor: "Gummy smiles, uneven gum lines, short-looking teeth",
    features: ["Laser precision", "Minimal bleeding & fast healing", "Immediate aesthetic balance"],
    duration: "45 mins",
    iconName: "Sliders"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Cosmetic Teeth Whitening & Enamel Rejuvenation",
    treatment: "Professional Laser Whitening & Micro-abrasion",
    duration: "1 Session (60 mins)",
    description: "Patient had deep intrinsic stains from tea and previous tobacco use. Achieved 7 shades brighter with zero post-procedure sensitivity.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-2",
    title: "Front Teeth Gap Closure & Aesthetic Veneers",
    treatment: "Porcelain Veneers (Upper 4 Incisors)",
    duration: "2 Appointments (10 days)",
    description: "Closed wide midline diastema (gap) and corrected slight tooth chipping with custom hand-layered porcelain laminates.",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "case-3",
    title: "Single Front Tooth Dental Implant Restoration",
    treatment: "Titanium Implant + Zirconia Aesthetic Crown",
    duration: "Complete Restorative Care",
    description: "Replaced a fractured central incisor following an accident. Color, gingival margin, and translucency replicate the natural neighbor tooth.",
    beforeImage: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Zubair Ahmed Kasi",
    rating: 5,
    timeAgo: "1 week ago",
    treatment: "Root Canal & Ceramic Crown",
    comment: "Hands down the best dental experience in Quetta. I was terrified of root canals because of previous bad experiences, but Dr. Maher was so gentle I felt zero pain throughout. The clinic is spotless and modern.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Fatima Noor Mengal",
    rating: 5,
    timeAgo: "3 weeks ago",
    treatment: "Laser Teeth Whitening & Cleaning",
    comment: "Got teeth whitening done before my brother's wedding. Results were astounding! My teeth are shining and naturally white without any sensitivity. Highly recommend their evening clinic slots.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Engr. Tariq Shahwani",
    rating: 5,
    timeAgo: "1 month ago",
    treatment: "Dental Implant Surgery",
    comment: "Dr. Maher explained every single step transparently. Sterilization protocols are international grade. Very professional staff and punctual appointments near Saleem Complex.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Dr. Ayesha Durrani",
    rating: 5,
    timeAgo: "2 months ago",
    treatment: "Clear Aligners Consultation",
    comment: "Being in healthcare myself, I pay close attention to hygiene. Maher Dental Clinic is remarkably clean. The digital scans were seamless and the entire team is courteous and skilled.",
    verified: true
  }
];

export const FAQ_DATA = [
  {
    question: "Does teeth whitening cause pain or tooth sensitivity?",
    answer: "At Maher Dental & Aesthetics Clinic, we use advanced enamel-safe whitening gels equipped with desensitizing agents. Most patients experience zero discomfort during or after the procedure. If you have naturally sensitive teeth, we apply a protective remineralizing fluoride varnish."
  },
  {
    question: "Is root canal treatment really painless?",
    answer: "Yes! Modern dentistry has completely changed root canals. We use state-of-the-art computer-controlled rotary files and highly effective local anesthesia. Patients commonly report that it feels no different than getting a standard filling."
  },
  {
    question: "What are your exact clinic hours in Quetta?",
    answer: "Maher Dental Clinic is an evening clinic opening at 4:00 PM. Our regular consulting hours are Monday through Saturday from 4:00 PM to 9:30 PM. This allows working professionals, students, and families to visit conveniently after school and work."
  },
  {
    question: "How long do dental implants last?",
    answer: "Dental implants have a success rate exceeding 98%. With good oral hygiene (regular brushing, flossing, and 6-month checkups), titanium implants are considered a permanent, lifetime tooth replacement solution."
  },
  {
    question: "How much will my dental treatment cost?",
    answer: "Every patient's oral anatomy and treatment requirements are unique. We maintain honest, transparent pricing with no hidden charges. During your initial consultation, Dr. Maher provides a detailed, itemized plan with clear options before beginning any treatment."
  },
  {
    question: "Where exactly is the clinic located in Patel Bagh?",
    answer: "We are conveniently located in Patel Bagh, directly near Saleem Complex, Quetta (Plus Code: 52R4+4W). There is easy street parking available right outside the clinic."
  }
];

/**
 * Calculates whether the clinic is currently OPEN based on Pakistan Time (UTC+5).
 * Clinic hours: Monday to Saturday 16:00 to 21:30 (4:00 PM to 9:30 PM)
 */
export function getClinicOpenStatus(): {
  isOpen: boolean;
  statusBadge: string;
  statusDetail: string;
} {
  try {
    // Current time in Pakistan (Asia/Karachi, UTC+5)
    const now = new Date();
    const pkDateString = now.toLocaleString("en-US", { timeZone: "Asia/Karachi" });
    const pkDate = new Date(pkDateString);
    const day = pkDate.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = pkDate.getHours() + pkDate.getMinutes() / 60;

    const isSunday = day === 0;
    const isWorkingDay = day >= 1 && day <= 6;
    const isOpen = isWorkingDay && hours >= CLINIC_CONFIG.hours.openTime24 && hours <= CLINIC_CONFIG.hours.closeTime24;

    if (isOpen) {
      return {
        isOpen: true,
        statusBadge: "Open Now",
        statusDetail: "Closes at 9:30 PM tonight"
      };
    } else if (isSunday) {
      return {
        isOpen: false,
        statusBadge: "Closed (Sunday)",
        statusDetail: "Opens Monday at 4:00 PM (Emergency on-call available)"
      };
    } else if (hours < CLINIC_CONFIG.hours.openTime24) {
      return {
        isOpen: false,
        statusBadge: "Opens at 4:00 PM",
        statusDetail: "Evening clinic opens at 4:00 PM today"
      };
    } else {
      return {
        isOpen: false,
        statusBadge: "Closed for the night",
        statusDetail: "Opens tomorrow at 4:00 PM"
      };
    }
  } catch {
    return {
      isOpen: false,
      statusBadge: "Opens 4:00 PM",
      statusDetail: "Mon - Sat: 4:00 PM - 9:30 PM"
    };
  }
}
