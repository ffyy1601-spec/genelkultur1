import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import heroImage from "../assets/hero.png";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GenelKultur.com.tr",
    url: SITE_URL,
    inLanguage: "tr-TR",
    description: "Genel kultur sorulari, genel kultur testi ve bilgi yarismasi deneyimi sunan modern quiz platformu.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/genel-kultur-kategorileri`,
      "query-input": "required name=genel kultur",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenelKultur.com.tr",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Genel kultur testi nasil oynanir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ana sayfadan kategori secilir, soru turu baslatilir ve her turun sonunda puan ekrani gorulur.",
        },
      },
      {
        "@type": "Question",
        name: "Sitede hangi genel kultur kategorileri var?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Genel kultur, tarih, bilim ve sanat kategorilerinde farkli soru havuzlari bulunur.",
        },
      },
    ],
  },
];

export default function Landing() {
  return (
    <PageLayout>
      <Seo
        title="Genel Kultur Testi, Sorulari ve Bilgi Yarismasi | GenelKultur.com.tr"
        description="Genel kultur sorulari, genel kultur testi ve bilgi yarismasi deneyimi. Hemen oyna, kategorini sec ve bilgini guclendir."
        path={ROUTES.home}
        keywords={[
          "genel kultur",
          "genel kültür",
          "genel kültür soruları",
          "genel kültür testi",
          "genel kültür yarışması",
          "bilgi yarismasi",
          "quiz",
        ]}
        schema={schema}
      />

      <main>
        <section className="relative flex min-h-[88vh] items-center overflow-hidden px-4 py-12 md:px-10 md:py-20">
          <div className="pointer-events-none absolute inset-0 -z-20">
            <img
              alt="Genel kultur bilgi yarismasi arka plan gorseli"
              className="h-full w-full object-cover opacity-[0.18] saturate-[0.9]"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,202,80,0.18),_transparent_34%),linear-gradient(180deg,_rgba(4,19,41,0.42),_rgba(4,19,41,0.92))]"></div>
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.32em] text-primary md:text-sm">
                GENEL KULTUR TESTI
              </p>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-on-surface md:text-7xl">
                Genel kultur sorulari ile bilgini test et, hizli ve profesyonel bir deneyim yasat.
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
                Genel kultur, tarih, bilim ve sanat kategorilerinde hazirlanan bilgi yarismasi
                turlari sayesinde hem eglen hem de kendini olc. Site, hizli acilan sayfalar ve
                tekrar oynanabilir soru havuzlari ile modern quiz deneyimi sunar.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={ROUTES.categories}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-black text-on-primary shadow-[0_18px_45px_rgba(242,202,80,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
                >
                  Genel Kultur Testine Basla
                  <span className="material-symbols-outlined">play_arrow</span>
                </Link>
                <Link
                  to={ROUTES.about}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-surface-container-low/70 px-7 py-4 text-base font-bold text-on-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  Platformu Kesfet
                </Link>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-white/10 bg-surface-container-low/75 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-surface-container-high p-4 text-center">
                  <div className="text-2xl font-black text-primary">4</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant">Kategori</div>
                </div>
                <div className="rounded-2xl bg-surface-container-high p-4 text-center">
                  <div className="text-2xl font-black text-primary">500+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant">Soru</div>
                </div>
                <div className="rounded-2xl bg-surface-container-high p-4 text-center">
                  <div className="text-2xl font-black text-primary">15</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant">Tur</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-primary/15 bg-primary/10 p-4">
                  <h2 className="text-lg font-black text-on-surface">Genel kultur yarismasi icin optimize edildi</h2>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    Temiz arayuz, hizli gecisler ve tekrar oynama akisi sayesinde hem kullanici
                    deneyimi hem de teknik SEO altyapisi guclendirildi.
                  </p>
                </div>
                <div className="rounded-2xl bg-surface-container-high p-4">
                  <p className="text-sm font-semibold text-on-surface">En cok aranan niyetler</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["genel kultur", "genel kültür testi", "genel kültür soruları", "bilgi yarismasi"].map((item) => (
                      <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-on-surface-variant">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-10 md:py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Genel Kultur Sorulari",
                text: "Dunya, gundem, cografya, spor, toplum ve farkli bilgi alanlarindan dengeli soru setleri.",
              },
              {
                title: "Genel Kultur Testi Deneyimi",
                text: "Saniyeler icinde baslayan, mobilde ve masaustunde hizli acilan modern quiz akisi.",
              },
              {
                title: "Bilgi Yarismasi Kurgusu",
                text: "Puan, dogru-yanlis analizi ve tekrar oynama mantigi ile odakli bir yarismaya donusur.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-surface-container-low p-6">
                <h2 className="text-2xl font-black text-on-surface">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-14 md:px-10 md:pb-20">
          <div className="rounded-[2rem] border border-white/10 bg-surface-container-low p-6 md:p-10">
            <h2 className="text-3xl font-black tracking-tight text-on-surface md:text-5xl">
              Neden bu genel kultur sitesi daha profesyonel bir temel sunuyor?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-black text-primary">Kullanici odakli sayfa yapisi</h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Ana sayfa, kategori sayfasi, hakkimizda, iletisim ve yasal sayfalarla site
                  mimarisi net tutulur. Bu sayede hem ziyaretciler hem de arama motorlari sayfalar
                  arasinda rahat gezer.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-primary">Arama amacina uygun metinler</h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Genel kultur, genel kultur testi, genel kultur sorulari ve bilgi yarismasi gibi
                  hedef aramalarla uyumlu basliklar, aciklamalar ve icerik bloklari hazirlandi.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-primary">Teknik SEO dosyalari</h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Sitemap, robots, canonical etiketleri, sosyal paylasim meta etiketleri ve
                  yapisal veri ile Google botlari icin guclu bir sinyal katmani eklendi.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-black text-primary">Temiz URL ve ic linkleme</h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  Hash yapisindan cikilip daha profesyonel URL yapisina gecildi. Bu sayede paylasim,
                  taranabilirlik ve marka algisi iyilestirildi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-10 md:pb-24">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-white/10 bg-surface-container-low p-6">
              <h2 className="text-2xl font-black text-on-surface">Genel kultur testi nasil oynanir?</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                Kategori secimi yapilir, soru turu baslatilir ve her dogru cevap puan kazandirir.
                Tur sonunda sonuc ekraninda basari orani gorulur. Bu akis, kullanici icin net ve
                hizli bir deneyim yaratir.
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-white/10 bg-surface-container-low p-6">
              <h2 className="text-2xl font-black text-on-surface">Genel kultur sorulari kimler icin uygun?</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                Kendini sinamak isteyen ogrenciler, bilgi yarismasi sevenler, eglenceli bir test
                arayan ziyaretciler ve duzenli tekrar yapmak isteyen herkes bu platformu kullanabilir.
              </p>
            </article>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
