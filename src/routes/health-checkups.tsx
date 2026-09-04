import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, HomeIcon, Phone, Timer, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PACKAGES, PROHEALTH_PACKAGES, CLINIC } from "@/lib/site-data";

export const Route = createFileRoute("/health-checkups")({
  head: () => ({
    meta: [
      { title: "Health Check Packages — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Comprehensive preventive health checkups: General, Senior Citizen, Women's Wellness, Master Health Check, Cardiac, Diabetic, and Apollo ProHealth packages with free home collection in Balasore.",
      },
      { property: "og:title", content: "Health Check Packages — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content:
          "Preventive screening packages with physician consultation and same-day digital reporting at 2nd Floor, Sanjay Heights, Balasore.",
      },
    ],
  }),
  component: CheckupsPage,
});

const PERKS = [
  {
    icon: HomeIcon,
    title: "Home Sample Collection",
    text: "Hassle-free blood sample pickup anywhere across Balasore town.",
  },
  {
    icon: Timer,
    title: "Fast Reports on WhatsApp",
    text: "Digital reports delivered via WhatsApp and email within 6–8 hours.",
  },
  {
    icon: Wallet,
    title: "Doctor Consultation Included",
    text: "Every comprehensive package includes doctor review and dietary guidance.",
  },
];

function CheckupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Preventive Healthcare"
        title="Health Checks Designed Around You"
        description="Preventive healthcare packages curated for different ages, lifestyles, and healthcare needs — backed by NABL accredited laboratory accuracy and expert physician consultations."
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Book a health check</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
            <a href={CLINIC.phoneHref}>
              <Phone className="size-4 mr-2" /> Call: {CLINIC.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Perks bar */}
      <section className="border-b bg-background">
        <div className="container-x grid gap-6 py-10 md:grid-cols-3">
          {PERKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="flex gap-4">
                <span className="bg-secondary text-primary grid size-11 shrink-0 place-items-center rounded-xl">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-sm">{p.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Primary Packages Grid */}
      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Package Catalogue</p>
            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Curated Preventive Packages</h2>
            <p className="mt-3 text-muted-foreground text-sm">
              All health checks include certified laboratory testing, diagnostic imaging (as applicable), and doctor consultations.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <Card
                  className={`hover-lift h-full flex flex-col justify-between ${
                    p.featured ? "border-primary shadow-soft ring-primary/20 ring-2" : "border-border/80"
                  }`}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    {p.featured ? (
                      <Badge className="bg-primary text-primary-foreground mb-4 w-fit rounded-full text-xs">
                        Most Recommended
                      </Badge>
                    ) : null}
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.for}</p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="font-display text-3xl font-bold">{p.price}</span>
                    </div>
                    <p className="text-primary mt-1 text-xs font-semibold">{p.tests}</p>

                    <div className="mt-5 flex-1 border-t pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Included tests & evaluations:
                      </p>
                      <ul className="space-y-1.5 text-xs text-muted-foreground">
                        {p.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-2">
                            <CheckCircle2 className="text-primary mt-0.5 size-3.5 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t flex gap-2">
                      <Button asChild variant={p.featured ? "default" : "outline"} className="flex-1">
                        <Link to="/contact">Book package</Link>
                      </Button>
                      <Button asChild variant="outline" size="icon">
                        <a href={CLINIC.phoneHref} aria-label={`Call for ${p.name}`}>
                          <Phone className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apollo ProHealth Packages Section */}
      <section className="section bg-surface border-y">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <Badge className="bg-primary text-primary-foreground mb-3">Apollo ProHealth</Badge>
            <h2 className="text-3xl font-bold lg:text-4xl">ProHealth Specialty Health Packages</h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Advanced risk-stratified screening powered by Apollo's national clinical protocols for chronic,
              cardiac, cancer, and age-specific evaluations.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROHEALTH_PACKAGES.map((item, idx) => (
              <Reveal key={item.name} delay={(idx % 3) * 60}>
                <Card className="hover-lift h-full border-border/80 bg-background">
                  <CardContent className="p-5 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{item.name}</h4>
                      <p className="font-display font-bold text-primary mt-1 text-base">{item.price}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link to="/contact">Enquire</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation guidelines */}
      <section className="section bg-background">
        <div className="container-x max-w-3xl">
          <Reveal>
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Guidelines</p>
            <h2 className="mt-2 text-2xl font-bold lg:text-3xl">Preparing for your health check</h2>
            <ul className="mt-6 space-y-3.5 text-sm text-muted-foreground">
              {[
                "Fasting for 10–12 hours is required for fasting blood sugar and lipid profile tests. Plain water is permitted.",
                "Carry any previous medical records, prescriptions, and current medicines.",
                "Morning slots between 7:30 AM and 10:00 AM are ideal for smooth sample collection.",
                "For ultrasound abdomen, drink sufficient water and avoid emptying bladder before the scan.",
                "For cardiac evaluations (TMT), wear comfortable walking footwear and light clothing.",
                "Women are advised not to schedule gynaecological or PAP smear screenings during menstruation.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
