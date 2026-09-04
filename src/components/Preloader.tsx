import { useEffect, useState } from "react";

const LOGO_URL = "/apollo-clinic-balasore-logo.webp";

export function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("apollo-preloaded") === "1") {
      setHidden(true);
      return;
    }
    setMounted(true);
    const finish = window.setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("apollo-preloaded", "1");
    }, 1150);
    const remove = window.setTimeout(() => setHidden(true), 1850);
    return () => {
      window.clearTimeout(finish);
      window.clearTimeout(remove);
    };
  }, []);

  if (hidden || !mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-700"
      style={{ opacity: done ? 0 : 1, pointerEvents: done ? "none" : "auto" }}
    >
      <div className="relative flex items-center justify-center">
        <span className="pulse-ring absolute h-28 w-28 rounded-full bg-primary/15" />
        <img
          src={LOGO_URL}
          alt=""
          width={200}
          height={90}
          className="relative w-40 animate-in fade-in zoom-in-95 duration-700"
        />
      </div>
      <div className="h-[3px] w-44 overflow-hidden rounded-full bg-muted">
        <div
          className="bg-brand-gradient h-full rounded-full transition-[width] duration-[1100ms] ease-out"
          style={{ width: done ? "100%" : "18%" }}
        />
      </div>
      <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Expertise. Closer to you.</p>
    </div>
  );
}
