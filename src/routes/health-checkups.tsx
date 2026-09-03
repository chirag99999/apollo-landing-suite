import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, HomeIcon, Timer, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PACKAGES, CLINIC } from "@/lib/site-data";

export const Route = createFileRoute("/health-checkups")({
  head: () => ({
    meta: [
      { title: "Health Check Packages — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Full body, cardiac, women's wellness, diabetes and senior citizen health check packages in Balasore with free home sample collection.",
      },
      { property: "og:title", content: "Health Check Packages — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content: "Transparent preventive health packages with physician review and same-day reports.",
      },
    ],
  }),
  component: CheckupsPage,
});

const PERKS = [
  { icon: HomeIcon, title: "Free home collection", text: "Sample pickup anywhere in Balasore town, on every package." },
  { icon: Timer, title: "Same-day reports", text: "Digital reports on WhatsApp and email within hours." },
  { icon: Wallet, title: "Transparent pricing", text: "Package price is final — no hidden consultation charges." },
];

function CheckupsPage() {
  return (
    <>
      <PageHero
        eyebrow="Preventive health"
        title="Health check packages that actually get read"
        description="Every package ends with a physician sitting down with your report and telling you exactly what to do next."
      >
        <Button asChild size="lg" variant="secondary">
          <a href={CLINIC.phoneHref}>Call to schedule</a>
        </Button>
      </PageHero>

      <section className="border-b bg-background">
        <div className="container-x grid gap-6 py-12 md:grid-cols-3">
          {PERKS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="flex gap-4">
                <span className="bg-secondary text-primary grid size-11 shrink-0 place-items-center rounded-xl">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 90}>
              <Card
                className={`hover-lift h-full ${p.featured ? "border-primary shadow-soft ring-primary/15 ring-2" : ""}`}
              >
                <CardContent className="flex h-full flex-col p-6">
                  {p.featured ? (
                    <Badge className="bg-accent text-accent-foreground mb-4 w-fit rounded-full">Most chosen</Badge>
                  ) : null}
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold">{p.price}</span>
                    {p.strike ? <span className="text-sm text-muted-foreground line-through">{p.strike}</span> : null}
                  </div>
                  <p className="text-primary mt-1 text-xs font-semibold">{p.tests}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {p.includes.map((inc) => (
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
      </section>

      <section className="section bg-surface">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-bold lg:text-4xl">Preparing for your health check</h2>
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              {[
                "Fast for 10–12 hours before your appointment; plain water is allowed.",
                "Carry a list of your current medicines and any previous reports.",
                "Morning slots between 7:30 AM and 10:00 AM are ideal for fasting samples.",
                "Women should avoid scheduling PAP smear during menstruation.",
                "Diabetic patients should carry their medication to take after the fasting sample.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
