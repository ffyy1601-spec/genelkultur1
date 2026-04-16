import type { CategoryType } from "../data";
import { QUESTION_SETS } from "../data";
import { ROUTES } from "./routes";

export const SITE_NAME = "GenelKultur.com.tr";
export const SITE_URL = "https://genelkultur.com.tr";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;

export const CATEGORY_LABELS: Record<CategoryType, string> = {
  genel: "Genel Kultur",
  tarih: "Tarih",
  bilim: "Bilim",
  sanat: "Sanat",
};

export const categoryQuestionCount = (category: CategoryType) => QUESTION_SETS[category].length;

export const buildCanonicalUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export const SITE_LINKS = [
  { label: "Ana Sayfa", to: ROUTES.home },
  { label: "Genel Kultur Testi", to: ROUTES.categories },
  { label: "Sorular ve Cevaplar", to: ROUTES.contentHub },
  { label: "Icerik Politikasi", to: ROUTES.contentPolicy },
  { label: "Hakkimizda", to: ROUTES.about },
  { label: "Iletisim", to: ROUTES.contact },
];
