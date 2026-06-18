import type { CategoryType } from "../data";
import { ROUTES } from "./routes";

export const SITE_NAME = "GenelKultur.com.tr";
export const SITE_URL = "https://genelkultur.com.tr";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const CATEGORY_LABELS: Record<CategoryType, string> = {
  genel: "Genel Kultur",
  tarih: "Tarih",
  bilim: "Bilim",
  sanat: "Sanat",
  kpss: "KPSS Tarih",
};

export const buildCanonicalUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export const SITE_LINKS = [
  { label: "Ana Sayfa", to: ROUTES.home },
  { label: "Genel Kultur Testi", to: ROUTES.categories },
  { label: "KPSS Tarih", to: ROUTES.kpssList },
  { label: "Günlük Haber", to: ROUTES.dailyList },
  { label: "Profilim", to: ROUTES.profile },
];
