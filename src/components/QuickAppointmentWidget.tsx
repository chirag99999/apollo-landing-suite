import { useState } from "react";
import { MessageCircle, Phone, Sparkles, X, ChevronUp, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC } from "@/lib/site-data";

export function QuickAppointmentWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const handleOpenDental = () => {
    window.dispatchEvent(new CustomEvent("open-dental-promo"));
    setIsOpen(false);
  };

  const quickWhatsappUrl = `https://wa.me/919439454650?text=${encodeURIComponent(
    "Hi Apollo Clinic Balasore, I would like to book a quick doctor consultation / test appointment."
  )}`;

  return (
    <aside aria-label="Quick appointment and contact options" className="fixed bottom-4 right-3 sm:right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Expanded Quick Drawer / Card */}
      {isOpen ? (
        <div className="w-[320px] sm:w-[360px] rounded-3xl glass-panel p-5 shadow-2xl border border-white/80 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Live Front Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="size-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 grid place-items-center transition-colors cursor-pointer"
              aria-label="Close booking box"
            >
              <X className="size-4" />
            </button>
          </div>

          <h4 className="mt-2 text-lg font-bold font-display text-slate-900 leading-snug">
            Book Appointment with <span className="text-primary">1 Action</span>
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            No long forms. Give a missed call or message our patient care desk on WhatsApp.
          </p>

          <div className="mt-4 space-y-2">
            {/* WhatsApp 1-Tap */}
            <Button asChild size="default" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md">
              <a href={quickWhatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4 mr-2 fill-current" /> WhatsApp Us (Instant)
              </a>
            </Button>

            {/* 1 Missed Call / Call */}
            <Button asChild size="default" variant="outline" className="w-full font-bold border-primary text-primary hover:bg-primary/10">
              <a href={CLINIC.phoneHref}>
                <Phone className="size-4 mr-2 text-primary" /> Give 1 Missed Call
              </a>
            </Button>

            {/* Free Dental Promo Trigger */}
            <button
              onClick={handleOpenDental}
              className="w-full p-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-200/80 text-amber-900 text-xs font-semibold flex items-center justify-between transition-all cursor-pointer shadow-sm group"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="size-4 text-amber-600 group-hover:rotate-12 transition-transform" />
                <span>Claim Free Dental Checkup</span>
              </span>
              <span className="text-[10px] bg-amber-200 px-1.5 py-0.5 rounded-full font-bold">100% FREE</span>
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="size-3 text-primary" /> Open 9 AM – 8 PM Daily
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-3 text-emerald-600" /> Apollo Certified Care
            </span>
          </div>
        </div>
      ) : null}

      {/* Floating Action Pill */}
      <div className="flex items-center gap-2">
        {/* Quick Free Dental Badge */}
        <button
          onClick={handleOpenDental}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full glass-panel shadow-lg border border-amber-300 text-amber-900 text-xs font-bold hover:scale-105 transition-all cursor-pointer animate-bounce-gentle"
          title="Click to view Free Dental Checkup offer"
        >
          <Sparkles className="size-3.5 text-amber-600 animate-spin" />
          <span>Free Dental Checkup</span>
        </button>

        {/* Main 1-Tap Dial Pill */}
        <div className="glass-panel p-1.5 rounded-full shadow-2xl flex items-center gap-1.5 border border-white/80 ring-2 ring-primary/20 animate-glow">
          {/* Missed Call Button */}
          <a
            href={CLINIC.phoneHref}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary text-primary-foreground font-bold text-xs hover:bg-primary/90 transition-all shadow-sm hover:scale-105"
            title="Give 1 Missed Call to +91-9439454650"
          >
            <Phone className="size-3.5 animate-pulse" />
            <span className="hidden xs:inline">1 Missed Call</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href={quickWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all shadow-sm hover:scale-105"
            title="Message on WhatsApp"
          >
            <MessageCircle className="size-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>

          {/* Toggle Expand */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 grid place-items-center transition-transform hover:scale-110 cursor-pointer"
            aria-label="Toggle options"
            title="More booking options"
          >
            <ChevronUp className={`size-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </aside>
  );
}