export type Test = {
  id: number;
  questions: Question[];
};

export type Question = {
  id: number;
  question: string;
  questionNumber: number;
  imagePath: string;
  answer: number;
  testId: number;
};
