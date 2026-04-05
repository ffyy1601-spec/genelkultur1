import type { CategoryType, Question } from "./types";
import { genelBatch1 } from "./questions/genel/batch1";
import { genelBatch2 } from "./questions/genel/batch2";
import { genelBatch3 } from "./questions/genel/batch3";
import { genelBatch4 } from "./questions/genel/batch4";
import { genelBatch5 } from "./questions/genel/batch5";
import { genelBatch6 } from "./questions/genel/batch6";
import { genelBatch7 } from "./questions/genel/batch7";
import { genelBatch8 } from "./questions/genel/batch8";
import { genelBatch9 } from "./questions/genel/batch9";
import { genelBatch10 } from "./questions/genel/batch10";
import { genelBatch11 } from "./questions/genel/batch11";
import { genelBatch12 } from "./questions/genel/batch12";
import { genelBatch13 } from "./questions/genel/batch13";
import { genelBatch14 } from "./questions/genel/batch14";
import { genelBatch15 } from "./questions/genel/batch15";
import { tarihBatch1 } from "./questions/tarih/batch1";
import { tarihBatch2 } from "./questions/tarih/batch2";
import { tarihBatch3 } from "./questions/tarih/batch3";
import { tarihBatch4 } from "./questions/tarih/batch4";
import { tarihBatch5 } from "./questions/tarih/batch5";
import { tarihBatch6 } from "./questions/tarih/batch6";
import { tarihBatch7 } from "./questions/tarih/batch7";
import { tarihBatch8 } from "./questions/tarih/batch8";
import { tarihBatch9 } from "./questions/tarih/batch9";
import { tarihBatch10 } from "./questions/tarih/batch10";
import { bilimBatch1 } from "./questions/bilim/batch1";
import { bilimBatch2 } from "./questions/bilim/batch2";
import { bilimBatch3 } from "./questions/bilim/batch3";
import { bilimBatch4 } from "./questions/bilim/batch4";
import { bilimBatch5 } from "./questions/bilim/batch5";
import { bilimBatch6 } from "./questions/bilim/batch6";
import { bilimBatch7 } from "./questions/bilim/batch7";
import { bilimBatch8 } from "./questions/bilim/batch8";
import { bilimBatch9 } from "./questions/bilim/batch9";
import { bilimBatch10 } from "./questions/bilim/batch10";
import { sanatBatch1 } from "./questions/sanat/batch1";
import { sanatBatch2 } from "./questions/sanat/batch2";
import { sanatBatch3 } from "./questions/sanat/batch3";
import { sanatBatch4 } from "./questions/sanat/batch4";
import { sanatBatch5 } from "./questions/sanat/batch5";
import { sanatBatch6 } from "./questions/sanat/batch6";
import { sanatBatch7 } from "./questions/sanat/batch7";
import { sanatBatch8 } from "./questions/sanat/batch8";
import { sanatBatch9 } from "./questions/sanat/batch9";
import { sanatBatch10 } from "./questions/sanat/batch10";
import { sanatBatch11 } from "./questions/sanat/batch11";

export const QUESTION_SETS: Record<CategoryType, Question[]> = {
  genel: [...genelBatch1, ...genelBatch2, ...genelBatch3, ...genelBatch4, ...genelBatch5, ...genelBatch6, ...genelBatch7, ...genelBatch8, ...genelBatch9, ...genelBatch10, ...genelBatch11, ...genelBatch12, ...genelBatch13, ...genelBatch14, ...genelBatch15],
  tarih: [...tarihBatch1, ...tarihBatch2, ...tarihBatch3, ...tarihBatch4, ...tarihBatch5, ...tarihBatch6, ...tarihBatch7, ...tarihBatch8, ...tarihBatch9, ...tarihBatch10],
  bilim: [...bilimBatch1, ...bilimBatch2, ...bilimBatch3, ...bilimBatch4, ...bilimBatch5, ...bilimBatch6, ...bilimBatch7, ...bilimBatch8, ...bilimBatch9, ...bilimBatch10],
  sanat: [...sanatBatch1, ...sanatBatch2, ...sanatBatch3, ...sanatBatch4, ...sanatBatch5, ...sanatBatch6, ...sanatBatch7, ...sanatBatch8, ...sanatBatch9, ...sanatBatch10, ...sanatBatch11],
};

export type { CategoryType, Question } from "./types";
