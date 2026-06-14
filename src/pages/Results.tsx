import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { ROUTES } from "../lib/routes";
import { processQuizCompletion, getTitleForLevel } from "../lib/gamification";
import { SITE_URL } from "../lib/seo";

// Humorous comments based on score for 9:16 story report card
function getHumorousComment(success: number): string {
  if (success === 100) return "Soru havuzunu sen mi yazdın? Kusursuz dâhi! 👑 NASA seni arıyor.";
  if (success >= 80) return "Fena değil, ortamlarda 'ben her şeyi bilirim' diyebilirsin. 😏 Bilgi küpü!";
  if (success >= 50) return "Ortalama bir Türk genci performansı. Ne az ne çok. 🤷‍♂️ Bardağın yarısı dolu!";
  if (success >= 20) return "Tarih dersinde uyuyanlar kulübü başkanı. Biraz kitap oku. 📚";
  return "Sallama yeteneğin bile yokmuş... En yakın kütüphaneye koş! 🤫";
}

export default function Results() {
  const location = useLocation();
  const hasResult = Boolean(location.state);
  const { score = 0, correct = 0, total = 10, category = "genel", wrongAnswers = [] } = location.state || {};
  const wrong = total - correct;
  const successRate = Math.round((correct / total) * 100) || 0;

  const [gamificationResult, setGamificationResult] = useState<any>(null);
  const processedRef = useRef(false);

  // States for interactive results page
  const [showReportCard, setShowReportCard] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);
  const [copied, setCopied] = useState(false);
  const [challengeCopied, setChallengeCopied] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; left: string; color: string; delay: string; size: string }[]>([]);

  // SVG Circular Gauge Calculations
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (successRate / 100) * circumference;

  useEffect(() => {
    if (hasResult && !processedRef.current) {
      processedRef.current = true;
      const res = processQuizCompletion(score, correct, total, category);
      setGamificationResult(res);
    }
  }, [hasResult, score, correct, total, category]);

  useEffect(() => {
    if (hasResult && successRate >= 70) {
      const colors = ["#f2ca50", "#ef4444", "#3b82f6", "#10b981", "#a855f7", "#f97316"];
      const newConfetti = Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: `${Math.random() * 3.5}s`,
        size: `${Math.floor(Math.random() * 8) + 6}px`,
      }));
      setConfetti(newConfetti);
    }
  }, [hasResult, successRate]);
  const handleCopyResultText = () => {
    const categoryTitle = category === "daily" ? "Günün Haber Testi" : "Bilgi Testi";
    const level = gamificationResult?.newLevel || 1;
    const titleText = getTitleForLevel(level);
    const text = `🏆 GenelKültür.com.tr - YARIŞMA SONUCU\n\n🧠 Kategori: ${categoryTitle}\n🎯 Skor: ${correct}/${total} (${successRate}% Başarı)\n👑 Ünvan: Seviye ${level} • ${titleText.substring(2)}\n💬 Yorum: "${getHumorousComment(successRate)}"\n\nSen de test et ve karneni oluştur: ${SITE_URL}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChallengeCopy = () => {
    const categoryTitle = category === "daily" ? "Günün Haber" : (category === "kpss" ? "KPSS Tarih" : (category.charAt(0).toUpperCase() + category.slice(1)));
    const text = `⚔️ MEYDAN OKUMA!\n\nBen GenelKültür.com.tr'de "${categoryTitle}" testini çözdüm ve ${correct}/${total} skorunu elde ettim! 🧠\n\nBeni geçebilir misin? Hemen tıkla ve yarışa katıl:\n🔗 ${SITE_URL}${ROUTES.game}?category=${category}`;
    navigator.clipboard.writeText(text).then(() => {
      setChallengeCopied(true);
      setTimeout(() => setChallengeCopied(false), 2000);
    });
  };

  const statsTitle = gamificationResult ? getTitleForLevel(gamificationResult.newLevel) : "";

  return (
    <PageLayout showChrome={false}>
      {/* CSS Confetti Animation */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti"
          style={{
            left: c.left,
            backgroundColor: c.color,
            animationDelay: c.delay,
            width: c.size,
            height: c.size,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}

      {/* Custom Animations Stylesheet */}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .confetti {
          position: fixed;
          top: -15px;
          z-index: 1000;
          animation: confetti-fall 4s linear infinite;
          pointer-events: none;
        }
        .animate-fade-in {
          animation: fade-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .story-glow-text {
          text-shadow: 0 0 10px rgba(242,202,80,0.4);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>

      <Seo
        title="Sonuclar | GenelKultur.com.tr"
        description="Yarismayi tamamladin. Basari oranini, dogru ve yanlis sayilarini simdi inceleyebilirsin."
        path={ROUTES.results}
        noindex
      />

      <main className="flex h-[100dvh] w-full flex-col items-center justify-center p-2 sm:p-4 overflow-hidden">
        <div className="w-full max-w-md">
          <section className="relative overflow-hidden rounded-[1.6rem] bg-surface-container-low p-4 text-center border border-white/5 shadow-2xl flex flex-col justify-between items-center max-h-[96dvh] sm:max-h-[92dvh]">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[60px]"></div>
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-tertiary/5 blur-[60px]"></div>

            <div className="relative z-10 flex flex-col items-center w-full">
              {!hasResult ? (
                <>
                  <div className="mb-3 flex justify-center">
                    <span className="material-symbols-outlined text-5xl text-primary">info</span>
                  </div>
                  <h1 className="mb-2 text-xl font-extrabold tracking-tight text-on-background">
                    Henuz bir sonuc yok
                  </h1>
                  <p className="mb-4 max-w-xs text-xs leading-relaxed text-on-surface-variant">
                    Bu sayfa oyun tamamlandiktan sonra detayli sonucu gosterir. Yeni bir tur baslatip
                    puanini gorebilirsin.
                  </p>
                  <Link
                    to={ROUTES.categories}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-primary-container px-6 py-2.5 text-sm font-bold text-on-primary shadow transition-all hover:scale-[1.02]"
                  >
                    Oyuna Basla
                    <span className="material-symbols-outlined text-sm">play_arrow</span>
                  </Link>
                </>
              ) : (
                <>
                  {/* SVG Circular Success Gauge */}
                  <div className="relative mb-3 flex items-center justify-center">
                    <svg className="h-20 w-20 -rotate-90 transform sm:h-24 sm:w-24" viewBox="0 0 112 112">
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        className="stroke-surface-container-high fill-transparent"
                        strokeWidth="8"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        className="stroke-primary fill-transparent transition-all duration-1000 ease-out"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xl font-black text-on-background sm:text-2xl">%{successRate}</span>
                      <span className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant/75">Başarı</span>
                    </div>
                  </div>

                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-on-background">
                    Oyun Bitti
                  </h1>

                  {/* XP & Ödül Gösterge Pili */}
                  {gamificationResult && (
                    <div className="mt-1 flex flex-wrap gap-1 justify-center items-center max-w-xs">
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] sm:text-xs font-black text-primary">
                        +{gamificationResult.xpGained} XP
                      </span>
                      {gamificationResult.levelUp && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-tertiary/10 border border-tertiary/20 px-2.5 py-0.5 text-[10px] sm:text-xs font-black text-tertiary animate-pulse">
                          🎉 Seviye {gamificationResult.newLevel}!
                        </span>
                      )}
                      {gamificationResult.newlyUnlockedBadges.length > 0 && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 text-[10px] sm:text-xs font-black text-amber-500">
                          🏆 {gamificationResult.newlyUnlockedBadges[0].emoji} {gamificationResult.newlyUnlockedBadges[0].title}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Stats Grid */}
                  <div className="grid w-full grid-cols-3 gap-2 my-2.5 max-w-sm">
                    <div className="rounded-2xl bg-surface-container-high p-2 shadow-md hover:scale-[1.01] transition-transform">
                      <span className="block text-[9px] font-bold uppercase tracking-wider text-primary mb-0.5">
                        Skor
                      </span>
                      <div className="text-lg sm:text-xl font-black text-on-background">
                        {score}
                        <span className="block text-[10px] text-on-surface-variant/50">
                          /{total * 100}
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-surface-container-high p-2 shadow-md hover:scale-[1.01] transition-transform">
                      <div className="flex items-center justify-center gap-1 mb-0.5">
                        <span
                          className="material-symbols-outlined text-sm text-tertiary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-tertiary">
                          Doğru
                        </span>
                      </div>
                      <div className="text-lg sm:text-xl font-black text-on-background">{correct}</div>
                    </div>

                    <div className="rounded-2xl bg-surface-container-high p-2 shadow-md hover:scale-[1.01] transition-transform">
                      <div className="flex items-center justify-center gap-1 mb-0.5">
                        <span
                          className="material-symbols-outlined text-sm text-error"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          cancel
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-error">
                          Yanlış
                        </span>
                      </div>
                      <div className="text-lg sm:text-xl font-black text-on-background">{wrong}</div>
                    </div>
                  </div>

                  {/* Karne Oluştur ve Paylaş Butonu */}
                  <div className="w-full max-w-xs my-1 sm:my-2 flex flex-col gap-2">
                    <button
                      onClick={() => setShowReportCard(true)}
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary to-[#ffd54f] py-2.5 text-xs font-black text-[#5c3e00] transition-all hover:scale-[1.02] hover:shadow-md active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
                      HİKAYEDE PAYLAŞ & KARNE OLUŞTUR 📋
                    </button>

                    <button
                      onClick={handleChallengeCopy}
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/10 py-2.5 text-xs font-black text-primary transition-all hover:bg-primary/20 hover:scale-[1.02] active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm">bolt</span>
                      {challengeCopied ? "Meydan Okuma Kopyalandı! ⚔️" : "ARKADAŞINA MEYDAN OKU ⚔️"}
                    </button>
                  </div>

                  {/* Replay & Home Buttons */}
                  <div className="flex w-full gap-2 justify-center max-w-xs mt-1">
                    <Link
                      to={ROUTES.categories}
                      className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-gradient-to-br from-primary to-primary-container py-2 text-xs font-bold text-on-primary shadow transition-all hover:scale-[1.02] active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm">replay</span>
                      Tekrar Oyna
                    </Link>
                    <Link
                      to={ROUTES.home}
                      className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-outline-variant bg-transparent py-2 text-xs font-bold text-on-background transition-all hover:scale-[1.02] hover:border-primary/50 active:scale-95"
                    >
                      <span className="material-symbols-outlined text-sm">home</span>
                      Ana Sayfa
                    </Link>
                  </div>

                  {/* Hataları İncele Akordeon Kutusu */}
                  {wrongAnswers.length > 0 && (
                    <div className="mt-2 w-full max-w-xs text-left flex flex-col min-h-0">
                      <button
                        onClick={() => setShowMistakes(!showMistakes)}
                        className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-surface-container-high px-3 py-2 text-xs font-bold text-on-surface hover:bg-surface-container-highest transition-colors"
                      >
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
                          Hatalı Cevapları İncele ({wrongAnswers.length})
                        </span>
                        <span className="material-symbols-outlined text-sm transition-transform duration-300" style={{ transform: showMistakes ? "rotate(180deg)" : "rotate(0deg)" }}>
                          expand_more
                        </span>
                      </button>
                      
                      {showMistakes && (
                        <div className="mt-1.5 space-y-1.5 max-h-[110px] overflow-y-auto pr-1 animate-fade-in custom-scrollbar">
                          {wrongAnswers.map((item: any, idx: number) => (
                            <div key={idx} className="rounded-xl border border-white/5 bg-[#12233e]/20 p-2.5">
                              <p className="text-[8px] font-bold uppercase tracking-wider text-error">Hatalı Soru {idx + 1}</p>
                              <h4 className="mt-0.5 text-[11px] font-bold text-on-background leading-normal">{item.question}</h4>
                              <div className="mt-1.5 grid grid-cols-2 gap-1 text-[9px]">
                                <div className="rounded-md border border-error/20 bg-error/5 px-2 py-0.5 font-bold text-error truncate">
                                  Senin: {item.selected}
                                </div>
                                <div className="rounded-md border border-tertiary/20 bg-tertiary/5 px-2 py-0.5 font-bold text-tertiary truncate">
                                  Doğru: {item.correct}
                                </div>
                              </div>
                              {item.explanation && (
                                <p className="mt-1.5 border-t border-white/5 pt-1 text-[10px] leading-relaxed text-on-surface-variant/80 font-medium">
                                  {item.explanation}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* 9:16 Instagram/WhatsApp Story Karne Modalı */}
      {showReportCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm animate-fade-in overflow-y-auto">
          <div className="relative flex flex-col items-center w-full max-w-sm my-auto">
            
            {/* 9:16 Story Card */}
            <div className="relative w-[320px] h-[568px] rounded-[2rem] border border-white/20 bg-[linear-gradient(135deg,#0c1d37,#050a14)] p-6 flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(242,202,80,0.15)] text-center">
              
              {/* Glowing Background Orbs */}
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-[50px]"></div>
              <div className="absolute -right-12 -bottom-12 h-32 w-32 rounded-full bg-tertiary/15 blur-[50px]"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/25 text-primary">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    military_tech
                  </span>
                </div>
                <h2 className="mt-3 text-sm font-black uppercase tracking-[0.24em] text-primary/80 story-glow-text">
                  Genel Kültür Karnesi
                </h2>
                <div className="mt-1.5 h-[1.5px] w-16 bg-primary/40"></div>
              </div>

              {/* Stats Panel */}
              <div className="relative z-10 flex flex-col items-center w-full bg-white/5 border border-white/10 rounded-2xl p-5 my-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/75">
                  SEVİYE {gamificationResult?.newLevel || 1}
                </p>
                <h3 className="text-lg font-black text-white mt-1">
                  {statsTitle}
                </h3>
                
                <div className="mt-4 w-full grid grid-cols-2 gap-3 border-t border-white/5 pt-4 text-left">
                  <div>
                    <span className="text-[9px] font-bold text-on-surface-variant/75 block">DOĞRU / TOPLAM</span>
                    <span className="text-lg font-black text-white">{correct} / {total}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-on-surface-variant/75 block">BAŞARI ORANI</span>
                    <span className="text-lg font-black text-tertiary">%{successRate}</span>
                  </div>
                </div>
              </div>

              {/* Humor Comment */}
              <div className="relative z-10 flex flex-col items-center px-2">
                <span className="text-3xl mb-2">💬</span>
                <p className="text-sm font-bold leading-relaxed text-white italic">
                  "{getHumorousComment(successRate)}"
                </p>
              </div>

              {/* Footer Brand */}
              <div className="relative z-10 flex flex-col items-center pb-2">
                <span className="font-serif text-lg font-black tracking-tight text-white">
                  GK <span className="text-primary">HABER</span>
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-on-surface-variant/60 mt-0.5">
                  genelkultur.com.tr
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-4 flex w-full max-w-[320px] flex-col gap-2">
              <p className="text-center text-xs text-on-surface-variant/90 font-bold mb-1">
                📸 Ekran görüntüsü alıp hikayende paylaş!
              </p>
              <button
                onClick={handleCopyResultText}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary text-[#6C4A00] py-3.5 text-sm font-bold transition-all shadow hover:bg-primary/95"
              >
                <span className="material-symbols-outlined text-sm">{copied ? "check" : "content_copy"}</span>
                {copied ? "Sonuç Kopyalandı!" : "Metin Olarak Kopyala"}
              </button>
              <button
                onClick={() => { setShowReportCard(false); setCopied(false); }}
                className="rounded-xl border border-white/10 bg-surface-container-high py-3.5 text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-all"
              >
                Kapat
              </button>
            </div>

          </div>
        </div>
      )}
    </PageLayout>
  );
}
