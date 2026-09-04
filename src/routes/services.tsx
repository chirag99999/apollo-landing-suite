import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, FlaskConical, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES, DIAGNOSTICS_DATA, CLINIC } from "@/lib/site-data";
import consultImg from "@/assets/consult.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Specialities, Diagnostics & Services — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Comprehensive clinical services, NABL accredited pathology lab, CT Scan, 2D Echo, digital X-Ray, ultrasound, dental, diabetes care and physiotherapy under one roof at Apollo Clinic Balasore.",
      },
      { property: "og:title", content: "Clinical Services & Diagnostics — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content:
          "Specialist consultations, NABL accredited diagnostics, imaging, dental and wellness care at 2nd Floor, Sanjay Heights, Balasore.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clinical Care & Diagnostics"
        title="Comprehensive Healthcare Services Under One Roof"
        description="Healthcare services designed to support your needs from specialist consultation and advanced diagnostics to preventive care and rehabilitation."
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Book an appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
            <a href={CLINIC.phoneHref}>
              <Phone className="size-4 mr-2" /> Enquire: {CLINIC.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Core Services Grid */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Care Spectrum</p>
            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Core Healthcare Services</h2>
            <p className="mt-4 text-muted-foreground">
              From everyday medical consults to specialized therapies and home sample collection.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Card className="hover-lift h-full border-border/80">
                  <CardContent className="flex h-full flex-col p-6">
                    <span className="bg-brand-gradient text-primary-foreground grid size-12 place-items-center rounded-2xl">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                    <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <CheckCircle2 className="text-primary mt-0.5 size-3.5 shrink-0" /> {p}
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

      {/* Advanced Diagnostics & Tests Section */}
      <section className="section bg-surface border-y">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <Badge className="bg-primary text-primary-foreground mb-3">NABL Accredited Laboratory</Badge>
            <h2 className="text-3xl font-bold lg:text-4xl">Diagnostics & Tests Under One Roof</h2>
            <p className="mt-4 text-muted-foreground">
              At Apollo Clinic Balasore, our diagnostic division combines certified pathology with modern imaging
              and specialized investigations for fast, accurate clinical answers.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIAGNOSTICS_DATA.map((diag, idx) => (
              <Reveal key={diag.category} delay={(idx % 3) * 80}>
                <Card className="h-full border-border/80 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-secondary text-primary grid size-10 place-items-center rounded-xl">
                        <FlaskConical className="size-5" />
                      </span>
                      <h3 className="font-semibold text-base">{diag.category}</h3>
                    </div>
                    <ul className="mt-5 space-y-2 text-xs text-muted-foreground">
                      {diag.tests.map((test) => (
                        <li key={test} className="flex items-start gap-2">
                          <CheckCircle2 className="text-primary size-3.5 mt-0.5 shrink-0" />
                          <span>{test}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 p-6 rounded-2xl bg-background border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-semibold text-base">Need a Diagnostic Test?</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Call {CLINIC.phone} to confirm test availability, fasting/preparation guidelines, or home collection.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button asChild size="sm">
                <a href={CLINIC.phoneHref}>
                  <Phone className="size-3.5 mr-1.5" /> Call: {CLINIC.phone}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/contact">Book appointment</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={consultImg}
              alt="Doctor consulting a patient at Apollo Clinic Balasore"
              loading="lazy"
              width={1200}
              height={912}
              className="shadow-lift w-full rounded-3xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Patient Journey</p>
            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">How a visit works</h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  t: "Book or Walk In",
                  d: "Schedule an appointment via phone or WhatsApp, or simply walk in during clinic hours (Mon–Sun 9:00 AM – 8:00 PM).",
                },
                {
                  t: "Consult Your Specialist",
                  d: "Comprehensive, unhurried examination with specialists across 26+ medical disciplines.",
                },
                {
                  t: "On-Site Diagnostics",
                  d: "All blood tests, X-rays, ultrasound and ECG completed in-house — no travelling between different labs.",
                },
                {
                  t: "Rapid Reports & Follow-Up",
                  d: "Digital reports sent via WhatsApp within 6–8 hours for most tests, with timely specialist follow-up.",
                },
              ].map((step, idx) => (
                <li key={step.t} className="flex gap-4">
                  <span className="bg-primary text-primary-foreground font-display grid size-9 shrink-0 place-items-center rounded-full text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.t}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
