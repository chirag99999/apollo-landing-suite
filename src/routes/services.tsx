import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/site-data";
import consultImg from "@/assets/consult.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Specialities & Services — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "General medicine, cardiology, paediatrics, gynaecology, orthopaedics, dermatology, dental, diagnostics and pharmacy in Balasore.",
      },
      { property: "og:title", content: "Specialities & Services — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content: "Nine specialities, in-house diagnostics and pharmacy under one roof in Balasore.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine specialities under one calm, clinical roof"
        description="From a routine fever to a cardiac screening, our consultants, laboratory and pharmacy work together so your care never gets fragmented."
      >
        <Button asChild size="lg" variant="secondary">
          <Link to="/contact">Book a consultation</Link>
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Card className="hover-lift h-full">
                <CardContent className="flex h-full flex-col p-6">
                  <span className="bg-brand-gradient text-primary-foreground grid size-12 place-items-center rounded-2xl">
                    <ServiceIcon name={s.icon} className="size-5" />
                  </span>
                  <h2 className="mt-5 text-lg font-semibold">{s.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
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
            <h2 className="text-3xl font-bold lg:text-4xl">How a visit works</h2>
            <ol className="mt-8 space-y-6">
              {[
                { t: "Book or walk in", d: "Reserve a slot by phone or WhatsApp, or simply walk in during clinic hours." },
                { t: "Consult your specialist", d: "Unhurried consultation with history, examination and a written care plan." },
                { t: "Tests on the spot", d: "Samples and imaging are done in-house — no second trip, no waiting rooms elsewhere." },
                { t: "Reports & follow-up", d: "Digital reports the same day, with a review consultation whenever needed." },
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
