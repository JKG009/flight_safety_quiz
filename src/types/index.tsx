export interface StyledProps {
  img?: string;
  active?: boolean;
  currentQuestion?: boolean;
  status?: string;
  selected?: boolean | string | null;
}

export interface Answer {
  id: number;
  text: string;
  isCorrectAnswer: boolean;
}

export interface Question {
  title: string;
  question: string;
  resources: string;
  answers: Answer[];
}

export interface QuestionDetail {
  id: string;
  flagged: boolean;
  answer: string | null;
  answeredCorrectly: boolean | null;
}

export interface CombinedQuestionDetails {
  [index: string]: Question & QuestionDetail;
}
