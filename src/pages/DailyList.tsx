import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { dailyQuizzes } from "../data/dailyContent";
import { ROUTES } from "../lib/routes";

export default function DailyList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Kategorilere göre ikon seçimi
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "tarih": return "history_edu";
      case "bilim": return "science";
      case "sanat": return "palette";
      default: return "public";
    }
  };

  // Kategori isimlerini Türkçeleştir
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "tarih": return "Tarih";
      case "bilim": return "Bilim";
      case "sanat": return "Sanat";
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
        title="Yapay Zeka Genel Kültür Testleri ve Konuları | GenelKultur.com.tr"
        description="Yapay zeka ajanımız tarafından her gün güncellenen güncel makaleleri oku, 15 soruluk özel testleri çöz ve puanını gör."
        path={ROUTES.dailyList}
        keywords={["yapay zeka testleri", "günlük testler", "açıklamalı genel kültür soruları", "tarihte bugün"]}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        {/* Giriş Başlığı */}
        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Yapay Zeka Editörü</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            Her gün üretilen özel testler ve makaleler.
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            AI ajanımız Google aramalarını ve tarih arşivlerini tarayarak her gün yepyeni konular hazırlıyor. Bilgi dağarcığını genişletmek için bir konu seç, makaleyi oku ve quize başla.
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
              placeholder="Konu, başlık veya anahtar kelime ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-surface-container-low/60 py-3.5 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/50 focus:outline-none"
            />
          </div>

          {/* Kategori Filtresi */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Tümü" },
              { id: "genel", label: "Genel Kültür" },
              { id: "tarih", label: "Tarih" },
              { id: "bilim", label: "Bilim" },
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

        {/* Test Kartları Izgarası */}
        {filteredQuizzes.length === 0 ? (
          <div className="mt-12 text-center py-20 rounded-[2rem] border border-dashed border-white/10 bg-surface-container-low/20">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-4">
              explore
            </span>
            <h3 className="text-xl font-bold text-on-surface">Aradığınız kriterde test bulunamadı</h3>
            <p className="mt-2 text-sm text-on-surface-variant">
              Arama kelimesini değiştirmeyi veya farklı bir filtre seçmeyi deneyin.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredQuizzes.map((item) => (
              <article
                key={item.slug}
                className="group relative flex flex-col rounded-[1.8rem] border border-white/10 bg-surface-container-low/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-primary">
                    <span className="material-symbols-outlined text-sm">
                      {getCategoryIcon(item.category)}
                    </span>
                    {getCategoryLabel(item.category)}
                  </div>
                  <span className="text-[10px] font-semibold text-on-surface-variant/60">
                    {item.dateId ? new Date(item.dateId).toLocaleDateString("tr-TR", { month: 'short', day: 'numeric' }) : "Bugün"}
                  </span>
                </div>

                <h2 className="text-xl font-black leading-snug text-on-surface group-hover:text-primary transition-colors">
                  {item.heading}
                </h2>

                <p className="mt-3 text-sm leading-6 text-on-surface-variant line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                  <Link
                    to={`/test/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-primary"
                  >
                    Detayları Oku
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                  <Link
                    to={`/test/${item.slug}/oyna`}
                    className="rounded-xl bg-surface-container-high px-4 py-2 text-xs font-bold text-on-surface hover:bg-primary hover:text-on-primary transition-all shadow-md"
                  >
                    Oyna
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </PageLayout>
  );
}
