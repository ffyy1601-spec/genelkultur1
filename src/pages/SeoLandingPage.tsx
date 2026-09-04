import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import AdUnit from "../components/AdUnit";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export interface RichQuestionItem {
  q: string;
  options?: string[];
  a?: string;
  desc?: string;
}

export type SampleQuestionProp = string | RichQuestionItem;

interface SeoLandingPageProps {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  intro: string;
  bullets: string[];
  sampleQuestions: SampleQuestionProp[];
  ctaLabel: string;
  ctaHref: string;
  studyTips?: { title: string; text: string }[];
}

export default function SeoLandingPage({
  title,
  description,
  path,
  keywords,
  eyebrow,
  heading,
  intro,
  bullets,
  sampleQuestions,
  ctaLabel,
  ctaHref,
  studyTips,
}: SeoLandingPageProps) {
  const normalizedQuestions: RichQuestionItem[] = sampleQuestions.map((item) => {
    if (typeof item === "string") {
      return { q: item };
    }
    return item;
  });

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: `${SITE_URL}${path}`,
      description,
      inLanguage: "tr-TR",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `${heading} nedir?`,
          acceptedAnswer: { "@type": "Answer", text: intro },
        },
        ...normalizedQuestions.map((qItem) => ({
          "@type": "Question",
          name: qItem.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: qItem.a
              ? `${qItem.a}. ${qItem.desc || ""}`.trim()
              : "Bu sorunun cevabını ve detaylı açıklamasını ilgili genel kültür testini çözerek inceleyebilirsiniz.",
          },
        })),
      ],
    },
  ];

  const defaultTips = studyTips || [
    {
      title: "Kavram ve Tarih Eşleştirmesi",
      text: "Soruları çözerken sadece doğru şıkkı değil, yanlış seçeneklerin neden yanlış olduğunu da analiz edin. Bu, hafıza kalıcılığını ikiye katlar.",
    },
    {
      title: "Aktif ve Sürekli Tekrar",
      text: "Tek seferde yüzlerce soru çözmek yerine, her gün 10-15 soruluk kısa turlarla zihninizi taze tutmak uzun vadeli genel kültür birikiminde çok daha etkilidir.",
    },
    {
      title: "Açıklamalı Çözümün Gücü",
      text: "Takıldığınız veya yanlış yaptığınız her soruda açıklamayı dikkatle okuyun. Yanlış yapılan soru, öğrenmenin en kalıcı olduğu andır.",
    },
  ];

  return (
    <PageLayout>
      <Seo title={title} description={description} path={path} keywords={keywords} schema={schema} />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to={ROUTES.categories} className="transition-colors hover:text-on-surface">
              Kategoriler
            </Link>
            <span>/</span>
            <span className="text-on-surface">{heading}</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.88),rgba(8,20,38,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-on-surface md:text-6xl leading-tight">
            {heading}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            {intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-primary px-7 py-4 text-base font-black text-on-primary shadow-[0_18px_50px_rgba(242,202,80,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              {ctaLabel}
              <span className="material-symbols-outlined">play_arrow</span>
            </Link>
            <Link
              to={ROUTES.categories}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] border border-white/10 bg-surface-container-low/75 px-7 py-4 text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              Tüm Kategorileri Gör
            </Link>
          </div>
        </section>

        {/* Highlights Bullets */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {bullets.map((bullet) => (
            <article key={bullet} className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <span className="material-symbols-outlined text-xl">verified</span>
              </div>
              <h2 className="text-xl font-black text-on-surface">{bullet}</h2>
              <p className="mt-2.5 text-sm leading-7 text-on-surface-variant">
                Özenle seçilmiş soru havuzu ile bilginizi sınayın, eksiklerinizi anında görün ve seviyenizi geliştirin.
              </p>
            </article>
          ))}
        </section>

        {/* Ad Placement */}
        <AdUnit format="horizontal" className="my-8" />

        {/* Rich Explanatory Questions & Answers Section */}
        <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Açıklamalı Soru Havuzu</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-on-surface md:text-3xl">
                Seçme Sorular ve Detaylı Cevapları
              </h2>
            </div>
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 self-start md:self-auto rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-xs font-bold text-on-surface transition-colors"
            >
              Test Olarak Çöz
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {normalizedQuestions.map((item, index) => (
              <article
                key={index}
                className="rounded-[1.4rem] border border-white/10 bg-background/35 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-[11px] font-black text-primary">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-bold leading-7 text-on-surface">{item.q}</h3>
                  </div>

                  {item.options && item.options.length > 0 && (
                    <ul className="mt-3 space-y-1.5 pl-8">
                      {item.options.map((opt, optIdx) => {
                        const letters = ["A", "B", "C", "D"];
                        return (
                          <li key={optIdx} className="flex items-center gap-2 text-xs text-on-surface-variant">
                            <span className="font-black text-primary">{letters[optIdx]})</span>
                            <span>{opt}</span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                {item.a ? (
                  <details className="group mt-4 rounded-xl border border-white/10 bg-surface-container-low/60 p-3 transition-colors">
                    <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-bold text-primary hover:text-primary/90">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-base transition-transform group-open:rotate-180">
                          expand_more
                        </span>
                        Doğru Cevabı ve Açıklamayı Gör
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">
                        İncele
                      </span>
                    </summary>
                    <div className="mt-3 pt-3 border-t border-white/5 text-xs leading-6">
                      <p className="font-bold text-tertiary flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-sm text-green-400">check_circle</span>
                        Doğru Yanıt: <span className="text-white">{item.a}</span>
                      </p>
                      {item.desc && (
                        <p className="mt-2 text-on-surface-variant leading-relaxed">{item.desc}</p>
                      )}
                    </div>
                  </details>
                ) : (
                  <div className="mt-4 pt-3 border-t border-white/5 text-right">
                    <Link
                      to={ctaHref}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                    >
                      Cevabı Testte Gör
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Study Strategy / Editorial Insights (Replaces Thin Doorway Filler) */}
        <section className="mt-10 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-2xl font-black text-on-surface md:text-3xl">
            Soru Çözme ve Bilgi Pekiştirme Stratejisi
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant max-w-3xl">
            Sınavlarda ve bilgi yarışmalarında başarıyı getiren temel faktör, sadece çok soru görmek değil,
            soruların arkasındaki mantığı kavramaktır.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {defaultTips.map((tip, idx) => (
              <article key={idx} className="rounded-[1.4rem] border border-white/10 bg-background/25 p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-sm mb-3">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-on-surface">{tip.title}</h3>
                <p className="mt-2 text-xs leading-6 text-on-surface-variant">{tip.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(242,202,80,0.12),rgba(18,35,62,0.85))] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl font-black text-on-surface md:text-3xl">
              Kendinizi Hazır Hissediyor Musunuz?
            </h2>
            <p className="text-sm text-on-surface-variant max-w-xl">
              15 soruluk tempolu tura hemen katılın, doğru-yanlış analizlerinizi yapın ve puanınızı görün.
            </p>
          </div>
          <Link
            to={ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-[1.2rem] bg-primary px-8 py-4 text-sm font-black text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 shrink-0"
          >
            {ctaLabel}
            <span className="material-symbols-outlined">play_arrow</span>
          </Link>
        </section>
      </main>
    </PageLayout>
  );
}
