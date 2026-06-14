import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { dailyQuizzes } from "../data/dailyContent";
import { ROUTES } from "../lib/routes";
import { getSimulatedViews, formatViews } from "../lib/viewCounter";

export default function DailyList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Kategorilere göre ikon seçimi
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "tarih": return "history_edu";
      case "bilim": return "science";
      case "sanat": return "palette";
      case "gundem": return "gavel";
      case "teknoloji": return "devices";
      case "ekonomi": return "trending_up";
      case "dunya": return "public";
      case "spor": return "sports_soccer";
      case "magazin": return "movie";
      default: return "public";
    }
  };

  // Kategori isimlerini Türkçeleştir
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "tarih": return "Tarih";
      case "bilim": return "Bilim";
      case "sanat": return "Sanat";
      case "gundem": return "Gündem";
      case "teknoloji": return "Teknoloji";
      case "ekonomi": return "Ekonomi";
      case "dunya": return "Dünya";
      case "spor": return "Spor";
      case "magazin": return "Magazin";
      default: return "Genel Kültür";
    }
  };

  // Listeyi filtrele ve en yeni tarihten en eski tarihe göre sırala
  const filteredQuizzes = useMemo(() => {
    return [...dailyQuizzes]
      .sort((a, b) => b.dateId.localeCompare(a.dateId))
      .filter((quiz) => {
        const matchesCategory = selectedCategory === "all" || quiz.category === selectedCategory;
        const matchesSearch = 
          quiz.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
          quiz.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (quiz.keywords && quiz.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())));
        return matchesCategory && matchesSearch;
      });
  }, [selectedCategory, searchQuery]);

  return (
    <PageLayout>
      <Seo
        title="Güncel Günlük Haberler ve Analizler | GK Haber"
        description="En güncel haberleri tarafsız, analitik ve profesyonel bir bakış açısıyla GK Haber üzerinden okuyun, gündemi ve önemli gelişmeleri takip edin."
        path={ROUTES.dailyList}
        keywords={["günlük haber", "güncel haberler", "gk haber", "gündem", "bilim", "teknoloji", "ekonomi"]}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        
        {/* ── GK HABER LOGO ── */}
        <div className="border-b border-white/10 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link to={ROUTES.dailyList} className="inline-block group">
            <span className="font-serif text-3xl font-black tracking-tighter text-white group-hover:text-primary transition-colors">
              GK <span className="text-primary group-hover:text-white transition-colors">HABER</span>
            </span>
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant">
            Tarafsız, Güncel, Doğru Gündem Analizi
          </span>
        </div>

        {/* Giriş Başlığı */}
        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">GK Haber Editör Masası</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            Günlük Haberler ve Analizler
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            GK Haber, Türkiye ve dünya gündemindeki en son gelişmeleri ve önemli konuları tarafsız bir analizle günde iki kez (öğlen ve akşam) sunar. En yeni manşetleri okuyun ve bilgi edinin.
          </p>
        </section>

        {/* Arama ve Filtreleme Barları */}
        <section className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-white/10 pb-6">
          {/* Arama */}
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/70">
              search
            </span>
            <input
              type="text"
              placeholder="Haber başlığı, konu veya anahtar kelime ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-surface-container-low/60 py-3.5 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/50 focus:outline-none"
            />
          </div>

          {/* Kategori Filtresi */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tümü" },
              { id: "gundem", label: "Gündem" },
              { id: "teknoloji", label: "Teknoloji" },
              { id: "bilim", label: "Bilim" },
              { id: "ekonomi", label: "Ekonomi" },
              { id: "dunya", label: "Dünya" },
              { id: "spor", label: "Spor" },
              { id: "magazin", label: "Magazin" },
              { id: "tarih", label: "Tarih" },
              { id: "sanat", label: "Sanat" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/10"
                    : "border border-white/10 bg-surface-container-low/60 text-on-surface-variant hover:border-white/20 hover:text-on-surface"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Haber Kartları Izgarası */}
        {filteredQuizzes.length === 0 ? (
          <div className="mt-12 text-center py-20 rounded-[2rem] border border-dashed border-white/10 bg-surface-container-low/20">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-4">
              explore
            </span>
            <h3 className="text-xl font-bold text-on-surface">Aradığınız kriterde haber bulunamadı</h3>
            <p className="mt-2 text-sm text-on-surface-variant">
              Arama kelimesini değiştirmeyi veya farklı bir filtre seçmeyi deneyin.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredQuizzes.map((item) => (
              <article
                key={item.slug}
                className="group relative flex flex-col rounded-[1.8rem] border border-white/10 bg-surface-container-low/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              >
                {/* Manşet Görseli */}
                {item.imageUrl ? (
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl mb-4 border border-white/5 bg-black/20">
                    <img
                      src={item.imageUrl}
                      alt={item.heading}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full flex items-center justify-center rounded-2xl mb-4 bg-primary/10 border border-primary/20 text-primary">
                    <span className="material-symbols-outlined text-4xl">article</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
                    <span className="material-symbols-outlined text-sm">
                      {getCategoryIcon(item.category)}
                    </span>
                    {getCategoryLabel(item.category)}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-on-surface-variant/60">
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs" style={{ fontSize: "12px", verticalAlign: "middle" }}>visibility</span>
                      {formatViews(getSimulatedViews(item.slug, false))}
                    </span>
                    <span>•</span>
                    <span>
                      {item.dateId
                        ? new Date(item.dateId).toLocaleDateString("tr-TR", { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
                        : "Bugün"}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl font-serif font-black leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                  {item.heading}
                </h2>

                <p className="mt-2 text-sm leading-6 text-on-surface-variant line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-auto pt-5 flex items-center justify-between border-t border-white/5">
                  <Link
                    to={`/test/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary"
                  >
                    Haberi Oku
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  {item.questions && item.questions.length > 0 && (
                    <Link
                      to={`/test/${item.slug}/oyna`}
                      className="rounded-xl bg-surface-container-high px-4 py-2 text-xs font-bold text-on-surface hover:bg-primary hover:text-on-primary transition-all shadow-md"
                    >
                      Oyna
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </PageLayout>
  );
}
