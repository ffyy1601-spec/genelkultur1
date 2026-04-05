import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

export default function Contact() {
  return (
    <PageLayout>
      <Seo
        title="Iletisim | GenelKultur.com.tr"
        description="GenelKultur.com.tr ile iletisime gec. Icerik duzeltmeleri, is birlikleri ve genel kultur sorulari hakkindaki onerilerini ilet."
        path={ROUTES.contact}
        keywords={["iletisim", "genel kultur iletisim", "site iletisimi"]}
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Iletisim</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Gorus, oneri ve icerik bildirimleri icin acik bir kanal.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            Sorularda hata gorduysen, yeni kategori onerin varsa veya marka is birlikleri icin
            ulasmak istiyorsan asagidaki iletisim bilgilerini kullanabilirsin.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">E-posta</p>
            <a className="text-xl font-bold text-on-surface hover:text-primary" href="mailto:genelkultur46@gmail.com">
              genelkultur46@gmail.com
            </a>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Icerik duzeltmeleri, teknik bildirimler ve genel sorular icin temel iletisim adresi.
            </p>
          </article>

          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">Yanit Suresi</p>
            <p className="text-xl font-bold text-on-surface">24-72 saat</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Oncelik sirasina gore donus yapilir. Icerik hatalari ve yayin sorunlari daha hizli ele alinir.
            </p>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
