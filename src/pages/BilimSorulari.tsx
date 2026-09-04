import SeoLandingPage, { type RichQuestionItem } from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

const BILIM_QUESTIONS: RichQuestionItem[] = [
  {
    q: "Periyodik tabloda 'Fe' sembolü hangi kimyasal elementi gösterir?",
    options: ["Flor", "Fosfor", "Demir", "Fermiyum"],
    a: "C) Demir",
    desc: "'Fe' sembolü Latince demir anlamına gelen 'ferrum' kelimesinden gelir. Demir, yerkabuğunda ve canlılarda hemoglobin molekülünde oksijen taşınmasında hayati role sahiptir.",
  },
  {
    q: "Suyun kimyasal formülü aşağıdakilerden hangisidir?",
    options: ["CO2", "H2O", "NaCl", "CH4"],
    a: "B) H2O",
    desc: "Su molekülü, iki adet hidrojen ve bir adet oksijen atomunun kovalent bağ ile bağlanması sonucu oluşur. Yaşamın temel yapı taşı ve en yaygın çözücüdür.",
  },
  {
    q: "Güneş Sistemi'ndeki en büyük gezegen hangisidir?",
    options: ["Satürn", "Jüpiter", "Neptün", "Dünya"],
    a: "B) Jüpiter",
    desc: "Jüpiter, Güneş Sistemi'nin kütle ve hacim bakımından en devasa gezegenidir. Kütlesi, sistemdeki diğer tüm gezegenlerin toplamının iki buçuk katından fazladır.",
  },
  {
    q: "Gökbilimde kullanılan 'Işık Yılı' terimi neyin ölçü birimidir?",
    options: ["Zaman", "Hız", "Mesafe (Uzaklık)", "Işık Şiddeti"],
    a: "C) Mesafe (Uzaklık)",
    desc: "Işık yılı zaman değil bir uzaklık birimidir; ışığın boşlukta 1 yılda kat ettiği yaklaşık 9.46 trilyon kilometrelik mesafeyi ifade eder.",
  },
  {
    q: "İnsan vücudundaki en büyük organ hangisidir?",
    options: ["Karaciğer", "Beyin", "Akciğer", "Deri"],
    a: "D) Deri",
    desc: "Yüzey alanı yaklaşık 1.5 - 2 metrekareyi ve vücut ağırlığının yaklaşık %15'ini oluşturan deri, insan vücudunun en büyük koruyucu organıdır.",
  },
  {
    q: "DNA'nın çift sarmal (double helix) yapısını 1953 yılında açıklayan bilim insanları kimlerdir?",
    options: ["Watson ve Crick", "Marie Curie ve Pierre Curie", "Alexander Fleming ve Florey", "Darwin ve Wallace"],
    a: "A) Watson ve Crick",
    desc: "James Watson ve Francis Crick, Rosalind Franklin'in X-ışını kırınımı verilerinden de faydalanarak genetik kodun çift sarmal modelini çözmüş ve Nobel Ödülü kazanmışlardır.",
  },
  {
    q: "Deniz seviyesinde ve 1 atmosferlik standart basınç altında saf su kaç derecede kaynar?",
    options: ["90 °C", "95 °C", "100 °C", "110 °C"],
    a: "C) 100 °C",
    desc: "1 atmosfer basınç altında saf suyun kaynama noktası 100 °C'dir. Rakım yükseldikçe açık hava basıncı düştüğü için suyun kaynama sıcaklığı da düşer.",
  },
  {
    q: "Bitkilerin güneş enerjisini kullanarak su ve karbondioksiti besine dönüştürdüğü sürece ne denir?",
    options: ["Solunum", "Fotosentez", "Fermantasyon", "Terleme"],
    a: "B) Fotosentez",
    desc: "Fotosentez, klorofil pigmenti taşıyan canlıların ışık enerjisini kimyasal enerjiye çevirerek glikoz ve oksijen ürettiği hayati biyokimyasal reaksiyondur.",
  },
  {
    q: "Evrensel kütleçekim kanununu ve temel hareket yasalarını sistemleştiren İngiliz bilim insanı kimdir?",
    options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
    a: "C) Isaac Newton",
    desc: "Newton, 1687'de yayımladığı 'Principia' eseriyle klasik mekaniğin temellerini atmış, kütleçekim kanununu matematiksel olarak açıklamıştır.",
  },
  {
    q: "Dünya atmosferinde en yüksek oranda bulunan gaz hangisidir?",
    options: ["Oksijen", "Azot (Nitrojen)", "Karbondioksit", "Argon"],
    a: "B) Azot (Nitrojen)",
    desc: "Soluduğumuz atmosfer havasının hacimce yaklaşık %78'i azot, %21'i oksijen ve %1'i ise argon, karbondioksit gibi diğer gazlardan meydana gelir.",
  },
  {
    q: "İnsanlık tarihinde uzaya fırlatılan ilk yapay uydu hangisidir?",
    options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"],
    a: "B) Sputnik 1",
    desc: "4 Ekim 1957'de Sovyetler Birliği tarafından yörüngeye fırlatılan Sputnik 1, uzay çağını resmen başlatan ilk insan yapımı uydu olmuştur.",
  },
  {
    q: "Elektrik akımının şiddetini ölçen uluslararası standart birim (SI) hangisidir?",
    options: ["Volt", "Watt", "Ohm", "Amper"],
    a: "D) Amper",
    desc: "Elektrik yüklerinin iletkenden akış hızını temsil eden akım şiddetinin birimi Fransız fizikçi André-Marie Ampère'e atfen 'Amper' olarak adlandırılmıştır.",
  },
];

export default function BilimSorulari() {
  return (
    <SeoLandingPage
      title="Bilim Soruları ve Cevapları – Açıklamalı Çöz | GenelKültür"
      description="Fizik, kimya, biyoloji ve uzay bilimlerinden seçilmiş açıklamalı bilim soruları. Test sorularını şıklarıyla çöz, bilimin heyecan verici dünyasını hemen keşfet."
      path={ROUTES.bilimSorulari}
      keywords={[
        "bilim sorulari",
        "bilim soruları ve cevapları",
        "fen bilimleri testi",
        "bilim testi",
        "bilim quiz",
        "uzay ve teknoloji soruları",
      ]}
      eyebrow="Bilim & Doğa Soruları"
      heading="Bilim Soruları: Evrenin ve Maddenin Sırlarını Çöz"
      intro="Bilim soruları; fizik yasalarından insan anatomisine, periyodik tablodan uzayın derinliklerine kadar doğanın işleyiş mantığını kavramamızı sağlar. Aşağıda özenle hazırlanan açıklamalı bilim sorularını inceleyin; ardından yüzlerce soruluk interaktif bilim quizine katılarak kendinizi test edin."
      bullets={["Fizik, Kimya ve Biyoloji", "Uzay ve Evren Kavramları", "Açıklamalı Doğru Cevaplar"]}
      sampleQuestions={BILIM_QUESTIONS}
      ctaLabel="Online Bilim Testine Başla"
      ctaHref={`${ROUTES.game}?category=bilim`}
      studyTips={[
        {
          title: "Birimleri ve Sembolleri Öğrenin",
          text: "Fizik ve kimya sorularında büyüklüklerin birimlerini (Amper, Volt, Joule) ve element sembollerini bilmek soruların yarısını doğrudan çözmenizi sağlar.",
        },
        {
          title: "Temel Doğa Kanunlarını Kavrayın",
          text: "Termodinamik yasaları, kütlenin korunumu ve fotosentez gibi büyük doğa mekanizmalarını ezberlemek yerine döngü mantığıyla zihninizde görselleştirin.",
        },
        {
          title: "Güncel Bilimsel Gelişmeleri Takip Edin",
          text: "Yapay zeka, uzay teleskopları ve genetik mühendisliği gibi alanlardaki keşifler genel kültür testlerinin en popüler soru kaynaklarıdır.",
        },
      ]}
    />
  );
}
