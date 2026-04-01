import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";
import heroImage from "../assets/hero.png";

export default function Landing() {
  return (
    <PageLayout>
      <Helmet>
        <title>Genel Kültür Bilgi Yarışması - Bilgini Test Et</title>
        <meta
          name="description"
          content="Genel kültürünü test et, yeni şeyler öğren ve arkadaşlarınla yarış. Hızlı, akıcı ve modern bir bilgi yarışması deneyimi seni bekliyor."
        />
        <meta
          name="keywords"
          content="genel kültür, bilgi yarışması, quiz, tarih, bilim, sanat, test"
        />
      </Helmet>

      <main className="flex-grow px-6 pb-16 pt-10 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Giriş istemeyen modern quiz deneyimi
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl font-black leading-none tracking-tighter text-on-surface md:text-7xl">
                Genel Kültür
                <br />
                <span className="text-primary text-glow">Bilgi Yarışması</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-on-surface-variant md:text-xl">
                Kategori seç, hemen oyna ve kısa sürede genel kültür seviyeni gör.
                Sunucusuz yapı, hızlı açılış ve sade deneyim sayesinde odak doğrudan oyunda kalır.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/categories"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-primary-container px-8 py-4 text-lg font-black text-on-primary shadow-[0_20px_50px_rgba(242,202,80,0.25)] transition-all duration-300 hover:-translate-y-1"
              >
                Hemen Başla
                <span className="material-symbols-outlined">play_arrow</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-4 text-lg font-semibold text-on-surface transition-colors hover:border-primary/30 hover:text-primary"
              >
                Nasıl Çalışır
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
                <p className="mb-2 text-2xl font-black text-on-surface">15 Soru</p>
                <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">Hızlı Oyun Akışı</p>
              </div>
              <div className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
                <p className="mb-2 text-2xl font-black text-on-surface">4 Kategori</p>
                <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">Geniş Başlangıç Alanı</p>
              </div>
              <div className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
                <p className="mb-2 text-2xl font-black text-on-surface">Giriş Yok</p>
                <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">Anında Erişim</p>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:col-span-5">
            <div className="absolute h-64 w-64 rounded-full bg-primary/10 blur-[100px]"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/10 bg-surface-container-low p-4 shadow-2xl">
              <img
                alt="Genelkultur.com ana ekran illüstrasyonu"
                className="h-[420px] w-full max-w-md rounded-[1.5rem] object-cover opacity-85"
                src={heroImage}
              />
              <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-outline-variant/10 bg-background/80 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.18em] text-primary">Bugünün Odağı</p>
                <p className="mt-2 text-xl font-bold text-on-surface">Tarih, bilim, sanat ve genel kültür</p>
                <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                  Kısa tur, net sonuç ekranı ve tekrar oynama motivasyonu.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mx-auto mt-20 grid w-full max-w-7xl gap-6 md:grid-cols-3">
          <article className="rounded-[2rem] border border-outline-variant/10 bg-surface-container-low p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">01</p>
            <h2 className="mb-3 text-2xl font-bold text-on-surface">Kategori seç</h2>
            <p className="text-sm leading-7 text-on-surface-variant">
              Dört temel alandan birini seçerek ilgi alanına göre hızlıca oyuna gir.
            </p>
          </article>
          <article className="rounded-[2rem] border border-outline-variant/10 bg-surface-container-low p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">02</p>
            <h2 className="mb-3 text-2xl font-bold text-on-surface">Soruları çöz</h2>
            <p className="text-sm leading-7 text-on-surface-variant">
              Akıcı soru akışı, jokerler ve temiz arayüz sayesinde dikkat dağılmadan oyna.
            </p>
          </article>
          <article className="rounded-[2rem] border border-outline-variant/10 bg-surface-container-low p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">03</p>
            <h2 className="mb-3 text-2xl font-bold text-on-surface">Sonucunu gör</h2>
            <p className="text-sm leading-7 text-on-surface-variant">
              Doğru, yanlış ve başarı oranını anında inceleyip yeni tur başlat.
            </p>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
