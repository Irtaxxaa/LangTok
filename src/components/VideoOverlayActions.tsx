"use client";

import { Bookmark, Heart } from "lucide-react";
import { useState } from "react";
import { DifficultyBadge } from "./DifficultyBadge";
import type { DifficultyLevel } from "@/types";

interface VideoOverlayActionsProps {
  topic: string;
  difficulty: DifficultyLevel;
  initialLikes: number;
  title: string;
}

export function VideoOverlayActions({
  topic,
  difficulty,
  initialLikes,
  title,
}: VideoOverlayActionsProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    setLiked((prev) => {
      setLikes((n) => (prev ? n - 1 : n + 1));
      return !prev;
    });
  };

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between bg-gradient-to-b from-black/60 to-transparent p-4 pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="pointer-events-auto flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            #{topic}
          </span>
          <DifficultyBadge level={difficulty} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex flex-col items-center justify-end gap-5 pb-36 pr-3">
        <button
          type="button"
          onClick={toggleLike}
          aria-pressed={liked}
          aria-label="Like video"
          className="pointer-events-auto flex flex-col items-center gap-1 text-white transition active:scale-95"
        >
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md ${
              liked ? "bg-rose-500/30" : "bg-black/40"
            }`}
          >
            <Heart
              className={`h-6 w-6 ${liked ? "fill-rose-400 text-rose-400" : ""}`}
            />
          </span>
          <span className="text-xs font-medium drop-shadow">{likes}</span>
        </button>

        <button
          type="button"
          onClick={() => setBookmarked((b) => !b)}
          aria-pressed={bookmarked}
          aria-label="Bookmark video"
          className="pointer-events-auto flex flex-col items-center gap-1 text-white transition active:scale-95"
        >
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full backdrop-blur-md ${
              bookmarked ? "bg-accent/40" : "bg-black/40"
            }`}
          >
            <Bookmark
              className={`h-6 w-6 ${bookmarked ? "fill-accent-soft text-accent-soft" : ""}`}
            />
          </span>
          <span className="text-xs font-medium drop-shadow">Save</span>
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-28 left-4 right-16">
        <p className="text-sm font-semibold text-white drop-shadow-md">{title}</p>
      </div>
    </>
  );
}
