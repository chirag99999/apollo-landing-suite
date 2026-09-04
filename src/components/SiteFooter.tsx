import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CLINIC, NAV, SERVICES } from "@/lib/site-data";

const LOGO_URL = "/apollo-clinic-balasore-logo.webp";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground mt-auto">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-lg bg-background p-3">
            <img src={LOGO_URL} alt={`${CLINIC.name} logo`} width={168} height={76} className="h-11 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm opacity-80">
            A multi-speciality clinic bringing trusted Apollo standards of care to families across Balasore.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase opacity-70">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="opacity-85 transition-opacity hover:opacity-100 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase opacity-70">Specialities</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="opacity-85 transition-opacity hover:opacity-100 hover:underline">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase opacity-70">Reach us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span className="opacity-85">{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={CLINIC.phoneHref} className="opacity-85 hover:underline">
                {CLINIC.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${CLINIC.email}`} className="opacity-85 hover:underline">
                {CLINIC.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 size-4 shrink-0" />
              <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer" className="opacity-85 hover:underline">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex flex-col gap-2 py-5 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Franchise clinic · Not for medical emergencies — please call your nearest emergency service.</p>
        </div>
      </div>
    </footer>
  );
}
