import { useEffect, useState } from "react";
import { useRouterState, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, X, Sparkles, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CLINIC } from "@/lib/site-data";

export function DentalPromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (pathname === "/") {
      const hasSeenHome = sessionStorage.getItem("apollo_dental_popup_home_seen");
      if (!hasSeenHome) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem("apollo_dental_popup_home_seen", "true");
        }, 1100);
        return () => clearTimeout(timer);
      }
    } else if (pathname === "/doctors") {
      // Every time someone visits or refreshes the doctor page it comes
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-dental-promo", handleOpen);
    return () => window.removeEventListener("open-dental-promo", handleOpen);
  }, []);

  if (!isOpen) return null;

  const whatsappDentalUrl = `https://wa.me/919439454650?text=${encodeURIComponent(
    "Hi, I saw the Completely Free Dental Checkup offer on your website and want to book my free checkup at Apollo Clinic Balasore."
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white/95 shadow-2xl border border-white/80 ring-1 ring-primary/25 backdrop-blur-2xl transition-all scale-100">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 size-9 rounded-full bg-slate-900/75 hover:bg-slate-900 text-white grid place-items-center transition-transform hover:scale-110 shadow-lg cursor-pointer"
          aria-label="Close popup"
        >
          <X className="size-5" />
        </button>

        <div className="grid md:grid-cols-[1.05fr_1.1fr] items-stretch">
          {/* Creative Image Side */}
          <div className="relative bg-gradient-to-br from-sky-50 via-teal-50 to-primary/10 p-4 sm:p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border/50">
            <div className="relative overflow-hidden rounded-2xl shadow-lift border border-white max-w-xs md:max-w-none w-full">
              <img
                src="/free-dental-checkup.jpg"
                alt="Free Dental Checkup at Apollo Clinic Balasore - No Hidden Charges"
                width={800}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-primary">
              <Sparkles className="size-3.5 text-amber-500 animate-spin" />
              <span>Limited Period Community Health Drive</span>
            </div>
          </div>

          {/* Details & Instant Booking Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-3 py-1 text-xs font-bold tracking-wide animate-pulse">
                100% FREE • NO HIDDEN CHARGES
              </Badge>

              <h3 className="mt-3 text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">
                Completely Free <span className="text-primary">Dental Checkup</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
                A Healthier Smile for a Happier You! Don't ignore toothache, cavity or bleeding gums.
              </p>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Comprehensive Consultation:</strong> Thorough oral examination by qualified dental surgeons.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Early Detection:</strong> Spot cavities, plaque, and gum disease before they worsen.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Zero Consultation Fee:</strong> Absolutely ₹0 charge for the consultation.</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-900">ମାଗଣା ଦାନ୍ତ ପରୀକ୍ଷା | मुफ्त दांतों की जांच</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">Mon – Sun: 9:00 AM – 8:00 PM</p>
                </div>
                <Badge variant="outline" className="text-[10px] shrink-0">Walk-ins Welcome</Badge>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 space-y-2.5 pt-4 border-t border-border/60">
              <Button asChild size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md animate-glow">
                <a href={whatsappDentalUrl} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-5 mr-2 fill-current" /> Book via WhatsApp (1-Tap)
                </a>
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" size="default" className="w-full font-semibold border-primary/40 hover:bg-primary/10">
                  <a href={CLINIC.phoneHref}>
                    <Phone className="size-4 mr-1.5 text-primary" /> 1 Missed Call
                  </a>
                </Button>
                <Button asChild variant="secondary" size="default" className="w-full font-semibold" onClick={() => setIsOpen(false)}>
                  <Link to="/contact">
                    <Calendar className="size-4 mr-1.5" /> Book Online
                  </Link>
                </Button>
              </div>

              <p className="text-center text-[11px] text-muted-foreground">
                📍 2nd Floor, Sanjay Heights, Balasore · Call: <strong>+91-9439454650</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}