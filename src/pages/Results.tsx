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
        <title>Sonuçlar - Genel Kültür Bilgi Yarışması</title>
        <meta
          name="description"
          content="Yarışmayı tamamladın. Başarı oranını, doğru ve yanlış sayılarını şimdi inceleyebilirsin."
        />
      </Helmet>

      <main className="flex-grow px-6 pb-16 pt-10 md:px-10">
        <div className="mx-auto w-full max-w-4xl">
          <section className="relative overflow-hidden rounded-[2rem] bg-surface-container-low p-8 text-center md:p-16">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-tertiary/5 blur-[80px]"></div>

            <div className="relative z-10 flex flex-col items-center">
              {!hasResult ? (
                <>
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-7xl text-primary">info</span>
                  </div>
                  <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-on-background md:text-5xl">
                    Henüz bir sonuç yok
                  </h1>
                  <p className="mb-10 max-w-lg text-lg text-on-surface-variant">
                    Bu sayfa oyun tamamlandıktan sonra detaylı sonucu gösterir. Yeni bir tur başlatıp puanını görebilirsin.
                  </p>
                  <Link
                    to="/categories"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-primary-container px-10 py-5 text-lg font-bold text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Oyuna Başla
                    <span className="material-symbols-outlined">play_arrow</span>
                  </Link>
                </>
              ) : (
                <>
                  <div className="mb-6 flex justify-center">
                    <span className="material-symbols-outlined text-8xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      military_tech
                    </span>
                  </div>
                  <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-on-background md:text-5xl">Oyun Bitti</h1>
                  <p className="mb-12 max-w-lg text-lg text-on-surface-variant">
                    Performansını aşağıdan inceleyebilir ve yeni bir tur başlatabilirsin.
                  </p>

                  <div className="mb-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="rounded-3xl bg-surface-container-high p-8 shadow-xl transition-transform hover:scale-[1.02]">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Toplam Puan</span>
                      <div className="text-5xl font-black text-on-background">
                        {score}
                        <span className="text-2xl text-on-surface-variant/30">/{total * 100}</span>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-surface-container-high p-8 shadow-xl transition-transform hover:scale-[1.02]">
                      <div className="mb-2 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Doğru</span>
                      </div>
                      <div className="text-5xl font-black text-on-background">{correct}</div>
                    </div>
                    <div className="rounded-3xl bg-surface-container-high p-8 shadow-xl transition-transform hover:scale-[1.02]">
                      <div className="mb-2 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                          cancel
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-error">Yanlış</span>
                      </div>
                      <div className="text-5xl font-black text-on-background">{wrong}</div>
                    </div>
                  </div>

                  <div className="mb-16 w-full max-w-md">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-on-surface-variant">Başarı Durumu</span>
                      <span className="text-sm font-bold text-primary">%{successRate} Başarı</span>
                    </div>
                    <div className="flex h-3 w-full gap-2">
                      <div className="flex flex-grow gap-1.5">
                        {Array.from({ length: total }).map((_, i) => (
                          <div key={i} className={`h-full w-full rounded-full ${i < correct ? "bg-tertiary" : "bg-error opacity-60"}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
                    <Link
                      to="/categories"
                      className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-primary to-primary-container px-10 py-5 text-lg font-bold text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="material-symbols-outlined">replay</span>
                      Tekrar Oyna
                    </Link>
                    <Link
                      to="/"
                      className="flex items-center justify-center gap-3 rounded-2xl border-2 border-outline-variant bg-transparent px-10 py-5 text-lg font-bold text-on-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
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
