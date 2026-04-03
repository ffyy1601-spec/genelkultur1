import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";

export default function Results() {
  const location = useLocation();
  const hasResult = Boolean(location.state);
  const { score = 0, correct = 0, total = 10 } = location.state || {};
  const wrong = total - correct;
  const successRate = Math.round((correct / total) * 100) || 0;

  return (
    <PageLayout>
      <Helmet>
        <title>Sonuclar - Genel Kultur Bilgi Yarismasi</title>
        <meta
          name="description"
          content="Yarismayi tamamladin. Basari oranini, dogru ve yanlis sayilarini simdi inceleyebilirsin."
        />
      </Helmet>

      <main className="flex min-h-[100dvh] flex-grow items-center px-4 pb-4 pt-4 md:px-10 md:pb-16 md:pt-10">
        <div className="mx-auto w-full max-w-4xl">
          <section className="relative overflow-hidden rounded-[1.6rem] bg-surface-container-low p-4 text-center md:rounded-[2rem] md:p-16">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[60px] md:-right-24 md:-top-24 md:h-64 md:w-64 md:blur-[80px]"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-tertiary/5 blur-[60px] md:-bottom-24 md:-left-24 md:h-64 md:w-64 md:blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center">
              {!hasResult ? (
                <>
                  <div className="mb-3 flex justify-center md:mb-6">
                    <span className="material-symbols-outlined text-5xl text-primary md:text-7xl">info</span>
                  </div>
                  <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-on-background md:mb-3 md:text-5xl">
                    Henuz bir sonuc yok
                  </h1>
                  <p className="mb-6 max-w-lg text-sm leading-6 text-on-surface-variant md:mb-10 md:text-lg">
                    Bu sayfa oyun tamamlandiktan sonra detayli sonucu gosterir. Yeni bir tur baslatip
                    puanini gorebilirsin.
                  </p>
                  <Link
                    to="/categories"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-primary-container px-7 py-3.5 text-base font-bold text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-1 md:gap-3 md:px-10 md:py-5 md:text-lg"
                  >
                    Oyuna Basla
                    <span className="material-symbols-outlined">play_arrow</span>
                  </Link>
                </>
              ) : (
                <>
                  <div className="mb-3 flex justify-center md:mb-6">
                    <span
                      className="material-symbols-outlined text-6xl text-primary md:text-8xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      military_tech
                    </span>
                  </div>
                  <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-on-background md:text-5xl">
                    Oyun Bitti
                  </h1>
                  <p className="mb-5 max-w-lg text-sm leading-6 text-on-surface-variant md:mb-12 md:text-lg">
                    Performansini asagidan inceleyebilir ve yeni bir tur baslatabilirsin.
                  </p>

                  <div className="mb-5 grid w-full grid-cols-3 gap-2.5 md:mb-12 md:gap-6">
                    <div className="rounded-[1.3rem] bg-surface-container-high p-3 shadow-xl transition-transform hover:scale-[1.02] md:rounded-3xl md:p-8">
                      <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-primary md:mb-2 md:text-xs md:tracking-widest">
                        Puan
                      </span>
                      <div className="text-2xl font-black text-on-background md:text-5xl">
                        {score}
                        <span className="block text-xs text-on-surface-variant/50 md:inline md:pl-1 md:text-2xl">
                          /{total * 100}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[1.3rem] bg-surface-container-high p-3 shadow-xl transition-transform hover:scale-[1.02] md:rounded-3xl md:p-8">
                      <div className="mb-1 flex items-center justify-center gap-1 md:mb-2 md:gap-2">
                        <span
                          className="material-symbols-outlined text-base text-tertiary md:text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-tertiary md:text-xs md:tracking-widest">
                          Dogru
                        </span>
                      </div>
                      <div className="text-2xl font-black text-on-background md:text-5xl">{correct}</div>
                    </div>

                    <div className="rounded-[1.3rem] bg-surface-container-high p-3 shadow-xl transition-transform hover:scale-[1.02] md:rounded-3xl md:p-8">
                      <div className="mb-1 flex items-center justify-center gap-1 md:mb-2 md:gap-2">
                        <span
                          className="material-symbols-outlined text-base text-error md:text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          cancel
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-error md:text-xs md:tracking-widest">
                          Yanlis
                        </span>
                      </div>
                      <div className="text-2xl font-black text-on-background md:text-5xl">{wrong}</div>
                    </div>
                  </div>

                  <div className="mb-6 w-full max-w-md md:mb-16">
                    <div className="mb-2 flex items-center justify-between md:mb-4">
                      <span className="text-xs font-medium text-on-surface-variant md:text-sm">
                        Basari Durumu
                      </span>
                      <span className="text-xs font-bold text-primary md:text-sm">
                        %{successRate} Basari
                      </span>
                    </div>
                    <div className="flex h-2.5 w-full gap-1.5 md:h-3 md:gap-2">
                      <div className="flex flex-grow gap-1 md:gap-1.5">
                        {Array.from({ length: total }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-full w-full rounded-full ${
                              i < correct ? "bg-tertiary" : "bg-error opacity-60"
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-center gap-2.5 sm:flex-row sm:gap-4">
                    <Link
                      to="/categories"
                      className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-primary-container px-6 py-3.5 text-base font-bold text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-1 md:gap-3 md:px-10 md:py-5 md:text-lg"
                    >
                      <span className="material-symbols-outlined">replay</span>
                      Tekrar Oyna
                    </Link>
                    <Link
                      to="/"
                      className="flex items-center justify-center gap-2 rounded-2xl border-2 border-outline-variant bg-transparent px-6 py-3.5 text-base font-bold text-on-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 md:gap-3 md:px-10 md:py-5 md:text-lg"
                    >
                      <span className="material-symbols-outlined">home</span>
                      Ana Sayfa
                    </Link>
                  </div>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
