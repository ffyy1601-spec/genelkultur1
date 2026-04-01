import { Helmet } from "react-helmet-async";
import PageLayout from "../components/PageLayout";

export default function About() {
  return (
    <PageLayout>
      <Helmet>
        <title>Hakkında - Genelkultur.com</title>
        <meta
          name="description"
          content="Genelkultur.com hakkında bilgi al, nasıl çalıştığını öğren ve platformun odağını keşfet."
        />
      </Helmet>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16 md:px-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Hakkında</p>
          <h1 className="text-4xl font-black tracking-tight text-on-surface md:text-6xl">
            Bilgiyi hızlı, temiz ve keyifli bir deneyime dönüştürmek için tasarlandı.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-on-surface-variant">
            Genelkultur.com, üyelik zorunluluğu olmadan birkaç saniyede başlayabileceğin modern bir bilgi yarışması deneyimi sunar. Amaç sadece puan toplamak değil; kısa sürede öğrenmek, kendini test etmek ve tekrar oynama isteği uyandırmaktır.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <h2 className="mb-3 text-xl font-bold text-on-surface">Hızlı Başlangıç</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Giriş yapmadan, form doldurmadan ve beklemeden doğrudan kategori seçip oyuna başlarsın.
            </p>
          </article>
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <h2 className="mb-3 text-xl font-bold text-on-surface">Temiz Deneyim</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Gereksiz karmaşa yerine okunaklı ekranlar, net butonlar ve akıcı bir oyun akışı sunar.
            </p>
          </article>
          <article className="rounded-3xl border border-outline-variant/10 bg-surface-container-low p-6">
            <h2 className="mb-3 text-xl font-bold text-on-surface">Sunucusuz Yapı</h2>
            <p className="text-sm leading-6 text-on-surface-variant">
              Statik altyapı sayesinde hızlı açılır, düşük bakım ihtiyacıyla güvenli bir dağıtım modeli sunar.
            </p>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
