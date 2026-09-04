import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, HeartPulse, MapPin, Phone, ShieldCheck, Stethoscope, TestTubes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CLINIC, STATS } from "@/lib/site-data";
import heroImg from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Apollo Clinic Balasore is your trusted NABL accredited healthcare partner at 2nd Floor, Sanjay Heights, Balasore. Specialist consultations, NABL diagnostics, imaging and comprehensive family healthcare under one roof.",
      },
      { property: "og:title", content: "About Apollo Clinic Balasore" },
      {
        property: "og:description",
        content:
          "NABL accredited laboratory, 50+ specialist consultants, and modern diagnostics at Sanjay Heights, Balasore.",
      },
    ],
  }),
  component: AboutPage,
});

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Comprehensive Care",
    text: "Multiple healthcare services under one roof: consultations, laboratory, radiology, dental and pharmacy.",
  },
  {
    icon: MapPin,
    title: "Accessible & Convenient",
    text: "Centrally located at 2nd Floor, Sanjay Heights, Balasore — open Monday to Sunday, 9:00 AM to 8:00 PM.",
  },
  {
    icon: Stethoscope,
    title: "Specialist-Led Medicine",
    text: "Consultations across 26+ medical specialties with visiting and resident medical consultants.",
  },
  {
    icon: Award,
    title: "NABL Accredited Diagnostics",
    text: "Certified laboratory analysers, strict internal quality controls, and rapid digital report delivery.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Healthcare Partner in Balasore"
        description="Apollo Clinic Balasore provides specialist consultations, diagnostics, health checks and supporting healthcare services from its location at 2nd Floor, Sanjay Heights, Balasore."
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Book an appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
            <a href={CLINIC.phoneHref}>
              <Phone className="size-4 mr-2" /> Call: {CLINIC.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Main Philosophy Section */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Badge className="bg-primary text-primary-foreground mb-3">NABL Accredited Healthcare Partner</Badge>
            <h2 className="text-3xl font-bold lg:text-4xl">Expert healthcare with clinical discipline</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Your trusted NABL accredited healthcare partner in Balasore, <strong>{CLINIC.name}</strong> offers
              a comprehensive range of diagnostic tests, advanced medical services, and expert consultations to
              support your well-being.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Families across Balasore and northern Odisha no longer need to undertake stressful travel to metro
              cities for dependable specialist opinions, advanced CT scans, 2D echocardiography, or accurate
              pathology investigations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/doctors">Find a doctor</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/health-checkups">View health packages</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={heroImg}
              alt="Interior of Apollo Clinic Balasore at Sanjay Heights"
              loading="lazy"
              width={1600}
              height={1104}
              className="shadow-lift w-full rounded-3xl object-cover"
            />
          </Reveal>
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

      {/* 4 Pillars Section */}
      <section className="section bg-surface">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Our Approach</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Four pillars of patient care</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <Card className="hover-lift h-full border-border/70">
                  <CardContent className="p-6">
                    <span className="bg-secondary text-primary grid size-11 place-items-center rounded-xl">
                      <v.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-semibold text-base">{v.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities checklist */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Infrastructure</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Comprehensive facilities in Balasore</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Specialist consultation chambers",
              "NABL accredited pathology laboratory",
              "Whole-body CT Scan suite",
              "Digital X-Ray & Ultrasound rooms",
              "Mammography facility",
              "Cardiac suite: 2D Echo, TMT, Holter & ECG",
              "Neuro diagnostic suite: EEG, EMG, NCS & NCV",
              "Pulmonary Function Test (PFT)",
              "Endoscopy & Colonoscopy unit",
              "Sterilized dental care clinic",
              "Physiotherapy & rehabilitation area",
              "Audiology & speech therapy center",
              "In-house pharmacy open all 7 days",
              "Free home sample collection service",
              "Accessible 2nd floor with lift at Sanjay Heights",
            ].map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 60}>
                <div className="flex items-center gap-3 rounded-xl border bg-card p-4 text-xs font-medium shadow-soft">
                  <CheckCircle2 className="text-primary size-4 shrink-0" />
                  <span>{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
