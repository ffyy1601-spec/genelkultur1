import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { guides } from "../data/guides";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export default function GuideList() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Genel Kültür Rehberi",
      url: `${SITE_URL}${ROUTES.guides}`,
      inLanguage: "tr-TR",
      description:
        "Genel kültürünüzü geliştirmek, etkili çalışmak ve bilgi yarışmalarına hazırlanmak için editör ekibimizin hazırladığı özgün rehberler.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Genel Kültür Rehberi", item: `${SITE_URL}${ROUTES.guides}` },
      ],
    },
  ];

  return (
    <PageLayout>
      <Seo
        title="Genel Kültür Rehberi: Çalışma, Hafıza ve Hazırlık Rehberleri | GenelKultur.com.tr"
        description="Genel kültürünüzü geliştirmek, etkili çalışmak ve bilgi yarışmalarına hazırlanmak için özgün, ayrıntılı rehberler. Editör ekibimiz tarafından hazırlandı."
        path={ROUTES.guides}
        keywords={["genel kultur rehberi", "genel kultur calisma", "hafiza teknikleri", "bilgi yarismasi hazirlik"]}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-on-surface">Genel Kültür Rehberi</span>
          </div>
        </nav>

        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Rehberler</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            Genel Kültür Rehberi
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            Genel kültürünüzü kalıcı biçimde geliştirmek, daha verimli çalışmak ve bilgi yarışmalarına
            hazırlanmak için editör ekibimizin hazırladığı özgün ve ayrıntılı rehberler. Her yazı,
            uygulanabilir yöntemler ve pratik ipuçları sunar.
          </p>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              to={`/rehber/${guide.slug}`}
              className="group flex flex-col rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.92),rgba(8,20,38,0.94))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                <span className="material-symbols-outlined text-sm">menu_book</span>
                {guide.category}
                <span className="text-on-surface-variant/50">· {guide.readingMinutes} dk okuma</span>
              </div>
              <h2 className="mt-4 text-2xl font-black leading-snug text-on-surface group-hover:text-primary transition-colors">
                {guide.heading}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-on-surface-variant">{guide.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary">
                Rehberi Oku
                <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
