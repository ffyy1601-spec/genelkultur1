export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export type CategoryType = "genel" | "tarih" | "bilim" | "sanat" | "kpss";
