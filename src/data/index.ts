import type { CategoryType, Question } from "./types";
import { genelBatch1 } from "./questions/genel/batch1";
import { genelBatch2 } from "./questions/genel/batch2";
import { genelBatch3 } from "./questions/genel/batch3";
import { genelBatch4 } from "./questions/genel/batch4";
import { genelBatch5 } from "./questions/genel/batch5";
import { genelBatch6 } from "./questions/genel/batch6";
import { tarihBatch1 } from "./questions/tarih/batch1";
import { tarihBatch2 } from "./questions/tarih/batch2";
import { tarihBatch3 } from "./questions/tarih/batch3";
import { tarihBatch4 } from "./questions/tarih/batch4";
import { tarihBatch5 } from "./questions/tarih/batch5";
import { tarihBatch6 } from "./questions/tarih/batch6";
import { bilimBatch1 } from "./questions/bilim/batch1";
import { bilimBatch2 } from "./questions/bilim/batch2";
import { bilimBatch3 } from "./questions/bilim/batch3";
import { bilimBatch4 } from "./questions/bilim/batch4";
import { bilimBatch5 } from "./questions/bilim/batch5";
import { sanatBatch1 } from "./questions/sanat/batch1";
import { sanatBatch2 } from "./questions/sanat/batch2";
import { sanatBatch3 } from "./questions/sanat/batch3";
import { sanatBatch4 } from "./questions/sanat/batch4";
import { sanatBatch5 } from "./questions/sanat/batch5";

export const QUESTION_SETS: Record<CategoryType, Question[]> = {
  genel: [...genelBatch1, ...genelBatch2, ...genelBatch3, ...genelBatch4, ...genelBatch5, ...genelBatch6],
  tarih: [...tarihBatch1, ...tarihBatch2, ...tarihBatch3, ...tarihBatch4, ...tarihBatch5, ...tarihBatch6],
  bilim: [...bilimBatch1, ...bilimBatch2, ...bilimBatch3, ...bilimBatch4, ...bilimBatch5],
  sanat: [...sanatBatch1, ...sanatBatch2, ...sanatBatch3, ...sanatBatch4, ...sanatBatch5],
};

export type { CategoryType, Question } from "./types";
