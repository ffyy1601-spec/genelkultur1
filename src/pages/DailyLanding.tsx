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

  const hasQuiz = quiz.questions && quiz.questions.length > 0;

  // SEO Şemaları
  const schema: any[] = [
    {
      "@context": "https://schema.org",
      "@type": hasQuiz ? "Article" : "NewsArticle",
      headline: quiz.title,
      description: quiz.description,
      image: quiz.imageUrl ? `${SITE_URL}${quiz.imageUrl}` : undefined,
      url: `${SITE_URL}/test/${quiz.slug}`,
      inLanguage: "tr-TR",
      author: { "@type": "Organization", name: "GenelKultur.com.tr" },
      publisher: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png` },
      },
      datePublished: quiz.dateId,
    }
  ];

  if (hasQuiz) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: quiz.questions!.map((q) => ({
        "@type": "Question",
        name: q.text,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Doğru Cevap: ${q.options[q.correctAnswer]}. Açıklama: ${q.explanation}`,
        },
      })),
    });
  }

  schema.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Günlük Haberler", item: `${SITE_URL}${ROUTES.dailyList}` },
      { "@type": "ListItem", position: 3, name: quiz.heading, item: `${SITE_URL}/test/${quiz.slug}` },
    ],
  });

  // Kategori Etiketleri
  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "gundem": return "Gündem";
      case "teknoloji": return "Teknoloji";
      case "ekonomi": return "Ekonomi";
      case "dunya": return "Dünya";
      case "spor": return "Spor";
      case "tarih": return "Tarih";
      case "bilim": return "Bilim";
      case "sanat": return "Sanat";
      default: return "Genel Kültür";
    }
  };

  const paragraphs = quiz.article.split("\n\n").filter((p) => p.trim() !== "");
  const wordCount = quiz.article.split(" ").length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // Orta paragraftan alıntı seç
  const pullQuoteIndex = Math.floor(paragraphs.length / 2);
  const pullQuote = paragraphs[pullQuoteIndex]?.slice(0, 180) + "…";

  // Önceki Haberler listesi (Son 4 haber, aktif haber hariç)
  const previousNews = dailyQuizzes
    .filter((item) => item.slug !== quiz.slug)
    .sort((a, b) => b.dateId.localeCompare(a.dateId))
    .slice(0, 4);

  const formattedDate = quiz.dateId
    ? new Date(quiz.dateId).toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric", weekday: "long" })
    : new Date().toLocaleDateString("tr-TR", { year: "numeric", month: "long", day: "numeric", weekday: "long" });

  const formattedTime = quiz.dateId
    ? new Date(quiz.dateId).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
    : "";

  return (
    <PageLayout>
      <Seo
        title={quiz.title}
        description={quiz.description}
        path={`/test/${quiz.slug}`}
        keywords={quiz.keywords}
        schema={schema}
      />

      {/* ── KLASİK GAZETE/HABER STYLESHEET ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@400;500;600;700&display=swap');

        .gk-news-wrapper {
          background-color: #ffffff;
          color: #111827;
          min-height: 100vh;
          width: 100%;
        }

        .haber-wrap {
          font-family: 'Inter', sans-serif;
          color: #111827;
          max-width: 780px;
          margin: 0 auto;
          padding: 2.5rem 1rem 4rem;
        }

        .site-header {
          border-bottom: 2.5px solid #111827;
          padding: 14px 0 10px;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .site-name {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -0.5px;
          color: #111827;
          text-decoration: none;
        }

        .site-date {
          font-size: 11px;
          color: #4b5563;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .site-tagline {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4b5563;
          border-top: 0.5px solid #d1d5db;
          padding-top: 6px;
          margin-bottom: 28px;
          font-weight: 600;
        }

        .hero-category {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #B91C1C;
          margin-bottom: 10px;
        }

        .hero-headline {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -1px;
          margin: 0 0 16px;
          color: #111827;
        }

        .hero-deck {
          font-size: 17px;
          line-height: 1.6;
          color: #4b5563;
          font-weight: 400;
          margin-bottom: 20px;
          border-left: 3px solid #B91C1C;
          padding-left: 14px;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 12px;
          color: #4b5563;
          margin-bottom: 24px;
          flex-wrap: wrap;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 12px;
        }

        .meta-row span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .hero-image-wrap {
          margin-bottom: 28px;
        }

        .hero-image-img {
          width: 100%;
          max-height: 460px;
          object-fit: cover;
          display: block;
          border-radius: 4px;
        }

        .image-caption {
          font-size: 11px;
          color: #4b5563;
          margin-top: 8px;
          border-left: 2px solid #d1d5db;
          padding-left: 8px;
          line-height: 1.4;
        }

        .article-body {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.85;
          color: #111827;
        }

        .article-body p {
          margin: 0 0 1.25em;
        }

        .pullquote {
          font-family: 'Playfair Display', serif;
          font-size: 21px;
          font-weight: 700;
          line-height: 1.45;
          color: #111827;
          border-top: 2.5px solid #111827;
          border-bottom: 0.5px solid #d1d5db;
          padding: 18px 0 16px;
          margin: 28px 0;
        }

        .divider {
          border: none;
          border-top: 0.5px solid #d1d5db;
          margin: 28px 0;
        }

        .related-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4b5563;
          border-bottom: 1.5px solid #111827;
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        .related-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .related-card {
          border-top: 2px solid #d1d5db;
          padding-top: 12px;
          text-decoration: none;
        }

        .related-card-cat {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #B91C1C;
          margin-bottom: 6px;
        }

        .related-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.35;
          color: #111827;
        }

        .share-row {
          display: flex;
          gap: 10px;
          margin: 28px 0 0;
          flex-wrap: wrap;
        }

        .share-btn {
          font-size: 12px;
          font-weight: 500;
          padding: 7px 14px;
          border: 0.5px solid #d1d5db;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          color: #111827;
        }

        .share-btn:hover {
          background: #f3f4f6;
        }

        .quiz-cta-box {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          margin: 28px 0;
        }

        @media (max-width: 540px) {
          .hero-headline {
            font-size: 28px;
          }
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ── HABER SAYFASI GÖVDESİ (Beyaz Arka Plan) ── */}
      <div className="gk-news-wrapper">
        <div className="haber-wrap">
          
          {/* Header */}
          <header className="site-header">
            <Link to={ROUTES.dailyList} className="site-name">GK Haber</Link>
            <div className="site-date">
              {formattedDate} {formattedTime ? `· ${formattedTime}` : ""}
            </div>
          </header>
          <div className="site-tagline">Dünya · Türkiye · Ekonomi · Spor · Teknoloji · Bilim · Sanat</div>

          {/* Kategori */}
          <div className="hero-category">{getCategoryLabel(quiz.category)}</div>

          {/* Başlık */}
          <h1 className="hero-headline">{quiz.heading}</h1>

          {/* Intro Deck */}
          <p className="hero-deck">{quiz.intro}</p>

          {/* Meta Bilgileri */}
          <div className="meta-row">
            <span>
              <span className="material-symbols-outlined text-sm" style={{ verticalAlign: "middle" }}>schedule</span>
              {readingMinutes} dk okuma
            </span>
            <span>
              <span className="material-symbols-outlined text-sm" style={{ verticalAlign: "middle" }}>edit</span>
              GK Haber Editör Masası
            </span>
            {hasQuiz && (
              <span>
                <span className="material-symbols-outlined text-sm" style={{ verticalAlign: "middle" }}>quiz</span>
                {quiz.questions!.length} Soruluk Test
              </span>
            )}
          </div>

          {/* Manşet Görseli */}
          {quiz.imageUrl && (
            <div className="hero-image-wrap">
              <img
                src={quiz.imageUrl}
                alt={quiz.heading}
                className="hero-image-img"
              />
              <p className="image-caption">
                {quiz.heading} · GK Haber Özel Fotoğrafı
              </p>
            </div>
          )}

          {/* Haber Metni */}
          <div className="article-body">
            {paragraphs.map((para, index) => {
              // İlk paragraf: öne çıkan lead metin
              if (index === 0) {
                return (
                  <p key={index} className="text-lg font-semibold leading-relaxed mb-6">
                    {para}
                  </p>
                );
              }

              // Orta paragraf: alıntı kutusu
              if (index === pullQuoteIndex) {
                return (
                  <div key={index} className="space-y-6">
                    <div className="pullquote">
                      "{pullQuote}"
                      <br />
                      <span style={{ fontSize: "14px", fontWeight: 400, fontFamily: "'Inter', sans-serif", color: "#4b5563" }}>
                        — GK Haber Ajansı
                      </span>
                    </div>
                    <p>{para}</p>
                  </div>
                );
              }

              return (
                <p key={index}>{para}</p>
              );
            })}
          </div>

          {/* Quiz CTA (Eğer haberde test varsa gösterilir) */}
          {hasQuiz && (
            <div className="quiz-cta-box">
              <h3 className="font-serif text-lg font-black mb-2 text-[#111827] flex items-center gap-2">
                <span className="material-symbols-outlined text-red-700">emoji_events</span>
                Bilgini Sına!
              </h3>
              <p className="text-sm text-[#4b5563] mb-4">
                Bu haberin detayları hakkında özel olarak hazırlanmış <strong>{quiz.questions!.length} soruluk</strong> bilgi testini çöz ve kendini test et.
              </p>
              <Link
                to={`/test/${quiz.slug}/oyna`}
                className="inline-flex items-center gap-2 rounded bg-[#B91C1C] hover:bg-[#991B1B] text-white px-5 py-2.5 text-sm font-bold transition-all shadow"
              >
                <span className="material-symbols-outlined text-sm">play_arrow</span>
                Testi Başlat
              </Link>
            </div>
          )}

          {/* Paylaş Row */}
          <div className="share-row">
            <button
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(quiz.heading)}`)}
              className="share-btn"
            >
              <span className="material-symbols-outlined text-sm">share</span> Paylaş
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href).then(() => alert("Haber linki kopyalandı!"))}
              className="share-btn"
            >
              <span className="material-symbols-outlined text-sm">link</span> Bağlantıyı Kopyala
            </button>
          </div>

          <hr className="divider" style={{ marginTop: "32px" }} />

          {/* ── ÖNCEKİ HABERLER (İlgili Haberler) BÖLÜMÜ ── */}
          {previousNews.length > 0 && (
            <section style={{ marginTop: "16px" }}>
              <h3 className="related-title">İlgili Haberler</h3>
              <div className="related-grid">
                {previousNews.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/test/${item.slug}`}
                    className="related-card group"
                  >
                    <div className="related-card-cat">{getCategoryLabel(item.category)}</div>
                    <h4 className="related-card-title group-hover:text-[#B91C1C] transition-colors">
                      {item.heading}
                    </h4>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </PageLayout>
  );
}
