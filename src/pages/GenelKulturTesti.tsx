import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function GenelKulturTesti() {
  return (
    <SeoLandingPage
      title="Genel Kultur Testi | GenelKultur.com.tr"
      description="Genel kultur testi ile seviyeni olc. Hizli, modern ve mobil uyumlu quiz deneyimiyle hemen basla."
      path={ROUTES.genelKulturTesti}
      keywords={["genel kultur testi", "genel kultur quiz", "genel kultur sorulari", "bilgi yarismasi"]}
      eyebrow="Genel Kultur Testi"
      heading="Genel Kultur Testi ile seviyeni hizli ve net sekilde olc."
      intro="Genel kultur testi, farkli alanlardan gelen bilgi birikimini tek akista olcmenin en pratik yollarindan biridir. Bu sayfa, oyuna gecmeden once aradigin test deneyimini ozetler."
      bullets={["Mobil uyumlu quiz", "Hizli baslangic", "Skor takibi"]}
      sampleQuestions={["Turkiye'nin baskenti neresidir?", "Periyodik tabloda O sembolu hangi elementi gosterir?", "Romeo ve Juliet eserinin yazari kimdir?", "Everest hangi dag sirasi icindedir?"]}
      ctaLabel="Genel Kultur Testine Basla"
      ctaHref={`${ROUTES.game}?category=genel`}
    />
  );
}
