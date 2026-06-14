import { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";

const QUESTIONS_LIST = [
  {
    q: "Dünyanın en büyük okyanusu hangisidir?",
    a: "Büyük Okyanus (Pasifik)",
    desc: "Büyük Okyanus, Amerika, Asya ve Okyanusya kıtaları arasında yer alır. Dünyanın en derin noktası olan Mariana Çukuru da bu okyanustadır."
  },
  {
    q: "Türkiye Cumhuriyeti'nde cumhuriyet ne zaman ilan edildi?",
    a: "29 Ekim 1923",
    desc: "Türkiye Büyük Millet Meclisi'nin (TBMM) kararıyla 29 Ekim 1923 tarihinde cumhuriyet ilan edilmiş ve devletin yönetim şekli resmileşmiştir."
  },
  {
    q: "Mona Lisa tablosunun ünlü ressamı kimdir?",
    a: "Leonardo da Vinci",
    desc: "Rönesans döneminin dahi sanatçısı Leonardo da Vinci tarafından 16. yüzyılda yapılan bu tablo, şu an Paris'teki Louvre Müzesi'nde sergilenmektedir."
  },
  {
    q: "Fatih Sultan Mehmet İstanbul'u hangi yıl fethetmiştir?",
    a: "1453",
    desc: "29 Mayıs 1453 tarihinde gerçekleşen bu fetihle Bizans İmparatorluğu sona ermiş ve Orta Çağ kapanıp Yeni Çağ başlamıştır."
  },
  {
    q: "Güneş sistemindeki en büyük gezegen hangisidir?",
    a: "Jüpiter",
    desc: "Jüpiter, Güneş Sistemi'nin en büyük gezegeni olup gaz devi olarak sınıflandırılır. Kütlesi diğer tüm gezegenlerin toplamının iki katından fazladır."
  },
  {
    q: "Suyun kimyasal formülü nedir?",
    a: "H2O",
    desc: "Su molekülü, iki adet hidrojen ve bir adet oksijen atomunun kovalent bağ ile birleşmesiyle oluşur."
  },
  {
    q: "İstiklal Marşı'mızın şairi kimdir?",
    a: "Mehmet Akif Ersoy",
    desc: "İstiklal Marşı, Mehmet Akif Ersoy tarafından 1921 yılında yazılmış ve TBMM tarafından milli marş olarak kabul edilmiştir."
  },
  {
    q: "İlk Türk devletlerinde hükümdara yönetme yetkisinin tanrı tarafından verilmesi inancına ne ad verilir?",
    a: "Kut İnancı",
    desc: "Kut inancına göre yönetme yetkisi kan yoluyla babadan oğula geçer. Bu inanç Türk devletlerinde hanedan üyelerinin taht mücadelesine yol açmıştır."
  },
  {
    q: "Nobel Edebiyat Ödülü alan ilk Türk yazar kimdir?",
    a: "Orhan Pamuk",
    desc: "Orhan Pamuk, 2006 yılında Nobel Edebiyat Ödülü'nü kazanarak bu ödülü alan ilk Türk vatandaşı olmuştur."
  },
  {
    q: "Gökbilimde 'Kızıl Gezegen' olarak bilinen gezegen hangisidir?",
    a: "Mars",
    desc: "Yüzeyindeki demir oksit (pas) nedeniyle kızılımsı bir görünüme sahip olan Mars, Güneş'e en yakın dördüncü gezegendir."
  },
  {
    q: "Osmanlı İmparatorluğu'nun ilk başkenti neresidir?",
    a: "Bursa (Söğüt ilk merkezdir)",
    desc: "Osmanlı'nın beylik döneminde ilk merkezi Söğüt ve Bilecik iken, resmi ilk büyük başkenti 1326 yılında Orhan Bey tarafından fethedilen Bursa'dır."
  },
  {
    q: "Dünyanın en yüksek dağı hangisidir?",
    a: "Everest Dağı",
    desc: "Himalayalar'da yer alan Everest Dağı, deniz seviyesinden 8.848 metre yüksekliğiyle dünyanın en yüksek zirvesidir."
  },
  {
    q: "Telefonu icat eden ünlü mucit kimdir?",
    a: "Alexander Graham Bell",
    desc: "Graham Bell, 1876 yılında sesi teller üzerinden elektrik sinyalleriyle ileten ilk cihazı (telefonu) icat ederek patentini almıştır."
  },
  {
    q: "Romeo ve Juliet adlı ünlü tiyatro eserinin yazarı kimdir?",
    a: "William Shakespeare",
    desc: "İngiliz oyun yazarı William Shakespeare tarafından 16. yüzyılın sonunda yazılan trajedi türündeki klasik bir aşk hikayesidir."
  },
  {
    q: "Türkiye Cumhuriyeti'nin ilk Başbakanı kimdir?",
    a: "İsmet İnönü",
    desc: "Cumhuriyetin ilanıyla birlikte ilk Cumhurbaşkanı Mustafa Kemal Atatürk, ilk Başbakanı ise İsmet İnönü olmuştur."
  },
  {
    q: "Yerçekimi kanununu formüle eden bilim insanı kimdir?",
    a: "Isaac Newton",
    desc: "Newton, kafasına elma düşmesi hikayesiyle popülerleşen kütleçekim yasasını 1687 yılında yayımladığı eseriyle dünyayla paylaşmıştır."
  },
  {
    q: "Göktürk Kitabeleri (Orhun Abideleri) hangi ülke sınırları içerisindedir?",
    a: "Moğolistan",
    desc: "Türk tarihinin ve dilinin ilk yazılı belgeleri sayılan Orhun Yazıtları, günümüzde Moğolistan sınırlarındaki Orhun Vadisi'nde yer almaktadır."
  },
  {
    q: "Aspirin ilacının etken maddesi hangi ağacın kabuğundan elde edilir?",
    a: "Söğüt Ağacı",
    desc: "Söğüt ağacı kabuğunda bulunan salisin maddesi, günümüzdeki aspirin ilacının (asetilsalisilik asit) temelini oluşturur."
  },
  {
    q: "İlk elektronik genel amaçlı bilgisayar ENIAC kaç yılında tamamlanmıştır?",
    a: "1945",
    desc: "İkinci Dünya Savaşı sırasında ABD ordusu için topçuluk tabloları hesaplamak amacıyla geliştirilen ENIAC, devasa boyutlarda bir bilgisayardı."
  },
  {
    q: "İnsan vücudunun en büyük organı hangisidir?",
    a: "Deri (Cilt)",
    desc: "Deri, tüm vücudu kaplayan alanı ve ağırlığı (toplam vücut ağırlığının yaklaşık %16'sı) ile insan vücudunun en büyük organıdır."
  },
  {
    q: "Yedi Tepeli Şehir olarak bilinen dünyaca ünlü metropol hangisidir?",
    a: "İstanbul",
    desc: "İstanbul, tarihi yarımada sınırları içerisindeki yedi tepe üzerine kurulduğu için antik çağlardan beri bu unvanla anılır."
  },
  {
    q: "Tarihin en eski tapınak merkezi sayılan Göbeklitepe hangi ilimizdedir?",
    a: "Şanlıurfa",
    desc: "Şanlıurfa yakınlarında yer alan Göbeklitepe, günümüzden yaklaşık 12.000 yıl öncesine dayanan yapısıyla tarihin bilinen en eski inanç merkezidir."
  },
  {
    q: "Piri Reis'in coğrafya ve haritacılık alanındaki en önemli eserinin adı nedir?",
    a: "Kitab-ı Bahriye",
    desc: "Ünlü Türk denizcisi Piri Reis tarafından hazırlanan bu kitap, Akdeniz kıyılarını, limanlarını ve denizcilik bilgilerini detaylıca anlatır."
  },
  {
    q: "Tarihte yazıyı ilk kez bulan ve kullanan uygarlık hangisidir?",
    a: "Sümerler",
    desc: "Mezopotamya uygarlıklarından biri olan Sümerler, M.Ö. 3500 civarında çivi yazısını geliştirerek tarihi çağları başlatmıştır."
  },
  {
    q: "Elementlerin sınıflandırıldığı periyodik cetveli oluşturan Rus kimyager kimdir?",
    a: "Dmitri Mendeleyev",
    desc: "Mendeleyev, 1869 yılında elementleri atom kütlelerine göre sıralayarak periyodik tabloyu oluşturmuş ve henüz keşfedilmemiş elementlerin varlığını öngörmüştür."
  }
];

export default function GenelKulturSorulari() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredQuestions = QUESTIONS_LIST.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Google FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QUESTIONS_LIST.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.a}. ${item.desc}`
      }
    }))
  };

  return (
    <PageLayout>
      <Seo
        title="Genel Kültür Soruları ve Cevapları - Popüler Soru Listesi | GenelKultur.com.tr"
        description="En çok aratılan 25 popüler genel kültür sorusu, cevabı ve detaylı açıklamaları. Bilgini sına, yeni şeyler öğren ve oyuna hemen başla!"
        path={ROUTES.genelKulturSorulari}
        keywords={[
          "genel kültür soruları",
          "genel kültür soruları ve cevapları",
          "popüler genel kültür soruları",
          "bilgi yarışması soruları",
          "cevaplı genel kültür soruları"
        ]}
        schema={faqSchema}
      />

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-10 md:px-8 md:py-16">
        
        {/* Intro Hero */}
        <section className="text-center md:text-left mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-primary">
            Bilgi Hazinesi
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background md:text-5xl leading-tight">
            Genel Kültür Soruları <span className="text-primary">& Cevapları</span>
          </h1>
          <p className="mt-4 text-sm leading-7 text-on-surface-variant md:text-base md:leading-8 max-w-3xl">
            Tarih, coğrafya, bilim, sanat ve edebiyat gibi farklı dallardan derlenen en popüler ve merak edilen genel kültür sorularını aşağıda inceleyebilirsiniz. Soruların cevaplarını ve detaylı açıklamalarını görmek için kutuların üzerine tıklayın.
          </p>
        </section>

        {/* Dynamic Search & Game CTA */}
        <section className="grid gap-4 md:grid-cols-[1fr_auto] mb-8 items-stretch">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-on-surface-variant/70">
              search
            </span>
            <input
              type="text"
              placeholder="Sorularda veya cevaplarda ara..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setExpandedIndex(null); // Reset expansions on search
              }}
              className="w-full rounded-2xl border border-white/10 bg-surface-container-low py-4 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setExpandedIndex(null);
                }}
                className="absolute right-4 flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/10 text-on-surface-variant"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>

          <Link
            to={`${ROUTES.game}?category=genel`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-[#ffd54f] px-6 py-4 text-sm font-black text-[#5c3e00] shadow-[0_12px_30px_rgba(242,202,80,0.2)] transition-all hover:scale-[1.01] hover:shadow-[0_15px_35px_rgba(242,202,80,0.3)] active:scale-98"
          >
            <span className="material-symbols-outlined text-lg">play_arrow</span>
            TESTİ OYNA & KENDİNİ DENE
          </Link>
        </section>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-xs font-semibold text-on-surface-variant">
            {filteredQuestions.length} soru listeleniyor
          </p>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setExpandedIndex(null);
              }}
              className="text-xs font-bold text-primary hover:underline"
            >
              Filtreyi Temizle
            </button>
          )}
        </div>

        {/* Accordions List */}
        <section className="space-y-3">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-[1.4rem] border transition-all duration-300 ${
                    isExpanded
                      ? "border-primary/30 bg-[#12233e]/30 shadow-md"
                      : "border-white/5 bg-surface-container-low/60 hover:border-white/15 hover:bg-surface-container-low"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors"
                  >
                    <span className="text-sm sm:text-base font-black text-on-surface group-hover:text-primary transition-colors">
                      {index + 1}. {item.q}
                    </span>
                    <span
                      className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 shrink-0 ${
                        isExpanded ? "rotate-180 text-primary" : "rotate-0"
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isExpanded ? "max-h-[300px] border-t border-white/5" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-5 space-y-3 text-sm leading-relaxed bg-black/10">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-primary block mb-0.5">CEVAP</span>
                        <p className="font-extrabold text-white text-base">{item.a}</p>
                      </div>
                      <div className="pt-2 border-t border-white/5">
                        <span className="text-[10px] font-black uppercase tracking-wider text-on-surface-variant/75 block mb-1">AÇIKLAMA</span>
                        <p className="text-on-surface-variant font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="rounded-[1.4rem] border border-white/5 bg-surface-container-low/40 p-8 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-2 text-on-surface-variant/40">
                search_off
              </span>
              <p className="text-sm font-semibold">Aramanızla eşleşen genel kültür sorusu bulunamadı.</p>
              <p className="text-xs text-on-surface-variant/50 mt-1">Farklı bir kelime aramayı deneyebilirsiniz.</p>
            </div>
          )}
        </section>

        {/* Sticky Quick Game CTA at bottom */}
        <section className="mt-12 rounded-[1.8rem] border border-white/10 bg-[#12233e]/40 p-6 md:p-8 text-center flex flex-col items-center shadow-lg">
          <span className="material-symbols-outlined text-4xl text-primary animate-bounce mb-3">
            emoji_events
          </span>
          <h2 className="text-2xl font-black text-white">Yarışmaya Hazır mısın?</h2>
          <p className="mt-2 text-xs leading-5 text-on-surface-variant max-w-md font-bold mb-6">
            Sadece okumakla yetinme! Genel kültür kategorisinde 10, 15 veya 25 soruluk turlara katıl, seviyeni gör ve arkadaşlarına meydan oku.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={`${ROUTES.game}?category=genel`}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-xs font-black uppercase tracking-wider text-on-primary hover:bg-white hover:text-black transition-all shadow-md"
            >
              Hemen Oyuna Başla
              <span className="material-symbols-outlined text-sm">play_arrow</span>
            </Link>
            <Link
              to={ROUTES.categories}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface-container-low/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-on-surface hover:border-primary/40 transition-all"
            >
              Kategorileri Gör
            </Link>
          </div>
        </section>

      </main>
    </PageLayout>
  );
}
