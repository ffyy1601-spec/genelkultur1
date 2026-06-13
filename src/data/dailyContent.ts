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
    "article": "<p>Futbol dünyasının kalbi, 48 takımın katılımıyla tarihin en geniş kapsamlı turnuvası olarak kapılarını açan <strong>2026 FIFA Dünya Kupası</strong> ile atmaya başladı. Ancak bu turnuva, genişletilen formatının yanı sıra sahalarda ilk kez kullanılan çığır açıcı teknolojileriyle de spor tarihine geçiyor. Maçların kaderini saniyeler içinde değiştirebilecek kararlar, artık milyarlarca dolarlık teknolojik altyapı ve yapay zeka destekli sistemlerle saniyeler içinde çözüme kavuşturuluyor. İşte yeşil sahalarda devrim yaratan o yenilikler:</p>\n\n<h3>Prize Takılan Toplar: Akıllı Top Dönemi</h3>\n<p>Turnuvanın en çok konuşulan ve sosyal medyada büyük merak uyandıran yeniliği, her maç öncesi cep telefonu gibi prize takılarak şarj edilen özel müsabaka topları oldu. Topun merkezine yerleştirilen ultra hassas <strong>500 Hz Connected Ball (Bağlantılı Top)</strong> sensörü, saniyede tam 500 kez veri göndererek her vuruşun, pasın ve temasın milimetrik haritasını çıkarıyor. Hakemlerin ve izleyicilerin şüpheye düştüğü tüm kritik anlar, bu çip sayesinde anında aydınlanıyor.</p>\n\n<h3>Yapay Zeka Devrede: Yarı Otomatik Ofsayt Teknolojisi</h3>\n<p>Tartışmalı ofsayt kararlarına kesin bir çözüm sunmak üzere 2026 Dünya Kupası'nda erkekler turnuvasında ilk kez tüm maçlarda <strong>Yarı Otomatik Ofsayt Teknolojisi (SAOT)</strong> aktif olarak kullanılıyor. Stadyumlara yerleştirilen 12 yüksek hızlı özel kamera, oyuncuların vücutlarındaki 29 farklı noktayı saniyede 50 kare hızla takip ederek iskelet modellemeleri oluşturuyor. Hücum oyuncusu milimetrik olarak öne geçtiği anda, sistem yardımcı hakemin kulaklığına otomatik olarak uyarı gönderiyor. <strong>FIFA</strong>'nın yaptığı son açıklamaya göre, ofsayt eşiği bu turnuva ile birlikte 50 santimetreden 10 santimetreye düşürülerek hata payı neredeyse sıfıra indirildi.</p>\n\n<h3>Hakemin Gözünden Futbol: RefCam Teknolojisi</h3>\n<p>Turnuvanın televizyon yayıncılığına kazandırdığı en büyük yenilik ise şüphesiz <strong>RefCam (Hakem Kamerası)</strong> oldu. Karşılaşmayı yöneten orta hakemlerin göğsüne yerleştirilen ultra hafif, sarsıntı önleyici kameralar, izleyicilere maçı adeta sahanın içindeymiş gibi izleme fırsatı sunuyor. Pozisyon anında hakemin neyi, nasıl gördüğü ve oyuncularla olan diyalogları canlı yayına yansıtılarak hem şeffaflık artırılıyor hem de izleyicilere sinematik bir deneyim sunuluyor.</p>\n\n<h3>Sıcak havaya karşı Formula 1 Çözümü</h3>\n<p>Kuzey Amerika'nın zorlu yaz sıcaklarında sporcuların performansını ve sağlığını korumak amacıyla stadyumlarda ve yedek kulübelerinde <strong>Formula 1 soğutma teknolojisinden</strong> esinlenilen mikro klima üniteleri devreye sokuldu. Bu özel sistemler, sadece sporcuların bulunduğu dar alanları hedef alarak ani ısı düşüşü sağlıyor ve aşırı sıcakların getireceği olumsuz etkileri önlüyor. 104 maçlık dev maratonda oyuncuların sağlığı en üst düzey mühendislik çözümleriyle korunuyor.</p>",
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
    "article": "<p>Tüm dünyanın gözünü çevirdiği <strong>2026 FIFA Dünya Kupası</strong> heyecanı, A Millî Futbol Takımımızın ilk grup maçıyla Türkiye'de zirveye ulaşıyor. Kırmızı-beyazlı ekibimiz, D Grubu'ndaki açılış karşılaşmasında <strong>13 Haziran 2026 Cumartesi</strong> günü (TSİ 14 Haziran Pazar sabahı saat 07.00'de) Kanada'nın ikonik stadyumu <strong>BC Place</strong>'te Avustralya ile karşı karşıya gelecek. Dev turnuvada gruptan lider çıkmayı hedefleyen ay-yıldızlılar, hazırlıklarını tamamlayarak maç saatini beklemeye başladı.</p>\n\n<h3>Vancouver Sokaklarında Kırmızı-Beyaz İstilala</h3>\n<p>Maç öncesinde Kanada'nın Vancouver şehri, adeta bir Türk bayrağı denizine dönüştü. <strong>Türkiye Futbol Federasyonu (TFF)</strong> tarafından organize edilen resmî taraftar toplanma noktası <strong>Jonathan Rogers Park</strong>'ta bir araya gelen binlerce Türk taraftar, marşlar ve tezahüratlar eşliğinde büyük bir coşku yarattı. Buradan başlayarak metro istasyonuna kadar süren taraftar yürüyüşü, yerel halkın ve Kanada basınının da büyük ilgisini çekti. Güvenlik güçlerinin eşlik ettiği yürüyüşte, taraftarlar millî takıma olan inançlarını Vancouver sokaklarında haykırdı.</p>\n\n<h3>Dev Mücadele BC Place Stadyumu'nda</h3>\n<p>Karşılaşmanın oynanacağı 54 bin kapasiteli modern <strong>BC Place Stadyumu</strong>'nda tribünlerin tamamen dolması bekleniyor. Kanada, ABD ve Meksika'nın ortaklaşa düzenlediği bu büyük organizasyonda, gurbetçi vatandaşlarımızın da desteğiyle millî takımımızın deplasmanda hissetmeyeceği öngörülüyor. Teknik direktörümüzün sahaya süreceği ilk 11 ve taktik diziliş, spor otoriteleri tarafından merakla tartışılırken; genç yıldızlarımızın enerjisi ve tecrübeli isimlerin liderliği en büyük kozumuz olacak.</p>\n\n<h3>Grup Mücadelesinde Kritik Viraj</h3>\n<p>D Grubu'ndaki avantajlı başlangıç için Avustralya maçı büyük önem taşıyor. Alınacak bir galibiyet gruptan çıkma iddiamızı perçinleyecek. Spor otoriteleri millîlerimizin oyun zekasına güveniyor.</p>",
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
    "article": "<p>Türk sinemasında romantik drama türünün en önemli kilometre taşlarından biri kabul edilen serinin yeni halkası için resmi hazırlıklar başladı. Gazeteci Birsen Altuntaş'ın aktardığı kulis bilgilerine göre, yönetmen koltuğunda yine usta isim <strong>Ömer Faruk Sorak</strong>'ın oturacağı <strong>Aşk Tesadüfleri Sever 3</strong> filminin başrol oyuncuları netleşti. Son dönemdeki başarılı performansıyla adından sıkça söz ettiren güzel oyuncu <strong>Devrim Özkan</strong> ve serinin ilk filmindeki efsanevi rolüyle hafızalara kazınan karizmatik aktör <strong>Mehmet Günsür</strong>, yeni yapımda partner oldu.</p>\n\n<h3>Çekimler Temmuz Ayında Start Alıyor</h3>\n<p>Sinemaseverleri şimdiden heyecanlandıran yapımın çekim takvimi de netlik kazandı. Alınan bilgilere göre filmin çekimleri <strong>7 Temmuz 2026</strong> tarihinde <strong>İstanbul</strong>'da başlayacak. İstanbul'un tarihi ve büyüleyici atmosferinde gerçekleştirilecek çekimlerin ardından ekip, filmin ikinci durağı olan Ankara'ya geçecek. Ankara çekimlerinin ise <strong>7 Ağustos 2026</strong> tarihinde tamamlanması planlanıyor. İstanbul ve Ankara arasındaki bu mekansal geçiş, serinin ilk filmindeki nostaljik dokuyu yeniden canlandıracak.</p>\n\n<h3>Yürekleri Sızlatacak Tesadüfler ve Organ Bağışı Teması</h3>\n<p>Merakla beklenen senaryonun detayları da yavaş yavaş gün yüzüne çıkıyor. Filmde, organ bağışı konusunda toplumsal farkındalık yaratmayı amaçlayan başarılı bir reklamcı ve fotoğraf sanatçısı olan <strong>'Mavi'</strong> karakterine <strong>Devrim Özkan</strong> hayat verecek. Mavi’nin hazırladığı özel bir fotoğraf sergisi sırasında yolu, hayatını sevdiği kadının kalbiyle sürdüren gizemli <strong>'Özgür'</strong> (<strong>Mehmet Günsür</strong>) ile kesişecek. Kalp nakli ve kader temalarının merkezde olacağı bu çarpıcı senaryo, izleyicilere yine duygu dolu anlar yaşatacak.</p>\n\n<h3>Güçlü Kadro ve Flashback Sürprizi</h3>\n<p>Filmin zengin oyuncu kadrosunda sinema dünyasının usta isimlerinden <strong>Ayda Aksel</strong> ve başarılı oyuncu <strong>Serkan Altunorak</strong> da yer alıyor. Serinin hayranlarını en çok sevindiren detay ise ilk filmde hafızalara kazınan <strong>Belçim Bilgin</strong>'in projeye dahil olması oldu. Bilgin, rüya ve flashback sahneleriyle hikayenin duygusal derinliğini artıracak. Yapımcılığını Böcek Film'in üstleneceği ve vizyon tarihi şimdiden <strong>20 Kasım 2026</strong> olarak hedeflenen yapım, sinema salonlarında uzun süre unutulmayacak bir iz bırakmaya hazırlanıyor.</p>",
    "category": "sanat"
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
  },
  {
    "slug": "turkiye-24-yil-sonra-dunya-kupasi-arenasinda-85-milyonun-gozu-kanadadaki-dev-macta",
    "dateId": "2026-06-13T07:00:00+03:00",
    "imageUrl": "/images/news/turkiye-24-yil-sonra-dunya-kupasi-arenasinda-85-milyonun-gozu-kanadadaki-dev-macta.png",
    "title": "24 Yıllık Dünya Kupası Hasreti Bitiyor! İşte Millilerin Avustralya Sınavı",
    "description": "2026 FIFA Dünya Kupası'nda Türkiye, 24 yıl aradan sonra sahneye çıkıyor. Avustralya ile oynanacak kritik D Grubu karşılaşması öncesi tüm Türkiye kilitlendi. İşte dev maçın detayları ve milli heyecan.",
    "keywords": [
      "A Milli Takım",
      "Dünya Kupası 2026",
      "Türkiye Avustralya maçı",
      "Vincenzo Montella",
      "FIFA 2026",
      "milli maç",
      "futbol gündemi"
    ],
    "heading": "Türkiye 24 Yıl Sonra Dünya Kupası Arenasında: 85 Milyonun Gözü Kanada'daki Dev Maçta!",
    "intro": "Türk futbol tarihinin unutulmaz günlerinden biri yaşanıyor. A Milli Futbol Takımı, 24 yıllık uzun bir aranın ardından 2026 FIFA Dünya Kupası'ndaki ilk sınavını Kanada'nın Vancouver şehrinde Avustralya'ya karşı veriyor.",
    "article": "<p>Türkiye, büyük bir coşku ve umutla beklediği <strong>2026 FIFA Dünya Kupası</strong> serüvenine başlıyor. <strong>D Grubu</strong>'ndaki ilk maçında <strong>Avustralya</strong> ile karşı karşıya gelecek olan <strong>A Milli Takım</strong>, 24 yıl sonra yeniden dünyanın en büyük futbol sahnesinde boy gösteriyor. <strong>14 Haziran Pazar</strong> günü, Türkiye saati ile <strong>07.00</strong>'de <strong>Vancouver</strong>'daki <strong>BC Place</strong> stadyumunda başlayacak olan mücadele, milyonlarca futbolseveri ekran başına kilitleyecek.</p><h3>Hazırlıklar Tamamlandı, Montella'nın Gözü Zaferde</h3><p>Teknik direktör <strong>Vincenzo Montella</strong> yönetiminde <strong>Arizona</strong>'daki kamp sürecini başarıyla tamamlayan Ay-Yıldızlılar, ardından <strong>Kanada</strong>'ya geçerek son çalışmalarını <strong>Killarney Park</strong>'ta gerçekleştirdi. Takımın moral seviyesinin oldukça yüksek olduğu gözlenirken, oyuncuların büyük turnuva heyecanını sahaya yansıtmak için sabırsızlandığı belirtildi.</p><h3>Kadrodaki Son Durum ve Strateji</h3><p>Takımın yıldız ismi <strong>Kenan Yıldız</strong>'ın sakatlığı sebebiyle teknik heyetin tedbirli davrandığı biliniyor. <strong>Montella</strong>'nın, maç günü yapılacak kontrollerin ardından genç oyuncu hakkında nihai kararı vereceği açıklandı. Öte yandan, forvet hattında <strong>Kerem Aktürkoğlu</strong>'nun formda görüntüsü, millilerin hücum hattındaki en önemli kozu olarak öne çıkıyor. Millilerin muhtemel oyun planında:</p><ul><li>Savunma disiplininden taviz vermeden hızlı hücumlarla gol aramak</li><li><strong>Hakan Çalhanoğlu</strong>'nun liderliğinde orta saha kontrolünü elinde tutmak</li><li><strong>Avustralya</strong>'nın fiziksel oyununa karşı pas trafiğini hızlandırmak</li></ul><h3>Türkiye'de Maç Heyecanı: Meydanlar Kırmızı-Beyaz</h3><p>Türkiye genelinde milli maç heyecanı adeta bir seferberliğe dönüştü. İstanbul, Ankara ve diğer pek çok ilde belediyeler tarafından dev ekranlar kuruldu. <strong>İstanbul Büyükşehir Belediyesi</strong>; <strong>Eminönü</strong>, <strong>Üsküdar</strong> ve <strong>Maltepe</strong> gibi noktalarda taraftarları bir araya getiriyor. Bazı camilerde sabah namazı sonrasında kurulan ekranlarda maçın takip edilmesi ve vatandaşlara geleneksel ikramlarda bulunulması, bu büyük heyecanın toplumun her kesimini nasıl birleştirdiğinin bir göstergesi oldu.</p><h3>Fatih Terim'den Kritik Değerlendirme</h3><p>Deneyimli teknik direktör <strong>Fatih Terim</strong>, millilerin turnuvadaki şansına dair yaptığı açıklamada, Türkiye'nin potansiyelinin yüksek olduğunu vurgulayarak, <em>'Dünya Kupası'nın Türkiye'ye ihtiyacı var, ülkemiz büyük turnuvaları canlandırır'</em> ifadelerini kullandı. Terim, adım adım ilerlemenin stratejik önemine dikkat çekti.</p><p>Vancouver'da düdüğü <strong>Venezuela</strong> Futbol Federasyonu'ndan <strong>Jesús Valenzuela</strong>'nın çalacağı bu tarihi karşılaşma, Türkiye'nin Dünya Kupası'ndaki yeni sayfasının ilk cümlesi olacak. Tüm gözler, 85 milyonun kalbinin attığı Vancouver'a çevrilmiş durumda.</p>",
    "category": "spor"
  }
];
