import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Genel Kultur Kategorileri",
  url: `${SITE_URL}${ROUTES.categories}`,
  inLanguage: "tr-TR",
  description: "Genel kultur, tarih, bilim ve sanat kategorileri ile quiz turlarina giris sayfasi.",
};

export default function CategorySelect() {
  return (
    <PageLayout>
      <Seo
        title="Genel Kultur Testi Kategorileri | Genel Kultur Sorulari ve Quiz"
        description="Genel kultur, tarih, bilim ve sanat kategorilerinden birini sec. Hemen bilgi yarismasina basla ve genel kultur seviyeni olc."
        path={ROUTES.categories}
        keywords={["genel kultur testi", "genel kültür soruları", "quiz kategorileri", "bilgi yarismasi", "genel kultur"]}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-10 md:px-10 md:py-16">
        <section className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Kategori Secimi</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-6xl">
            Genel kultur testi icin dogru kategoriyle basla.
          </h1>
          <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-lg md:leading-8">
            Ana hedefimiz sadece bir quiz gostermek degil; genel kultur arama niyetine uyan, hizli
            ve tekrar oynanabilir bir bilgi yarismasi deneyimi sunmak. Asagidaki kategorilerden sana
            uygun olanla hemen tura girebilirsin.
          </p>
        </section>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Genel Kultur",
              text: "En genis kapsamli soru havuzu. Genel kultur sorulari icin ideal baslangic noktasi.",
              icon: "public",
              href: `${ROUTES.game}?category=genel`,
            },
            {
              title: "Tarih",
              text: "Imparatorluklar, savaslar, donum noktalari ve dunya tarihinden secilmis turlar.",
              icon: "history_edu",
              href: `${ROUTES.game}?category=tarih`,
            },
            {
              title: "Bilim",
              text: "Evren, fizik, biyoloji, teknoloji ve bilim tarihine uzanan bilgi yarismasi alani.",
              icon: "science",
              href: `${ROUTES.game}?category=bilim`,
            },
            {
              title: "Sanat",
              text: "Resim, muzik, edebiyat, sinema ve kulturel birikim odakli yaratıcı soru setleri.",
              icon: "palette",
              href: `${ROUTES.game}?category=sanat`,
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-surface-container-low p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_22px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-container-high text-primary transition-transform duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h2 className="mt-6 text-2xl font-black text-on-background">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-on-surface-variant">{item.text}</p>
              <div className="mt-6 text-sm font-bold text-primary">Hemen Basla</div>
            </Link>
          ))}
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-white/10 bg-surface-container-low p-6">
            <h2 className="text-2xl font-black text-on-surface">Genel kultur aramalari icin guclu kategori merkezi</h2>
            <p className="mt-3 text-sm leading-7 text-on-surface-variant">
              Bu sayfa, genel kultur testi, bilgi yarismasi ve kategori bazli quiz aramalarini
              destekleyen merkezi navigasyon gorevi gorur. Ic link yapisi sayesinde hem kullanici
              akisi hem de taranabilirlik guclenir.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-white/10 bg-surface-container-low p-6">
            <h2 className="text-2xl font-black text-on-surface">Her kategori farkli soru niyetini karsilar</h2>
            <p className="mt-3 text-sm leading-7 text-on-surface-variant">
              Genel kultur genis kapsam sunarken tarih, bilim ve sanat kategorileri daha derin ve
              odakli deneyim verir. Bu ayrim, arama motorlarina sayfa amacini daha net anlatir.
            </p>
          </article>
        </section>
      </main>
    </PageLayout>
  );
}
