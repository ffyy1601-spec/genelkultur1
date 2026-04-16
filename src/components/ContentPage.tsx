import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import Seo from "./Seo";
import { contentLibraryCards } from "../data/contentLibrary";
import type { ContentPageData } from "../data/contentLibrary";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

interface ContentPageProps {
  page: ContentPageData;
}

export default function ContentPage({ page }: ContentPageProps) {
  const relatedPages = contentLibraryCards.filter((item) => item.to !== page.path).slice(0, 3);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.title,
      description: page.description,
      url: `${SITE_URL}${page.path}`,
      inLanguage: "tr-TR",
      author: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <PageLayout>
      <Seo
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to={ROUTES.contentHub} className="transition-colors hover:text-on-surface">
              Sorular ve Cevaplar
            </Link>
            <span>/</span>
            <span className="text-on-surface">{page.heading}</span>
          </div>
        </nav>

        <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.88),rgba(8,20,38,0.95))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            {page.heading}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            {page.intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to={page.quizHref}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-primary px-7 py-4 text-base font-black text-on-primary shadow-[0_18px_50px_rgba(242,202,80,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
            >
              {page.quizLabel}
              <span className="material-symbols-outlined">play_arrow</span>
            </Link>
            <Link
              to={ROUTES.contentHub}
              className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] border border-white/10 bg-surface-container-low/75 px-7 py-4 text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              Tum Icerik Katmanini Gor
            </Link>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-3">
            <div className="rounded-[1.2rem] border border-white/10 bg-background/20 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Editor</p>
              <p className="mt-2 text-sm font-bold text-on-surface">{page.editor}</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-background/20 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Son Guncelleme</p>
              <p className="mt-2 text-sm font-bold text-on-surface">{page.updatedAt}</p>
            </div>
            <div className="rounded-[1.2rem] border border-white/10 bg-background/20 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Duzeltme Bildirimi</p>
              <Link to={page.correctionHref} className="mt-2 inline-flex text-sm font-bold text-primary transition-colors hover:text-primary/80">
                Iletisim uzerinden hata bildir
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-[1.7rem] border border-white/10 bg-surface-container-low/75 p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">{page.summaryTitle}</p>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant md:text-base md:leading-8">{page.summary}</p>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">{page.reviewNote}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {page.topicAreas.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary"
                >
                  {topic}
                </span>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-3">
            {page.bullets.map((bullet) => (
              <article key={bullet} className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-5">
                <h2 className="text-lg font-black text-on-surface">{bullet}</h2>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Bu bolum, quiz oncesi goz gezdirme ve taranabilir icerik ihtiyacini ayni yerde toplar.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Calisma Notlari</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-on-surface md:text-4xl">
                Quiz'e gecmeden once hizli tekrar stratejisi
              </h2>
            </div>
            <div className="text-sm text-on-surface-variant">{page.questions.length} aciklamali soru bu sayfada yer aliyor.</div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {page.studyTips.map((tip, index) => (
              <article key={tip} className="rounded-[1.3rem] border border-white/10 bg-background/20 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Ipucu {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{tip}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Secilmis Sorular</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-on-surface md:text-4xl">
                Gorunur soru, dogru cevap ve kisa aciklama
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-on-surface-variant">
              Bu bolum, quiz akisini degistirmeden once icerik katmanini okunur hale getirir.
            </p>
          </div>

          <div className="mt-8 grid gap-4">
            {page.questions.map((item, index) => (
              <article key={item.question} className="rounded-[1.4rem] border border-white/10 bg-background/25 p-5 md:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Soru {index + 1}</p>
                <h3 className="mt-3 text-lg font-black leading-7 text-on-surface md:text-xl">{item.question}</h3>
                <div className="mt-4 rounded-[1rem] border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-bold text-primary md:text-base">
                  Dogru cevap: {item.answer}
                </div>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant md:text-base md:leading-8">{item.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Sik Sorulanlar</p>
            <div className="mt-5 space-y-4">
              {page.faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.25rem] border border-white/10 bg-background/20 p-5">
                  <h2 className="text-lg font-black text-on-surface">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.92),rgba(8,20,38,0.96))] p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Sonraki Adim</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-on-surface">Hazirsan quiz akisina gec.</h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">
              Buradaki aciklamali icerik sayfasi sadece hazirlik katmanidir. Hedef, ana deneyimi bozmak degil; ona daha guclu bir giris sunmaktir.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to={page.quizHref}
                className="inline-flex items-center justify-center gap-2 rounded-[1.2rem] bg-primary px-5 py-4 text-base font-black text-on-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
              >
                {page.quizLabel}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to={ROUTES.categories}
                className="inline-flex items-center justify-center gap-2 rounded-[1.2rem] border border-white/10 bg-surface-container-low/70 px-5 py-4 text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                Kategorileri Gor
              </Link>
            </div>
          </aside>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Kaynaklar</p>
            <div className="mt-5 space-y-3">
              {page.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[1.2rem] border border-white/10 bg-background/20 p-4 transition-colors hover:border-primary/30"
                >
                  <h2 className="text-base font-black text-on-surface">{source.label}</h2>
                  <p className="mt-2 text-sm text-on-surface-variant">{source.url}</p>
                </a>
              ))}
            </div>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Benzer Icerikler</p>
            <div className="mt-5 space-y-3">
              {relatedPages.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-[1.2rem] border border-white/10 bg-background/20 p-4 transition-colors hover:border-primary/30"
                >
                  <h2 className="text-base font-black text-on-surface">{item.title}</h2>
                  <p className="mt-2 text-sm text-on-surface-variant">{item.description}</p>
                </Link>
              ))}
            </div>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
