import { ROUTES } from "../lib/routes";

export interface ContentQuestion {
  question: string;
  answer: string;
  explanation: string;
}

export interface ContentFaq {
  question: string;
  answer: string;
}

export interface ContentSource {
  label: string;
  url: string;
}

export interface ContentPageData {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  eyebrow: string;
  heading: string;
  intro: string;
  summaryTitle: string;
  summary: string;
  bullets: string[];
  topicAreas: string[];
  studyTips: string[];
  quizLabel: string;
  quizHref: string;
  editor: string;
  updatedAt: string;
  reviewNote: string;
  correctionHref: string;
  questions: ContentQuestion[];
  faqs: ContentFaq[];
  sources: ContentSource[];
}

export const contentLibraryCards = [
  {
    title: "Genel Kultur Sorulari ve Cevaplari",
    description: "Genis konu yelpazesinden secilen sorulara hizli ve aciklamali sekilde ulas.",
    to: ROUTES.genelKulturSorulariCevaplari,
  },
  {
    title: "Tarih Sorulari ve Cevaplari",
    description: "Kronoloji, medeniyet ve donum noktalarina odaklanan tarih sorulari.",
    to: ROUTES.tarihSorulariCevaplari,
  },
  {
    title: "Bilim Sorulari ve Cevaplari",
    description: "Temel kavramlar, buluslar ve bilim tarihi odakli aciklamali sorular.",
    to: ROUTES.bilimSorulariCevaplari,
  },
  {
    title: "Sanat Sorulari ve Cevaplari",
    description: "Resim, muzik, edebiyat ve sinema odakli secme sorulari incele.",
    to: ROUTES.sanatSorulariCevaplari,
  },
];

export const contentPages: ContentPageData[] = [
  {
    title: "Genel Kultur Sorulari ve Cevaplari | GenelKultur.com.tr",
    description: "Genel kultur sorulari ve cevaplari ile farkli konulardan secilen aciklamali sorulara goz at, sonra quiz'e gec.",
    path: ROUTES.genelKulturSorulariCevaplari,
    keywords: ["genel kultur sorulari ve cevaplari", "genel kultur sorulari", "aciklamali genel kultur sorulari"],
    eyebrow: "Aciklamali Icerik",
    heading: "Genel kultur sorulari ve cevaplari ile hizli ama dolu bir tekrar yap.",
    intro: "Bu sayfa quiz deneyimini bozmadan once kisa bir bilgi turu atmak isteyenler icin hazirlandi. Sorularin yaninda dogru cevap ve kisa aciklama gorebilir, hazir oldugunda tek tikla oyuna gecebilirsin.",
    summaryTitle: "Bu sayfada ne bulacaksin?",
    summary: "Genel kultur havuzundan secilen sorular; tarih, cografya, kurumlar, sanat ve temel dunya bilgisi gibi farkli alanlardan dengeli bir tekrar sunar.",
    bullets: ["Aciklamali cevaplar", "Quiz oncesi hizli tekrar", "Genis konu dagilimi"],
    topicAreas: ["Cografya", "Tarih", "Bilim", "Kurumlar", "Sanat"],
    studyTips: [
      "Kisa tekrar icin once soru-cevap ciftlerini oku, sonra aciklamalara gec.",
      "Bir soruda takildiginda benzer konuyu baska kategorilerde de aramayi dene.",
      "Quiz oncesi son 5 dakikayi baskentler, kurumlar ve temel tarihler gibi sik cikan alanlara ayir.",
    ],
    quizLabel: "Genel Kultur Testine Basla",
    quizHref: `${ROUTES.game}?category=genel`,
    editor: "GenelKultur.com.tr Editoryal Ekip",
    updatedAt: "16 Nisan 2026",
    reviewNote: "Bu secki, genel kultur basliklarinda sik karsilasilan temel bilgiler dikkate alinarak guncellendi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Dunyanin en buyuk okyanusu hangisidir?",
        answer: "Pasifik Okyanusu",
        explanation: "Pasifik, yuzolcumu acisindan dunyanin en buyuk ve en derin okyanusu olarak kabul edilir.",
      },
      {
        question: "Birlesmis Milletler hangi yil kuruldu?",
        answer: "1945",
        explanation: "Ikinci Dunya Savasi sonrasinda uluslararasi is birligini guclendirmek icin 1945 yilinda kuruldu.",
      },
      {
        question: "Ampulu gelistiren mucit olarak en cok kim bilinir?",
        answer: "Thomas Edison",
        explanation: "Ampul fikri tek bir kisiye ait olmasa da, kullanima uygun modeli yayginlastiran isim Edison olarak bilinir.",
      },
      {
        question: "Mona Lisa tablosunun ressami kimdir?",
        answer: "Leonardo da Vinci",
        explanation: "Ronesans doneminin en taninmis sanatcilarindan Leonardo da Vinci, Mona Lisa'nin ressamidir.",
      },
      {
        question: "Turkiye Cumhuriyeti hangi tarihte ilan edilmistir?",
        answer: "29 Ekim 1923",
        explanation: "Cumhuriyetin ilani, yeni devlet yapisinin resmi olarak kuruldugu temel donum noktalarindan biridir.",
      },
      {
        question: "Yaziyi icat ettigi kabul edilen ilk uygarliklardan biri hangisidir?",
        answer: "Sumerler",
        explanation: "Sumerler, civi yazisi ile yazili tarih doneminin baslangicinda onemli rol oynadi.",
      },
      {
        question: "Kan gruplarinin ABO sistemini gelistiren bilim insani kimdir?",
        answer: "Karl Landsteiner",
        explanation: "Kan gruplarinin siniflandirilmasi, guvenli kan nakli icin tip tarihinde buyuk bir adim oldu.",
      },
      {
        question: "Eiffel Kulesi hangi sehirdedir?",
        answer: "Paris",
        explanation: "Fransa'nin baskenti Paris ile ozdeslesen bu yapi, dunyanin en bilinen simgelerinden biridir.",
      },
      {
        question: "Gunes Sistemi'ndeki en buyuk gezegen hangisidir?",
        answer: "Jupiter",
        explanation: "Jupiter, buyuk gaz devi yapisi ve devasa capiyla Gunes Sistemi'nin en buyuk gezegenidir.",
      },
      {
        question: "Turkiye'nin baskenti neresidir?",
        answer: "Ankara",
        explanation: "Ankara, Kurtulus Savasi ve cumhuriyet tarihi icindeki merkezi roluyle baskent oldu.",
      },
      {
        question: "Dunyanin en uzun nehri olarak en cok hangi nehir anilir?",
        answer: "Nil",
        explanation: "Olcum yaklasimlari tartisilsa da genel kultur sorularinda Nil, en uzun nehir cevabi olarak en yaygin sekilde kullanilir.",
      },
      {
        question: "Avrupa Birligi'nin yonetsel merkezlerinden biri olarak bilinen sehir hangisidir?",
        answer: "Bruksel",
        explanation: "Bruksel, AB kurumlarinin bir bolumune ev sahipligi yaptigi icin siyasi merkez olarak bilinir.",
      },
      {
        question: "Mikroplarin hastaliklarla iliskisini calismalariyla one cikan bilim insani kimdir?",
        answer: "Louis Pasteur",
        explanation: "Pasteur, mikrobiyoloji ve asi tarihindeki calismalariyla genel kultur sorularinda sikca karsiya cikar.",
      },
      {
        question: "Turkiye Buyuk Millet Meclisi hangi sehirde acilmistir?",
        answer: "Ankara",
        explanation: "Milli Mucadele surecinde Ankara'nin siyasi merkez haline gelmesi bu olayla yakindan iliskilidir.",
      },
      {
        question: "Dunya'nin en buyuk sicak colu hangisidir?",
        answer: "Sahra Colu",
        explanation: "Sahra, Kuzey Afrika'da yer alir ve sicak col taniminda en buyuk ornek kabul edilir.",
      },
      {
        question: "Nobel odulleri hangi ulkenin baskenti ile ozdeslesmistir?",
        answer: "Stockholm",
        explanation: "Nobel odullerinin buyuk bolumu Isvec'in baskenti Stockholm'de verilir; bu bilgi genel kulturde cok yaygindir.",
      },
      {
        question: "Insan vucudundaki en buyuk organ hangisidir?",
        answer: "Deri",
        explanation: "Deri, vucudu dis etkilerden koruyan ve alan olarak en buyuk organ kabul edilen yapidir.",
      },
      {
        question: "Bir ulkenin para politikasini yurutmekle gorevli temel kurum genellikle hangisidir?",
        answer: "Merkez Bankasi",
        explanation: "Faiz, likidite ve para arzi gibi temel araclar genellikle merkez bankalari uzerinden yonetilir.",
      },
      {
        question: "Ronesans ile en cok ozdeslesen ulkelerden biri hangisidir?",
        answer: "Italya",
        explanation: "Ozellikle Floransa, Venedik ve Roma gibi merkezler Ronesans doneminin gelisiminde belirleyici oldu.",
      },
      {
        question: "Dunya'nin cevresini deniz yoluyla dolasan ilk sefer hangi adla bilinir?",
        answer: "Macellan-Elcano seferi",
        explanation: "Sefer Magellan tarafindan baslatildi, Elcano tarafindan tamamlandi ve dunya cevresinin dolasilabildigini gosteren tarihsel bir olay oldu.",
      },
      {
        question: "Dunya'nin en yuksek dagi hangisidir?",
        answer: "Everest",
        explanation: "Everest, Himalayalar uzerinde yer alir ve deniz seviyesinden yuksekligiyle bilinir.",
      },
      {
        question: "Bir ulkenin yasama organi genel olarak hangi adla anilir?",
        answer: "Meclis",
        explanation: "Ulkeye gore isim degisse de genel kultur duzeyinde yasama organi icin meclis ifadesi en yaygin kullanilan addir.",
      },
      {
        question: "Dunya Saglik Orgutu kisaltmasi nedir?",
        answer: "WHO",
        explanation: "World Health Organization, uluslararasi halk sagligi alaninda en bilinen kurumlardan biridir.",
      },
      {
        question: "Akdeniz'e kiyisi olan buyuk Afrika ulkelerinden biri hangisidir?",
        answer: "Cezayir",
        explanation: "Cezayir hem yuzolcumu hem de Akdeniz kiyisiyla genel kultur sorularinda one cikan ulkelerdendir.",
      },
      {
        question: "Internet uzerindeki veri iletisiminde temel duzen kurallarini saglayan yapilar nelerdir?",
        answer: "Ag protokolleri",
        explanation: "Kullanici icin gorunmeyen veri akisinin duzenli ilerlemesi, belirli protokoller ve kurallar sayesinde olur.",
      },
    ],
    faqs: [
      {
        question: "Bu sayfadaki sorular quiz ile ayni mi?",
        answer: "Bazi konu basliklari benzeyebilir ancak bu sayfa daha cok gorunur ve aciklamali bir tekrar alani olarak tasarlandi.",
      },
      {
        question: "Butun soru havuzu burada mi yer aliyor?",
        answer: "Hayir. Burada secilmis bir icerik derlemesi yer alir; tum soru havuzuna quiz akisi icinde erisilir.",
      },
      {
        question: "Bu sayfa kimin icin uygun?",
        answer: "Teste girmeden once kisa tekrar yapmak isteyenler ve dogru cevaplari nedenleriyle gormek isteyenler icin uygundur.",
      },
    ],
    sources: [
      { label: "Britannica", url: "https://www.britannica.com/" },
      { label: "Birlesmis Milletler", url: "https://www.un.org/" },
      { label: "NASA Solar System Exploration", url: "https://science.nasa.gov/solar-system/" },
    ],
  },
  {
    title: "Tarih Sorulari ve Cevaplari | GenelKultur.com.tr",
    description: "Tarih sorulari ve cevaplari ile medeniyetler, savaslar ve donum noktalarina dair aciklamali bir tekrar yap.",
    path: ROUTES.tarihSorulariCevaplari,
    keywords: ["tarih sorulari ve cevaplari", "aciklamali tarih sorulari", "tarih quiz sorulari"],
    eyebrow: "Aciklamali Tarih",
    heading: "Tarih sorulari ve cevaplari ile kronolojiyi daha net kur.",
    intro: "Tarih sorularinda sadece tarihi hatirlamak degil, olaylarin etkisini kavramak da onemlidir. Bu sayfa, tarih kategorisine girmeden once net bir tekrar imkani sunar.",
    summaryTitle: "Tarih kategorisinin odagi",
    summary: "Bu secki; Osmanli, cumhuriyet tarihi, Avrupa tarihi ve temel uygarlik bilgisini dengeli bicimde bir araya getirir.",
    bullets: ["Kronoloji odagi", "Medeniyet ve devletler", "Kisa aciklamali cevaplar"],
    topicAreas: ["Osmanli", "Cumhuriyet", "Avrupa Tarihi", "Antik Uygarliklar", "Antlasmalar"],
    studyTips: [
      "Tarihleri tek basina ezberlemek yerine olay-sonuc iliskisi kurmaya calis.",
      "Benzer savas ve antlasma isimlerini eslestirmek icin kisa notlar cikarmak faydalidir.",
      "Cumhuriyet tarihi ve Osmanli kronolojisi genel kultur sorularinda en cok tekrar eden alanlardandir.",
    ],
    quizLabel: "Tarih Testine Basla",
    quizHref: `${ROUTES.game}?category=tarih`,
    editor: "GenelKultur.com.tr Editoryal Ekip",
    updatedAt: "16 Nisan 2026",
    reviewNote: "Kronoloji ve temel antlasma bilgileri, yaygin tarih referanslariyla yeniden gozden gecirildi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Istanbul'un fethi hangi yil gerceklesti?",
        answer: "1453",
        explanation: "1453 tarihi, Orta Cag'in sonu ve Yeni Cag'in baslangici ile birlikte anilan onemli bir donum noktasi olarak kabul edilir.",
      },
      {
        question: "Turkiye Cumhuriyeti'nin kurucusu kimdir?",
        answer: "Mustafa Kemal Ataturk",
        explanation: "Ataturk, Milli Mucadele'nin lideri ve cumhuriyetin kurucu siyasi figuru olarak anilir.",
      },
      {
        question: "Fransiz Ihtilali hangi yilda basladi?",
        answer: "1789",
        explanation: "1789, modern siyasal dusunce ve vatandaslik anlayisi acisindan Avrupa tarihini etkileyen bir kirilma yilidir.",
      },
      {
        question: "Lozan Antlasmasi hangi savas doneminin ardindan imzalandi?",
        answer: "Kurtulus Savasi",
        explanation: "Lozan, yeni Turkiye devletinin uluslararasi taninmasi acisindan temel anlasmalardan biridir.",
      },
      {
        question: "Malazgirt Savasi'nin tarihi nedir?",
        answer: "1071",
        explanation: "1071, Anadolu tarihinin yonunu etkileyen en bilinen askeri ve siyasi donum noktalarindan biridir.",
      },
      {
        question: "Sanayi Devrimi ilk olarak hangi ulkede basladi?",
        answer: "Ingiltere",
        explanation: "Uretim bicimlerini kokten degistiren Sanayi Devrimi, once Ingiltere'de belirgin hale geldi.",
      },
      {
        question: "Yaziyi icat ettigi kabul edilen toplum hangisidir?",
        answer: "Sumerler",
        explanation: "Yazinin ortaya cikisi, tarihin kayit altina alinabilmesi bakimindan uygarlik tarihinde temel esiklerden biridir.",
      },
      {
        question: "TBMM hangi sehirde acildi?",
        answer: "Ankara",
        explanation: "Ankara, Milli Mucadele doneminde siyasi merkez olarak one cikti ve meclisin acildigi sehir oldu.",
      },
      {
        question: "Roma Imparatorlugu'nun dogu kanadi hangi adla anilir?",
        answer: "Bizans Imparatorlugu",
        explanation: "Roma'nin devam eden dogu siyasi yapisi, tarih yaziminda genellikle Bizans olarak anilir.",
      },
      {
        question: "Kanuni unvaniyla bilinen Osmanli padisahi kimdir?",
        answer: "I. Suleyman",
        explanation: "Kanuni Sultan Suleyman, hem askeri basarilari hem de hukuk duzenlemeleri ile taninir.",
      },
      {
        question: "Kurtulus Savasi doneminde toplanan kongrelerden biri hangisidir?",
        answer: "Erzurum Kongresi",
        explanation: "Erzurum Kongresi, Milli Mucadele'nin orgutlenme surecinde temel rol oynayan toplantilardan biridir.",
      },
      {
        question: "Magna Carta hangi ulkede ilan edilmistir?",
        answer: "Ingiltere",
        explanation: "Magna Carta, iktidarin sinirlandirilmasi ve hukuk tarihi acisindan Ingiltere merkezli sembolik bir metindir.",
      },
      {
        question: "Lale Devri daha cok hangi alanlardaki canlanmayla bilinir?",
        answer: "Sanat ve kultur hareketleri",
        explanation: "Lale Devri, sadece siyasi olaylarla degil, ayni zamanda zevk, sanat ve yenilik arayisiyla da anilir.",
      },
      {
        question: "Birinci Dunya Savasi sonrasinda kurulan uluslararasi orgut hangisidir?",
        answer: "Milletler Cemiyeti",
        explanation: "Milletler Cemiyeti, savas sonrasi barisi koruma amaciyla kurulsa da uzun vadede basarili olamadi.",
      },
      {
        question: "Misir devlet baskanlarina verilen unvan nedir?",
        answer: "Firavun",
        explanation: "Antik Misir'da siyasi ve dini otoriteyi temsil eden yoneticiler firavun unvaniyla anilirdi.",
      },
      {
        question: "Ipek Yolu'nun temel onemi nedir?",
        answer: "Dogu ile Bati arasinda ticaret ve kultur etkilesimi saglamasi",
        explanation: "Ipek Yolu yalnizca mal degil, fikir, teknoloji ve kultur aktarimi icin de onemli bir hattir.",
      },
      {
        question: "Ataturk'e Basogretmen unvani hangi reformla iliskilidir?",
        answer: "Harf Inkilabi",
        explanation: "Yeni Turk alfabesinin yayginlastirilmasi surecinde Ataturk'un egitim odakli rolu bu unvanla anildi.",
      },
      {
        question: "II. Viyana Kusatmasi'nin basarisiz olmasi hangi devletin Avrupa'daki ilerleyisini etkiledi?",
        answer: "Osmanli Devleti",
        explanation: "Bu olay, Osmanli'nin Avrupa icindeki askeri ve siyasi ivmesi acisindan kirilma noktasi olarak gorulur.",
      },
      {
        question: "Sanayi Inkilabi'nin dogurdugu temel degisimlerden biri nedir?",
        answer: "Uretimde makine kullaniminin yayginlasmasi",
        explanation: "Makinelesme, kentlesme ve yeni is bolumu yapilari Sanayi Inkilabi'nin baslica sonuclari arasindadir.",
      },
      {
        question: "1453 tarihi Avrupa tarihinde hangi cag kapanisiyla anilir?",
        answer: "Orta Cag",
        explanation: "Istanbul'un fethi, ders kitaplarinda ve genel kultur sorularinda Orta Cag'in kapanisiyla birlikte anilir.",
      },
      {
        question: "Osmanli Devleti'nin kurucusu kimdir?",
        answer: "Osman Gazi",
        explanation: "Osman Gazi, Osmanli Beyligi'nin kurucu lideri olarak tarih sorularinda temel isimlerden biridir.",
      },
      {
        question: "Turkiye Cumhuriyeti'nin ilanindan once kabul edilen anayasa hangisidir?",
        answer: "1921 Anayasasi",
        explanation: "1921 Anayasasi, Milli Mucadele doneminin siyasal yapisini anlamak icin kritik metinlerden biridir.",
      },
      {
        question: "Roma tarihinde Sezar adi ile en cok ozdeslesen isim kimdir?",
        answer: "Julius Caesar",
        explanation: "Julius Caesar, Roma siyasi tarihinde en cok bilinen figurlardan biri olarak genel kultur sorularinda sikca yer alir.",
      },
      {
        question: "Kavimler Gocu Avrupa tarihinde hangi alanlarda buyuk degisim yaratmistir?",
        answer: "Siyasi ve toplumsal yapi",
        explanation: "Kavimler Gocu, devlet yapilarindan yerlesim duzenine kadar Avrupa tarihini etkileyen buyuk bir harekettir.",
      },
      {
        question: "Misak-i Milli hangi donemde onem kazanan kararlar butunudur?",
        answer: "Milli Mucadele donemi",
        explanation: "Misak-i Milli, yeni devletin bagimsizlik ve sinir anlayisini belirleyen temel siyasi kararlardan biri olarak kabul edilir.",
      },
    ],
    faqs: [
      {
        question: "Tarih sorularinda sadece yil ezberi yeterli mi?",
        answer: "Hayir. Olaylarin nedenlerini ve sonuclarini bilmek, tarih sorularinda genellikle daha ayirt edici olur.",
      },
      {
        question: "Bu secki hangi seviyeye uygun?",
        answer: "Temel ve orta seviye genel tarih bilgisi icin uygundur; hizli tekrar isteyen ziyaretciler hedeflenmistir.",
      },
      {
        question: "Tarih quizine gecmeden once neye bakmaliyim?",
        answer: "Kronoloji, temel antlasmalar, onemli savaslar ve devlet isimleri iyi bir baslangic alani sunar.",
      },
    ],
    sources: [
      { label: "Encyclopaedia Britannica - History", url: "https://www.britannica.com/topic/history" },
      { label: "T.C. Cumhurbaskanligi", url: "https://www.tccb.gov.tr/" },
      { label: "UNESCO", url: "https://www.unesco.org/" },
    ],
  },
  {
    title: "Bilim Sorulari ve Cevaplari | GenelKultur.com.tr",
    description: "Bilim sorulari ve cevaplari ile temel kavramlar, gezegenler, buluslar ve bilim insanlari hakkinda aciklamali tekrar yap.",
    path: ROUTES.bilimSorulariCevaplari,
    keywords: ["bilim sorulari ve cevaplari", "aciklamali bilim sorulari", "bilim quiz sorulari"],
    eyebrow: "Aciklamali Bilim",
    heading: "Bilim sorulari ve cevaplari ile temel kavramlari daha saglam oturt.",
    intro: "Bilim kategorisi; fizik, biyoloji, astronomi ve bulus tarihine uzanan genis bir alan aciyor. Buradaki kisa aciklamalar, dogru cevabi sadece hatirlamaya degil mantigini kurmaya da yardim eder.",
    summaryTitle: "Bilim kategorisinde neler var?",
    summary: "Gezegenler, elementler, temel fiziki kavramlar ve bilime yon vermis isimler hakkinda secilmis sorularla hizli bir tekrar deneyimi sunulur.",
    bullets: ["Temel kavramlar", "Bilim tarihi", "Gorunur ve aciklamali icerik"],
    topicAreas: ["Astronomi", "Biyoloji", "Fizik", "Kimya", "Bilim Insanlari"],
    studyTips: [
      "Semboller ve temel tanimlar icin kisa eslestirme tekrarlari yap.",
      "Gezegenler ve elementler gibi listeli konularda tablo mantigi faydali olur.",
      "Bilim insanlarini buluslariyla birlikte tekrar etmek kaliciligi artirir.",
    ],
    quizLabel: "Bilim Testine Basla",
    quizHref: `${ROUTES.game}?category=bilim`,
    editor: "GenelKultur.com.tr Editoryal Ekip",
    updatedAt: "16 Nisan 2026",
    reviewNote: "Temel bilim kavramlari, genel kultur duzeyinde dogruluk ve okunabilirlik odagi ile secildi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Periyodik tabloda Fe sembolu hangi elementi gosterir?",
        answer: "Demir",
        explanation: "Fe, Latince demir adindan gelir ve periyodik tabloda en bilinen sembollerden biridir.",
      },
      {
        question: "Dunya'nin dogal uydusu hangisidir?",
        answer: "Ay",
        explanation: "Ay, Dunya etrafinda donen tek dogal uydu olarak gelgitler ve gece aydinligi uzerinde etkilidir.",
      },
      {
        question: "Su hangi iki elementten olusur?",
        answer: "Hidrojen ve oksijen",
        explanation: "H2O ifadesi, su molekulunde iki hidrojen ve bir oksijen atomu bulundugunu gosterir.",
      },
      {
        question: "Yer cekimi kanunuyla en cok hangi bilim insani ozdeslestirilir?",
        answer: "Isaac Newton",
        explanation: "Newton, klasik fizik tarihinde hareket ve cekim yasalarini sistemli bicimde ortaya koydu.",
      },
      {
        question: "Gunes Sistemi'ne ismini veren yildiz hangisidir?",
        answer: "Gunes",
        explanation: "Sistemdeki tum buyuk gok cisimleri, kutlesel merkezi olusturan Gunes etrafinda hareket eder.",
      },
      {
        question: "DNA'nin acilimi nedir?",
        answer: "Deoksiribonukleik asit",
        explanation: "DNA, canlilardaki genetik bilginin saklanmasi ve aktarilmasinda temel rol oynar.",
      },
      {
        question: "Bitkilerin kendi besinini uretmesine ne ad verilir?",
        answer: "Fotosentez",
        explanation: "Bitkiler, gunes isigi yardimiyla karbondioksit ve suyu kullanarak organik madde uretir.",
      },
      {
        question: "En buyuk gezegen hangisidir?",
        answer: "Jupiter",
        explanation: "Jupiter, buyuk gaz devi yapisiyla hem cap hem de kutle bakimindan gezegenler arasinda one cikar.",
      },
      {
        question: "Elektrigi inceleyen temel bilim dali hangisidir?",
        answer: "Fizik",
        explanation: "Elektrik, hareket, enerji ve kuvvet gibi konular fizik disiplininin temel alanlarindandir.",
      },
      {
        question: "Asi calismalariyla taninan ve kuduz asisini gelistiren bilim insani kimdir?",
        answer: "Louis Pasteur",
        explanation: "Pasteur, mikrobiyoloji ve asilar alaninda modern tip tarihini etkileyen isimlerden biridir.",
      },
      {
        question: "Dunya atmosferinde en bol bulunan gaz hangisidir?",
        answer: "Azot",
        explanation: "Atmosferin buyuk kismi azottan olusur; oksijen ise ikinci buyuk bilesendir.",
      },
      {
        question: "Insan vucudundaki en buyuk organ hangisidir?",
        answer: "Deri",
        explanation: "Deri hem koruyucu gorevi hem de yuzey alani nedeniyle en buyuk organ kabul edilir.",
      },
      {
        question: "Su deniz seviyesinde kac derecede kaynar?",
        answer: "100 derece",
        explanation: "Standart atmosfer basincinda suyun kaynama noktasi 100 santigrat derecedir.",
      },
      {
        question: "Halkalariyla en cok taninan gezegen hangisidir?",
        answer: "Saturn",
        explanation: "Baska gezegenlerde de halka sistemi olsa da genel kulturde Saturn bu ozellikle bilinir.",
      },
      {
        question: "Fotosentezde temel rol oynayan pigment hangisidir?",
        answer: "Klorofil",
        explanation: "Klorofil, isigi sogurarak bitkilerin enerji uretim surecine katkida bulunur.",
      },
      {
        question: "Elektrik akiminin birimi nedir?",
        answer: "Amper",
        explanation: "Volt gerilimi, amper ise akim siddetini ifade eder; bu ikisi sik karistirilir.",
      },
      {
        question: "Gezegenler Gunes etrafinda hangi tur yorungelerde hareket eder?",
        answer: "Eliptik",
        explanation: "Kepler yasalarina gore gezegenlerin hareketi tam dairesel degil, eliptiktir.",
      },
      {
        question: "Atom numarasi neyi gosterir?",
        answer: "Proton sayisini",
        explanation: "Bir elementin kimligini proton sayisi belirledigi icin atom numarasi bununla ilgilidir.",
      },
      {
        question: "Asitlerin pH degeri genel olarak kacin altindadir?",
        answer: "7",
        explanation: "pH olceginde 7 notr kabul edilir; bunun altindaki degerler asidik ortami gosterir.",
      },
      {
        question: "Canlilarin ortak enerji birimi olarak bilinen molekul hangisidir?",
        answer: "ATP",
        explanation: "ATP, hucre icindeki enerji aktarim sureclerinde temel molekullerden biridir.",
      },
      {
        question: "Ses neden boslukta yayilmaz?",
        answer: "Maddesel ortam olmadigi icin",
        explanation: "Ses mekanik bir dalgadir ve iletilmesi icin parcacikli bir ortama ihtiyac duyar.",
      },
      {
        question: "Dunya'nin kendi ekseni etrafinda donmesi hangi sonucu dogurur?",
        answer: "Gece ve gunduz",
        explanation: "Dunya'nin ekseni etrafindaki donusu, gunluk zaman akisini belirleyen temel etkendir.",
      },
      {
        question: "Insan vucudunda oksijeni tasiyan temel protein hangisidir?",
        answer: "Hemoglobin",
        explanation: "Hemoglobin, kandaki oksijen tasinmasinda gorev alir ve biyoloji sorularinda cok sik gecer.",
      },
      {
        question: "Bir maddenin katidan siviya gecmesine ne ad verilir?",
        answer: "Erime",
        explanation: "Hal degisimleri temel bilim konulari arasinda en cok tekrar edilen basliklardan biridir.",
      },
      {
        question: "Gunes'ten gelen zararli ultraviyole isinlarini buyuk oranda hangi katman tutar?",
        answer: "Ozon tabakasi",
        explanation: "Ozon tabakasi, atmosfer icinde koruyucu etkisiyle taninan temel yapilardan biridir.",
      },
    ],
    faqs: [
      {
        question: "Bilim sorularinda hangi alanlar one cikar?",
        answer: "Temel fizik, biyoloji, astronomi ve bilim tarihi genellikle ilk karsilasilan basliklar olur.",
      },
      {
        question: "Bu icerik ileri seviye mi?",
        answer: "Hayir. Buradaki secki daha cok genel kultur ve temel bilim bilgisi duzeyinde hazirlandi.",
      },
      {
        question: "Teste girmeden once nasil tekrar yapmaliyim?",
        answer: "Temel kavramlari, sembolleri ve bilim insanlarini kisa bloklar halinde tekrar etmek iyi sonuc verir.",
      },
    ],
    sources: [
      { label: "NASA", url: "https://www.nasa.gov/" },
      { label: "Khan Academy Science", url: "https://www.khanacademy.org/science" },
      { label: "Encyclopaedia Britannica - Science", url: "https://www.britannica.com/science" },
    ],
  },
  {
    title: "Sanat Sorulari ve Cevaplari | GenelKultur.com.tr",
    description: "Sanat sorulari ve cevaplari ile ressamlar, akimlar, eserler ve muzik dunyasindan secilen aciklamali sorulara goz at.",
    path: ROUTES.sanatSorulariCevaplari,
    keywords: ["sanat sorulari ve cevaplari", "aciklamali sanat sorulari", "sanat quiz sorulari"],
    eyebrow: "Aciklamali Sanat",
    heading: "Sanat sorulari ve cevaplari ile eserleri ve isimleri daha kolay ayir.",
    intro: "Sanat kategorisinde eser ile sanatciyi, donem ile akimi ve muzik ile sahne sanatlarini birbirinden ayirmak onemlidir. Buradaki secme sorular, hizli ama anlamli bir tekrar sunar.",
    summaryTitle: "Sanat kategorisinin kapsami",
    summary: "Resim, edebiyat, klasik muzik ve sinema gibi temel alanlardan secilen sorular bir araya getirilerek okunabilir bir icerik katmani olusturuldu.",
    bullets: ["Eser ve sanatci eslestirmeleri", "Akim ve donem bilgisi", "Kisa aciklamalar"],
    topicAreas: ["Resim", "Edebiyat", "Muzik", "Sinema", "Sahne Sanatlari"],
    studyTips: [
      "Sanatci-eser eslestirmelerini ikili kart mantigiyla tekrar etmek hiz kazandirir.",
      "Akim ve donem sorularinda oncu isimleri ayiklayarak calismak daha kalici olur.",
      "Bir eseri hem sanatci hem de alanla birlikte kodlamak karisiklik riskini azaltir.",
    ],
    quizLabel: "Sanat Testine Basla",
    quizHref: `${ROUTES.game}?category=sanat`,
    editor: "GenelKultur.com.tr Editoryal Ekip",
    updatedAt: "16 Nisan 2026",
    reviewNote: "Sanat seckisi; eser, sanatci ve donem iliskisini ayiklamaya yardim eden temel referanslara gore duzenlendi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Mona Lisa tablosunun ressami kimdir?",
        answer: "Leonardo da Vinci",
        explanation: "Ronesans doneminin en taninmis isimlerinden da Vinci, bu eseriyle sanat tarihinin simgelerinden birini uretmistir.",
      },
      {
        question: "Guernica adli eser hangi ressama aittir?",
        answer: "Pablo Picasso",
        explanation: "Guernica, savas karsiti mesaji ve guclu kompozisyonuyla Picasso'nun en bilinen eserlerinden biridir.",
      },
      {
        question: "Romeo ve Juliet eserinin yazari kimdir?",
        answer: "William Shakespeare",
        explanation: "Shakespeare, Ingiliz edebiyatinin en etkili oyun yazarlarindan biri olarak kabul edilir.",
      },
      {
        question: "Nutcracker balesinin muzigi en cok hangi besteciyle ozdeslestirilir?",
        answer: "Pyotr Ilyich Tchaikovsky",
        explanation: "Tchaikovsky, bale ve orkestra muzigi alaninda genis kitlelerce taninan eserler vermistir.",
      },
      {
        question: "Turk edebiyatinda Sair Evlenmesi adli eser kime aittir?",
        answer: "Ibrahim Sinasi",
        explanation: "Sair Evlenmesi, Turk tiyatrosunun ilk ornekleri arasinda anilan onemli bir eserdir.",
      },
      {
        question: "Yildizli Gece adli tablo hangi ressamindir?",
        answer: "Vincent van Gogh",
        explanation: "Van Gogh'un bu eseri, firca darbeleri ve renk kullanimi ile sanat tarihinde ayri bir yere sahiptir.",
      },
      {
        question: "Klasik muzikte 9. Senfoni denince en cok hangi besteci akla gelir?",
        answer: "Ludwig van Beethoven",
        explanation: "Beethoven'in 9. Senfonisi, finalindeki korolu yapi ile klasik muzik repertuvarinin zirvelerinden biridir.",
      },
      {
        question: "Hababam Sinifi'nin yazari kimdir?",
        answer: "Rifat Ilgaz",
        explanation: "Hababam Sinifi once edebi eser olarak ortaya cikmis, sonra sinema uyarlamalariyla cok yaygin taninmistir.",
      },
      {
        question: "Osman Hamdi Bey'in en bilinen eserlerinden biri hangisidir?",
        answer: "Kaplumbaga Terbiyecisi",
        explanation: "Kaplumbaga Terbiyecisi, Osman Hamdi Bey ile ozdeslesen ve Turk resim tarihinde ozel yeri olan bir tablodur.",
      },
      {
        question: "Sinemada Oscar odulleri hangi ulkede duzenlenen oduller olarak bilinir?",
        answer: "Amerika Birlesik Devletleri",
        explanation: "Akademi Odulleri olarak da bilinen Oscar, film endustrisinin en taninmis odul organizasyonlarindandir.",
      },
      {
        question: "Kaplumbaga Terbiyecisi tablosu hangi Turk sanatciya aittir?",
        answer: "Osman Hamdi Bey",
        explanation: "Bu eser, Osman Hamdi Bey ile neredeyse ozdeslesen ve Turk resim tarihinde cok bilinen bir tablodur.",
      },
      {
        question: "Suc ve Ceza romaninin yazari kimdir?",
        answer: "Fyodor Dostoyevski",
        explanation: "Dostoyevski, Rus edebiyatinin en bilinen romancilarindan biri olarak genel kulturde sikca sorulur.",
      },
      {
        question: "Don Kisot eserinin yazari kimdir?",
        answer: "Miguel de Cervantes",
        explanation: "Don Kisot, modern roman tarihinin kurucu orneklerinden biri sayilir.",
      },
      {
        question: "Nutuk adli eserin yazari kimdir?",
        answer: "Mustafa Kemal Ataturk",
        explanation: "Nutuk, Cumhuriyet tarihi ve siyasi dusunce acisindan temel metinlerden biri olarak gorulur.",
      },
      {
        question: "Sefiller romaninin yazari kimdir?",
        answer: "Victor Hugo",
        explanation: "Victor Hugo'nun bu eseri, dunya edebiyatinin en taninmis toplumsal romanlari arasindadir.",
      },
      {
        question: "Dogu-Bati senteziyle taninan unlu Turk mimar kimdir?",
        answer: "Mimar Sinan",
        explanation: "Mimar Sinan, Osmanli mimarisinin en guclu isimlerinden biri olarak anilir.",
      },
      {
        question: "La Traviata hangi sanat dalinda one cikan bir eserdir?",
        answer: "Opera",
        explanation: "La Traviata, Giuseppe Verdi tarafindan bestelenen ve opera repertuvarinda onemli yeri olan bir eserdir.",
      },
      {
        question: "Ronesans doneminin unlu heykeli David kime aittir?",
        answer: "Michelangelo",
        explanation: "Michelangelo'nun David heykeli, Ronesans heykel sanatinin en taninmis eserlerindendir.",
      },
      {
        question: "Hababam Sinifi once hangi alanda ortaya cikmistir?",
        answer: "Edebiyat",
        explanation: "Eser ilk olarak yazili anlatim olarak ortaya cikmis, sonra sinemayla daha genis kitlelere ulasmistir.",
      },
      {
        question: "Klasik bati muziginin onde gelen bestecilerinden Mozart hangi ulkenin sanatcisidir?",
        answer: "Avusturya",
        explanation: "Mozart, Salzburg dogumlu oldugu icin Avusturya ile ozdeslesmis bestecilerden biridir.",
      },
      {
        question: "The Last Supper adli eser hangi sanatciyla ozdeslesir?",
        answer: "Leonardo da Vinci",
        explanation: "Son Aksam Yemegi olarak da bilinen bu eser, Ronesans sanatinin en bilinen duvar resimlerinden biridir.",
      },
      {
        question: "Klasik Turk musikisinde bestekar olarak taninan Itri hangi alanla ilgilidir?",
        answer: "Muzik",
        explanation: "Itri, Turk musikisi tarihi icinde en cok anilan bestekarlardan biridir.",
      },
      {
        question: "Sistine Sapeli'nin tavan freskleriyle en cok hangi sanatci anilir?",
        answer: "Michelangelo",
        explanation: "Michelangelo, hem heykel hem de resim alaniyla Ronesans'in en guclu figurlarindan biridir.",
      },
      {
        question: "Anna Karenina romaninin yazari kimdir?",
        answer: "Lev Tolstoy",
        explanation: "Tolstoy, Rus edebiyatinin genel kultur sorularinda en cok karsilasilan yazarlarindandir.",
      },
      {
        question: "Tiyatro, opera ve bale gibi alanlar hangi daha genis sanat basliginda toplanir?",
        answer: "Sahne sanatlari",
        explanation: "Tiyatro, opera ve bale gibi alanlar genel olarak sahne sanatlari basligi altinda ele alinir.",
      },
    ],
    faqs: [
      {
        question: "Sanat sorularinda en zor kisim nedir?",
        answer: "Eser ile sanatciyi, akim ile donemi karistirmadan eslestirebilmek genellikle en ayirt edici bolumdur.",
      },
      {
        question: "Bu sayfa sadece resim sanati icin mi?",
        answer: "Hayir. Resim, edebiyat, muzik ve sinema gibi farkli alanlardan secmeler sunar.",
      },
      {
        question: "Sanat quizine hazirlanmak icin neye bakmaliyim?",
        answer: "Onemli eser adlari, sanatci isimleri ve temel donem-akim iliskileri hizli bir baslangic saglar.",
      },
    ],
    sources: [
      { label: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/" },
      { label: "MoMA Learning", url: "https://www.moma.org/learn/moma_learning/" },
      { label: "Britannica - Arts", url: "https://www.britannica.com/art" },
    ],
  },
];
