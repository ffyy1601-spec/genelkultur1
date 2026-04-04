import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Genel Kultur Kategorileri",
  url: `${SITE_URL}${ROUTES.categories}`,
  inLanguage: "tr-TR",
  description: "Genel kultur, tarih, bilim ve sanat kategorileri ile quiz turlarina giris sayfasi.",
};

const categories = [
  {
    title: "Genel Kultur",
    text: "En genis kapsamli soru havuzu. Genel kultur sorulari icin ideal baslangic noktasi.",
    icon: "public",
    href: `${ROUTES.game}?category=genel`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdnK_XqjfbSatkYNHYb2sfF1a4K-F64geRJT5FG55s0G5KucVVZuooNh01SHJocF2ZwQi5R_s1IDf6Enqxxl30VAwBPISwh2UA9ufdlcWQSzmPcWdOK3nMKltU9EywtMxN8zzXjhNXtbkW452DI8cRuEJAY0Vtv02p5_fHj9AscVgrCA5J2HyppDAfLhWWQc_8owWDBkx4JSPV0dJ16FxmDFUqn_-qhimF4SdXVyOEWoazhYwhtaUbOa6acdB1YI_9OlkkwHdmsiod",
  },
  {
    title: "Tarih",
    text: "Imparatorluklar, savaslar, donum noktalari ve dunya tarihinden secilmis turlar.",
    icon: "history_edu",
    href: `${ROUTES.game}?category=tarih`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXquEfwDXcMwEPe3vkeJIjec0rhqgHiNIvECygM3_D95kxStQ-hroYtPEwVW_KCEiwd3fQkXCaSdfD34wEwFJeLOIfRHeOeH_r8xkk-ePRlU6ZaU_hzDnsn8sAcRZHwBTjR1X8KVOswT9eMMQaPs5r0IBAhhX6OHS4VkyMBUTi_qPjPIatY8X3ftaptOGs3tXoT79pdaLlR0lYkOfoH0yLy12OiMdi7wbEU-DQvVyRxPXZiNngn-EupoVKdHeQzi7DaMlKQRfDAX9c",
  },
  {
    title: "Bilim",
    text: "Evren, fizik, biyoloji, teknoloji ve bilim tarihine uzanan bilgi yarismasi alani.",
    icon: "science",
    href: `${ROUTES.game}?category=bilim`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp8Ad3dg2wbQh1CO95msXso0lgnT0x2u2O1U8olNbrI070hhLBBNouzM288C5AlhyvvHhjhXliLPyH4vx2JlmqA-cNOtUYE3Fo68bUyqlDO5xcrZmeIVpxDFcLYxA3KnQ_ASxJ_nhEGJ7fD3_6Xqq8fuzgsTOZdQZQducWfu5lIF53xmaCFOhhr627xVi3ocADRLvpY3ZhNpk3i32IpGiSSKCtQ9P1l-pQ6pFNtQqvDEcaoUXE_f62dZ1DJUF0Klitjb2PuPEtwjCF",
  },
  {
    title: "Sanat",
    text: "Resim, muzik, edebiyat ve sinema dunyasindan secilmis yaratici soru setleri.",
    icon: "palette",
    href: `${ROUTES.game}?category=sanat`,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6zIb4wHbnaHoxtskMpZwH48RTw8Afvy7Cmt3C09NeoVBc6uwIOG468gt8QZSmUlmzSQyOx8wubUuAE8d2wc79KDI_5pjNg78NVF-IntEWTkPfJn0N_Uvqgw2XmgdHvfYdBjm7IiF_cIvYSDhjn43pPJdkfNPf9-jM44vdimJjMMMGlm6_ARYA3hiWPlJ35tQOkwD1vp_BPfqllW_ktBmt7_c2w42hbCsOFCu0jKNyOM85XLvMd8LGE_NgR5TDDK7C93wve4MPWuFB",
  },
];

export default function CategorySelect() {
  return (
    <PageLayout>
      <Seo
        title="Genel Kultur Testi Kategorileri | Genel Kultur Sorulari ve Quiz"
        description="Genel kultur, tarih, bilim ve sanat kategorilerinden birini sec. Hemen bilgi yarismasina basla ve genel kultur seviyeni olc."
        path={ROUTES.categories}
        keywords={["genel kultur testi", "genel kultur sorulari", "quiz kategorileri", "bilgi yarismasi", "genel kultur"]}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Kategori Secimi</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            Sana uygun kategoriyle oyuna gir.
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            Her kart kendi atmosferini tasir. Dilersen genel kulturle basla, dilersen tarih,
            bilim ya da sanat alanina dogrudan gec.
          </p>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group relative min-h-[320px] overflow-hidden rounded-[1.8rem] border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_22px_60px_rgba(0,0,0,0.30)]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,41,0.20),rgba(4,19,41,0.90))]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,202,80,0.16),transparent_38%)] opacity-80"></div>

              <div className="relative z-10 flex h-full flex-col p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary backdrop-blur-md">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>

                <div className="mt-auto">
                  <h2 className="text-2xl font-black text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-white/78">{item.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary">
                    Hemen Basla
                    <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
