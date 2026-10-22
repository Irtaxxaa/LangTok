"use client";

import { BookOpen } from "lucide-react";
import { VIDEOS } from "@/lib/videos";
import { VideoCard } from "./VideoCard";
import { useVocabulary } from "@/context/VocabularyContext";

export function VideoFeed() {
  const { savedWords } = useVocabulary();

  return (
    <div className="relative mx-auto h-[100dvh] max-w-lg bg-surface">
      <header className="pointer-events-none absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-4 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <span className="rounded-full bg-black/40 px-3 py-1.5 text-sm font-bold tracking-tight text-white backdrop-blur-md">
          LangTok
        </span>
        <span className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          <BookOpen className="h-3.5 w-3.5" />
          {savedWords.length} saved
        </span>
      </header>

      <main
        className="h-full snap-y snap-mandatory overflow-y-scroll overscroll-y-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Language learning video feed"
      >
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </main>
    </div>
  );
}
