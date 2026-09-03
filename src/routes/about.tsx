import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HandHeart, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
          "Learn about Apollo Clinic Balasore: our clinical philosophy, facilities, quality standards and the team caring for Balasore families.",
      },
      { property: "og:title", content: "About Apollo Clinic Balasore" },
      {
        property: "og:description",
        content: "Our clinical philosophy, facilities and quality standards in Balasore.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Clinical integrity", text: "Evidence-based protocols, no unnecessary tests, transparent pricing on every bill." },
  { icon: HandHeart, title: "Patient first", text: "Unhurried consultations, clear explanations and follow-up that actually happens." },
  { icon: Award, title: "Quality assured", text: "Calibrated equipment, internal quality controls and periodic clinical audits." },
  { icon: Sparkles, title: "Comfort & hygiene", text: "Sterilised procedure rooms, clean waiting areas and short waiting times." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Apollo standards of care, built for Balasore"
        description="We opened with a simple intent: families in Balasore should not have to travel to a metro for reliable specialist opinion and dependable diagnostics."
      />

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold lg:text-4xl">A neighbourhood clinic with hospital discipline</h2>
            <p className="mt-5 text-muted-foreground">
              {CLINIC.name} brings consultations, pathology, radiology and pharmacy into a single visit. Every
              service follows documented Apollo protocols — from how a sample is labelled to how a report is
              verified before it reaches you.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our consultants practise across nine specialities and are supported by trained nursing staff,
              technicians and front-desk coordinators who keep your records, reminders and follow-ups in order.
            </p>
            <Button asChild className="mt-8">
              <Link to="/doctors">Meet our doctors</Link>
            </Button>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={heroImg}
              alt="Interior of Apollo Clinic Balasore"
              loading="lazy"
              width={1600}
              height={1104}
              className="shadow-lift w-full rounded-3xl object-cover"
            />
          </Reveal>
        </div>
      </section>

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

      <section className="section bg-surface">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">What guides us</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Four commitments we do not compromise on</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <Card className="hover-lift h-full">
                  <CardContent className="p-6">
                    <span className="bg-secondary text-primary grid size-11 place-items-center rounded-xl">
                      <v.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase">Facilities</p>
            <h2 className="mt-3 text-3xl font-bold lg:text-4xl">Everything you need, on one floor</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Six air-conditioned consultation rooms",
              "In-house pathology laboratory",
              "Digital X-ray and ultrasound",
              "Sterilised dental operatory",
              "Minor procedure & dressing room",
              "Pharmacy open all days",
              "Physiotherapy suite",
              "Wheelchair-accessible entrance",
              "Cashless corporate tie-ups",
            ].map((f, i) => (
              <Reveal key={f} delay={(i % 3) * 80}>
                <div className="rounded-xl border bg-card p-5 text-sm font-medium">{f}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
