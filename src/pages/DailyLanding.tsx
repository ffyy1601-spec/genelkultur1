import { Link, useParams, Navigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { dailyQuizzes } from "../data/dailyContent";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export default function DailyLanding() {
  const { slug } = useParams<{ slug: string }>();
  const quiz = dailyQuizzes.find((item) => item.slug === slug);

  if (!quiz) return <Navigate replace to={ROUTES.dailyList} />;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: quiz.title,
      description: quiz.description,
      url: `${SITE_URL}/test/${quiz.slug}`,
      inLanguage: "tr-TR",
      author: { "@type": "Organization", name: "GenelKultur.com.tr" },
      publisher: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png` },
      },
      datePublished: quiz.dateId ? `${quiz.dateId}T06:00:00+03:00` : undefined,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: quiz.questions.map((q) => ({
        "@type": "Question",
        name: q.text,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Doğru Cevap: ${q.options[q.correctAnswer]}. Açıklama: ${q.explanation}`,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "AI Testleri", item: `${SITE_URL}${ROUTES.dailyList}` },
        { "@type": "ListItem", position: 3, name: quiz.heading, item: `${SITE_URL}/test/${quiz.slug}` },
      ],
    },
  ];

  const categoryConfig: Record<string, { icon: string; label: string; color: string; bg: string; gradient: string }> = {
    tarih:  { icon: "history_edu", label: "Tarih",        color: "#f97316", bg: "rgba(249,115,22,0.12)",  gradient: "linear-gradient(135deg,rgba(249,115,22,0.25) 0%,rgba(234,88,12,0.08) 100%)" },
    bilim:  { icon: "science",     label: "Bilim",        color: "#22d3ee", bg: "rgba(34,211,238,0.12)",  gradient: "linear-gradient(135deg,rgba(34,211,238,0.25) 0%,rgba(6,182,212,0.08) 100%)" },
    sanat:  { icon: "palette",     label: "Sanat",        color: "#a78bfa", bg: "rgba(167,139,250,0.12)", gradient: "linear-gradient(135deg,rgba(167,139,250,0.25) 0%,rgba(139,92,246,0.08) 100%)" },
    genel:  { icon: "public",      label: "Genel Kültür", color: "#f2ca50", bg: "rgba(242,202,80,0.12)",  gradient: "linear-gradient(135deg,rgba(242,202,80,0.25) 0%,rgba(234,179,8,0.08) 100%)" },
  };
  const cat = categoryConfig[quiz.category] ?? categoryConfig.genel;

  const paragraphs = quiz.article.split("\n\n").filter((p) => p.trim() !== "");
  const wordCount = quiz.article.split(" ").length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // Orta paragraftan alıntı seç
  const pullQuoteIndex = Math.floor(paragraphs.length / 2);
  const pullQuote = paragraphs[pullQuoteIndex]?.slice(0, 180) + "…";

  return (
    <PageLayout>
      <Seo
        title={quiz.title}
        description={quiz.description}
        path={`/test/${quiz.slug}`}
        keywords={quiz.keywords}
        schema={schema}
      />

      <main className="mx-auto w-full max-w-7xl flex-1 px-4 pb-16 pt-8 md:px-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">Ana Sayfa</Link>
            <span>/</span>
            <Link to={ROUTES.dailyList} className="transition-colors hover:text-on-surface">AI Testleri</Link>
            <span>/</span>
            <span className="text-on-surface line-clamp-1">{quiz.heading}</span>
          </div>
        </nav>

        {/* ── HERO BANNER ── */}
        <section
          style={{ background: cat.gradient, borderColor: `${cat.color}22` }}
          className="relative overflow-hidden rounded-[2rem] border p-8 md:p-12 mb-8"
        >
          {/* Dekoratif büyük ikon */}
          <span
            className="material-symbols-outlined pointer-events-none absolute -right-6 -top-6 select-none text-[10rem] opacity-[0.06]"
            style={{ color: cat.color }}
          >
            {cat.icon}
          </span>

          {/* Kategori rozeti */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest"
              style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.color}33` }}
            >
              <span className="material-symbols-outlined text-sm">{cat.icon}</span>
              {cat.label}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Yapay Zeka Editörü
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight text-on-surface sm:text-4xl md:text-5xl md:leading-[1.1] max-w-4xl">
            {quiz.heading}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg">
            {quiz.intro}
          </p>

          {/* İstatistik çubuğu */}
          <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-base" style={{ color: cat.color }}>schedule</span>
              <span><strong className="text-on-surface">{readingMinutes} dk</strong> okuma</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-base" style={{ color: cat.color }}>quiz</span>
              <span><strong className="text-on-surface">{quiz.questions.length} soru</strong> test</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-base" style={{ color: cat.color }}>calendar_today</span>
              <span>
                {quiz.dateId
                  ? new Date(quiz.dateId).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric" })
                  : "Bugün"}
              </span>
            </div>
          </div>

          {/* CTA butonları */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to={`/test/${quiz.slug}/oyna`}
              className="inline-flex items-center gap-2 rounded-[1.4rem] bg-primary px-8 py-4 text-base font-black text-on-primary shadow-[0_18px_50px_rgba(242,202,80,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(242,202,80,0.35)]"
            >
              <span className="material-symbols-outlined">play_arrow</span>
              {quiz.questions.length} Soruluk Testi Başlat
            </Link>
            <Link
              to={ROUTES.dailyList}
              className="inline-flex items-center gap-2 rounded-[1.4rem] border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              Diğer Testler
            </Link>
          </div>
        </section>

        {/* ── İÇERİK + KENAR PANEL ── */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Makale */}
          <article className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-10 space-y-0">
            <h2 className="text-2xl font-black text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined" style={{ color: cat.color }}>article</span>
              Detaylı İnceleme
            </h2>

            {paragraphs.map((para, index) => {
              // İlk paragraf: öne çıkan lead metin
              if (index === 0) {
                return (
                  <p
                    key={index}
                    className="text-lg leading-9 text-on-surface font-semibold mb-6 pb-6 border-b border-white/10"
                  >
                    {para}
                  </p>
                );
              }

              // Orta paragraf: alıntı kutusu
              if (index === pullQuoteIndex) {
                return (
                  <div key={index} className="space-y-6">
                    <blockquote
                      style={{ borderColor: cat.color, background: cat.bg }}
                      className="my-8 rounded-[1.2rem] border-l-4 p-6"
                    >
                      <p className="text-base font-bold leading-8 text-on-surface italic">
                        "{pullQuote}"
                      </p>
                    </blockquote>
                    <p className="text-base leading-8 text-on-surface-variant mb-5">{para}</p>
                  </div>
                );
              }

              // 3'ün katı paragraflar: vurgulu sol çizgili
              if (index % 3 === 0) {
                return (
                  <div
                    key={index}
                    style={{ borderColor: `${cat.color}55` }}
                    className="my-6 border-l-2 pl-5"
                  >
                    <p className="text-base leading-8 text-on-surface-variant">{para}</p>
                  </div>
                );
              }

              return (
                <p key={index} className="text-base leading-8 text-on-surface-variant mb-5">
                  {para}
                </p>
              );
            })}
          </article>

          {/* Kenar Panel */}
          <aside className="flex flex-col gap-5">
            {/* Quiz CTA */}
            <div
              style={{ background: cat.gradient, borderColor: `${cat.color}22` }}
              className="sticky top-6 rounded-[1.8rem] border p-6"
            >
              <span
                className="material-symbols-outlined text-4xl mb-3 block"
                style={{ color: cat.color }}
              >
                emoji_events
              </span>
              <h3 className="text-xl font-black text-on-surface">Bilgini Sına!</h3>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                Bu konuda özenle hazırlanmış <strong className="text-on-surface">{quiz.questions.length} soruluk</strong> testi çöz, puanını gör.
              </p>

              {/* Mini soru önizleme */}
              <div className="mt-4 rounded-[1rem] border border-white/10 bg-black/20 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: cat.color }}>
                  Örnek Soru
                </p>
                <p className="text-sm font-semibold text-on-surface leading-6">
                  {quiz.questions[0]?.text}
                </p>
              </div>

              <Link
                to={`/test/${quiz.slug}/oyna`}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-[1.2rem] bg-primary py-4 text-base font-black text-on-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                <span className="material-symbols-outlined">play_arrow</span>
                Yarışmayı Başlat
              </Link>
            </div>

            {/* Anahtar Kelimeler */}
            <div className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">label</span>
                Anahtar Kelimeler
              </h3>
              <div className="flex flex-wrap gap-2">
                {quiz.keywords.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-semibold transition-colors hover:opacity-80"
                    style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.color}33` }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Diğer testlere git */}
            <Link
              to={ROUTES.dailyList}
              className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 flex items-center gap-4 transition-all hover:border-white/20 hover:-translate-y-1"
            >
              <span className="material-symbols-outlined text-3xl text-on-surface-variant">view_list</span>
              <div>
                <p className="text-sm font-black text-on-surface">Tüm AI Testleri</p>
                <p className="text-xs text-on-surface-variant mt-0.5">Diğer konulara göz at</p>
              </div>
              <span className="material-symbols-outlined ml-auto text-on-surface-variant">arrow_forward</span>
            </Link>
          </aside>
        </div>

        {/* ── SORULAR ÖN İZLEME ── */}
        <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-10">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
            <div>
              <h2 className="text-2xl font-black text-on-surface md:text-3xl">Örnek Sorular</h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                Testi başlatmadan önce birkaç soruya göz gezdirin.
              </p>
            </div>
            <Link
              to={`/test/${quiz.slug}/oyna`}
              className="inline-flex items-center gap-2 rounded-[1.2rem] bg-primary px-6 py-3 text-sm font-black text-on-primary transition-all hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined text-sm">play_arrow</span>
              Tamamını Çöz
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {quiz.questions.slice(0, 4).map((item, index) => (
              <article
                key={item.id}
                className="rounded-[1.4rem] border border-white/10 bg-background/30 p-5 transition-all hover:border-white/20"
              >
                {/* Numara rozeti */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black"
                    style={{ background: cat.bg, color: cat.color, border: `1px solid ${cat.color}33` }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: cat.color }}>
                    {cat.label}
                  </span>
                </div>

                <h3 className="text-sm font-bold leading-7 text-on-surface">{item.text}</h3>

                {/* Seçenekler */}
                <div className="mt-3 grid grid-cols-2 gap-1.5">
                  {item.options.map((opt, oi) => (
                    <div
                      key={oi}
                      className={`rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                        oi === item.correctAnswer
                          ? "font-black"
                          : "border border-white/10 bg-white/5 text-on-surface-variant"
                      }`}
                      style={
                        oi === item.correctAnswer
                          ? { background: cat.bg, color: cat.color, border: `1px solid ${cat.color}33` }
                          : {}
                      }
                    >
                      {oi === item.correctAnswer && "✓ "}
                      {opt}
                    </div>
                  ))}
                </div>

                <p className="mt-3 text-xs leading-5 text-on-surface-variant border-t border-white/10 pt-3">
                  {item.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
