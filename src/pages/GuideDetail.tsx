import { Link, useParams, Navigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { guides } from "../data/guides";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

export default function GuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) return <Navigate replace to={ROUTES.guides} />;

  const url = `${SITE_URL}/rehber/${guide.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.heading,
      description: guide.description,
      url,
      inLanguage: "tr-TR",
      author: { "@type": "Organization", name: guide.author, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png` },
      },
      mainEntityOfPage: url,
      articleBody: guide.body.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Genel Kültür Rehberi", item: `${SITE_URL}${ROUTES.guides}` },
        { "@type": "ListItem", position: 3, name: guide.heading, item: url },
      ],
    },
  ];

  const relatedGuides = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <PageLayout>
      <Seo
        title={guide.title}
        description={guide.description}
        path={`/rehber/${guide.slug}`}
        keywords={guide.keywords}
        schema={schema}
      />

      <style>{`
        .guide-body { font-size: 16px; line-height: 1.85; color: var(--guide-text, inherit); }
        .guide-body p { margin: 0 0 1.2em; }
        .guide-body p.lead { font-size: 18px; font-weight: 600; margin-bottom: 1.4em; }
        .guide-body h2 { font-size: 24px; font-weight: 800; margin: 1.8em 0 0.7em; line-height: 1.3; }
        .guide-body h3 { font-size: 19px; font-weight: 700; margin: 1.4em 0 0.6em; }
        .guide-body ul { list-style: disc; padding-left: 1.4em; margin: 0 0 1.2em; }
        .guide-body li { margin-bottom: 0.5em; }
        .guide-body strong { font-weight: 700; }
      `}</style>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10 md:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to={ROUTES.guides} className="transition-colors hover:text-on-surface">
              Genel Kültür Rehberi
            </Link>
            <span>/</span>
            <span className="text-on-surface line-clamp-1">{guide.heading}</span>
          </div>
        </nav>

        <article>
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
              <span className="material-symbols-outlined text-sm">menu_book</span>
              {guide.category}
            </span>
            <span className="text-on-surface-variant/70">{guide.readingMinutes} dk okuma</span>
          </div>

          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-on-surface md:text-5xl">
            {guide.heading}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-white/10 py-4 text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">edit</span>
              {guide.author}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">update</span>
              Güncelleme: {guide.updatedAt}
            </span>
          </div>

          <div
            className="guide-body mt-8 text-on-surface-variant"
            dangerouslySetInnerHTML={{ __html: guide.body }}
          />
        </article>

        {/* SSS */}
        <section className="mt-12 rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-2xl font-black text-on-surface">Sık Sorulan Sorular</h2>
          <div className="mt-5 space-y-4">
            {guide.faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.2rem] border border-white/10 bg-background/20 p-5">
                <h3 className="text-base font-black text-on-surface">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-on-surface-variant">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.92),rgba(8,20,38,0.95))] p-6 md:p-8 text-center">
          <h2 className="text-2xl font-black text-on-surface">Öğrendiklerinizi hemen sınayın</h2>
          <p className="mt-3 text-sm leading-7 text-on-surface-variant">
            Bilginizi pekiştirmenin en iyi yolu pratiktir. Kategori testlerimizle kendinizi deneyin.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to={ROUTES.categories}
              className="inline-flex items-center gap-2 rounded-[1.2rem] bg-primary px-6 py-3.5 text-sm font-black text-on-primary transition-all hover:-translate-y-0.5"
            >
              Teste Başla
              <span className="material-symbols-outlined text-base">play_arrow</span>
            </Link>
            <Link
              to={ROUTES.guides}
              className="inline-flex items-center gap-2 rounded-[1.2rem] border border-white/10 bg-surface-container-low/70 px-6 py-3.5 text-sm font-bold text-on-surface transition-all hover:-translate-y-0.5 hover:border-primary/30"
            >
              Diğer Rehberler
            </Link>
          </div>
        </section>

        {/* İlgili rehberler */}
        {relatedGuides.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-black text-on-surface">İlgili Rehberler</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {relatedGuides.map((item) => (
                <Link
                  key={item.slug}
                  to={`/rehber/${item.slug}`}
                  className="group rounded-[1.2rem] border border-white/10 bg-surface-container-low/70 p-4 transition-all hover:-translate-y-1 hover:border-primary/30"
                >
                  <h3 className="text-sm font-black leading-snug text-on-surface group-hover:text-primary transition-colors">
                    {item.heading}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </PageLayout>
  );
}
