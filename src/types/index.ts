export type DifficultyLevel = "A1" | "A2" | "B1" | "B2" | "C1";

export interface VocabularyWord {
  id: string;
  text: string;
  phonetic: string;
  translationUk: string;
  sampleSentence: string;
}

export interface SubtitleCue {
  start: number;
  end: number;
  words: VocabularyWord[];
}

export interface QuizOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface VideoQuiz {
  prompt: string;
  targetWordId: string;
  options: QuizOption[];
}

export interface LearningVideo {
  id: string;
  title: string;
  topic: string;
  difficulty: DifficultyLevel;
  src: string;
  poster?: string;
  likes: number;
  cues: SubtitleCue[];
  quiz: VideoQuiz;
}

export interface SavedWord extends VocabularyWord {
  videoId: string;
  savedAt: string;
}
