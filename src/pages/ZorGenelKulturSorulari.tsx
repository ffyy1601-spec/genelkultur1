import SeoLandingPage, { type RichQuestionItem } from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

const ZOR_GENEL_KULTUR_QUESTIONS: RichQuestionItem[] = [
  {
    q: "UNESCO ve Guinness Dünya Rekorları'na göre dünyanın kesintisiz eğitim veren en eski üniversitesi kabul edilen Karaviyyin Üniversitesi (Al-Qarawiyyin) hangi ülkededir?",
    options: ["Mısır", "Fas", "İtalya", "Yunanistan"],
    a: "B) Fas",
    desc: "859 yılında Fatıma el-Fihri adında bir kadın tarafından Fas'ın Fez kentinde kurulan Karaviyyin Üniversitesi, Bologna ve Oxford'dan çok daha önce yükseköğrenim merkezi olarak faaliyete başlamıştır.",
  },
  {
    q: "İtalyan Rönesansı'nda Floransa'yı yöneten; Michelangelo, Da Vinci ve Botticelli gibi sanatçıları himaye eden zengin bankacı aile hangisidir?",
    options: ["Borgia Ailesi", "Medici Ailesi", "Sforza Ailesi", "Habsburg Hanedanı"],
    a: "B) Medici Ailesi",
    desc: "Medici hanedanı, 15. ve 16. yüzyıllarda Floransa'nın ekonomik ve siyasi gücünü elinde tutarak sanata, mimariye ve hümanist düşünceye devasa fonlar sağlamış, Rönesans'ın finansörü olmuştur.",
  },
  {
    q: "Işığın boşluktaki (vakum) hızı tam olarak saniyede yaklaşık kaç kilometredir?",
    options: ["150.000 km/s", "299.792 km/s", "384.400 km/s", "500.000 km/s"],
    a: "B) 299.792 km/s",
    desc: "Işık hızı fizik biliminde 'c' sabitiyle gösterilir ve boşlukta tam olarak 299.792.458 m/s (yaklaşık 300.000 km/s) hızla hareket eder. Evrendeki mutlak hız limitidir.",
  },
  {
    q: "Dünyanın en yüksek kesintisiz serbest düşen şelalesi olan Angel Şelalesi (979 metre) hangi ülkededir?",
    options: ["Brezilya", "Venezuela", "Arjantin", "Kolombiya"],
    a: "B) Venezuela",
    desc: "Venezuela'daki Canaima Ulusal Parkı'nda bulunan Angel Şelalesi, 979 metre toplam yüksekliği ve 807 metrelik kesintisiz su düşüşüyle dünyanın en yüksek şelalesidir.",
  },
  {
    q: "Elementleri atom ağırlıklarına ve kimyasal benzerliklerine göre ilk kez periyodik tabloda sıralayan Rus kimyager kimdir?",
    options: ["Dmitri Mendeleev", "Antoine Lavoisier", "John Dalton", "Ernest Rutherford"],
    a: "A) Dmitri Mendeleev",
    desc: "1869 yılında periyodik cetveli oluşturan Mendeleev, o dönem henüz keşfedilmemiş olan galyum, germanyum ve skandiyum gibi elementlerin varlığını ve özelliklerini önceden tahmin etmiştir.",
  },
  {
    q: "Osmanlı Devleti tarihinde ilk altın para (Sultani / Sikke-i Hasene) hangi padişah döneminde bastırılmıştır?",
    options: ["Orhan Gazi", "I. Murad", "Fatih Sultan Mehmet", "Kanuni Sultan Süleyman"],
    a: "C) Fatih Sultan Mehmet",
    desc: "Osmanlı'da ilk gümüş para (akçe) Orhan Gazi döneminde basılırken, devletin ekonomik gücünün ve dünya ticaretindeki rolünün bir göstergesi olan ilk altın para 1477'de Fatih döneminde tedavüle çıkmıştır.",
  },
  {
    q: "'Düşünüyorum, öyleyse varım' (Cogito, ergo sum) felsefi önermesiyle bilinen modern felsefenin kurucusu Fransız düşünür kimdir?",
    options: ["Jean-Jacques Rousseau", "René Descartes", "Voltaire", "Baruch Spinoza"],
    a: "B) René Descartes",
    desc: "Kartezyen şüphecilik yöntemini geliştiren Descartes, her şeyden şüphe etse bile şüphe eden bir 'ben'in var olması gerektiği sonucuna ulaşarak bu ünlü ilkeyi ortaya koymuştur.",
  },
  {
    q: "Ökaryotik hücrelerde besin maddelerini oksijen yardımıyla parçalayarak ATP (hücresel enerji) üreten organel hangisidir?",
    options: ["Ribozom", "Mitokondri", "Golgi Aygıtı", "Endoplazmik Retikulum"],
    a: "B) Mitokondri",
    desc: "Mitokondri, çift zara sahip ve kendine ait DNA'sı bulunan bir organeldir; hücrenin 'enerji santrali' olarak görev yapar.",
  },
  {
    q: "Türk tarihinde anayasal sisteme ve meclisli yönetime ilk geçiş kabul edilen Kanun-i Esasi hangi padişah döneminde ilan edilmiştir?",
    options: ["Abdülmecid", "Abdülaziz", "II. Abdülhamid", "V. Murad"],
    a: "C) II. Abdülhamid",
    desc: "Mithat Paşa ve Genç Osmanlılar'ın çabalarıyla hazırlanan ilk Türk anayasası Kanun-i Esasi, 23 Aralık 1876'da II. Abdülhamid tarafından ilan edilmiş ve I. Meşrutiyet dönemi başlamıştır.",
  },
  {
    q: "'Kendi Gök Kubbemiz' ve 'Sessiz Gemi' şiirleriyle tanınan Türk şiirinin neoklasik ustası kimdir?",
    options: ["Ahmet Haşim", "Yahya Kemal Beyatlı", "Cahit Sıtkı Tarancı", "Faruk Nafiz Çamlıbel"],
    a: "B) Yahya Kemal Beyatlı",
    desc: "İstanbul'un tarihi ve kültürel güzelliklerini, aruz veznini Türkçeye kusursuz uygulayarak işleyen Yahya Kemal Beyatlı, Türk edebiyatının en seçkin şairlerindendir.",
  },
  {
    q: "Modern bilgisayar biliminin babası sayılan ve II. Dünya Savaşı'nda Alman Enigma şifresini kıran İngiliz dahi kimdir?",
    options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
    a: "B) Alan Turing",
    desc: "Alan Turing, Bletchley Park'ta Enigma şifrelerini çözen 'Bombe' makinesini geliştirmiş, yapay zekanın temelini oluşturan Turing Testi kavramını bilim dünyasına kazandırmıştır.",
  },
  {
    q: "Güneş Sistemi'ndeki en yüksek dağ olan ve Mars gezegeninde yer alan sönmüş volkan hangisidir?",
    options: ["Olympus Mons", "Mauna Kea", "Tharsis Montes", "Elysium Mons"],
    a: "A) Olympus Mons",
    desc: "Olympus Mons yaklaşık 22 kilometrelik yüksekliğiyle Everest Dağı'nın neredeyse üç katı yüksekliğindedir ve Güneş Sistemi'nde bilinen en devasa yanardağdır.",
  },
];

export default function ZorGenelKulturSorulari() {
  return (
    <SeoLandingPage
      title="Zor Genel Kültür Soruları ve Cevapları – İleri Seviye Test | GenelKültür"
      description="İleri seviye genel kültür soruları ve açıklamalı cevapları. Bilgi yarışmalarında fark yaratan seçici sorular, tarih, bilim, sanat ve felsefe detaylarıyla kendinizi sınayın."
      path={ROUTES.zorGenelKulturSorulari}
      keywords={[
        "zor genel kultur sorulari",
        "zor bilgi yarışması soruları",
        "ileri seviye genel kültür testi",
        "zor quiz soruları",
        "genel kültür soru bankası",
      ]}
      eyebrow="İleri Seviye Quiz & Bilgi Meydan Okuması"
      heading="Zor Genel Kültür Soruları: Sınırlarını Zorla"
      intro="Zor genel kültür soruları, yüzeysel bilgilerin ötesine geçerek detay hafızanızı, kavramsal kavrayışınızı ve analitik bağ kurma yeteneğinizi ölçer. Aşağıdaki seçici soruları şıkları ve açıklamalı çözümleriyle inceleyin; ardından süreli maraton turlarına katılarak gerçek seviyenizi görün."
      bullets={["İleri Seviye Seçici Sorular", "Açıklamalı Doğru Cevaplar", "Yarışmalara ve Sınavlara Hazırlık"]}
      sampleQuestions={ZOR_GENEL_KULTUR_QUESTIONS}
      ctaLabel="Zor Genel Kültür Testine Başla"
      ctaHref={`${ROUTES.game}?category=genel`}
      studyTips={[
        {
          title: "Detayları İlişkilendirerek Öğrenin",
          text: "Zor sorularda genelde iki bilgi arasındaki bağlantı sorulur (örneğin bir bilim insanının ödülü hangi keşifle aldığı). Bilgiyi tek başına değil kontekstiyle öğrenin.",
        },
        {
          title: "Eser ve Müze Konumlarını Bilin",
          text: "Sanat ve tarih sorularında eserin sadece kimin olduğunu değil, şu an hangi müzede veya ülkede sergilendiğini bilmek fark yaratır.",
        },
        {
          title: "Nobel ve Tarihsel Ödülleri Tarayın",
          text: "Nobel, Pulitzer, Turing ödülleri ve dünya rekorları seçici yarışma sorularının en zengin madenleridir.",
        },
      ]}
    />
  );
}
