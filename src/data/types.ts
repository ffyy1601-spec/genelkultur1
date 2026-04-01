export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export type CategoryType = "genel" | "tarih" | "bilim" | "sanat";
