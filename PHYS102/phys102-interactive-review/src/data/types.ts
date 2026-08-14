export interface DerivationStep {
  label: string;
  math?: string;
  note?: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  explain: string;
}

export interface ChapterMeta {
  id: string;
  number: number;
  title: string;
  color: string; // accent for this chapter
}

export interface TopicMeta {
  id: string;
  chapterId: string;
  title: string;
  featured: boolean; // true for the 10 fully-built topics
}
