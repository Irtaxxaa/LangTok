"use client";

import type { VocabularyWord } from "@/types";

interface SubtitleLineProps {
  words: VocabularyWord[];
  activeWordId?: string | null;
  onWordClick: (word: VocabularyWord) => void;
}

export function SubtitleLine({
  words,
  activeWordId,
  onWordClick,
}: SubtitleLineProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-x-1 gap-y-1 px-3 text-center"
      role="group"
      aria-label="Interactive subtitles"
    >
      {words.map((word) => {
        const isActive = activeWordId === word.id;
        return (
          <button
            key={word.id}
            type="button"
            onClick={() => onWordClick(word)}
            className={`rounded-md px-1.5 py-0.5 text-base font-medium leading-snug text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              isActive ? "bg-white/25 underline decoration-accent decoration-2" : "bg-black/30 backdrop-blur-sm"
            }`}
          >
            {word.text}
          </button>
        );
      })}
    </div>
  );
}
