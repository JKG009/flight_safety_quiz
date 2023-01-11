// export type StyledTypes = {
//   children: React.ReactNode;
// };

export interface StyledProps {
  img?: string;
  active?: boolean;
}

export interface QuestionTypes {
  title: string;
  question: string;
  correctAnswer: string;
  wrongAnswers: string[];
  resources: string;
  flagged: boolean;
  answered: boolean;
}
