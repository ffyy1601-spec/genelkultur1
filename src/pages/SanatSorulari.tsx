import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function SanatSorulari() {
  return (
    <SeoLandingPage
      title="Sanat Sorulari | GenelKultur.com.tr"
      description="Sanat sorulari ile resim, muzik, edebiyat ve sinema bilgisini test et."
      path={ROUTES.sanatSorulari}
      keywords={["sanat sorulari", "sanat testi", "muzik sorulari", "edebiyat quiz"]}
      eyebrow="Sanat Sorulari"
      heading="Sanat Sorulari ile kultur birikimini ve estetik hafizani test et."
      intro="Sanat sorulari; resimden muzige, edebiyattan sinemaya kadar farkli disiplinlerdeki temel isimleri ve eserleri hatirlamayi olcer."
      bullets={["Resim ve heykel", "Muzik ve edebiyat", "Sinema ve kultur tarihi"]}
      sampleQuestions={["Guernica tablosu hangi ressama aittir?", "Suclu ve Ceza romaninin yazari kimdir?", "Dort Mevsim eseriyle bilinen besteci kimdir?", "Oscar odullerini duzenleyen kurumun tam adi nedir?"]}
      ctaLabel="Sanat Sorularini Coz"
      ctaHref={`${ROUTES.game}?category=sanat`}
    />
  );
}
