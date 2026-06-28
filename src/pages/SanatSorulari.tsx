import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function SanatSorulari() {
  return (
    <SeoLandingPage
      title="Sanat Soruları | GenelKultur.com.tr"
      description="Sanat soruları ile resim, müzik, edebiyat ve sinema bilginizi test edin."
      path={ROUTES.sanatSorulari}
      keywords={["sanat sorulari", "sanat testi", "muzik sorulari", "edebiyat quiz"]}
      eyebrow="Sanat Soruları"
      heading="Sanat Soruları ile kültür birikiminizi ve estetik hafızanızı test edin."
      intro="Sanat soruları; resimden müziğe, edebiyattan sinemaya kadar farklı disiplinlerdeki temel isimleri ve eserleri hatırlamayı ölçer."
      bullets={["Resim ve heykel", "Müzik ve edebiyat", "Sinema ve kültür tarihi"]}
      sampleQuestions={["Guernica tablosu hangi ressama aittir?", "Suç ve Ceza romanının yazarı kimdir?", "Dört Mevsim eseriyle bilinen besteci kimdir?", "Oscar ödüllerini düzenleyen kurumun tam adı nedir?"]}
      ctaLabel="Sanat Sorularını Çöz"
      ctaHref={`${ROUTES.game}?category=sanat`}
    />
  );
}
