import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  FlaskConical,
  HeartPulse,
  Phone,
  ShieldCheck,
  Star,
  Stethoscope,
  TestTubes,
  Truck,
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
import { CLINIC, DOCTORS, FAQS, PACKAGES, SERVICES, STATS, TESTIMONIALS } from "@/lib/site-data";
import heroImg from "@/assets/hero-clinic.jpg";
import labImg from "@/assets/lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apollo Clinic Balasore — Specialist care, diagnostics & health checks" },
      {
        name: "description",
        content:
          "Multi-speciality consultations, NABL-standard diagnostics, health check packages and pharmacy in Balasore. Book an appointment today.",
      },
      { property: "og:title", content: "Apollo Clinic Balasore — Expertise. Closer to you." },
      {
        property: "og:description",
        content:
          "Specialist doctors, diagnostics, health check packages and pharmacy under one roof in Balasore.",
      },
    ],
  }),
  component: Home,
});

const HIGHLIGHTS = [
  { icon: Stethoscope, title: "25+ specialists", text: "Consultations across nine specialities, six days a week." },
  { icon: FlaskConical, title: "Trusted diagnostics", text: "Pathology, digital X-ray and ultrasound with fast reporting." },
  { icon: Truck, title: "Home collection", text: "Free sample pickup across Balasore for health packages." },
  { icon: ShieldCheck, title: "Apollo standards", text: "Protocol-driven care, sterilised rooms, transparent pricing." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-surface">
        <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <Reveal>
            <Badge className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
              Now open in Sahadevkhunta, Balasore
            </Badge>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold text-balance lg:text-6xl">
              Complete family healthcare,{" "}
              <span className="text-primary">closer to you.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground lg:text-lg">
              Specialist consultations, accurate diagnostics, preventive health checks and a full pharmacy —
              delivered with the clinical discipline Apollo is known for.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  <CalendarCheck className="size-4" /> Book an appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={CLINIC.phoneHref}>
                  <Phone className="size-4" /> {CLINIC.phone}
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Walk-ins welcome", "Reports on WhatsApp", "Cards & UPI accepted"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="text-primary size-4" /> {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="shadow-lift relative overflow-hidden rounded-3xl">
              <img
                src={heroImg}
                alt="Reception and waiting lounge at Apollo Clinic Balasore"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="animate-float shadow-soft absolute -bottom-6 -left-2 hidden rounded-2xl border bg-card p-4 sm:block">
              <div className="flex items-center gap-3">
                <span className="bg-primary/10 text-primary grid size-10 place-items-center rounded-xl">
                  <Clock3 className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Reports in 6–8 hours</p>
                  <p className="text-xs text-muted-foreground">For most routine lab tests</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y bg-background">
        <div className="container-x grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <div className="flex gap-4">
                <span className="bg-secondary text-primary grid size-11 shrink-0 place-items-center rounded-xl">
                  <h.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{h.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Specialities</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Care for every stage of life</h2>
            <p className="mt-4 text-muted-foreground">
              Nine specialities, one clinic. Consult, test and collect your medicines without a second trip.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 90}>
                <Card className="hover-lift h-full border-border/70">
                  <CardContent className="p-6">
                    <span className="bg-brand-gradient text-primary-foreground grid size-12 place-items-center rounded-2xl">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Button asChild variant="outline">
              <Link to="/services">
                View all specialities <ArrowRight className="size-4" />
              </Link>
            </Button>
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

      {/* Diagnostics */}
      <section className="section bg-surface">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Diagnostics</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Precise results you can act on</h2>
            <p className="mt-4 text-muted-foreground">
              Our in-house laboratory runs automated analysers with double-verified reporting, backed by digital
              X-ray and ultrasound. Reports reach you on WhatsApp and email the same day.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "1,200+ tests including specialised profiles",
                "Free home sample collection with packages",
                "Radiology reported by qualified consultants",
                "Digital reports archived for easy follow-up",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <TestTubes className="text-primary mt-0.5 size-4 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8">
              <Link to="/health-checkups">Explore health packages</Link>
            </Button>
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <img
              src={labImg}
              alt="Laboratory technician processing samples at the clinic"
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
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Preventive care</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Health check packages</h2>
            <p className="mt-4 text-muted-foreground">
              Curated panels for every age group, priced transparently with a physician review included.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <Card
                  className={`hover-lift h-full ${p.featured ? "border-primary shadow-soft ring-primary/15 ring-2" : ""}`}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    {p.featured ? (
                      <Badge className="bg-accent text-accent-foreground mb-4 w-fit rounded-full">Most chosen</Badge>
                    ) : null}
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                    <div className="mt-5 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold">{p.price}</span>
                      {p.strike ? (
                        <span className="text-sm text-muted-foreground line-through">{p.strike}</span>
                      ) : null}
                    </div>
                    <p className="text-primary mt-1 text-xs font-semibold">{p.tests}</p>
                    <ul className="mt-5 flex-1 space-y-2 text-sm">
                      {p.includes.slice(0, 4).map((inc) => (
                        <li key={inc} className="flex gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" /> {inc}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={p.featured ? "default" : "outline"} className="mt-6">
                      <Link to="/health-checkups">See details</Link>
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
              <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Our panel</p>
              <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Doctors you can rely on</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/doctors">
                All doctors <ArrowRight className="size-4" />
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
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Patient voices</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Trusted by families in Balasore</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="text-accent flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="size-4 fill-current" />
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

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Good to know</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Frequently asked</h2>
            <p className="mt-4 text-muted-foreground">
              Still unsure about something? Call the front desk — we answer between 8:00 AM and 8:30 PM.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
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
              Book a consultation, schedule a health check, or ask us anything about your reports.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                <HeartPulse className="size-4" /> Book appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent">
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
