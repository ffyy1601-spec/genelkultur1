import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function TarihSorulari() {
  return (
    <SeoLandingPage
      title="Tarih Sorulari | GenelKultur.com.tr"
      description="Tarih sorulari ile medeniyetler, savaslar ve donum noktalarina dair bilgini test et."
      path={ROUTES.tarihSorulari}
      keywords={["tarih sorulari", "tarih testi", "tarih quiz", "bilgi yarismasi tarih"]}
      eyebrow="Tarih Sorulari"
      heading="Tarih Sorulari ile gecmisi daha dikkatli okumayi dene."
      intro="Tarih sorulari; olaylarin nedenlerini, sonuclarini ve kronolojik akislarini anlamayi olcer. Bu sayfa, tarih meraklilari icin odakli bir giris noktasidir."
      bullets={["Kronoloji odagi", "Medeniyet ve imparatorluklar", "Savas ve donum noktalari"]}
      sampleQuestions={["Istanbul hangi yil fethedildi?", "Sanayi Devrimi ilk olarak hangi ulkede basladi?", "Kurtulus Savasi sirasinda Sakarya Meydan Muharebesi hangi yil oldu?", "Roma Imparatorlugu ikiye hangi donemde ayrildi?"]}
      ctaLabel="Tarih Sorularini Coz"
      ctaHref={`${ROUTES.game}?category=tarih`}
    />
  );
}
