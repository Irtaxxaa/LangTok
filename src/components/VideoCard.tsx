"use client";

import { useCallback, useEffect, useState } from "react";
import type { LearningVideo, VocabularyWord } from "@/types";
import { useIntersectionVideo } from "@/hooks/useIntersectionVideo";
import { getActiveCue } from "@/lib/subtitle";
import { VideoOverlayActions } from "./VideoOverlayActions";
import { SubtitleLine } from "./SubtitleLine";
import { WordBottomSheet } from "./WordBottomSheet";
import { EndQuizModal } from "./EndQuizModal";

interface VideoCardProps {
  video: LearningVideo;
  isFeedPaused?: boolean;
}

export function VideoCard({ video, isFeedPaused }: VideoCardProps) {
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizDismissed, setQuizDismissed] = useState(false);
  const [highlightWordId, setHighlightWordId] = useState<string | null>(null);

  const { containerRef, videoRef, isActive, pause, play } = useIntersectionVideo({
    threshold: 0.85,
  });

  const activeCue = getActiveCue(video.cues, currentTime);

  useEffect(() => {
    if (!isActive || isFeedPaused || sheetOpen || quizOpen) {
      pause();
    } else if (!sheetOpen && !quizOpen) {
      void play();
    }
  }, [isActive, isFeedPaused, sheetOpen, quizOpen, pause, play]);

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime);
  };

  const handleEnded = () => {
    pause();
    if (!quizDismissed) setQuizOpen(true);
  };

  const handleWordClick = useCallback(
    (word: VocabularyWord) => {
      pause();
      setHighlightWordId(word.id);
      setSelectedWord(word);
      setSheetOpen(true);
    },
    [pause],
  );

  const closeSheet = () => {
    setSheetOpen(false);
    setSelectedWord(null);
    setHighlightWordId(null);
    if (isActive && !isFeedPaused && !quizOpen) void play();
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full shrink-0 snap-start snap-always overflow-hidden bg-black"
      aria-label={video.title}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={video.src}
        poster={video.poster}
        playsInline
        muted
        loop={false}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <VideoOverlayActions
        topic={video.topic}
        difficulty={video.difficulty}
        initialLikes={video.likes}
        title={video.title}
      />

      <div className="absolute inset-x-0 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-20 px-2">
        {activeCue ? (
          <SubtitleLine
            words={activeCue.words}
            activeWordId={highlightWordId}
            onWordClick={handleWordClick}
          />
        ) : (
          <p className="text-center text-sm text-white/50">…</p>
        )}
      </div>

      <EndQuizModal
        quiz={video.quiz}
        open={quizOpen && !quizDismissed}
        onDismiss={() => {
          setQuizOpen(false);
          setQuizDismissed(true);
        }}
      />

      <WordBottomSheet
        word={selectedWord}
        videoId={video.id}
        open={sheetOpen}
        onClose={closeSheet}
      />
    </section>
  );
}
