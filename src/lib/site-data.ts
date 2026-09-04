export const CLINIC = {
  name: "Apollo Clinic Balasore",
  tagline: "Expert Care. Advanced Diagnostics. All Under One Roof.",
  phone: "+91-9439454650",
  phoneHref: "tel:+919439454650",
  whatsapp: "https://wa.me/919439454650",
  email: "info@apolloclinicbalasore.com",
  address: "2nd Floor, Sanjay Heights, Balasore, Odisha",
  mapQuery: "Sanjay Heights, Balasore, Odisha",
  hours: [
    { day: "Monday – Sunday", time: "9:00 AM – 8:00 PM" },
    { day: "Diagnostics & Laboratory", time: "Open all days (9:00 AM – 8:00 PM)" },
    { day: "Pharmacy & Sample Collection", time: "Open all 7 days" },
  ],
  accreditation: "NABL Accredited Laboratory",
  poweredBy: "Manorama Communication",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Find a Doctor" },
  { to: "/health-checkups", label: "Health Packages" },
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
    slug: "consultations",
    title: "Specialist Consultations",
    icon: "Stethoscope",
    summary: "Consultations across 26+ medical specialties with visiting and resident doctors.",
    points: ["Cardiology, Neurology & Gastro", "General Medicine & Paediatrics", "Gynaecology & Orthopaedics"],
  },
  {
    slug: "diagnostics",
    title: "NABL Accredited Laboratory",
    icon: "FlaskConical",
    summary: "Comprehensive laboratory testing with more than 2,800+ pathology tests, cancer markers and complete hormone profiles.",
    points: ["2,800+ pathology & diagnostic tests", "Cancer markers & complete hormone panels", "Same-day digital reports on WhatsApp"],
  },
  {
    slug: "imaging-radiology",
    title: "Imaging & Radiology",
    icon: "TestTubes",
    summary: "Whole-body imaging including CT scan, high-resolution ultrasound, and clinic & Home X-Ray service.",
    points: ["CT Scan (Whole Body)", "Ultrasound & Mammography", "Digital X-Ray & Home X-Ray Service"],
  },
  {
    slug: "cardiac-diagnostics",
    title: "Cardiac Diagnostics",
    icon: "HeartPulse",
    summary: "Advanced non-invasive cardiac evaluation supervised by expert cardiologists.",
    points: ["2D Echocardiography", "Treadmill Test (TMT)", "ECG & Holter Monitoring"],
  },
  {
    slug: "neuro-diagnostics",
    title: "Neurological & Pulmonary Tests",
    icon: "Activity",
    summary: "Specialized neuro-electrophysiology and respiratory diagnostic evaluations.",
    points: ["EEG & EMG", "NCS / NCV studies", "Pulmonary Function Test (PFT)"],
  },
  {
    slug: "health-packages",
    title: "Preventive Health Packages",
    icon: "ShieldCheck",
    summary: "Customized health screening profiles designed for different age groups, lifestyles, and risk factors.",
    points: ["Executive & Master Health Checks", "Women's Wellness & Cardiac panels", "Apollo ProHealth screening"],
  },
  {
    slug: "endoscopy",
    title: "Specialized Diagnostics",
    icon: "Sparkles",
    summary: "Advanced diagnostic screenings under expert gastroenterology, hepatology and ophthalmology care.",
    points: ["Endoscopy & Colonoscopy", "FibroScan (Liver Assessment)", "Fundoscopy, VPT & Uroflowmetry"],
  },
  {
    slug: "dental",
    title: "Dental Care",
    icon: "Smile",
    summary: "Preventive, restorative, and cosmetic dentistry in a fully sterilized operatory.",
    points: ["Dental consultations & cleaning", "Root canals & crown restorations", "Paediatric dental care"],
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    icon: "Bone",
    summary: "Targeted outpatient physical therapy for joint, spine, and sports injury care.",
    points: ["Pain management & joint mobilization", "Outpatient physical therapy", "Ergonomic & postural guidance"],
  },
  {
    slug: "diabetes-care",
    title: "Diabetes Care",
    icon: "Pill",
    summary: "Comprehensive assessment, HbA1c testing, diabetic foot screening, and diet management.",
    points: ["Glycaemic monitoring & profiling", "Diabetic neuropathy foot screening", "Physician counselling & management"],
  },
  {
    slug: "audiology",
    title: "Audiology & Speech",
    icon: "Activity",
    summary: "Professional hearing evaluations, audiograms, and speech-language therapy.",
    points: ["Pure tone audiometry", "Hearing assessment & advice", "Speech-language pathology"],
  },
  {
    slug: "home-care",
    title: "Home Sample Collection & Home X-Ray",
    icon: "Truck",
    summary: "Hassle-free blood sample pickup and portable digital Home X-Ray service across Balasore.",
    points: ["Free blood sample pickup across Balasore", "Portable Home X-Ray for elderly & bedridden patients", "Digital reports sent via WhatsApp & Email"],
  },
];

export type DiagnosticCategory = {
  category: string;
  tests: string[];
};

export const DIAGNOSTICS_DATA: DiagnosticCategory[] = [
  {
    category: "Imaging & Radiology",
    tests: [
      "CT Scan (Whole Body)",
      "Ultrasound (USG Whole Abdomen / Pelvis)",
      "Digital X-Ray (In-Clinic & Home X-Ray Service)",
      "Mammography (Both Breasts)",
      "2D Echo",
      "Colour Doppler Study",
      "Peripheral Doppler",
    ],
  },
  {
    category: "Cardiac Diagnostics",
    tests: [
      "ECG (Electrocardiogram)",
      "TMT (Treadmill Test)",
      "Holter Monitoring (24-hour)",
      "2D Echocardiography",
      "Troponin-T",
    ],
  },
  {
    category: "Neurological Diagnostics",
    tests: [
      "EEG (Electroencephalogram)",
      "EMG (Electromyography)",
      "NCS / NCV (Nerve Conduction Studies)",
    ],
  },
  {
    category: "Pulmonary Diagnostics",
    tests: ["PFT (Pulmonary Function Test)"],
  },
  {
    category: "NABL Laboratory & Pathology (2,800+ Tests Possible)",
    tests: [
      "2,800+ Pathology & Diagnostic Tests Possible",
      "Cancer Markers (PSA, CA-125, CEA, AFP, CA 19-9)",
      "Hormone Markers (Thyroid, Fertility, AMH, Testosterone, Estrogen, Prolactin, Cortisol)",
      "Clinical Haematology (CBC, ESR, HPLC)",
      "Clinical Biochemistry (Lipid, LFT, KFT, Electrolytes)",
      "Thyroid Testing (T3, T4, TSH)",
      "Glycosylated Hemoglobin (HbA1c)",
      "Blood and Urine Culture",
      "Clinical Pathology & Stool Routine",
      "Serology (HIV, HBsAg, HCV, VDRL)",
      "Vitamin D3 & Vitamin B12",
    ],
  },
  {
    category: "Specialized Diagnostics",
    tests: [
      "FibroScan (Liver Fibrosis & Fatty Liver Assessment)",
      "Upper GI Endoscopy",
      "Colonoscopy",
      "Fundoscopy / Retina Screening",
      "VPT (Vibration Perception Test)",
      "Uroflowmetry",
    ],
  },
];

export type Doctor = {
  name: string;
  speciality: string;
  qualification: string;
  experience?: string;
  days: string;
  initials: string;
};

export const DOCTORS: Doctor[] = [
  // Cardiology
  {
    name: "Dr. Gobinda Prasad Nayak",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "1st & 3rd Tuesday",
    initials: "GN",
  },
  {
    name: "Dr. Sushanta Kumar Pradhan",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "1st Thursday",
    initials: "SP",
  },
  {
    name: "Dr. Sanat Kumar Sahoo",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "2nd Thursday",
    initials: "SS",
  },
  {
    name: "Dr. Bikram Keshari Mohapatra",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "2nd Saturday",
    initials: "BM",
  },
  {
    name: "Dr. Ranjan Kumar Mohanty",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "2nd & 4th Sunday",
    initials: "RM",
  },
  {
    name: "Dr. Jhulana Kumar Jena",
    speciality: "Cardiology / CTVS",
    qualification: "MBBS, MS, MCH (CTVS)",
    days: "3rd Thursday",
    initials: "JJ",
  },
  {
    name: "Dr. Priyabrata Sahu",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "3rd Saturday",
    initials: "PS",
  },
  {
    name: "Dr. Jyotirmaya Sahoo",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "3rd Sunday",
    initials: "JS",
  },
  {
    name: "Dr. Y. J. Reddy",
    speciality: "Cardiology",
    qualification: "MBBS, MD",
    days: "4th Sunday, 5:00 PM – 7:00 PM",
    initials: "YR",
  },
  {
    name: "Dr. Soumya Shree Sagar Nayak",
    speciality: "Cardiology",
    qualification: "MBBS, MD, DM (Cardiology)",
    days: "1st Sunday",
    initials: "SN",
  },
  // Paediatric Cardiology
  {
    name: "Dr. Sandeep Mohanty",
    speciality: "Paediatric Cardiology",
    qualification: "MBBS, MD, DM",
    days: "2nd Saturday, 10:00 AM – 12:00 PM",
    initials: "SM",
  },
  // General Physician
  {
    name: "Dr. Motirmoy Giri",
    speciality: "General Physician",
    qualification: "MBBS, MD, FICM, PGDGM",
    days: "Every Sunday, 1:00 PM – 2:00 PM",
    initials: "MG",
  },
  {
    name: "Dr. Rajeeb Ku. Behera",
    speciality: "General Physician",
    qualification: "MBBS, MD",
    days: "Monday to Friday, 8:00 AM – 10:00 AM",
    initials: "RB",
  },
  {
    name: "Dr. Siddhartha Shankar Acharya",
    speciality: "General Physician",
    qualification: "MBBS, DNB",
    days: "Thursday – Saturday, 11:00 AM – 12:00 PM",
    initials: "SA",
  },
  {
    name: "Dr. Ommkar Mohapatra",
    speciality: "General Physician",
    qualification: "MBBS, MD",
    days: "Every Day, 5:00 PM – 7:00 PM",
    initials: "OM",
  },
  // Gynecology
  {
    name: "Prof. Dr. Babita Panda",
    speciality: "Gynecology & Obstetrics",
    qualification: "MBBS, MD, MF",
    days: "4th Saturday, 9:00 AM – 1:00 PM",
    initials: "BP",
  },
  {
    name: "Dr. Pankajini Behera",
    speciality: "Gynecology & Obstetrics",
    qualification: "MBBS, MS",
    days: "Every Day, 6:00 PM",
    initials: "PB",
  },
  {
    name: "Dr. Suman Sourav Patra",
    speciality: "Gynecology & Obstetrics",
    qualification: "MBBS, MS",
    days: "Every Day, 9:00 AM",
    initials: "SP",
  },
  {
    name: "Dr. Satyananda Dagar",
    speciality: "Gynecology & Obstetrics",
    qualification: "MBBS, MS",
    days: "Every Day, 9:00 AM",
    initials: "SD",
  },
  {
    name: "Dr. Sagar Parida",
    speciality: "Gynecology & Obstetrics",
    qualification: "MBBS, MS",
    days: "Every Day, 9:00 AM",
    initials: "SP",
  },
  // Gastroenterology & Hepatology
  {
    name: "Dr. Sarojkanta Sahu",
    speciality: "Gastroenterology & Hepatology",
    qualification: "MBBS, MD, DM",
    days: "1st Sunday, 10:00 AM – 12:00 PM",
    initials: "SS",
  },
  {
    name: "Dr. Dibyalochan Praharaj",
    speciality: "Gastroenterology & Hepatology",
    qualification: "MBBS, MD, DM",
    days: "2nd Tuesday, 8:00 AM – 10:00 AM",
    initials: "DP",
  },
  {
    name: "Dr. Dilip Mohanty",
    speciality: "Gastroenterology & Hepatology",
    qualification: "MBBS, MD, DM",
    days: "3rd Sunday, 12:00 PM – 2:00 PM",
    initials: "DM",
  },
  {
    name: "Dr. Sambit Kumar Bhuyan",
    speciality: "Gastroenterology & Hepatology",
    qualification: "MBBS, MD, DM",
    days: "4th Sunday, 9:00 AM – 1:00 PM",
    initials: "SB",
  },
  {
    name: "Dr. Jayant Kumar Sahu",
    speciality: "Gastroenterology & Hepatology",
    qualification: "MBBS, MS",
    days: "Monday to Friday, 10:00 AM – 12:00 PM",
    initials: "JS",
  },
  // Neuro Medicine
  {
    name: "Dr. Ajit Prasad Mishra",
    speciality: "Neuro Medicine",
    qualification: "MBBS, MD, DM (Neurology)",
    days: "1st Saturday, 10:00 AM – 1:00 PM",
    initials: "AM",
  },
  {
    name: "Dr. Shuhankar Mishra",
    speciality: "Neuro Medicine",
    qualification: "MBBS, MD, DM (Neurology)",
    days: "1st & 3rd Sunday, 1:00 PM – 5:00 PM",
    initials: "SM",
  },
  {
    name: "Dr. Gurupada Das",
    speciality: "Neuro Medicine",
    qualification: "MBBS, MD, DM (Neurology)",
    days: "2nd Sunday, 11:00 AM – 2:00 PM",
    initials: "GD",
  },
  {
    name: "Dr. Srikanta Ku. Sahoo",
    speciality: "Neuro Medicine",
    qualification: "MBBS, MD, DM (Neurology)",
    days: "3rd Saturday, 6:00 PM – 8:00 PM",
    initials: "SS",
  },
  {
    name: "Dr. Shibani Rath",
    speciality: "Neuro Medicine",
    qualification: "MBBS, MD, DM (Neurology)",
    days: "3rd Saturday, 12:00 PM – 3:00 PM",
    initials: "SR",
  },
  {
    name: "Dr. H.N. Praharaj",
    speciality: "Neuro Medicine",
    qualification: "MBBS, MD, DM (Neurology)",
    days: "4th Sunday, 10:00 AM – 1:00 PM",
    initials: "HP",
  },
  // Neuro Surgery
  {
    name: "Dr. Amit Kumar Chanduka",
    speciality: "Neuro Surgery",
    qualification: "MBBS, MS, MCH (Neuro Surgery)",
    days: "2nd Friday, 3:00 PM – 5:00 PM",
    initials: "AC",
  },
  {
    name: "Dr. Atmaranjan Dash",
    speciality: "Neuro Surgery",
    qualification: "MBBS, MS, MCH (Neuro Surgery)",
    days: "2nd Sunday",
    initials: "AD",
  },
  {
    name: "Dr. Ritesh Kumar Bhoot",
    speciality: "Neuro Surgery",
    qualification: "MBBS, MS, MCH (Neuro Surgery)",
    days: "2nd Monday, 3:00 PM – 4:00 PM",
    initials: "RB",
  },
  {
    name: "Dr. Deepak Parida",
    speciality: "Neuro Surgery",
    qualification: "MBBS, MS, MCH (Neuro Surgery)",
    days: "4th Friday, 11:00 AM – 1:00 PM",
    initials: "DP",
  },
  {
    name: "Dr. Bikash Ranjan Behera",
    speciality: "Neuro Surgery",
    qualification: "MBBS, MS, MCH (Neuro Surgery)",
    days: "Every Month Last Monday, 1:00 PM – 3:00 PM",
    initials: "BB",
  },
  {
    name: "Dr. Manoj Majhi",
    speciality: "Neuro Surgery",
    qualification: "MBBS, DRNB (Neuro Surgery)",
    days: "3rd Friday, 2:00 PM – 4:00 PM",
    initials: "MM",
  },
  // Orthopedic
  {
    name: "Dr. Radhakanta Pradhan",
    speciality: "Orthopedic",
    qualification: "MBBS, MS (Ortho)",
    days: "Every Day",
    initials: "RP",
  },
  {
    name: "Dr. Vaibhav Mohanty",
    speciality: "Orthopedic",
    qualification: "MBBS, MS (Ortho)",
    days: "Every Friday, 11:00 AM – 2:00 PM",
    initials: "VM",
  },
  {
    name: "Dr. Gokul Ch. Chand",
    speciality: "Orthopedic",
    qualification: "MBBS, MS (Ortho)",
    days: "Every Day, 11:00 AM – 12:00 PM",
    initials: "GC",
  },
  {
    name: "Dr. Pradeep Ku. Sahoo",
    speciality: "Orthopedic",
    qualification: "MBBS, MS (Ortho)",
    days: "4th Sunday, 11:00 AM – 3:00 PM",
    initials: "PS",
  },
  // Urology
  {
    name: "Dr. Pratik Sahoo",
    speciality: "Urology",
    qualification: "MBBS, MD, DNB (Urology)",
    days: "1st Sunday, 10:00 AM – 1:00 PM",
    initials: "PS",
  },
  {
    name: "Dr. Sumanta Mishra",
    speciality: "Urology",
    qualification: "MBBS, MS, MCH, DNB (Urology)",
    days: "2nd Sunday, 11:00 AM – 1:00 PM",
    initials: "SM",
  },
  {
    name: "Dr. Pranab Ku. Pattnaik",
    speciality: "Urology",
    qualification: "MBBS, MS, NICH",
    days: "4th Saturday, 9:00 AM – 10:00 AM",
    initials: "PP",
  },
  {
    name: "Dr. Aditya Prasad Padhy",
    speciality: "Urology",
    qualification: "MBBS, MS, MCH (Urology)",
    days: "3rd Sunday, 10:00 AM – 11:00 AM",
    initials: "AP",
  },
  // Nephrology
  {
    name: "Dr. Alok Mohapatra",
    speciality: "Nephrology",
    qualification: "MBBS, MD, DM (Nephrology)",
    days: "1st Sunday, 4:00 PM – 7:00 PM",
    initials: "AM",
  },
  {
    name: "Dr. Bibekananda Panda",
    speciality: "Nephrology",
    qualification: "MBBS, MD, DNB (Nephrology)",
    days: "2nd Sunday, 10:00 AM – 3:00 PM",
    initials: "BP",
  },
  {
    name: "Dr. Judhajit Maity",
    speciality: "Nephrology",
    qualification: "MBBS, MD, DM (Nephrology)",
    days: "4th Sunday, 10:00 AM – 12:00 PM",
    initials: "JM",
  },
  {
    name: "Dr. Ranjan Ku. Sahoo",
    speciality: "Nephrology",
    qualification: "MD, DM (Nephrology)",
    days: "3rd Sunday, 8:00 AM – 10:00 AM",
    initials: "RS",
  },
  // Oncology
  {
    name: "Dr. Ranjit Kar",
    speciality: "Oncology",
    qualification: "MBBS, MD, DNB, PDCR",
    days: "2nd & 3rd Saturday, 7:00 AM – 11:00 AM",
    initials: "RK",
  },
  {
    name: "Dr. Ipsit Ilahi Das",
    speciality: "Surgical Oncology",
    qualification: "MS, M.CH",
    days: "1st Sunday, 7:00 AM – 8:00 AM",
    initials: "ID",
  },
  {
    name: "Dr. Mahesh Mohanty",
    speciality: "Surgical Oncology",
    qualification: "MS, DRNB",
    days: "4th Sunday, 2:00 PM – 3:00 PM",
    initials: "MM",
  },
  {
    name: "Dr. Aditya Mishra",
    speciality: "Medical Oncology",
    qualification: "DM (Medical Oncology)",
    days: "4th Friday, 11:00 AM – 12:00 PM",
    initials: "AM",
  },
  // ENT
  {
    name: "Dr. Rohit Agarwal",
    speciality: "ENT",
    qualification: "MBBS, MS (ENT)",
    days: "1st & 3rd Sunday, 5:00 PM – 6:00 PM",
    initials: "RA",
  },
  {
    name: "Dr. Anil Kumar Dash",
    speciality: "ENT",
    qualification: "MBBS, MS (ENT)",
    days: "Mon, Tue, Wed, 8:00 AM – 9:00 AM",
    initials: "AD",
  },
  {
    name: "Dr. Asutosh Dash",
    speciality: "ENT",
    qualification: "MBBS, MS (ENT)",
    days: "2nd & 4th Tuesday",
    initials: "AD",
  },
  // Endocrinology
  {
    name: "Dr. Dhiroj Kumar Panda",
    speciality: "Endocrinology",
    qualification: "MBBS, MD",
    days: "3rd Friday, 3:00 PM – 5:00 PM",
    initials: "DP",
  },
  {
    name: "Dr. Bhabani Shankar Dhal",
    speciality: "Endocrinology",
    qualification: "MBBS, MD",
    days: "4th Sunday, 1:00 PM – 2:00 PM",
    initials: "BD",
  },
  // Dermatology
  {
    name: "Dr. P.C. Singh",
    speciality: "Dermatology",
    qualification: "MBBS, MD (Dermatology)",
    days: "1st & 3rd Saturday, 5:00 PM – 7:00 PM",
    initials: "PS",
  },
  // Dental Care
  {
    name: "Dr. Supriya Das",
    speciality: "Dental Care",
    qualification: "B.D.S.",
    days: "Every Day",
    initials: "SD",
  },
  {
    name: "Dr. Prerna Muskara",
    speciality: "Dental Care",
    qualification: "B.D.S., M.D.S.",
    days: "Call for availability",
    initials: "PM",
  },
  // Surgery
  {
    name: "Dr. Tanmay Panda",
    speciality: "General Surgery",
    qualification: "MBBS, MS (Surgery)",
    days: "2nd Sunday, 11:00 AM – 12:00 PM",
    initials: "TP",
  },
  {
    name: "Dr. Rama Krushna Sahoo",
    speciality: "General Surgery",
    qualification: "MBBS, MS (Surgery)",
    days: "Every Day, 11:00 AM – 3:00 PM",
    initials: "RS",
  },
  {
    name: "Dr. Akshya Kumar Panda",
    speciality: "General & Laparoscopic Surgery",
    qualification: "MBBS, MS, FALS-H, FIAGES",
    days: "Every Day, 11:00 AM – 3:00 PM",
    initials: "AP",
  },
  // Pulmonary
  {
    name: "Dr. Utpal Kumar Nandy",
    speciality: "Pulmonology",
    qualification: "MBBS, MD, FCCS",
    days: "2nd Wednesday, 11:00 AM – 1:00 PM",
    initials: "UN",
  },
  // Rheumatology
  {
    name: "Dr. Debashish Maikap",
    speciality: "Rheumatology",
    qualification: "MBBS, MD",
    days: "3rd Sunday, 9:00 AM – 1:00 PM",
    initials: "DM",
  },
  // Psychiatry & Clinical Psychology
  {
    name: "Dr. Bijay Kumar Prusty",
    speciality: "Psychiatry",
    qualification: "MD (Psychiatry)",
    days: "3rd Saturday, 11:00 AM – 12:00 PM",
    initials: "BP",
  },
  {
    name: "Dr. Snehanshu Dey",
    speciality: "Psychiatry",
    qualification: "MBBS, MD, DM",
    days: "1st Sunday, 1:00 PM – 2:00 PM",
    initials: "SD",
  },
  {
    name: "Dr. Nibedita Mohanty",
    speciality: "Clinical Psychology",
    qualification: "MD",
    days: "Every Month 2nd Monday, 9:00 AM – 2:00 PM",
    initials: "NM",
  },
  // Ophthalmology
  {
    name: "Dr. Sanghamitra Das",
    speciality: "Ophthalmology",
    qualification: "MBBS, MS",
    days: "2nd Thursday, 11:00 AM – 2:00 PM",
    initials: "SD",
  },
  // Hematology
  {
    name: "Dr. Pritish Chandra Patra",
    speciality: "Hematology",
    qualification: "MBBS, MD, DM, PDCC",
    days: "4th Thursday, 10:00 AM – 12:00 PM",
    initials: "PP",
  },
  // Audiology
  {
    name: "Dr. Debajit Ankit Barik",
    speciality: "Audiology",
    qualification: "ASLP(PG), Audiologist & Speech Pathologist",
    days: "Every day",
    initials: "DB",
  },
  // Radiology & Pathology
  {
    name: "Dr. Bibekanada Nayak",
    speciality: "Radiology",
    qualification: "MBBS, MD (Radiology)",
    days: "Monday – Saturday, 11:00 AM – 3:00 PM",
    initials: "BN",
  },
  {
    name: "Dr. Himadri Sekhar Paul",
    speciality: "Pathology",
    qualification: "MBBS, MD (Pathology)",
    days: "Every Day",
    initials: "HP",
  },
  {
    name: "Dr. Manisha Parida",
    speciality: "Pathology",
    qualification: "MBBS, MD (Pathology)",
    days: "Every Day",
    initials: "MP",
  },
  // Physiotherapy
  {
    name: "Dr. Ipsita Pradhan",
    speciality: "Physiotherapy",
    qualification: "BPT, MPT",
    days: "Every Day",
    initials: "IP",
  },
  {
    name: "Dr. Sanghamitra Pradhan",
    speciality: "Physiotherapy",
    qualification: "BPT, MPT",
    days: "Every Day",
    initials: "SP",
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
    name: "General Health Check",
    price: "₹1,400",
    tests: "Essential Routine Panel",
    for: "Adults 20+ · Annual baseline evaluation",
    includes: [
      "Complete Blood Count (CBC)",
      "ESR",
      "Glucose Fasting & PPBS",
      "Cholesterol",
      "Blood Grouping & Rh Typing",
      "ECG",
      "Chest X-Ray (Film with Report)",
      "Physician Consultation",
      "Dental Consultation",
    ],
  },
  {
    name: "Fever Profile",
    price: "₹1,500",
    tests: "Infectious & Fever Panel",
    for: "Acute or prolonged fever assessment",
    includes: [
      "Complete Blood Count (CBC)",
      "Malaria Parasite (MP)",
      "Widal Test (Typhoid)",
      "Dengue Test (NS1, IgG, IgM)",
      "CRP (C-Reactive Protein)",
      "Urine Routine Test",
      "Physician Consultation",
    ],
  },
  {
    name: "Health Check at Home",
    price: "₹2,150",
    tests: "10 Vital Health Panels",
    for: "Convenient home sample screening",
    includes: [
      "Complete Blood Count (CBC)",
      "ESR",
      "Glucose Fasting",
      "Glycosylated Hemoglobin (HbA1c)",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "Urine R/E",
      "Thyroid Profile (T3, T4, TSH)",
    ],
  },
  {
    name: "Senior Citizen Health Check",
    price: "₹2,500",
    tests: "Elderly Wellness Screening",
    for: "Seniors 60+ · Comprehensive annual care",
    includes: [
      "Complete Blood Count (CBC)",
      "Glucose Fasting & PPBS",
      "Cholesterol",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
      "PSA (Men) / PAP Smear (Women)",
      "Physician Consultation",
      "Dental Consultation",
    ],
  },
  {
    name: "Pre Marriage Profile",
    price: "₹3,100",
    tests: "Pre-Marital Health Evaluation",
    for: "Couples planning marriage & genetic baseline",
    includes: [
      "Complete Blood Count (CBC)",
      "Hemoglobin Electrophoresis (HPLC)",
      "Glucose Fasting",
      "Blood Grouping & Rh Type",
      "Glycosylated Hemoglobin (HbA1c)",
      "TSH (Thyroid)",
      "Serology (HIV, HBsAg, HCV, VDRL)",
      "Gynaecologist / Physician Consultation",
      "Dental Consultation",
    ],
  },
  {
    name: "Nephro Profile",
    price: "₹3,200",
    tests: "Renal & Kidney Function Panel",
    for: "Kidney health, hypertension & fluid assessment",
    includes: [
      "Complete Blood Count (CBC)",
      "Glucose Fasting & PPBS",
      "Glycosylated Hemoglobin (HbA1c)",
      "Kidney Function Test (KFT)",
      "Serum Calcium & Phosphorus",
      "Urine Routine Test",
      "Ultrasound Whole Abdomen",
      "Nephrology clinical review",
    ],
  },
  {
    name: "Exclusive Health Check",
    price: "₹3,900",
    tests: "Executive Health Evaluation",
    for: "Comprehensive lifestyle & organ screening",
    includes: [
      "Complete Blood Count & ESR",
      "Lipid Profile & Cholesterol",
      "HbA1c (Glycosylated Hemoglobin)",
      "Liver & Kidney Function Tests (LFT/KFT)",
      "Thyroid Profile (T3, T4, TSH)",
      "TMT & ECG",
      "Chest X-Ray",
      "Ultrasound Whole Abdomen",
    ],
  },
  {
    name: "PCOD Profile",
    price: "₹4,500",
    tests: "Hormone & Ovarian Panel",
    for: "Women experiencing hormonal imbalance & irregular cycles",
    includes: [
      "LH / FSH Ratio",
      "Prolactin",
      "TSH (Thyroid Stimulating Hormone)",
      "Testosterone Total",
      "Beta hCG",
      "Estradiol (E2)",
      "Fasting Blood Sugar (FBS)",
      "AMH (Anti-Müllerian Hormone)",
    ],
  },
  {
    name: "Well Women Health Check",
    price: "₹4,500",
    tests: "Complete Women's Wellness",
    for: "Women 25+ · Breast, gynaec & systemic health",
    includes: [
      "Complete Blood Count & ESR",
      "Blood Grouping & Rh Type",
      "Glucose Fasting",
      "Ultrasound Whole Abdomen",
      "Mammography Both Breasts",
      "Iron Profile",
      "Urine Routine Test",
      "Thyroid Profile (T3, T4, TSH)",
      "PAP Smear",
      "Gynaecologist Consultation",
    ],
  },
  {
    name: "Master Health Check",
    price: "₹5,900",
    featured: true,
    tests: "Comprehensive Master Full Body",
    for: "Adults 35+ · Complete multi-system screening",
    includes: [
      "CBC, Glucose Fasting & PPBS, HbA1c",
      "Lipid Profile & Blood Grouping",
      "Liver Function Test & Kidney Function Test",
      "Vitamin D3 & Vitamin B12",
      "Thyroid Profile (T3, T4, TSH)",
      "Urine & Stool Routine Examination",
      "Chest X-Ray & ECG",
      "Ultrasound Whole Abdomen",
      "Physician & Dental Consultations",
    ],
  },
  {
    name: "Heart Check",
    price: "₹7,200",
    tests: "Cardiac Risk & Master Health Panel",
    for: "Cardiovascular evaluation & high-risk individuals",
    includes: [
      "Complete Master Health Check Panel",
      "Troponin-T",
      "Echocardiography (2D Echo)",
      "TMT (Treadmill Test)",
      "Cardiologist Consultation",
      "Dental Consultation",
    ],
  },
  {
    name: "Whole Body Health Check",
    price: "₹7,600",
    tests: "Total Systemic Screening",
    for: "Full-body organ, metabolic & cardiac health",
    includes: [
      "Complete Master Health Check Panel",
      "Serum Calcium & Phosphorus",
      "Serology (HIV, HBsAg, HCV)",
      "Echocardiography (2D Echo) / TMT",
      "Ultrasound Whole Abdomen & Chest X-Ray",
      "Specialist Physician Consultation",
    ],
  },
];

export const PROHEALTH_PACKAGES = [
  { name: "Apollo Pro Health Lite", price: "₹4,499" },
  { name: "Apollo Pro Health Smart Check", price: "₹4,999" },
  { name: "Apollo Pro Health Check", price: "₹7,199" },
  { name: "General ProHealth Women Master Wellness", price: "₹9,899" },
  { name: "Apollo ProHealth Senior Citizen Male", price: "₹9,899" },
  { name: "Apollo Sugar ProHealth Diabetic Care", price: "₹9,999" },
  { name: "Apollo ProHealth Comprehensive", price: "₹10,499" },
  { name: "Apollo ProHealth Women Comprehensive Wellness", price: "₹10,499" },
  { name: "Apollo ProHealth Cancer Screening Male", price: "₹10,499" },
  { name: "Apollo ProHealth Cancer Screening Female", price: "₹10,499" },
  { name: "Apollo ProHealth Senior Citizen Female", price: "₹10,699" },
];

export const STATS = [
  { value: "50+", label: "Specialists on panel" },
  { value: "NABL", label: "Accredited Laboratory" },
  { value: "2,800+", label: "Diagnostic & Pathology tests" },
  { value: "7 Days", label: "Open 9:00 AM – 8:00 PM" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Booked a master health check for my parents. Reports came the same evening on WhatsApp and the physician explained every parameter with great patience.",
    name: "Sasmita Jena",
    role: "Balasore",
  },
  {
    quote:
      "Having top cardiologists and neurology specialists available right at Sanjay Heights in Balasore is a blessing. We no longer need to travel to Bhubaneswar for routine follow-ups.",
    name: "Rakesh Mohapatra",
    role: "Balasore",
  },
  {
    quote:
      "The NABL diagnostic lab is fast, clean and accurately reported. The cardiac check with 2D Echo and TMT was seamless.",
    name: "Dr. A. Pattnaik",
    role: "Balasore",
  },
];

export const FAQS = [
  {
    q: "Where is Apollo Clinic Balasore located and what are the clinic hours?",
    a: "We are located at 2nd Floor, Sanjay Heights, Balasore, Odisha. The clinic, NABL accredited diagnostic lab and pharmacy are open Monday to Sunday from 9:00 AM to 8:00 PM.",
  },
  {
    q: "Do I need an appointment before visiting?",
    a: "Walk-ins are always welcome for general physician consultations, laboratory tests, and diagnostics. For specialist consultations, we recommend booking an appointment by calling +91-9439454650 or via WhatsApp to confirm the specialist's schedule.",
  },
  {
    q: "How quickly are diagnostic and lab test reports delivered?",
    a: "Most routine pathology tests are reported within 6–8 hours and delivered digitally via WhatsApp and email. Imaging, ultrasound, and specialized tests are reported promptly with specialist radiologist review.",
  },
  {
    q: "Do you provide home sample collection in Balasore?",
    a: "Yes! We provide safe, hygienic home blood and sample collection across Balasore town for all pathology tests and preventive health check-up packages. Call +91-9439454650 to schedule.",
  },
  {
    q: "What diagnostic facilities are available on-site?",
    a: "Apollo Clinic Balasore houses whole-body CT scan, high-resolution ultrasound, digital X-ray, mammography, 2D Echo, TMT, ECG, EEG, EMG, NCS/NCV, PFT, endoscopy, colonoscopy, and a full NABL accredited pathology laboratory.",
  },
  {
    q: "How can I book an appointment or enquire about tests?",
    a: "You can book directly by calling our primary desk at +91-9439454650, messaging us on WhatsApp (+91 94394 54650), or submitting the appointment request form on our Contact page.",
  },
];
