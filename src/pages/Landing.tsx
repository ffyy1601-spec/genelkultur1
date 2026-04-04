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
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GenelKultur.com.tr",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
  },
];

const featuredCategories = [
  {
    title: "Genel Kultur",
    subtitle: "Genis kapsama sahip hizli quiz turlari",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdnK_XqjfbSatkYNHYb2sfF1a4K-F64geRJT5FG55s0G5KucVVZuooNh01SHJocF2ZwQi5R_s1IDf6Enqxxl30VAwBPISwh2UA9ufdlcWQSzmPcWdOK3nMKltU9EywtMxN8zzXjhNXtbkW452DI8cRuEJAY0Vtv02p5_fHj9AscVgrCA5J2HyppDAfLhWWQc_8owWDBkx4JSPV0dJ16FxmDFUqn_-qhimF4SdXVyOEWoazhYwhtaUbOa6acdB1YI_9OlkkwHdmsiod",
  },
  {
    title: "Tarih",
    subtitle: "Imparatorluklar, savaslar ve donum noktalari",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXquEfwDXcMwEPe3vkeJIjec0rhqgHiNIvECygM3_D95kxStQ-hroYtPEwVW_KCEiwd3fQkXCaSdfD34wEwFJeLOIfRHeOeH_r8xkk-ePRlU6ZaU_hzDnsn8sAcRZHwBTjR1X8KVOswT9eMMQaPs5r0IBAhhX6OHS4VkyMBUTi_qPjPIatY8X3ftaptOGs3tXoT79pdaLlR0lYkOfoH0yLy12OiMdi7wbEU-DQvVyRxPXZiNngn-EupoVKdHeQzi7DaMlKQRfDAX9c",
  },
  {
    title: "Bilim",
    subtitle: "Evren, teknoloji ve merak uyandiran bilgiler",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp8Ad3dg2wbQh1CO95msXso0lgnT0x2u2O1U8olNbrI070hhLBBNouzM288C5AlhyvvHhjhXliLPyH4vx2JlmqA-cNOtUYE3Fo68bUyqlDO5xcrZmeIVpxDFcLYxA3KnQ_ASxJ_nhEGJ7fD3_6Xqq8fuzgsTOZdQZQducWfu5lIF53xmaCFOhhr627xVi3ocADRLvpY3ZhNpk3i32IpGiSSKCtQ9P1l-pQ6pFNtQqvDEcaoUXE_f62dZ1DJUF0Klitjb2PuPEtwjCF",
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
          "genel kultur sorulari",
          "genel kultur testi",
          "genel kultur yarismasi",
          "bilgi yarismasi",
          "quiz",
        ]}
        schema={schema}
      />

      <main>
        <section className="relative overflow-hidden px-4 pb-14 pt-10 md:px-10 md:pb-20 md:pt-16">
          <div className="pointer-events-none absolute inset-0 -z-30">
            <img
              alt="Genel kultur bilgi yarismasi arka plan gorseli"
              className="h-full w-full object-cover opacity-[0.16] saturate-[0.9]"
              src={heroImage}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(242,202,80,0.18),transparent_32%),linear-gradient(180deg,rgba(4,19,41,0.55),rgba(4,19,41,0.94))]"></div>
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute left-[8%] top-[10%] h-40 w-40 rounded-full bg-primary/12 blur-3xl"></div>
            <div className="absolute right-[10%] top-[16%] h-56 w-56 rounded-full bg-tertiary/10 blur-3xl"></div>
            <div className="absolute bottom-[12%] left-[22%] h-48 w-48 rounded-full bg-white/6 blur-3xl"></div>
          </div>

          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">
                Genel Kultur Platformu
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-on-surface sm:text-5xl md:text-7xl">
                Bilgini sahneye cikar.
                <span className="mt-3 block bg-gradient-to-r from-primary via-[#ffe28a] to-white bg-clip-text text-transparent">
                  Genel kultur testine basla.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-on-surface-variant md:text-xl">
                Genel kultur, tarih, bilim ve sanat kategorilerinde hazirlanan soru turlariyla
                hizli, temiz ve keyifli bir bilgi yarismasi deneyimi yasatir.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to={ROUTES.categories}
                  className="inline-flex min-h-16 items-center justify-center gap-3 rounded-[1.6rem] bg-[linear-gradient(135deg,#f2ca50,#ffd96a)] px-8 py-4 text-lg font-black text-[#0c1c35] shadow-[0_22px_60px_rgba(242,202,80,0.30)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(242,202,80,0.36)] md:px-10 md:text-xl"
                >
                  Genel Kultur Testine Basla
                  <span className="material-symbols-outlined text-[1.7rem]">play_arrow</span>
                </Link>

                <div className="flex flex-wrap gap-3 text-sm text-on-surface-variant">
                  <span className="rounded-full border border-white/10 bg-surface-container-low/70 px-4 py-2">
                    500+ soru
                  </span>
                  <span className="rounded-full border border-white/10 bg-surface-container-low/70 px-4 py-2">
                    4 kategori
                  </span>
                  <span className="rounded-full border border-white/10 bg-surface-container-low/70 px-4 py-2">
                    Hizli baslangic
                  </span>
                </div>
              </div>
            </div>

            <aside className="rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] p-5 shadow-[0_34px_100px_rgba(0,0,0,0.30)] backdrop-blur-2xl md:p-6">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-surface-container-high/80 p-4 text-center">
                  <div className="text-2xl font-black text-primary">4</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant">Kategori</div>
                </div>
                <div className="rounded-2xl bg-surface-container-high/80 p-4 text-center">
                  <div className="text-2xl font-black text-primary">500+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant">Soru</div>
                </div>
                <div className="rounded-2xl bg-surface-container-high/80 p-4 text-center">
                  <div className="text-2xl font-black text-primary">15</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-on-surface-variant">Tur</div>
                </div>
              </div>

              <div className="mt-5 rounded-[1.8rem] border border-white/10 bg-[#12233e]/80 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Bugun ne oynayacaksin?</p>
                    <h2 className="mt-2 text-2xl font-black text-on-surface">Hemen bir kategori sec.</h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {featuredCategories.map((item) => (
                    <div
                      key={item.title}
                      className="relative overflow-hidden rounded-[1.5rem] border border-white/10 p-4"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-25"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,41,0.92),rgba(4,19,41,0.58))]"></div>
                      <div className="relative flex items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-black text-on-surface">{item.title}</h3>
                          <p className="mt-1 text-sm text-on-surface-variant">{item.subtitle}</p>
                        </div>
                        <span className="material-symbols-outlined text-primary">arrow_forward</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-16 md:px-10 md:pb-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Hizli Baslangic",
                text: "Beklemeden kategori sec, oyuna gir ve sonucunu aninda gor.",
              },
              {
                title: "Dengeli Soru Havuzu",
                text: "Genel kultur, tarih, bilim ve sanat alanlarinda farkli zorluklarda sorular.",
              },
              {
                title: "Mobil Uyumlu Deneyim",
                text: "Telefon ve masaustunde rahat okunan, hizli acilan modern bir arayuz.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-surface-container-low/85 p-6">
                <h2 className="text-2xl font-black text-on-surface">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
