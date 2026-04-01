import type { CategoryData } from './tarih';

export const bilimSorulari: CategoryData = {
  kolay: [
    { id: 201, text: "İnsan vücudunun büyük bir kısmını oluşturan madde hangisidir?", options: ["Kan", "Su", "Kemik", "Kas"], correctAnswer: 1 },
    { id: 202, text: "Dünyaya en yakın yıldız hangisidir?", options: ["Sirius", "Kutup Yıldızı", "Güneş", "Proxima Centauri"], correctAnswer: 2 },
    { id: 203, text: "Havada en çok bulunan gaz hangisidir?", options: ["Oksijen", "Azot", "Karbondioksit", "Neon"], correctAnswer: 1 },
    { id: 204, text: "Işık enerjisini sese dönüştüren organımız hangisidir? (Soru şaşırtması: Görme organımızdır)", options: ["Kulak", "Göz", "Deri", "Burun"], correctAnswer: 1 }
  ],
  orta: [
    { id: 205, text: "DNA'nın açılımı nedir?", options: ["Deoksiribo Nükleik Asit", "Dinamik Nükleer Atom", "Direkt Nükleik Asit", "Deoksiros Asit"], correctAnswer: 0 },
    { id: 206, text: "Elektrik ampulünü kim icat etmiştir?", options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], correctAnswer: 1 },
    { id: 207, text: "Periyodik tablonun ilk elementi hangisidir?", options: ["Oksijen", "Helyum", "Lityum", "Hidrojen"], correctAnswer: 3 },
    { id: 208, text: "En sert doğal mineral hangisidir?", options: ["Altın", "Grafit", "Elmas", "Kuvars"], correctAnswer: 2 },
    { id: 209, text: "Sıcaklığı ölçmek için kullanılan aletin adı nedir?", options: ["Barometre", "Termometre", "Higrometre", "Anemometre"], correctAnswer: 1 }
  ],
  zor: [
    { id: 210, text: "İzafiyet (Görelilik) Teorisi kime aittir?", options: ["Isaac Newton", "Stephen Hawking", "Albert Einstein", "Niels Bohr"], correctAnswer: 2 },
    { id: 211, text: "Kuantum mekaniğinin belirsizlik ilkesini kim ortaya atmıştır?", options: ["Werner Heisenberg", "Erwin Schrödinger", "Max Planck", "Marie Curie"], correctAnswer: 0 },
    { id: 212, text: "İnsan vücudundaki en küçük kemik hangisidir?", options: ["Çekiç", "Örs", "Üzengi", "Kaval"], correctAnswer: 2 },
    { id: 213, text: "Işığın boşluktaki hızı yaklaşık ne kadardır?", options: ["300.000 km/s", "150.000 km/s", "1.000 km/s", "Işık hızında"], correctAnswer: 0 }
  ]
};
