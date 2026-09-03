export const CLINIC = {
  name: "Apollo Clinic Balasore",
  tagline: "Expertise. Closer to you.",
  phone: "+91 90909 09090",
  phoneHref: "tel:+919090909090",
  whatsapp: "https://wa.me/919090909090",
  email: "balasore@apolloclinic.in",
  address: "Sahadevkhunta, F.M. Golei, Balasore, Odisha 756001",
  mapQuery: "Balasore, Odisha 756001",
  hours: [
    { day: "Monday – Saturday", time: "8:00 AM – 8:30 PM" },
    { day: "Sunday", time: "9:00 AM – 2:00 PM" },
    { day: "Diagnostics & Pharmacy", time: "Open all days" },
  ],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/health-checkups", label: "Health Checks" },
  { to: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "general-medicine",
    title: "General Medicine",
    icon: "Stethoscope",
    summary: "Everyday care for fever, infections, diabetes, hypertension and lifestyle disorders.",
    points: ["Same-day consultations", "Chronic disease management", "Vaccination advice"],
  },
  {
    slug: "cardiology",
    title: "Cardiology",
    icon: "HeartPulse",
    summary: "Heart screening, ECG, 2D Echo and TMT reviewed by visiting cardiologists.",
    points: ["ECG & 2D Echo", "Treadmill test (TMT)", "Post-angioplasty follow-up"],
  },
  {
    slug: "paediatrics",
    title: "Paediatrics",
    icon: "Baby",
    summary: "Newborn to adolescent care with a complete national immunisation schedule.",
    points: ["Growth monitoring", "Immunisation", "Child nutrition counselling"],
  },
  {
    slug: "obstetrics-gynaecology",
    title: "Obstetrics & Gynaecology",
    icon: "Flower2",
    summary: "Antenatal care, fertility guidance and women's wellness under one roof.",
    points: ["Antenatal packages", "PCOS & menopause care", "Obstetric ultrasound"],
  },
  {
    slug: "orthopaedics",
    title: "Orthopaedics",
    icon: "Bone",
    summary: "Joint, spine and sports injury care with in-house physiotherapy support.",
    points: ["Fracture & injury care", "Arthritis management", "Physiotherapy"],
  },
  {
    slug: "dermatology",
    title: "Dermatology",
    icon: "Sparkles",
    summary: "Medical and cosmetic skin, hair and nail treatments by qualified dermatologists.",
    points: ["Acne & pigmentation", "Hair fall treatment", "Minor skin procedures"],
  },
  {
    slug: "dental",
    title: "Dental Care",
    icon: "Smile",
    summary: "Preventive and restorative dentistry in a fully sterilised operatory.",
    points: ["Scaling & polishing", "Root canal & crowns", "Kids' dental care"],
  },
  {
    slug: "diagnostics",
    title: "Diagnostics & Pathology",
    icon: "TestTubes",
    summary: "NABL-standard pathology, digital X-ray and ultrasound with fast reporting.",
    points: ["Blood & urine profiles", "Digital X-ray & USG", "Home sample collection"],
  },
  {
    slug: "pharmacy",
    title: "Pharmacy",
    icon: "Pill",
    summary: "Genuine medicines and wellness essentials available every day of the week.",
    points: ["Authentic branded medicines", "Chronic refill reminders", "Open all days"],
  },
];

export type Doctor = {
  name: string;
  speciality: string;
  qualification: string;
  experience: string;
  days: string;
  initials: string;
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Subrat Mohanty",
    speciality: "General Medicine",
    qualification: "MBBS, MD (Internal Medicine)",
    experience: "16 years",
    days: "Mon – Sat · 9:00 AM – 1:00 PM",
    initials: "SM",
  },
  {
    name: "Dr. Ipsita Panda",
    speciality: "Obstetrics & Gynaecology",
    qualification: "MBBS, MS (OBG)",
    experience: "12 years",
    days: "Mon, Wed, Fri · 10:00 AM – 3:00 PM",
    initials: "IP",
  },
  {
    name: "Dr. Ranjan Kumar Das",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    experience: "18 years",
    days: "Sat · 11:00 AM – 4:00 PM",
    initials: "RD",
  },
  {
    name: "Dr. Anwesha Sahoo",
    speciality: "Paediatrics",
    qualification: "MBBS, MD (Paediatrics)",
    experience: "10 years",
    days: "Mon – Sat · 5:00 PM – 8:00 PM",
    initials: "AS",
  },
  {
    name: "Dr. Manoj Behera",
    speciality: "Orthopaedics",
    qualification: "MBBS, MS (Ortho)",
    experience: "14 years",
    days: "Tue, Thu, Sat · 4:00 PM – 7:00 PM",
    initials: "MB",
  },
  {
    name: "Dr. Priyanka Rout",
    speciality: "Dermatology",
    qualification: "MBBS, MD (Dermatology)",
    experience: "9 years",
    days: "Mon, Thu · 11:00 AM – 3:00 PM",
    initials: "PR",
  },
];

export type Package = {
  name: string;
  price: string;
  strike?: string;
  tests: string;
  for: string;
  includes: string[];
  featured?: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: "Essential Health Check",
    price: "₹1,199",
    strike: "₹1,800",
    tests: "42 tests",
    for: "Adults 20+ · annual baseline",
    includes: [
      "Complete blood count",
      "Blood sugar (F & PP)",
      "Lipid profile",
      "Liver & kidney panel",
      "Urine routine",
      "Physician consultation",
    ],
  },
  {
    name: "Comprehensive Full Body",
    price: "₹2,999",
    strike: "₹4,500",
    tests: "78 tests",
    for: "Adults 35+ · complete screening",
    featured: true,
    includes: [
      "Everything in Essential",
      "Thyroid profile (T3, T4, TSH)",
      "HbA1c & Vitamin D, B12",
      "ECG + Chest X-ray",
      "Ultrasound whole abdomen",
      "Physician & diet consultation",
    ],
  },
  {
    name: "Women's Wellness",
    price: "₹2,499",
    strike: "₹3,600",
    tests: "64 tests",
    for: "Women 25+ · hormonal & bone health",
    includes: [
      "CBC, thyroid & iron studies",
      "Vitamin D & calcium",
      "PAP smear",
      "Pelvic ultrasound",
      "Gynaecologist consultation",
    ],
  },
  {
    name: "Cardiac Care Screen",
    price: "₹3,499",
    strike: "₹5,000",
    tests: "56 tests",
    for: "Heart risk & family history",
    includes: [
      "Lipid profile & hsCRP",
      "ECG, 2D Echo",
      "Treadmill test (TMT)",
      "Kidney function",
      "Cardiologist review",
    ],
  },
  {
    name: "Diabetes Care Plan",
    price: "₹1,699",
    strike: "₹2,400",
    tests: "48 tests",
    for: "Diabetics & pre-diabetics",
    includes: [
      "HbA1c, FBS & PPBS",
      "Kidney profile & microalbumin",
      "Lipid profile",
      "Eye & foot screening advice",
      "Diet counselling",
    ],
  },
  {
    name: "Senior Citizen Care",
    price: "₹3,199",
    strike: "₹4,800",
    tests: "82 tests",
    for: "60+ years · complete review",
    includes: [
      "Full body profile",
      "Bone health & Vitamin D",
      "ECG + Chest X-ray",
      "PSA (men) / thyroid (women)",
      "Physician consultation",
    ],
  },
];

export const STATS = [
  { value: "25+", label: "Specialists on panel" },
  { value: "60k+", label: "Patients cared for" },
  { value: "1,200+", label: "Diagnostic tests" },
  { value: "4.8★", label: "Average patient rating" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Booked a full body check for my parents. Reports came the same evening on WhatsApp and the physician explained everything patiently.",
    name: "Sasmita Jena",
    role: "Sahadevkhunta, Balasore",
  },
  {
    quote:
      "The paediatrician is wonderful with children. Clean, calm and never a long wait — exactly what a clinic should feel like.",
    name: "Rakesh Mohapatra",
    role: "Remuna, Balasore",
  },
  {
    quote:
      "Apollo standards without travelling to Bhubaneswar. The cardiac screening package was thorough and fairly priced.",
    name: "Dr. A. Pattnaik",
    role: "Retired professor",
  },
];

export const FAQS = [
  {
    q: "Do I need an appointment to visit?",
    a: "Walk-ins are welcome for general medicine and diagnostics. For specialists we recommend booking a slot by phone or WhatsApp so you are seen without waiting.",
  },
  {
    q: "How quickly are lab reports delivered?",
    a: "Most routine pathology reports are ready within 6–8 hours and are shared on WhatsApp and email. Specialised tests may take 24–48 hours.",
  },
  {
    q: "Do you offer home sample collection?",
    a: "Yes. Home collection is available across Balasore town for all pathology tests and health check packages, at no extra charge for packages.",
  },
  {
    q: "Are cashless or insurance payments accepted?",
    a: "We accept all major cards, UPI and corporate health tie-ups. Please carry your policy or corporate ID for reimbursement paperwork.",
  },
  {
    q: "Is the clinic accessible for elderly patients?",
    a: "The clinic is on an accessible floor with wheelchair support, priority seating and assistance staff for senior citizens.",
  },
];
