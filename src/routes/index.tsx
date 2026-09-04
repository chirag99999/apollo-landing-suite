import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FileText,
  FlaskConical,
  HeartPulse,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TestTubes,
  Truck,
  UserCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  CLINIC,
  DOCTORS,
  FAQS,
  PACKAGES,
  SERVICES,
  STATS,
  TESTIMONIALS,
  DIAGNOSTICS_DATA,
} from "@/lib/site-data";
import heroImg from "@/assets/hero-clinic.jpg";
import labImg from "@/assets/lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apollo Clinic Balasore — Expert Care. Advanced Diagnostics. All Under One Roof." },
      {
        name: "description",
        content:
          "Apollo Clinic Balasore brings together specialist consultations across 26+ specialties, NABL accredited diagnostics, CT Scan, 2D Echo, ultrasound, and preventive health packages at 2nd Floor, Sanjay Heights, Balasore.",
      },
      { property: "og:title", content: "Apollo Clinic Balasore — Expert Care. Advanced Diagnostics." },
      {
        property: "og:description",
        content:
          "Specialist consultations, NABL accredited diagnostics, preventive health packages, and pharmacy at 2nd Floor, Sanjay Heights, Balasore.",
      },
    ],
  }),
  component: Home,
});

const PATIENT_INTENTS = [
  {
    icon: Search,
    title: "Find a Doctor",
    text: "Connect with 50+ specialists across 26+ medical disciplines.",
    cta: "Find a Doctor",
    to: "/doctors",
  },
  {
    icon: FlaskConical,
    title: "Book a Diagnostic Test",
    text: "Access NABL accredited pathology, CT Scan, ultrasound, 2D Echo & X-Ray.",
    cta: "Explore Diagnostics",
    to: "/services",
  },
  {
    icon: FileText,
    title: "Explore Health Packages",
    text: "Preventive screening packages starting from ₹1,400 with physician review.",
    cta: "View Packages",
    to: "/health-checkups",
  },
  {
    icon: Activity,
    title: "Our Clinical Services",
    text: "Explore consultations, dentistry, diabetes care, physiotherapy & pharmacy.",
    cta: "View Services",
    to: "/services",
  },
];

const HIGHLIGHTS = [
  {
    icon: Award,
    title: "NABL Accredited Lab",
    text: "High-precision laboratory testing with automated analysers and strict quality control.",
  },
  {
    icon: Stethoscope,
    title: "50+ Specialists",
    text: "Consultations across cardiology, neurology, gastroenterology, gynaecology, ortho & more.",
  },
  {
    icon: TestTubes,
    title: "Advanced Diagnostics",
    text: "CT Scan, high-resolution ultrasound, digital X-Ray, 2D Echo, TMT, EEG and endoscopy.",
  },
  {
    icon: Truck,
    title: "Home Sample Pickup",
    text: "Free sample pickup across Balasore town for preventive health checkup packages.",
  },
];

function Home() {
  const [activeCategory, setActiveCategory] = useState<"all" | "diagnostics" | "specialists" | "care" | "home">("all");

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "diagnostics") {
      return ["diagnostics", "imaging-radiology", "cardiac-diagnostics", "neuro-diagnostics", "endoscopy"].includes(s.slug);
    }
    if (activeCategory === "specialists") {
      return ["consultations", "health-packages", "diabetes-care"].includes(s.slug);
    }
    if (activeCategory === "care") {
      return ["dental", "physiotherapy", "audiology"].includes(s.slug);
    }
    if (activeCategory === "home") {
      return ["home-care"].includes(s.slug);
    }
    return true;
  });
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-x grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                NABL Accredited Lab
              </Badge>
              <Badge variant="outline" className="rounded-full px-3 py-1 text-xs font-semibold">
                2nd Floor, Sanjay Heights, Balasore
              </Badge>
            </div>
            <h1 className="mt-6 text-4xl leading-[1.08] font-bold text-balance lg:text-6xl">
              Expert Care. Advanced Diagnostics.{" "}
              <span className="text-primary">All Under One Roof.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground lg:text-lg">
              Apollo Clinic Balasore brings together specialist consultations, advanced diagnostics,
              preventive health check-ups and essential healthcare services to support the health and
              well-being of you and your family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  <CalendarCheck className="size-4" /> Book an appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/doctors">
                  <UserCheck className="size-4" /> Find a doctor
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CLINIC.phoneHref}>
                  <Phone className="size-4" /> {CLINIC.phone}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Mon – Sun: 9:00 AM – 8:00 PM", "Walk-ins welcome", "Reports on WhatsApp"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="text-primary size-4" /> {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="shadow-lift relative overflow-hidden rounded-3xl border border-white/60">
              <img
                src={heroImg}
                alt="Apollo Clinic Balasore - Expert care and advanced diagnostics"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Interactive Free Dental Floating Badge */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-dental-promo"))}
              className="glass-panel absolute -top-4 -right-2 sm:-right-4 p-3 rounded-2xl shadow-lift border border-amber-300 text-left hover:scale-105 transition-all cursor-pointer animate-bounce-gentle group z-10"
              title="Click to claim 100% Free Dental Checkup"
            >
              <div className="flex items-center gap-2.5">
                <span className="size-9 rounded-xl bg-amber-500 text-white grid place-items-center shadow-md group-hover:rotate-12 transition-transform">
                  <Sparkles className="size-5" />
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">FREE Dental Checkup</span>
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.5 rounded-full font-extrabold">₹0</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground">Click to Claim • No Hidden Fee</p>
                </div>
              </div>
            </button>

            {/* Front Desk Live Pulse Card */}
            <div className="animate-float-gentle shadow-soft absolute -bottom-5 -left-2 sm:-left-4 hidden rounded-2xl border bg-card/95 backdrop-blur-md p-3.5 sm:block ring-1 ring-primary/20 z-10">
              <div className="flex items-center gap-3">
                <span className="relative flex size-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-3 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900">Front Desk Live • 1-Tap Booking</p>
                  <p className="text-[10px] text-muted-foreground">1 Missed Call or WhatsApp to Book</p>
                </div>
                <a
                  href="https://wa.me/919439454650?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Apollo%20Clinic%20Balasore"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 flex items-center gap-1 shadow-sm transition-transform hover:scale-105"
                >
                  <MessageCircle className="size-3.5 fill-current" /> Chat
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Infinite Loop Marquee Ticker */}
      <div className="overflow-hidden border-y border-teal-700/40 bg-gradient-to-r from-teal-950 via-primary-deep to-teal-900 py-3 text-white shadow-inner">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs sm:text-sm font-medium">
          {[
            "🎉 100% Completely FREE Dental Checkup — No Hidden Charges (Click to Claim)",
            "🟢 50+ Specialists On Panel: Cardiology, Neurology, Gynaecology, Ortho & more",
            "🔬 NABL Accredited Laboratory: Over 2,800+ Pathology Tests • Cancer & Hormone Markers",
            "🚑 Portable Home X-Ray & Free Blood Sample Pickup Across Balasore",
            "⚡ 1-Tap Instant Booking: Give a Missed Call or WhatsApp to +91-9439454650",
            "🏥 Open 7 Days: Monday – Sunday 9:00 AM – 8:00 PM at 2nd Floor, Sanjay Heights",
            "🎉 100% Completely FREE Dental Checkup — No Hidden Charges (Click to Claim)",
            "🟢 50+ Specialists On Panel: Cardiology, Neurology, Gynaecology, Ortho & more",
            "🔬 NABL Accredited Laboratory: Over 2,800+ Pathology Tests • Cancer & Hormone Markers",
            "🚑 Portable Home X-Ray & Free Blood Sample Pickup Across Balasore",
            "⚡ 1-Tap Instant Booking: Give a Missed Call or WhatsApp to +91-9439454650",
            "🏥 Open 7 Days: Monday – Sunday 9:00 AM – 8:00 PM at 2nd Floor, Sanjay Heights",
          ].map((text, i) => (
            <button
              key={i}
              onClick={() => text.includes("FREE Dental") && window.dispatchEvent(new CustomEvent("open-dental-promo"))}
              className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors cursor-pointer shrink-0"
            >
              <span>{text}</span>
              <span className="text-amber-400 font-bold">•</span>
            </button>
          ))}
        </div>
      </div>

      {/* Patient Intent Section - "How Can We Help You Today?" */}
      <section className="border-y bg-background py-12">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Patient Care</p>
            <h2 className="mt-2 text-2xl font-bold lg:text-3xl">How can we help you today?</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PATIENT_INTENTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Card className="hover-lift h-full border-border/80 flex flex-col justify-between p-6">
                  <div>
                    <span className="bg-secondary text-primary grid size-12 place-items-center rounded-2xl">
                      <item.icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                  <Button asChild variant="link" className="mt-4 p-0 justify-start text-primary font-semibold">
                    <Link to={item.to}>
                      {item.cta} <ArrowRight className="size-4 ml-1" />
                    </Link>
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights - Why Apollo Clinic Balasore? */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">The Apollo Advantage</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Why Apollo Clinic Balasore?</h2>
            <p className="mt-4 text-muted-foreground">
              Comprehensive clinical discipline, trusted diagnostic accuracy, and patient-first care delivered
              at 2nd Floor, Sanjay Heights, Balasore.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <Card className="hover-lift h-full border-border/70">
                  <CardContent className="p-6">
                    <span className="bg-brand-gradient text-primary-foreground grid size-12 place-items-center rounded-2xl">
                      <h.icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold">{h.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Specialties */}
      <section className="section">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Specialities & Care</p>
              <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Complete healthcare under one roof</h2>
              <p className="mt-4 text-muted-foreground">
                From daily consultations to cardiac care, women’s wellness, dental, and physiotherapy —
                access integrated healthcare without traveling between different clinics.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">
                View all clinical services <ArrowRight className="size-4 ml-1" />
              </Link>
            </Button>
          </Reveal>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Services" },
              { id: "diagnostics", label: "Diagnostics & Lab (2800+ Tests)" },
              { id: "specialists", label: "Doctor Consultations" },
              { id: "care", label: "Dental & Therapy" },
              { id: "home", label: "Home X-Ray & Pickup" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-surface hover:bg-surface-elevated text-muted-foreground hover:text-foreground border border-border/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60}>
                <Card className="hover-lift h-full border-border/70 group hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="bg-brand-gradient text-primary-foreground grid size-12 place-items-center rounded-2xl group-hover:scale-110 transition-transform">
                        <ServiceIcon name={s.icon} className="size-5" />
                      </span>
                      {s.slug === "dental" && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 animate-pulse">
                          Free Checkup Available
                        </span>
                      )}
                      {s.slug === "diagnostics" && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                          2,800+ Tests
                        </span>
                      )}
                      {s.slug === "home-care" && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300">
                          Home Service
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                    <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <CheckCircle2 className="size-3.5 text-primary shrink-0" /> {p}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-brand-gradient text-primary-foreground">
        <div className="container-x grid gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl font-bold lg:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm opacity-85">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Diagnostics Section */}
      <section className="section bg-surface">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Diagnostics</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Advanced diagnostics. Reliable results.</h2>
            <p className="mt-4 text-muted-foreground">
              At Apollo Clinic Balasore, our NABL Accredited Laboratory (with 2,800+ pathology tests, cancer markers
              and hormone panels) and advanced imaging suite deliver precise diagnostic evaluations for actionable clinical decisions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "2,800+ Pathology Tests",
                "Cancer & Hormone Markers",
                "FibroScan",
                "CT Scan (Whole Body)",
                "Ultrasound",
                "Digital X-Ray & Home X-Ray",
                "Mammography",
                "2D Echo",
                "TMT",
                "PFT",
                "ECG",
                "EEG & EMG",
                "Endoscopy & Colonoscopy",
              ].map((test) => (
                <Badge key={test} variant="secondary" className="px-3 py-1.5 text-xs font-medium">
                  {test}
                </Badge>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/health-checkups">Explore health packages</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={CLINIC.phoneHref}>
                  <Phone className="size-4 mr-2" /> Book a test: {CLINIC.phone}
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <img
              src={labImg}
              alt="NABL Accredited Diagnostics Laboratory at Apollo Clinic Balasore"
              loading="lazy"
              width={1200}
              height={912}
              className="shadow-lift w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Packages preview */}
      <section className="section">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Preventive Care</p>
              <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Preventive health for every stage of life</h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive screening panels curated for different ages, lifestyles, and risk factors —
                priced transparently with physician and dental consultation included.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/health-checkups">
                View all 12+ packages <ArrowRight className="size-4 ml-1" />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Card
                  className={`hover-lift h-full ${p.featured ? "border-primary shadow-soft ring-primary/15 ring-2" : ""}`}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    {p.featured ? (
                      <Badge className="bg-primary text-primary-foreground mb-4 w-fit rounded-full">Most Chosen</Badge>
                    ) : null}
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold">{p.price}</span>
                    </div>
                    <p className="text-primary mt-1 text-xs font-semibold">{p.tests}</p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm">
                      {p.includes.slice(0, 5).map((inc) => (
                        <li key={inc} className="flex gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" /> {inc}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={p.featured ? "default" : "outline"} className="mt-6">
                      <Link to="/contact">Book this package</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors preview */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Doctor Directory</p>
              <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Find the right specialist</h2>
              <p className="mt-4 text-muted-foreground">
                Access over 50 specialists across cardiology, neurology, gynaecology, gastroenterology,
                orthopaedics, oncology, nephrology and surgery.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/doctors">
                View all 50+ doctors <ArrowRight className="size-4 ml-1" />
              </Link>
            </Button>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {DOCTORS.slice(0, 4).map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <Card className="hover-lift h-full text-center">
                  <CardContent className="p-6">
                    <span className="bg-brand-gradient text-primary-foreground font-display mx-auto grid size-16 place-items-center rounded-full text-lg font-semibold">
                      {d.initials}
                    </span>
                    <h3 className="mt-4 font-semibold">{d.name}</h3>
                    <p className="text-primary text-sm font-medium">{d.speciality}</p>
                    <p className="mt-2 text-xs text-muted-foreground">{d.qualification}</p>
                    <Badge variant="outline" className="mt-3 text-[11px]">
                      {d.days}
                    </Badge>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Patient Voices</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Trusted by families in Balasore</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="text-accent flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="size-4 fill-current text-amber-500" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed">"{t.quote}"</p>
                    <div className="mt-6">
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA Banner - "We're Here for You" */}
      <section className="py-12 bg-surface border-y">
        <div className="container-x">
          <Reveal>
            <Card className="bg-background shadow-soft border-primary/20 overflow-hidden">
              <div className="p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-3 max-w-xl">
                  <Badge className="bg-primary/10 text-primary border-primary/20">Visit Us in Balasore</Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold">We're Here for You</h2>
                  <p className="text-muted-foreground text-sm">
                    <strong>{CLINIC.name}</strong> — {CLINIC.address}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Opening Hours: <strong>Monday – Sunday | 9:00 AM – 8:00 PM</strong>
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                  <Button asChild size="lg">
                    <a href={CLINIC.phoneHref}>
                      <Phone className="size-4 mr-2" /> Call Now: {CLINIC.phone}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">
                      <MapPin className="size-4 mr-2" /> Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-background">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Good to Know</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions regarding appointments, lab timings, or test preparation? Call our front desk
              at {CLINIC.phone} — open all 7 days from 9:00 AM to 8:00 PM.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-gradient text-primary-foreground">
        <div className="container-x flex flex-col items-start gap-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <h2 className="text-3xl font-bold lg:text-4xl">Ready when you are.</h2>
            <p className="mt-3 max-w-xl opacity-90">
              Book a consultation, schedule a health check, or enquire about diagnostic tests. Open Monday to
              Sunday, 9:00 AM to 8:00 PM at 2nd Floor, Sanjay Heights, Balasore.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                <HeartPulse className="size-4 mr-2" /> Book appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
              <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
