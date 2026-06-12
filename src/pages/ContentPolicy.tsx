import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

const policySections = [
  {
    title: "İçerik nasıl hazırlanıyor?",
    text: "Soru ve açıklama seçimleri; genel kültür, tarih, bilim ve sanat gibi başlıklarında temel bilgi doğruluğu, okunabilirlik ve quiz deneyimine uygunluk dikkate alınarak derlenir.",
  },
  {
    title: "Doğruluk kontrolü nasıl yapılıyor?",
    text: "Özellikle tarih, bilim ve sanat odaklı içeriklerde yaygın kabul gören kaynaklar, temel ansiklopedik referanslar ve kurumsal bilgi sayfaları esas alınır. Şüpheli veya çelişkili maddeler gözden geçirilir.",
  },
  {
    title: "Hatalar nasıl düzeltiliyor?",
    text: "Ziyaretçiler iletişim sayfası üzerinden hata bildirimi yapabilir. Gelen bildirimler önce doğrulanır, ardından ilgili soru, cevap veya açıklama güncellenir.",
  },
  {
    title: "Tekrarlayan veya zayıf içerik nasıl yönetiliyor?",
    text: "İçerik katmanında benzer yapıdaki sayfalar olabildiğince farklı açıklamalarla zenginleştirilir. Yeterli değer sunmayan bölümler güçlendirilir veya yeniden düzenlenir.",
  },
];

export default function ContentPolicy() {
  return (
    <PageLayout>
      <Seo
        title="İçerik Politikası | GenelKultur.com.tr"
        description="GenelKultur.com.tr içerik politikası. Soruların nasıl hazırlandığı, nasıl güncellendiği ve hata bildirimlerinin nasıl ele alındığı hakkında bilgi alın."
        path={ROUTES.contentPolicy}
        keywords={["içerik politikası", "editör politikası", "genel kültür içerik doğruluğu"]}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">İçerik Politikası</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            İçerik kalitesini, doğruluğunu ve düzeltme sürecini açık şekilde paylaşıyoruz.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            GenelKultur.com.tr, quiz deneyimini hızlı tutarken aynı zamanda görünür içerik katmanında
            açıklamalı, okunabilir ve güven veren sayfalar sunmayı hedefler. Bu sayfa, soru ve cevap
            içeriklerinin nasıl yönetildiğini özetler.
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
          <h2 className="text-2xl font-black text-on-surface">İletişim ve Hata Bildirimi</h2>
          <p className="mt-3 text-sm leading-7 text-on-surface-variant">
            Bir soru metninde hata, eksik bilgi veya anlatım sorunu fark ederseniz iletişim sayfasındaki
            adres üzerinden bize ulaşabilirsiniz. Doğrulanan bildirimler, sonraki içerik güncelleme
            döngüsünde ele alınır.
          </p>
        </section>
      </main>
    </PageLayout>
  );
}
