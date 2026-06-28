import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function GenelKulturTesti() {
  return (
    <SeoLandingPage
      title="Genel Kültür Testi 2026 - 5000+ Soru, Anında Puan | Ücretsiz Çöz"
      description="Genel kültür testi çöz, seviyeni anında öğren! 5000+ güncel soru, tarih, bilim, sanat ve coğrafyadan; üyeliksiz, ücretsiz ve mobil uyumlu. Hemen başla, puanını gör."
      path={ROUTES.genelKulturTesti}
      keywords={["genel kultur testi", "genel kultur testi 2026", "genel kultur test", "genel kultur testleri", "genel kultur quiz", "kultur testi"]}
      eyebrow="Genel Kültür Testi"
      heading="Genel Kültür Testi: Seviyeni Anında Ölç"
      intro="Genel kültür testi, bilgini eğlenceli ve hızlı bir şekilde sınamanın en iyi yoludur. Tarih, coğrafya, bilim, sanat ve güncel bilgilerden seçilen 5000'den fazla soruyla seviyeni anında ölçebilirsin. Üyelik yok, kayıt yok: kategori seç, ister 10 soruluk hızlı tur ister 50 veya 100 soruluk maraton çöz, test sonunda doğru-yanlış dağılımını ve başarı oranını gör. Sorular her seferinde karışık geldiği için testi tekrar çözdüğünde yeni sorularla karşılaşırsın."
      bullets={["5000+ Güncel Soru", "Üyeliksiz ve Ücretsiz", "Anında Puan ve Açıklama"]}
      sampleQuestions={["Türkiye'nin başkenti neresidir?", "Periyodik tabloda 'O' sembolü hangi elementi gösterir?", "Mona Lisa tablosunun ressamı kimdir?", "Dünyanın en büyük okyanusu hangisidir?", "İstiklal Marşı'nın şairi kimdir?", "Güneş Sistemi'ndeki en büyük gezegen hangisidir?"]}
      ctaLabel="Genel Kültür Testine Başla"
      ctaHref={`${ROUTES.game}?category=genel`}
    />
  );
}
