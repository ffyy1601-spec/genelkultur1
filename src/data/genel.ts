import type { CategoryData } from './tarih';

export const genelSorulari: CategoryData = {
  kolay: [
    { id: 101, text: "Hangi gezegene 'Kızıl Gezegen' denir?", options: ["Venüs", "Jüpiter", "Mars", "Satürn"], correctAnswer: 2 },
    { id: 102, text: "Türkiye'nin başkenti neresidir?", options: ["Ankara", "İstanbul", "İzmir", "Bursa"], correctAnswer: 0 },
    { id: 103, text: "Su H2O ise, O 'Oksijen'dir. H nedir?", options: ["Helyum", "Hidrojen", "Hafniyum", "Holmiyum"], correctAnswer: 1 },
    { id: 104, text: "Dünyanın en yüksek dağı hangisidir?", options: ["Ağrı Dağı", "K2", "Everest", "Alpler"], correctAnswer: 2 }
  ],
  orta: [
    { id: 105, text: "En fazla Oscar kazanan film hangisidir?", options: ["Titanic", "Yüzüklerin Efendisi", "Ben-Hur", "Hepsi (Üçü de)"], correctAnswer: 3 },
    { id: 106, text: "Dünyada en çok konuşulan dil hangisidir?", options: ["İngilizce", "Mandarin (Çince)", "İspanyolca", "Hintçe"], correctAnswer: 0 },
    { id: 107, text: "Mona Lisa tablosu hangi müzede sergilenmektedir?", options: ["British Museum", "Prado Müzesi", "Louvre Müzesi", "Uffizi Galerisi"], correctAnswer: 2 },
    { id: 108, text: "Hangi ülke Asya ve Avrupa kıtalarında yer alır?", options: ["Mısır", "Rusya", "Grezya", "Tayland"], correctAnswer: 1 },
    { id: 109, text: "İlk bilgisayar programcısı kim kabul edilir?", options: ["Alan Turing", "Ada Lovelace", "Charles Babbage", "Bill Gates"], correctAnswer: 1 }
  ],
  zor: [
    { id: 110, text: "Hangi canlının 3 kalbi vardır?", options: ["Ahtapot", "Karınca", "Köpek Balığı", "Yengeç"], correctAnswer: 0 },
    { id: 111, text: "Kemanın atası olarak kabul edilen enstrüman nedir?", options: ["Rabaab (Rebab)", "Ud", "Kanun", "Zurna"], correctAnswer: 0 },
    { id: 112, text: "Satranç oyununda hangi taş sadece çapraz gider?", options: ["Kale", "At", "Fil", "Vezir"], correctAnswer: 2 },
    { id: 113, text: "Hangi kimyasal elementin sembolü 'W' dir?", options: ["Wolfram (Tungsten)", "Wasser (Su)", "Radon", "Bor"], correctAnswer: 0 }
  ]
};
