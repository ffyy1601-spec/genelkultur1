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
  questions: DailyQuestion[];
}

export const dailyQuizzes: DailyQuiz[] = [
  {
    "slug": "cag-acip-cag-kapatan-zafer-istanbulun-fethi",
    "dateId": "2026-05-24",
    "title": "İstanbul'un Fethi: Tarihi Dönüm Noktası ve Fatih Sultan Mehmet | GenelKultur",
    "description": "29 Mayıs 1453'te gerçekleşen İstanbul'un Fethi'nin nedenleri, sonuçları ve dünya tarihi üzerindeki etkileri hakkında kapsamlı bir makale. Fatih Sultan Mehmet'in stratejileri ve Osmanlı İmparatorluğu'nun yükselişi.",
    "keywords": [
      "İstanbul'un Fethi",
      "Fatih Sultan Mehmet",
      "Konstantinopolis'in düşüşü",
      "Osmanlı İmparatorluğu",
      "Bizans İmparatorluğu",
      "1453",
      "Dünya Tarihi",
      "Çağ Açan Olay",
      "Türk Tarihi"
    ],
    "heading": "Çağ Açıp Çağ Kapatan Zafer: İstanbul'un Fethi",
    "intro": "İstanbul, yüzyıllardır medeniyetlerin buluşma noktası, stratejik önemi ve dillere destan güzelliğiyle göz kamaştırmış bir şehir olmuştur. 29 Mayıs 1453 tarihinde genç Osmanlı Padişahı II. Mehmet'in önderliğinde gerçekleşen bu tarihi fetih, sadece bir şehrin el değiştirmesi değil, aynı zamanda dünya tarihinde yeni bir çağın başlangıcı ve köklü değişimlerin tetikleyicisi olmuştur. Bu makalede, İstanbul'un fethinin arka planını, sürecini ve küresel etkilerini inceleyeceğiz.",
    "article": "Kadim çağlardan beri sahip olduğu stratejik konum, ticaret yolları üzerindeki hakimiyeti ve eşsiz doğal güzellikleriyle İstanbul (Konstantinopolis), çağlar boyunca birçok medeniyetin gözdesi olmuştur. Bizans İmparatorluğu'nun başkenti olan bu şehir, Osmanlı Devleti için hem siyasi hem de dini açıdan büyük bir hedefti. Osmanlı'nın yükselişi ve Anadolu'daki hakimiyetinin pekişmesiyle birlikte, boğazların ve dolayısıyla önemli ticaret yollarının Bizans kontrolünde kalması, Osmanlı ilerleyişi için büyük bir engel teşkil ediyordu. Fethin temel nedenleri arasında Bizans'ın Osmanlı toprakları içindeki konumu, şehre olan dini ve siyasi bağlılık ile ticaret yollarının kontrolünü ele geçirme arzusu yer alıyordu.\\n\\nFatih Sultan Mehmet, tahta geçtiği ilk yıllardan itibaren İstanbul'u fethetmeyi kendine birincil hedef olarak belirlemişti. Bu büyük hedef doğrultusunda kapsamlı ve titiz hazırlıklar yapıldı. Şehrin Avrupa yakasında, Boğaz'ın en dar yerinde Rumeli Hisarı inşa ettirilerek Anadolu Hisarı ile birlikte Boğaz'ın kontrolü sağlandı. Macar mühendis Urban'a devasa ",
    "category": "tarih",
    "questions": [
      {
        "id": 1,
        "text": "İstanbul'un Fethi hangi padişah döneminde gerçekleşmiştir?",
        "options": [
          "I. Murat",
          "Yıldırım Bayezid",
          "Fatih Sultan Mehmet",
          "Kanuni Sultan Süleyman"
        ],
        "correctAnswer": 2,
        "explanation": "İstanbul'un Fethi, Osmanlı İmparatorluğu'nun yedinci padişahı II. Mehmet (Fatih Sultan Mehmet) döneminde, 29 Mayıs 1453 tarihinde gerçekleşmiştir."
      },
      {
        "id": 2,
        "text": "İstanbul'un Fethi'nin gerçekleştiği yıl nedir?",
        "options": [
          "1399",
          "1421",
          "1453",
          "1481"
        ],
        "correctAnswer": 2,
        "explanation": "İstanbul, 29 Mayıs 1453 tarihinde Osmanlı ordusu tarafından fethedilmiştir. Bu olay, dünya tarihinde bir dönüm noktası olarak kabul edilir."
      },
      {
        "id": 3,
        "text": "Fatih Sultan Mehmet, kuşatma sırasında gemileri karadan Haliç'e indirmek için hangi stratejiyi kullanmıştır?",
        "options": [
          "Tünel kazma",
          "Mancınık kullanma",
          "Kalaslar üzerinde yürütme",
          "Köprü inşa etme"
        ],
        "correctAnswer": 2,
        "explanation": "Fatih Sultan Mehmet, gemilerin Haliç'e girişini engellemek için gerilen zinciri aşmak amacıyla, gemileri karadan, özel olarak hazırlanan kalaslar üzerinde yağlı kızaklar kullanarak Haliç'e indirmiştir. Bu, kuşatmanın en zekice hamlelerinden biridir."
      },
      {
        "id": 4,
        "text": "Fethin gerçekleştiği sırada Bizans İmparatorluğu'nun başında kim bulunuyordu?",
        "options": [
          "I. Justinianus",
          "XI. Konstantin Paleologos",
          "Teodosius II",
          "Herakleios"
        ],
        "correctAnswer": 1,
        "explanation": "İstanbul'un Fethi sırasında Bizans İmparatorluğu'nun son imparatoru XI. Konstantin Paleologos idi. Fethin son anlarına kadar şehri savunmuştur."
      },
      {
        "id": 5,
        "text": "İstanbul'un Fethi'nin dünya tarihi açısından en önemli sonuçlarından biri nedir?",
        "options": [
          "Haçlı Seferlerinin başlaması",
          "Rönesans'ın sona ermesi",
          "Orta Çağ'ın kapanıp Yeni Çağ'ın başlaması",
          "Reform hareketlerinin hızlanması"
        ],
        "correctAnswer": 2,
        "explanation": "Tarihçiler, İstanbul'un Fethi'ni Orta Çağ'ın sonu ve Yeni Çağ'ın başlangıcı olarak kabul ederler. Bu olay, sadece coğrafi bir fetih değil, aynı zamanda siyasi, kültürel ve ekonomik birçok değişimi beraberinde getirmiştir."
      },
      {
        "id": 6,
        "text": "Fatih Sultan Mehmet'in İstanbul kuşatması için özel olarak döktürdüğü ve surları yıkmada etkili olan büyük toplara ne ad verilir?",
        "options": [
          "Humbara",
          "Şahi",
          "Cebelü",
          "Karatay"
        ],
        "correctAnswer": 1,
        "explanation": "Fatih Sultan Mehmet, kuşatma için Macar mühendis Urban tarafından özel olarak tasarlanan ve üretilen \"Şahi\" adı verilen devasa topları kullanmıştır. Bu toplar, Bizans surlarının yıkılmasında kritik rol oynamıştır."
      },
      {
        "id": 7,
        "text": "İstanbul'un fethinden sonra Osmanlı Devleti'nin başkenti hangi şehirden İstanbul'a taşınmıştır?",
        "options": [
          "Bursa",
          "Edirne",
          "İznik",
          "Konya"
        ],
        "correctAnswer": 1,
        "explanation": "İstanbul'un fethinden önce Osmanlı Devleti'nin başkenti Edirne idi. Fetihten sonra İstanbul, Osmanlı İmparatorluğu'nun yeni başkenti olmuş ve büyük bir gelişim göstermiştir."
      },
      {
        "id": 8,
        "text": "Fatih Sultan Mehmet'in \"Fatih\" unvanını almasında en büyük etken nedir?",
        "options": [
          "Balkanlarda yaptığı fetihler",
          "Anadolu birliğini sağlaması",
          "İstanbul'u fethetmesi",
          "Bilimsel çalışmalara verdiği destek"
        ],
        "correctAnswer": 2,
        "explanation": "\"Fatih\" unvanı, İstanbul'u fethetmesiyle birlikte II. Mehmet'e verilmiştir. Bu unvan, onun bu büyük başarısını simgeler."
      },
      {
        "id": 9,
        "text": "Fethin sonuçlarından biri olarak, Bizans'tan kaçan birçok bilgin ve sanatçının Avrupa'ya gitmesi neyin gelişimine katkı sağlamıştır?",
        "options": [
          "Reform hareketleri",
          "Sanayi Devrimi",
          "Coğrafi keşifler",
          "Rönesans"
        ],
        "correctAnswer": 3,
        "explanation": "İstanbul'un fethinden sonra Bizans'tan kaçan birçok alim ve sanatçı, değerli el yazmalarıyla birlikte İtalya'ya sığınmıştır. Bu durum, Avrupa'da Rönesans'ın başlamasına ve hızlanmasına önemli katkı sağlamıştır."
      },
      {
        "id": 10,
        "text": "Kuşatma sırasında Haliç'in girişini kapatmak için kullanılan zincir hangi iki nokta arasına gerilmişti?",
        "options": [
          "Sarayburnu - Üsküdar",
          "Galata - Haliç",
          "Galata - Eminönü",
          "Topkapı - Ayvansaray"
        ],
        "correctAnswer": 2,
        "explanation": "Haliç'in girişini kapatan ve Osmanlı donanmasının içeri girmesini engelleyen devasa zincir, Galata Kulesi'nin bulunduğu yerden, günümüzdeki Eminönü tarafına doğru gerilmişti."
      },
      {
        "id": 11,
        "text": "İstanbul'un fethinin İslam dünyası açısından önemi nedir?",
        "options": [
          "Halifeliğin Osmanlı'ya geçmesi",
          "Doğu Roma'nın yıkılması",
          "Kudüs'ün fethi",
          "Hicri takvimin kabulü"
        ],
        "correctAnswer": 1,
        "explanation": "İstanbul'un Fethi, bin yılı aşkın süredir varlığını sürdüren Doğu Roma (Bizans) İmparatorluğu'nu tamamen ortadan kaldırmış, bu da İslam dünyasında büyük bir zafer ve prestij kaynağı olmuştur."
      },
      {
        "id": 12,
        "text": "Fatih Sultan Mehmet, şehri fethettikten sonra Ayasofya hakkında nasıl bir karar almıştır?",
        "options": [
          "Yıkılmasını emretmiştir",
          "Kilise olarak kalmasını sağlamıştır",
          "Camii'ye çevrilmesini emretmiştir",
          "Müze olarak düzenlenmesini istemiştir"
        ],
        "correctAnswer": 2,
        "explanation": "Fatih Sultan Mehmet, şehre girdikten sonra Ayasofya'nın camiye çevrilmesini emretmiş ve burada ilk cuma namazını kılmıştır. Bu, şehrin yeni egemenliğinin sembolü olmuştur."
      },
      {
        "id": 13,
        "text": "İstanbul'un Fethi'nin Osmanlı Devleti'ne sağladığı siyasi avantajlardan biri nedir?",
        "options": [
          "Coğrafi keşiflerin başlaması",
          "Memlüklerle ittifak kurması",
          "Boğazlar üzerinde tam kontrol sağlaması",
          "Avrupalı devletlerle barış antlaşmaları imzalaması"
        ],
        "correctAnswer": 2,
        "explanation": "İstanbul'un fethiyle birlikte Osmanlı Devleti, Karadeniz ve Akdeniz arasındaki stratejik boğazlar olan İstanbul ve Çanakkale Boğazları üzerinde tam kontrol sağlamış, bu da hem askeri hem de ticari açıdan büyük avantajlar getirmiştir."
      },
      {
        "id": 14,
        "text": "Kuşatma sırasında, Bizans surlarının aşılması için kullanılan ve özellikle son saldırıda etkili olan askeri birliklere ne ad verilir?",
        "options": [
          "Sipahiler",
          "Akıncılar",
          "Yeniçeriler",
          "Azaplar"
        ],
        "correctAnswer": 2,
        "explanation": "Yeniçeriler, Osmanlı ordusunun elit piyade birlikleriydi ve İstanbul'un kuşatmasında, özellikle son taarruzda surlara ilk tırmanan ve direnci kıran önemli güçlerden biri olmuşlardır."
      },
      {
        "id": 15,
        "text": "Fethin ardından Fatih Sultan Mehmet, şehirdeki halka karşı nasıl bir tutum sergilemiştir?",
        "options": [
          "Halka zorla din değiştirmelerini emretmiştir",
          "Tüm kiliseleri yıkmıştır",
          "Can ve mal güvenliğini sağlamış, din ve inanç özgürlüğü tanımıştır",
          "Şehir halkını sürgün etmiştir"
        ],
        "correctAnswer": 2,
        "explanation": "Fatih Sultan Mehmet, fetihten sonra şehir halkına can ve mal güvenliği güvencesi vermiş, ibadethanelerine dokunulmayacağını ve inanç özgürlüğüne sahip olacaklarını ilan etmiştir. Bu, onun hoşgörülü yönetim anlayışının bir göstergesidir."
      }
    ]
  },
  {
    "slug": "everestin-insanlikla-bulusmasi-hillary-ve-norgayin-zirve-zaferi",
    "dateId": "2026-05-24",
    "title": "Everest'in Zirvesi Fethi: Edmund Hillary ve Tenzing Norgay'ın Tarihi Yolculuğu | GenelKultur",
    "description": "29 Mayıs 1953'te Everest'e ilk tırmanışı gerçekleştiren Edmund Hillary ve Tenzing Norgay'ın hayatları, zorlu yolculukları ve bu tarihi başarının detayları.",
    "keywords": [
      "Everest",
      "Edmund Hillary",
      "Tenzing Norgay",
      "Everest Tırmanışı",
      "İlk Everest Zirvesi",
      "Himalayalar",
      "Dağcılık Tarihi",
      "1953 Everest",
      "Keşifler",
      "Dünya'nın En Yüksek Dağı"
    ],
    "heading": "Everest'in İnsanlıkla Buluşması: Hillary ve Norgay'ın Zirve Zaferi",
    "intro": "İnsanlık tarihi boyunca keşfedilmeyi bekleyen birçok sır vardı. Ancak bazıları, hem fiziksel hem de zihinsel sınırları zorlayan bir meydan okuma sunuyordu. Bu meydan okumalardan en büyüğü belki de, \"Dünya'nın Çatısı\" olarak bilinen Everest Dağı'nın zirvesiydi. Onlarca yıl süren denemelerin ardından, 1953 yılında iki cesur adam, Yeni Zelanda'lı Edmund Hillary ve Nepal'li Şerpa Tenzing Norgay, bu devasa zirveye ulaşarak tarihe geçtiler.",
    "article": "Everest Dağı, 8.848,86 metrelik (önceki ölçüm 8.848 metreydi) yüksekliğiyle dünyanın en yüksek zirvesi olarak asırlardır insanlığın hayallerini süslemiştir. Himalaya Sıradağları'nda yer alan bu devasa kütle, dondurucu soğukları, şiddetli rüzgarları, çığ tehlikeleri ve oksijenin son derece azaldığı \"ölüm bölgesi\" ile tırmanıcılar için aşılmaz bir engel teşkil ediyordu. 20. yüzyılın başlarından itibaren birçok cesur dağcı Everest'e tırmanma girişiminde bulunmuş, ancak ya geri dönmek zorunda kalmış ya da hayatlarını kaybetmişlerdi. Bu denemeler, zirveye giden yolun ne kadar çetin olduğunu acı bir şekilde gösteriyordu.\n\n1953 yılında, Albay John Hunt liderliğindeki büyük bir İngiliz keşif gezisi, Everest'in zirvesine ulaşma hedefiyle yola çıktı. Bu gezide, farklı ülkelerden ve farklı tecrübelere sahip pek çok dağcı ve Şerpa rehber yer alıyordu. Keşif gezisi, zirveye ulaşma şansını artırmak için titiz bir planlama ve kapsamlı lojistik destekle donatılmıştı. Ekip üyeleri, uzun süreli aklimatizasyon (yüksek irtifaya uyum sağlama) süreçlerinden geçti ve zirveye giden rotada ara kamplar kurarak malzeme taşıdılar. Bu süreçte, zirve ekibine dahil olan Yeni Zelanda'lı arıcı ve dağcı Edmund Hillary ile deneyimli Nepal'li Şerpa rehber Tenzing Norgay'ın uyumu ve kararlılığı dikkat çekiyordu.\n\n29 Mayıs 1953 sabahı, Hillary ve Norgay, Güney Zirvesi'nden son hamlelerini yaparak zirveye doğru yola çıktılar. Sırtlarında oksijen tüpleri, üzerlerinde özel tasarlanmış soğuk hava giysileriyle, kar ve buzla kaplı dik yamaçları aşarak ilerlediler. Özellikle \"Hillary Step\" olarak bilinen, yaklaşık 12 metrelik dik buz duvarı, tırmanışın en kritik noktalarından biriydi. Büyük bir azim ve karşılıklı destekle bu engeli de aşan ikili, nihayet saat 11:30'da Everest'in zirvesine ayak bastı. Zirvede sadece 15 dakika kalabildiler; Hillary fotoğraf çekerken, Norgay da tanrılara şükranlarını sunmak için çikolatalar bıraktı. Ardından, insanlık tarihinin en büyük keşif başarılarından birini gerçekleştirdikleri bu yerden güvenli bir şekilde inişe geçtiler.\n\nBu tarihi başarı, tüm dünyada büyük yankı uyandırdı. Edmund Hillary ve Tenzing Norgay, kahramanlar olarak karşılandı ve İngiltere Kraliçesi II. Elizabeth tarafından şövalyelik nişanıyla onurlandırıldılar (Hillary'ye \"Sir\" unvanı verildi). Everest'in fethi, dağcılık sporuna olan ilgiyi artırmakla kalmadı, aynı zamanda insan ruhunun sınır tanımayan azmini ve doğayla mücadeledeki kararlılığını da tüm dünyaya gösterdi. Bu olay, modern keşiflerin ve dayanıklılık sporlarının gelişiminde bir dönüm noktası oldu ve gelecek nesillere ilham kaynağı olmaya devam etti.",
    "category": "bilim",
    "questions": [
      {
        "id": 1,
        "text": "Everest Dağı'nın güncel olarak kabul edilen yüksekliği ne kadardır?",
        "options": [
          "7.848,86 metre",
          "8.848,86 metre",
          "9.848,86 metre",
          "8.548,86 metre"
        ],
        "correctAnswer": 1,
        "explanation": "Everest Dağı'nın 2020 yılında Çin ve Nepal tarafından ortaklaşa yapılan ölçümler sonucunda güncel olarak kabul edilen yüksekliği 8.848,86 metredir."
      },
      {
        "id": 2,
        "text": "Edmund Hillary hangi ülkenin vatandaşıdır?",
        "options": [
          "İngiltere",
          "Avustralya",
          "Yeni Zelanda",
          "Kanada"
        ],
        "correctAnswer": 2,
        "explanation": "Edmund Hillary, Everest'e ilk tırmanan dağcılardan biri olan Yeni Zelanda'lı bir arıcı ve kaşiftir."
      },
      {
        "id": 3,
        "text": "Tenzing Norgay hangi etnik kökene mensuptur?",
        "options": [
          "Tibetli",
          "Nepalli Şerpa",
          "Bhutanki",
          "Hintli"
        ],
        "correctAnswer": 1,
        "explanation": "Tenzing Norgay, Nepal'in Şerpa topluluğuna mensup, deneyimli bir dağcı ve rehberdi."
      },
      {
        "id": 4,
        "text": "Hillary ve Norgay Everest'in zirvesine hangi tarihte ulaşmışlardır?",
        "options": [
          "19 Mayıs 1953",
          "29 Mayıs 1953",
          "9 Haziran 1953",
          "19 Temmuz 1953"
        ],
        "correctAnswer": 1,
        "explanation": "Edmund Hillary ve Tenzing Norgay, Everest'in zirvesine 29 Mayıs 1953 tarihinde ulaşarak tarihi bir başarıya imza atmışlardır."
      },
      {
        "id": 5,
        "text": "1953 Everest keşif gezisinin lideri kimdi?",
        "options": [
          "George Mallory",
          "Andrew Irvine",
          "John Hunt",
          "Reinhold Messner"
        ],
        "correctAnswer": 2,
        "explanation": "1953 İngiliz Everest keşif gezisine Albay John Hunt liderlik etmiştir."
      },
      {
        "id": 6,
        "text": "Everest Dağı'nda oksijenin ciddi oranda azaldığı, tırmanıcılar için çok tehlikeli olan bölgeye ne ad verilir?",
        "options": [
          "Aklimatizasyon Bölgesi",
          "Ölüm Bölgesi",
          "Buz Fırtınası Alanı",
          "Rüzgar Koridoru"
        ],
        "correctAnswer": 1,
        "explanation": "Everest'te 8.000 metrenin üzerindeki irtifa, havadaki oksijenin insan yaşamını sürdürmek için yetersiz olduğu \"Ölüm Bölgesi\" olarak adlandırılır."
      },
      {
        "id": 7,
        "text": "Zirveye yakın, yaklaşık 12 metrelik dik buz duvarına ne isim verilmiştir?",
        "options": [
          "Norgay Geçidi",
          "Güney Koltuğu",
          "Hillary Step",
          "Lhotse Duvarı"
        ],
        "correctAnswer": 2,
        "explanation": "Zirveye giden yolda, Edmund Hillary'nin ilk kez tırmandığı ve adını taşıyan dik buz duvarına \"Hillary Step\" denir."
      },
      {
        "id": 8,
        "text": "Hillary ve Norgay zirvede yaklaşık ne kadar süre kalmışlardır?",
        "options": [
          "5 dakika",
          "15 dakika",
          "30 dakika",
          "1 saat"
        ],
        "correctAnswer": 1,
        "explanation": "Oksijen eksikliği ve dondurucu soğuklar nedeniyle Hillary ve Norgay, Everest'in zirvesinde yaklaşık 15 dakika kalabilmişlerdir."
      },
      {
        "id": 9,
        "text": "Everest'e yapılan ilk başarılı tırmanışta tırmanıcılar hangi ekipmanı kullanmışlardır?",
        "options": [
          "Helikopter",
          "Oksijen tüpleri",
          "Teleskop",
          "Drone"
        ],
        "correctAnswer": 1,
        "explanation": "İlk başarılı tırmanışta, yüksek irtifadaki oksijen eksikliğiyle başa çıkmak için oksijen tüpleri hayati önem taşımıştır."
      },
      {
        "id": 10,
        "text": "Tenzing Norgay zirvede ne bırakmıştır?",
        "options": [
          "Bayrak",
          "Bir parça kaya",
          "Çikolata",
          "Küçük bir heykel"
        ],
        "correctAnswer": 2,
        "explanation": "Tenzing Norgay, inancına göre tanrılara şükranlarını sunmak amacıyla zirvede çikolatalar bırakmıştır."
      },
      {
        "id": 11,
        "text": "Everest Dağı hangi sıradağlar sisteminin bir parçasıdır?",
        "options": [
          "Alp Dağları",
          "Rocky Dağları",
          "And Dağları",
          "Himalayalar"
        ],
        "correctAnswer": 3,
        "explanation": "Everest Dağı, Asya kıtasında, Nepal ve Çin (Tibet) sınırında yer alan Himalayalar sıradağlarının bir parçasıdır."
      },
      {
        "id": 12,
        "text": "Hillary'ye Everest'i fethettiği için hangi unvan verilmiştir?",
        "options": [
          "Lord",
          "Baron",
          "Sir",
          "Kont"
        ],
        "correctAnswer": 2,
        "explanation": "İngiltere Kraliçesi II. Elizabeth tarafından Edmund Hillary'ye, bu büyük başarısından dolayı \"Sir\" unvanı verilerek şövalye ilan edilmiştir."
      },
      {
        "id": 13,
        "text": "Tırmanıcıların yüksek irtifaya uyum sağlamak için geçirdiği sürece ne denir?",
        "options": [
          "Dekompresyon",
          "Aklimatizasyon",
          "Rehidrasyon",
          "Konsolidasyon"
        ],
        "correctAnswer": 1,
        "explanation": "Yüksek irtifadaki oksijen azlığına vücudun alışması sürecine \"aklimatizasyon\" denir. Bu, başarılı tırmanışlar için kritik öneme sahiptir."
      },
      {
        "id": 14,
        "text": "1953 keşif gezisinde kullanılan ana rota hangisiydi?",
        "options": [
          "Kuzey Rotası",
          "Batı Sırtı",
          "Güney Kolu",
          "Doğu Yüzü"
        ],
        "correctAnswer": 2,
        "explanation": "Hillary ve Norgay, Everest'in zirvesine ulaşmak için Güney Kolu (Güney Zirvesi üzerinden) rotasını kullanmışlardır."
      },
      {
        "id": 15,
        "text": "Everest'in zirvesine ulaşan bu ilk başarılı tırmanış, dağcılık tarihinde ne gibi bir etki yaratmıştır?",
        "options": [
          "Dağcılık sporuna olan ilgiyi azaltmıştır.",
          "Modern dağcılık ve keşif sporlarının gelişiminde dönüm noktası olmuştur.",
          "Sadece profesyonel dağcıların ilgisini çekmiştir.",
          "Dağcılık ekipmanlarının gelişimini yavaşlatmıştır."
        ],
        "correctAnswer": 1,
        "explanation": "Everest'in fethi, dağcılık sporuna olan ilgiyi artırmış, modern dağcılık tekniklerinin ve ekipmanlarının gelişimine katkıda bulunmuş ve insan ruhunun sınır tanımayan azmini tüm dünyaya göstermiştir."
      }
    ]
  },
  {
    "slug": "24-mayis-1844-dunyayi-degistiren-ilk-telgraf-mesaji",
    "dateId": "2026-05-24",
    "title": "İlk Telgraf Mesajı: Samuel Morse ve İletişim Devrimi | GenelKultur",
    "description": "24 Mayıs 1844'te Samuel Morse'un gönderdiği ilk telgraf mesajı 'What hath God wrought', iletişimin tarihini nasıl değiştirdi? Morse alfabesi ve telgrafın dünyadaki etkileri.",
    "keywords": [
      "Samuel Morse",
      "telgraf",
      "ilk telgraf mesajı",
      "1844 telgraf",
      "iletişim devrimi",
      "Morse alfabesi",
      "elektrikli telgraf",
      "telgrafın icadı",
      "tarihte bugün",
      "bilim tarihi"
    ],
    "heading": "24 Mayıs 1844: Dünyayı Değiştiren İlk Telgraf Mesajı",
    "intro": "Bugün, bir butona basarak dünyanın öbür ucuna saniyeler içinde mesaj göndermek, video görüşmesi yapmak o kadar sıradan ki, iletişimin ne kadar inanılmaz bir hızla geliştiğini unutuyoruz. Peki ya bu hızın temelleri ne zaman atıldı? Tam 180 yıl önce, 24 Mayıs 1844'te atıldı. O gün, 'What hath God wrought' (Tanrı neler yarattı/yaptı!) mesajıyla ilk elektrikli telgraf hattı resmi olarak açıldı ve insanlık tarihinde yepyeni bir iletişim çağının kapıları aralandı. Bu olay, Samuel Morse'un azmi ve dehasının bir ürünüydü ve dünyayı kökten değiştirecekti.",
    "article": "19. yüzyılın başlarında, bilgi paylaşımı ve haberleşme oldukça yavaştı. Mektuplar at sırtında veya gemilerle taşınır, haberlerin ulaşması haftalar, hatta aylar sürebilirdi. İşte bu zorlu dönemde, Amerikalı bir ressam olan Samuel Finley Breese Morse, tesadüfen duyduğu bir konuşmadan ilham alarak iletişimi kökten değiştirecek bir fikir geliştirdi. Avrupa'dan dönerken gemide elektrik ve elektromanyetizma üzerine yapılan bir sohbet, Morse'u elektrik akımıyla anında mesaj gönderme olasılığını düşünmeye itti. Yıllar süren deneyler, maddi sıkıntılar ve başarısızlıklar onu yıldırmadı; aksine, bu dehanın azmi, modern iletişmin temelini atacaktı.\n\nMors alfabesi, telgrafın başarısının anahtarıydı. Elektrik akımının kısa ve uzun darbelerini, yani noktaları ve çizgileri kullanarak harfleri ve sayıları temsil eden bu sistem, evrensel bir iletişim dili haline geldi. Morse, arkadaşı Alfred Vail ile birlikte bu alfabeyi mükemmelleştirdi ve telgraf cihazını basitleştirdi. Bu cihaz, bir anahtar yardımıyla elektrik sinyallerini kablo üzerinden iletir, alıcı uçta ise bu sinyaller bir kalemle kağıt şeride yazılırdı. Bu basit ama devrim niteliğindeki icat, bilginin fiziksel sınırlar olmaksızın anında iletilmesinin kapılarını araladı ve 'hızlı iletişim' kavramını yeniden tanımladı.\n\n24 Mayıs 1844 tarihi, telgrafın resmi doğum günü olarak kabul edilir. O gün, Washington D.C.'deki Yüksek Mahkeme Binası'ndan Baltimore'daki B&O Demiryolu istasyonuna çekilen ilk uzun menzilli elektrikli telgraf hattı üzerinden, Samuel Morse bizzat ilk mesajı gönderdi. İncil'den bir alıntı olan 'What hath God wrought!' (Tanrı neler yarattı/yaptı!) cümlesi, saniyeler içinde 60 kilometrelik mesafeyi katederek tarihe geçti. Bu an, sadece bir teknolojik başarının değil, aynı zamanda insanlığın bilgiye erişim ve etkileşim biçiminde köklü bir değişimin başlangıcıydı. Telgraf, kısa sürede tüm dünyaya yayıldı, ticareti hızlandırdı, savaşların seyrini değiştirdi, gazeteciliği dönüştürdü ve uluslararası ilişkilerde yeni bir sayfa açtı. Modern internet ve akıllı telefonlarımızın temelinde yatan anlık iletişmin ilk kıvılcımı, tam da o gün çakılmıştı.",
    "category": "bilim",
    "questions": [
      {
        "id": 1,
        "text": "Elektrikli telgraf ile ilk mesajın gönderildiği tarih nedir?",
        "options": [
          "24 Mayıs 1844",
          "12 Nisan 1861",
          "3 Mart 1843",
          "29 Ekim 1923"
        ],
        "correctAnswer": 0,
        "explanation": "Samuel Morse, ilk elektrikli telgraf mesajını 24 Mayıs 1844 tarihinde Washington D.C. ile Baltimore arasında göndermiştir."
      },
      {
        "id": 2,
        "text": "Telgrafın mucidi Samuel Morse, icadından önce hangi mesleği yapmaktaydı?",
        "options": [
          "Doktor",
          "Avukat",
          "Ressam",
          "Mimar"
        ],
        "correctAnswer": 2,
        "explanation": "Samuel Morse, telgrafı icat etmeden önce başarılı bir portre ressamıydı."
      },
      {
        "id": 3,
        "text": "Samuel Morse'un Washington'dan Baltimore'a gönderdiği ilk telgraf mesajının metni nedir?",
        "options": [
          "Merhaba Dünya!",
          "Tanrı neler yarattı!",
          "Bugün yeni bir çağ başlıyor.",
          "Haberiniz var mı?"
        ],
        "correctAnswer": 1,
        "explanation": "İlk telgraf mesajı, İncil'den bir alıntı olan 'What hath God wrought!' (Tanrı neler yarattı!) cümlesidir."
      },
      {
        "id": 4,
        "text": "İlk elektrikli telgraf hattı hangi iki şehir arasında kurulmuştur?",
        "options": [
          "New York - Boston",
          "Londra - Paris",
          "Washington D.C. - Baltimore",
          "Roma - Venedik"
        ],
        "correctAnswer": 2,
        "explanation": "Samuel Morse'un ilk telgraf hattı, ABD'nin başkenti Washington D.C. ile Maryland eyaletindeki Baltimore şehri arasında kurulmuştur."
      },
      {
        "id": 5,
        "text": "Elektrikli telgraf hangi fiziksel prensibe dayanarak çalışır?",
        "options": [
          "Ses dalgaları",
          "Işık hızı",
          "Elektromanyetizma",
          "Radyo dalgaları"
        ],
        "correctAnswer": 2,
        "explanation": "Telgraf, elektrik akımının oluşturduğu elektromanyetik sinyallerin kablolar aracılığıyla iletilmesi prensibine dayanır."
      },
      {
        "id": 6,
        "text": "Morse alfabesi, harfleri ve sayıları ne kullanarak temsil eder?",
        "options": [
          "Renkler ve şekiller",
          "Kısa ve uzun sesler (noktalar ve çizgiler)",
          "Sayılar ve semboller",
          "Görsel desenler"
        ],
        "correctAnswer": 1,
        "explanation": "Morse alfabesi, noktalar (kısa darbeler) ve çizgiler (uzun darbeler) kombinasyonlarını kullanarak alfanümerik karakterleri kodlar."
      },
      {
        "id": 7,
        "text": "Telgrafın icadı, iletişimi hangi açıdan en çok etkilemiştir?",
        "options": [
          "Mesajların kişiselliği",
          "İletişimin maliyeti",
          "Bilginin iletim hızı",
          "Mesajların gizliliği"
        ],
        "correctAnswer": 2,
        "explanation": "Telgraf, bilginin fiziksel sınırlar olmaksızın anında iletilmesini sağlayarak iletişim hızında devrim yaratmıştır."
      },
      {
        "id": 8,
        "text": "Samuel Morse'a elektrikle iletişim fikrini veren olay nedir?",
        "options": [
          "Bir rüya görmesi",
          "Gazete haberi okuması",
          "Avrupa'dan dönerken gemideki bir sohbet",
          "Bir bilim fuarı gezisi"
        ],
        "correctAnswer": 2,
        "explanation": "Morse, Avrupa'dan Amerika'ya dönerken gemide elektrik ve elektromanyetizma üzerine yapılan bir konuşmadan etkilenerek telgraf fikrini geliştirmeye başlamıştır."
      },
      {
        "id": 9,
        "text": "Samuel Morse'a Mors alfabesini geliştirme sürecinde yardımcı olan kişi kimdir?",
        "options": [
          "Alexander Graham Bell",
          "Nikola Tesla",
          "Alfred Vail",
          "Thomas Edison"
        ],
        "correctAnswer": 2,
        "explanation": "Alfred Vail, Morse'un tasarımlarını geliştirerek Mors alfabesinin ve telgraf cihazının pratikleşmesine önemli katkılarda bulunmuştur."
      },
      {
        "id": 10,
        "text": "Telgrafın yaygınlaşması, 19. yüzyılda hangi alanda büyük bir dönüşüm yaratmıştır?",
        "options": [
          "Tarım teknikleri",
          "Seyahat alışkanlıkları",
          "Uluslararası ticaret ve gazetecilik",
          "Sanat akımları"
        ],
        "correctAnswer": 2,
        "explanation": "Telgraf, haberlerin hızla yayılmasını sağlayarak gazeteciliği dönüştürmüş, ticaret ve finans işlemlerini hızlandırarak küresel ekonomiyi etkilemiştir."
      },
      {
        "id": 11,
        "text": "Telgraf, 19. yüzyıldaki savaşlarda hangi amaçla kullanılmıştır?",
        "options": [
          "Asker eğlencesi",
          "Haberleşme ve koordinasyon",
          "Silah üretimi",
          "Tıbbi yardım"
        ],
        "correctAnswer": 1,
        "explanation": "Telgraf, komutanların savaş alanındaki birliklerle hızlıca iletişim kurmasını sağlayarak stratejik koordinasyonun ve bilgi akışının hızlanmasına yardımcı olmuştur."
      },
      {
        "id": 12,
        "text": "Telgraf, modern iletişim teknolojilerinin gelişimine en çok hangi yönüyle katkıda bulunmuştur?",
        "options": [
          "Sesli iletişim",
          "Kablosuz teknoloji",
          "Anlık bilgi aktarımı prensibi",
          "Görsel veri iletimi"
        ],
        "correctAnswer": 2,
        "explanation": "Telgraf, bilginin uzun mesafeler üzerinden neredeyse anında iletilmesi fikrini ve teknolojisini kanıtlamış, modern internet ve mobil iletişimin temelini atmıştır."
      },
      {
        "id": 13,
        "text": "Telgraf, finans piyasalarını nasıl etkilemiştir?",
        "options": [
          "Faaliyetlerini yavaşlatmıştır",
          "Sadece yerel piyasalara odaklanmasına neden olmuştur",
          "Uzak mesafelerden hisse senedi alım satımını hızlandırmıştır",
          "Para transferini imkansız hale getirmiştir"
        ],
        "correctAnswer": 2,
        "explanation": "Telgraf sayesinde finansal bilgiler, özellikle hisse senedi fiyatları, hızla iletilerek ulusal ve uluslararası piyasaların entegrasyonuna ve hızlanmasına olanak sağlamıştır."
      },
      {
        "id": 14,
        "text": "Telgrafın 'elektrikli' olarak adlandırılmasının temel sebebi nedir?",
        "options": [
          "Elektrik üretebilmesi",
          "Elektrikli lambalarla aydınlatılması",
          "Elektrik akımı kullanarak sinyal göndermesi",
          "Elektrik mühendisleri tarafından icat edilmesi"
        ],
        "correctAnswer": 2,
        "explanation": "Telgraf, mesajları iletmek için elektrik akımının oluşturduğu sinyalleri (elektromanyetik darbeleri) kullanır, bu da onu 'elektrikli' yapar."
      },
      {
        "id": 15,
        "text": "Telgrafın icadı ve ilk kullanımı hangi yüzyıla denk gelmektedir?",
        "options": [
          "18. yüzyıl",
          "19. yüzyıl",
          "20. yüzyıl",
          "17. yüzyıl"
        ],
        "correctAnswer": 1,
        "explanation": "Samuel Morse'un ilk telgraf mesajını gönderdiği tarih olan 1844, 19. yüzyılın ortalarına denk gelmektedir."
      }
    ]
  },
  {
    "slug": "gokyuzu-ile-bulusan-mimarlik-harikasi-golden-gate-koprusu",
    "dateId": "2026-05-24",
    "title": "Golden Gate Köprüsü: İnşası, Tarihi ve Mimari Harikası | GenelKultur",
    "description": "San Francisco Körfezi'nin ikonik sembolü Golden Gate Köprüsü'nün inşası, zorlukları, mimari özellikleri ve dünya üzerindeki etkisini keşfedin.",
    "keywords": [
      "Golden Gate Köprüsü",
      "San Francisco",
      "köprü mimarisi",
      "inşaat tarihi",
      "mühendislik harikası",
      "Joseph Strauss",
      "askı köprüsü",
      "çelik köprü",
      "International Orange",
      "sismik tasarım"
    ],
    "heading": "Gökyüzü ile Buluşan Mimarlık Harikası: Golden Gate Köprüsü",
    "intro": "Dünya üzerinde sembolleşmiş yapıların başında gelen Golden Gate Köprüsü, sadece bir ulaşım aracı değil, aynı zamanda insan azminin, mühendislik dehasının ve estetik anlayışının eşsiz bir göstergesidir. San Francisco Körfezi'nin çalkantılı suları üzerinde yükselen bu kırmızımsı turuncu dev, sisli manzaralarıyla adeta bir sanat eseri gibi durur ve her yıl milyonlarca ziyaretçiyi kendine hayran bırakır. Ancak bu ikonik yapının arkasında, onyıllar süren planlama, zorlu inşaat süreçleri ve döneminin en ileri mühendislik bilgisi yatmaktadır.",
    "article": "San Francisco ve Marin County arasında köprü kurma fikri, 19. yüzyılın sonlarına kadar uzansa da, bu vizyonu gerçeğe dönüştürmek için cesur bir mühendislik projesi gerekiyordu. Pasifik Okyanusu'nun hırçın akıntıları, sürekli değişen hava koşulları ve körfezin derinliği, birçok mühendisi bu projenin imkansız olduğuna ikna etmişti. Hatta \"Altın Kapı\" adı verilen boğazın geçilemez olduğu düşünülüyordu. Ancak Baş Mühendis Joseph Strauss'un öncülüğünde bir ekip, bu devasa zorluğun üstesinden gelmeye kararlıydı.\n\n1933 yılında başlayan inşaat süreci, birçok yeniliği ve dönemin en yüksek güvenlik önlemlerini içeriyordu. En büyük zorluklardan biri, okyanus akıntılarının çok güçlü olduğu, 30 metreden daha derin sulara kule temellerini yerleştirmekti. İşçilerin güvenliği de büyük bir öncelikti; inşaat alanının altına yerleştirilen dev güvenlik ağları sayesinde 19 işçinin hayatı kurtarılmış ve bu, o zamana kadar görülmemiş bir uygulama olarak tarihe geçmiştir. Köprünün benzersiz rengi olan \"International Orange\" (Uluslararası Turuncu) ise sadece estetik değil, aynı zamanda sisli havalarda gemiler için görünürlüğü artırma amacı taşıyordu.\n\nKöprünün tasarımı, askı köprü teknolojisinde bir zirveyi temsil ediyordu. Joseph Strauss, projenin başındaki isim olsa da, köprünün mimari ve yapısal tasarımındaki anahtar rollerden biri, köprünün estetik güzelliğini ve mühendislik doğruluğunu sağlayan Charles Alton Ellis ve Leon Moisseiff'e aittir. Moisseiff'in askı köprüler üzerine yaptığı çalışmalar, bu tip yapıların esneklik ve rüzgar direnci konusundaki anlayışını kökten değiştirmiştir. Bu dehaların birleşimiyle, rüzgarın ve sismik hareketlerin etkilerine dayanabilecek, zarif ve güçlü bir yapı ortaya çıktı.\n\n1937'de tamamlandığında, Golden Gate Köprüsü 4.200 fit (yaklaşık 1.280 metre) ana açıklığıyla dünyanın en uzun askı köprüsü unvanını kazandı ve bu unvanı 1964'e kadar korudu. Toplam maliyeti o dönemin parasıyla yaklaşık 35 milyon doları bulan bu devasa yapı, Amerikan işçiliğinin ve yenilikçiliğinin bir simgesi haline geldi. Açılış günü, San Francisco halkı tarafından büyük bir coşkuyla karşılandı; on binlerce insan yürüyerek veya araçlarıyla köprüden geçti ve bu an, kentin tarihinde unutulmaz bir yere sahip oldu.\n\nBugün Golden Gate Köprüsü, sadece bir ulaşım bağlantısı olmanın ötesinde, San Francisco'nun ve hatta Amerika Birleşik Devletleri'nin en tanınmış simgelerinden biridir. Filmlere, kartpostallara ve sayısız esere konu olmuş, mühendislik harikası statüsünü koruyarak varlığını sürdürmektedir. Aynı zamanda, sismik aktivitenin yoğun olduğu bir bölgede, sürekli bakım ve güçlendirme çalışmalarıyla geleceğe taşınmakta, nesiller boyu insanları kendine hayran bırakmaya devam etmektedir.",
    "category": "bilim",
    "questions": [
      {
        "id": 1,
        "text": "Golden Gate Köprüsü hangi iki yerleşim yerini birbirine bağlar?",
        "options": [
          "Los Angeles ve San Diego",
          "San Francisco ve Marin County",
          "New York ve New Jersey",
          "Seattle ve Tacoma"
        ],
        "correctAnswer": 1,
        "explanation": "Golden Gate Köprüsü, San Francisco şehri ile kuzeyindeki Marin County'yi birbirine bağlayarak Pasifik Okyanusu girişini kapsar."
      },
      {
        "id": 2,
        "text": "Köprünün resmi açılış tarihi hangi yıldır?",
        "options": [
          "1927",
          "1937",
          "1947",
          "1957"
        ],
        "correctAnswer": 1,
        "explanation": "Golden Gate Köprüsü, 27 Mayıs 1937 tarihinde törenle araç trafiğine açılmıştır."
      },
      {
        "id": 3,
        "text": "Köprünün inşasındaki baş mühendis kimdir?",
        "options": [
          "Gustave Eiffel",
          "John Roebling",
          "Joseph Strauss",
          "Isambard Kingdom Brunel"
        ],
        "correctAnswer": 2,
        "explanation": "Golden Gate Köprüsü'nün inşasındaki baş mühendis, projenin vizyonunu gerçeğe dönüştüren Joseph Strauss'tur."
      },
      {
        "id": 4,
        "text": "Golden Gate Köprüsü'nün inşası sırasında işçilerin güvenliğini artırmak için kullanılan önemli bir yenilik nedir?",
        "options": [
          "Kask takma zorunluluğu",
          "Otomatik vinç sistemleri",
          "İnşaat alanının altına yerleştirilen güvenlik ağları",
          "Özel dalgıç elbiseleri"
        ],
        "correctAnswer": 2,
        "explanation": "Köprü inşaatında, işçilerin düşmesini engellemek ve hayatlarını kurtarmak amacıyla inşaat alanının altına dev güvenlik ağları yerleştirilmiştir. Bu sayede 19 işçinin hayatı kurtarılmıştır."
      },
      {
        "id": 5,
        "text": "Köprünün karakteristik renginin adı nedir?",
        "options": [
          "Pasifik Mavisi",
          "Sis Grisi",
          "Uluslararası Turuncu (International Orange)",
          "Körfez Yeşili"
        ],
        "correctAnswer": 2,
        "explanation": "Köprünün kendine özgü rengi \"International Orange\" (Uluslararası Turuncu) olarak bilinir. Bu renk hem estetik bir amaca hizmet eder hem de sisli havalarda gemiler için görünürlüğü artırır."
      },
      {
        "id": 6,
        "text": "Golden Gate Köprüsü tamamlandığında hangi unvanı almıştır?",
        "options": [
          "Dünyanın en yüksek köprüsü",
          "Dünyanın en uzun askı köprüsü",
          "Dünyanın en geniş köprüsü",
          "Dünyanın en pahalı köprüsü"
        ],
        "correctAnswer": 1,
        "explanation": "Köprü 1937'de tamamlandığında, ana açıklığı 4.200 fit (yaklaşık 1.280 metre) ile dünyanın en uzun askı köprüsü unvanını kazanmıştır."
      },
      {
        "id": 7,
        "text": "Köprünün ana kulelerinin temelleri kaç metreden daha derin sulara yerleştirilmiştir?",
        "options": [
          "10 metreden",
          "20 metreden",
          "30 metreden",
          "40 metreden"
        ],
        "correctAnswer": 2,
        "explanation": "İnşaattaki en büyük zorluklardan biri, okyanus akıntılarının çok güçlü olduğu, 30 metreden daha derin sulara kule temellerini yerleştirmekti."
      },
      {
        "id": 8,
        "text": "Golden Gate Köprüsü'nün askı köprü tasarımının estetik ve yapısal doğruluğuna katkıda bulunan önemli mühendislerden biri kimdir?",
        "options": [
          "Nikola Tesla",
          "Wright Kardeşler",
          "Charles Alton Ellis",
          "Thomas Edison"
        ],
        "correctAnswer": 2,
        "explanation": "Joseph Strauss baş mühendis olsa da, köprünün mimari ve yapısal tasarımındaki anahtar rollerden biri, köprünün estetik güzelliğini ve mühendislik doğruluğunu sağlayan Charles Alton Ellis'e aittir."
      },
      {
        "id": 9,
        "text": "Köprünün yapım maliyeti yaklaşık olarak ne kadardı?",
        "options": [
          "15 milyon dolar",
          "35 milyon dolar",
          "75 milyon dolar",
          "100 milyon dolar"
        ],
        "correctAnswer": 1,
        "explanation": "Golden Gate Köprüsü'nün toplam maliyeti o dönemin parasıyla yaklaşık 35 milyon dolardı."
      },
      {
        "id": 10,
        "text": "Köprünün inşasına hangi yıl başlanmıştır?",
        "options": [
          "1929",
          "1931",
          "1933",
          "1935"
        ],
        "correctAnswer": 2,
        "explanation": "Golden Gate Köprüsü'nün inşaat süreci 1933 yılında başlamıştır."
      },
      {
        "id": 11,
        "text": "Köprünün tamamlanmasıyla elde ettiği \"dünyanın en uzun askı köprüsü\" unvanını kaç yılına kadar korumuştur?",
        "options": [
          "1954",
          "1964",
          "1974",
          "1984"
        ],
        "correctAnswer": 1,
        "explanation": "Golden Gate Köprüsü, 1937'de kazandığı \"dünyanın en uzun askı köprüsü\" unvanını 1964 yılına kadar korumuştur."
      },
      {
        "id": 12,
        "text": "Köprü, bulunduğu bölgedeki hangi doğal riske karşı dayanıklı olacak şekilde tasarlanmıştır?",
        "options": [
          "Kasırgalar",
          "Tsunamiler",
          "Sismik hareketler (Depremler)",
          "Volkanik patlamalar"
        ],
        "correctAnswer": 2,
        "explanation": "San Francisco bölgesi yüksek sismik aktiviteye sahip olduğu için, Golden Gate Köprüsü sismik hareketlere (depremlere) karşı dayanıklı olacak şekilde özel olarak tasarlanmıştır ve sürekli güçlendirme çalışmaları yapılmaktadır."
      },
      {
        "id": 13,
        "text": "Köprü, inşası sırasında kurtarılan işçilerin sayısı ile hangi özelliğiyle anılır?",
        "options": [
          "En hızlı inşa edilen köprü",
          "En çok işçi çalıştıran köprü",
          "En güvenli inşaat uygulamaları sergileyen köprü",
          "En az maliyetli köprü"
        ],
        "correctAnswer": 2,
        "explanation": "Güvenlik ağları sayesinde 19 işçinin hayatının kurtarılması, köprünün o zamana kadar görülmemiş güvenlik uygulamaları sergileyen bir inşaat projesi olarak anılmasına neden olmuştur."
      },
      {
        "id": 14,
        "text": "Golden Gate Köprüsü'nün tasarımında esneklik ve rüzgar direnci konusunda önemli çalışmalar yapan diğer bir mühendis kimdir?",
        "options": [
          "Thomas Telford",
          "Robert Maillart",
          "Leon Moisseiff",
          "Ferdinand de Lesseps"
        ],
        "correctAnswer": 2,
        "explanation": "Askı köprülerin esneklik ve rüzgar direnci konusundaki anlayışını değiştiren, köprünün yapısal tasarımında kilit rol oynayan mühendislerden biri Leon Moisseiff'tir."
      },
      {
        "id": 15,
        "text": "Köprünün ana açıklığı yaklaşık olarak kaç metredir?",
        "options": [
          "850 metre",
          "1000 metre",
          "1280 metre",
          "1500 metre"
        ],
        "correctAnswer": 2,
        "explanation": "Golden Gate Köprüsü'nün ana açıklığı 4.200 fit yani yaklaşık 1.280 metredir."
      }
    ]
  }
];
