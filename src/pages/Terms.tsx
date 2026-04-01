import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";

export default function Terms() {
  return (
    <PageLayout>
      <Helmet>
        <title>Kullanım Koşulları - Genelkultur.com</title>
        <meta
          name="description"
          content="Genelkultur.com kullanım koşulları ve site içeriğinin nasıl kullanılabileceğine dair temel bilgiler."
        />
      </Helmet>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Kullanım Koşulları</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p>Bu site bilgilendirici ve eğlence amaçlı bir bilgi yarışması deneyimi sunar.</p>
          <p>İçerikler özenle hazırlanır ancak tüm bilgilerin her zaman hatasız olacağı garanti edilmez. Tespit edilen hatalar iletişim kanalı üzerinden bildirilebilir.</p>
          <p>Site tasarımı, içerik düzeni ve marka unsurları izinsiz biçimde kopyalanmamalıdır.</p>
          <p>Siteyi kötüye kullanmaya, hizmeti bozacak otomasyonlara veya içerik manipülasyonuna yönelik girişimler engellenebilir.</p>
        </div>
      </main>
    </PageLayout>
  );
}
