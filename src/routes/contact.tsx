import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CLINIC, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Book an appointment at Apollo Clinic Balasore. Address, phone, WhatsApp, clinic timings and directions in Sahadevkhunta, Balasore.",
      },
      { property: "og:title", content: "Contact & Appointments — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content: "Address, timings, phone and appointment request form for Apollo Clinic Balasore.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", department: "", date: "", message: "" });

  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) {
      toast.error("Please enter your name and a valid phone number.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", phone: "", department: "", date: "", message: "" });
      toast.success("Request received. Our front desk will call you shortly to confirm.");
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book an appointment or just ask us a question"
        description="Share a few details and our front desk will call you back to confirm a slot that suits you."
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="shadow-soft">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold">Appointment request</h2>
                <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="10-digit mobile"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Select value={form.department} onValueChange={(v) => update("department", v)}>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select a speciality" />
                      </SelectTrigger>
                      <SelectContent>
                        {SERVICES.map((s) => (
                          <SelectItem key={s.slug} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Preferred date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="message">Reason for visit (optional)</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Briefly describe your symptoms or the test you need"
                      rows={4}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                      {submitting ? "Sending…" : "Request appointment"}
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">
                      For urgent medical help, please call {CLINIC.phone} instead of using this form.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <Card>
              <CardContent className="space-y-4 p-6">
                <h2 className="text-lg font-semibold">Clinic details</h2>
                <p className="flex gap-3 text-sm">
                  <MapPin className="text-primary mt-0.5 size-4 shrink-0" /> {CLINIC.address}
                </p>
                <p className="flex gap-3 text-sm">
                  <Phone className="text-primary mt-0.5 size-4 shrink-0" />
                  <a href={CLINIC.phoneHref} className="hover:text-primary">
                    {CLINIC.phone}
                  </a>
                </p>
                <p className="flex gap-3 text-sm">
                  <Mail className="text-primary mt-0.5 size-4 shrink-0" />
                  <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
                    {CLINIC.email}
                  </a>
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" /> Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Clock className="text-primary size-4" /> Opening hours
                </h2>
                <ul className="mt-4 space-y-3 text-sm">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 border-b pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="shadow-soft overflow-hidden rounded-3xl border">
              <iframe
                title="Apollo Clinic Balasore location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`}
                loading="lazy"
                className="h-[380px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
