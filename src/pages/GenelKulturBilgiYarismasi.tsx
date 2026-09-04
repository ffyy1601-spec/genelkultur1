import SeoLandingPage, { type RichQuestionItem } from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

const BILGI_YARISMASI_QUESTIONS: RichQuestionItem[] = [
  {
    q: "Fatih Sultan Mehmet 1453 yılında İstanbul'u fethettiğinde kaç yaşındaydı?",
    options: ["19", "21", "24", "27"],
    a: "B) 21",
    desc: "1432 doğumlu olan II. Mehmet, 29 Mayıs 1453'te İstanbul'u fethettiğinde henüz 21 yaşındaydı ve bu başarısıyla 'Fatih' unvanını almıştır.",
  },
  {
    q: "Antik Dünyanın Yedi Harikası arasında günümüze kadar büyük ölçüde ayakta kalabilen tek yapı hangisidir?",
    options: ["İskenderiye Feneri", "Babil'in Asma Bahçeleri", "Keops Piramidi", "Rodos Heykeli"],
    a: "C) Keops Piramidi",
    desc: "MÖ 2560 civarında Mısır'ın Gize kentinde inşa edilen Keops (Khufu) Piramidi, Antik Dünyanın Yedi Harikası'ndan günümüze ulaşabilen en eski ve tek yapıdır.",
  },
  {
    q: "Kuzey Kutup bölgesinde gökyüzünde görülen büyüleyici ışık dalgalarına (Kuzey Işıkları) verilen bilimsel isim nedir?",
    options: ["Aurora Australis", "Aurora Borealis", "Halo Etkisi", "Fata Morgana"],
    a: "B) Aurora Borealis",
    desc: "Güneş'ten gelen yüklü parçacıkların Dünya'nın manyetik alanıyla etkileşime girmesi sonucu oluşan kutup ışıklarına kuzey yarımkürede 'Aurora Borealis', güneyde ise 'Aurora Australis' denir.",
  },
  {
    q: "Türkiye Cumhuriyeti'nin ilk kadın Başbakanı kimdir?",
    options: ["Türkan Akyol", "Tansu Çiller", "Behice Boran", "Filiz Dinçmen"],
    a: "B) Tansu Çiller",
    desc: "Ekonomist ve akademisyen Tansu Çiller, 1993 yılında Doğru Yol Partisi genel başkanı seçilerek Türkiye'nin ilk kadın başbakanı olmuştur.",
  },
  {
    q: "Beyaz körlük salgınını konu alan ünlü 'Körlük' romanının Nobel ödüllü Portekizli yazarı kimdir?",
    options: ["Gabriel García Márquez", "José Saramago", "Mario Vargas Llosa", "Jorge Luis Borges"],
    a: "B) José Saramago",
    desc: "1998 Nobel Edebiyat Ödülü sahibi José Saramago'nun 1995'te yayımlanan 'Körlük' romanı, insan doğasını ve toplum düzeninin çöküşünü benzersiz bir üslupla ele alır.",
  },
  {
    q: "Dünya atmosferinin tabakalarından hangisi radyo dalgalarını yansıtarak uzun mesafeli haberleşmeyi mümkün kılar?",
    options: ["Troposfer", "Stratosfer", "İyonosfer", "Mezosfer"],
    a: "C) İyonosfer",
    desc: "Güneş radyasyonuyla iyonlaşmış gazlardan oluşan İyonosfer tabakası, radyo sinyallerini yeryüzüne geri yansıtarak küresel telekomünikasyonda kilit rol oynar.",
  },
  {
    q: "Osmanlı Devleti donanması tarihte ilk kez hangi deniz savaşında Haçlı donanması tarafından yakılmıştır?",
    options: ["Preveze Deniz Savaşı", "İnebahtı Deniz Savaşı", "Çeşme Baskını", "Navarin Baskını"],
    a: "B) İnebahtı Deniz Savaşı (1571)",
    desc: "1571'de Kıbrıs'ın fethinden hemen sonra gerçekleşen İnebahtı (Lepanto) Muharebesi'nde Haçlı İttifakı donanması Osmanlı donanmasını ilk kez ağır yenilgiye uğratmıştır.",
  },
  {
    q: "Güneş Sistemi'nde eksen eğikliği yaklaşık 98 derece olduğu için yörüngesinde yan yatmış bir varil gibi yuvarlanan gezegen hangisidir?",
    options: ["Neptün", "Uranüs", "Satürn", "Venüs"],
    a: "B) Uranüs",
    desc: "Uranüs'ün dönüş ekseni neredeyse yörünge düzlemine paraleldir. Bu aşırı eğikliğin geçmişte devasa bir gök cismiyle çarpışma sonucu oluştuğu düşünülmektedir.",
  },
  {
    q: "Modern Olimpiyat Oyunları ilk kez hangi yıl ve hangi şehirde düzenlenmiştir?",
    options: ["1896 - Atina", "1900 - Paris", "1904 - St. Louis", "1908 - Londra"],
    a: "A) 1896 - Atina",
    desc: "Baron Pierre de Coubertin öncülüğünde kurulan Uluslararası Olimpiyat Komitesi ilk modern olimpiyatları 1896'da antik oyunların anavatanı Atina'da düzenlemiştir.",
  },
  {
    q: "Türk edebiyatında 'Şair-i Âzam' (En Büyük Şair) unvanıyla tanınan Tanzimat dönemi şair ve yazarı kimdir?",
    options: ["Namık Kemal", "Ziya Paşa", "Abdülhak Hâmit Tarhan", "Recaizade Mahmut Ekrem"],
    a: "C) Abdülhak Hâmit Tarhan",
    desc: "Eşi Fatma Hanım'ın ölümü üzerine yazdığı 'Makber' şiiriyle hafızalara kazınan Abdülhak Hâmit Tarhan, Türk edebiyatında Şair-i Âzam olarak anılır.",
  },
  {
    q: "Dünyanın en derin tatlı su gölü olan ve dünya yüzey tatlı suyunun yaklaşık %20'sini barındıran Baykal Gölü hangi ülkededir?",
    options: ["Kanada", "Rusya (Sibirya)", "Finlandiya", "Moğolistan"],
    a: "B) Rusya (Sibirya)",
    desc: "1.642 metreye varan derinliğiyle dünyanın en derin gölü olan Baykal Gölü, aynı zamanda 25 milyon yıllık yaşıyla dünyanın en eski göllerindendir.",
  },
  {
    q: "Elektromanyetik dalgaların varlığını deneysel olarak kanıtlayan ve frekans birimine adı verilen Alman fizikçi kimdir?",
    options: ["Wilhelm Röntgen", "Max Planck", "Heinrich Hertz", "Georg Ohm"],
    a: "C) Heinrich Hertz",
    desc: "James Clerk Maxwell'in elektromanyetik teorisini 1887'de laboratuvarda ürettiği radyo dalgalarıyla ispatlayan Heinrich Hertz'in adı, saniyedeki titreşim sayısını ifade eden 'Hertz (Hz)' birimine verilmiştir.",
  },
];

export default function GenelKulturBilgiYarismasi() {
  return (
    <SeoLandingPage
      title="Genel Kültür Bilgi Yarışması Oyunu - Kendini Dene | GenelKültür.com.tr"
      description="Online genel kültür bilgi yarışması ile hemen kendini dene. Farklı konulardan binlerce soru ile seviyeni test et, puanını öğren ve yarışmaya başla!"
      path={ROUTES.genelKulturBilgiYarismasi}
      keywords={[
        "genel kültür bilgi yarışması",
        "bilgi yarışması",
        "genel kültür yarışması",
        "bilgi testi çöz",
        "genel kültür soruları",
        "online bilgi yarışması",
      ]}
      eyebrow="Genel Kültür Bilgi Yarışması"
      heading="Bilgini Sına, Seviyeni Gör ve Yarışmaya Katıl"
      intro="Genel kültür bilgi yarışması; tarih, coğrafya, bilim, sanat ve edebiyat gibi pek çok alanda bilgini test etmenin en eğlenceli yoludur. Süreli ve puanlı bu yarışma ile kendi sınırlarını zorlayabilir, genel kültür seviyeni anında ölçebilirsin."
      bullets={[
        "İnteraktif Soru Akışı",
        "Süre Sınırı ve Skor Puanlama",
        "Geniş ve Güncel Soru Havuzu",
      ]}
      sampleQuestions={BILGI_YARISMASI_QUESTIONS}
      ctaLabel="Yarışmayı Başlat"
      ctaHref={`${ROUTES.game}?category=genel`}
      studyTips={[
        {
          title: "Süre Yönetimini Alışkanlık Haline Getirin",
          text: "Bilgi yarışmalarında doğru cevabı bilmek kadar hızlı karar vermek de puan kazandırır. İlk aklınıza gelen güçlü mantık bağlarına güvenin.",
        },
        {
          title: "Eleyici Seçenekleri Dışlayın",
          text: "Dört seçenekli sorularda en az iki şık genellikle bariz biçimde konu dışıdır. Yanlışları eleyerek başarı yüzdenizi %50'ye çıkarın.",
        },
        {
          title: "Farklı Disiplinleri Birbirine Bağlayın",
          text: "Bir coğrafya sorusunun arkasında yatan tarihi veya bir sanat akımının arkasındaki teknolojik buluşu görebilmek yarışmalarda sizi öne geçirir.",
        },
      ]}
    />
  );
}
