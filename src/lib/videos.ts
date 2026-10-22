import type { LearningVideo } from "@/types";

/**
 * Direct MP4 URLs from Pexels CDN (no watermarks, free to use).
 * Subtitles and quizzes are curated for language-learning UX demos.
 */
export const VIDEOS: LearningVideo[] = [
  {
    id: "v1-coffee-morning",
    title: "Morning coffee ritual",
    topic: "Daily life",
    difficulty: "A2",
    // Pexels tiers: sd_640_360 → hd_1280_720 → uhd_2560_1440 (swap suffix in URL)
    src: "https://videos.pexels.com/video-files/3209663/3209663-hd_1280_720_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/3209663/free-video-3209663.jpg?auto=compress&cs=tinysrgb&w=1280",
    likes: 1240,
    cues: [
      {
        start: 0,
        end: 3.2,
        words: [
          {
            id: "v1-w1",
            text: "Every",
            phonetic: "/ˈevri/",
            translationUk: "кожен, кожна",
            sampleSentence: "Every morning I drink coffee.",
          },
          {
            id: "v1-w2",
            text: "morning",
            phonetic: "/ˈmɔːrnɪŋ/",
            translationUk: "ранок",
            sampleSentence: "Good morning!",
          },
          {
            id: "v1-w3",
            text: "starts",
            phonetic: "/stɑːrts/",
            translationUk: "починається",
            sampleSentence: "The day starts early.",
          },
          {
            id: "v1-w4",
            text: "with",
            phonetic: "/wɪð/",
            translationUk: "з",
            sampleSentence: "I begin with tea.",
          },
          {
            id: "v1-w5",
            text: "coffee.",
            phonetic: "/ˈkɒfi/",
            translationUk: "кава",
            sampleSentence: "Would you like some coffee?",
          },
        ],
      },
      {
        start: 3.2,
        end: 6.5,
        words: [
          {
            id: "v1-w6",
            text: "The",
            phonetic: "/ðə/",
            translationUk: "the (артикль)",
            sampleSentence: "The cup is hot.",
          },
          {
            id: "v1-w7",
            text: "aroma",
            phonetic: "/əˈroʊmə/",
            translationUk: "аромат",
            sampleSentence: "I love the aroma of fresh bread.",
          },
          {
            id: "v1-w8",
            text: "feels",
            phonetic: "/fiːlz/",
            translationUk: "відчувається",
            sampleSentence: "It feels warm today.",
          },
          {
            id: "v1-w9",
            text: "comforting.",
            phonetic: "/ˈkʌmfərtɪŋ/",
            translationUk: "затишний, що заспокоює",
            sampleSentence: "Her voice is comforting.",
          },
        ],
      },
      {
        start: 6.5,
        end: 10,
        words: [
          {
            id: "v1-w10",
            text: "Small",
            phonetic: "/smɔːl/",
            translationUk: "маленький",
            sampleSentence: "A small step is still progress.",
          },
          {
            id: "v1-w11",
            text: "rituals",
            phonetic: "/ˈrɪtʃuəlz/",
            translationUk: "ритуали",
            sampleSentence: "Evening rituals help me relax.",
          },
          {
            id: "v1-w12",
            text: "build",
            phonetic: "/bɪld/",
            translationUk: "будують",
            sampleSentence: "We build habits slowly.",
          },
          {
            id: "v1-w13",
            text: "good",
            phonetic: "/ɡʊd/",
            translationUk: "хороші",
            sampleSentence: "Good habits change your life.",
          },
          {
            id: "v1-w14",
            text: "habits.",
            phonetic: "/ˈhæbɪts/",
            translationUk: "звички",
            sampleSentence: "Reading is my favorite habit.",
          },
        ],
      },
    ],
    quiz: {
      prompt: "What does “aroma” mean in Ukrainian?",
      targetWordId: "v1-w7",
      options: [
        { id: "q1-a", label: "аромат", isCorrect: true },
        { id: "q1-b", label: "шум", isCorrect: false },
        { id: "q1-c", label: "колір", isCorrect: false },
      ],
    },
  },
  {
    id: "v2-city-walk",
    title: "Walking through the city",
    topic: "Travel",
    difficulty: "B1",
    src: "https://videos.pexels.com/video-files/854841/854841-hd_1280_720_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/854841/free-video-854841.jpg?auto=compress&cs=tinysrgb&w=1280",
    likes: 892,
    cues: [
      {
        start: 0,
        end: 3.5,
        words: [
          {
            id: "v2-w1",
            text: "I",
            phonetic: "/aɪ/",
            translationUk: "я",
            sampleSentence: "I walk to work.",
          },
          {
            id: "v2-w2",
            text: "explore",
            phonetic: "/ɪkˈsplɔːr/",
            translationUk: "досліджувати",
            sampleSentence: "We explore new neighborhoods.",
          },
          {
            id: "v2-w3",
            text: "the",
            phonetic: "/ðə/",
            translationUk: "the (артикль)",
            sampleSentence: "The street is busy.",
          },
          {
            id: "v2-w4",
            text: "city",
            phonetic: "/ˈsɪti/",
            translationUk: "місто",
            sampleSentence: "Kyiv is a beautiful city.",
          },
          {
            id: "v2-w5",
            text: "slowly.",
            phonetic: "/ˈsloʊli/",
            translationUk: "повільно",
            sampleSentence: "Please speak slowly.",
          },
        ],
      },
      {
        start: 3.5,
        end: 7,
        words: [
          {
            id: "v2-w6",
            text: "Every",
            phonetic: "/ˈevri/",
            translationUk: "кожен",
            sampleSentence: "Every corner tells a story.",
          },
          {
            id: "v2-w7",
            text: "corner",
            phonetic: "/ˈkɔːrnər/",
            translationUk: "кут, поворот",
            sampleSentence: "Turn the corner and you'll see the park.",
          },
          {
            id: "v2-w8",
            text: "reveals",
            phonetic: "/rɪˈviːlz/",
            translationUk: "відкриває",
            sampleSentence: "The map reveals a hidden path.",
          },
          {
            id: "v2-w9",
            text: "something",
            phonetic: "/ˈsʌmθɪŋ/",
            translationUk: "щось",
            sampleSentence: "I heard something interesting.",
          },
          {
            id: "v2-w10",
            text: "new.",
            phonetic: "/njuː/",
            translationUk: "нове",
            sampleSentence: "This is new for me.",
          },
        ],
      },
      {
        start: 7,
        end: 10.5,
        words: [
          {
            id: "v2-w11",
            text: "Travel",
            phonetic: "/ˈtrævəl/",
            translationUk: "подорож",
            sampleSentence: "Travel opens your mind.",
          },
          {
            id: "v2-w12",
            text: "teaches",
            phonetic: "/ˈtiːtʃɪz/",
            translationUk: "вчить",
            sampleSentence: "Experience teaches patience.",
          },
          {
            id: "v2-w13",
            text: "you",
            phonetic: "/juː/",
            translationUk: "тебе",
            sampleSentence: "I trust you.",
          },
          {
            id: "v2-w14",
            text: "to",
            phonetic: "/tuː/",
            translationUk: "до, щоб",
            sampleSentence: "I want to learn English.",
          },
          {
            id: "v2-w15",
            text: "observe.",
            phonetic: "/əbˈzɜːrv/",
            translationUk: "спостерігати",
            sampleSentence: "Scientists observe nature carefully.",
          },
        ],
      },
    ],
    quiz: {
      prompt: "Pick the correct translation for “explore”:",
      targetWordId: "v2-w2",
      options: [
        { id: "q2-a", label: "досліджувати", isCorrect: true },
        { id: "q2-b", label: "бігти", isCorrect: false },
        { id: "q2-c", label: "спати", isCorrect: false },
      ],
    },
  },
  {
    id: "v3-ocean-waves",
    title: "Calm by the ocean",
    topic: "Nature",
    difficulty: "A2",
    src: "https://videos.pexels.com/video-files/1409899/1409899-hd_1280_720_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/1409899/free-video-1409899.jpg?auto=compress&cs=tinysrgb&w=1280",
    likes: 2103,
    cues: [
      {
        start: 0,
        end: 3.8,
        words: [
          {
            id: "v3-w1",
            text: "The",
            phonetic: "/ðə/",
            translationUk: "the (артикль)",
            sampleSentence: "The ocean is vast.",
          },
          {
            id: "v3-w2",
            text: "waves",
            phonetic: "/weɪvz/",
            translationUk: "хвилі",
            sampleSentence: "The waves crash on the shore.",
          },
          {
            id: "v3-w3",
            text: "move",
            phonetic: "/muːv/",
            translationUk: "рухаються",
            sampleSentence: "Clouds move across the sky.",
          },
          {
            id: "v3-w4",
            text: "in",
            phonetic: "/ɪn/",
            translationUk: "в",
            sampleSentence: "We are in the park.",
          },
          {
            id: "v3-w5",
            text: "rhythm.",
            phonetic: "/ˈrɪðəm/",
            translationUk: "ритм",
            sampleSentence: "I love the rhythm of this song.",
          },
        ],
      },
      {
        start: 3.8,
        end: 7.2,
        words: [
          {
            id: "v3-w6",
            text: "Breathing",
            phonetic: "/ˈbriːðɪŋ/",
            translationUk: "дихання",
            sampleSentence: "Deep breathing reduces stress.",
          },
          {
            id: "v3-w7",
            text: "with",
            phonetic: "/wɪð/",
            translationUk: "з",
            sampleSentence: "Walk with me.",
          },
          {
            id: "v3-w8",
            text: "the",
            phonetic: "/ðə/",
            translationUk: "the (артикль)",
            sampleSentence: "The air is fresh.",
          },
          {
            id: "v3-w9",
            text: "sea",
            phonetic: "/siː/",
            translationUk: "море",
            sampleSentence: "We swam in the sea.",
          },
          {
            id: "v3-w10",
            text: "calms",
            phonetic: "/kɑːmz/",
            translationUk: "заспокоює",
            sampleSentence: "Music calms my thoughts.",
          },
          {
            id: "v3-w11",
            text: "the",
            phonetic: "/ðə/",
            translationUk: "the (артикль)",
            sampleSentence: "The night is quiet.",
          },
          {
            id: "v3-w12",
            text: "mind.",
            phonetic: "/maɪnd/",
            translationUk: "розум",
            sampleSentence: "Keep an open mind.",
          },
        ],
      },
      {
        start: 7.2,
        end: 11,
        words: [
          {
            id: "v3-w13",
            text: "Nature",
            phonetic: "/ˈneɪtʃər/",
            translationUk: "природа",
            sampleSentence: "Nature needs our protection.",
          },
          {
            id: "v3-w14",
            text: "reminds",
            phonetic: "/rɪˈmaɪndz/",
            translationUk: "нагадує",
            sampleSentence: "This photo reminds me of home.",
          },
          {
            id: "v3-w15",
            text: "us",
            phonetic: "/ʌs/",
            translationUk: "нам",
            sampleSentence: "Join us for dinner.",
          },
          {
            id: "v3-w16",
            text: "to",
            phonetic: "/tuː/",
            translationUk: "щоб",
            sampleSentence: "Try to relax.",
          },
          {
            id: "v3-w17",
            text: "slow",
            phonetic: "/sloʊ/",
            translationUk: "повільний",
            sampleSentence: "Take a slow walk.",
          },
          {
            id: "v3-w18",
            text: "down.",
            phonetic: "/daʊn/",
            translationUk: "вниз / сповільнитися",
            sampleSentence: "Slow down and enjoy the moment.",
          },
        ],
      },
    ],
    quiz: {
      prompt: "What is “хвилі” in English?",
      targetWordId: "v3-w2",
      options: [
        { id: "q3-a", label: "waves", isCorrect: true },
        { id: "q3-b", label: "trees", isCorrect: false },
        { id: "q3-c", label: "birds", isCorrect: false },
      ],
    },
  },
  {
    id: "v4-study-desk",
    title: "Focus at your desk",
    topic: "Study",
    difficulty: "B2",
    src: "https://videos.pexels.com/video-files/3195394/3195394-hd_1280_720_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/3195394/free-video-3195394.jpg?auto=compress&cs=tinysrgb&w=1280",
    likes: 567,
    cues: [
      {
        start: 0,
        end: 4,
        words: [
          {
            id: "v4-w1",
            text: "Deep",
            phonetic: "/diːp/",
            translationUk: "глибокий",
            sampleSentence: "Deep work requires silence.",
          },
          {
            id: "v4-w2",
            text: "focus",
            phonetic: "/ˈfoʊkəs/",
            translationUk: "концентрація",
            sampleSentence: "I need focus to finish this task.",
          },
          {
            id: "v4-w3",
            text: "helps",
            phonetic: "/helps/",
            translationUk: "допомагає",
            sampleSentence: "Practice helps you improve.",
          },
          {
            id: "v4-w4",
            text: "you",
            phonetic: "/juː/",
            translationUk: "тебе",
            sampleSentence: "You can do it.",
          },
          {
            id: "v4-w5",
            text: "learn",
            phonetic: "/lɜːrn/",
            translationUk: "вчитися",
            sampleSentence: "I learn English every day.",
          },
          {
            id: "v4-w6",
            text: "faster.",
            phonetic: "/ˈfæstər/",
            translationUk: "швидше",
            sampleSentence: "She runs faster than me.",
          },
        ],
      },
      {
        start: 4,
        end: 8,
        words: [
          {
            id: "v4-w7",
            text: "Remove",
            phonetic: "/rɪˈmuːv/",
            translationUk: "прибрати",
            sampleSentence: "Remove distractions from your desk.",
          },
          {
            id: "v4-w8",
            text: "distractions",
            phonetic: "/dɪˈstrækʃənz/",
            translationUk: "відволікання",
            sampleSentence: "Phones are common distractions.",
          },
          {
            id: "v4-w9",
            text: "and",
            phonetic: "/ænd/",
            translationUk: "і",
            sampleSentence: "Read and write every day.",
          },
          {
            id: "v4-w10",
            text: "stay",
            phonetic: "/steɪ/",
            translationUk: "залишатися",
            sampleSentence: "Stay curious.",
          },
          {
            id: "v4-w11",
            text: "consistent.",
            phonetic: "/kənˈsɪstənt/",
            translationUk: "послідовний",
            sampleSentence: "Consistent effort beats talent.",
          },
        ],
      },
    ],
    quiz: {
      prompt: "Translate “distractions” to Ukrainian:",
      targetWordId: "v4-w8",
      options: [
        { id: "q4-a", label: "відволікання", isCorrect: true },
        { id: "q4-b", label: "нагороди", isCorrect: false },
        { id: "q4-c", label: "уроки", isCorrect: false },
      ],
    },
  },
];

export function getWordById(video: LearningVideo, wordId: string) {
  for (const cue of video.cues) {
    const found = cue.words.find((w) => w.id === wordId);
    if (found) return found;
  }
  return undefined;
}
