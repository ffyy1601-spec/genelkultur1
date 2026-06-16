import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function GenelKulturBilgiYarismasi() {
  return (
    <SeoLandingPage
      title="Genel Kültür Bilgi Yarışması Oyunu - Kendini Dene | GenelKultur.com.tr"
      description="Online genel kültür bilgi yarışması ile hemen kendini dene. Farklı konulardan binlerce soru ile seviyeni test et, puanını öğren ve yarışmaya başla!"
      path={ROUTES.genelKulturBilgiYarismasi}
      keywords={[
        "genel kültür bilgi yarışması",
        "bilgi yarışması",
        "genel kültür yarışması",
        "bilgi testi çöz",
        "genel kültür soruları",
        "online bilgi yarışması"
      ]}
      eyebrow="Genel Kültür Bilgi Yarışması"
      heading="Bilgini Sına, Seviyeni Gör ve Yarışmaya Katıl"
      intro="Genel kültür bilgi yarışması; tarih, coğrafya, bilim, sanat ve edebiyat gibi pek çok alanda bilgini test etmenin en eğlenceli yoludur. Süreli ve puanlı bu yarışma ile kendi sınırlarını zorlayabilir, genel kültür seviyeni anında ölçebilirsin."
      bullets={[
        "İnteraktif Soru Akışı",
        "Süre Sınırı ve Skor",
        "Geniş Soru Havuzu"
      ]}
      sampleQuestions={[
        "Fatih Sultan Mehmet İstanbul'u fethettiğinde kaç yaşındaydı? (21)",
        "Periyodik tabloda 'Au' sembolü hangi elementi temsil eder? (Altın)",
        "İstiklal Marşı milli marşımız olarak hangi yıl kabul edilmiştir? (1921)",
        "Dünyanın en derin noktası olan Mariana Çukuru hangi okyanustadır? (Büyük Okyanus)"
      ]}
      ctaLabel="Yarışmayı Başlat"
      ctaHref={`${ROUTES.game}?category=genel`}
    />
  );
}
