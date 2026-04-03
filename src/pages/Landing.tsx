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
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[28vw] min-w-[18rem] overflow-hidden xl:block">
          <div className="landing-drift-slow absolute left-[-10%] top-[11%] h-[32rem] w-[20rem] rounded-full bg-[radial-gradient(circle,_rgba(84,203,73,0.18),_transparent_66%)] blur-3xl"></div>
          <div className="landing-drift absolute left-[6%] top-[17%] h-[24rem] w-[16rem] rounded-[2.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] shadow-[0_40px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
            <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent"></div>
            <div className="absolute left-5 right-5 top-10 h-28 rounded-[2rem] border border-primary/15 bg-[radial-gradient(circle_at_top,rgba(242,202,80,0.22),transparent_62%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]"></div>
            <div className="absolute left-5 right-10 top-[10.5rem] h-[4.6rem] rounded-[1.5rem] border border-white/10 bg-white/5"></div>
            <div className="absolute left-5 right-16 top-[16rem] h-3 rounded-full bg-primary/65"></div>
            <div className="absolute left-5 right-24 top-[18rem] h-3 rounded-full bg-white/18"></div>
            <div className="absolute bottom-6 left-5 flex gap-3">
              <span className="landing-pulse h-11 w-11 rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_30px_rgba(242,202,80,0.16)]"></span>
              <span className="landing-pulse-delay h-11 w-11 rounded-2xl border border-tertiary/20 bg-tertiary/10 shadow-[0_0_30px_rgba(113,232,98,0.14)]"></span>
            </div>
          </div>
          <div className="landing-drift-reverse absolute bottom-[13%] left-[10%] flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-surface-container-low/75 shadow-[0_22px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl">
            <span className="material-symbols-outlined text-[2.2rem] text-primary/90">auto_awesome</span>
          </div>
          <div className="landing-rotate absolute left-[62%] top-[24%] h-28 w-28 rounded-full border border-primary/20">
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_24px_rgba(242,202,80,0.5)]"></div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30vw] min-w-[19rem] overflow-hidden xl:block">
          <div className="landing-drift absolute right-[-8%] top-[8%] h-[34rem] w-[21rem] rounded-full bg-[radial-gradient(circle,_rgba(242,202,80,0.18),_transparent_64%)] blur-3xl"></div>
          <div className="landing-drift-reverse absolute right-[9%] top-[16%] flex h-[26rem] w-[15rem] flex-col overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] shadow-[0_40px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl">
            <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(242,202,80,0.16),transparent)]"></div>
            <div className="absolute inset-x-5 top-8 h-[11rem] rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),transparent_62%)]">
              <div className="landing-rotate absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20">
                <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-primary"></div>
              </div>
              <div className="landing-rotate-reverse absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
                <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-tertiary"></div>
              </div>
            </div>
            <div className="absolute bottom-7 left-5 right-5 grid grid-cols-2 gap-3">
              <div className="landing-pulse rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                <div className="h-14 rounded-[1rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]"></div>
              </div>
              <div className="landing-pulse-delay rounded-[1.5rem] border border-white/10 bg-white/6 p-4">
                <div className="h-14 rounded-[1rem] bg-[linear-gradient(135deg,rgba(242,202,80,0.2),rgba(255,255,255,0.04))]"></div>
              </div>
            </div>
          </div>
          <div className="landing-float absolute bottom-[12%] right-[12%] flex h-24 w-24 items-center justify-center rounded-full border border-white/12 bg-surface-container-low/80 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <span className="material-symbols-outlined text-[2rem] text-tertiary/90">neurology</span>
          </div>
          <div className="landing-drift-slow absolute bottom-[20%] right-[36%] h-32 w-32 rounded-[2.2rem] border border-primary/12 bg-primary/8 blur-sm"></div>
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
