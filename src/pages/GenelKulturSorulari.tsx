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
  },
  {
    q: "Yazlık saray olarak da bilinen ve İstanbul Boğazı kıyısında yer alan tarihi saray hangisidir?",
    a: "Beylerbeyi Sarayı",
    desc: "1860'larda Sultan Abdülaziz tarafından yaptırılan Beylerbeyi Sarayı, Osmanlı padişahlarının özellikle yaz aylarında ve yabancı devlet adamlarını ağırlamak amacıyla kullandığı eşsiz bir yapıdır."
  },
  {
    q: "Osmanlı'da sefere çıkan ordunun başında padişahın bulunmadığı durumlarda komuta yetkisine sahip sadrazama hangi unvan verilirdi?",
    a: "Serdar-ı Ekrem",
    desc: "Sadrazamlar padişah adına orduya komuta ettiklerinde bu sıfatı alırlar ve padişahın mutlak yetkilerini savaş meydanında kullanırlardı."
  },
  {
    q: "Optik bilimi üzerine yaptığı öncü çalışmalarla tanınan ve 'Kitabü'l-Menazır' adlı eserin yazarı olan Orta Çağ İslam bilgini kimdir?",
    a: "İbnü'l-Heysem (Alhazen)",
    desc: "Işığın doğrusal yayıldığını, görmenin gözden çıkan ışınlarla değil göze gelen ışınlarla gerçekleştiğini ispatlayan modern optiğin kurucularındandır."
  },
  {
    q: "Dünyanın en tuzlu göllerinden biri olan ve deniz seviyesinden yaklaşık 430 metre aşağıda bulunan tektonik göl hangisidir?",
    a: "Lut Gölü (Ölü Deniz)",
    desc: "İsrail, Filistin ve Ürdün sınırında yer alan bu göl, aşırı yüksek tuzluluk oranı nedeniyle içinde balık veya bitki gibi canlıların yaşamasına izin vermez."
  },
  {
    q: "Türkiye'nin en büyük tatlı su gölü hangisidir?",
    a: "Beyşehir Gölü",
    desc: "Konya ve Isparta illeri sınırında yer alan Beyşehir Gölü, hem yüzölçümü hem de içindeki adalarıyla Türkiye'nin en büyük tatlı su gölü unvanına sahiptir."
  },
  {
    q: "Gözün odaklama sorunu nedeniyle yakındaki nesneleri net görememe (hipermetrop) durumunu düzeltmek için hangi mercek türü kullanılır?",
    a: "İnce Kenarlı (Yakınsak) Mercek",
    desc: "İnce kenarlı mercekler ışığı toplayarak görüntünün retina üzerine tam olarak düşmesini sağlar, hipermetropi tedavisinde kullanılır."
  },
  {
    q: "Fransız yazar Victor Hugo'nun ünlü eseri 'Notre Dame'ın Kamburu' romanındaki çan çalıcısı karakterin adı nedir?",
    a: "Quasimodo",
    desc: "Quasimodo, Notre Dame Katedrali'nin çan çalıcısıdır ve çingene kızı Esmeralda'ya duyduğu karşılıksız aşk ile edebiyat tarihinin en unutulmaz karakterlerindendir."
  },
  {
    q: "Eski Roma toplumunda soylu sınıfa (Patriciler) karşı hak arayışında olan sıradan halk tabakasına ne ad verilirdi?",
    a: "Plebler",
    desc: "Plebler, Roma Cumhuriyeti döneminde siyasi ve medeni haklar elde etmek amacıyla aristokrat Patriciler ile uzun süreli mücadeleler vermişlerdir."
  },
  {
    q: "Radyoaktivite üzerine yaptığı çalışmalarla iki farklı alanda (Fizik ve Kimya) Nobel Ödülü kazanan ilk ve tek kadın bilim insanı kimdir?",
    a: "Marie Curie",
    desc: "Polonyum ve radyum elementlerini keşfeden Curie, bilim tarihine geçen başarılarıyla radyoaktivite biliminin öncüsü kabul edilir."
  },
  {
    q: "Türkiye Cumhuriyeti tarihinde başbakanlık koltuğuna oturan ilk ve tek kadın siyasetçi kimdir?",
    a: "Tansu Çiller",
    desc: "1993-1996 yılları arasında Türkiye Cumhuriyeti'nin 22. başbakanı olarak görev yapmış, ekonomi profesörü olan kadın liderdir."
  },
  {
    q: "Güneş Sistemi'nde Güneş'e en yakın ikinci gezegen olmasına rağmen atmosferindeki sera etkisi nedeniyle en sıcak gezegen hangisidir?",
    a: "Venüs",
    desc: "Yoğun karbondioksit atmosferi Güneş ısı enerjisini hapsederek yüzey sıcaklığının 460 derecenin üzerine çıkmasına neden olur."
  },
  {
    q: "AB0 kan grubu sistemini keşfederek kan naklinin güvenli yapılmasını sağlayan ve Nobel Tıp Ödülü alan hekim kimdir?",
    a: "Karl Landsteiner",
    desc: "1901 yılında kan gruplarını tanımlayan Landsteiner, tıp dünyasında milyonlarca insanların hayatının kurtarılmasına öncülük etmiştir."
  },
  {
    q: "Alplerin eteklerinde yer alan ve İsviçre'nin fiili başkenti (federal şehir) kabul edilen kent hangisidir?",
    a: "Bern",
    desc: "İsviçre'nin resmi bir başkenti anayasada bulunmasa da federal hükümet organlarının toplandığı Bern şehri fiili başkent işlevi görür."
  },
  {
    q: "Gökbilimci Galileo Galilei'nin Dünya'nın döndüğünü savunduğu için yargılandığı Katolik Kilisesi mahkemesinin adı nedir?",
    a: "Engizisyon Mahkemesi",
    desc: "17. yüzyılda kilisenin yer merkezli evren teorisine karşı çıktığı için Galileo bu mahkemede yargılanmış ve ev hapsine mahkum edilmiştir."
  },
  {
    q: "Afrika kıtasında yer alan ve dünyanın en uzun nehri olarak bilinen akarsu hangisidir?",
    a: "Nil Nehri",
    desc: "Victoria Gölü'nden doğup Akdeniz'e dökülen Nil Nehri, antik Mısır medeniyetinin doğup büyümesinde en hayati rolü üstlenmiştir."
  },
  {
    q: "Şiir ve tiyatro alanındaki yenilikçi tarzıyla Türk edebiyatını derinden etkileyen, 'Makber' şiiriyle tanınan ve 'Şair-i Azam' unvanı verilen Tanzimat yazarı kimdir?",
    a: "Abdülhak Hamit Tarhan",
    desc: "Türk edebiyatının batılılaşmasında büyük rol oynamış, eserlerindeki felsefi derinlik ve yenilikçi dili nedeniyle kendisine en büyük şair anlamına gelen Şair-i Azam unvanı layık görülmüştür."
  },
  {
    q: "Alyuvarlarda (kırmızı kan hücrelerinde) bulunan ve akciğerlerden dokulara oksijen taşımakla görevli demir yönünden zengin protein hangisidir?",
    a: "Hemoglobin",
    desc: "Hemoglobin oksijeni kendine bağlayarak kana kırmızı rengini verir. Eksikliğinde kansızlık (anemi) tablosu ortaya çıkar."
  },
  {
    q: "Amerika Birleşik Devletleri'nin ilk başkanı olan ve ülkenin kuruluş sürecine liderlik eden tarihi figür kimdir?",
    a: "George Washington",
    desc: "Amerikan Bağımsızlık Savaşı'nda kurucu ordunun başkomutanlığını yapmış, 1789-1797 yılları arasında ülkenin ilk başkanı olarak görev almıştır."
  },
  {
    q: "İlk kez 1896 yılında Atina'da başlatılan ve dört yılda bir düzenlenen çok sporlu küresel etkinliğin adı nedir?",
    a: "Modern Olimpiyat Oyunları",
    desc: "Antik Yunan olimpiyatlarından esinlenerek Pierre de Coubertin'in öncülüğünde kurulan uluslararası en büyük spor organizasyonudur."
  },
  {
    q: "Piyano ve benzeri tuşlu çalgılarda ses perdelerinin ve sürelerinin kesilmeden uzamasını sağlayan ayak pedallarına genel olarak ne ad verilir?",
    a: "Sustain (Uzatma) Pedalı",
    desc: "Piyanistin tuşa bastıktan sonra elini çekse dahi tellerin titreşmeye devam etmesini ve seslerin birbirine pürüzsüz bağlanmasını sağlar."
  },
  {
    q: "Osmanlı Devleti döneminde çıkarılan ve Türk basın tarihinin ilk Türkçe gazetesi kabul edilen resmi yayının adı nedir?",
    a: "Takvim-i Vekayi",
    desc: "1831 yılında Sultan II. Mahmud döneminde haftalık olarak yayımlanmaya başlanan Osmanlı İmparatorluğu'nun ilk resmi devlet gazetesidir."
  },
  {
    q: "Kuyruklu yıldızların yörüngelerinde ilerlerken arkalarında bıraktıkları ve Güneş rüzgarlarıyla parlayan çekirdeklerin ana bileşenleri nelerdir?",
    a: "Buz, Kaya ve Kozmik Toz",
    desc: "Kirli kartopu olarak da adlandırılan bu gök cisimleri Güneş'e yaklaştıkça içlerindeki buz gaz haline geçer ve kuyruk görünümü oluşur."
  },
  {
    q: "Tarihin bilinen ilk yazılı kanunları olarak kabul edilen ve Mezopotamya uygarlığı Sümerler döneminde oluşturulan yasalar hangisidir?",
    a: "Urnammu Kanunları",
    desc: "M.Ö. 2100-2050 yıllarında Ur Kralı Ur-Nammu tarafından çivi yazısıyla yazılan bu kanunlar, Hammurabi Kanunları'ndan da eskidir."
  },
  {
    q: "İnsan vücudunda kalsiyum fosfat kristallerinden oluşan ve kemiklerden bile daha sert olan en dayanıklı doku hangisidir?",
    a: "Diş Minesi",
    desc: "Dişlerin en dış katmanını oluşturan diş minesi, vücuttaki en yoğun mineral oranına sahip olup dış etkenlere karşı koruma sağlar."
  },
  {
    q: "Türkiye'nin coğrafi olarak en uzun kara sınırı komşusu hangi ülkedir?",
    a: "Suriye",
    desc: "Türkiye ile Suriye arasındaki kara sınırı yaklaşık 911 kilometre uzunluğunda olup Türkiye'nin en uzun kara sınır hattını oluşturur."
  }
];

export default function GenelKulturSorulari() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedState, setExpandedState] = useState<Record<number, boolean>>({});
  const [allExpanded, setAllExpanded] = useState(false);

  const filteredQuestions = QUESTIONS_LIST.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setExpandedState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleAll = () => {
    const nextState = !allExpanded;
    setAllExpanded(nextState);
    const updated: Record<number, boolean> = {};
    filteredQuestions.forEach((_, idx) => {
      updated[idx] = nextState;
    });
    setExpandedState(updated);
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

  // Dynamic Title & Description based on search input for SEO
  const seoTitle = searchQuery 
    ? `"${searchQuery}" İle İlgili Genel Kültür Soruları | GenelKultur.com.tr` 
    : "50+ Genel Kültür Soruları ve Cevapları 2026 (Zor-Kolay) | GenelKultur.com.tr";

  const seoDescription = searchQuery
    ? `GenelKültür.com.tr üzerinde "${searchQuery}" terimi ile ilgili arama sonuçları. En popüler genel kültür sorularını inceleyin ve test edin.`
    : "Şıklı (çoktan seçmeli) ve cevaplı 50'den fazla güncel genel kültür sorusu ve detaylı açıklamalar. Tarih, bilim, sanat ve coğrafyadan sorularla bilgini hemen sına, yeni şeyler öğren!";

  return (
    <PageLayout>
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={ROUTES.genelKulturSorulari}
        keywords={[
          "genel kültür soruları",
          "genel kültür soruları ve cevapları",
          "popüler genel kültür soruları",
          "bilgi yarışması soruları",
          "cevaplı genel kültür soruları",
          ...(searchQuery ? [searchQuery.toLowerCase()] : [])
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
            Tarih, coğrafya, bilim, sanat ve edebiyat gibi farklı dallardan derlenen en popüler ve merak edilen, <strong>şıklı (çoktan seçmeli) ve cevaplı güncel genel kültür sorularını</strong> aşağıda inceleyebilirsiniz. Soruların cevaplarını ve detaylı açıklamalarını görmek için kutuların üzerine tıklayın; hazır hissettiğinde testi çözerek kendini sınayabilirsin.
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
                setExpandedState({}); // Reset expansions on search
                setAllExpanded(false);
              }}
              className="w-full rounded-2xl border border-white/10 bg-surface-container-low py-4 pl-12 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary/40 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setExpandedState({});
                  setAllExpanded(false);
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
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold text-on-surface-variant">
              {filteredQuestions.length} soru listeleniyor
            </p>
            {filteredQuestions.length > 0 && (
              <button
                onClick={toggleAll}
                className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-lg"
              >
                <span className="material-symbols-outlined text-xs">
                  {allExpanded ? "unfold_less" : "unfold_more"}
                </span>
                {allExpanded ? "Tümünü Kapat" : "Tüm Cevapları Göster"}
              </button>
            )}
          </div>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setExpandedState({});
                setAllExpanded(false);
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
              const isExpanded = !!expandedState[index];
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
              to={ROUTES.test50}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface-container-low/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-on-surface hover:border-primary/40 transition-all"
            >
              50 Soruluk Test
            </Link>
            <Link
              to={ROUTES.categories}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-surface-container-low/70 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-on-surface hover:border-primary/40 transition-all"
            >
              Kategorileri Gör
            </Link>
          </div>

          {/* İç linkleme — ilgili sayfalar */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-[11px]">
            <Link to={ROUTES.test100} className="rounded-lg border border-white/10 px-3 py-1.5 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors">100 Soruluk Genel Kültür Testi</Link>
            <Link to={ROUTES.genelKulturBilgileri} className="rounded-lg border border-white/10 px-3 py-1.5 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors">Genel Kültür Bilgileri</Link>
            <Link to={ROUTES.genelKulturBilgiYarismasi} className="rounded-lg border border-white/10 px-3 py-1.5 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors">Bilgi Yarışması</Link>
            <Link to={ROUTES.zorGenelKulturSorulari} className="rounded-lg border border-white/10 px-3 py-1.5 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-colors">Zor Genel Kültür Soruları</Link>
          </div>
        </section>

      </main>
    </PageLayout>
  );
}
