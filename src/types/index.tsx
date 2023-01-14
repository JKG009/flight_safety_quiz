// export type StyledTypes = {
//   children: React.ReactNode;
// };

export interface StyledProps {
  img?: string;
  active?: boolean;
  currentQuestion?: boolean;
  status?: string;
  selected?: boolean;
}

export interface Answers {
  id: number;
  text: string;
  isCorrectAnswer: boolean;
}

export interface QuestionTypes {
  title: string;
  question: string;
  resources: string;
  answers: Answers[];
}
