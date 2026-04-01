import type { CategoryData } from './tarih';

export const sanatSorulari: CategoryData = {
  kolay: [
    { id: 301, text: "İstiklal Marşımızın şairi kimdir?", options: ["Namık Kemal", "Mehmet Akif Ersoy", "Yahya Kemal", "Necip Fazıl"], correctAnswer: 1 },
    { id: 302, text: "Ünlü 'Mona Lisa' tablosunun ressamı kimdir?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], correctAnswer: 1 },
    { id: 303, text: "Gitar kaç telli bir müzik aletidir?", options: ["4", "5", "6", "8"], correctAnswer: 2 },
    { id: 304, text: "Harry Potter serisinin yazarı kimdir?", options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Agatha Christie"], correctAnswer: 2 }
  ],
  orta: [
    { id: 305, text: "Türkiye'nin Oscar adayı olan ancak alamayan ünlü Nuri Bilge Ceylan filminin adı nedir?", options: ["Ayla", "Kış Uykusu", "Müslüm", "Eşkıya"], correctAnswer: 1 },
    { id: 306, text: "Sefiller romanının yazarı kimdir?", options: ["Victor Hugo", "Dostoyevski", "Tolstoy", "Balzac"], correctAnswer: 0 },
    { id: 307, text: "'Yıldızlı Gece' tablosu hangi ressama aittir?", options: ["Claude Monet", "Vincent van Gogh", "Salvador Dali", "Frida Kahlo"], correctAnswer: 1 },
    { id: 308, text: "Beethoven kaçıncı senfonisiyle ünlüdür (Aynı zamanda Avrupa Birliği marşıdır)?", options: ["5. Senfoni", "7. Senfoni", "9. Senfoni", "3. Senfoni"], correctAnswer: 2 },
    { id: 309, text: "Türk sinemasında 'Sultan' lakaplı oyuncu kimdir?", options: ["Türkan Şoray", "Filiz Akın", "Hülya Koçyiğit", "Fatma Girik"], correctAnswer: 0 }
  ],
  zor: [
    { id: 310, text: "Erimiş saatlerin yer aldığı 'Belleğin Azmi' tablosu kime aittir?", options: ["Pablo Picasso", "Salvador Dali", "Rene Magritte", "Jackson Pollock"], correctAnswer: 1 },
    { id: 311, text: "Nobel Edebiyat Ödülünü kazanan ilk Türk yazarımız kimdir?", options: ["Orhan Pamuk", "Yaşar Kemal", "Aziz Nesin", "Sabahattin Ali"], correctAnswer: 0 },
    { id: 312, text: "'Guernica' adlı tablo hangi savaşı resmetmektedir?", options: ["II. Dünya Savaşı", "İspanya İç Savaşı", "I. Dünya Savaşı", "Vietnam Savaşı"], correctAnswer: 1 },
    { id: 313, text: "Antik Yunan'da tiyatronun iki ana türü nedir?", options: ["Tragedya ve Komedya", "Dram ve Skeç", "Pandomim ve Müzikal", "Ağıt ve Destan"], correctAnswer: 0 }
  ]
};
