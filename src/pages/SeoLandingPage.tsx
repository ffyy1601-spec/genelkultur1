import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

interface SeoLandingPageProps {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  intro: string;
  bullets: string[];
  sampleQuestions: string[];
  ctaLabel: string;
  ctaHref: string;
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
}: SeoLandingPageProps) {
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
        {
          "@type": "Question",
          name: `${heading} icin en iyi baslangic nasil yapilir?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sayfadaki aciklamalari inceleyip kategori seciminden ilgili oyuna gecerek hemen test cozmeye baslayabilirsin.",
          },
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <Seo title={title} description={description} path={path} keywords={keywords} schema={schema} />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.88),rgba(8,20,38,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-primary">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-on-surface md:text-6xl">{heading}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">{intro}</p>

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
              Tum Kategorileri Gor
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {bullets.map((bullet) => (
            <article key={bullet} className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6">
              <h2 className="text-xl font-black text-on-surface">{bullet}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                Bu alan, aradigin konuya odakli quiz deneyimi sunar ve duzenli cozum icin net bir baslangic noktasi verir.
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-3xl font-black tracking-tight text-on-surface md:text-4xl">Ornek Sorular</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {sampleQuestions.map((question, index) => (
              <article key={question} className="rounded-[1.3rem] border border-white/10 bg-background/25 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Ornek {index + 1}</p>
                <p className="mt-3 text-base font-bold leading-7 text-on-surface">{question}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6">
            <h2 className="text-2xl font-black text-on-surface">Neden bu sayfa var?</h2>
            <p className="mt-3 text-sm leading-7 text-on-surface-variant">
              Bu sayfa, aradigin konuya odakli bilgiye hizli ulasmani saglar. Ana uygulamaya gecmeden once ne cozecegini ve nasil bir deneyim bekleyecegini netlestirir.
            </p>
          </article>
          <article className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6">
            <h2 className="text-2xl font-black text-on-surface">Sonraki adim</h2>
            <p className="mt-3 text-sm leading-7 text-on-surface-variant">
              Hazirsan ilgili kategoriye gecip oyuna baslayabilir ya da kategori merkezinden farkli alanlari da kesfedebilirsin.
            </p>
          </article>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Bu alanda ne olculur?",
              text: "Sorular; temel kavramlari, ad-eser eslestirmelerini, kronolojiyi veya genel mantik akislarini ne kadar hizli kurabildigini gosterir.",
            },
            {
              title: "Kimler icin uygun?",
              text: "Kisa tekrar yapmak isteyenler, quiz'e girmeden once goz gezdirmek isteyenler ve konuya sade bir giris arayanlar icin uygundur.",
            },
            {
              title: "En iyi kullanim sekli",
              text: "Once ornek sorulari tara, sonra basliklari zihninde toparla ve hemen ardindan kategori quizine gecerek ritmi koru.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-[1.6rem] border border-white/10 bg-surface-container-low/75 p-6">
              <h2 className="text-xl font-black text-on-surface">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[1.8rem] border border-white/10 bg-surface-container-low/75 p-6 md:p-8">
          <h2 className="text-3xl font-black tracking-tight text-on-surface md:text-4xl">Hizli hazirlik notlari</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Sik cikan isimleri, kavramlari veya tarihleri gozden gecir.",
              "Ornek sorularin hangi mantikla kurulduguna dikkat et.",
              "Hazirsan beklemeden quiz akisini baslat ve tempoyu dusurme.",
            ].map((item, index) => (
              <article key={item} className="rounded-[1.3rem] border border-white/10 bg-background/20 p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary">Not {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
