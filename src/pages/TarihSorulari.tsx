import SeoLandingPage, { type RichQuestionItem } from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

const TARIH_QUESTIONS: RichQuestionItem[] = [
  {
    q: "İstanbul hangi yıl fethedilmiştir?",
    options: ["1453", "1492", "1402", "1517"],
    a: "A) 1453",
    desc: "29 Mayıs 1453'te Fatih Sultan Mehmet komutasındaki Osmanlı ordusu İstanbul'u fethederek Doğu Roma (Bizans) İmparatorluğu'na son vermiştir. Bu olay dünya tarihinde Orta Çağ'ın kapanıp Yeni Çağ'ın açılışı kabul edilir.",
  },
  {
    q: "Türkiye Cumhuriyeti hangi tarihte resmen ilan edilmiştir?",
    options: ["19 Mayıs 1919", "23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922"],
    a: "C) 29 Ekim 1923",
    desc: "TBMM'de Teşkilat-ı Esasiye Kanunu'nda yapılan değişiklikle devletin yönetim şekli cumhuriyet olarak ilan edilmiş ve Gazi Mustafa Kemal Atatürk ilk Cumhurbaşkanı seçilmiştir.",
  },
  {
    q: "Malazgirt Meydan Muharebesi hangi yılda gerçekleşmiştir?",
    options: ["1040", "1071", "1176", "1243"],
    a: "B) 1071",
    desc: "Büyük Selçuklu Hükümdarı Sultan Alparslan komutasındaki ordu, Bizans İmparatoru Romen Diyojen'i mağlup ederek Anadolu'nun kapılarını Türklere kesin olarak açmıştır.",
  },
  {
    q: "İlk Türk devletlerinde hükümdara yönetme yetkisinin Tanrı tarafından verildiği inancına ne ad verilir?",
    options: ["Kurultay", "Kut İnancı", "Töre", "Balbal"],
    a: "B) Kut İnancı",
    desc: "Kut inancına göre hükümdara devleti yönetme yetkisi Gök Tanrı tarafından bağışlanır ve bu yetki kan yoluyla tüm hanedan üyelerine geçer.",
  },
  {
    q: "Türkiye'nin bağımsızlığını ve sınırlarını uluslararası düzeyde resmen tanıtan antlaşma hangisidir?",
    options: ["Sevr Antlaşması", "Mondros Ateşkesi", "Lozan Barış Antlaşması", "Mudanya Ateşkesi"],
    a: "C) Lozan Barış Antlaşması",
    desc: "24 Temmuz 1923'te İsviçre'nin Lozan kentinde imzalanan antlaşma ile Sevr Antlaşması tarihe gömülmüş ve Türkiye Cumhuriyeti'nin tam bağımsızlığı tescil edilmiştir.",
  },
  {
    q: "Osmanlı Devleti'nin kurucusu kabul edilen ilk hükümdar kimdir?",
    options: ["Osman Gazi", "Orhan Gazi", "Ertuğrul Gazi", "I. Murad"],
    a: "A) Osman Gazi",
    desc: "Osman Gazi (Osman Bey), 1299 yılında Söğüt ve Domaniç merkezli beyliğin temellerini atarak altı asır sürecek imparatorluğun kurucusu olmuştur.",
  },
  {
    q: "Sanayi Devrimi ilk olarak 18. yüzyılda hangi ülkede başlamıştır?",
    options: ["Fransa", "Almanya", "İngiltere", "Amerika Birleşik Devletleri"],
    a: "C) İngiltere",
    desc: "Kömür ve demir zenginliği, buhar makinesinin tekstil üretimine entegre edilmesiyle İngiltere'de Sanayi İnkılabı patlak vermiş ve tüm dünyaya yayılmıştır.",
  },
  {
    q: "Türkiye Büyük Millet Meclisi (TBMM) hangi şehirde ve ne zaman açılmıştır?",
    options: ["İstanbul - 16 Mart 1920", "Ankara - 23 Nisan 1920", "Sivas - 4 Eylül 1919", "Erzurum - 23 Temmuz 1919"],
    a: "B) Ankara - 23 Nisan 1920",
    desc: "Mustafa Kemal öncülüğünde milletin iradesini temsil eden meclis Ankara'da açılmış ve Milli Mücadele tek merkezden yönetilmeye başlanmıştır.",
  },
  {
    q: "Türk tarihinin ve dilinin ilk yazılı belgeleri sayılan Orhun Abideleri günümüzde hangi ülkededir?",
    options: ["Kazakistan", "Özbekistan", "Moğolistan", "Kırgızistan"],
    a: "C) Moğolistan",
    desc: "Bilge Kağan, Kül Tigin ve Tonyukuk adına 8. yüzyılda dikilen Göktürk Yazıtları, Moğolistan'daki Orhun Vadisi sınırları içerisinde yer almaktadır.",
  },
  {
    q: "Mustafa Kemal Atatürk'e 'Mareşal' rütbesi ve 'Gazi' unvanı hangi savaştan sonra verilmiştir?",
    options: ["I. İnönü Savaşı", "II. İnönü Savaşı", "Sakarya Meydan Muharebesi", "Büyük Taarruz"],
    a: "C) Sakarya Meydan Muharebesi",
    desc: "1921 yılında 22 gün 22 gece süren Sakarya Meydan Muharebesi zaferinin ardından TBMM tarafından Atatürk'e Gazilik unvanı ve Mareşallik rütbesi tevcih edilmiştir.",
  },
  {
    q: "Dünya genelinde milliyetçilik ve eşitlik fikirlerini yayan Fransız İhtilali hangi yıl gerçekleşmiştir?",
    options: ["1789", "1830", "1848", "1776"],
    a: "A) 1789",
    desc: "1789 Fransız İhtilali, feodalizmi yıkarak cumhuriyet, insan hakları ve milliyetçilik kavramlarını yaymış; çok uluslu imparatorlukların dağılmasında başrol oynamıştır.",
  },
  {
    q: "Osmanlı Devleti'nde ilk Türk matbaası hangi padişah döneminde ve kim tarafından kurulmuştur?",
    options: ["Fatih Sultan Mehmet - Ali Kuşçu", "III. Ahmed - İbrahim Müteferrika", "II. Mahmud - Takvim-i Vekayi", "Kanuni Sultan Süleyman - Piri Reis"],
    a: "B) III. Ahmed - İbrahim Müteferrika",
    desc: "Lale Devri'nde (1727) İbrahim Müteferrika ve Said Efendi'nin girişimleriyle ilk Osmanlı Türk matbaası kurulmuş ve ilk olarak Vankulu Lügati basılmıştır.",
  },
];

export default function TarihSorulari() {
  return (
    <SeoLandingPage
      title="Tarih Soruları ve Cevapları – Açıklamalı Soru Çöz | GenelKültür"
      description="Türk ve dünya tarihinden seçilmiş açıklamalı tarih soruları. Osmanlı, Kurtuluş Savaşı, İslamiyet öncesi Türk tarihi sorularını şıklarıyla incele, hemen online tarih testine başla."
      path={ROUTES.tarihSorulari}
      keywords={[
        "tarih sorulari",
        "tarih soruları ve cevapları",
        "tarih testi",
        "tarih quiz",
        "kpss tarih soruları",
        "tarih bilgi yarışması",
      ]}
      eyebrow="Tarih Soruları & Bilgi Hazinesi"
      heading="Tarih Soruları: Geçmişin Dönüm Noktalarını Keşfet"
      intro="Tarih soruları; imparatorlukların yükselişini, savaşların stratejik sebeplerini ve dünya tarihini değiştiren antlaşmaları kavramanın en etkili yoludur. Aşağıdaki seçme tarih sorularını şıkları ve açıklamalı cevaplarıyla inceleyin; ardından yüzlerce soruluk online tarih testine başlayarak bilginizi ölçün."
      bullets={["Kronolojik Olay Dağılımı", "Açıklamalı Doğru Cevaplar", "KPSS ve Genel Kültür Uyumlu"]}
      sampleQuestions={TARIH_QUESTIONS}
      ctaLabel="Online Tarih Testine Başla"
      ctaHref={`${ROUTES.game}?category=tarih`}
      studyTips={[
        {
          title: "Sebep-Sonuç İlişkisi Kurun",
          text: "Tarihî olayları tekil tarihler olarak ezberlemek yerine birbirini tetikleyen zincirler halinde düşünün. Örneğin Fransız İhtilali'nin Osmanlı'ya milliyetçilik isyanları olarak yansıması gibi.",
        },
        {
          title: "Kronoloji Haritası Çıkarın",
          text: "Olayların sıralamasını bilmek, sınav sorularında öncüllü soruları çözmenizi son derece kolaylaştırır. Dönem dönem dönüm noktası savaşları listeleyin.",
        },
        {
          title: "Kavramları ve Antlaşmaları Eşleştirin",
          text: "Kut inancı, lale devri, kapitülasyon gibi kavramların tam anlamlarını bilmek tarih testlerindeki net sayınızı hızla artırır.",
        },
      ]}
    />
  );
}
