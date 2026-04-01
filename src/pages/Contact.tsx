import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";

export default function Contact() {
  return (
    <PageLayout>
      <Helmet>
        <title>İletişim - Genelkultur.com</title>
        <meta
          name="description"
          content="Genelkultur.com ile iletişime geçmek, görüş paylaşmak veya içerik bildirmek için bu sayfayı kullan."
        />
      </Helmet>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">İletişim</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Görüş, öneri ve içerik bildirimleri için açık bir kanal.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            Sorularda hata gördüysen, yeni kategori önerin varsa veya marka iş birlikleri için ulaşmak istiyorsan aşağıdaki iletişim bilgilerini kullanabilirsin.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">E-posta</p>
            <a className="text-xl font-bold text-on-surface hover:text-primary" href="mailto:iletisim@genelkultur.com">
              iletisim@genelkultur.com
            </a>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              İçerik düzeltmeleri, genel sorular ve öneriler için temel iletişim adresi.
            </p>
          </article>

          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">Yanıt Süresi</p>
            <p className="text-xl font-bold text-on-surface">24-72 saat</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Öncelik sırasına göre dönüş yapılır. İçerik hataları ve yayın sorunları daha hızlı ele alınır.
            </p>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
