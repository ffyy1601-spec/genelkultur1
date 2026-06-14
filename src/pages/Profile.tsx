import { useState } from "react";
import PageLayout from "../components/PageLayout";
import Seo from "../components/Seo";
import { getUserStats, ALL_BADGES } from "../lib/gamification";
import { ROUTES } from "../lib/routes";

interface CategoryMeta {
  id: string;
  name: string;
  color: string;
  bgColor: string;
  icon: string;
}

const CATEGORIES: CategoryMeta[] = [
  { id: "genel", name: "Genel Kültür", color: "#f2ca50", bgColor: "rgba(242,202,80,0.12)", icon: "public" },
  { id: "tarih", name: "Tarih", color: "#f97316", bgColor: "rgba(249,115,22,0.12)", icon: "history_edu" },
  { id: "bilim", name: "Bilim", color: "#22d3ee", bgColor: "rgba(34,211,238,0.12)", icon: "science" },
  { id: "sanat", name: "Sanat", color: "#a78bfa", bgColor: "rgba(167,139,250,0.12)", icon: "palette" },
  { id: "kpss", name: "KPSS Tarih", color: "#10b981", bgColor: "rgba(16,185,129,0.12)", icon: "menu_book" },
  { id: "zor", name: "Zor Genel Kültür", color: "#ef4444", bgColor: "rgba(239,68,68,0.12)", icon: "psychology" },
  { id: "daily", name: "Günün Haber Testi", color: "#3b82f6", bgColor: "rgba(59,130,246,0.12)", icon: "newspaper" }
];

export default function Profile() {
  const [stats, setStats] = useState(() => getUserStats());
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const totalQuestions = Object.values(stats.categoryStats).reduce((sum, item) => sum + item.total, 0);
  const totalCorrect = Object.values(stats.categoryStats).reduce((sum, item) => sum + item.correct, 0);
  const overallAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  const handleReset = () => {
    localStorage.removeItem("gk_user_stats");
    // Clear perfect score count caches
    CATEGORIES.forEach(cat => {
      localStorage.removeItem(`gk_perfect_count_${cat.id}`);
    });
    setStats(getUserStats());
    setShowResetConfirm(false);
  };

  // SVG Gauge calculations
  const radius = 35;
  const circumference = 2 * Math.PI * radius; // ~219.91

  return (
    <PageLayout>
      <Seo
        title="Profilim & Başarılarım - İstatistik Takibi | GenelKultur.com.tr"
        description="Genel kültür bilgi seviyeni, kazandığın özel rozetleri, çözdüğün test sayılarını ve ünite bazlı başarı oranlarını takip et."
        path={ROUTES.profile}
        noindex
      />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 md:px-8 md:py-12">
        
        {/* Profile Header (XP Dashboard) */}
        <section className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,35,62,0.92),rgba(8,20,38,0.95))] p-6 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl mb-8">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-[80px]"></div>
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-tertiary/10 blur-[80px]"></div>

          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] items-center">
            
            {/* User Level Info */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.8rem] border border-primary/30 bg-primary/10 shadow-[0_0_20px_rgba(242,202,80,0.15)]">
                <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  military_tech
                </span>
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-black text-[#5c3e00] text-sm shadow-md border-2 border-[#091528]">
                  {stats.level}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-primary/80">Yarışmacı Kartı</div>
                <h1 className="text-2xl font-black text-white">{stats.title}</h1>
                <p className="text-xs text-on-surface-variant/80 font-semibold">
                  Toplam İlerleme: <span className="text-white font-bold">{stats.xp} XP</span>
                </p>
              </div>
            </div>

            {/* Level Progress Slider */}
            <div className="w-full md:w-[280px] bg-white/5 border border-white/10 rounded-2xl p-4 space-y-2">
              <div className="flex justify-between text-xs font-black">
                <span className="text-on-surface-variant/80">SEVİYE {stats.level}</span>
                <span className="text-primary">SEVİYE {stats.level + 1}</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-black/40 p-[2px] border border-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-[#ffd54f] transition-all duration-500 shadow-[0_0_10px_rgba(242,202,80,0.3)]"
                  style={{ width: `${stats.xpProgress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-on-surface-variant/60">
                <span>{stats.currentLevelXp} XP</span>
                <span className="text-white/80">{stats.xp - stats.currentLevelXp} / {stats.nextLevelXp - stats.currentLevelXp} XP (%{stats.xpProgress})</span>
                <span>{stats.nextLevelXp} XP</span>
              </div>
            </div>

          </div>
        </section>

        {/* Overview Numbers Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          
          <div className="rounded-2xl border border-white/5 bg-surface-container-low/60 p-5 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-wider text-on-surface-variant/70 block mb-1">Çözülen Testler</span>
            <span className="text-2xl sm:text-3xl font-black text-white">{stats.completedQuizzes}</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-surface-container-low/60 p-5 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-wider text-on-surface-variant/70 block mb-1">Doğru Cevaplar</span>
            <span className="text-2xl sm:text-3xl font-black text-green-500">{totalCorrect}</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-surface-container-low/60 p-5 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-wider text-on-surface-variant/70 block mb-1">Toplam Soru</span>
            <span className="text-2xl sm:text-3xl font-black text-on-surface-variant">{totalQuestions}</span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-surface-container-low/60 p-5 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-wider text-on-surface-variant/70 block mb-1">Başarı Oranı</span>
            <span className="text-2xl sm:text-3xl font-black text-primary">%{overallAccuracy}</span>
          </div>

        </section>

        {/* Categories Analysis & Achievements Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
          
          {/* Left: Category success rates */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">analytics</span>
              <h2 className="text-xl font-black text-white">Kategori Başarı Analizi</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {CATEGORIES.map(cat => {
                const stat = stats.categoryStats[cat.id] || { total: 0, correct: 0 };
                const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                const offset = circumference - (pct / 100) * circumference;

                return (
                  <div
                    key={cat.id}
                    className="group relative flex items-center justify-between rounded-2xl border border-white/5 bg-surface-container-low/55 p-4 transition-all duration-300 hover:border-white/10 hover:bg-surface-container-low"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white border border-white/5"
                        style={{ backgroundColor: cat.bgColor, color: cat.color }}
                      >
                        <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-black text-white truncate leading-tight">{cat.name}</h3>
                        <span className="text-[10px] font-bold text-on-surface-variant/80 mt-1 block">
                          {stat.correct}/{stat.total} Soru
                        </span>
                      </div>
                    </div>

                    {/* Circular Progress Gauge */}
                    <div className="relative flex h-14 w-14 items-center justify-center shrink-0">
                      <svg className="h-full w-full -rotate-90">
                        <circle
                          cx="28"
                          cy="28"
                          r={radius}
                          fill="transparent"
                          stroke="rgba(255,255,255,0.06)"
                          strokeWidth="4"
                        />
                        <circle
                          cx="28"
                          cy="28"
                          r={radius}
                          fill="transparent"
                          stroke={cat.color}
                          strokeWidth="4"
                          strokeDasharray={circumference}
                          strokeDashoffset={stat.total > 0 ? offset : circumference}
                          strokeLinecap="round"
                          className="transition-all duration-500"
                        />
                      </svg>
                      <span className="absolute text-[11px] font-black text-white" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                        %{pct}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Right: Badges Cabinet */}
          <section className="space-y-4 bg-surface-container-low/40 border border-white/5 rounded-[2rem] p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">emoji_events</span>
              <h2 className="text-xl font-black text-white">Rozet Vitrini</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ALL_BADGES.map(badge => {
                const isUnlocked = stats.unlockedBadges.includes(badge.id);

                return (
                  <div
                    key={badge.id}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 ${
                      isUnlocked
                        ? "border-[#ffd54f]/15 bg-[#ffd54f]/5 shadow-[0_4px_15px_rgba(242,202,80,0.05)]"
                        : "border-white/5 bg-black/10 opacity-45"
                    }`}
                  >
                    <span
                      className={`text-4xl filter transition-transform duration-300 ${
                        isUnlocked ? "drop-shadow-[0_0_10px_rgba(242,202,80,0.4)] scale-110" : "grayscale"
                      }`}
                    >
                      {badge.emoji}
                    </span>
                    <h3 className="text-xs font-black text-white mt-3 leading-tight">{badge.title}</h3>
                    <p className="text-[9px] text-on-surface-variant/80 font-bold mt-1 max-w-[120px] leading-normal">
                      {isUnlocked ? badge.description : badge.criteria}
                    </p>
                    {!isUnlocked && (
                      <span className="material-symbols-outlined text-[10px] text-on-surface-variant/60 mt-1.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                        lock
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Reset Panel */}
        <section className="mt-12 border-t border-white/5 pt-8 flex flex-col items-center">
          {!showResetConfirm ? (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="flex items-center gap-1.5 rounded-xl border border-error/20 bg-error/5 px-4 py-2 text-xs font-bold text-error transition-all hover:bg-error/10"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              Tüm İstatistikleri Sıfırla
            </button>
          ) : (
            <div className="flex flex-col items-center p-4 rounded-2xl border border-error/20 bg-error/5 max-w-sm text-center">
              <span className="material-symbols-outlined text-error text-3xl mb-2">warning</span>
              <p className="text-xs font-bold text-white leading-relaxed">
                Tüm çözülen test verilerinizi, kazandığınız XP'yi ve rozetlerinizi sıfırlamak istediğinizden emin misiniz? Bu işlem geri alınamaz!
              </p>
              <div className="mt-4 flex gap-3 w-full">
                <button
                  onClick={handleReset}
                  className="flex-1 rounded-xl bg-error text-white py-2 text-xs font-black uppercase tracking-wider hover:bg-red-700 transition-colors"
                >
                  Evet, Sıfırla
                </button>
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-surface-container-high py-2 text-xs font-bold text-on-surface hover:bg-surface-container-highest transition-colors"
                >
                  İptal Et
                </button>
              </div>
            </div>
          )}
        </section>

      </main>
    </PageLayout>
  );
}
