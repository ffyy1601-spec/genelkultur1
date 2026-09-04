import SeoLandingPage, { type RichQuestionItem } from "./SeoLandingPage";
import { ROUTES } from "../lib/routes";

const SANAT_QUESTIONS: RichQuestionItem[] = [
  {
    q: "Paris'teki Louvre Müzesi'nde sergilenen dünyaca ünlü 'Mona Lisa' tablosunun ressamı kimdir?",
    options: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Sandro Botticelli"],
    a: "A) Leonardo da Vinci",
    desc: "İtalyan Rönesans dehâsı Leonardo da Vinci tarafından 16. yüzyılın başında yapılan Mona Lisa, 'sfumato' tekniği ve gizemli gülümsemesiyle dünya sanat tarihinin en bilinen başyapıtıdır.",
  },
  {
    q: "Dünya klasiklerinden 'Suç ve Ceza' adlı psikolojik romanın Rus yazarı kimdir?",
    options: ["Lev Tolstoy", "Anton Çehov", "Fyodor Dostoyevski", "Maksim Gorki"],
    a: "C) Fyodor Dostoyevski",
    desc: "Dostoyevski'nin 1866 yılında yayımlanan bu ölümsüz eseri, üniversite öğrencisi Raskolnikov'un işlediği cinayet ve sonrasında yaşadığı derin vicdani çatışmaları irdeler.",
  },
  {
    q: "İspanya İç Savaşı'nın acılarını yansıtan 'Guernica' tablosu hangi ünlü ressama aittir?",
    options: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Paul Cézanne"],
    a: "B) Pablo Picasso",
    desc: "Kübizm akımının öncüsü İspanyol ressam Pablo Picasso, 1937'de Guernica kasabasının bombalanmasını anıtsal siyah-beyaz bir tuval üzerine aktararak savaş karşıtı en büyük sanat eserini üretmiştir.",
  },
  {
    q: "Dört Mevsim (Le quattro stagioni) adlı ünlü keman konçertoları dizisi hangi İtalyan besteciye aittir?",
    options: ["Antonio Vivaldi", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Giacomo Puccini"],
    a: "A) Antonio Vivaldi",
    desc: "Barok dönem bestecisi Antonio Vivaldi tarafından 1723 civarında bestelenen Dört Mevsim, doğanın mevsimsel döngüsünü müzikle betimleyen programlı müziğin en erken örneklerindendir.",
  },
  {
    q: "'Hamlet', 'Macbeth' ve 'Romeo ve Juliet' tiyatro eserlerinin yazarı İngiliz edebiyatçı kimdir?",
    options: ["Charles Dickens", "William Shakespeare", "George Orwell", "Jane Austen"],
    a: "B) William Shakespeare",
    desc: "İngiliz dilinin en büyük yazarı ve dünyanın seçkin drama yazarı kabul edilen Shakespeare, insan doğasının tutkularını, hırslarını ve trajedilerini ölümsüz karakterlerle sahneye taşımıştır.",
  },
  {
    q: "2006 yılında Nobel Edebiyat Ödülü'nü kazanan ilk Türk vatandaşı ve yazar kimdir?",
    options: ["Yaşar Kemal", "Orhan Pamuk", "Aziz Nesin", "Ahmet Hamdi Tanpınar"],
    a: "B) Orhan Pamuk",
    desc: "Orhan Pamuk, 'Doğu ile Batı arasındaki çatışmayı ve kültürlerin iç içe geçmişliğini anlatan yeni simgeler bulduğu' gerekçesiyle 2006 Nobel Edebiyat Ödülü'ne layık görülmüştür.",
  },
  {
    q: "'Yıldızlı Gece' (The Starry Night) tablosu hangi Hollandalı post-empresyonist ressama aittir?",
    options: ["Rembrandt", "Johannes Vermeer", "Vincent van Gogh", "Piet Mondrian"],
    a: "C) Vincent van Gogh",
    desc: "Van Gogh tarafından 1889 yılında Saint-Rémy'deki sanatoryum odasının penceresinden görünen manzaradan esinlenerek yapılan eser, kıvrımlı fırça darbeleri ve parlak sarı yıldızlarıyla tanınır.",
  },
  {
    q: "Çukurova insanının yaşam mücadelesini ve eşkıyalık temasını işleyen 'İnce Memed' roman serisinin yazarı kimdir?",
    options: ["Yaşar Kemal", "Kemal Tahir", "Orhan Kemal", "Sabahattin Ali"],
    a: "A) Yaşar Kemal",
    desc: "Türk edebiyatının usta kalemi Yaşar Kemal'in ilk baskısı 1955'te yapılan 4 ciltlik İnce Memed serisi, onlarca dile çevrilerek dünya çapında takdir toplamıştır.",
  },
  {
    q: "Mimar Sinan'ın 'çıraklık, kalfalık ve ustalık' eserleri sıralamasında 'ustalık eserim' dediği yapı hangisidir?",
    options: ["Şehzade Camii", "Süleymaniye Camii", "Selimiye Camii", "Mihrimah Sultan Camii"],
    a: "C) Selimiye Camii",
    desc: "Mimar Sinan Şehzade Camii'ni çıraklık, Süleymaniye Camii'ni kalfalık ve Edirne'de inşa ettiği Selimiye Camii'ni ise mimarlık zirvesi olan ustalık eseri olarak nitelendirmiştir.",
  },
  {
    q: "Felsefi düşünceyi insan bedeni üzerinden somutlaştıran ünlü 'Düşünen Adam' heykeli kime aittir?",
    options: ["Auguste Rodin", "Michelangelo", "Donatello", "Gian Lorenzo Bernini"],
    a: "A) Auguste Rodin",
    desc: "Fransız heykeltıraş Auguste Rodin'in bronz döküm başyapıtı 'Düşünen Adam', aslen Dante'nin İlahi Komedya'sından esinlenilen Cehennem Kapısı kompozisyonunun bir parçası olarak tasarlanmıştır.",
  },
  {
    q: "'Sefiller' (Les Misérables) ve 'Notre Dame'ın Kamburu' romanlarının Fransız yazarı kimdir?",
    options: ["Émile Zola", "Gustave Flaubert", "Victor Hugo", "Honoré de Balzac"],
    a: "C) Victor Hugo",
    desc: "Romantizm akımının en büyük temsilcilerinden Victor Hugo, adaletsizlik ve yoksulluk karşısında insan onurunu Jean Valjean karakteri üzerinden Sefiller romanında işlemiştir.",
  },
  {
    q: "İşitme duyusunu büyük ölçüde kaybettikten sonra dünyaca ünlü 9. Senfoni'yi besteleyen Alman besteci kimdir?",
    options: ["Johann Sebastian Bach", "Ludwig van Beethoven", "Johannes Brahms", "Franz Schubert"],
    a: "B) Ludwig van Beethoven",
    desc: "Klasik ve Romantik dönemler arasındaki geçişi simgeleyen Beethoven, ilerleyen yaşlarında tamamen sağır olmasına rağmen içsel duyumuyla insanlık marşı sayılan 9. Senfoni'yi bestelemiştir.",
  },
];

export default function SanatSorulari() {
  return (
    <SeoLandingPage
      title="Sanat Soruları ve Cevapları – Resim, Müzik, Edebiyat | GenelKültür"
      description="Resim, edebiyat, heykel, sinema ve klasik müzikten seçilmiş açıklamalı sanat soruları. Eser-sanatçı eşleştirmelerini test et, online sanat testini hemen çöz."
      path={ROUTES.sanatSorulari}
      keywords={[
        "sanat sorulari",
        "sanat soruları ve cevapları",
        "edebiyat testi",
        "resim sanatı quiz",
        "müzik soruları",
        "kültür sanat bilgi yarışması",
      ]}
      eyebrow="Sanat & Edebiyat Soruları"
      heading="Sanat Soruları: Kültür ve Estetik Birikimini Keşfet"
      intro="Sanat soruları; resimden mimariye, klasik müzikten dünya edebiyatının başyapıtlarına kadar insanlığın estetik mirasını ne kadar tanıdığınızı ölçer. Aşağıdaki seçme sanat ve edebiyat sorularını şıkları ve açıklamalarıyla inceleyin; ardından online sanat testine katılarak seviyenizi görün."
      bullets={["Resim, Heykel ve Mimari", "Klasik Müzik ve Opera", "Türk ve Dünya Edebiyatı"]}
      sampleQuestions={SANAT_QUESTIONS}
      ctaLabel="Online Sanat Testine Başla"
      ctaHref={`${ROUTES.game}?category=sanat`}
      studyTips={[
        {
          title: "Eser-Sanatçı-Dönem Eşleşmesi Kurun",
          text: "Sanat sorularında bir eseri sadece ismiyle değil, hangi akıma (Rönesans, Barok, Romantizm, Kübizm) ait olduğunu bilerek öğrenmek akılda kalıcılığı büyük oranda artırır.",
        },
        {
          title: "Önemli Türk Edebiyatı Eserlerini Tarayın",
          text: "Milli Edebiyat, Tanzimat ve Cumhuriyet Dönemi Türk romancılarının başyapıtları ve kahramanları sınavların en popüler soru kalıpları arasındadır.",
        },
        {
          title: "Görsel Hafızanızı Canlı Tutun",
          text: "Dünyaca ünlü tabloları ve mimari eserleri incelerken görsel detaylarına dikkat etmek hafızanızda kalıcı çağrışımlar yaratır.",
        },
      ]}
    />
  );
}
