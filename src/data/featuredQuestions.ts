// Ana sayfada gösterilen, prerender edilen "Genel Kültür Soruları ve Cevapları"
// bölümü için seçilmiş, açıklamalı örnek sorular. SEO ve okunabilir içerik amaçlıdır.

export interface FeaturedQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const featuredQuestions: FeaturedQuestion[] = [
  {
    question: "İstanbul hangi yıl fethedilmiştir?",
    options: ["1453", "1492", "1402", "1517"],
    correctIndex: 0,
    explanation:
      "İstanbul, 1453 yılında Fatih Sultan Mehmet tarafından fethedilmiştir. Bu olay Orta Çağ'ın sonu, Yeni Çağ'ın başlangıcı olarak kabul edilir.",
  },
  {
    question: "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
    options: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"],
    correctIndex: 2,
    explanation:
      "Cumhuriyet, 29 Ekim 1923'te ilan edilmiş ve Mustafa Kemal Atatürk ilk cumhurbaşkanı seçilmiştir. Bu tarih her yıl Cumhuriyet Bayramı olarak kutlanır.",
  },
  {
    question: "Türkiye'nin sınırları içinde doğup denize dökülen en uzun nehri hangisidir?",
    options: ["Fırat", "Sakarya", "Kızılırmak", "Yeşilırmak"],
    correctIndex: 2,
    explanation:
      "Kızılırmak, yaklaşık 1.355 km uzunluğuyla tamamı Türkiye sınırları içinde olan en uzun nehirdir ve Karadeniz'e dökülür.",
  },
  {
    question: "Periyodik tabloda 'Fe' sembolü hangi elementi gösterir?",
    options: ["Flor", "Fosfor", "Demir", "Fermiyum"],
    correctIndex: 2,
    explanation:
      "'Fe' sembolü, Latince 'ferrum' kelimesinden gelir ve demir elementini ifade eder. Demir, dünyada en çok kullanılan metallerden biridir.",
  },
  {
    question: "'Mona Lisa' tablosunun ressamı kimdir?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Vincent van Gogh"],
    correctIndex: 0,
    explanation:
      "Mona Lisa, Rönesans dönemi sanatçısı Leonardo da Vinci tarafından yapılmıştır ve günümüzde Paris'teki Louvre Müzesi'nde sergilenmektedir.",
  },
  {
    question: "'Suç ve Ceza' romanının yazarı kimdir?",
    options: ["Lev Tolstoy", "Anton Çehov", "Maksim Gorki", "Fyodor Dostoyevski"],
    correctIndex: 3,
    explanation:
      "'Suç ve Ceza', Rus edebiyatının en önemli yazarlarından Fyodor Dostoyevski'nin 1866'da yayımlanan ünlü psikolojik romanıdır.",
  },
  {
    question: "İlk Türkiye Büyük Millet Meclisi hangi şehirde açılmıştır?",
    options: ["İstanbul", "Sivas", "Ankara", "Erzurum"],
    correctIndex: 2,
    explanation:
      "TBMM, 23 Nisan 1920'de Ankara'da açılmıştır. Bu tarih aynı zamanda 23 Nisan Ulusal Egemenlik ve Çocuk Bayramı olarak kutlanır.",
  },
  {
    question: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
    options: ["Satürn", "Jüpiter", "Neptün", "Dünya"],
    correctIndex: 1,
    explanation:
      "Jüpiter, Güneş Sistemi'nin en büyük gezegenidir; kütlesi diğer tüm gezegenlerin toplamından daha fazladır.",
  },
  {
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Karaciğer", "Akciğer", "Deri", "Beyin"],
    correctIndex: 2,
    explanation:
      "Deri, yüzey alanı ve ağırlığı bakımından insan vücudundaki en büyük organdır ve vücudu dış etkenlere karşı korur.",
  },
  {
    question: "İstiklal Marşı'nın şairi kimdir?",
    options: ["Mehmet Akif Ersoy", "Yahya Kemal Beyatlı", "Tevfik Fikret", "Namık Kemal"],
    correctIndex: 0,
    explanation:
      "İstiklal Marşı'nın sözleri Mehmet Akif Ersoy'a aittir ve 12 Mart 1921'de TBMM tarafından milli marş olarak kabul edilmiştir.",
  },
  {
    question: "Kurtuluş Savaşı sonrası imzalanan ve Türkiye'nin bağımsızlığını uluslararası alanda tanıyan antlaşma hangisidir?",
    options: ["Lozan Antlaşması", "Sevr Antlaşması", "Mondros Ateşkesi", "Mudanya Ateşkesi"],
    correctIndex: 0,
    explanation:
      "24 Temmuz 1923'te imzalanan Lozan Antlaşması, yeni Türk devletinin bağımsızlığını ve sınırlarını uluslararası düzeyde resmen tanıtan belgedir.",
  },
  {
    question: "Mustafa Kemal Atatürk hangi şehirde doğmuştur?",
    options: ["Selanik", "Manastır", "İstanbul", "Sofya"],
    correctIndex: 0,
    explanation:
      "Atatürk, 1881 yılında o dönemde Osmanlı toprağı olan Selanik'te doğmuştur. Günümüzde Selanik Yunanistan sınırları içindedir.",
  },
  {
    question: "Saf su deniz seviyesinde kaç derecede kaynar?",
    options: ["90 °C", "100 °C", "120 °C", "80 °C"],
    correctIndex: 1,
    explanation:
      "Deniz seviyesinde (1 atmosfer basınçta) saf su 100 °C'de kaynar. Yükseklik arttıkça basınç düştüğü için kaynama sıcaklığı azalır.",
  },
  {
    question: "Işık yılı neyin birimidir?",
    options: ["Zaman", "Hız", "Mesafe", "Enerji"],
    correctIndex: 2,
    explanation:
      "Işık yılı, ışığın bir yılda kat ettiği mesafeyi (yaklaşık 9,46 trilyon km) ifade eden bir uzaklık birimidir; zaman birimi değildir.",
  },
  {
    question: "Telefonu icat eden bilim insanı kimdir?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Guglielmo Marconi"],
    correctIndex: 2,
    explanation:
      "Telefonun patentini 1876'da Alexander Graham Bell almıştır ve modern iletişimin temelini atan icatlardan biri kabul edilir.",
  },
  {
    question: "Osmanlı Devleti'nin kurucusu kimdir?",
    options: ["Orhan Gazi", "Osman Gazi", "I. Murad", "Yıldırım Bayezid"],
    correctIndex: 1,
    explanation:
      "Osmanlı Devleti, 1299'da Osman Gazi (Osman Bey) tarafından kurulmuştur. Devlet adını da kurucusundan almıştır.",
  },
  {
    question: "Malazgirt Savaşı hangi yılda yapılmıştır?",
    options: ["1071", "1176", "1299", "1453"],
    correctIndex: 0,
    explanation:
      "1071'deki Malazgirt Savaşı'nda Sultan Alparslan, Bizans ordusunu yenmiş ve Anadolu'nun kapıları Türklere açılmıştır.",
  },
  {
    question: "'Hamlet' ve 'Romeo ve Juliet' eserlerinin yazarı kimdir?",
    options: ["Charles Dickens", "William Shakespeare", "Victor Hugo", "Goethe"],
    correctIndex: 1,
    explanation:
      "Bu ünlü tiyatro eserleri, İngiliz edebiyatının en büyük yazarı kabul edilen William Shakespeare tarafından kaleme alınmıştır.",
  },
  {
    question: "Sümerler tarihte hangi buluşla öne çıkar?",
    options: ["Barutun icadı", "Yazının icadı", "Pusulanın icadı", "Kâğıdın icadı"],
    correctIndex: 1,
    explanation:
      "Yazıyı (çivi yazısı) ilk kullanan toplum Sümerler kabul edilir. Yazının bulunması tarih çağlarının başlangıcı sayılır.",
  },
  {
    question: "Bitkilerin güneş ışığını kullanarak besin ürettiği olaya ne ad verilir?",
    options: ["Solunum", "Fotosentez", "Terleme", "Mayalanma"],
    correctIndex: 1,
    explanation:
      "Fotosentez, bitkilerin su ve karbondioksiti güneş enerjisiyle besine (glikoz) dönüştürdüğü süreçtir; bu sırada atmosfere oksijen verilir.",
  },
];
