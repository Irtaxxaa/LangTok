import type { SubtitleCue } from "@/types";

export function getActiveCue(
  cues: SubtitleCue[],
  currentTime: number,
): SubtitleCue | null {
  return (
    cues.find((cue) => currentTime >= cue.start && currentTime < cue.end) ?? null
  );
}
