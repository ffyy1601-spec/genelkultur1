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
  },
  {
    "slug": "futbolda-yeni-cag-basladi-2026-dunya-kupasinda-akilalmaz-teknoloji-devrimi",
    "dateId": "2026-06-13T02:00:00+03:00",
    "imageUrl": "/images/news/futbolda-yeni-cag-basladi-2026-dunya-kupasinda-akilalmaz-teknoloji-devrimi.png",
    "title": "2026 Dünya Kupası'nda Teknoloji Devrimi | Haber Portalı",
    "description": "Kanada, Meksika ve ABD'nin ev sahipliğinde başlayan 2026 FIFA Dünya Kupası, şarj edilebilir topları, yapay zeka destekli ofsayt sistemi ve hakem kameralarıyla tarihin en teknolojik turnuvası oluyor.",
    "keywords": [
      "2026 dünya kupası",
      "dünya kupası teknolojileri",
      "şarj edilebilir futbol topu",
      "yarı otomatik ofsayt",
      "refcam hakem kamerası",
      "fifa 2026"
    ],
    "heading": "Futbolda Yeni Çağ Başladı: 2026 Dünya Kupası'nda Akılalmaz Teknoloji Devrimi!",
    "intro": "Kanada, Meksika ve ABD'nin ortaklaşa düzenlediği 2026 FIFA Dünya Kupası, sadece yeşil sahadaki mücadeleyle değil, futbol tarihini baştan yazan olağanüstü teknolojik yenilikleriyle de dünyayı kasıp kavuruyor. Şarj edilen akıllı toplardan yapay zeka hakemlerine kadar tüm ezberler bozuluyor.",
    "article": "<p>Futbol dünyasının kalbi, 48 takımın katılımıyla tarihin en geniş kapsamlı turnuvası olarak kapılarını açan <strong>2026 FIFA Dünya Kupası</strong> ile atmaya başladı. Ancak bu turnuva, genişletilen formatının yanı sıra sahalarda ilk kez kullanılan çığır açıcı teknolojileriyle de spor tarihine geçiyor. Maçların kaderini saniyeler içinde değiştirebilecek kararlar, artık milyarlarca dolarlık teknolojik altyapı ve yapay zeka destekli sistemlerle saniyeler içinde çözüme kavuşturuluyor. İşte yeşil sahalarda devrim yaratan o yenilikler:</p>\n\n<h3>Prize Takılan Toplar: Şarj Edilebilir Akıllı Top Dönemi</h3>\n<p>Turnuvanın en çok konuşulan ve sosyal medyada büyük merak uyandıran yeniliği, her maç öncesi cep telefonu gibi prize takılarak şarj edilen özel müsabaka topları oldu. Topun merkezine yerleştirilen ultra hassas <strong>500 Hz Connected Ball (Bağlantılı Top)</strong> sensörü, saniyede tam 500 kez veri göndererek her vuruşun, pasın ve temasın milimetrik haritasını çıkarıyor. Hakemlerin ve izleyicilerin şüpheye düştüğü tüm kritik anlar, bu çip sayesinde anında aydınlanıyor.</p>\n\n<h3>Yapay Zeka Devrede: Yarı Otomatik Ofsayt Teknolojisi</h3>\n<p>Tartışmalı ofsayt kararlarına kesin bir çözüm sunmak üzere 2026 Dünya Kupası'nda erkekler turnuvasında ilk kez tüm maçlarda <strong>Yarı Otomatik Ofsayt Teknolojisi (SAOT)</strong> aktif olarak kullanılıyor. Stadyumlara yerleştirilen 12 yüksek hızlı özel kamera, oyuncuların vücutlarındaki 29 farklı noktayı saniyede 50 kare hızla takip ederek iskelet modellemeleri oluşturuyor. Hücum oyuncusu milimetrik olarak öne geçtiği anda, sistem yardımcı hakemin kulaklığına otomatik olarak uyarı gönderiyor. <strong>FIFA</strong>'nın yaptığı son açıklamaya göre, ofsayt eşiği bu turnuva ile birlikte 50 santimetreden 10 santimetreye düşürülerek hata payı neredeyse sıfıra indirildi.</p>\n\n<h3>Hakemin Gözünden Futbol: RefCam Teknolojisi</h3>\n<p>Turnuvanın televizyon yayıncılığına kazandırdığı en büyük yenilik ise şüphesiz <strong>RefCam (Hakem Kamerası)</strong> oldu. Karşılaşmayı yöneten orta hakemlerin göğsüne yerleştirilen ultra hafif, sarsıntı önleyici kameralar, izleyicilere maçı adeta sahanın içindeymiş gibi izleme fırsatı sunuyor. Pozisyon anında hakemin neyi, nasıl gördüğü ve oyuncularla olan diyalogları canlı yayına yansıtılarak hem şeffaflık artırılıyor hem de izleyicilere sinematik bir deneyim sunuluyor.</p>\n\n<h3>Sıcak havaya karşı Formula 1 Çözümü</h3>\n<p>Kuzey Amerika'nın zorlu yaz sıcaklarında sporcuların performansını ve sağlığını korumak amacıyla stadyumlarda ve yedek kulübelerinde <strong>Formula 1 soğutma teknolojisinden</strong> esinlenilen mikro klima üniteleri devreye sokuldu. Bu özel sistemler, sadece sporcuların bulunduğu dar alanları hedef alarak ani ısı düşüşü sağlıyor ve aşırı sıcakların getireceği olumsuz etkileri önlüyor. 104 maçlık dev maratonda oyuncuların sağlığı en üst düzey mühendislik çözümleriyle korunuyor.</p>",
    "category": "teknoloji"
  },
  {
    "slug": "tarihi-gece-a-milli-takimimiz-2026-fifa-dunya-kupasi-arenasinda-sahaya-cikiyor",
    "dateId": "2026-06-13T02:00:00+03:00",
    "imageUrl": "/images/news/tarihi-gece-a-milli-takimimiz-2026-fifa-dunya-kupasi-arenasinda-sahaya-cikiyor.png",
    "title": "A Millî Takım Kanada'da Sahaya Çıkıyor! 2026 Dünya Kupası Heyecanı Başladı | GK Haber",
    "description": "2026 FIFA Dünya Kupası D Grubu ilk maçında A Millî Takımımız, Avustralya karşısında sahaya çıkıyor. İşte dev karşılaşmanın detayları, taraftar buluşması ve heyecan verici tüm gelişmeler.",
    "keywords": [
      "A Milli Takım",
      "2026 Dünya Kupası",
      "Türkiye Avustralya maçı",
      "milli takım dünya kupası",
      "TFF",
      "BC Place",
      "futbol"
    ],
    "heading": "Tarihî Gece: A Millî Takımımız 2026 FIFA Dünya Kupası Arenasında Sahaya Çıkıyor!",
    "intro": "Milyonlarca futbolseverin nefesini tutarak beklediği an geldi. 2026 FIFA Dünya Kupası D Grubu'ndaki ilk maçında A Millî Futbol Takımımız, Kanada'nın Vancouver kentinde Avustralya ile karşı karşıya geliyor. Kırmızı-beyazlılar, dev turnuvaya galibiyetle başlayarak tüm Türkiye'yi sokağa dökmeyi hedefliyor.",
    "article": "<p>Tüm dünyanın gözünü çevirdiği <strong>2026 FIFA Dünya Kupası</strong> heyecanı, A Millî Futbol Takımımızın ilk grup maçıyla Türkiye'de zirveye ulaşıyor. Kırmızı-beyazlı ekibimiz, D Grubu'ndaki açılış karşılaşmasında <strong>13 Haziran 2026 Cumartesi</strong> günü (TSİ 14 Haziran Pazar sabahı saat 07.00'de) Kanada'nın ikonik stadyumu <strong>BC Place</strong>'te Avustralya ile karşı karşıya gelecek. Dev turnuvada gruptan lider çıkmayı hedefleyen ay-yıldızlılar, hazırlıklarını tamamlayarak maç saatini beklemeye başladı.</p>\n\n<h3>Vancouver Sokaklarında Kırmızı-Beyaz İstila</h3>\n<p>Maç öncesinde Kanada'nın Vancouver şehri, adeta bir Türk bayrağı denizine dönüştü. <strong>Türkiye Futbol Federasyonu (TFF)</strong> tarafından organize edilen resmî taraftar toplanma noktası <strong>Jonathan Rogers Park</strong>'ta bir araya gelen binlerce Türk taraftar, marşlar ve tezahüratlar eşliğinde büyük bir coşku yarattı. Buradan başlayarak metro istasyonuna kadar süren taraftar yürüyüşü, yerel halkın ve Kanada basınının da büyük ilgisini çekti. Güvenlik güçlerinin eşlik ettiği yürüyüşte, taraftarlar millî takıma olan inançlarını Vancouver sokaklarında haykırdı.</p>\n\n<h3>Dev Mücadele BC Place Stadyumu'nda</h3>\n<p>Karşılaşmanın oynanacağı 54 bin kapasiteli modern <strong>BC Place Stadyumu</strong>'nda tribünlerin tamamen dolması bekleniyor. Kanada, ABD ve Meksika'nın ortaklaşa düzenlediği bu büyük organizasyonda, gurbetçi vatandaşlarımızın da desteğiyle millî takımımızın deplasmanda hissetmeyeceği öngörülüyor. Teknik direktörümüzün sahaya süreceği ilk 11 ve taktik diziliş, spor otoriteleri tarafından merakla tartışılırken; genç yıldızlarımızın enerjisi ve tecrübeli isimlerin liderliği en büyük kozumuz olacak.</p>\n\n<h3>Grup Mücadelesinde Kritik Viraj</h3>\n<p>D Grubu'nda avantaj elde etmek isteyen Türkiye için Avustralya karşılaşması hayati önem taşıyor. Turnuvanın bu ilk etabında alınacak 3 puan, gruptan çıkma kapısını ardına kadar aralayacak. Spor yorumcuları, Avustralya'nın fizik gücüne karşı millîlerimizin teknik üstünlüğü ve hızlı hücum organizasyonlarıyla etkili olabileceğini belirtiyor. Tüm Türkiye, pazar sabahı erken saatlerde ekran başında tek yürek olup bu tarihi maçı izlemek için gün sayıyor.</p>",
    "category": "spor"
  },
  {
    "slug": "kuzey-amerikada-tarihi-gece-a-milli-takimimiz-2026-dunya-kupasi-arenasinda-sahaya-cikiyor",
    "dateId": "2026-06-13T02:00:00+03:00",
    "title": "A Milli Takım Vancouver Yolcusu: Tarihi Dünya Kupası Macerası Başlıyor!",
    "description": "2026 FIFA Dünya Kupası heyecanı başladı! A Milli Futbol Takımımız, gruptaki ilk sınavında Kanada'nın Vancouver kentinde Avustralya karşısına çıkıyor. İşte tarihi maça dair tüm detaylar.",
    "keywords": [
      "A Milli Takım",
      "2026 FIFA Dünya Kupası",
      "Türkiye Avustralya maçı",
      "Bizim Çocuklar",
      "Vincenzo Montella",
      "Vancouver",
      "Hakan Çalhanoğlu"
    ],
    "heading": "Kuzey Amerika'da Tarihi Gece: A Milli Takımımız 2026 Dünya Kupası Arenasında Sahaya Çıkıyor!",
    "intro": "Milyonların kalbi Kanada'da atacak! İtalyan teknik direktör Vincenzo Montella liderliğindeki A Milli Futbol Takımımız, 2026 FIFA Dünya Kupası'ndaki ilk maçında Vancouver'da Avustralya ile karşı karşıya gelmeye hazırlanıyor. Millilerimizin dev turnuvadaki ilk sınavı öncesinde taraftar buluşma noktaları, takımın son durumu ve muhteşem heyecana dair merak edilen tüm detayları derledik.",
    "article": "<p>Tüm Türkiye tek yürek oldu, ekran başına kilitlendi. <strong>Kanada</strong>, <strong>Meksika</strong> ve <strong>Amerika Birleşik Devletleri</strong>'nin ortaklaşa düzenlediği <strong>2026 FIFA Dünya Kupası</strong>'nda sahne sırası <strong>A Milli Futbol Takımımıza</strong> geldi. Ay-yıldızlı ekibimiz, D Grubu'ndaki ilk maçında <strong>Kanada'nın Vancouver</strong> şehrindeki ünlü <strong>BC Place Stadı</strong>'nda <strong>Avustralya</strong> ile kozlarını paylaşacak. Yerel saatle 13 Haziran Cumartesi akşamı oynanacak olan dev karşılaşma, Türkiye saatiyle (TSİ) <strong>14 Haziran Pazar günü saat 07.00</strong>'de başlayacak.</p>\n\n<h3>Kuzey Amerika'da Kırmızı-Beyaz İstila: Taraftarlar Vancouver'da Buluşuyor</h3>\n<p><strong>Türkiye Futbol Federasyonu (TFF)</strong>, bu tarihi karşılaşmayı yerinde takip etmek için Kuzey Amerika'ya akın eden binlerce taraftarımız için özel bir organizasyon hazırladı. Büyük mücadele öncesinde taraftarlarımız, Vancouver'ın en ünlü parklarından biri olan <strong>Jonathan Rogers Park</strong>'ta bir araya gelerek görkemli bir yürüyüş gerçekleştirecek. Kırmızı-beyaz bayraklar ve meşaleler eşliğinde <strong>Science World SkyTrain Metro İstasyonu</strong>'na kadar yürüyecek olan futbolseverler, BC Place semalarında adeta bir festival havası estirecek.</p>\n\n<h3>Montella Yönetiminde 34'üncü Sınav ve Millilerin 103 Yıllık Mirası</h3>\n<p>İtalyan teknik direktör <strong>Vincenzo Montella</strong> yönetiminde bugüne kadar 33 maça çıkan ay-yıldızlı ekibimiz, İtalyan çalıştırıcıyla birlikte 34'üncü sınavına Dünya Kupası sahnesinde çıkacak. 103 yıllık şanlı tarihinde toplam 651 karşılaşmayı geride bırakan A Milli Futbol Takımımız, bu karşılaşmayla birlikte <strong>652'nci müsabakasına</strong> adım atarak yeni bir tarihi eşiği aşacak. Bugüne kadar oynadığı maçlarda 259 galibiyet ve 151 beraberlik elde eden \"Bizim Çocuklar\", turnuvaya 3 puanla başlayarak gruptan çıkma yolunda dev bir adım atmayı hedefliyor.</p>\n\n<h3>FIFA'dan Özel Hakan Çalhanoğlu Tanıtımı</h3>\n<p>Dünya futbolunun patronu <strong>FIFA</strong>, dev maçın öncesinde iki takımın yıldız oyuncularını mercek altına alan özel portre videoları yayımladı. Türkiye cephesinde takım kaptanımız ve oyun kurucumuz <strong>Hakan Çalhanoğlu</strong>'nun kariyer yolculuğu ve liderlik hikayesi ön plana çıkarılırken; Avustralya cephesinde ise Türkiye'de de uzun yıllar forma giyen tecrübeli isim <strong>Aziz Behich</strong>'in portresi paylaşıldı. Tüm hazırlıklarını tamamlayan ve maç saatini bekleyen millilerimizde hedef, geçmişte iki kez mağlup ettiğimiz rakibimizi bir kez daha yenerek turnuvaya moralli başlamak.</p>",
    "category": "spor"
  },
  {
    "slug": "ekranlar-kapaniyor-sahne-aciliyor-canli-muzikte-yeni-akim-telefonsuz-konser-nedir",
    "dateId": "2026-06-13T02:00:00+03:00",
    "imageUrl": "/images/news/ekranlar-kapaniyor-sahne-aciliyor-canli-muzikte-yeni-akim-telefonsuz-konser-nedir.png",
    "title": "Konserlerde Telefon Yasaklanıyor mu? İşte Yeni 'Telefonsuz Konser' Trendi | GK Haber",
    "description": "Müzik dünyasında yeni bir dönem başlıyor. Bob Dylan ve Jack White'ın ardından popüler kültürde hızla yayılan 'telefonsuz konser' akımı, izleyicileri ekranlardan uzaklaştırıp müziğe odaklamayı hedefliyor.",
    "keywords": [
      "telefonsuz konser",
      "konserde telefon yasağı",
      "müzik trendleri 2026",
      "akıllı telefon yasağı",
      "yondr kılıf",
      "canlı müzik konser"
    ],
    "heading": "Ekranlar Kapanıyor, Sahne Açılıyor: Canlı Müzikte Yeni Akım 'Telefonsuz Konser' Nedir?",
    "intro": "Son yıllarda konser salonlarında havaya kalkan binlerce telefon ekranı, hem sanatçıların hem de gerçek müzikseverlerin sabrını zorluyordu. Dünya genelinde hızla yayılan ve Türkiye'deki müzik çevrelerinde de geniş yankı bulan yeni 'telefonsuz konser' akımı, canlı müzik deneyimini kökünden değiştirmeye hazırlanıyor.",
    "article": "<p>Konser ve festivallerde en sevilen şarkıları kaydetmek, sosyal medyada hikaye paylaşmak ya da canlı yayın açmak artık bir alışkanlık haline geldi. Ancak bu durum, canlı performansların büyüleyici atmosferine ve sanatçı ile seyirci arasındaki o görünmez bağa büyük bir darbe vuruyor. Son dönemde müzik dünyasında devrim niteliğinde bir trend olan <strong>\"telefonsuz konser\"</strong> uygulaması, dünya genelinde efsanevi isimler tarafından benimsenerek adeta küresel bir harekete dönüştü.</p><h3>Sanatçılar İsyan Etti: Akıllı Telefonlar Özel Kılıflara Giriyor</h3><p>Müzik tarihinin yaşayan efsanelerinden <strong>Bob Dylan</strong>, ünlü rock grubu <strong>Ghost</strong>, sıra dışı tarzıyla bilinen <strong>Jack White</strong> ve son olarak genç kuşağın en popüler şarkıcı-söz yazarlarından <strong>Phoebe Bridgers</strong>'ın öncülük ettiği bu akım, konser alanlarında telefon kullanımını tamamen yasaklıyor. Konser alanına giriş yapan izleyicilerin cep telefonları, <strong>Yondr</strong> adı verilen özel, kilitlenebilir neopren kılıflara konuluyor. Seyirciler telefonlarını yanlarında taşıyabiliyor ancak acil durumlar haricinde kılıfı açıp telefon ekranına bakamıyor. Kılıfı açmak isteyenlerin ise konser salonunun dışındaki belirlenmiş özel alanlara gitmesi gerekiyor.</p><h3>Seyirciler Bölünüyor: Dijital Detoks mu Yoksa Özgürlük Kısıtlaması mı?</h3><p>Bu yeni akım, müzikseverler arasında da hararetli bir tartışmayı beraberinde getirdi. Bir taraf, konser boyunca ellerinde telefon olmadan sadece müziğe, ışık şovlarına ve o andaki kolektif enerjiye odaklanmanın <strong>\"gerçek bir dijital detoks\"</strong> ve eşsiz bir deneyim olduğunu savunuyor. Diğer bir kesim ise bilet fiyatlarının oldukça yüksek olduğu bu dönemde, konseri kendi perspektiflerinden bir hatıra olarak kaydetmenin en doğal hakları olduğunu dile getirerek bu yasağı bireysel özgürlüğün kısıtlanması olarak görüyor. Ancak her iki tarafın da birleştiği nokta, telefonsuz konserlerin izleyicide bıraktığı duygusal etkinin çok daha güçlü olduğu yönünde.</p><h3>Türkiye Canlı Müzik Sektörü Akımı Yakından Takip Ediyor</h3><p>Türkiye'de de özellikle kapalı kulüp konserlerinde ve tiyatro oyunlarında izleyicilerin telefon ekranlarının yaydığı parlak ışıklar, sahnedeki sanatçıların konsantrasyonunu bozduğu gerekçesiyle sık sık eleştiri konusu oluyordu. Organizasyon şirketleri ve yerli sanatçılar, Avrupa ve <strong>Amerika Birleşik Devletleri</strong>'nde standart hale gelmeye başlayan bu uygulamayı Türkiye'deki prestijli festivallere entegre etmek için altyapı çalışmalarına başladı. Çok yakında Türkiye'deki büyük stadyum konserlerinde de telefonlarımızın kilitli kılıflara girdiğini görmek şaşırtıcı olmayacak.</p>",
    "category": "teknoloji"
  },
  {
    "slug": "yesilcam-esintisi-geri-donuyor-ask-tesadufleri-sever-3-basrolleri-belli-oldu",
    "dateId": "2026-06-13T03:00:00+03:00",
    "imageUrl": "/images/news/yesilcam-esintisi-geri-donuyor-ask-tesadufleri-sever-3-basrolleri-belli-oldu.png",
    "title": "Aşk Tesadüfleri Sever 3 Geliyor! Mehmet Günsür ve Devrim Özkan Başrolde | GK Haber",
    "description": "Sinema dünyasında büyük heyecan! Aşk Tesadüfleri Sever serisinin üçüncü filminin başrolleri Mehmet Günsür ve Devrim Özkan oldu. Çekimler temmuz ayında başlıyor.",
    "keywords": [
      "Aşk Tesadüfleri Sever 3",
      "Mehmet Günsür",
      "Devrim Özkan",
      "Ömer Faruk Sorak",
      "yeni Türk filmleri",
      "vizyondaki filmler",
      "yerli sinema"
    ],
    "heading": "Yeşilçam Esintisi Geri Dönüyor: 'Aşk Tesadüfleri Sever 3' Başrolleri Belli Oldu!",
    "intro": "Türk sinema tarihinin en çok ağlatan ve hafızalara kazınan aşk hikayelerinden biri olan 'Aşk Tesadüfleri Sever' serisi, üçüncü filmiyle beyaz perdeye geri dönüyor. Serinin yeni halkasında başrolleri ünlü oyuncular Mehmet Günsür ve Devrim Özkan paylaşacak.",
    "article": "<p>Türk sinemasında romantik drama türünün en önemli kilometre taşlarından biri kabul edilen serinin yeni halkası için resmi hazırlıklar başladı. Gazeteci Birsen Altuntaş'ın aktardığı kulis bilgilerine göre, yönetmen koltuğunda yine usta isim <strong>Ömer Faruk Sorak</strong>'ın oturacağı <strong>Aşk Tesadüfleri Sever 3</strong> filminin başrol oyuncuları netleşti. Son dönemdeki başarılı performansıyla adından sıkça söz ettiren güzel oyuncu <strong>Devrim Özkan</strong> ve serinin ilk filmindeki efsanevi rolüyle hafızalara kazınan karizmatik aktör <strong>Mehmet Günsür</strong>, yeni yapımda partner oldu.</p>\n\n<h3>Çekimler Temmuz Ayında Start Alıyor</h3>\n<p>Sinemaseverleri şimdiden heyecanlandıran yapımın çekim takvimi de netlik kazandı. Alınan bilgilere göre filmin çekimleri <strong>7 Temmuz 2026</strong> tarihinde <strong>İstanbul</strong>'da başlayacak. İstanbul'un tarihi ve büyüleyici atmosferinde gerçekleştirilecek çekimlerin ardından ekip, filmin ikinci durağı olan Ankara'ya geçecek. Ankara çekimlerinin ise <strong>7 Ağustos 2026</strong> tarihinde tamamlanması planlanıyor. İstanbul ve Ankara arasındaki bu mekansal geçiş, serinin ilk filmlerindeki nostaljik dokuyu yeniden canlandıracak.</p>\n\n<h3>Yürekleri Sızlatacak Tesadüfler ve Organ Bağışı Teması</h3>\n<p>Merakla beklenen senaryonun detayları da yavaş yavaş gün yüzüne çıkıyor. Filmde, organ bağışı konusunda toplumsal farkındalık yaratmayı amaçlayan başarılı bir reklamcı ve fotoğraf sanatçısı olan <strong>'Mavi'</strong> karakterine <strong>Devrim Özkan</strong> hayat verecek. Mavi’nin hazırladığı özel bir fotoğraf sergisi sırasında yolu, hayatını sevdiği kadının kalbiyle sürdüren gizemli <strong>'Özgür'</strong> (<strong>Mehmet Günsür</strong>) ile kesişecek. Kalp nakli ve kader temalarının merkezde olacağı bu çarpıcı senaryo, izleyicilere yine duygu dolu anlar yaşatacak.</p>\n\n<h3>Güçlü Kadro ve Flashback Sürprizi</h3>\n<p>Filmin zengin oyuncu kadrosunda sinema dünyasının usta isimlerinden <strong>Ayda Aksel</strong> ve başarılı oyuncu <strong>Serkan Altunorak</strong> da yer alıyor. Serinin hayranlarını en çok sevindiren detay ise ilk filmde hafızalara kazınan <strong>Belçim Bilgin</strong>'in projeye dahil olması oldu. Bilgin, rüya ve flashback sahneleriyle hikayenin duygusal derinliğini artıracak. Yapımcılığını Böcek Film'in üstleneceği ve vizyon tarihi şimdiden <strong>20 Kasım 2026</strong> olarak hedeflenen yapım, sinema salonlarında uzun süre unutulmayacak bir iz bırakmaya hazırlanıyor.</p>",
    "category": "sanat"
  },
  {
    "slug": "sinemada-spielberg-devrimi-yillardir-sir-gibi-saklanan-ifsa-gunu-turkiyede-vizyonda",
    "dateId": "2026-06-13T03:00:00+03:00",
    "title": "Sinemada Steven Spielberg Fırtınası: İfşa Günü Vizyona Girdi | GK Haber",
    "description": "Sinema dünyasının usta yönetmeni Steven Spielberg'ün merakla beklenen yeni bilim kurgu filmi İfşa Günü, Türkiye'de vizyona girdi. Film detayları, konusu ve ilk tepkiler haberimizde.",
    "keywords": [
      "Steven Spielberg",
      "İfşa Günü",
      "İfşa Günü vizyon tarihi",
      "Disclosure Day",
      "yeni bilim kurgu filmleri 2026",
      "sinemada bu hafta",
      "uzaylı filmleri"
    ],
    "heading": "Sinemada Spielberg Devrimi: Yıllardır Sır Gibi Saklanan 'İfşa Günü' Türkiye'de Vizyonda!",
    "intro": "Sinema tarihinin en etkileyici yönetmenlerinden biri olan Steven Spielberg, uzun süredir gizemini koruyan ve merakla beklenen yeni bilim kurgu başyapıtı 'İfşa Günü' (Disclosure Day) ile beyaz perdeye görkemli bir dönüş yaptı. Film, 12 Haziran 2026 itibarıyla Türkiye genelindeki sinema salonlarında izleyicilerle buluştu.",
    "article": "<p>Sinema dünyasında taşları yerinden oynatacak dev bir yapım daha izleyiciyle buluştu. Çağımızın en büyük yönetmenlerinden ve bilim kurgu sinemasının tartışmasız ustalarından biri olan <strong>Steven Spielberg</strong>, yıllardır büyük bir gizlilikle yürüttüğü yeni projesi <strong>İfşa Günü</strong> (Disclosure Day) ile beyaz perdeye geri döndü. Film, <strong>12 Haziran 2026</strong> tarihi itibarıyla Türkiye genelinde tam <strong>261 lokasyonda</strong> vizyona girerek haftanın en çok merak edilen yapımı olmayı başardı.</p>\n\n<h3>Dünya Dışı Yaşamın Gerçeğiyle Yüzleşmek</h3>\n<p>Usta yönetmenin 2022 yapımı draması Fabelmanlar'dan sonra yönünü yeniden gökyüzüne ve bilinmeze çevirdiği bu yeni başyapıtı, insanlığın en büyük sorusuna odaklanıyor. <strong>İfşa Günü</strong>, dünya dışı akıllı yaşam formlarının varlığının kesin olarak kanıtlanmasının ardından, gezegenimizdeki tüm sosyo-politik dengelerin altüst olmasını ve insanlığın bu büyük gerçekle yüzleşme sürecini konu alıyor. Alışılmış aksiyon dolu uzaylı istilası klişelerinden uzak duran Spielberg, felsefi derinliği yüksek, psikolojik ve gerilim dozu yoğun bir anlatı sunuyor.</p>\n\n<h3>Sinema Salonlarında Yoğun İlgi</h3>\n<p>Türkiye'deki sinemaseverlerin uzun süredir vizyon takviminde ilk sıraya yazdığı film, ilk seanslardan itibaren sinema salonlarında büyük bir yoğunluğa yol açtı. Dağıtımını <strong>UIP Türkiye</strong>'nin üstlendiği yapım, sadece görsel efektleriyle değil, izleyiciyi derin düşüncelere sevk eden senaryosuyla da sinema eleştirmenlerinden tam not aldı. İlk izleyici yorumları, filmin Spielberg'ün efsanevi klasiği <i>Üçüncü Türden Yakınlaşmalar</i> (Close Encounters of the Third Kind) ile benzer bir felsefi ruha sahip olduğu yönünde birleşiyor.</p>\n\n<h3>Bilim Kurguda Yeni Bir Dönem</h3>\n<p>Hollywood koridorlarında uzun süre prodüksiyon aşaması gizli tutulan ve oyuncu kadrosundan set görsellerine kadar her detayı bir sır gibi saklanan <strong>İfşa Günü</strong>, sinema endüstrisinde özlenen o \"büyük gizem\" duygusunu yeniden canlandırdı. Eleştirmenlere göre Spielberg, bu filmle sadece bir uzaylı anlatısı sunmuyor; aynı zamanda dijital çağın yalnızlaştırdığı insanlığın, kozmik bir topluluk karşısında nasıl bir araya gelmek zorunda kaldığını gözler önüne seriyor.</p>\n\n<p>Bu hafta sinemaya gitmeyi planlayanlar için vizyondaki diğer öne çıkan alternatifler ise şunlar:</p>\n<ul>\n  <li><strong>Amansız (The Furious):</strong> Aksiyon ve suç severler için haftanın en dinamik seçeneklerinden biri.</li>\n  <li><strong>Gizemli Ağaç (The Magic Faraway Tree):</strong> Ailece keyifle izlenebilecek fantastik bir macera.</li>\n  <li><strong>Kıyma: Hain Eşer Kendi Düşer:</strong> Yerli komedi arayanlar için vizyona giren eğlenceli bir alternatif.</li>\n</ul>",
    "category": "sanat"
  },
  {
    "slug": "turkiyenin-yeni-teknoloji-rotasi-yapay-zeka-vizyonuyla-gelecek-sekilleniyor",
    "dateId": "2026-06-13T03:00:00+03:00",
    "title": "Türkiye Yapay Zeka Çağına Giriyor: 2026 Atılımı | GK Haber",
    "description": "Türkiye'nin yapay zeka vizyonu ve yeni nesil teknolojik hamleleri 13 Haziran 2026 itibarıyla netleşiyor. Geleceği şekillendirecek stratejiler neler?",
    "keywords": [
      "Türkiye yapay zeka",
      "yapay zeka vizyonu",
      "teknoloji haberleri",
      "2026 teknoloji trendleri",
      "dijital dönüşüm"
    ],
    "heading": "Türkiye'nin Yeni Teknoloji Rotası: Yapay Zeka Vizyonuyla Gelecek Şekilleniyor",
    "intro": "Türkiye, dijital dönüşüm hamlelerini bir üst seviyeye taşıyor. Sanayi ve Teknoloji Bakanlığı önderliğinde açıklanan yeni yapay zeka yol haritası, ekonomik kalkınmadan savunma sanayine kadar pek çok alanda köklü değişimlerin sinyalini veriyor.",
    "article": "<p>Dünya genelinde <strong>16 trilyon dolarlık</strong> bir ekonomik hacme ulaşması beklenen yapay zeka pazarında, <strong>Türkiye</strong> iddialı adımlar atmaya devam ediyor. <strong>13 Haziran 2026</strong> tarihinde kamuoyu ile paylaşılan yeni vizyon belgesi, ülkenin teknolojik egemenliğini güçlendirmeyi ve yerli yazılım ekosistemini küresel arenada rekabetçi bir noktaya taşımayı hedefliyor.</p><h3>Stratejik Dönüşüm ve Milli Teknoloji Hedefleri</h3><p>Hükümetin açıkladığı bu kapsamlı strateji, özellikle <strong>Genel Müdürlük</strong> düzeyinde yeniden yapılandırılan <strong>Ulusal Teknoloji ve Yapay Zeka</strong> birimlerinin koordinasyonunda hayata geçirilecek. Uzmanlar, bu adımın genç yeteneklerin teşvikiyle birlikte, Türkiye'den önümüzdeki yıllarda <strong>yüzlerce yeni nesil unicorn</strong> girişimin çıkmasını sağlayabileceğini vurguluyor.</p><h3>Ekonomik ve Sosyal Etki Alanları</h3><p>Yeni dönemin odak noktaları arasında şunlar öne çıkıyor:</p><ul><li><strong>Verimlilik Artışı:</strong> Tarım ve sanayide yapay zeka destekli otonom sistemlerin yaygınlaştırılması.</li><li><strong>Dijital Eğitim:</strong> Eğitim müfredatının yapay zeka odaklı yetkinliklerle güncellenmesi.</li><li><strong>Güvenlik ve Etik:</strong> Siber güvenlik altyapılarının milli yapay zeka algoritmalarıyla güçlendirilmesi.</li></ul><h3>Küresel Rekabette 'Yeni Nesil' Sorumluluklar</h3><p><strong>Sanayi ve Teknoloji Bakanlığı</strong> kaynaklarından edinilen bilgilere göre, Türkiye'nin yapay zeka vizyonu sadece iç pazarla sınırlı kalmayacak. Bölgesel bir teknoloji üssü olma yolunda ilerleyen ülke, özellikle Orta Asya ve Orta Doğu pazarlarında da teknolojik iş birliklerini artırmayı planlıyor. Önümüzdeki aylarda düzenlenecek olan <strong>GITEX AI Türkiye</strong> gibi uluslararası zirveler, bu yeni vizyonun dünya sahnesindeki somut yansımalarını sergileyecek.</p>",
    "category": "teknoloji"
  },
  {
    "slug": "futbolun-kaderi-algoritmalara-emanet-2026-dunya-kupasinda-akilli-teknoloji-devrimi",
    "dateId": "2026-06-13T03:00:00+03:00",
    "imageUrl": "/images/news/futbolun-kaderi-algoritmalara-emanet-2026-dunya-kupasinda-akilli-teknoloji-devrimi.png",
    "title": "Futbolda Teknoloji Devrimi: 2026 Dünya Kupası'nda 'Akıllı Top' Dönemi",
    "description": "2026 FIFA Dünya Kupası, şarj edilebilir toplardan yarı otomatik ofsayt sistemine kadar sporda teknolojik bir devrim başlattı. İşte futbolda yeni dönem.",
    "keywords": [
      "2026 Dünya Kupası",
      "futbol teknolojisi",
      "yarı otomatik ofsayt",
      "akıllı maç topu",
      "FIFA 2026"
    ],
    "heading": "Futbolun Kaderi Algoritmalara Emanet: 2026 Dünya Kupası'nda Akıllı Teknoloji Devrimi",
    "intro": "Kuzey Amerika'nın ev sahipliğinde başlayan 2026 FIFA Dünya Kupası, sadece saha içindeki rekabetle değil, futbol tarihinde daha önce görülmemiş teknolojik yeniliklerle de spor dünyasının zirvesine yerleşti.",
    "article": "<p>Futbol dünyası, <strong>13 Haziran 2026</strong> itibarıyla bambaşka bir döneme tanıklık ediyor. ABD, Kanada ve Meksika'nın ortaklaşa düzenlediği <strong>2026 FIFA Dünya Kupası</strong>, sadece takımların mücadelesiyle değil, sahanın her noktasına entegre edilen ileri seviye teknolojilerle de adından söz ettiriyor. Uzun yıllar yetenek ve strateji üzerine kurulu olan futbol, artık veri ve yapay zeka destekli algoritmaların merkezinde yer aldığı bir arenaya dönüştü.</p><h3>Saniyenin 50'de Biri Hassasiyetinde Ofsayt Sistemi</h3><p>Turnuvanın en çok konuşulan yeniliklerinden biri, erkekler turnuvasında ilk kez tüm maçlarda kullanılan <strong>Yarı Otomatik Ofsayt Teknolojisi (SAOT)</strong> oldu. Sahaya yerleştirilen <strong>12 yüksek hızlı kamera</strong>, her oyuncunun iskelet modellemesini saniyede <strong>50 kare</strong> hızında takip ediyor. Bu sistem, ofsayt eşiğini geçmişteki 50 santimetreden <strong>10 santimetreye</strong> indirerek, kritik pozisyonlarda hakemlerin yükünü hafifletiyor ve adalet terazisini kusursuzlaştırıyor.</p><h3>Şarj Edilebilir Toplar ve Formula 1'den Gelen Çözümler</h3><p><ul><li><strong>Sensörlü Akıllı Top:</strong> Maç topları artık sadece deri ve havadan ibaret değil; içerisindeki çipler sayesinde milimetrik veri akışı sağlıyor ve maç öncesi şarj ediliyor.</li><li><strong>RefCam (Hakem Kamerası):</strong> Hakemlerin göğsüne yerleştirilen özel kameralar, izleyicilere oyunun tam merkezinden, oyuncu gözüyle bir deneyim sunuyor.</li><li><strong>İklim Kontrolü:</strong> Sıcak hava şartlarıyla başa çıkmak için turnuvada, yüksek performanslı araçlarda kullanılan <strong>Formula 1 soğutma teknolojileri</strong> stadyumlara entegre edildi.</li></ul></p><h3>Sinematik Bir Futbol Deneyimi</h3><p><strong>FIFA</strong> yetkililerinin \"geleceğin oyunu\" olarak nitelendirdiği bu teknolojik dönüşüm, sadece hakem kararlarını hızlandırmakla kalmıyor, aynı zamanda milyonlarca izleyiciye <strong>sinematik bir futbol deneyimi</strong> sunuyor. Genişletilmiş <strong>VAR</strong> uygulamaları ve anlık veri analizi platformları, oyunun duraklama süresini minimize ederken, taraftarların saha içindeki her saniyeye dair istatistiklere mobil uygulamalar üzerinden erişebilmesine olanak tanıyor.</p>",
    "category": "teknoloji"
  }
];
