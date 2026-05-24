import { Link, useParams, Navigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { dailyQuizzes } from "../data/dailyContent";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export default function DailyLanding() {
  const { slug } = useParams<{ slug: string }>();

  // İlgili yapay zeka içeriğini bul
  const quiz = dailyQuizzes.find((item) => item.slug === slug);

  if (!quiz) {
    // Eğer test bulunamazsa tüm testler listesine yönlendir
    return <Navigate replace to={ROUTES.dailyList} />;
  }

  // Google için yapısal veri şemalarını (JSON-LD) kurgula
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: quiz.title,
      description: quiz.description,
      url: `${SITE_URL}/test/${quiz.slug}`,
      inLanguage: "tr-TR",
      author: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
      },
      publisher: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon-512.png`,
        }
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI Testleri",
          item: `${SITE_URL}${ROUTES.dailyList}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: quiz.heading,
          item: `${SITE_URL}/test/${quiz.slug}`,
        },
      ],
    },
  ];

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

  // Paragrafları ayırarak render et
  const paragraphs = quiz.article.split("\n\n").filter(p => p.trim() !== "");

  return (
    <PageLayout>
      <Seo
        title={quiz.title}
        description={quiz.description}
        path={`/test/${quiz.slug}`}
        keywords={quiz.keywords}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        {/* Ekmek Kırıntısı (Breadcrumbs) */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to={ROUTES.dailyList} className="transition-colors hover:text-on-surface">
              AI Testleri
            </Link>
            <span>/</span>
            <span className="text-on-surface">{quiz.heading}</span>
          </div>
        </nav>

        {/* Ana Makale ve Giriş Alanı */}
        <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.88),rgba(8,20,38,0.95))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">
              {getCategoryIcon(quiz.category)}
            </span>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">
              AI Üretimi • {getCategoryLabel(quiz.category)}
            </p>
          </div>
          
          <h1 className="mt-4 max-w-5xl text-3xl font-black tracking-tight text-on-surface sm:text-4xl md:text-6xl md:leading-[1.1]">
            {quiz.heading}
          </h1>
          
          <p className="mt-5 max-w-3xl text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8 font-semibold">
            {quiz.intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to={`/test/${quiz.slug}/oyna`}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-primary px-7 py-4 text-base font-black text-on-primary shadow-[0_18px_50px_rgba(242,202,80,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              15 Soruluk Teste Başla
              <span className="material-symbols-outlined">play_arrow</span>
            </Link>
            <Link
              to={ROUTES.dailyList}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] border border-white/10 bg-surface-container-low/75 px-7 py-4 text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              Diğer AI Testlerini Gör
            </Link>
          </div>

          {/* Editör Künyesi */}
          <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
            <div className="rounded-[1.2rem] border border-white/10 bg-background/20 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Yayıncı / Ajan</p>
              <p className="mt-2 text-sm font-bold text-on-surface">GenelKultur.com.tr Yapay Zeka Editörü</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-background/20 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Yayın Tarihi</p>
              <p className="mt-2 text-sm font-bold text-on-surface">
                {quiz.dateId ? new Date(quiz.dateId).toLocaleDateString("tr-TR", { year: 'numeric', month: 'long', day: 'numeric' }) : "Bugün"}
              </p>
            </div>
          </div>
        </section>

        {/* Makale Okuma Alanı */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-[1.7rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8 space-y-6">
            <h2 className="text-2xl font-black text-on-surface border-b border-white/5 pb-3">Detaylı İnceleme</h2>
            {paragraphs.map((para, index) => (
              <p key={index} className="text-base leading-8 text-on-surface-variant">
                {para}
              </p>
            ))}
          </article>

          {/* Yan Panel (Hızlı Bilgi Kartı) */}
          <aside className="flex flex-col gap-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.92),rgba(8,20,38,0.96))] p-6 md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Teste Hazır mısın?</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-on-surface">Bilgini Sınama Vakti!</h3>
              <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                Yapay zekanın bu konu hakkında özenle hazırladığı 15 soruluk bilgi yarışmasına katılarak puanını gör ve genel kültür seviyeni artır.
              </p>
              <Link
                to={`/test/${quiz.slug}/oyna`}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-[1.2rem] bg-primary py-4 text-base font-black text-on-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                Yarışmayı Başlat
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* İpuçları */}
            <div className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6">
              <h3 className="text-lg font-black text-on-surface mb-4">Anahtar Kelimeler</h3>
              <div className="flex flex-wrap gap-2">
                {quiz.keywords.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        {/* Ön İzleme Soruları */}
        <section className="mt-10 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-3xl font-black tracking-tight text-on-surface md:text-4xl">
            Test Öncesi Örnek Sorular
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant">
            Yarışmaya girmeden önce örnek sorulara ve açıklamalı cevaplara göz gezdirerek hazırlık yapabilirsiniz.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {quiz.questions.slice(0, 4).map((item, index) => (
              <article key={item.id} className="rounded-[1.4rem] border border-white/10 bg-background/25 p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Soru {index + 1}</span>
                <h3 className="mt-2 text-base font-bold leading-7 text-on-surface">{item.text}</h3>
                <div className="mt-3 rounded-[0.8rem] border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-bold text-primary">
                  Doğru Cevap: {item.options[item.correctAnswer]}
                </div>
                <p className="mt-2 text-xs leading-5 text-on-surface-variant">
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
