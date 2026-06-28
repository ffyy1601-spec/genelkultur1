import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function BilimSorulari() {
  return (
    <SeoLandingPage
      title="Bilim Soruları | GenelKultur.com.tr"
      description="Bilim soruları ile fizik, biyoloji, uzay ve teknoloji alanlarındaki bilginizi test edin."
      path={ROUTES.bilimSorulari}
      keywords={["bilim sorulari", "bilim testi", "fen quiz", "teknoloji sorulari"]}
      eyebrow="Bilim Soruları"
      heading="Bilim Soruları ile merakınızı ölçün ve bilginizi derinleştirin."
      intro="Bilim soruları; fizik, biyoloji, kimya, astronomi ve teknoloji gibi alanlardaki temel kavramları ölçer. Bu sayfa, bilim odaklı quiz deneyimine açık bir giriştir."
      bullets={["Fen ve teknoloji odağı", "Temel kavramlar", "Merak uyandıran bilgi akışı"]}
      sampleQuestions={["DNA'nın çift sarmal yapısını açıklayan bilim insanı ikilisi kimdir?", "Dünya, Güneş etrafında yaklaşık kaç günde dolaşır?", "Suyun kimyasal formülü nedir?", "İlk yapay uydu Sputnik hangi ülke tarafından uzaya gönderildi?"]}
      ctaLabel="Bilim Sorularını Çöz"
      ctaHref={`${ROUTES.game}?category=bilim`}
    />
  );
}
