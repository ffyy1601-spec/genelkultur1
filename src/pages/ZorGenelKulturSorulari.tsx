import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function ZorGenelKulturSorulari() {
  return (
    <SeoLandingPage
      title="Zor Genel Kultur Sorulari | GenelKultur.com.tr"
      description="Zor genel kultur sorulari ile kendini daha ileri seviyede dene. Daha secici ve zorlayici quiz deneyimi icin bu sayfayi kesfet."
      path={ROUTES.zorGenelKulturSorulari}
      keywords={["zor genel kultur sorulari", "zor quiz sorulari", "ileri seviye genel kultur", "genel kultur testi"]}
      eyebrow="Zor Genel Kultur"
      heading="Zor Genel Kultur Sorulari ile daha secici bir oyuna gir."
      intro="Zor genel kultur sorulari, klasik bilgi sorularindan bir adim oteye gecer. Detay bilgisi, dikkat ve daha genis bir kultur birikimi gerektirir."
      bullets={["Ileri seviye deneme", "Daha secici sorular", "Bilgi derinligi olcumu"]}
      sampleQuestions={["Dunyanin en eski universitesi olarak kabul edilen kurum hangisidir?", "Nobel Edebiyat Odulu alan ilk Turk yazar kimdir?", "Ronesans doneminde Floransa hangi aile ile ozdeslesmistir?", "Isik hizinin vakumdaki yaklasik degeri nedir?"]}
      ctaLabel="Zor Sorulara Gec"
      ctaHref={`${ROUTES.game}?category=genel`}
    />
  );
}
