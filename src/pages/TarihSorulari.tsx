import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function TarihSorulari() {
  return (
    <SeoLandingPage
      title="Tarih Soruları | GenelKultur.com.tr"
      description="Tarih soruları ile medeniyetler, savaşlar ve dönüm noktalarına dair bilginizi test edin."
      path={ROUTES.tarihSorulari}
      keywords={["tarih sorulari", "tarih testi", "tarih quiz", "bilgi yarismasi tarih"]}
      eyebrow="Tarih Soruları"
      heading="Tarih Soruları ile geçmişi daha dikkatli okumayı deneyin."
      intro="Tarih soruları; olayların nedenlerini, sonuçlarını ve kronolojik akışlarını anlamayı ölçer. Bu sayfa, tarih meraklıları için odaklı bir giriş noktasıdır."
      bullets={["Kronoloji odağı", "Medeniyet ve imparatorluklar", "Savaş ve dönüm noktaları"]}
      sampleQuestions={["İstanbul hangi yıl fethedildi?", "Sanayi Devrimi ilk olarak hangi ülkede başladı?", "Kurtuluş Savaşı sırasında Sakarya Meydan Muharebesi hangi yıl oldu?", "Roma İmparatorluğu ikiye hangi dönemde ayrıldı?"]}
      ctaLabel="Tarih Sorularını Çöz"
      ctaHref={`${ROUTES.game}?category=tarih`}
    />
  );
}
