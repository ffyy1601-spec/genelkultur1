import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function About() {
  return (
    <PageLayout>
      <Seo
        title="Hakkimizda | GenelKultur.com.tr"
        description="GenelKultur.com.tr hakkinda bilgi al. Genel kultur sorulari ve bilgi yarismasi deneyimini nasil tasarladigimizi kesfet."
        path={ROUTES.about}
        keywords={["hakkimizda", "genel kultur sitesi", "bilgi yarismasi platformu"]}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hakkimizda</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Bilgiyi hizli, temiz ve yeniden oynanabilir bir deneyime donusturmek icin tasarlandi.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            GenelKultur.com.tr, uyelik zorunlulugu olmadan saniyeler icinde baslayabilecegin modern
            bir genel kultur testi deneyimi sunar. Amacimiz sadece puan toplatmak degil; ziyaretciye
            kaliteli bir bilgi yarismasi akisi ve tekrar gelmek isteyecegi bir platform sunmaktir.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <h2 className="mb-3 text-xl font-bold text-on-surface">Hizli Baslangic</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Beklemeden kategori secilir ve test baslatilir. Bu sade akis kullanici deneyimini guclendirir.
            </p>
          </article>
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <h2 className="mb-3 text-xl font-bold text-on-surface">Net Icerik Mimarisi</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Ana sayfa, kategori, yasal ve iletisim sayfalari ile arama motorlarina profesyonel bir yapi sunulur.
            </p>
          </article>
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <h2 className="mb-3 text-xl font-bold text-on-surface">Teknik SEO Temeli</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Canonical, sitemap, robots, yapisal veri ve sosyal meta etiketleri ile site guclendirildi.
            </p>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
