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
  }
];
