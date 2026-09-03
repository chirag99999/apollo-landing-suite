import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarClock, GraduationCap, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { DOCTORS } from "@/lib/site-data";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Doctors — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Meet the specialists at Apollo Clinic Balasore — physicians, cardiologist, gynaecologist, paediatrician, orthopaedic and dermatology consultants with OPD timings.",
      },
      { property: "og:title", content: "Our Doctors — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content: "Specialist consultants and their OPD timings at Apollo Clinic Balasore.",
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
      d.speciality.toLowerCase().includes(query.toLowerCase());
    const matchesSpec = speciality === "All" || d.speciality === speciality;
    return matchesQuery && matchesSpec;
  });

  return (
    <>
      <PageHero
        eyebrow="Our panel"
        title="Specialists who take the time to listen"
        description="Consultants across nine specialities, with published OPD timings so you always know when to visit."
      />

      <section className="section">
        <div className="container-x">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-sm">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or speciality"
                className="pl-9"
                aria-label="Search doctors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {specialities.map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeciality(s)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
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

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 90}>
                <Card className="hover-lift h-full">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-4">
                      <span className="bg-brand-gradient text-primary-foreground font-display grid size-14 shrink-0 place-items-center rounded-2xl text-base font-semibold">
                        {d.initials}
                      </span>
                      <div>
                        <h2 className="font-semibold">{d.name}</h2>
                        <Badge variant="secondary" className="mt-1 rounded-full text-xs">
                          {d.speciality}
                        </Badge>
                      </div>
                    </div>
                    <p className="mt-5 flex gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="text-primary mt-0.5 size-4 shrink-0" /> {d.qualification}
                    </p>
                    <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
                      <CalendarClock className="text-primary mt-0.5 size-4 shrink-0" /> {d.days}
                    </p>
                    <p className="text-primary mt-3 text-xs font-semibold">{d.experience} experience</p>
                    <Button asChild variant="outline" className="mt-6">
                      <Link to="/contact">Request appointment</Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              No doctors match your search. Try a different speciality.
            </p>
          ) : null}
        </div>
      </section>
    </>
  );
}
