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

// GitHub Pages, klasör tabanlı sayfaları her zaman sonunda "/" olacak şekilde
// servis eder (örn. /genel-kultur-testi -> 301 -> /genel-kultur-testi/).
// Bu yüzden canonical URL'ler de slash'lı üretilir; aksi halde Google aynı
// sayfayı iki ayrı URL sanır ve sıralama gücü bölünür.
export const buildCanonicalUrl = (path: string) => {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${SITE_URL}${normalized}`;
};

export const SITE_LINKS = [
  { label: "Ana Sayfa", to: ROUTES.home },
  { label: "Genel Kültür Testi", to: ROUTES.categories },
  { label: "Rehberler", to: ROUTES.guides },
  { label: "KPSS Tarih", to: ROUTES.kpssList },
  { label: "Günlük Haber", to: ROUTES.dailyList },
  { label: "Profilim", to: ROUTES.profile },
];
