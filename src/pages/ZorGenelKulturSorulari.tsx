import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function ZorGenelKulturSorulari() {
  return (
    <SeoLandingPage
      title="Zor Genel Kültür Soruları | GenelKultur.com.tr"
      description="Zor genel kültür soruları ile kendinizi daha ileri seviyede deneyin. Daha seçici ve zorlayıcı quiz deneyimi için bu sayfayı keşfedin."
      path={ROUTES.zorGenelKulturSorulari}
      keywords={["zor genel kultur sorulari", "zor quiz sorulari", "ileri seviye genel kultur", "genel kultur testi"]}
      eyebrow="Zor Genel Kültür"
      heading="Zor Genel Kültür Soruları ile daha seçici bir oyuna girin."
      intro="Zor genel kültür soruları, klasik bilgi sorularından bir adım öteye geçer. Detay bilgisi, dikkat ve daha geniş bir kültür birikimi gerektirir."
      bullets={["İleri seviye deneme", "Daha seçici sorular", "Bilgi derinliği ölçümü"]}
      sampleQuestions={["Dünyanın en eski üniversitesi olarak kabul edilen kurum hangisidir?", "Nobel Edebiyat Ödülü alan ilk Türk yazar kimdir?", "Rönesans döneminde Floransa hangi aile ile özdeşleşmiştir?", "Işık hızının vakumdaki yaklaşık değeri nedir?"]}
      ctaLabel="Zor Sorulara Geç"
      ctaHref={`${ROUTES.game}?category=genel`}
    />
  );
}
