import TimedTestLanding from "./TimedTestLanding";
import { ROUTES } from "../lib/routes";

export default function Test50() {
  return (
    <TimedTestLanding
      count={50}
      path={ROUTES.test50}
      title="50 Soruluk Genel Kültür Testi (2026) - Çöz ve Puanını Gör | GenelKultur.com.tr"
      description="50 soruluk genel kültür testi ile bilgini kapsamlı şekilde ölç. Tarih, coğrafya, bilim, sanat ve güncel bilgilerden seçilmiş 50 soru, anında puan ve açıklamalı cevaplar."
      keywords={[
        "50 soruluk genel kultur testi",
        "50 soruluk genel kultur testi 2026",
        "genel kultur testi 50 soru",
        "uzun genel kultur testi",
      ]}
      eyebrow="50 Soruluk Test"
      heading="50 Soruluk Genel Kültür Testi"
      intro="Kısa testler ısınma turudur; gerçek seviyeni görmek istiyorsan daha geniş bir teste ihtiyacın var. Bu 50 soruluk genel kültür testi; tarih, coğrafya, bilim, sanat ve temel dünya bilgisini tek oturumda, dengeli biçimde ölçer. Üyelik gerekmez, sorular her seferinde karışık gelir ve sonunda doğru-yanlış dağılımını anında görürsün."
      highlights={[
        { title: "Dengeli Konu Dağılımı", text: "50 soru; tek bir alana yığılmadan tarihten bilime, coğrafyadan sanata kadar geniş bir yelpazeden seçilir." },
        { title: "Her Seferinde Farklı", text: "Sorular geniş bir havuzdan rastgele çekilir; testi tekrar çözdüğünde yeni sorularla karşılaşırsın." },
        { title: "Anında Sonuç", text: "Test bitince doğru sayını, başarı oranını ve yanlış yaptığın soruların doğru cevaplarını görürsün." },
      ]}
      paragraphs={[
        {
          h: "Neden 50 soruluk bir test?",
          p: "10-15 soruluk testler hızlı bir fikir verir ama şans faktörünü tam eleyemez. 50 soru, bilginin geniş bir alana yayılmasını sağladığı için gerçek genel kültür seviyeni çok daha güvenilir biçimde ortaya koyar. Güçlü ve zayıf olduğun konuları görmek, hangi alanlara çalışman gerektiğini netleştirir. Bu yönüyle 50 soruluk test, hem eğlenceli bir meydan okuma hem de küçük bir öz-değerlendirme aracıdır.",
        },
        {
          h: "Test nasıl çözülür?",
          p: "Başlat'a bastığında sorular tek tek karşına gelir; her soruda şıklardan birini işaretlersin ve doğru cevabı anında görürsün. Süre ve puanlama sistemi seni gerçek bir yarışma temposunda tutar. Takıldığın sorularda joker haklarını kullanabilir, test sonunda yanlışlarını açıklamalarıyla birlikte gözden geçirerek yeni şeyler öğrenebilirsin.",
        },
        {
          h: "Kimler için uygun?",
          p: "KPSS ve benzeri sınavlara hazırlananlar, bilgi yarışmalarına ilgi duyanlar veya sadece kendini sınamak isteyen herkes için uygundur. Soru zorlukları kolaydan ortaya doğru dengelenmiştir; hem yeni başlayanlar hem de iddialı kullanıcılar keyif alır.",
        },
      ]}
      sampleQuestions={[
        { q: "Türkiye'nin yüzölçümü bakımından en büyük gölü hangisidir?", a: "Van Gölü" },
        { q: "Periyodik tabloda 'O' sembolü hangi elementi gösterir?", a: "Oksijen" },
        { q: "İstiklal Marşı'nın şairi kimdir?", a: "Mehmet Akif Ersoy" },
        { q: "Dünyanın en büyük okyanusu hangisidir?", a: "Pasifik Okyanusu" },
      ]}
      faqs={[
        { question: "50 soruluk genel kültür testi ücretsiz mi?", answer: "Evet, tamamen ücretsizdir ve üyelik gerektirmez. Başlat'a basman yeterlidir." },
        { question: "Test ne kadar sürer?", answer: "Ortalama 12-18 dakika sürer; her soru için kısa bir süre tanınır, dilediğin hızda ilerleyebilirsin." },
        { question: "Sorular hep aynı mı geliyor?", answer: "Hayır. Sorular geniş bir havuzdan rastgele seçildiği için testi her çözüşünde farklı sorularla karşılaşırsın." },
        { question: "Cevapların açıklaması var mı?", answer: "Evet, çoğu soruda doğru cevabın yanında kısa bir açıklama yer alır; test sonunda yanlışlarını gözden geçirebilirsin." },
      ]}
      relatedLinks={[
        { label: "100 Soruluk Genel Kültür Testi", to: ROUTES.test100 },
        { label: "Genel Kültür Soruları", to: ROUTES.genelKulturSorulari },
        { label: "Genel Kültür Bilgi Yarışması", to: ROUTES.genelKulturBilgiYarismasi },
        { label: "Zor Genel Kültür Soruları", to: ROUTES.zorGenelKulturSorulari },
        { label: "Genel Kültür Bilgileri", to: ROUTES.genelKulturBilgileri },
        { label: "Tüm Kategoriler", to: ROUTES.categories },
      ]}
    />
  );
}
