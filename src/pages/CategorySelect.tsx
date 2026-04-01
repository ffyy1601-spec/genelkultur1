import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";
import heroImage from "../assets/hero.png";

export default function CategorySelect() {
  return (
    <PageLayout>
      <Helmet>
        <title>Kategori Seç - Genel Kültür Bilgi Yarışması</title>
        <meta
          name="description"
          content="Tarih, bilim, sanat veya genel kültür kategorilerinden birini seç ve yarışmaya hemen başla."
        />
      </Helmet>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-20 pt-10 md:px-10">
        <section className="relative mb-16">
          <div className="mb-6 inline-block rounded-full border border-outline-variant/15 bg-surface-container-high px-4 py-1.5">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Kategori Seçimi</span>
          </div>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tighter text-on-background md:text-6xl">
            Bilgini test et,
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              kendine uygun alandan başla.
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            Her kategori farklı bir zihinsel ritim sunar. İstersen geniş alanlı genel kültürle başla, istersen doğrudan tarih, bilim ya da sanat tarafına gir.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Link to="/game?category=genel" className="group relative overflow-hidden rounded-[2rem] border border-transparent bg-surface-container-low p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)]">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdnK_XqjfbSatkYNHYb2sfF1a4K-F64geRJT5FG55s0G5KucVVZuooNh01SHJocF2ZwQi5R_s1IDf6Enqxxl30VAwBPISwh2UA9ufdlcWQSzmPcWdOK3nMKltU9EywtMxN8zzXjhNXtbkW452DI8cRuEJAY0Vtv02p5_fHj9AscVgrCA5J2HyppDAfLhWWQc_8owWDBkx4JSPV0dJ16FxmDFUqn_-qhimF4SdXVyOEWoazhYwhtaUbOa6acdB1YI_9OlkkwHdmsiod')" }}></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-4xl text-primary">public</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-on-background">Genel Kültür</h3>
              <p className="text-sm leading-7 text-on-surface-variant">Dünyadan ilginç bilgiler, temel kavramlar ve geniş yelpazeli sorular.</p>
              <div className="mt-auto pt-8 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">Hemen Başla</div>
            </div>
          </Link>

          <Link to="/game?category=tarih" className="group relative overflow-hidden rounded-[2rem] border border-transparent bg-surface-container-low p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)]">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXquEfwDXcMwEPe3vkeJIjec0rhqgHiNIvECygM3_D95kxStQ-hroYtPEwVW_KCEiwd3fQkXCaSdfD34wEwFJeLOIfRHeOeH_r8xkk-ePRlU6ZaU_hzDnsn8sAcRZHwBTjR1X8KVOswT9eMMQaPs5r0IBAhhX6OHS4VkyMBUTi_qPjPIatY8X3ftaptOGs3tXoT79pdaLlR0lYkOfoH0yLy12OiMdi7wbEU-DQvVyRxPXZiNngn-EupoVKdHeQzi7DaMlKQRfDAX9c')" }}></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-4xl text-primary">history_edu</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-on-background">Tarih</h3>
              <p className="text-sm leading-7 text-on-surface-variant">İmparatorluklar, dönüm noktaları ve dünyayı değiştiren olaylar.</p>
              <div className="mt-auto pt-8 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">Hemen Başla</div>
            </div>
          </Link>

          <Link to="/game?category=bilim" className="group relative overflow-hidden rounded-[2rem] border border-transparent bg-surface-container-low p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)]">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp8Ad3dg2wbQh1CO95msXso0lgnT0x2u2O1U8olNbrI070hhLBBNouzM288C5AlhyvvHhjhXliLPyH4vx2JlmqA-cNOtUYE3Fo68bUyqlDO5xcrZmeIVpxDFcLYxA3KnQ_ASxJ_nhEGJ7fD3_6Xqq8fuzgsTOZdQZQducWfu5lIF53xmaCFOhhr627xVi3ocADRLvpY3ZhNpk3i32IpGiSSKCtQ9P1l-pQ6pFNtQqvDEcaoUXE_f62dZ1DJUF0Klitjb2PuPEtwjCF')" }}></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-4xl text-primary">science</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-on-background">Bilim</h3>
              <p className="text-sm leading-7 text-on-surface-variant">Evren, teknoloji, doğa ve keşiflerle dolu sorular.</p>
              <div className="mt-auto pt-8 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">Hemen Başla</div>
            </div>
          </Link>

          <Link to="/game?category=sanat" className="group relative overflow-hidden rounded-[2rem] border border-transparent bg-surface-container-low p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)]">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6zIb4wHbnaHoxtskMpZwH48RTw8Afvy7Cmt3C09NeoVBc6uwIOG468gt8QZSmUlmzSQyOx8wubUuAE8d2wc79KDI_5pjNg78NVF-IntEWTkPfJn0N_Uvqgw2XmgdHvfYdBjm7IiF_cIvYSDhjn43pPJdkfNPf9-jM44vdimJjMMMGlm6_ARYA3hiWPlJ35tQOkwD1vp_BPfqllW_ktBmt7_c2w42hbCsOFCu0jKNyOM85XLvMd8LGE_NgR5TDDK7C93wve4MPWuFB')" }}></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-12 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10">
                <span className="material-symbols-outlined text-4xl text-primary">palette</span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-on-background">Sanat</h3>
              <p className="text-sm leading-7 text-on-surface-variant">Resim, müzik, edebiyat ve sinema dünyasından seçilmiş sorular.</p>
              <div className="mt-auto pt-8 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">Hemen Başla</div>
            </div>
          </Link>
        </div>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-low">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div className="space-y-4 p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Kısa Bilgi</p>
              <h2 className="text-3xl font-black tracking-tight text-on-surface">Her tur kısa, net ve tekrar oynanabilir.</h2>
              <p className="text-sm leading-7 text-on-surface-variant">
                Bu yapı, kullanıcıyı yormadan düzenli olarak geri dönmesini sağlayan pratik bir deneyim üretir.
              </p>
            </div>
            <img alt="Kategori seçimi görsel alanı" className="h-full min-h-[280px] w-full object-cover opacity-30" src={heroImage} />
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
