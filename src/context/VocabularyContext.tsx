"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SavedWord, VocabularyWord } from "@/types";

interface VocabularyContextValue {
  savedWords: SavedWord[];
  isSaved: (wordId: string) => boolean;
  saveWord: (word: VocabularyWord, videoId: string) => void;
  removeWord: (wordId: string) => void;
}

const VocabularyContext = createContext<VocabularyContextValue | null>(null);

export function VocabularyProvider({ children }: { children: ReactNode }) {
  const [savedWords, setSavedWords] = useState<SavedWord[]>([]);

  const isSaved = useCallback(
    (wordId: string) => savedWords.some((w) => w.id === wordId),
    [savedWords],
  );

  const saveWord = useCallback((word: VocabularyWord, videoId: string) => {
    setSavedWords((prev) => {
      if (prev.some((w) => w.id === word.id)) return prev;
      return [
        ...prev,
        { ...word, videoId, savedAt: new Date().toISOString() },
      ];
    });
  }, []);

  const removeWord = useCallback((wordId: string) => {
    setSavedWords((prev) => prev.filter((w) => w.id !== wordId));
  }, []);

  const value = useMemo(
    () => ({ savedWords, isSaved, saveWord, removeWord }),
    [savedWords, isSaved, saveWord, removeWord],
  );

  return (
    <VocabularyContext.Provider value={value}>
      {children}
    </VocabularyContext.Provider>
  );
}

export function useVocabulary() {
  const ctx = useContext(VocabularyContext);
  if (!ctx) {
    throw new Error("useVocabulary must be used within VocabularyProvider");
  }
  return ctx;
}
