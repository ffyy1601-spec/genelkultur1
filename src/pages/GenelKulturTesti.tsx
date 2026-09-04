import SeoLandingPage, { type RichQuestionItem } from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

const GENEL_KULTUR_TESTI_QUESTIONS: RichQuestionItem[] = [
  {
    q: "Türkiye sınırları içerisinde doğup yine Türkiye sınırları içerisinden denize dökülen en uzun nehir hangisidir?",
    options: ["Fırat", "Sakarya", "Kızılırmak", "Yeşilırmak"],
    a: "C) Kızılırmak",
    desc: "Kızılırmak, yaklaşık 1.355 kilometre uzunluğuyla tamamı Türkiye sınırları içinde kalan en uzun nehirdir. Sivas'tan doğar ve Samsun'un Bafra burnundan Karadeniz'e dökülür.",
  },
  {
    q: "İstiklal Marşı'mızın şairi kimdir ve marş TBMM tarafından hangi yılda kabul edilmiştir?",
    options: ["Mehmet Akif Ersoy - 1921", "Yahya Kemal Beyatlı - 1923", "Tevfik Fikret - 1920", "Namık Kemal - 1922"],
    a: "A) Mehmet Akif Ersoy - 1921",
    desc: "Mehmet Akif Ersoy tarafından yazılan ve Osman Zeki Üngör tarafından bestelenen İstiklal Marşı, 12 Mart 1921 tarihinde TBMM tarafından milli marş olarak kabul edilmiştir.",
  },
  {
    q: "Yüzölçümü ve derinlik bakımından dünyanın en büyük okyanusu hangisidir?",
    options: ["Atlas Okyanusu", "Hint Okyanusu", "Büyük Okyanus (Pasifik)", "Arktik Okyanusu"],
    a: "C) Büyük Okyanus (Pasifik)",
    desc: "Büyük Okyanus (Pasifik), tüm dünya kara parçalarının toplamından daha geniş bir alana yayılır ve dünyanın en derin noktası olan Mariana Çukuru da bu okyanustadır.",
  },
  {
    q: "Periyodik tabloda 'Au' sembolü hangi değerli madeni simgeler?",
    options: ["Gümüş", "Altın", "Bakır", "Platin"],
    a: "B) Altın",
    desc: "'Au' sembolü, Latince 'parlayan şafak' anlamına gelen 'aurum' kelimesinden türemiştir ve altını simgeler.",
  },
  {
    q: "Türkiye Cumhuriyeti'nin kurucusu Gazi Mustafa Kemal Atatürk hangi şehirde dünyaya gelmiştir?",
    options: ["Selanik", "Manastır", "İstanbul", "Sofya"],
    a: "A) Selanik",
    desc: "Mustafa Kemal Atatürk, 1881 yılında o dönemde Osmanlı toprağı olan Selanik'te doğmuştur.",
  },
  {
    q: "Türkiye'nin yüzölçümü bakımından en büyük gölü hangisidir?",
    options: ["Tuz Gölü", "Beyşehir Gölü", "Van Gölü", "İznik Gölü"],
    a: "C) Van Gölü",
    desc: "Van Gölü, 3.713 km²'lik yüzölçümü ile Türkiye'nin en büyük gölüdür. Suları sodalı ve tuzludur; dünyada sadece bu gölde yaşayan inci kefali balığına ev sahipliği yapar.",
  },
  {
    q: "Sesin elektrik sinyalleri üzerinden iletilmesini sağlayarak telefonu icat eden mucit kimdir?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
    a: "C) Alexander Graham Bell",
    desc: "Alexander Graham Bell, 1876 yılında telefonun patentini alarak iletişim çağında devrim yaratmıştır.",
  },
  {
    q: "Güneş Sistemi'nde Güneş'e en yakın mesafede bulunan gezegen hangisidir?",
    options: ["Venüs", "Merkür", "Mars", "Dünya"],
    a: "B) Merkür",
    desc: "Merkür, Güneş'e en yakın ve Güneş Sistemi'nin en küçük gezegenidir. Atmosferi neredeyse olmadığı için gece ile gündüz arasındaki sıcaklık farkı yüzlerce dereceyi bulur.",
  },
  {
    q: "İslamiyet öncesi Türk devletlerinde hükümdarın eşine verilen resmi unvan hangisidir?",
    options: ["Hatun (Katun)", "Sultan", "Haseki", "Valide"],
    a: "A) Hatun (Katun)",
    desc: "İlk Türk devletlerinde hatunlar devlet yönetiminde ve kurultay toplantılarında hükümdarın yanında oturur, elçileri kabul eder ve siyasi söz hakkına sahip olurdu.",
  },
  {
    q: "Edebiyat tarihinde ilk modern roman kabul edilen 'Don Kişot'un yazarı kimdir?",
    options: ["Miguel de Cervantes", "Dante Alighieri", "Giovanni Boccaccio", "William Shakespeare"],
    a: "A) Miguel de Cervantes",
    desc: "İspanyol yazar Cervantes'in 1605'te yayımlanan eseri 'Don Kişot', şövalye romanlarının bir parodisi olarak yazılmış ve modern roman türünün ilk örneği kabul edilmiştir.",
  },
  {
    q: "İnsan vücudundaki en küçük kemik olan 'üzengi kemiği' vücudun hangi organında bulunur?",
    options: ["Burun", "Kulak (Orta Kulak)", "Ayak Bileği", "El Parmağı"],
    a: "B) Kulak (Orta Kulak)",
    desc: "Orta kulakta çekiç ve örs kemikleriyle birlikte ses dalgalarını iç kulağa ileten üzengi (stapes) kemiği, yaklaşık 3 milimetrelik boyutuyla vücudun en küçük kemiğidir.",
  },
  {
    q: "İkinci Dünya Savaşı'nın ardından küresel barış ve güvenliği korumak amacıyla kurulan Birleşmiş Milletler (BM) hangi yıl kurulmuştur?",
    options: ["1919", "1939", "1945", "1950"],
    a: "C) 1945",
    desc: "Birleşmiş Milletler Antlaşması 24 Ekim 1945'te yürürlüğe girmiş ve örgüt resmen faaliyete geçmiştir. Türkiye de kurucu üyeler arasında yer almaktadır.",
  },
];

export default function GenelKulturTesti() {
  return (
    <SeoLandingPage
      title="Genel Kültür Testi 2026 - 5000+ Soru, Anında Puan | Ücretsiz Çöz"
      description="Genel kültür testi çöz, seviyeni anında öğren! 5000+ güncel soru, tarih, bilim, sanat ve coğrafyadan; üyeliksiz, ücretsiz ve mobil uyumlu. Hemen başla, puanını gör."
      path={ROUTES.genelKulturTesti}
      keywords={[
        "genel kultur testi",
        "genel kultur testi 2026",
        "genel kultur test",
        "genel kultur testleri",
        "genel kultur quiz",
        "kultur testi",
        "online genel kültür çöz",
      ]}
      eyebrow="Online Genel Kültür Testi"
      heading="Genel Kültür Testi: Bilgi Seviyeni Anında Ölç"
      intro="Genel kültür testi, bilgini eğlenceli ve hızlı bir şekilde sınamanın en iyi yoludur. Tarih, coğrafya, bilim, sanat ve güncel bilgilerden seçilen binlerce soruyla seviyeni anında ölçebilirsin. Üyelik yok, kayıt yok: ister 10 soruluk hızlı tur ister 15 soruluk klasik yarışma çöz, test sonunda doğru-yanlış dağılımını ve başarı oranını gör."
      bullets={["5000+ Güncel Soru Havuzu", "Açıklamalı Doğru Cevaplar", "Ücretsiz ve Üyeliksiz"]}
      sampleQuestions={GENEL_KULTUR_TESTI_QUESTIONS}
      ctaLabel="Genel Kültür Testine Başla"
      ctaHref={`${ROUTES.game}?category=genel`}
      studyTips={[
        {
          title: "Geniş Yelpazeden Beslenin",
          text: "Genel kültür tek bir alanla sınırlı değildir. Tarih, coğrafya, bilim ve sanattan her gün küçük dozlarda bilgi edinmek en etkili gelişim yöntemidir.",
        },
        {
          title: "Yanlışlarınızı Not Alın",
          text: "Testi çözerken yanlış yaptığınız soruları veya tereddüt ettiğiniz seçenekleri inceleyin. Açıklamaları okumak bilgiyi kalıcı hale getirir.",
        },
        {
          title: "Hafızanızı Yarışma Modunda Sınayın",
          text: "Zaman kısıtlı turlarla pratik yapmak zihnin bilgiye hızlı erişme yeteneğini geliştirir ve sınav temposuna hazırlar.",
        },
      ]}
    />
  );
}
