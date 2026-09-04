import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarClock, GraduationCap, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CLINIC, DOCTORS } from "@/lib/site-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Find a Doctor — Specialist Consultants at Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Find experienced specialist doctors across Cardiology, Neurology, Gastroenterology, Gynaecology, Orthopaedics, Nephrology and more at Apollo Clinic Balasore.",
      },
      { property: "og:title", content: "Find a Doctor — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content:
          "50+ specialist consultants and published OPD schedules at Apollo Clinic Balasore, 2nd Floor, Sanjay Heights.",
      },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const [query, setQuery] = useState("");
  const [speciality, setSpeciality] = useState<string>("All");

  const specialities = useMemo(
    () => ["All", ...Array.from(new Set(DOCTORS.map((d) => d.speciality)))],
    [],
  );

  const filtered = DOCTORS.filter((d) => {
    const matchesQuery =
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.speciality.toLowerCase().includes(query.toLowerCase()) ||
      d.qualification.toLowerCase().includes(query.toLowerCase());
    const matchesSpec = speciality === "All" || d.speciality === speciality;
    return matchesQuery && matchesSpec;
  });

  return (
    <>
      <PageHero
        eyebrow="Specialist Directory"
        title="Find the Right Doctor for Your Healthcare Needs"
        description="Explore specialist consultations available at Apollo Clinic Balasore across 26+ medical specialties with published OPD consultation timings."
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

      <section className="section">
        <div className="container-x">
          <Reveal className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search doctors, specialties..."
                className="pl-9"
                aria-label="Search doctors"
              />
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-2xl">
              {specialities.map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeciality(s)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                    speciality === s
                      ? "border-primary bg-primary text-primary-foreground"
                      : "hover:border-primary hover:text-primary border-border bg-background text-muted-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 text-xs text-muted-foreground">
            Showing {filtered.length} specialist{filtered.length === 1 ? "" : "s"}
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 60}>
                <Card className="hover-lift h-full flex flex-col justify-between">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-4">
                      <span className="bg-brand-gradient text-primary-foreground font-display grid size-12 shrink-0 place-items-center rounded-2xl text-sm font-semibold">
                        {d.initials}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h2 className="font-semibold text-base leading-snug">{d.name}</h2>
                        <Badge variant="secondary" className="mt-1 rounded-full text-xs font-medium">
                          {d.speciality}
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2 text-xs text-muted-foreground flex-1">
                      <p className="flex items-start gap-2">
                        <GraduationCap className="text-primary mt-0.5 size-4 shrink-0" />
                        <span>{d.qualification}</span>
                      </p>
                      <p className="flex items-start gap-2 font-medium text-foreground">
                        <CalendarClock className="text-primary mt-0.5 size-4 shrink-0" />
                        <span>{d.days}</span>
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t flex items-center justify-between gap-2">
                      <Button asChild size="sm" variant="default" className="flex-1">
                        <Link to="/contact">Book appointment</Link>
                      </Button>
                      <Button asChild size="sm" variant="outline">
                        <a href={CLINIC.phoneHref} aria-label={`Call for ${d.name}`}>
                          <Phone className="size-3.5" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 text-center py-12 border rounded-2xl bg-surface">
              <p className="text-sm font-medium">No doctors found matching "{query}".</p>
              <p className="text-xs text-muted-foreground mt-1">Try searching for a different specialty or clearing your search.</p>
              <Button onClick={() => { setQuery(""); setSpeciality("All"); }} variant="outline" size="sm" className="mt-4">
                Reset filters
              </Button>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
