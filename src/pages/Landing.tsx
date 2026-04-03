import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";
import heroImage from "../assets/hero.png";

export default function Landing() {
  return (
    <PageLayout>
      <Helmet>
        <title>Genel Kultur Bilgi Yarismasi - Bilgini Test Et</title>
        <meta
          name="description"
          content="Kategori sec, hemen basla ve sonucunu gor. Sade ve hizli bir genel kultur bilgi yarismasi deneyimi."
        />
        <meta
          name="keywords"
          content="genel kultur, bilgi yarismasi, quiz, tarih, bilim, sanat, test"
        />
      </Helmet>

      <main className="relative flex min-h-[100dvh] flex-grow items-center justify-center overflow-hidden px-4 py-8 md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0 -z-30">
          <img
            alt="Bilgi yarismasi arka plan gorseli"
            className="h-full w-full object-cover opacity-[0.22] saturate-[0.85]"
            src={heroImage}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(242,202,80,0.16),_transparent_34%),linear-gradient(180deg,_rgba(4,19,41,0.42),_rgba(4,19,41,0.86))]"></div>
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
          <div className="absolute left-[10%] top-[14%] h-36 w-36 rounded-full border border-primary/12 bg-primary/8 blur-3xl md:h-48 md:w-48"></div>
          <div className="absolute right-[8%] top-[20%] h-48 w-48 rounded-full border border-primary-container/12 bg-primary-container/10 blur-3xl md:h-72 md:w-72"></div>
          <div className="absolute bottom-[12%] left-[18%] h-40 w-40 rounded-full bg-white/4 blur-3xl md:h-60 md:w-60"></div>
          <div className="absolute bottom-[10%] right-[12%] h-28 w-28 rounded-full border border-white/8 bg-white/5 blur-2xl md:h-40 md:w-40"></div>
          <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_49%,transparent_100%)] opacity-25"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:24px_24px] opacity-[0.16] md:bg-[length:30px_30px]"></div>
        </div>

        <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="absolute top-1/2 -z-10 h-44 w-44 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px] md:h-64 md:w-64 md:blur-[110px]"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 hidden h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8 md:block"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 hidden h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 md:block"></div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary md:mb-5 md:text-sm md:tracking-[0.28em]">
            GENELKULTUR.COM
          </p>

          <h1 className="text-4xl font-black leading-none tracking-tighter text-on-surface md:text-7xl">
            Genel Kultur
            <br />
            Bilgi Yarismasi
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-on-surface-variant md:mt-6 md:text-lg md:leading-8">
            Kategori sec, hemen basla ve sonucunu gor. Sade, hizli ve dogrudan oyuna odaklanan
            bir deneyim.
          </p>

          <div className="mt-6 flex flex-col items-center gap-5 md:mt-10 md:gap-8">
            <Link
              to="/categories"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-3.5 text-base font-black text-on-primary shadow-[0_18px_45px_rgba(242,202,80,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 md:px-8 md:py-4 md:text-lg"
            >
              Hemen Basla
              <span className="material-symbols-outlined">play_arrow</span>
            </Link>

            <div className="grid w-full max-w-2xl grid-cols-3 gap-2.5 md:gap-4">
              <div className="rounded-[1.2rem] border border-white/8 bg-surface-container-low/75 px-3 py-3 backdrop-blur-xl md:rounded-[1.6rem] md:px-5 md:py-4">
                <div className="text-xl font-black text-primary md:text-2xl">4</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-on-surface-variant md:text-xs md:tracking-[0.2em]">Kategori</div>
              </div>
              <div className="rounded-[1.2rem] border border-white/8 bg-surface-container-low/75 px-3 py-3 backdrop-blur-xl md:rounded-[1.6rem] md:px-5 md:py-4">
                <div className="text-xl font-black text-primary md:text-2xl">500+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-on-surface-variant md:text-xs md:tracking-[0.2em]">Soru</div>
              </div>
              <div className="rounded-[1.2rem] border border-white/8 bg-surface-container-low/75 px-3 py-3 backdrop-blur-xl md:rounded-[1.6rem] md:px-5 md:py-4">
                <div className="text-xl font-black text-primary md:text-2xl">15</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-on-surface-variant md:text-xs md:tracking-[0.2em]">Tur</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
