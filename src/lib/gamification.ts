export interface Badge {
  id: string;
  emoji: string;
  title: string;
  description: string;
  criteria: string;
}

export const ALL_BADGES: Badge[] = [
  {
    id: "first_step",
    emoji: "🎯",
    title: "İlk Adım",
    description: "İlk testini tamamla.",
    criteria: "Herhangi 1 testi bitir",
  },
  {
    id: "flawless",
    emoji: "👑",
    title: "Kusursuz",
    description: "Herhangi bir testte 10/10 tam puan al.",
    criteria: "Bir testi fulle",
  },
  {
    id: "historian",
    emoji: "🏛️",
    title: "Tarihçi",
    description: "Tarih testini 10/10 tam puanla çöz.",
    criteria: "Tarih testini fulle",
  },
  {
    id: "scientist",
    emoji: "🧪",
    title: "Bilim İnsanı",
    description: "Bilim testini 10/10 tam puanla çöz.",
    criteria: "Bilim testini fulle",
  },
  {
    id: "art_guardian",
    emoji: "🎨",
    title: "Sanat Muhafızı",
    description: "Sanat testini 10/10 tam puanla çöz.",
    criteria: "Sanat testini fulle",
  },
  {
    id: "genius",
    emoji: "🧠",
    title: "Zor Genel Kültür Dâhisi",
    description: "Zor genel kültür testinde en az 8 doğru yap.",
    criteria: "Zor testte en az 8 doğru",
  },
  {
    id: "streak_solver",
    emoji: "⚡",
    title: "Seri Çözücü",
    description: "Toplamda en az 10 test tamamla.",
    criteria: "10 test tamamla",
  },
  {
    id: "news_reader",
    emoji: "📅",
    title: "Gündem Takipçisi",
    description: "En az 5 günlük haber testi çöz.",
    criteria: "5 haber testi tamamla",
  },
];

export interface UserStats {
  xp: number;
  level: number;
  title: string;
  completedQuizzes: number;
  completedDaily: number;
  unlockedBadges: string[];
  xpProgress: number; // Percentage of current level progress
  currentLevelXp: number; // XP at the beginning of current level
  nextLevelXp: number; // XP required for next level
  categoryStats: Record<string, { total: number; correct: number }>;
}

export const LEVEL_BOUNDARIES = [0, 500, 1200, 2200, 3500, 5000, 7000, 9500, 12500, 16000];

export function getLevelForXp(xp: number): number {
  for (let i = LEVEL_BOUNDARIES.length - 1; i >= 0; i--) {
    if (xp >= LEVEL_BOUNDARIES[i]) return i + 1;
  }
  const excessXp = xp - LEVEL_BOUNDARIES[LEVEL_BOUNDARIES.length - 1];
  return LEVEL_BOUNDARIES.length + Math.floor(excessXp / 4000) + 1;
}

export function getXpRequiredForLevel(level: number): number {
  if (level <= 1) return 0;
  if (level - 1 < LEVEL_BOUNDARIES.length) return LEVEL_BOUNDARIES[level - 1];
  return LEVEL_BOUNDARIES[LEVEL_BOUNDARIES.length - 1] + (level - 1 - LEVEL_BOUNDARIES.length) * 4000;
}

export function getTitleForLevel(level: number): string {
  if (level === 1) return "🥚 Çaylak Araştırmacı";
  if (level === 2) return "🔍 Meraklı Kaşif";
  if (level === 3) return "🧠 Bilgi Arayıcısı";
  if (level === 4) return "📜 Uzman Tarihçi";
  if (level === 5) return "🎓 Bilim Ortağı";
  if (level === 6) return "🔮 Bilge Üstat";
  return "👑 Efsanevi Deha";
}

/**
 * Loads current user stats from local storage, fallback to defaults if not found.
 */
export function getUserStats(): UserStats {
  const defaultStats = {
    xp: 0,
    completedQuizzes: 0,
    completedDaily: 0,
    unlockedBadges: [] as string[],
    categoryStats: {} as Record<string, { total: number; correct: number }>,
  };

  const storedValue = localStorage.getItem("gk_user_stats");
  let data = defaultStats;
  if (storedValue) {
    try {
      data = { ...defaultStats, ...JSON.parse(storedValue) };
    } catch (e) {
      // Ignored
    }
  }

  const level = getLevelForXp(data.xp);
  const title = getTitleForLevel(level);

  const currentLevelMinXp = getXpRequiredForLevel(level);
  const nextLevelMinXp = getXpRequiredForLevel(level + 1);
  const levelXpRange = nextLevelMinXp - currentLevelMinXp;
  const currentLevelProgressXp = data.xp - currentLevelMinXp;
  
  const xpProgress = levelXpRange > 0 
    ? Math.min(100, Math.max(0, Math.round((currentLevelProgressXp / levelXpRange) * 100))) 
    : 0;

  return {
    ...data,
    level,
    title,
    xpProgress,
    currentLevelXp: currentLevelMinXp,
    nextLevelXp: nextLevelMinXp,
  };
}

export interface QuizProcessResult {
  xpGained: number;
  levelUp: boolean;
  oldLevel: number;
  newLevel: number;
  newlyUnlockedBadges: Badge[];
}

/**
 * Processes a completed quiz, updates stats, checks for achievements, and saves to localStorage.
 */
export function processQuizCompletion(
  _score: number,
  correct: number,
  total: number,
  category: string
): QuizProcessResult {
  const stats = getUserStats();
  const oldLevel = stats.level;

  // Calculate XP gained
  // Example: 15 questions, 10 correct: (10 * 20) + (15 * 5) = 200 + 75 = 275 XP
  const xpGained = (correct * 20) + (total * 5);
  const newXp = stats.xp + xpGained;
  const newLevel = getLevelForXp(newXp);
  const levelUp = newLevel > oldLevel;

  // Increment completed counts
  const newCompletedQuizzes = stats.completedQuizzes + 1;
  const newCompletedDaily = category === "daily" ? stats.completedDaily + 1 : stats.completedDaily;

  // Track category accuracy stats
  const currentCategoryStats = { ...stats.categoryStats };
  const catStat = currentCategoryStats[category] || { total: 0, correct: 0 };
  catStat.total += total;
  catStat.correct += correct;
  currentCategoryStats[category] = catStat;

  // Track category counts
  const isPerfect = correct === total && total > 0;
  
  // Track perfect score count per category in localStorage
  if (isPerfect) {
    const perfectCountKey = `gk_perfect_count_${category}`;
    const currentCategoryPerfects = parseInt(localStorage.getItem(perfectCountKey) || "0", 10);
    localStorage.setItem(perfectCountKey, (currentCategoryPerfects + 1).toString());
  }

  // Evaluate badges
  const newlyUnlockedBadges: Badge[] = [];
  const currentUnlockedIds = new Set(stats.unlockedBadges);

  ALL_BADGES.forEach((badge) => {
    if (currentUnlockedIds.has(badge.id)) return;

    let shouldUnlock = false;

    if (badge.id === "first_step") {
      shouldUnlock = newCompletedQuizzes >= 1;
    } else if (badge.id === "streak_solver") {
      shouldUnlock = newCompletedQuizzes >= 10;
    } else if (badge.id === "flawless") {
      shouldUnlock = isPerfect;
    } else if (badge.id === "historian") {
      shouldUnlock = category === "tarih" && isPerfect;
    } else if (badge.id === "scientist") {
      shouldUnlock = category === "bilim" && isPerfect;
    } else if (badge.id === "art_guardian") {
      shouldUnlock = category === "sanat" && isPerfect;
    } else if (badge.id === "genius") {
      shouldUnlock = category === "zor" && correct >= 8;
    } else if (badge.id === "news_reader") {
      shouldUnlock = newCompletedDaily >= 5;
    }

    if (shouldUnlock) {
      currentUnlockedIds.add(badge.id);
      newlyUnlockedBadges.push(badge);
    }
  });

  // Save new values
  const updatedStats = {
    xp: newXp,
    completedQuizzes: newCompletedQuizzes,
    completedDaily: newCompletedDaily,
    unlockedBadges: Array.from(currentUnlockedIds),
    categoryStats: currentCategoryStats,
  };

  localStorage.setItem("gk_user_stats", JSON.stringify(updatedStats));

  return {
    xpGained,
    levelUp,
    oldLevel,
    newLevel,
    newlyUnlockedBadges,
  };
}
