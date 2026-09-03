import {
  Baby,
  Bone,
  Flower2,
  HeartPulse,
  Pill,
  Smile,
  Sparkles,
  Stethoscope,
  TestTubes,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  Baby,
  Flower2,
  Bone,
  Sparkles,
  Smile,
  TestTubes,
  Pill,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Stethoscope;
  return <Icon className={className} />;
}
