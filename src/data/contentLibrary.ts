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
    title: "Genel Kültür Soruları ve Cevapları",
    description: "Geniş konu yelpazesinden seçilen sorulara hızlı ve açıklamalı şekilde ulaşın.",
    to: ROUTES.genelKulturSorulariCevaplari,
  },
  {
    title: "Tarih Soruları ve Cevapları",
    description: "Kronoloji, medeniyet ve dönüm noktalarına odaklanan tarih soruları.",
    to: ROUTES.tarihSorulariCevaplari,
  },
  {
    title: "Bilim Soruları ve Cevapları",
    description: "Temel kavramlar, buluşlar ve bilim tarihi odaklı açıklamalı sorular.",
    to: ROUTES.bilimSorulariCevaplari,
  },
  {
    title: "Sanat Soruları ve Cevapları",
    description: "Resim, müzik, edebiyat ve sinema odaklı seçme soruları inceleyin.",
    to: ROUTES.sanatSorulariCevaplari,
  },
];

export const contentPages: ContentPageData[] = [
  {
    title: "Genel Kültür Soruları ve Cevapları 2026 – Şıklı, Açıklamalı | GenelKültür",
    description: "Farklı konulardan seçilmiş genel kültür soruları ve cevapları; her soru şıklı ve kısa açıklamalı. Ücretsiz oku-öğren, sonra teste geçip puanını anında gör.",
    path: ROUTES.genelKulturSorulariCevaplari,
    keywords: ["genel kültür soruları ve cevapları", "genel kültür soruları", "açıklamalı genel kültür soruları"],
    eyebrow: "Açıklamalı İçerik",
    heading: "Genel kültür soruları ve cevapları ile hızlı ama dolu bir tekrar yapın.",
    intro: "Bu sayfa, quiz deneyimine geçmeden önce kısa bir bilgi turu atmak isteyenler için hazırlandı. Soruların yanında doğru cevabı ve kısa bir açıklamayı bir arada görebilir, hazır olduğunuzda tek tıkla teste geçebilirsiniz. Genel kültür; coğrafyadan tarihe, kurumlardan sanata kadar çok farklı alanları kapsadığı için buradaki seçki, en sık karşılaşılan temel başlıkları dengeli biçimde bir araya getirir. Amacımız ezber yüklemek değil; doğru cevabın neden doğru olduğunu kısa açıklamalarla göstererek bilginin akılda kalıcı olmasını sağlamaktır.",
    summaryTitle: "Bu sayfada ne bulacaksınız?",
    summary: "Genel kültür havuzundan seçilen sorular; tarih, coğrafya, kurumlar, sanat ve temel dünya bilgisi gibi farklı alanlardan dengeli bir tekrar sunar. Her sorunun altında doğru cevabı ve nedenini özetleyen kısa bir açıklama yer alır; böylece yalnızca cevabı değil, arkasındaki mantığı da kavrarsınız.",
    bullets: ["Açıklamalı cevaplar", "Quiz öncesi hızlı tekrar", "Geniş konu dağılımı"],
    topicAreas: ["Coğrafya", "Tarih", "Bilim", "Kurumlar", "Sanat"],
    studyTips: [
      "Kısa tekrar için önce soru-cevap çiftlerini okuyun, ardından açıklamalara geçin.",
      "Bir soruda takıldığınızda benzer konuyu başka kategorilerde de aramayı deneyin.",
      "Quiz öncesi son 5 dakikayı başkentler, kurumlar ve temel tarihler gibi sık çıkan alanlara ayırın.",
    ],
    quizLabel: "Genel Kültür Testine Başla",
    quizHref: `${ROUTES.game}?category=genel`,
    editor: "GenelKultur.com.tr Editöryal Ekip",
    updatedAt: "29 Haziran 2026",
    reviewNote: "Bu seçki, genel kültür başlıklarında sık karşılaşılan temel bilgiler dikkate alınarak editör ekibimiz tarafından gözden geçirilip güncellendi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Dünyanın en büyük okyanusu hangisidir?",
        answer: "Pasifik Okyanusu",
        explanation: "Pasifik, yüzölçümü açısından dünyanın en büyük ve en derin okyanusu olarak kabul edilir.",
      },
      {
        question: "Birleşmiş Milletler hangi yıl kuruldu?",
        answer: "1945",
        explanation: "İkinci Dünya Savaşı sonrasında uluslararası iş birliğini güçlendirmek için 1945 yılında kuruldu.",
      },
      {
        question: "Ampulü geliştiren mucit olarak en çok kim bilinir?",
        answer: "Thomas Edison",
        explanation: "Ampul fikri tek bir kişiye ait olmasa da, kullanıma uygun modeli yaygınlaştıran isim Edison olarak bilinir.",
      },
      {
        question: "Mona Lisa tablosunun ressamı kimdir?",
        answer: "Leonardo da Vinci",
        explanation: "Rönesans döneminin en tanınmış sanatçılarından Leonardo da Vinci, Mona Lisa'nın ressamıdır.",
      },
      {
        question: "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
        answer: "29 Ekim 1923",
        explanation: "Cumhuriyetin ilanı, yeni devlet yapısının resmi olarak kurulduğu temel dönüm noktalarından biridir.",
      },
      {
        question: "Yazıyı icat ettiği kabul edilen ilk uygarlıklardan biri hangisidir?",
        answer: "Sümerler",
        explanation: "Sümerler, çivi yazısı ile yazılı tarih döneminin başlangıcında önemli rol oynadı.",
      },
      {
        question: "Kan gruplarının ABO sistemini geliştiren bilim insanı kimdir?",
        answer: "Karl Landsteiner",
        explanation: "Kan gruplarının sınıflandırılması, güvenli kan nakli için tıp tarihinde büyük bir adım oldu.",
      },
      {
        question: "Eiffel Kulesi hangi şehirdedir?",
        answer: "Paris",
        explanation: "Fransa'nın başkenti Paris ile özdeşleşen bu yapı, dünyanın en bilinen simgelerinden biridir.",
      },
      {
        question: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
        answer: "Jüpiter",
        explanation: "Jüpiter, büyük gaz devi yapısı ve devasa çapıyla Güneş Sistemi'nin en büyük gezegenidir.",
      },
      {
        question: "Türkiye'nin başkenti neresidir?",
        answer: "Ankara",
        explanation: "Ankara, Kurtuluş Savaşı ve cumhuriyet tarihi içindeki merkezi rolüyle başkent oldu.",
      },
      {
        question: "Dünyanın en uzun nehri olarak en çok hangi nehir anılır?",
        answer: "Nil",
        explanation: "Ölçüm yaklaşımları tartışılsa da genel kültür sorularında Nil, en uzun nehir cevabı olarak en yaygın şekilde kullanılır.",
      },
      {
        question: "Avrupa Birliği'nin yönetsel merkezlerinden biri olarak bilinen şehir hangisidir?",
        answer: "Brüksel",
        explanation: "Brüksel, AB kurumlarının bir bölümüne ev sahipliği yaptığı için siyasi merkez olarak bilinir.",
      },
      {
        question: "Mikropların hastalıklarla ilişkisini çalışmalarıyla öne çıkan bilim insanı kimdir?",
        answer: "Louis Pasteur",
        explanation: "Pasteur, mikrobiyoloji ve aşı tarihindeki çalışmalarıyla genel kültür sorularında sıkça karşımıza çıkar.",
      },
      {
        question: "Türkiye Büyük Millet Meclisi hangi şehirde açılmıştır?",
        answer: "Ankara",
        explanation: "Milli Mücadele sürecinde Ankara'nın siyasi merkez haline gelmesi bu olayla yakından ilişkilidir.",
      },
      {
        question: "Dünya'nın en büyük sıcak çölü hangisidir?",
        answer: "Sahra Çölü",
        explanation: "Sahra, Kuzey Afrika'da yer alır ve sıcak çöl tanımında en büyük örnek kabul edilir.",
      },
      {
        question: "Nobel ödülleri hangi ülkenin başkenti ile özdeşleşmiştir?",
        answer: "Stockholm",
        explanation: "Nobel ödüllerinin büyük bölümü İsveç'in başkenti Stockholm'de verilir; bu bilgi genel kültürde çok yaygındır.",
      },
      {
        question: "İnsan vücudundaki en büyük organ hangisidir?",
        answer: "Deri",
        explanation: "Deri, vücudu dış etkilerden koruyan ve alan olarak en büyük organ kabul edilen yapıdır.",
      },
      {
        question: "Bir ülkenin para politikasını yürütmekle görevli temel kurum genellikle hangisidir?",
        answer: "Merkez Bankası",
        explanation: "Faiz, likidite ve para arzı gibi temel araçlar genellikle merkez bankaları üzerinden yönetilir.",
      },
      {
        question: "Rönesans ile en çok özdeşleşen ülkelerden biri hangisidir?",
        answer: "İtalya",
        explanation: "Özellikle Floransa, Venedik ve Roma gibi merkezler Rönesans döneminin gelişiminde belirleyici oldu.",
      },
      {
        question: "Dünya'nın çevresini deniz yoluyla dolaşan ilk sefer hangi adla bilinir?",
        answer: "Macellan-Elcano seferi",
        explanation: "Sefer Macellan tarafından başlatıldı, Elcano tarafından tamamlandı ve dünya çevresinin dolaşılabildiğini gösteren tarihsel bir olay oldu.",
      },
      {
        question: "Dünya'nın en yüksek dağı hangisidir?",
        answer: "Everest",
        explanation: "Everest, Himalayalar üzerinde yer alır ve deniz seviyesinden yüksekliğiyle bilinir.",
      },
      {
        question: "Bir ülkenin yasama organı genel olarak hangi adla anılır?",
        answer: "Meclis",
        explanation: "Ülkeye göre isim değişse de genel kültür düzeyinde yasama organı için meclis ifadesi en yaygın kullanılan addır.",
      },
      {
        question: "Dünya Sağlık Örgütü kısaltması nedir?",
        answer: "WHO",
        explanation: "World Health Organization, uluslararası halk sağlığı alanında en bilinen kurumlardan biridir.",
      },
      {
        question: "Akdeniz'e kıyısı olan büyük Afrika ülkelerinden biri hangisidir?",
        answer: "Cezayir",
        explanation: "Cezayir hem yüzölçümü hem de Akdeniz kıyısıyla genel kültür sorularında öne çıkan ülkelerdendir.",
      },
      {
        question: "İnternet üzerindeki veri iletişiminde temel düzen kurallarını sağlayan yapılar nelerdir?",
        answer: "Ağ protokolleri",
        explanation: "Kullanıcı için görünmeyen veri akışının düzenli ilerlemesi, belirli protokoller ve kurallar sayesinde olur.",
      },
    ],
    faqs: [
      {
        question: "Bu sayfadaki sorular quiz ile aynı mı?",
        answer: "Bazı konu başlıkları benzeyebilir ancak bu sayfa daha çok görünür ve açıklamalı bir tekrar alanı olarak tasarlandı.",
      },
      {
        question: "Bütün soru havuzu burada mı yer alıyor?",
        answer: "Hayır. Burada seçilmiş bir içerik derlemesi yer alır; tüm soru havuzuna quiz akışı içinde erişilir.",
      },
      {
        question: "Bu sayfa kimin için uygun?",
        answer: "Teste girmeden önce kısa tekrar yapmak isteyenler ve doğru cevapları nedenleriyle görmek isteyenler için uygundur.",
      },
    ],
    sources: [
      { label: "Britannica", url: "https://www.britannica.com/" },
      { label: "Birleşmiş Milletler", url: "https://www.un.org/" },
      { label: "NASA Solar System Exploration", url: "https://science.nasa.gov/solar-system/" },
    ],
  },
  {
    title: "Tarih Soruları ve Cevapları 2026 – Şıklı, Açıklamalı | GenelKültür",
    description: "Medeniyetler, savaşlar ve dönüm noktalarından şıklı, açıklamalı tarih soruları ve cevapları. Ücretsiz oku-öğren, sonra tarih testine geçip puanını gör.",
    path: ROUTES.tarihSorulariCevaplari,
    keywords: ["tarih soruları ve cevapları", "açıklamalı tarih soruları", "tarih quiz soruları"],
    eyebrow: "Açıklamalı Tarih",
    heading: "Tarih soruları ve cevapları ile kronolojiyi daha net kurun.",
    intro: "Tarih sorularında yalnızca bir tarihi hatırlamak değil, olayların nedenlerini ve sonuçlarını kavramak da önemlidir. Bu sayfa, tarih kategorisine girmeden önce net bir tekrar imkânı sunar. İçerikte İslamiyet öncesinden Osmanlı'ya, Fransız İhtilali'nden cumhuriyet tarihine uzanan dönüm noktaları yer alır. Her sorunun altındaki kısa açıklama, olayın hangi süreçle ilişkili olduğunu hatırlatarak kronolojiyi zihninizde bir bütün hâline getirmenize yardımcı olur.",
    summaryTitle: "Tarih kategorisinin odağı",
    summary: "Bu seçki; Osmanlı, cumhuriyet tarihi, Avrupa tarihi ve temel uygarlık bilgisini dengeli biçimde bir araya getirir. Savaşlar, antlaşmalar ve önemli kişiler birbiriyle ilişkilendirilerek sunulur; böylece dağınık tarihler yerine anlamlı bir tarih anlatısı kurabilirsiniz.",
    bullets: ["Kronoloji odağı", "Medeniyet ve devletler", "Kısa açıklamalı cevaplar"],
    topicAreas: ["Osmanlı", "Cumhuriyet", "Avrupa Tarihi", "Antik Uygarlıklar", "Antlaşmalar"],
    studyTips: [
      "Tarihleri tek başına ezberlemek yerine olay-sonuç ilişkisi kurmaya çalışın.",
      "Benzer savaş ve antlaşma isimlerini eşleştirmek için kısa notlar çıkarmak faydalıdır.",
      "Cumhuriyet tarihi ve Osmanlı kronolojisi genel kültür sorularında en çok tekrar eden alanlardandır.",
    ],
    quizLabel: "Tarih Testine Başla",
    quizHref: `${ROUTES.game}?category=tarih`,
    editor: "GenelKultur.com.tr Editöryal Ekip",
    updatedAt: "29 Haziran 2026",
    reviewNote: "Kronoloji ve temel antlaşma bilgileri, yaygın tarih referanslarıyla editör ekibimiz tarafından yeniden gözden geçirildi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "İstanbul'un fethi hangi yıl gerçekleşti?",
        answer: "1453",
        explanation: "1453 tarihi, Orta Çağ'ın sonu ve Yeni Çağ'ın başlangıcı ile birlikte anılan önemli bir dönüm noktası olarak kabul edilir.",
      },
      {
        question: "Türkiye Cumhuriyeti'nin kurucusu kimdir?",
        answer: "Mustafa Kemal Atatürk",
        explanation: "Atatürk, Milli Mücadele'nin lideri ve cumhuriyetin kurucu siyasi figürü olarak anılır.",
      },
      {
        question: "Fransız İhtilali hangi yılda başladı?",
        answer: "1789",
        explanation: "1789, modern siyasal düşünce ve vatandaşlık anlayışı açısından Avrupa tarihini etkileyen bir kırılma yılıdır.",
      },
      {
        question: "Lozan Antlaşması hangi savaş döneminin ardından imzalandı?",
        answer: "Kurtuluş Savaşı",
        explanation: "Lozan, yeni Türkiye devletinin uluslararası tanınması açısından temel anlaşmalardan biridir.",
      },
      {
        question: "Malazgirt Savaşı'nın tarihi nedir?",
        answer: "1071",
        explanation: "1071, Anadolu tarihinin yönünü etkileyen en bilinen askeri ve siyasi dönüm noktalarından biridir.",
      },
      {
        question: "Sanayi Devrimi ilk olarak hangi ülkede başladı?",
        answer: "İngiltere",
        explanation: "Üretim biçimlerini kökten değiştiren Sanayi Devrimi, önce İngiltere'de belirgin hale geldi.",
      },
      {
        question: "Yazıyı icat ettiği kabul edilen toplum hangisidir?",
        answer: "Sümerler",
        explanation: "Yazının ortaya çıkışı, tarihin kayıt altına alınabilmesi bakımından uygarlık tarihinde temel eşiklerden biridir.",
      },
      {
        question: "TBMM hangi şehirde açıldı?",
        answer: "Ankara",
        explanation: "Ankara, Milli Mücadele döneminde siyasi merkez olarak öne çıktı ve meclisin açıldığı şehir oldu.",
      },
      {
        question: "Roma İmparatorluğu'nun doğu kanadı hangi adla anılır?",
        answer: "Bizans İmparatorluğu",
        explanation: "Roma'nın devam eden doğu siyasi yapısı, tarih yazımında genellikle Bizans olarak anılır.",
      },
      {
        question: "Kanuni unvanıyla bilinen Osmanlı padişahı kimdir?",
        answer: "I. Süleyman",
        explanation: "Kanuni Sultan Süleyman, hem askeri başarıları hem de hukuk düzenlemeleri ile tanınır.",
      },
      {
        question: "Kurtuluş Savaşı döneminde toplanan kongrelerden biri hangisidir?",
        answer: "Erzurum Kongresi",
        explanation: "Erzurum Kongresi, Milli Mücadele'nin örgütlenme sürecinde temel rol oynayan toplantılardan biridir.",
      },
      {
        question: "Magna Carta hangi ülkede ilan edilmiştir?",
        answer: "İngiltere",
        explanation: "Magna Carta, iktidarın sınırlandırılması ve hukuk tarihi açısından İngiltere merkezli sembolik bir metindir.",
      },
      {
        question: "Lale Devri daha çok hangi alanlardaki canlanmayla bilinir?",
        answer: "Sanat ve kültür hareketleri",
        explanation: "Lale Devri, sadece siyasi olaylarla değil, aynı zamanda zevk, sanat ve yenilik arayışıyla da anılır.",
      },
      {
        question: "Birinci Dünya Savaşı sonrasında kurulan uluslararası örgüt hangisidir?",
        answer: "Milletler Cemiyeti",
        explanation: "Milletler Cemiyeti, savaş sonrası barışı koruma amacıyla kurulsa da uzun vadede başarılı olamadı.",
      },
      {
        question: "Mısır devlet başkanlarına verilen unvan nedir?",
        answer: "Firavun",
        explanation: "Antik Mısır'da siyasi ve dini otoriteyi temsil eden yöneticiler firavun unvanıyla anılırdı.",
      },
      {
        question: "İpek Yolu'nun temel önemi nedir?",
        answer: "Doğu ile Batı arasında ticaret ve kültür etkileşimi sağlaması",
        explanation: "İpek Yolu yalnızca mal değil, fikir, teknoloji ve kültür aktarımı için de önemli bir hattır.",
      },
      {
        question: "Atatürk'e Başöğretmen unvanı hangi reformla ilişkilidir?",
        answer: "Harf İnkılabı",
        explanation: "Yeni Türk alfabesinin yaygınlaştırılması sürecinde Atatürk'ün eğitim odaklı rolü bu unvanla anıldı.",
      },
      {
        question: "II. Viyana Kuşatması'nın başarısız olması hangi devletin Avrupa'daki ilerleyişini etkiledi?",
        answer: "Osmanlı Devleti",
        explanation: "Bu olay, Osmanlı'nın Avrupa içindeki askeri ve siyasi ivmesi açısından kırılma noktası olarak görülür.",
      },
      {
        question: "Sanayi İnkılabı'nın doğurduğu temel değişimlerden biri nedir?",
        answer: "Üretimde makine kullanımının yaygınlaşması",
        explanation: "Makineleşme, kentleşme ve yeni iş bölümü yapıları Sanayi İnkılabı'nın başlıca sonuçları arasındadır.",
      },
      {
        question: "1453 tarihi Avrupa tarihinde hangi çağ kapanışıyla anılır?",
        answer: "Orta Çağ",
        explanation: "İstanbul'un fethi, ders kitaplarında ve genel kültür sorularında Orta Çağ'ın kapanışıyla birlikte anılır.",
      },
      {
        question: "Osmanlı Devleti'nin kurucusu kimdir?",
        answer: "Osman Gazi",
        explanation: "Osman Gazi, Osmanlı Beyliği'nin kurucu lideri olarak tarih sorularında temel isimlerden biridir.",
      },
      {
        question: "Türkiye Cumhuriyeti'nin ilanından önce kabul edilen anayasa hangisidir?",
        answer: "1921 Anayasası",
        explanation: "1921 Anayasası, Milli Mücadele döneminin siyasal yapısını anlamak için kritik metinlerden biridir.",
      },
      {
        question: "Roma tarihinde Sezar adı ile en çok özdeşleşen isim kimdir?",
        answer: "Julius Caesar",
        explanation: "Julius Caesar, Roma siyasi tarihinde en çok bilinen figürlerden biri olarak genel kültür sorularında sıkça yer alır.",
      },
      {
        question: "Kavimler Göçü Avrupa tarihinde hangi alanlarda büyük değişim yaratmıştır?",
        answer: "Siyasi ve toplumsal yapı",
        explanation: "Kavimler Göçü, devlet yapılarından yerleşim düzenine kadar Avrupa tarihini etkileyen büyük bir harekettir.",
      },
      {
        question: "Misak-ı Milli hangi dönemde önem kazanan kararlar bütünüdür?",
        answer: "Milli Mücadele dönemi",
        explanation: "Misak-ı Milli, yeni devletin bağımsızlık ve sınır anlayışını belirleyen temel siyasi kararlardan biri olarak kabul edilir.",
      },
    ],
    faqs: [
      {
        question: "Tarih sorularında sadece yıl ezberi yeterli mi?",
        answer: "Hayır. Olayların nedenlerini ve sonuçlarını bilmek, tarih sorularında genellikle daha ayırt edici olur.",
      },
      {
        question: "Bu seçki hangi seviyeye uygun?",
        answer: "Temel ve orta seviye genel tarih bilgisi için uygundur; hızlı tekrar isteyen ziyaretçiler hedeflenmiştir.",
      },
      {
        question: "Tarih quizine geçmeden önce neye bakmalıyım?",
        answer: "Kronoloji, temel antlaşmalar, önemli savaşlar ve devlet isimleri iyi bir başlangıç alanı sunar.",
      },
    ],
    sources: [
      { label: "Encyclopaedia Britannica - History", url: "https://www.britannica.com/topic/history" },
      { label: "T.C. Cumhurbaşkanlığı", url: "https://www.tccb.gov.tr/" },
      { label: "UNESCO", url: "https://www.unesco.org/" },
    ],
  },
  {
    title: "Bilim Soruları ve Cevapları 2026 – Şıklı, Açıklamalı | GenelKültür",
    description: "Temel kavramlar, gezegenler, buluşlar ve bilim insanlarından şıklı, açıklamalı bilim soruları ve cevapları. Ücretsiz oku-öğren, sonra bilim testine geç.",
    path: ROUTES.bilimSorulariCevaplari,
    keywords: ["bilim soruları ve cevapları", "açıklamalı bilim soruları", "bilim quiz soruları"],
    eyebrow: "Açıklamalı Bilim",
    heading: "Bilim soruları ve cevapları ile temel kavramları daha sağlam oturtun.",
    intro: "Bilim kategorisi; fizik, biyoloji, astronomi ve buluş tarihine uzanan geniş bir alan açar. Buradaki kısa açıklamalar, doğru cevabı sadece hatırlamaya değil, arkasındaki mantığı kurmaya da yardımcı olur. Elementlerden gezegenlere, hücre biyolojisinden temel fizik yasalarına kadar genel kültür düzeyinde en çok karşılaşılan başlıkları derledik. Böylece sembolleri, tanımları ve bilim insanlarını birbirine karıştırmadan, kalıcı bir biçimde tekrar edebilirsiniz.",
    summaryTitle: "Bilim kategorisinde neler var?",
    summary: "Gezegenler, elementler, temel fiziki kavramlar ve bilime yön vermiş isimler hakkında seçilmiş sorularla hızlı bir tekrar deneyimi sunulur. Her açıklama, kavramı günlük bir örnekle ya da sınavlarda sık çıkan ayrıntısıyla pekiştirmeyi amaçlar.",
    bullets: ["Temel kavramlar", "Bilim tarihi", "Görünür ve açıklamalı içerik"],
    topicAreas: ["Astronomi", "Biyoloji", "Fizik", "Kimya", "Bilim İnsanları"],
    studyTips: [
      "Semboller ve temel tanımlar için kısa eşleştirme tekrarları yapın.",
      "Gezegenler ve elementler gibi listeli konularda tablo mantığı faydalı olur.",
      "Bilim insanlarını buluşlarıyla birlikte tekrar etmek kalıcılığı artırır.",
    ],
    quizLabel: "Bilim Testine Başla",
    quizHref: `${ROUTES.game}?category=bilim`,
    editor: "GenelKultur.com.tr Editöryal Ekip",
    updatedAt: "29 Haziran 2026",
    reviewNote: "Temel bilim kavramları, genel kültür düzeyinde doğruluk ve okunabilirlik odağı ile editör ekibimiz tarafından seçildi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Periyodik tabloda Fe sembolü hangi elementi gösterir?",
        answer: "Demir",
        explanation: "Fe, Latince demir adından gelir ve periyodik tabloda en bilinen sembollerden biridir.",
      },
      {
        question: "Dünya'nın doğal uydusu hangisidir?",
        answer: "Ay",
        explanation: "Ay, Dünya etrafında dönen tek doğal uydu olarak gelgitler ve gece aydınlığı üzerinde etkilidir.",
      },
      {
        question: "Su hangi iki elementten oluşur?",
        answer: "Hidrojen ve oksijen",
        explanation: "H2O ifadesi, su molekülünde iki hidrojen ve bir oksijen atomu bulunduğunu gösterir.",
      },
      {
        question: "Yer çekimi kanunuyla en çok hangi bilim insanı özdeşleştirilir?",
        answer: "Isaac Newton",
        explanation: "Newton, klasik fizik tarihinde hareket ve çekim yasalarını sistemli biçimde ortaya koydu.",
      },
      {
        question: "Güneş Sistemi'ne ismini veren yıldız hangisidir?",
        answer: "Güneş",
        explanation: "Sistemdeki tüm büyük gök cisimleri, kütlesel merkezi oluşturan Güneş etrafında hareket eder.",
      },
      {
        question: "DNA'nın açılımı nedir?",
        answer: "Deoksiribonükleik asit",
        explanation: "DNA, canlılardaki genetik bilginin saklanması ve aktarılmasında temel rol oynar.",
      },
      {
        question: "Bitkilerin kendi besinini üretmesine ne ad verilir?",
        answer: "Fotosentez",
        explanation: "Bitkiler, güneş ışığı yardımıyla karbondioksit ve suyu kullanarak organik madde üretir.",
      },
      {
        question: "En büyük gezegen hangisidir?",
        answer: "Jüpiter",
        explanation: "Jüpiter, büyük gaz devi yapısıyla hem çap hem de kütle bakımından gezegenler arasında öne çıkar.",
      },
      {
        question: "Elektriği inceleyen temel bilim dalı hangisidir?",
        answer: "Fizik",
        explanation: "Elektrik, hareket, enerji ve kuvvet gibi konular fizik disiplininin temel alanlarındandır.",
      },
      {
        question: "Aşı çalışmalarıyla tanınan ve kuduz aşısını geliştiren bilim insanı kimdir?",
        answer: "Louis Pasteur",
        explanation: "Pasteur, mikrobiyoloji ve aşılar alanında modern tıp tarihini etkileyen isimlerden biridir.",
      },
      {
        question: "Dünya atmosferinde en bol bulunan gaz hangisidir?",
        answer: "Azot",
        explanation: "Atmosferin büyük kısmı azottan oluşur; oksijen ise ikinci büyük bileşendir.",
      },
      {
        question: "İnsan vücudundaki en büyük organ hangisidir?",
        answer: "Deri",
        explanation: "Deri hem koruyucu görevi hem de yüzey alanı nedeniyle en büyük organ kabul edilir.",
      },
      {
        question: "Su deniz seviyesinde kaç derecede kaynar?",
        answer: "100 derece",
        explanation: "Standart atmosfer basıncında suyun kaynama noktası 100 santigrat derecedir.",
      },
      {
        question: "Halkalarıyla en çok tanınan gezegen hangisidir?",
        answer: "Satürn",
        explanation: "Başka gezegenlerde de halka sistemi olsa da genel kültürde Satürn bu özellikle bilinir.",
      },
      {
        question: "Fotosentezde temel rol oynayan pigment hangisidir?",
        answer: "Klorofil",
        explanation: "Klorofil, ışığı soğurarak bitkilerin enerji üretim sürecine katkıda bulunur.",
      },
      {
        question: "Elektrik akımının birimi nedir?",
        answer: "Amper",
        explanation: "Volt gerilimi, amper ise akım şiddetini ifade eder; bu ikisi sık karıştırılır.",
      },
      {
        question: "Gezegenler Güneş etrafında hangi tür yörüngelerde hareket eder?",
        answer: "Eliptik",
        explanation: "Kepler yasalarına göre gezegenlerin hareketi tam dairesel değil, eliptiktir.",
      },
      {
        question: "Atom numarası neyi gösterir?",
        answer: "Proton sayısını",
        explanation: "Bir elementin kimliğini proton sayısı belirlediği için atom numarası bununla ilgilidir.",
      },
      {
        question: "Asitlerin pH değeri genel olarak kaçın altındadır?",
        answer: "7",
        explanation: "pH ölçeğinde 7 nötr kabul edilir; bunun altındaki değerler asidik ortamı gösterir.",
      },
      {
        question: "Canlıların ortak enerji birimi olarak bilinen molekül hangisidir?",
        answer: "ATP",
        explanation: "ATP, hücre içindeki enerji aktarım süreçlerinde temel moleküllerden biridir.",
      },
      {
        question: "Ses neden boşlukta yayılmaz?",
        answer: "Maddesel ortam olmadığı için",
        explanation: "Ses mekanik bir dalgadır ve iletilmesi için parçacıklı bir ortama ihtiyaç duyar.",
      },
      {
        question: "Dünya'nın kendi ekseni etrafında dönmesi hangi sonucu doğurur?",
        answer: "Gece ve gündüz",
        explanation: "Dünya'nın ekseni etrafındaki dönüşü, günlük zaman akışını belirleyen temel etkendir.",
      },
      {
        question: "İnsan vücudunda oksijeni taşıyan temel protein hangisidir?",
        answer: "Hemoglobin",
        explanation: "Hemoglobin, kandaki oksijen taşınmasında görev alır ve biyoloji sorularında çok sık geçer.",
      },
      {
        question: "Bir maddenin katıdan sıvıya geçmesine ne ad verilir?",
        answer: "Erime",
        explanation: "Hal değişimleri temel bilim konuları arasında en çok tekrar edilen başlıklardan biridir.",
      },
      {
        question: "Güneş'ten gelen zararlı ultraviyole ışınlarını büyük oranda hangi katman tutar?",
        answer: "Ozon tabakası",
        explanation: "Ozon tabakası, atmosfer içinde koruyucu etkisiyle tanınan temel yapılardan biridir.",
      },
    ],
    faqs: [
      {
        question: "Bilim sorularında hangi alanlar öne çıkar?",
        answer: "Temel fizik, biyoloji, astronomi ve bilim tarihi genellikle ilk karşılaşılan başlıklar olur.",
      },
      {
        question: "Bu içerik ileri seviye mi?",
        answer: "Hayır. Buradaki seçki daha çok genel kültür ve temel bilim bilgisi düzeyinde hazırlandı.",
      },
      {
        question: "Teste girmeden önce nasıl tekrar yapmalıyım?",
        answer: "Temel kavramları, sembolleri ve bilim insanlarını kısa bloklar halinde tekrar etmek iyi sonuç verir.",
      },
    ],
    sources: [
      { label: "NASA", url: "https://www.nasa.gov/" },
      { label: "Khan Academy Science", url: "https://www.khanacademy.org/science" },
      { label: "Encyclopaedia Britannica - Science", url: "https://www.britannica.com/science" },
    ],
  },
  {
    title: "Sanat Soruları ve Cevapları 2026 – Şıklı, Açıklamalı | GenelKültür",
    description: "Ressamlar, akımlar, eserler ve müzik dünyasından şıklı, açıklamalı sanat soruları ve cevapları. Ücretsiz oku-öğren, sonra sanat testine geçip puanını gör.",
    path: ROUTES.sanatSorulariCevaplari,
    keywords: ["sanat soruları ve cevapları", "açıklamalı sanat soruları", "sanat quiz soruları"],
    eyebrow: "Açıklamalı Sanat",
    heading: "Sanat soruları ve cevapları ile eserleri ve isimleri daha kolay ayırın.",
    intro: "Sanat kategorisinde eser ile sanatçıyı, dönem ile akımı ve müzik ile sahne sanatlarını birbirinden ayırmak önemlidir. Buradaki seçme sorular, hızlı ama anlamlı bir tekrar sunar. Resimden edebiyata, klasik müzikten sinemaya kadar genel kültürde en çok sorulan eser-sanatçı eşleştirmelerini bir araya getirdik. Her açıklama, eseri döneminin akımıyla ya da sanatçının diğer çalışmalarıyla ilişkilendirerek bilgiyi bağlam içinde hatırlamanıza yardımcı olur.",
    summaryTitle: "Sanat kategorisinin kapsamı",
    summary: "Resim, edebiyat, klasik müzik ve sinema gibi temel alanlardan seçilen sorular bir araya getirilerek okunabilir bir içerik katmanı oluşturuldu. Türk ve dünya sanatından örnekler dengeli biçimde yer alır; böylece hem yerel hem evrensel başlıklarda tekrar yapabilirsiniz.",
    bullets: ["Eser ve sanatçı eşleştirmeleri", "Akım ve dönem bilgisi", "Kısa açıklamalar"],
    topicAreas: ["Resim", "Edebiyat", "Müzik", "Sinema", "Sahne Sanatları"],
    studyTips: [
      "Sanatçı-eser eşleştirmelerini ikili kart mantığıyla tekrar etmek hız kazandırır.",
      "Akım ve dönem sorularında öncü isimleri ayıklayarak çalışmak daha kalıcı olur.",
      "Bir eseri hem sanatçı hem de alanla birlikte kodlamak karışıklık riskini azaltır.",
    ],
    quizLabel: "Sanat Testine Başla",
    quizHref: `${ROUTES.game}?category=sanat`,
    editor: "GenelKultur.com.tr Editöryal Ekip",
    updatedAt: "29 Haziran 2026",
    reviewNote: "Sanat seçkisi; eser, sanatçı ve dönem ilişkisini ayıklamaya yardım eden temel referanslara göre editör ekibimiz tarafından düzenlendi.",
    correctionHref: ROUTES.contact,
    questions: [
      {
        question: "Mona Lisa tablosunun ressamı kimdir?",
        answer: "Leonardo da Vinci",
        explanation: "Rönesans döneminin en tanınmış isimlerinden da Vinci, bu eseriyle sanat tarihinin simgelerinden birini üretmiştir.",
      },
      {
        question: "Guernica adlı eser hangi ressama aittir?",
        answer: "Pablo Picasso",
        explanation: "Guernica, savaş karşıtı mesajı ve güçlü kompozisyonuyla Picasso'nun en bilinen eserlerinden biridir.",
      },
      {
        question: "Romeo ve Juliet eserinin yazarı kimdir?",
        answer: "William Shakespeare",
        explanation: "Shakespeare, İngiliz edebiyatının en etkili oyun yazarlarından biri olarak kabul edilir.",
      },
      {
        question: "Fındıkkıran (Nutcracker) balesinin müziği en çok hangi besteciyle özdeşleştirilir?",
        answer: "Pyotr İlyiç Çaykovski",
        explanation: "Çaykovski, bale ve orkestra müziği alanında geniş kitlelerce tanınan eserler vermiştir.",
      },
      {
        question: "Türk edebiyatında Şair Evlenmesi adlı eser kime aittir?",
        answer: "İbrahim Şinasi",
        explanation: "Şair Evlenmesi, Türk tiyatrosunun ilk örnekleri arasında anılan önemli bir eserdir.",
      },
      {
        question: "Yıldızlı Gece adlı tablo hangi ressamındır?",
        answer: "Vincent van Gogh",
        explanation: "Van Gogh'un bu eseri, fırça darbeleri ve renk kullanımı ile sanat tarihinde ayrı bir yere sahiptir.",
      },
      {
        question: "Klasik müzikte 9. Senfoni denince en çok hangi besteci akla gelir?",
        answer: "Ludwig van Beethoven",
        explanation: "Beethoven'ın 9. Senfonisi, finalindeki korolu yapı ile klasik müzik repertuvarının zirvelerinden biridir.",
      },
      {
        question: "Hababam Sınıfı'nın yazarı kimdir?",
        answer: "Rıfat Ilgaz",
        explanation: "Hababam Sınıfı önce edebi eser olarak ortaya çıkmış, sonra sinema uyarlamalarıyla çok yaygın tanınmıştır.",
      },
      {
        question: "Osman Hamdi Bey'in en bilinen eserlerinden biri hangisidir?",
        answer: "Kaplumbağa Terbiyecisi",
        explanation: "Kaplumbağa Terbiyecisi, Osman Hamdi Bey ile özdeşleşen ve Türk resim tarihinde özel yeri olan bir tablodur.",
      },
      {
        question: "Sinemada Oscar ödülleri hangi ülkede düzenlenen ödüller olarak bilinir?",
        answer: "Amerika Birleşik Devletleri",
        explanation: "Akademi Ödülleri olarak da bilinen Oscar, film endüstrisinin en tanınmış ödül organizasyonlarındandır.",
      },
      {
        question: "Kaplumbağa Terbiyecisi tablosu hangi Türk sanatçıya aittir?",
        answer: "Osman Hamdi Bey",
        explanation: "Bu eser, Osman Hamdi Bey ile neredeyse özdeşleşen ve Türk resim tarihinde çok bilinen bir tablodur.",
      },
      {
        question: "Suç ve Ceza romanının yazarı kimdir?",
        answer: "Fyodor Dostoyevski",
        explanation: "Dostoyevski, Rus edebiyatının en bilinen romancılarından biri olarak genel kültürde sıkça sorulur.",
      },
      {
        question: "Don Kişot eserinin yazarı kimdir?",
        answer: "Miguel de Cervantes",
        explanation: "Don Kişot, modern roman tarihinin kurucu örneklerinden biri sayılır.",
      },
      {
        question: "Nutuk adlı eserin yazarı kimdir?",
        answer: "Mustafa Kemal Atatürk",
        explanation: "Nutuk, Cumhuriyet tarihi ve siyasi düşünce açısından temel metinlerden biri olarak görülür.",
      },
      {
        question: "Sefiller romanının yazarı kimdir?",
        answer: "Victor Hugo",
        explanation: "Victor Hugo'nun bu eseri, dünya edebiyatının en tanınmış toplumsal romanları arasındadır.",
      },
      {
        question: "Doğu-Batı senteziyle tanınan ünlü Türk mimar kimdir?",
        answer: "Mimar Sinan",
        explanation: "Mimar Sinan, Osmanlı mimarisinin en güçlü isimlerinden biri olarak anılır.",
      },
      {
        question: "La Traviata hangi sanat dalında öne çıkan bir eserdir?",
        answer: "Opera",
        explanation: "La Traviata, Giuseppe Verdi tarafından bestelenen ve opera repertuvarında önemli yeri olan bir eserdir.",
      },
      {
        question: "Rönesans döneminin ünlü heykeli David kime aittir?",
        answer: "Michelangelo",
        explanation: "Michelangelo'nun David heykeli, Rönesans heykel sanatının en tanınmış eserlerindendir.",
      },
      {
        question: "Hababam Sınıfı önce hangi alanda ortaya çıkmıştır?",
        answer: "Edebiyat",
        explanation: "Eser ilk olarak yazılı anlatım olarak ortaya çıkmış, sonra sinemayla daha geniş kitlelere ulaşmıştır.",
      },
      {
        question: "Klasik batı müziğinin önde gelen bestecilerinden Mozart hangi ülkenin sanatçısıdır?",
        answer: "Avusturya",
        explanation: "Mozart, Salzburg doğumlu olduğu için Avusturya ile özdeşleşmiş bestecilerden biridir.",
      },
      {
        question: "Son Akşam Yemeği (The Last Supper) adlı eser hangi sanatçıyla özdeşleşir?",
        answer: "Leonardo da Vinci",
        explanation: "Son Akşam Yemeği olarak da bilinen bu eser, Rönesans sanatının en bilinen duvar resimlerinden biridir.",
      },
      {
        question: "Klasik Türk musikisinde bestekâr olarak tanınan Itrî hangi alanla ilgilidir?",
        answer: "Müzik",
        explanation: "Itrî, Türk musikisi tarihi içinde en çok anılan bestekârlardan biridir.",
      },
      {
        question: "Sistina Şapeli'nin tavan freskleriyle en çok hangi sanatçı anılır?",
        answer: "Michelangelo",
        explanation: "Michelangelo, hem heykel hem de resim alanıyla Rönesans'ın en güçlü figürlerinden biridir.",
      },
      {
        question: "Anna Karenina romanının yazarı kimdir?",
        answer: "Lev Tolstoy",
        explanation: "Tolstoy, Rus edebiyatının genel kültür sorularında en çok karşılaşılan yazarlarındandır.",
      },
      {
        question: "Tiyatro, opera ve bale gibi alanlar hangi daha geniş sanat başlığında toplanır?",
        answer: "Sahne sanatları",
        explanation: "Tiyatro, opera ve bale gibi alanlar genel olarak sahne sanatları başlığı altında ele alınır.",
      },
    ],
    faqs: [
      {
        question: "Sanat sorularında en zor kısım nedir?",
        answer: "Eser ile sanatçıyı, akım ile dönemi karıştırmadan eşleştirebilmek genellikle en ayırt edici bölümdür.",
      },
      {
        question: "Bu sayfa sadece resim sanatı için mi?",
        answer: "Hayır. Resim, edebiyat, müzik ve sinema gibi farklı alanlardan seçmeler sunar.",
      },
      {
        question: "Sanat quizine hazırlanmak için neye bakmalıyım?",
        answer: "Önemli eser adları, sanatçı isimleri ve temel dönem-akım ilişkileri hızlı bir başlangıç sağlar.",
      },
    ],
    sources: [
      { label: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/" },
      { label: "MoMA Learning", url: "https://www.moma.org/learn/moma_learning/" },
      { label: "Britannica - Arts", url: "https://www.britannica.com/art" },
    ],
  },
];
