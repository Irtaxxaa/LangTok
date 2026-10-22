"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";
import type { VideoQuiz } from "@/types";

interface EndQuizModalProps {
  quiz: VideoQuiz;
  open: boolean;
  onDismiss: () => void;
  onCorrect?: () => void;
}

export function EndQuizModal({
  quiz,
  open,
  onDismiss,
  onCorrect,
}: EndQuizModalProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  if (!open) return null;

  const handleSelect = (optionId: string, isCorrect: boolean) => {
    if (revealed) return;
    setSelectedId(optionId);
    setRevealed(true);
    if (isCorrect) onCorrect?.();
  };

  return (
    <div className="pointer-events-none absolute inset-x-4 bottom-24 z-30 animate-fade-in">
      <div className="pointer-events-auto rounded-2xl border border-white/10 bg-surface-elevated/95 p-4 shadow-xl backdrop-blur-md">
        <div className="mb-3 flex items-center gap-2 text-accent-soft">
          <Sparkles className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            Quick quiz
          </span>
        </div>
        <p className="mb-4 text-sm font-medium text-white">{quiz.prompt}</p>
        <div className="flex flex-col gap-2">
          {quiz.options.map((opt) => {
            let style =
              "border-white/15 bg-white/5 hover:bg-white/10 text-white";
            if (revealed && opt.isCorrect) {
              style = "border-emerald-400/50 bg-emerald-500/20 text-emerald-100";
            } else if (revealed && selectedId === opt.id && !opt.isCorrect) {
              style = "border-rose-400/50 bg-rose-500/20 text-rose-100";
            }
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelect(opt.id, opt.isCorrect)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${style}`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {revealed && (
          <button
            type="button"
            onClick={() => {
              setSelectedId(null);
              setRevealed(false);
              onDismiss();
            }}
            className="mt-4 w-full rounded-xl py-2 text-sm font-medium text-white/70 hover:text-white"
          >
            Continue scrolling
          </button>
        )}
      </div>
    </div>
  );
}
