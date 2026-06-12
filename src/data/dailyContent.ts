export interface DailyQuestion {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface DailyQuiz {
  slug: string;
  dateId: string;
  title: string;
  description: string;
  keywords: string[];
  heading: string;
  intro: string;
  article: string;
  category: string;
  imageUrl?: string;
  questions?: DailyQuestion[];
}

export const dailyQuizzes: DailyQuiz[] = [
  {
    "slug": "yerli-elektrikli-otomobil-togg-t10f-yollara-cikti",
    "dateId": "2026-06-13T00:15:00+03:00",
    "title": "Yerli Elektrikli Otomobil Togg T10F Test Sürüşlerine Başladı | GK Haber",
    "description": "Türkiye'nin yerli elektrikli otomobil üreticisi Togg, yeni fastback modeli T10F'in yol ve güvenlik testlerine başladı. Modelin detayları ve beklentiler makalemizde.",
    "keywords": [
      "togg",
      "togg t10f",
      "fastback",
      "yerli otomobil",
      "elektrikli araç",
      "türkiye otomotiv"
    ],
    "heading": "Yollarda Yeni Dönem: Togg T10F Test Sürüşlerine Başladı",
    "intro": "Türkiye'nin yerli otomobil girişimi Togg, ikinci akıllı cihazı olan fastback modeli T10F'in yollardaki test sürüşlerine hız kesmeden devam ediyor. Estetik tasarımı ve yenilikçi teknolojileriyle dikkat çeken T10F, otomotiv dünyasında büyük bir merakla bekleniyor.",
    "article": "Togg, T10X SUV modelinin ardından ürün gamını genişletmeye devam ediyor. Şirketin yeni fastback modeli T10F, Türkiye'nin farklı bölgelerinde zorlu yol ve hava koşullarında test ediliyor. Bu testler, aracın batarya performansı, yürüyen aksamı ve gelişmiş sürüş destek sistemlerinin (ADAS) optimize edilmesini amaçlıyor. Mühendisler, aracın yalıtım ve aerodinamik özelliklerini de test pistlerinde mercek altına alıyor.\n\nT10F modeli, sadece tasarımıyla değil, teknik özellikleriyle de elektrikli araç pazarında rekabetçi bir konum hedefliyor. Farklı batarya seçenekleriyle sunulacak olan model, kullanıcılarına 600 kilometreye varan menzil opsiyonları vaat ediyor. Ayrıca çift motorlu dört çeker versiyonu, yüksek beygir gücü ve tork üreterek spor otomobil performansını elektrikli konforla birleştirecek.\n\nAracın iç mekanında ise Togg'un imzası haline gelen uçtan uca panoramik ekran deneyimi daha da geliştirilmiş olarak sunuluyor. Yapay zeka destekli bilgi-eğlence sistemi, kullanıcının alışkanlıklarına göre şekillenirken, akıllı yaşam çözümleri araç içi konforu üst seviyeye taşıyor. T10F, aynı zamanda en güncel Euro NCAP güvenlik testlerinden en yüksek derece olan 5 yıldızı alacak şekilde tasarlandı.\n\nOtomotiv analistleri, T10F'in sedan ve fastback pazarına yeni bir soluk getireceğini belirtiyor. Özellikle yerli pazardaki yüksek sedan talebi göz önüne alındığında, T10F'in geniş bir kitleye hitap etmesi bekleniyor. Seri üretimin önümüzdeki yıl başlaması ve ilk teslimatların yılın ikinci çeyreğinde yapılması hedefleniyor.\n\nGK Haber olarak yerli teknolojilerin gelişimini yakından takip etmeye devam ediyoruz. Togg'un bu yeni adımı, Türkiye'nin elektrikli mobilite vizyonunun en somut göstergelerinden biri olarak tarihe geçiyor.",
    "category": "teknoloji"
  },
  {
    "slug": "merkez-bankasi-faiz-karari-aciklandi",
    "dateId": "2026-06-12T12:00:00+03:00",
    "title": "Merkez Bankası Haziran 2026 Faiz Kararını Açıkladı | GK Haber",
    "description": "Türkiye Cumhuriyet Merkez Bankası (TCMB) Para Politikası Kurulu, Haziran ayı faiz kararını kamuoyuyla paylaştı. Kararın piyasalara etkisi ve uzman yorumları.",
    "keywords": [
      "merkez bankası",
      "tcmb",
      "faiz kararı",
      "ekonomi",
      "haziran 2026 faiz",
      "piyasalar"
    ],
    "heading": "Ekonomide Gözler Merkez Bankası'nda: Faiz Kararını Açıkladı",
    "intro": "Türkiye Cumhuriyet Merkez Bankası (TCMB) Para Politikası Kurulu, haziran ayı toplantısının ardından politika faizi kararını açıkladı. Kurul, piyasa beklentileri doğrultusunda faiz oranını sabit tutma kararı aldı.",
    "article": "Merkez Bankası, Para Politikası Kurulu (PPK) toplantısında politika faizi olan bir hafta vadeli repo ihale faiz oranını yüzde 50 seviyesinde sabit bıraktı. Yapılan açıklamada, enflasyondaki düşüş eğiliminin kalıcı hale gelmesi ve beklentilerin hedeflerle uyumlu seyretmesi adına sıkı para politikası duruşunun kararlılıkla sürdürüleceği vurgulandı.\n\nKurul, enflasyonist baskıların küresel ve yerel düzeyde hala yakından izlendiğini belirtti. Hizmet enflasyonundaki katılık, enflasyon beklentileri ve jeopolitik risklerin enflasyon üzerindeki yukarı yönlü riskleri canlı tuttuğu ifade edilen raporda, likidite gelişmelerinin de yakından takip edildiği kaydedildi.\n\nKararın açıklanmasının ardından döviz kurlarında ve borsada yatay bir seyir izlendi. Ekonomistler, kararın sürpriz olmadığını ve Merkez Bankası'nın yılın ikinci yarısında enflasyondaki baz etkisiyle yaşanacak düşüşü gözlemlemek istediğini belirtiyor. İlk faiz indirim döngüsünün ise son çeyrekte başlayabileceği öngörülüyor.\n\nGK Haber Ekonomi Masası olarak piyasaların nabzını tutmaya devam edeceğiz. Faiz kararının önümüzdeki günlerde kredi faizlerine ve piyasa likiditesine yansımalarını detaylı analizlerle aktaracağız.",
    "category": "ekonomi"
  },
  {
    "slug": "mutfakta-deprem-beyaz-etin-devlerine-sok-operasyon-13-sirkete-kayyum-atandi",
    "dateId": "2026-06-12T01:00:00+03:00",
    "title": "Beyaz Et Sektöründe Dev Operasyon: 13 Dev Firmaya Kayyum Atandı! | GK Ekonomi",
    "description": "Türkiye beyaz et sektöründe haksız fiyat artışı ve kartelleşme iddiasıyla dev operasyon başlatıldı. Banvit, Şenpiliç ve Erpiliç'in de aralarında olduğu 13 firmaya denetim kayyumu atanırken 32 şüpheli hakkında gözaltı kararı verildi.",
    "keywords": [
      "beyaz et operasyonu",
      "tavuk firmalarına kayyum",
      "haksız fiyat artışı",
      "rekabet kurulu",
      "banvit kayyum",
      "şenpiliç kayyum",
      "akın gürlek açıklaması",
      "ekonomi haberleri"
    ],
    "heading": "Mutfakta Deprem: Beyaz Etin Devlerine Şok Operasyon! 13 Şirkete Kayyum Atandı",
    "intro": "Türkiye genelinde milyonlarca tüketiciyi yakından ilgilendiren beyaz et sektöründe tarihi bir operasyona imza atıldı. Haksız fiyat artışları ve rekabet ihlalleri gerekçesiyle aralarında Banvit, Erpiliç ve Şenpiliç gibi sektör devlerinin de yer aldığı 13 büyük firmaya denetim kayyumu atanırken, 8 ilde düzenlenen eş zamanlı operasyonlarda 32 şüpheli hakkında gözaltı kararı verildi.",
    "article": "Türkiye güne son yılların en büyük ekonomik operasyonlarından birinin haberiyle uyandı. İstanbul Cumhuriyet Başsavcılığı koordinesinde ve Örgütlü Suçlar Soruşturma Bürosu tarafından yürütülen soruşturma kapsamında, beyaz et sektöründe faaliyet gösteren dev firmalara yönelik şok adımlar atıldı. Adalet Bakanı Akın Gürlek yaptığı açıklamada, vatandaşların temel gıda ürünlerine adil ve makul koşullarda erişebilmesi amacıyla başlatılan adli süreçte, serbest rekabet ortamını ihlal eden ve fiyat manipülasyonu yaptığı tespit edilen 32 şüpheli hakkında gözaltı ve el koyma kararı verildiğini duyurdu.\\n\\nOperasyonun en dikkat çeken ayağını ise sektörün lideri konumundaki 13 büyük firmaya Ceza Muhakemesi Kanunu’nun 133. maddesi uyarınca \"denetim kayyumu\" atanması oluşturdu. Kayyum atanan şirketler arasında Banvit, Şenpiliç, Erpiliç, Lezita, Keskinoğlu, Hastavuk, Bakpiliç, Bupiliç, Akpiliç, Aspiliç, Gedik Tavukçuluk, Orvital ve AY-Pİ Tavukçuluk gibi Türkiye'nin tavuk eti ihtiyacının neredeyse tamamını karşılayan markalar yer alıyor. İstanbul merkezli yürütülen operasyonların Ankara, Balıkesir, Bolu, Bursa, İzmir, Samsun ve Uşak illerine yayıldığı belirtildi.\\n\\nSoruşturmanın perde arkasındaki detaylar ise haksız kazanç ve fiyat manipülasyonunun boyutlarını gözler önüne serdi. Rekabet Kurulu ve Ticaret Bakanlığı raporlarına yansıyan bulgulara göre, söz konusu firmaların üst düzey yöneticilerinin gizli WhatsApp grupları ve şifreli e-postalar üzerinden sürekli iletişim halinde oldukları belirlendi. Bu kanallar aracılığıyla üretim miktarları, stok durumları ve satış fiyatları üzerinde ortak kararlar alınarak piyasanın manipüle edildiği ve yapay bir pahalılık yaratıldığı tespit edildi. \"Suç işlemek amacıyla örgüt kurma\", \"fiyatları etkileme\" ve \"satıştan kaçınma\" suçlamalarıyla başlatılan soruşturmada şu ana kadar aralarında Banvit CEO'su Tolga Gündüz'ün de bulunduğu 28 şüpheli gözaltına alındı.\\n\\nKararın ardından kamuoyunda oluşan \"şirketlere el konuldu mu?\" endişelerine yönelik İstanbul Cumhuriyet Başsavcılığı'ndan hızlı bir açıklama geldi. Başsavcılık, \"denetim kayyumu\" uygulamasının şirketlerin ticari faaliyetlerinin durdurulması veya mülkiyet haklarının tamamen ellerinden alınması anlamına gelmediğini vurguladı. Yapılan açıklamada, temel gıda tedarik zincirinin kesintiye uğramaması ve üretim faaliyetlerinin hukuka uygun, şeffaf ve denetlenebilir şekilde devam etmesi amacıyla bu tedbirin uygulandığı, şirketlerin günlük ticari operasyonlarına devam edeceği ancak kritik kararların kayyum onayına tabi olacağı ifade edildi.\\n\\nSiyasi ve ekonomik çevrelerde ise operasyonun yankıları büyümeye devam ediyor. İYİ Parti Genel Başkanı Müsavat Dervişoğlu ve DEVA Partisi Lideri Ali Babacan gibi muhalefet isimleri, mülkiyet hakkı ve hür teşebbüs hürriyetinin çiğnendiğini savunarak karara tepki gösterdi. Hukukçular ise rekabet hukuku alanındaki ihlallerin ilk kez bu denli sert bir ceza hukuku yaptırımıyla (hürriyeti tahdit ve kayyum) karşılandığına dikkat çekerek, bu hamlenin serbest piyasa dinamikleri üzerinde orta ve uzun vadede derin şok dalgaları yaratabileceğini öngörüyor. Gözler şimdi gözaltına alınan şüphelilerin vereceği ifadeler ve mahkeme sürecine çevrilmiş durumda.",
    "category": "ekonomi"
  },
  {
    "slug": "ufo-dosyalari-aciliyor-steven-spielbergun-merakla-beklenen-bilim-kurgu-filmi-ifsa-gunu-vizyonda",
    "dateId": "2026-06-13T01:00:00+03:00",
    "title": "Steven Spielberg’ün UFO Başyapıtı 'İfşa Günü' Vizyona Girdi! | GK Sinema",
    "description": "Steven Spielberg'ün 20 yıl aradan sonra uzaylı temasına geri döndüğü, başrollerinde Emily Blunt ve Josh O'Connor'ın yer aldığı dev bütçeli bilim kurgu gerilimi 'İfşa Günü' (Disclosure Day) vizyonda.",
    "keywords": [
      "İfşa Günü",
      "Disclosure Day",
      "Steven Spielberg",
      "Emily Blunt",
      "UFO filmi",
      "yeni çıkan filmler",
      "sinema haberleri"
    ],
    "heading": "UFO Dosyaları Açılıyor: Steven Spielberg’ün Merakla Beklenen Bilim Kurgu Filmi 'İfşa Günü' Vizyonda!",
    "intro": "Sinema tarihinin en efsanevi yönetmenlerinden Steven Spielberg, 'E.T.' ve 'Üçüncü Türden Yakınlaşmalar'dan yıllar sonra yeniden UFO fenomenine odaklanan dev bütçeli yeni filmi 'İfşa Günü' (Disclosure Day) ile beyaz perdeye geri döndü. Başrollerinde Emily Blunt ve Josh O'Connor'ın yer aldığı film, gizemli bir uzaylı örtbasını ve insanlığın bu büyük gerçekle yüzleşme anını anlatıyor.",
    "article": "<p>Sinema dünyasında heyecan dorukta. Bugün, yani <strong>13 Haziran 2026</strong> itibarıyla tüm dünyayla aynı anda Türkiye'de de vizyona giren <strong>İfşa Günü (Disclosure Day)</strong>, usta yönetmen <strong>Steven Spielberg</strong>’ün uzaylı temasına görkemli dönüşünü müjdeliyor. Yaklaşık <strong>115 milyon dolar</strong> bütçeli yapım, UFO’lar ve dünya dışı yaşam iddialarını komplo teorileri, derin devlet yapıları ve insan psikolojisi üzerinden ele alarak izleyiciye soluksuz bir macera sunuyor.</p><h3>Sıra Dışı Bir Sırrı Taşıyan İki Hayat</h3><p>Filmin senaryosu, daha önce Spielberg ile birçok gişe canavarı projede birlikte çalışan ünlü senarist <strong>David Koepp</strong> tarafından kaleme alındı. Hikaye, beklenmedik bir şekilde tüm dillerde konuşabilme ve yabancıların en derin sırlarını bilme yeteneği kazanan yerel bir televizyon meteoroloğu olan <strong>Margaret Fairchild</strong> (Emily Blunt) etrafında şekilleniyor. Margaret’ın bu durumu, siber güvenlik uzmanı <strong>Daniel Kellner</strong>’ın (Josh O'Connor) hükümet arşivlerinden çaldığı çok gizli UFO belgeleriyle kesiştiğinde ise olaylar küresel bir kriz boyutuna ulaşıyor.</p><h3>'Eğer Yalnız Olmadığımızı Öğrenseydiniz Korkar mıydınız?'</h3><p>Spielberg, filmin tanıtımında izleyicilere 'Eğer yalnız olmadığımızı öğrenseniz; uzaylıların varlığını birisi size kanıtlasa, bu sizi korkutur muydu?' sorusunu yöneltiyor. Klasik uzaylı istilası filmlerinin aksine, <strong>İfşa Günü</strong> tamamen 'gerçeğin halka açıklanması' (disclosure) sürecine ve karanlık odakların bu kozmik teknolojileri saklama çabasına odaklanıyor. Margaret ve Daniel, gerçeği dünyaya duyurmak için savaşırken, karşılarında duran ve gizemli bir hükümet ajanı olan <strong>Noah</strong> (Colin Firth) rolündeki performance'ıyla adından söz ettiriyor. Filmin oyuncu kadrosunda ayrıca <strong>Colman Domingo</strong> ve <strong>Eve Hewson</strong> gibi yıldız isimler de yer alıyor.</p><h3>John Williams’ın Büyüleyici Ezgileri ve Eleştirmenlerin İlk Yorumları</h3><p>Filmin en çok dikkat çeken unsurlarından biri de şüphesiz efsanevi besteci <strong>John Williams</strong>’ın hazırladığı müzikler oldu. Spielberg'ün kadim dostu Williams'ın tınıları, filme derin bir gizem ve duygusal bir yoğunluk katıyor. İlk eleştiriler ise şimdiden ikiye bölünmüş durumda. Bazı sinema yazarları filmi 'Spielberg’ün son 20 yıldaki en iyi işi ve modern bir başyapıt' olarak nitelendirirken, bazıları ise pacing ve senaryo karmaşasına dikkat çekerek yapımı eleştiriyor. Ancak her şeye rağmen, sinema salonlarının bu hafta sonu tamamen dolması ve filmin küresel gişede rekor kırması bekleniyor.</p><p><strong>İfşa Günü</strong> hakkında bilmeniz gereken temel detaylar ise şöyle sıralanıyor:</p><ul><li><strong>Yönetmen:</strong> Steven Spielberg</li><li><strong>Başroller:</strong> Emily Blunt, Josh O'Connor, Colin Firth, Colman Domingo, Eve Hewson</li><li><strong>Tür:</strong> Bilim Kurgu, Gizem, Gerilim</li><li><strong>Süre:</strong> 145 Dakika</li><li><strong>Müzik:</strong> John Williams</li></ul><p>Türkiye genelindeki tüm sinema salonlarında gösterime giren bu devasa bilim kurgu serüveni, beyaz perdede gerçek bir görsel şölen izlemek isteyen sinemaseverleri bekliyor.</p>",
    "category": "sanat"
  },
  {
    "slug": "turkiyenin-yapay-zeka-vizyonu-aciklaniyor-tarihi-yol-haritasi-bugun-belli-oluyor",
    "dateId": "2026-06-13T02:00:00+03:00",
    "imageUrl": "/images/news/turkiyenin-yapay-zeka-vizyonu-aciklaniyor-tarihi-yol-haritasi-bugun-belli-oluyor.png",
    "title": "Türkiye'nin Yapay Zeka Vizyonu ve Yol Haritası Açıklanıyor | GK Haber",
    "description": "Türkiye'nin teknolojik geleceğini şekillendirecek Yapay Zeka Eylem Planı ve Ulusal Yapay Zeka Vizyonu bugün İstanbul'da düzenlenen zirvede kamuoyuna duyuruluyor.",
    "keywords": [
      "yapay zeka eylem planı",
      "türkiye yapay zeka vizyonu",
      "yapay zeka zirvesi 2026",
      "teknoloji haberleri",
      "sanayi ve teknoloji bakanlığı"
    ],
    "heading": "Türkiye'nin Yapay Zeka Vizyonu Açıklanıyor: Tarihi Yol Haritası Bugün Belli Oluyor!",
    "intro": "Türkiye'nin teknolojik bağımsızlığını ve dijital dönüşümünü zirveye taşıyacak olan 'Ulusal Yapay Zeka Eylem Planı', bugün İstanbul'da gerçekleştirilen dev zirveyle kamuoyuna ilan ediliyor.",
    "article": "<p>Türkiye, küresel teknoloji yarışında öncü ülkeler arasında yer alma hedefine doğru dev bir adım daha atıyor. <strong>13 Haziran 2026</strong> tarihinde <strong>İstanbul</strong>'da gerçekleştirilen <strong>Türkiye Yapay Zeka Zirvesi</strong> kapsamında, ülkenin gelecek on yıldaki teknolojik vizyonunu şekillendirecek olan <strong>Yapay Zeka Eylem Planı</strong> resmen kamuoyuna açıklanıyor.</p>\n\n<h3>Stratejik Dönüşüm ve Dijital Gelecek</h3>\n<p>Cumhurbaşkanlığı ve <strong>Sanayi ve Teknoloji Bakanlığı</strong> koordinasyonunda hazırlanan eylem planı, Türkiye'nin yapay zeka alanındaki yerli üretim kapasitesini artırmayı, nitelikli insan kaynağı yetiştirmeyi ve kamu süreçlerini akıllı teknolojilerle optimize etmeyi hedefliyor. Zirvede yapılan değerlendirmelere göre, hazırlanan eylem planı sadece bir strateji belgesi olmakla kalmayıp, Türkiye'nin savunma sanayiinden tarıma, finanstan eğitime kadar tüm sektörlerinde yapay zekanın aktif kullanımını sağlayacak operasyonel bir kılavuz niteliği taşıyor.</p>\n\n<h3>Kamuda ve Sanayide Yapay Zeka Dönemi</h3>\n<p>Açıklanan yol haritasına göre, Türkiye'deki kamu kurumları ve özel sektör temsilcileri ortak bir veri ekosisteminde buluşacak. <strong>TÜBİTAK</strong> ve ilgili teknoloji kuruluşlarının destekleriyle hayata geçirilecek yeni projelerde, Türkçe dil modellerinin geliştirilmesi ve yerli yapay zeka altyapılarının güçlendirilmesi öncelikli hedef olacak. Bu kapsamda öne çıkan maddeler şu şekilde sıralanıyor:</p>\n<ul>\n  <li>Yerli ve millî geniş dil modellerinin (LLM) geliştirilmesine yönelik büyük veri merkezlerinin kurulması.</li>\n  <li>Kamu hizmetlerinde bürokrasiyi azaltacak ve karar destek mekanizmalarını hızlandıracak yapay zeka entegrasyonu.</li>\n  <li>Genç girişimcilere ve start-up ekosistemine yönelik <strong>Sanayi ve Teknoloji Bakanlığı</strong> tarafından sağlanacak özel yapay zeka teşvik paketleri.</li>\n  <li>Eğitim müfredatına yapay zeka okuryazarlığı ve etik değerlerin entegre edilmesi.</li>\n</ul>\n\n<h3>Küresel Rekabette Yeni Milat</h3>\n<p>Uzmanlar, <strong>Haziran 2026</strong> tarihinin Türkiye'nin teknoloji eşiğini aşmasında kritik bir dönüm noktası olduğunu vurguluyor. Veriyi işleme kabiliyeti yüksek, algoritma geliştirme yetkinliğine sahip yerli şirketlerin desteklenmesiyle, Türkiye'nin küresel teknoloji pazarından aldığı payın katlanarak artması bekleniyor. Yeni eylem planı ile birlikte, Türkiye'nin dünya genelindeki yapay zeka indekslerinde üst sıralara tırmanması hedefleniyor.</p>",
    "category": "teknoloji"
  }
];
