import type { DifficultyLevel } from "@/types";

const STYLES: Record<DifficultyLevel, string> = {
  A1: "bg-emerald-500/20 text-emerald-300 ring-emerald-500/40",
  A2: "bg-teal-500/20 text-teal-300 ring-teal-500/40",
  B1: "bg-sky-500/20 text-sky-300 ring-sky-500/40",
  B2: "bg-indigo-500/20 text-indigo-300 ring-indigo-500/40",
  C1: "bg-violet-500/20 text-violet-300 ring-violet-500/40",
};

export function DifficultyBadge({ level }: { level: DifficultyLevel }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${STYLES[level]}`}
    >
      {level}
    </span>
  );
}
