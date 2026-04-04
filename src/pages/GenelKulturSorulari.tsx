import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function GenelKulturSorulari() {
  return (
    <SeoLandingPage
      title="Genel Kultur Sorulari | GenelKultur.com.tr"
      description="Genel kultur sorulari ile bilgini test et. Kisa aciklamalar, ornek sorular ve hizli quiz girisi burada."
      path={ROUTES.genelKulturSorulari}
      keywords={["genel kultur sorulari", "genel kultur", "bilgi yarismasi sorulari", "quiz sorulari"]}
      eyebrow="Genel Kultur Sorulari"
      heading="Genel Kultur Sorulari ile bilgini genis bir yelpazede test et."
      intro="Genel kultur sorulari; tarih, cografya, bilim, sanat, spor ve guncel bilgi gibi farkli alanlardan dengeli bir bilgi birikimi ister. Bu sayfa, o deneyime hizli ve net bir giris sunar."
      bullets={["Genis konu kapsami", "Dengeli soru akisi", "Hizli tekrar imkani"]}
      sampleQuestions={["Dunyanin en buyuk okyanusu hangisidir?", "Birlesmis Milletler hangi yil kuruldu?", "Ampulu gelistiren mucit olarak en cok kim bilinir?", "Mona Lisa tablosunun ressami kimdir?"]}
      ctaLabel="Genel Kultur Sorularini Coz"
      ctaHref={`${ROUTES.game}?category=genel`}
    />
  );
}
