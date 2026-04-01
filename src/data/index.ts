import { tarihSorulari } from "./tarih";
import { genelSorulari } from "./genel";
import { bilimSorulari } from "./bilim";
import { sanatSorulari } from "./sanat";

export const CATEGORIES = {
  tarih: tarihSorulari,
  genel: genelSorulari,
  bilim: bilimSorulari,
  sanat: sanatSorulari
};

export type CategoryType = keyof typeof CATEGORIES;
