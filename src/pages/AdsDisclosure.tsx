import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function AdsDisclosure() {
  return (
    <PageLayout>
      <Seo
        title="Reklam Bilgilendirmesi | GenelKultur.com.tr"
        description="GenelKultur.com.tr reklam bilgilendirmesi. Reklam gosterimi, ucuncu taraf reklam teknolojileri ve kullanici deneyimi ilkeleri hakkinda bilgi al."
        path={ROUTES.adsDisclosure}
        keywords={["reklam bilgilendirmesi", "ads disclosure", "adsense bilgilendirme"]}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-5xl">Reklam Bilgilendirmesi</h1>
        <div className="space-y-6 text-sm leading-7 text-on-surface-variant">
          <p>GenelKultur.com.tr, ziyaretci deneyimini bozmadan surdurulebilir bir yayin yapisi kurmak amaciyla reklam teknolojilerinden yararlanabilir.</p>
          <p>Reklamlar; sayfa icerigini taklit edecek, kullaniciyi yaniltacak veya quiz akisinda yanlis tiklamaya yol acacak sekilde konumlandirilmaz.</p>
          <p>Ucuncu taraf reklam saglayicilari, reklam sunumu ve olcumleme amaciyla kendi teknolojilerini kullanabilir. Bu kapsamdaki veri isleme surecleri, ilgili saglayicilarin politikalarina tabi olabilir.</p>
          <p>Reklam gostermeye baslandiginda, cerez ve gizlilik metinleri de gerekli oldugunda guncellenir; kullaniciya daha net tercih yonetimi sunulur.</p>
        </div>
      </main>
    </PageLayout>
  );
}
