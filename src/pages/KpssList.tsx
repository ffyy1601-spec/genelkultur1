import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { kpssTopics } from "../data/kpssCatalog";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "KPSS Tarih Konuları ve Testleri",
  url: `${SITE_URL}${ROUTES.kpssList}`,
  inLanguage: "tr-TR",
  description: "KPSS Tarih müfredatına uygun 10 ana konu başlığı, ünite özetleri ve online test çözme sayfası.",
};

export default function KpssList() {
  return (
    <PageLayout>
      <Seo
        title="KPSS Tarih Konuları ve Soru Çözme Testleri | GenelKultur.com.tr"
        description="KPSS Tarih sınavına hazırlananlar için ünite ünite ayrılmış konu başlıkları. Dilediğin konuyu seç, testleri çöz ve hemen kendini sına."
        path={ROUTES.kpssList}
        keywords={[
          "kpss tarih konuları",
          "kpss tarih soru çöz",
          "kpss tarih testi",
          "tarih konu başlıkları",
          "kpss hazırlık",
          "islamiyet öncesi türk tarihi kpss"
        ]}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        {/* Intro Section */}
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Özel Kategori</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            KPSS Tarih Konuları
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            ÖSYM sınav formatına tam uyumlu soru havuzumuzla ünite bazlı kendinizi test edin. 
            Aşağıdan dilediğiniz konu başlığını seçerek 15 soruluk özel hazırlanan sınav turlarına katılabilirsiniz.
          </p>
        </section>

        {/* Subtopic Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
          {kpssTopics.map((topic, index) => {
            const bgImage = `/images/${topic.id}.webp`;
            return (
              <div
                key={topic.id}
                className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/10 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${bgImage})` }}
                ></div>
                {/* Overlays */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,41,0.25),rgba(4,19,41,0.92))]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,202,80,0.12),transparent_42%)] opacity-80"></div>

                {/* Content Top */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-primary backdrop-blur-md">
                      <span className="material-symbols-outlined text-2xl">menu_book</span>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-black text-white/80 backdrop-blur-sm">
                      Ünite {index + 1}
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-black text-white leading-tight group-hover:text-primary transition-colors duration-300">
                    {topic.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/78 line-clamp-3">
                    {topic.intro}
                  </p>
                </div>

                {/* Content Bottom */}
                <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
                  <p className="text-[11px] font-black uppercase tracking-widest text-primary/90">Önemli Sınav Odakları</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {topic.studyFocus.map((focus, i) => (
                      <span key={i} className="text-[11px] rounded-lg bg-white/5 px-2.5 py-1 text-white/70 backdrop-blur-sm border border-white/5">
                        {focus}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      to={`${ROUTES.game}?category=kpss&topic=${topic.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-black uppercase tracking-wider text-on-primary hover:bg-white hover:text-black transition-all shadow-md"
                    >
                      Hemen Teste Başla
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Quick Return */}
        <section className="mt-12 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-black text-on-surface">Diğer Kategoriler</h2>
              <p className="mt-2 text-sm text-on-surface-variant">
                KPSS dışındaki genel kültür, tarih, bilim veya sanat testlerimizi de çözebilirsiniz.
              </p>
            </div>
            <Link
              to={ROUTES.categories}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-surface-container-low/70 px-5 py-3 text-sm font-bold text-on-surface transition-all hover:-translate-y-0.5 hover:border-primary/30"
            >
              Kategori Seçimine Dön
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
