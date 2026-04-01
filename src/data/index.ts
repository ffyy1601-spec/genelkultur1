import type { CategoryType, Question } from "./types";
import { genelBatch1 } from "./questions/genel/batch1";
import { genelBatch2 } from "./questions/genel/batch2";
import { genelBatch3 } from "./questions/genel/batch3";
import { tarihBatch1 } from "./questions/tarih/batch1";
import { tarihBatch2 } from "./questions/tarih/batch2";
import { tarihBatch3 } from "./questions/tarih/batch3";
import { bilimBatch1 } from "./questions/bilim/batch1";
import { bilimBatch2 } from "./questions/bilim/batch2";
import { bilimBatch3 } from "./questions/bilim/batch3";
import { sanatBatch1 } from "./questions/sanat/batch1";
import { sanatBatch2 } from "./questions/sanat/batch2";
import { sanatBatch3 } from "./questions/sanat/batch3";

export const QUESTION_SETS: Record<CategoryType, Question[]> = {
  genel: [...genelBatch1, ...genelBatch2, ...genelBatch3],
  tarih: [...tarihBatch1, ...tarihBatch2, ...tarihBatch3],
  bilim: [...bilimBatch1, ...bilimBatch2, ...bilimBatch3],
  sanat: [...sanatBatch1, ...sanatBatch2, ...sanatBatch3],
};

export type { CategoryType, Question } from "./types";
