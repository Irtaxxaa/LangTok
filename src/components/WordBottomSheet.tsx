"use client";

import { BookmarkPlus, Check, X } from "lucide-react";
import { useEffect } from "react";
import type { VocabularyWord } from "@/types";
import { useVocabulary } from "@/context/VocabularyContext";

interface WordBottomSheetProps {
  word: VocabularyWord | null;
  videoId: string;
  open: boolean;
  onClose: () => void;
}

export function WordBottomSheet({
  word,
  videoId,
  open,
  onClose,
}: WordBottomSheetProps) {
  const { isSaved, saveWord } = useVocabulary();
  const saved = word ? isSaved(word.id) : false;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !word) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <button
        type="button"
        aria-label="Close word details"
        className="absolute inset-0 animate-fade-in bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="word-sheet-title"
        className="relative animate-sheet-up rounded-t-2xl bg-surface-sheet px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl ring-1 ring-white/10"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" />
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h2
              id="word-sheet-title"
              className="text-2xl font-bold tracking-tight text-white"
            >
              {word.text.replace(/[.,!?;:]$/, "")}
            </h2>
            <p className="mt-1 font-mono text-sm text-white/60">{word.phonetic}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-white/70 hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <dl className="space-y-4 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/45">
              Ukrainian
            </dt>
            <dd className="mt-1 text-lg text-white">{word.translationUk}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/45">
              Example
            </dt>
            <dd className="mt-1 rounded-xl bg-black/30 p-3 text-white/90">
              {word.sampleSentence}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          disabled={saved}
          onClick={() => saveWord(word, videoId)}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-semibold text-white transition hover:bg-accent-soft disabled:cursor-default disabled:bg-emerald-600/80"
        >
          {saved ? (
            <>
              <Check className="h-5 w-5" />
              Saved to vocabulary
            </>
          ) : (
            <>
              <BookmarkPlus className="h-5 w-5" />
              Save to vocabulary
            </>
          )}
        </button>
      </div>
    </div>
  );
}
