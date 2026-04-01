export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index 0-3
}

export interface CategoryData {
  kolay: Question[];
  orta: Question[];
  zor: Question[];
}

export const tarihSorulari: CategoryData = {
  kolay: [
    { id: 1, text: "Türkiye Cumhuriyetinin kurucusu kimdir?", options: ["İsmet İnönü", "Fevzi Çakmak", "Mustafa Kemal Atatürk", "Kazım Karabekir"], correctAnswer: 2 },
    { id: 2, text: "İstanbul hangi yıl fethedilmiştir?", options: ["1453", "1071", "1299", "1517"], correctAnswer: 0 },
    { id: 3, text: "Osmanlı Devleti'nin kurucusu kimdir?", options: ["Orhan Bey", "Osman Bey", "Ertuğrul Gazi", "Fatih Sultan Mehmet"], correctAnswer: 1 },
    { id: 4, text: "Cumhuriyet hangi yıl ilan edilmiştir?", options: ["1920", "1923", "1924", "1919"], correctAnswer: 1 }
  ],
  orta: [
    { id: 5, text: "Fransız İhtilali hangi yıl gerçekleşmiştir?", options: ["1789", "1848", "1640", "1799"], correctAnswer: 0 },
    { id: 6, text: "İlk matbaayı kim icat etmiştir?", options: ["Gutenberg", "Newton", "Galileo", "Da Vinci"], correctAnswer: 0 },
    { id: 7, text: "Hangi savaş Osmanlı Devletinin gerileme dönemini başlatmıştır?", options: ["Karlofça", "Mohaç", "Viyana Kuşatması", "Preveze"], correctAnswer: 0 },
    { id: 8, text: "Amerika kıtasını kim keşfetmiştir?", options: ["Vasco da Gama", "Kristof Kolomb", "Macellan", "Amerigo Vespucci"], correctAnswer: 1 },
    { id: 9, text: "Sümerlerin yazıyı icadı hangi dönemde başlamıştır?", options: ["M.Ö. 3200", "M.Ö. 1000", "M.Ö. 5000", "M.Ö. 2000"], correctAnswer: 0 }
  ],
  zor: [
    { id: 10, text: "Lozan Barış Antlaşması hangi ülkede imzalanmıştır?", options: ["Fransa", "İsviçre", "İngiltere", "İtalya"], correctAnswer: 1 },
    { id: 11, text: "Bizans İmparatorluğu'nun en uzun süre tahtta kalan imparatoru kimdir?", options: ["I. Justinianus", "II. Basileios", "Herakleios", "I. Aleksios"], correctAnswer: 1 },
    { id: 12, text: "Gül Savaşları hangi ülkede gerçekleşmiştir?", options: ["Almanya", "İspanya", "Fransa", "İngiltere"], correctAnswer: 3 },
    { id: 13, text: "İlk kadın firavun kimdir?", options: ["Kleopatra", "Nefertiti", "Hatshepsut", "Ramses"], correctAnswer: 2 }
  ]
};
