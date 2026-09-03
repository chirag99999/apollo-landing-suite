import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, MapPin, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CLINIC, NAV } from "@/lib/site-data";
import { useScrollProgress } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp.asset.json";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary-deep text-primary-foreground hidden lg:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5" /> {CLINIC.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5" /> Mon–Sat 8:00 AM – 8:30 PM
            </span>
          </div>
          <a href={CLINIC.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:underline">
            <Phone className="size-3.5" /> {CLINIC.phone}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-transparent transition-all duration-300",
          scrolled ? "bg-background/85 border-border shadow-soft backdrop-blur-xl" : "bg-background",
        )}
      >
        <div className="container-x flex h-18 items-center justify-between gap-4 py-3">
          <Link to="/" className="shrink-0" aria-label={CLINIC.name}>
            <img src={logo.url} alt={`${CLINIC.name} logo`} width={168} height={76} className="h-11 w-auto" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-muted-foreground hover:text-primary data-[status=active]:text-primary relative rounded-md px-3.5 py-2 text-sm font-semibold transition-colors data-[status=active]:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/contact">Book appointment</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm p-0">
                <div className="flex items-center justify-between border-b px-5 py-4">
                  <img src={logo.url} alt="" width={140} height={64} className="h-9 w-auto" />
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                    <X className="size-5" />
                  </Button>
                </div>
                <nav className="flex flex-col p-3">
                  {NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      className="hover:bg-secondary data-[status=active]:text-primary rounded-lg px-4 py-3 text-base font-semibold transition-colors data-[status=active]:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 border-t p-5">
                  <Button asChild className="w-full">
                    <a href={CLINIC.phoneHref}>Call {CLINIC.phone}</a>
                  </Button>
                  <p className="text-xs text-muted-foreground">{CLINIC.address}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="bg-accent h-[2px] origin-left transition-transform duration-150" style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}
