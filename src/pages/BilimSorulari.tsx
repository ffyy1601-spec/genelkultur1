import SeoLandingPage from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

export default function BilimSorulari() {
  return (
    <SeoLandingPage
      title="Bilim Sorulari | GenelKultur.com.tr"
      description="Bilim sorulari ile fizik, biyoloji, uzay ve teknoloji alanlarindaki bilgini test et."
      path={ROUTES.bilimSorulari}
      keywords={["bilim sorulari", "bilim testi", "fen quiz", "teknoloji sorulari"]}
      eyebrow="Bilim Sorulari"
      heading="Bilim Sorulari ile merakini olc ve bilgini derinlestir."
      intro="Bilim sorulari; fizik, biyoloji, kimya, astronomi ve teknoloji gibi alanlardaki temel kavramlari olcer. Bu sayfa, bilim odakli quiz deneyimine acik bir giristir."
      bullets={["Fen ve teknoloji odagi", "Temel kavramlar", "Merak uyandiran bilgi akisi"]}
      sampleQuestions={["DNA'nin cift sarmal yapisini aciklayan bilim insani ikilisi kimdir?", "Dunya Gunes etrafinda yaklasik kac gunde dolasir?", "Suyun kimyasal formulu nedir?", "Ilk yapay uydu Sputnik hangi ulke tarafindan uzaya gonderildi?"]}
      ctaLabel="Bilim Sorularini Coz"
      ctaHref={`${ROUTES.game}?category=bilim`}
    />
  );
}
