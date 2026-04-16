import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

const policySections = [
  {
    title: "Icerik nasil hazirlaniyor?",
    text: "Soru ve aciklama secimleri; genel kultur, tarih, bilim ve sanat gibi basliklarda temel bilgi dogrulugu, okunabilirlik ve quiz deneyimine uygunluk dikkate alinarak derlenir.",
  },
  {
    title: "Dogruluk kontrolu nasil yapiliyor?",
    text: "Ozellikle tarih, bilim ve sanat odakli iceriklerde yaygin kabul goren kaynaklar, temel ansiklopedik referanslar ve kurumsal bilgi sayfalari esas alinir. Supheli veya celiskili maddeler gozden gecirilir.",
  },
  {
    title: "Hatalar nasil duzeltiliyor?",
    text: "Ziyaretciler iletisim sayfasi uzerinden hata bildirimi yapabilir. Gelen bildirimler once dogrulanir, ardindan ilgili soru, cevap veya aciklama guncellenir.",
  },
  {
    title: "Tekrarlayan veya zayif icerik nasil yonetiliyor?",
    text: "Icerik katmaninda benzer yapidaki sayfalar olabildigince farkli aciklamalarla zenginlestirilir. Yeterli deger sunmayan bolumler guclendirilir veya yeniden duzenlenir.",
  },
];

export default function ContentPolicy() {
  return (
    <PageLayout>
      <Seo
        title="Icerik Politikasi | GenelKultur.com.tr"
        description="GenelKultur.com.tr icerik politikasi. Sorularin nasil hazirlandigi, nasil guncellendigi ve hata bildirimlerinin nasil ele alindigi hakkinda bilgi al."
        path={ROUTES.contentPolicy}
        keywords={["icerik politikasi", "editor politikasi", "genel kultur icerik dogrulugu"]}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Icerik Politikasi</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Icerik kalitesini, dogrulugunu ve duzeltme surecini acik sekilde paylasiyoruz.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            GenelKultur.com.tr, quiz deneyimini hizli tutarken ayni zamanda gorunur icerik katmaninda
            aciklamali, okunabilir ve guven veren sayfalar sunmayi hedefler. Bu sayfa, soru ve cevap
            iceriklerinin nasil yonetildigini ozetler.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {policySections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
              <h2 className="text-xl font-bold text-on-surface">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
          <h2 className="text-2xl font-black text-on-surface">Iletisim ve hata bildirimi</h2>
          <p className="mt-3 text-sm leading-7 text-on-surface-variant">
            Bir soru metninde hata, eksik bilgi veya anlatim sorunu fark edersen iletisim sayfasindaki
            adres uzerinden bize ulasabilirsin. Dogrulanan bildirimler, sonraki icerik guncelleme
            dongusunde ele alinir.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
