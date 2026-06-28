import TimedTestLanding from "./TimedTestLanding";
import { ROUTES } from "../lib/routes";

export default function Test100() {
  return (
    <TimedTestLanding
      count={100}
      path={ROUTES.test100}
      title="100 Soruluk Genel Kültür Testi (2026) - Maraton Test Çöz | GenelKultur.com.tr"
      description="100 soruluk genel kültür testi ile gerçek bir maraton dene. Tarih, coğrafya, bilim ve sanattan 100 zorlu soru; üyeliksiz, ücretsiz, anında puan ve açıklamalı cevaplarla."
      keywords={[
        "100 soruluk genel kultur testi",
        "100 soruluk genel kultur testi 2026",
        "genel kultur testi 100 soru",
        "maraton genel kultur testi",
      ]}
      eyebrow="100 Soruluk Maraton Test"
      heading="100 Soruluk Genel Kültür Testi"
      intro="Bu 100 soruluk genel kültür testi, gerçek bir dayanıklılık ve bilgi maratonudur. Tarihten coğrafyaya, bilimden sanata kadar geniş bir alandan seçilen 100 soruyu tek oturumda çözerek genel kültür seviyeni en kapsamlı şekilde ölçebilirsin. Üyelik gerekmez, sorular karışık gelir ve sonunda detaylı bir performans özeti seni bekler."
      highlights={[
        { title: "Gerçek Maraton", text: "100 soru, şans faktörünü neredeyse tamamen eler; bu test gerçek bilgi seviyeni en net gösteren formattır." },
        { title: "Geniş Konu Yelpazesi", text: "Sorular tüm temel genel kültür alanlarına yayılır; hiçbir konu fazla ağırlık kazanmaz." },
        { title: "Detaylı Performans", text: "Test sonunda doğru-yanlış dağılımını ve yanlışlarının doğru cevaplarını görerek eksiklerini fark edersin." },
      ]}
      paragraphs={[
        {
          h: "100 soru neyi ölçer?",
          p: "Kısa testler bir anlık formu gösterir; 100 soruluk bir test ise bilginin derinliğini ve genişliğini birlikte ölçer. Bu uzunlukta bir testte yüksek puan almak, yalnızca birkaç konuyu değil, genel kültürün geneline hâkim olmayı gerektirir. Bu yüzden 100 soruluk test, kendini ciddi biçimde sınamak isteyenler için en doğru tercihtir.",
        },
        {
          h: "Maraton testi nasıl bitirilir?",
          p: "Uzun bir testte odak kadar tempo da önemlidir. Bildiğin soruları hızlı geçip emin olmadıklarında joker haklarını kullanmak iyi bir stratejidir. Acele edip dikkatsiz hata yapmaktan kaçın; her doğru cevap puanını yükseltir. Test sonunda yanlışlarını açıklamalarıyla incelemek, bir sonraki denemede skorunu yükseltmenin en hızlı yoludur.",
        },
        {
          h: "Kimler bu testi sevecek?",
          p: "Kendini gerçekten zorlamak isteyenler, sınav hazırlığında geniş tekrar arayanlar ve uzun bilgi yarışması formatından keyif alanlar için idealdir. 50 soruluk testte rahatladıysan, bir sonraki seviye burasıdır.",
        },
      ]}
      sampleQuestions={[
        { q: "Osmanlı Devleti'nin kurucusu kimdir?", a: "Osman Gazi" },
        { q: "İnsan vücudundaki en büyük organ hangisidir?", a: "Deri" },
        { q: "Guernica adlı eser hangi ressama aittir?", a: "Pablo Picasso" },
        { q: "Birleşmiş Milletler hangi yıl kuruldu?", a: "1945" },
      ]}
      faqs={[
        { question: "100 soruluk test çok mu zor?", answer: "Soru zorlukları kolaydan ortaya doğru dengelenmiştir; uzunluğu onu zorlu kılan asıl faktördür. Sabırla ilerleyen herkes bitirebilir." },
        { question: "Test ne kadar sürer?", answer: "Ortalama 25-35 dakika sürer. Dilersen ara vermeden tek oturumda bir maraton olarak çözebilirsin." },
        { question: "Daha kısa bir test var mı?", answer: "Evet, daha hızlı bir deneyim için 50 soruluk genel kültür testini tercih edebilirsin." },
        { question: "Üyelik gerekiyor mu?", answer: "Hayır. Test tamamen ücretsizdir ve hiçbir kayıt gerektirmez." },
      ]}
      relatedLinks={[
        { label: "50 Soruluk Genel Kültür Testi", to: ROUTES.test50 },
        { label: "Genel Kültür Soruları", to: ROUTES.genelKulturSorulari },
        { label: "Genel Kültür Bilgi Yarışması", to: ROUTES.genelKulturBilgiYarismasi },
        { label: "Zor Genel Kültür Soruları", to: ROUTES.zorGenelKulturSorulari },
        { label: "Genel Kültür Bilgileri", to: ROUTES.genelKulturBilgileri },
        { label: "Tüm Kategoriler", to: ROUTES.categories },
      ]}
    />
  );
}
