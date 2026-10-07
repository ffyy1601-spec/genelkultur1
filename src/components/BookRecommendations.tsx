export interface RecommendedBook {
  id: string;
  title: string;
  author: string;
  badge: string;
  badgeColor: string;
  image: string;
  url: string;
  desc: string;
}

export const RECOMMENDED_BOOKS: RecommendedBook[] = [
  {
    id: "ilber-ortayli",
    title: "Bir Ömür Nasıl Yaşanır?",
    author: "İlber Ortaylı",
    badge: "🌟 Çok Satan",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    image: "/images/books/ilber-ortayli-bir-omur-nasil-yasanir.jpg",
    url: "https://link.amazon/B04SNZ3w3",
    desc: "Hayatta doğru seçimler, seyahat ve entelektüel gelişim rehberi.",
  },
  {
    id: "mehmet-celal-tarih",
    title: "2026 KPSS Tarih Soru Bankası",
    author: "Mehmet Celal Özyıldız",
    badge: "🔥 2026 Güncel",
    badgeColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    image: "/images/books/mehmet-celal-kpss-tarih.jpg",
    url: "https://link.amazon/B0b9kM39P",
    desc: "Video çözümlü, KPSS tarih netlerini artıran kült soru bankası.",
  },
  {
    id: "aker-kartal-turkce",
    title: "2026 KPSS Türkçe Soru Bankası",
    author: "Aker Kartal",
    badge: "🔥 2026 Güncel",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    image: "/images/books/aker-kartal-kpss-turkce.jpg",
    url: "https://link.amazon/B043p1i4J",
    desc: "Paragraf ve dil bilgisinde net kazandıran özgün sorular.",
  },
];

interface BookRecommendationsProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function BookRecommendations({
  className = "",
  title = "Netlerini ve Genel Kültürünü Katla",
  subtitle = "Sınavda ve yarışmalarda fark yaratan 2026 başucu kaynakları:",
}: BookRecommendationsProps) {
  return (
    <div
      className={`w-full rounded-2xl border border-white/10 bg-gradient-to-b from-[#12233e]/60 to-[#0a1628]/80 p-3 sm:p-4 text-left shadow-xl backdrop-blur-sm ${className}`}
    >
      {/* Header */}
      <div className="mb-3 flex items-start gap-2.5 border-b border-white/10 pb-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            auto_stories
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] font-black uppercase tracking-wider text-primary">
              Tavsiye Kaynaklar
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-1.5 py-0.2 text-[8px] font-bold text-emerald-300">
              Prime
            </span>
          </div>
          <h3 className="text-xs sm:text-sm font-black text-on-background tracking-tight truncate">
            {title}
          </h3>
          <p className="text-[10px] text-on-surface-variant/80 truncate">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Book List (Mobile-first compact list) */}
      <div className="flex flex-col gap-2.5">
        {RECOMMENDED_BOOKS.map((book) => (
          <a
            key={book.id}
            href={book.url}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-white/5 bg-surface-container-high/60 p-2 transition-all hover:border-primary/40 hover:bg-surface-container-highest hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* Book Cover Image */}
            <div className="relative shrink-0 overflow-hidden rounded-lg shadow-md border border-white/10 bg-black/40 w-[48px] h-[68px] sm:w-[56px] sm:h-[80px]">
              <img
                src={book.image}
                alt={`${book.title} - ${book.author}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image fails
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>

            {/* Book Details */}
            <div className="flex-1 min-w-0 pr-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span
                  className={`inline-block text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded border ${book.badgeColor}`}
                >
                  {book.badge}
                </span>
                <span className="text-[10px] font-bold text-primary truncate">
                  {book.author}
                </span>
              </div>
              <h4 className="text-[11px] sm:text-xs font-black text-on-background leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                {book.title}
              </h4>
              <p className="text-[9px] sm:text-[10px] text-on-surface-variant/75 line-clamp-1 mt-0.5 leading-normal">
                {book.desc}
              </p>
            </div>

            {/* Amazon CTA Button */}
            <div className="shrink-0 flex flex-col items-center">
              <span className="inline-flex items-center gap-0.5 rounded-lg bg-gradient-to-r from-[#ffd54f] to-[#f2ca50] px-2.5 py-1.5 text-[10px] font-black text-[#422900] shadow-sm transition-all group-hover:shadow-md group-hover:from-[#ffe082] group-hover:to-[#ffd54f]">
                İncele
                <span className="material-symbols-outlined text-[11px]">open_in_new</span>
              </span>
              <span className="text-[7px] text-on-surface-variant/60 font-semibold mt-0.5">
                Amazon
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Trust & Transparency Note */}
      <div className="mt-2.5 flex items-center justify-between border-t border-white/5 pt-2 text-[8px] text-on-surface-variant/60">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[10px] text-emerald-400">verified</span>
          Amazon Gelir Ortaklığı bağlantısıdır
        </span>
        <span>Prime ile Hızlı Teslimat</span>
      </div>
    </div>
  );
}
