"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseIntersectionVideoOptions {
  threshold?: number;
  onActive?: () => void;
  onInactive?: () => void;
}

export function useIntersectionVideo(options: UseIntersectionVideoOptions = {}) {
  const { threshold = 0.85, onActive, onInactive } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const active = entry.isIntersecting && entry.intersectionRatio >= threshold;
        setIsActive(active);
        if (active) onActive?.();
        else onInactive?.();
      },
      { threshold: [0, threshold, 1] },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, onActive, onInactive]);

  const play = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      video.muted = true;
      await video.play();
    } catch {
      /* autoplay policies */
    }
  }, []);

  const pause = useCallback(() => {
    videoRef.current?.pause();
  }, []);

  useEffect(() => {
    if (isActive) void play();
    else pause();
  }, [isActive, play, pause]);

  return { containerRef, videoRef, isActive, play, pause };
}
