import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export interface TimedTestLandingProps {
  count: number;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  intro: string;
  highlights: { title: string; text: string }[];
  paragraphs: { h: string; p: string }[];
  sampleQuestions: { q: string; a: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { label: string; to: string }[];
}

export default function TimedTestLanding(props: TimedTestLandingProps) {
  const {
    count,
    path,
    title,
    description,
    keywords,
    eyebrow,
    heading,
    intro,
    highlights,
    paragraphs,
    sampleQuestions,
    faqs,
    relatedLinks,
  } = props;

  const ctaHref = `${ROUTES.game}?category=genel&count=${count}`;
  const url = `${SITE_URL}${path}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url,
      description,
      inLanguage: "tr-TR",
      isPartOf: { "@type": "WebSite", name: "GenelKultur.com.tr", url: SITE_URL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Genel Kültür Testi", item: `${SITE_URL}${ROUTES.categories}` },
        { "@type": "ListItem", position: 3, name: heading, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <PageLayout>
      <Seo title={title} description={description} path={path} keywords={keywords} schema={schema} />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-10 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">Ana Sayfa</Link>
            <span>/</span>
            <Link to={ROUTES.categories} className="transition-colors hover:text-on-surface">Genel Kültür Testi</Link>
            <span>/</span>
            <span className="text-on-surface">{heading}</span>
          </div>
        </nav>

        {/* HERO */}
        <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.9),rgba(8,20,38,0.95))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-10">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.26em] text-primary">
            <span className="material-symbols-outlined text-base">quiz</span>
            {eyebrow}
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-surface md:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">{intro}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-primary px-7 py-4 text-base font-black text-on-primary shadow-[0_18px_50px_rgba(242,202,80,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              {count} Soruluk Testi Başlat
              <span className="material-symbols-outlined">play_arrow</span>
            </Link>
            <span className="rounded-full border border-white/10 bg-surface-container-low/75 px-4 py-2 text-sm text-on-surface-variant">
              Ücretsiz · Üyeliksiz · Anında sonuç
            </span>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <article key={h.title} className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6">
              <h2 className="text-lg font-black text-on-surface">{h.title}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">{h.text}</p>
            </article>
          ))}
        </section>

        {/* DETAYLI İÇERİK */}
        <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <div className="space-y-7">
            {paragraphs.map((blk) => (
              <div key={blk.h}>
                <h2 className="text-2xl font-black text-on-surface md:text-3xl">{blk.h}</h2>
                <p className="mt-3 text-sm leading-8 text-on-surface-variant md:text-base">{blk.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ÖRNEK SORULAR */}
        <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-2xl font-black text-on-surface md:text-3xl">Bu Testten Örnek Sorular</h2>
          <p className="mt-2 text-sm text-on-surface-variant">Aşağıdaki örnekler, testte karşılaşacağın soru tarzını gösterir.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sampleQuestions.map((s, i) => (
              <article key={s.q} className="rounded-[1.3rem] border border-white/10 bg-background/25 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Örnek {i + 1}</p>
                <p className="mt-3 text-base font-bold leading-7 text-on-surface">{s.q}</p>
                <p className="mt-3 rounded-[1rem] border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                  Cevap: {s.a}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-7">
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-[1.2rem] bg-primary px-6 py-3.5 text-sm font-black text-on-primary transition-all hover:-translate-y-0.5"
            >
              {count} Soruyu Çözmeye Başla
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* SSS */}
        <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-2xl font-black text-on-surface md:text-3xl">Sık Sorulan Sorular</h2>
          <div className="mt-5 space-y-4">
            {faqs.map((f) => (
              <div key={f.question} className="rounded-[1.2rem] border border-white/10 bg-background/20 p-5">
                <h3 className="text-base font-black text-on-surface">{f.question}</h3>
                <p className="mt-2 text-sm leading-7 text-on-surface-variant">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İLGİLİ */}
        <section className="mt-8">
          <h2 className="text-xl font-black text-on-surface">Diğer Genel Kültür Sayfaları</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {relatedLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-[1.2rem] border border-white/10 bg-surface-container-low/75 px-4 py-4 text-sm font-bold text-on-surface transition-all hover:-translate-y-1 hover:border-primary/30 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
