export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  excerpt: string;
  category: string;
  updatedAt: string;
  readingMinutes: number;
  author: string;
  body: string;
  faqs: GuideFaq[];
}

export const GUIDE_AUTHOR = "GenelKültür.com.tr Editör Ekibi";

export const guides: Guide[] = [
  {
    slug: "genel-kultur-nasil-gelistirilir",
    title: "Genel Kültür Nasıl Geliştirilir? Adım Adım Kapsamlı Rehber (2026)",
    description:
      "Genel kültürünüzü kalıcı ve hızlı şekilde geliştirmenin yollarını editör ekibimiz derledi: okuma alışkanlığı, bilgi kaynakları, tekrar teknikleri ve günlük rutinler.",
    keywords: [
      "genel kultur nasil gelistirilir",
      "genel kultur gelistirme",
      "genel kultur calisma",
      "genel kultur onerileri",
    ],
    heading: "Genel Kültür Nasıl Geliştirilir?",
    excerpt:
      "Genel kültür bir günde değil, doğru alışkanlıklarla zamanla gelişir. Bu rehberde okuma, kaynak seçimi, tekrar ve günlük rutin başlıklarıyla uygulanabilir bir yol haritası bulacaksınız.",
    category: "Rehber",
    updatedAt: "29 Haziran 2026",
    readingMinutes: 8,
    author: GUIDE_AUTHOR,
    body: `
<p class="lead">Genel kültür, tek bir sınava ya da yarışmaya hazırlanmak için ezberlenen bir bilgi yığını değildir. Tarih, coğrafya, bilim, sanat ve güncel olaylar gibi farklı alanlardan beslenen, zamanla ve düzenli alışkanlıklarla derinleşen bir birikimdir. Bu rehberde, genel kültürünüzü gerçekçi ve kalıcı biçimde geliştirmek için izleyebileceğiniz yöntemleri adım adım ele alıyoruz.</p>

<h2>Genel kültür neden önemlidir?</h2>
<p>Güçlü bir genel kültür; <strong>eleştirel düşünme</strong>, olayları bağlam içinde değerlendirme ve farklı disiplinler arasında bağ kurma becerisini besler. KPSS gibi sınavlarda, iş görüşmelerinde ve günlük sohbetlerde fark yaratır. Daha da önemlisi, dünyayı daha bütünlüklü okumanızı sağlar: bir haberi okurken arkasındaki tarihsel ve ekonomik bağlamı görebilmek, yalnızca bilgi sahibi olmakla değil, bilgiyi ilişkilendirebilmekle mümkündür.</p>

<h2>1. Düzenli okuma alışkanlığı kazanın</h2>
<p>Genel kültürün en sağlam temeli okumadır. Ancak buradaki anahtar kelime <strong>düzenliliktir</strong>. Günde yoğun bir şekilde okuyup haftalarca ara vermek yerine, her gün 20-30 dakikalık tutarlı bir okuma çok daha kalıcı sonuç verir. Şu kaynak çeşitlerini dengeli biçimde kullanın:</p>
<ul>
  <li><strong>Klasik ve çağdaş edebiyat:</strong> Dil becerinizi ve kültürel referans dağarcığınızı genişletir.</li>
  <li><strong>Popüler bilim kitapları:</strong> Karmaşık konuları anlaşılır biçimde aktararak bilim okuryazarlığınızı artırır.</li>
  <li><strong>Tarih ve biyografi:</strong> Olayları ve kişileri bağlamıyla öğrenmenizi sağlar.</li>
  <li><strong>Güvenilir haber kaynakları:</strong> Güncel gelişmeleri takip etmenizi mümkün kılar.</li>
</ul>

<h2>2. Bilgiyi pasif değil aktif öğrenin</h2>
<p>Sadece okumak ya da izlemek, bilginin büyük bölümünün kısa sürede unutulmasına yol açar. <strong>Aktif öğrenme</strong>, bilgiyi kullanarak pekiştirmek demektir. Bunun için:</p>
<ul>
  <li>Öğrendiğiniz bir bilgiyi kendi cümlelerinizle özetleyin.</li>
  <li>Yeni öğrendiğiniz konuyu bir başkasına anlatmayı deneyin; anlatamadığınız yer, eksik anladığınız yerdir.</li>
  <li>Quiz ve test çözerek bilginizi sınayın. Yanlış yaptığınız soru, en çok öğrendiğiniz sorudur.</li>
</ul>

<h2>3. Tekrar aralıklarını doğru kurun</h2>
<p>Hafıza araştırmaları, bilgilerin belirli aralıklarla tekrar edildiğinde çok daha uzun süre hatırlandığını gösterir. Buna <strong>aralıklı tekrar (spaced repetition)</strong> denir. Yeni öğrendiğiniz bir bilgiyi aynı gün, ardından birkaç gün sonra ve bir hafta sonra tekrar etmek, onu kalıcı belleğe taşır. Kısa notlar veya soru-cevap kartları bu süreçte oldukça işe yarar.</p>

<h2>4. Günlük küçük rutinler oluşturun</h2>
<p>Genel kültür, hayatın içine yedirilmiş küçük alışkanlıklarla en doğal biçimde gelişir. Örneğin:</p>
<ul>
  <li>Her sabah bir "günün bilgisi" okuyun.</li>
  <li>Gün içinde merak ettiğiniz bir kavramı hemen araştırıp not alın.</li>
  <li>Akşamları 10 soruluk kısa bir genel kültür testi çözün.</li>
</ul>
<p>Bu küçük rutinler tek başına önemsiz görünse de bir yıl içinde ciddi bir birikime dönüşür.</p>

<h2>5. Farklı alanları birbirine bağlayın</h2>
<p>Gerçek anlamda güçlü bir genel kültür, bilgileri birbirinden kopuk parçalar hâlinde değil, bir ağ olarak tutar. Bir tarihî olayı öğrenirken o dönemin sanatını, bilimini ve coğrafyasını da ilişkilendirmeye çalışın. Örneğin Rönesans'ı yalnızca bir sanat akımı olarak değil; ekonomik gelişmeler, matbaanın icadı ve coğrafi keşiflerle birlikte düşünmek, bilgiyi hem daha anlamlı hem daha kalıcı kılar.</p>

<h2>Sonuç</h2>
<p>Genel kültür geliştirmenin sihirli bir kısayolu yoktur; ancak <strong>düzenli okuma, aktif öğrenme, aralıklı tekrar ve günlük küçük rutinler</strong> bir araya geldiğinde sonuç kaçınılmazdır. Önemli olan başlamak ve sürekliliği korumaktır. Sitemizdeki kategori testleri ve açıklamalı soru-cevap sayfaları, bu süreçte bilginizi düzenli olarak sınamak için pratik bir araç sunar.</p>
`,
    faqs: [
      {
        question: "Genel kültür ne kadar sürede gelişir?",
        answer:
          "Net bir süre vermek mümkün değildir; ancak günde 20-30 dakikalık düzenli okuma ve tekrarla birkaç ay içinde belirgin bir gelişme hissedilir. Kalıcı birikim için sürekliliği korumak en önemli etkendir.",
      },
      {
        question: "Genel kültür için en iyi kaynak nedir?",
        answer:
          "Tek bir kaynak yoktur. Edebiyat, popüler bilim kitapları, tarih ve biyografiler ile güvenilir haber kaynaklarını dengeli biçimde kullanmak en sağlıklı yöntemdir.",
      },
      {
        question: "Test çözmek genel kültürü geliştirir mi?",
        answer:
          "Evet. Test çözmek aktif öğrenmenin bir parçasıdır; bilgiyi hatırlamaya zorladığı ve eksiklerinizi gösterdiği için kalıcılığı önemli ölçüde artırır.",
      },
    ],
  },
  {
    slug: "genel-kultur-calisma-teknikleri",
    title: "Genel Kültür Çalışma Teknikleri ve Etkili Hafıza Yöntemleri",
    description:
      "Daha az sürede daha fazlasını öğrenmek için kanıtlanmış çalışma ve hafıza teknikleri: aralıklı tekrar, hafıza sarayı, aktif hatırlama ve not alma yöntemleri.",
    keywords: [
      "genel kultur calisma teknikleri",
      "hafiza teknikleri",
      "etkili calisma yontemleri",
      "akilda kalici ogrenme",
    ],
    heading: "Genel Kültür Çalışma Teknikleri",
    excerpt:
      "Doğru tekniklerle çalışmak, harcadığınız sürenin çok daha verimli geçmesini sağlar. Aralıklı tekrardan hafıza sarayına kadar kanıtlanmış yöntemleri bu rehberde topladık.",
    category: "Rehber",
    updatedAt: "29 Haziran 2026",
    readingMinutes: 7,
    author: GUIDE_AUTHOR,
    body: `
<p class="lead">Çok çalışmak her zaman verimli çalışmak anlamına gelmez. Aynı süreyi harcadığınız hâlde bazı yöntemler bilgiyi kalıcı belleğe taşırken, bazıları kısa sürede unutulan yüzeysel bir öğrenme yaratır. Bu rehberde, genel kültür çalışırken kullanabileceğiniz, hafıza bilimine dayanan etkili teknikleri ele alıyoruz.</p>

<h2>Aktif hatırlama (active recall)</h2>
<p>Aktif hatırlama, bilgiyi tekrar tekrar okumak yerine onu <strong>hatırlamaya çalışmaktır</strong>. Bir konuyu okuduktan sonra kitabı kapatıp "Ne öğrendim?" diye kendinize sormak, beyninizi bilgiyi geri çağırmaya zorlar. Bu çaba, öğrenmenin kalıcılığını belirgin biçimde artırır. Quiz ve testler aktif hatırlamanın en pratik biçimidir; bu yüzden çözdüğünüz her soru aslında bir öğrenme fırsatıdır.</p>

<h2>Aralıklı tekrar (spaced repetition)</h2>
<p>Bir bilgiyi öğrendikten hemen sonra unutmaya başlarız; buna "unutma eğrisi" denir. Aralıklı tekrar, bilgiyi tam unutmadan önce belirli aralıklarla yeniden gözden geçirerek bu eğriyi tersine çevirir. Önerilen basit bir düzen şöyledir:</p>
<ul>
  <li>Öğrendiğiniz gün bir kez tekrar edin.</li>
  <li>1-2 gün sonra tekrar edin.</li>
  <li>Bir hafta sonra tekrar edin.</li>
  <li>Bir ay sonra son bir tekrar yapın.</li>
</ul>
<p>Her tekrarda hatırlama kolaylaştıkça aralıkları açabilirsiniz.</p>

<h2>Hafıza sarayı (loci yöntemi)</h2>
<p>Antik dönemden bu yana kullanılan bu teknik, hatırlamak istediğiniz bilgileri zihninizde iyi bildiğiniz bir mekânın (örneğin eviniz) belirli noktalarına yerleştirmeye dayanır. Bilgiyi görsel ve mekânsal bir hikâyeye bağlamak, özellikle <strong>sıralı listeleri</strong> (başkentler, krallar, kronolojik olaylar) ezberlemede son derece etkilidir.</p>

<h2>Bilgiyi ilişkilendirme ve çağrışım</h2>
<p>Yeni bir bilgi, zaten bildiğiniz bir şeye bağlandığında çok daha kolay hatırlanır. Bir tarih ezberlerken o tarihte yaşanan başka bir olayla, bir kişiyi tanırken eserleriyle, bir kavramı günlük hayattan bir örnekle ilişkilendirin. <strong>Çağrışım</strong> ne kadar güçlüyse hatırlama o kadar kolay olur.</p>

<h2>Etkili not alma: Cornell yöntemi</h2>
<p>Not almak, doğru yapıldığında öğrenmeyi pekiştirir. Cornell yönteminde sayfayı üç bölüme ayırırsınız: ana notlar için geniş bir alan, anahtar kelimeler ve sorular için dar bir kenar sütunu, sayfanın altında ise kısa bir özet. Bu yapı, hem not alırken hem de tekrar ederken aktif hatırlamayı destekler.</p>

<h2>Pomodoro ile odaklanma</h2>
<p>Uzun ve dağınık çalışma seansları yerine, <strong>25 dakika kesintisiz çalışma + 5 dakika mola</strong> şeklindeki Pomodoro tekniği, zihinsel yorgunluğu azaltır ve odağı korur. Dört seans sonunda daha uzun bir mola verilir. Bu ritim, özellikle dikkat dağınıklığı yaşayanlar için verimliliği artırır.</p>

<h2>Sık yapılan hatalar</h2>
<ul>
  <li><strong>Sadece tekrar tekrar okumak:</strong> Tanıdıklık hissi yaratır ama gerçek öğrenme sağlamaz.</li>
  <li><strong>Tek seferde çok fazla bilgi yüklemek:</strong> Kısa sürede unutmaya yol açar.</li>
  <li><strong>Tekrarı ertelemek:</strong> Unutma eğrisinin avantajını kaybettirir.</li>
  <li><strong>Aktif sınama yapmamak:</strong> Eksiklerinizi fark etmenizi engeller.</li>
</ul>

<h2>Sonuç</h2>
<p>Verimli çalışmanın özü; <strong>aktif hatırlama, aralıklı tekrar ve bilgiyi ilişkilendirme</strong> üçlüsüdür. Bu teknikleri günlük rutininize eklediğinizde, aynı süreyle çok daha fazlasını ve çok daha kalıcı biçimde öğrenirsiniz. Öğrendiklerinizi sınamak için kategori testlerimizi düzenli olarak kullanabilirsiniz.</p>
`,
    faqs: [
      {
        question: "En etkili çalışma tekniği hangisidir?",
        answer:
          "Tek bir teknik yerine aktif hatırlama ve aralıklı tekrarın birlikte kullanılması en güçlü sonucu verir. Quiz çözmek bu ikisini doğal olarak birleştirir.",
      },
      {
        question: "Hafıza sarayı yöntemi herkes için uygun mu?",
        answer:
          "Görsel ve mekânsal hafızası güçlü olanlar için çok etkilidir, ancak başlangıçta pratik gerektirir. Özellikle sıralı listeleri ezberlemede belirgin fayda sağlar.",
      },
      {
        question: "Günde kaç saat çalışmak gerekir?",
        answer:
          "Süreden çok düzenlilik önemlidir. Pomodoro gibi odaklı kısa seanslarla geçirilen 1-2 saat, dağınık geçen uzun saatlerden daha verimli olabilir.",
      },
    ],
  },
  {
    slug: "genel-kultur-sorulari-hangi-konulardan-cikar",
    title: "Genel Kültür Soruları Hangi Konulardan Çıkar? Konu Dağılımı Rehberi",
    description:
      "Genel kültür sınav ve yarışmalarında en sık çıkan konular: tarih, coğrafya, bilim, sanat, kurumlar ve güncel olaylar. Hangi başlıklara öncelik vermeniz gerektiğini açıklıyoruz.",
    keywords: [
      "genel kultur sorulari hangi konulardan cikar",
      "genel kultur konulari",
      "en cok cikan genel kultur konulari",
      "genel kultur konu dagilimi",
    ],
    heading: "Genel Kültür Soruları Hangi Konulardan Çıkar?",
    excerpt:
      "Genel kültür çok geniş bir alandır, ancak sorular belirli başlıklar etrafında yoğunlaşır. Bu rehberde en sık çıkan konuları ve çalışma önceliklerini açıklıyoruz.",
    category: "Rehber",
    updatedAt: "29 Haziran 2026",
    readingMinutes: 6,
    author: GUIDE_AUTHOR,
    body: `
<p class="lead">Genel kültür sınırsız gibi görünen bir alandır, ancak sınavlarda ve bilgi yarışmalarında sorular belirli başlıklar etrafında yoğunlaşır. Hangi konuların daha sık geldiğini bilmek, çalışma sürenizi en verimli şekilde planlamanıza yardımcı olur. Bu rehberde en çok karşılaşılan konu alanlarını ve önceliklendirme stratejisini ele alıyoruz.</p>

<h2>1. Tarih</h2>
<p>Tarih, genel kültürün en geniş ve en sık sorulan alanlarından biridir. Özellikle şu başlıklar öne çıkar:</p>
<ul>
  <li><strong>Türk tarihi:</strong> İslamiyet öncesi Türk devletleri, Osmanlı kuruluş ve yükseliş dönemi, Kurtuluş Savaşı ve cumhuriyet tarihi.</li>
  <li><strong>Dünya tarihi:</strong> Antik uygarlıklar, Rönesans, Fransız İhtilali, Sanayi Devrimi ve dünya savaşları.</li>
  <li><strong>Önemli antlaşmalar ve dönüm noktaları.</strong></li>
</ul>

<h2>2. Coğrafya</h2>
<p>Coğrafya soruları hem Türkiye hem dünya ölçeğinde gelir. Başkentler, kıtalar, okyanuslar, en uzun nehirler, en yüksek dağlar ve ülkelerin konumları sıkça sorulur. Türkiye coğrafyasında bölgeler, göller, dağlar ve iklim özellikleri öne çıkar.</p>

<h2>3. Bilim ve teknoloji</h2>
<p>Bu alanda temel kavramlar ve bilim tarihi ağırlıktadır: periyodik tablo sembolleri, gezegenler, temel fizik ve biyoloji bilgileri, önemli buluşlar ve bunları gerçekleştiren bilim insanları. Güncel teknoloji gelişmeleri de giderek daha fazla yer kaplar.</p>

<h2>4. Sanat ve edebiyat</h2>
<p>Sanat sorularında eser-sanatçı eşleştirmeleri belirleyicidir: ünlü tablolar ve ressamları, klasik müzik bestecileri, dünya ve Türk edebiyatının önemli eserleri ve yazarları. Sinema ve mimari de bu başlık altında değerlendirilir.</p>

<h2>5. Kurumlar ve güncel olaylar</h2>
<p>Uluslararası kuruluşlar (BM, NATO, WHO, AB), kısaltmaları ve görevleri sık sorulan konulardır. Ayrıca yakın dönemdeki önemli gelişmeler, ödüller ve uluslararası organizasyonlar güncel bilgi gerektirir.</p>

<h2>Çalışma önceliği nasıl belirlenmeli?</h2>
<p>Sınırlı zamanınız varsa, en geniş ve en sık çıkan alanlardan başlamak mantıklıdır. Genel bir öncelik sıralaması şöyle olabilir:</p>
<ul>
  <li>Önce <strong>tarih ve coğrafya</strong>: en yüksek soru hacmine sahip alanlar.</li>
  <li>Ardından <strong>temel bilim</strong>: az sayıda kavramla çok soru kazandırır.</li>
  <li>Son olarak <strong>sanat, kurumlar ve güncel olaylar</strong>: tamamlayıcı ama belirleyici başlıklar.</li>
</ul>

<h2>Sonuç</h2>
<p>Genel kültür her ne kadar geniş olsa da, soruların büyük bölümü sınırlı sayıda temel başlık etrafında döner. Bu başlıkları bilerek çalışmak, hem zamanınızı verimli kullanmanızı hem de doğru cevap oranınızı yükseltmenizi sağlar. Her konu için sitemizdeki kategori testleriyle bilginizi düzenli olarak ölçebilirsiniz.</p>
`,
    faqs: [
      {
        question: "Genel kültürde en çok hangi konudan soru çıkar?",
        answer:
          "Tarih ve coğrafya, en yüksek soru hacmine sahip alanlardır. Bu iki başlık genellikle çalışmaya başlamak için en verimli noktadır.",
      },
      {
        question: "Güncel olaylar genel kültür sorularında çıkar mı?",
        answer:
          "Evet. Özellikle son dönemdeki önemli gelişmeler, uluslararası kuruluşlar ve ödüller güncel bilgi gerektiren sorularda sıkça yer alır.",
      },
      {
        question: "Tüm konuları aynı anda mı çalışmalıyım?",
        answer:
          "Hayır. En geniş ve sık çıkan alanlardan (tarih, coğrafya) başlayıp ardından bilim, sanat ve güncel olaylara geçmek daha verimli bir stratejidir.",
      },
    ],
  },
  {
    slug: "bilgi-yarismasina-hazirlik-rehberi",
    title: "Bilgi Yarışmasına Hazırlık Rehberi: Stratejiler ve Pratik İpuçları",
    description:
      "Bilgi yarışmalarında başarılı olmak için hazırlık stratejileri, zaman yönetimi, soru tipleri ve stresle başa çıkma yöntemleri. Editör ekibimizin pratik rehberi.",
    keywords: [
      "bilgi yarismasi hazirlik",
      "bilgi yarismasi taktikleri",
      "bilgi yarismasi nasil kazanilir",
      "quiz stratejileri",
    ],
    heading: "Bilgi Yarışmasına Hazırlık Rehberi",
    excerpt:
      "Bilgi yarışmaları yalnızca bilgi değil, strateji ve soğukkanlılık da ister. Bu rehberde hazırlık, zaman yönetimi ve doğru tahmin tekniklerini bir araya getirdik.",
    category: "Rehber",
    updatedAt: "29 Haziran 2026",
    readingMinutes: 7,
    author: GUIDE_AUTHOR,
    body: `
<p class="lead">Bilgi yarışmalarında başarı, yalnızca ne kadar bildiğinize değil; bu bilgiyi baskı altında ne kadar hızlı ve doğru kullanabildiğinize de bağlıdır. İyi bir hazırlık, geniş bir bilgi tabanını etkili bir yarışma stratejisiyle birleştirir. Bu rehberde, performansınızı yükseltecek pratik yöntemleri ele alıyoruz.</p>

<h2>1. Geniş ama dengeli bir hazırlık yapın</h2>
<p>Bilgi yarışmaları çok farklı alanlardan soru içerdiği için tek bir konuya odaklanmak risklidir. Tarih, coğrafya, bilim, sanat ve güncel olayları dengeli biçimde çalışmak, hangi soru gelirse gelsin hazırlıklı olmanızı sağlar. Güçlü olduğunuz alanları korurken zayıf alanlarınıza ekstra zaman ayırın.</p>

<h2>2. Düzenli test çözün</h2>
<p>Gerçek yarışma koşullarına en iyi hazırlık, <strong>süreli test çözmektir</strong>. Düzenli quiz çözmek üç açıdan fayda sağlar: bilginizi sınar, hız kazandırır ve soru tiplerine aşinalık oluşturur. Yanlış yaptığınız soruları bir kenara not edip tekrar etmek, en hızlı gelişme yöntemidir.</p>

<h2>3. Zaman yönetimini öğrenin</h2>
<p>Süreli yarışmalarda her soruya eşit zaman ayıramazsınız. Temel kural şudur: bildiğiniz soruları hızlıca yanıtlayıp, takıldığınız sorularda fazla oyalanmayın. Bir soruda kararsız kaldığınızda, ona daha sonra dönmek üzere işaretlemek genellikle en akılcı seçenektir.</p>

<h2>4. Akıllı tahmin teknikleri</h2>
<p>Bir sorunun cevabını tam bilmeseniz de doğru cevaba yaklaşabilirsiniz. Çoktan seçmeli sorularda şu yöntemler işe yarar:</p>
<ul>
  <li><strong>Eleme yöntemi:</strong> Kesinlikle yanlış olan şıkları çıkararak olasılığı yükseltin.</li>
  <li><strong>Mantıksal çıkarım:</strong> Sorunun bağlamından ve ipuçlarından yararlanın.</li>
  <li><strong>Aşırı uçlardan kaçınma:</strong> "Her zaman", "asla" gibi kesin ifadeler içeren şıklar çoğu zaman yanıltıcıdır.</li>
</ul>

<h2>5. Stres ve dikkat yönetimi</h2>
<p>Yarışma anındaki gerginlik, bildiğiniz soruları bile kaçırmanıza yol açabilir. Birkaç derin nefes almak, ilk birkaç soruda tempoyu kontrollü tutmak ve hata yaptığınızda hemen toparlanıp bir sonraki soruya odaklanmak performansınızı korur. Bir soruyu kaçırmak yarışmanın sonu değildir; asıl önemli olan dikkatinizi dağıtmamaktır.</p>

<h2>6. Yarışma öncesi son hazırlık</h2>
<ul>
  <li>Yarışmadan bir gün önce yeni ve yoğun bilgi yüklemekten kaçının; bunun yerine hafif tekrar yapın.</li>
  <li>İyi bir uyku, hızlı hatırlama ve odak için en önemli etkenlerden biridir.</li>
  <li>Son dakikada başkentler, kurumlar ve temel tarihler gibi sık çıkan konuları kısaca gözden geçirin.</li>
</ul>

<h2>Sonuç</h2>
<p>Bilgi yarışmalarında başarı; <strong>dengeli hazırlık, düzenli test pratiği, iyi zaman yönetimi ve soğukkanlılık</strong> bileşenlerinin toplamıdır. Bilgiyi biriktirmek kadar onu doğru anda kullanabilmek de bir beceridir ve bu beceri pratikle gelişir. Sitemizdeki farklı zorluk seviyelerindeki testlerle kendinizi gerçek yarışma koşullarına hazırlayabilirsiniz.</p>
`,
    faqs: [
      {
        question: "Bilgi yarışmasına nasıl hazırlanmalıyım?",
        answer:
          "Farklı alanları dengeli biçimde çalışın, düzenli olarak süreli test çözün ve yanlış yaptığınız soruları tekrar edin. Zaman yönetimi ve soğukkanlılık da en az bilgi kadar önemlidir.",
      },
      {
        question: "Cevabını bilmediğim soruda ne yapmalıyım?",
        answer:
          "Eleme yöntemiyle kesinlikle yanlış şıkları çıkarın ve mantıksal çıkarım yapın. Kararsızsanız soruyu işaretleyip sona bırakmak çoğu zaman daha akılcıdır.",
      },
      {
        question: "Yarışmadan önce çok çalışmak iyi midir?",
        answer:
          "Yarışmadan bir gün önce yoğun bilgi yüklemek genellikle ters etki yapar. Hafif tekrar yapmak ve iyi uyumak performans için daha faydalıdır.",
      },
    ],
  },
];
