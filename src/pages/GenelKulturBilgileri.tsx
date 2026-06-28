import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";
import { SITE_URL } from "../lib/seo";

interface FactGroup {
  category: string;
  icon: string;
  facts: { title: string; text: string }[];
}

const FACT_GROUPS: FactGroup[] = [
  {
    category: "Tarih",
    icon: "history_edu",
    facts: [
      { title: "Yazının icadı tarihi başlattı", text: "Tarih çağları, yazının Sümerler tarafından MÖ 3500 dolaylarında bulunmasıyla başlatılır. Öncesindeki dönem 'tarih öncesi' olarak adlandırılır çünkü yazılı kayıt yoktur." },
      { title: "İstanbul'un fethi bir çağı kapattı", text: "1453'te İstanbul'un fethi, ders kitaplarında Orta Çağ'ın sonu ve Yeni Çağ'ın başlangıcı olarak kabul edilir." },
      { title: "Magna Carta sınırlı iktidarın simgesi", text: "1215'te İngiltere'de imzalanan Magna Carta, kralın yetkilerini hukukla sınırlayan ilk önemli belgelerden biri olarak demokrasi tarihinde özel bir yere sahiptir." },
      { title: "Lale Devri bir kültür dönemi", text: "Osmanlı'da Lale Devri yalnızca bir eğlence dönemi değil; matbaanın yaygınlaşması ve sanata verilen önemle anılan bir yenilik dönemidir." },
    ],
  },
  {
    category: "Bilim",
    icon: "science",
    facts: [
      { title: "Atmosferin çoğu azottur", text: "Soluduğumuz havanın yaklaşık %78'i azot, %21'i oksijendir. Yani en bol gaz oksijen değil, azottur." },
      { title: "Bal asla bozulmaz", text: "Düşük nem oranı ve doğal asidik yapısı sayesinde bal, uygun saklandığında binlerce yıl bozulmadan kalabilir; antik mezarlarda yenilebilir bal bulunmuştur." },
      { title: "Işık bir saniyede dünyayı 7 kez dolaşır", text: "Işığın boşluktaki hızı saniyede yaklaşık 300.000 kilometredir; bu hızla Dünya'nın çevresini bir saniyede yedi kez dolaşabilir." },
      { title: "İnsan vücudunun en büyük organı deridir", text: "Sıklıkla iç organlar düşünülse de, yüzey alanı ve ağırlığı nedeniyle en büyük organ deridir." },
      { title: "Su, evrendeki en bilinen çözücüdür", text: "Suya 'evrensel çözücü' denir çünkü diğer pek çok maddeden daha fazla bileşiği çözebilir; bu özellik yaşamın temelidir." },
    ],
  },
  {
    category: "Coğrafya",
    icon: "public",
    facts: [
      { title: "Pasifik en büyük okyanustur", text: "Pasifik Okyanusu, tüm kıtaların toplam yüzölçümünden daha geniştir ve Dünya'nın en derin noktası olan Mariana Çukuru buradadır." },
      { title: "Sahra kıta büyüklüğünde", text: "Dünyanın en büyük sıcak çölü olan Sahra, neredeyse ABD ile aynı büyüklüktedir." },
      { title: "Van Gölü Türkiye'nin en büyük gölü", text: "Yüzölçümü bakımından Türkiye'nin en büyük gölü Van Gölü'dür; sodalı yapısıyla da bilinir." },
      { title: "Nil mi Amazon mu tartışması", text: "Genel kültürde en uzun nehir genellikle Nil kabul edilir; ancak ölçüm yöntemine göre Amazon'un daha uzun olduğunu savunanlar da vardır." },
    ],
  },
  {
    category: "Sanat ve Edebiyat",
    icon: "palette",
    facts: [
      { title: "Mona Lisa'nın kaşı yok", text: "Leonardo da Vinci'nin ünlü tablosu Mona Lisa'da figürün belirgin bir kaşı bulunmaması, dönemin moda anlayışına bağlanır." },
      { title: "Mimar Sinan'ın çıraklık eseri", text: "Mimar Sinan, Şehzade Camii'ni 'çıraklık', Süleymaniye'yi 'kalfalık', Selimiye'yi ise 'ustalık' eseri olarak tanımlamıştır." },
      { title: "Nutuk bir tarih kaynağı", text: "Mustafa Kemal Atatürk'ün Nutuk eseri, Kurtuluş Savaşı ve cumhuriyetin kuruluşunu birinci ağızdan anlatan temel bir tarih belgesidir." },
      { title: "Don Kişot ilk modern roman", text: "Cervantes'in Don Kişot'u, birçok edebiyat tarihçisi tarafından modern romanın ilk örneği kabul edilir." },
    ],
  },
  {
    category: "İlginç Bilgiler",
    icon: "lightbulb",
    facts: [
      { title: "Ahtapotun üç kalbi vardır", text: "Ahtapotların biri vücuda, ikisi solungaçlara kan pompalayan üç kalbi bulunur; kanları ise bakır içerdiği için mavidir." },
      { title: "Eyfel Kulesi sıcakta uzar", text: "Metal genleşmesi nedeniyle Eyfel Kulesi yaz aylarında yaklaşık 15 santimetreye kadar uzayabilir." },
      { title: "Muz bir çilektir, çilek değildir", text: "Botanik açıdan muz 'meyve' sayılırken, çilek teknik olarak gerçek bir meyve değil 'yalancı meyve'dir." },
      { title: "Bir günde kalbimiz 100 binden fazla atar", text: "İnsan kalbi günde ortalama 100.000'den fazla, yılda yaklaşık 35 milyon kez atar." },
    ],
  },
];

export default function GenelKulturBilgileri() {
  const totalFacts = FACT_GROUPS.reduce((s, g) => s + g.facts.length, 0);
  const url = `${SITE_URL}${ROUTES.genelKulturBilgileri}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Genel Kültür Bilgileri: İlginç ve Bilinmeyen Gerçekler",
      description: "Tarih, bilim, coğrafya ve sanat alanlarından seçilmiş ilginç ve az bilinen genel kültür bilgileri.",
      url,
      inLanguage: "tr-TR",
      author: { "@type": "Organization", name: "GenelKultur.com.tr", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "GenelKultur.com.tr",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon-512.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Genel Kültür Bilgileri", item: url },
      ],
    },
  ];

  return (
    <PageLayout>
      <Seo
        title="Genel Kültür Bilgileri: İlginç ve Bilinmeyen Gerçekler (2026) | GenelKultur.com.tr"
        description="Tarih, bilim, coğrafya ve sanattan seçilmiş ilginç ve az bilinen genel kültür bilgileri. Hem öğren hem de bilgini testlerle sına."
        path={ROUTES.genelKulturBilgileri}
        keywords={["genel kultur bilgileri", "ilginc bilgiler", "bilinmeyen genel kultur", "kulturel bilgiler"]}
        schema={schema}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-10 md:px-8 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-on-surface-variant">
            <Link to={ROUTES.home} className="transition-colors hover:text-on-surface">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-on-surface">Genel Kültür Bilgileri</span>
          </div>
        </nav>

        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Bilgi Hazinesi</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-5xl">
            Genel Kültür Bilgileri
          </h1>
          <p className="mt-5 text-sm leading-8 text-on-surface-variant md:text-base">
            Genel kültür; tarihten bilime, coğrafyadan sanata uzanan geniş bir merak dünyasıdır. Bu sayfada,
            farklı alanlardan seçilmiş <strong>{totalFacts} ilginç ve az bilinen bilgiyi</strong> kısa açıklamalarıyla
            bir araya getirdik. Hem keyifle okuyabilir hem de öğrendiklerini sayfanın sonundaki testlerle hemen
            sınayabilirsin. Tüm bilgiler editör ekibimiz tarafından derlenip gözden geçirilmiştir.
          </p>
        </section>

        <div className="mt-10 space-y-10">
          {FACT_GROUPS.map((group) => (
            <section key={group.category}>
              <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-xl">{group.icon}</span>
                </span>
                <h2 className="text-2xl font-black text-on-surface">{group.category}</h2>
              </div>
              <div className="mt-5 grid gap-4">
                {group.facts.map((fact) => (
                  <article key={fact.title} className="rounded-[1.3rem] border border-white/10 bg-surface-container-low/70 p-5">
                    <h3 className="text-base font-black text-on-surface md:text-lg">{fact.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">{fact.text}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,35,62,0.92),rgba(8,20,38,0.95))] p-6 md:p-8 text-center">
          <h2 className="text-2xl font-black text-on-surface">Bu bilgileri ne kadar hatırlıyorsun?</h2>
          <p className="mt-3 text-sm leading-7 text-on-surface-variant">
            Okumak güzel; ama öğrenmenin en kalıcı yolu sınamaktır. Genel kültür testlerimizle kendini hemen dene.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to={ROUTES.test50} className="inline-flex items-center gap-2 rounded-[1.2rem] bg-primary px-6 py-3.5 text-sm font-black text-on-primary transition-all hover:-translate-y-0.5">
              50 Soruluk Teste Başla
              <span className="material-symbols-outlined text-base">play_arrow</span>
            </Link>
            <Link to={ROUTES.genelKulturSorulari} className="inline-flex items-center gap-2 rounded-[1.2rem] border border-white/10 bg-surface-container-low/70 px-6 py-3.5 text-sm font-bold text-on-surface transition-all hover:-translate-y-0.5 hover:border-primary/30">
              Soru-Cevap Sayfası
            </Link>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
