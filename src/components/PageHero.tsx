import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-brand-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-24 -right-16 size-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-28 -left-10 size-80 rounded-full bg-white/10 blur-3xl" />
      <div className="container-x relative py-16 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] uppercase opacity-80">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-bold lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base opacity-90 lg:text-lg">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}
