import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { contentLibraryCards } from "../data/contentLibrary";
import { ROUTES } from "../lib/routes";

export default function ContentHub() {
  return (
    <PageLayout>
      <Seo
        title="Sorular ve Cevaplar | GenelKultur.com.tr"
        description="Genel kultur, tarih, bilim ve sanat icin hazirlanan aciklamali soru-cevap sayfalarini kesfet."
        path={ROUTES.contentHub}
        keywords={["sorular ve cevaplar", "aciklamali genel kultur", "kategori bazli soru cevap"]}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        <section className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Icerik Katmani</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            Quiz'e gecmeden once okunabilir soru ve cevap sayfalarina goz at.
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            Bu merkez, ana quiz deneyimini bozmadan olusturulan ayrik bir icerik alanidir. Buradan secilen kategoriye ait gorunur sorulari, dogru cevaplari ve kisa aciklamalari inceleyebilirsin.
          </p>
        </section>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {contentLibraryCards.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.92),rgba(8,20,38,0.94))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary">Aciklamali Sayfa</p>
              <h2 className="mt-4 text-2xl font-black text-on-surface">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary">
                Icerigi Ac
                <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
