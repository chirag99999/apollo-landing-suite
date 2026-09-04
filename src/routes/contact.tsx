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
import { CLINIC, DOCTORS, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments — Apollo Clinic Balasore" },
      {
        name: "description",
        content:
          "Book an appointment, enquire about diagnostic tests or schedule home sample collection at Apollo Clinic Balasore, 2nd Floor, Sanjay Heights. Call +91-9439454650.",
      },
      { property: "og:title", content: "Contact & Appointments — Apollo Clinic Balasore" },
      {
        property: "og:description",
        content:
          "Location, clinic hours, phone numbers and appointment booking at 2nd Floor, Sanjay Heights, Balasore.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const availableDoctors = form.department
    ? DOCTORS.filter(
        (d) =>
          d.speciality.toLowerCase().includes(form.department.toLowerCase()) ||
          form.department.toLowerCase().includes(d.speciality.toLowerCase())
      )
    : DOCTORS;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) {
      toast.error("Please enter your name and a valid phone number.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", phone: "", department: "", doctor: "", date: "", time: "", message: "" });
      toast.success("Appointment request received! Our front desk will call you shortly to confirm.");
    }, 700);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & Appointments"
        title="We're Here to Help"
        description="Have a question, need to see a specialist, or want to enquire about a diagnostic test? Reach out to Apollo Clinic Balasore."
      >
        <div className="flex flex-wrap gap-3 mt-4">
          <Button asChild size="lg" variant="secondary">
            <a href={CLINIC.phoneHref}>
              <Phone className="size-4 mr-2" /> Call Now: {CLINIC.phone}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
            <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4 mr-2" /> WhatsApp Us
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="shadow-soft border-border/80">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold">Request an Appointment</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Fill in your details below and our patient care team will contact you to confirm the time slot.
                </p>

                <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Patient Name *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 or 10-digit mobile"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="department">Select Specialty</Label>
                    <Select value={form.department} onValueChange={(v) => { update("department", v); update("doctor", ""); }}>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Choose specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(new Set(DOCTORS.map((d) => d.speciality))).sort().map((spec) => (
                          <SelectItem key={spec} value={spec}>
                            {spec}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="doctor">Select Doctor (Optional)</Label>
                    <Select value={form.doctor} onValueChange={(v) => update("doctor", v)}>
                      <SelectTrigger id="doctor">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDoctors.map((d) => (
                          <SelectItem key={d.name} value={d.name}>
                            {d.name} ({d.speciality})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="time">Preferred Time Slot</Label>
                    <Select value={form.time} onValueChange={(v) => update("time", v)}>
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</SelectItem>
                        <SelectItem value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</SelectItem>
                        <SelectItem value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="message">Healthcare Requirement / Symptoms (Optional)</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Briefly describe your symptoms or test enquiry..."
                      rows={3}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
                      {submitting ? "Submitting..." : "Request Appointment"}
                    </Button>
                    <p className="mt-3 text-xs text-muted-foreground">
                      For immediate assistance, please call <strong>{CLINIC.phone}</strong>.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <Card className="shadow-soft border-border/80">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-lg font-semibold">Clinic Information</h2>
                <div className="space-y-3 text-sm">
                  <p className="flex gap-3">
                    <MapPin className="text-primary mt-0.5 size-4 shrink-0" />
                    <span>
                      <strong>{CLINIC.name}</strong>
                      <br />
                      {CLINIC.address}
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <Phone className="text-primary mt-0.5 size-4 shrink-0" />
                    <a href={CLINIC.phoneHref} className="hover:text-primary font-medium">
                      {CLINIC.phone}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <Mail className="text-primary mt-0.5 size-4 shrink-0" />
                    <a href={`mailto:${CLINIC.email}`} className="hover:text-primary">
                      {CLINIC.email}
                    </a>
                  </p>
                </div>

                <div className="pt-3 border-t flex flex-col gap-2">
                  <Button asChild className="w-full">
                    <a href={CLINIC.phoneHref}>
                      <Phone className="size-4 mr-2" /> Call Now: {CLINIC.phone}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4 mr-2" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border/80">
              <CardContent className="p-6">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Clock className="text-primary size-4" /> Clinic & Lab Hours
                </h2>
                <ul className="mt-4 space-y-3 text-xs">
                  {CLINIC.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4 border-b pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-semibold text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <div className="shadow-soft overflow-hidden rounded-3xl border">
              <iframe
                title="Apollo Clinic Balasore location map at Sanjay Heights"
                src={`https://www.google.com/maps?q=${encodeURIComponent("Sanjay Heights, Balasore, Odisha")}&output=embed`}
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
