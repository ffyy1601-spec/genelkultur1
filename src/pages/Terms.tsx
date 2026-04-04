import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Terms() {
  return (
    <PageLayout>
      <Seo
        title="Kullanim Kosullari | GenelKultur.com.tr"
        description="GenelKultur.com.tr kullanim kosullari ve site iceriginin nasil kullanilabilecegine dair temel bilgiler."
        path={ROUTES.terms}
        keywords={["kullanim kosullari", "genel kultur kosullar", "site kullanimi"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Kullanim Kosullari</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p>Bu site bilgilendirici ve eglence amacli bir bilgi yarismasi deneyimi sunar.</p>
          <p>Icerikler ozenle hazirlanir ancak tum bilgilerin her zaman hatasiz olacagi garanti edilmez. Tespit edilen hatalar iletisim kanali uzerinden bildirilebilir.</p>
          <p>Site tasarimi, icerik duzeni ve marka unsurlari izinsiz bicimde kopyalanmamali veya yeniden yayinlanmamali.</p>
          <p>Siteyi kotuye kullanmaya, hizmeti bozacak otomasyonlara veya icerik manipulasyonuna yonelik girisimler engellenebilir.</p>
        </div>
      </main>
    </PageLayout>
  );
}
