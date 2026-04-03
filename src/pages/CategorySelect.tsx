import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";

export default function CategorySelect() {
  return (
    <PageLayout>
      <Helmet>
        <title>Kategori Sec - Genel Kultur Bilgi Yarismasi</title>
        <meta
          name="description"
          content="Tarih, bilim, sanat veya genel kultur kategorilerinden birini sec ve yarismaya hemen basla."
        />
      </Helmet>

      <main className="mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-4 pt-4 md:px-10 md:pb-20 md:pt-10">
        <section className="relative mb-5 md:mb-16">
          <div className="mb-3 inline-block rounded-full border border-outline-variant/15 bg-surface-container-high px-3 py-1 md:mb-6 md:px-4 md:py-1.5">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-primary md:text-sm">Kategori Secimi</span>
          </div>
          <h1 className="mb-3 text-3xl font-black leading-tight tracking-tighter text-on-background md:mb-6 md:text-6xl">
            Bilgini test et,
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
              kendine uygun alandan basla.
            </span>
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-on-surface-variant md:text-lg md:leading-8">
            Her kategori farkli bir zihinsel ritim sunar. Istersen genel kulturle basla, istersen
            dogrudan tarih, bilim ya da sanat tarafina gir.
          </p>
        </section>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <Link
            to="/game?category=genel"
            className="group relative overflow-hidden rounded-[1.35rem] border border-transparent bg-surface-container-low p-4 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] md:rounded-[2rem] md:p-8"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdnK_XqjfbSatkYNHYb2sfF1a4K-F64geRJT5FG55s0G5KucVVZuooNh01SHJocF2ZwQi5R_s1IDf6Enqxxl30VAwBPISwh2UA9ufdlcWQSzmPcWdOK3nMKltU9EywtMxN8zzXjhNXtbkW452DI8cRuEJAY0Vtv02p5_fHj9AscVgrCA5J2HyppDAfLhWWQc_8owWDBkx4JSPV0dJ16FxmDFUqn_-qhimF4SdXVyOEWoazhYwhtaUbOa6acdB1YI_9OlkkwHdmsiod')",
              }}
            ></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10 md:mb-12 md:h-16 md:w-16">
                <span className="material-symbols-outlined text-3xl text-primary md:text-4xl">public</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-on-background md:mb-3 md:text-2xl">Genel Kultur</h3>
              <p className="text-xs leading-5 text-on-surface-variant md:text-sm md:leading-7">
                Dunyadan ilginc bilgiler, temel kavramlar ve genis yelpazeli sorular.
              </p>
              <div className="mt-auto pt-4 text-xs font-bold text-primary opacity-80 transition-opacity group-hover:opacity-100 md:pt-8 md:text-sm md:opacity-0">
                Hemen Basla
              </div>
            </div>
          </Link>

          <Link
            to="/game?category=tarih"
            className="group relative overflow-hidden rounded-[1.35rem] border border-transparent bg-surface-container-low p-4 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] md:rounded-[2rem] md:p-8"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXquEfwDXcMwEPe3vkeJIjec0rhqgHiNIvECygM3_D95kxStQ-hroYtPEwVW_KCEiwd3fQkXCaSdfD34wEwFJeLOIfRHeOeH_r8xkk-ePRlU6ZaU_hzDnsn8sAcRZHwBTjR1X8KVOswT9eMMQaPs5r0IBAhhX6OHS4VkyMBUTi_qPjPIatY8X3ftaptOGs3tXoT79pdaLlR0lYkOfoH0yLy12OiMdi7wbEU-DQvVyRxPXZiNngn-EupoVKdHeQzi7DaMlKQRfDAX9c')",
              }}
            ></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10 md:mb-12 md:h-16 md:w-16">
                <span className="material-symbols-outlined text-3xl text-primary md:text-4xl">history_edu</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-on-background md:mb-3 md:text-2xl">Tarih</h3>
              <p className="text-xs leading-5 text-on-surface-variant md:text-sm md:leading-7">
                Imparatorluklar, donum noktalari ve dunyayi degistiren olaylar.
              </p>
              <div className="mt-auto pt-4 text-xs font-bold text-primary opacity-80 transition-opacity group-hover:opacity-100 md:pt-8 md:text-sm md:opacity-0">
                Hemen Basla
              </div>
            </div>
          </Link>

          <Link
            to="/game?category=bilim"
            className="group relative overflow-hidden rounded-[1.35rem] border border-transparent bg-surface-container-low p-4 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] md:rounded-[2rem] md:p-8"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBp8Ad3dg2wbQh1CO95msXso0lgnT0x2u2O1U8olNbrI070hhLBBNouzM288C5AlhyvvHhjhXliLPyH4vx2JlmqA-cNOtUYE3Fo68bUyqlDO5xcrZmeIVpxDFcLYxA3KnQ_ASxJ_nhEGJ7fD3_6Xqq8fuzgsTOZdQZQducWfu5lIF53xmaCFOhhr627xVi3ocADRLvpY3ZhNpk3i32IpGiSSKCtQ9P1l-pQ6pFNtQqvDEcaoUXE_f62dZ1DJUF0Klitjb2PuPEtwjCF')",
              }}
            ></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10 md:mb-12 md:h-16 md:w-16">
                <span className="material-symbols-outlined text-3xl text-primary md:text-4xl">science</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-on-background md:mb-3 md:text-2xl">Bilim</h3>
              <p className="text-xs leading-5 text-on-surface-variant md:text-sm md:leading-7">
                Evren, teknoloji, doga ve kesiflerle dolu sorular.
              </p>
              <div className="mt-auto pt-4 text-xs font-bold text-primary opacity-80 transition-opacity group-hover:opacity-100 md:pt-8 md:text-sm md:opacity-0">
                Hemen Basla
              </div>
            </div>
          </Link>

          <Link
            to="/game?category=sanat"
            className="group relative overflow-hidden rounded-[1.35rem] border border-transparent bg-surface-container-low p-4 text-left transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(4,19,41,0.8)] md:rounded-[2rem] md:p-8"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 grayscale transition-opacity group-hover:opacity-20"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6zIb4wHbnaHoxtskMpZwH48RTw8Afvy7Cmt3C09NeoVBc6uwIOG468gt8QZSmUlmzSQyOx8wubUuAE8d2wc79KDI_5pjNg78NVF-IntEWTkPfJn0N_Uvqgw2XmgdHvfYdBjm7IiF_cIvYSDhjn43pPJdkfNPf9-jM44vdimJjMMMGlm6_ARYA3hiWPlJ35tQOkwD1vp_BPfqllW_ktBmt7_c2w42hbCsOFCu0jKNyOM85XLvMd8LGE_NgR5TDDK7C93wve4MPWuFB')",
              }}
            ></div>
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-container-highest transition-all group-hover:scale-110 group-hover:bg-primary/10 md:mb-12 md:h-16 md:w-16">
                <span className="material-symbols-outlined text-3xl text-primary md:text-4xl">palette</span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-on-background md:mb-3 md:text-2xl">Sanat</h3>
              <p className="text-xs leading-5 text-on-surface-variant md:text-sm md:leading-7">
                Resim, muzik, edebiyat ve sinema dunyasindan secilmis sorular.
              </p>
              <div className="mt-auto pt-4 text-xs font-bold text-primary opacity-80 transition-opacity group-hover:opacity-100 md:pt-8 md:text-sm md:opacity-0">
                Hemen Basla
              </div>
            </div>
          </Link>
        </div>
      </main>
    </PageLayout>
  );
}
