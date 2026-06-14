/**
 * Generates a deterministic hash code from a string.
 */
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

/**
 * Returns a simulated view count for a given article slug.
 * It initializes a deterministic value in the thousands based on the slug,
 * and increments it slightly on each visit using localStorage.
 * 
 * @param slug The unique identifier of the article
 * @param shouldIncrement If true, increments the view count (use on landing/details page)
 */
export function getSimulatedViews(slug: string, shouldIncrement = false): number {
  const storageKey = `gk_news_views_${slug}`;
  const storedValue = localStorage.getItem(storageKey);

  if (storedValue) {
    let currentViews = parseInt(storedValue, 10);
    if (isNaN(currentViews)) {
      currentViews = getBaseViews(slug);
    }
    
    if (shouldIncrement) {
      // Random increment between 1 and 3 to simulate other active readers
      const increment = Math.floor(Math.random() * 3) + 1;
      currentViews += increment;
      localStorage.setItem(storageKey, currentViews.toString());
    }
    
    return currentViews;
  } else {
    // Initialize with a base number
    const baseViews = getBaseViews(slug);
    localStorage.setItem(storageKey, baseViews.toString());
    return baseViews;
  }
}

/**
 * Generates a starting view count between 1,850 and 8,450 based on the slug.
 */
function getBaseViews(slug: string): number {
  const hash = hashCode(slug);
  // Range: 1850 to 8450
  const min = 1850;
  const max = 8450;
  return min + (hash % (max - min));
}

/**
 * Formats a number with Turkish thousands separators (e.g. 1.250).
 */
export function formatViews(views: number): string {
  return views.toLocaleString("tr-TR");
}

// ── REACTION TYPES & SIMULATION ──

export interface NewsReactions {
  like: number;
  wow: number;
  clap: number;
  fire: number;
  sad: number;
}

export const REACTION_KEYS: (keyof NewsReactions)[] = ["like", "wow", "clap", "fire", "sad"];

export const REACTION_DETAILS: Record<keyof NewsReactions, { emoji: string; label: string }> = {
  like: { emoji: "👍", label: "Beğendim" },
  wow: { emoji: "😮", label: "Şaşırdım" },
  clap: { emoji: "👏", label: "Tebrikler" },
  fire: { emoji: "🔥", label: "Harika" },
  sad: { emoji: "😢", label: "Üzüldüm" },
};

/**
 * Gets the simulated reaction counts for a news article.
 */
export function getSimulatedReactions(slug: string): NewsReactions {
  const storageKey = `gk_news_reactions_${slug}`;
  const storedValue = localStorage.getItem(storageKey);

  if (storedValue) {
    try {
      return JSON.parse(storedValue);
    } catch (e) {
      // Fallback if parsing fails
    }
  }

  // Generate deterministic reaction counts based on the hash of the slug
  const hash = hashCode(slug);
  
  const reactions: NewsReactions = {
    like: 45 + (hash % 240),      // 45 to 284
    wow: 12 + ((hash >> 1) % 95),  // 12 to 106
    clap: 8 + ((hash >> 2) % 65),  // 8 to 72
    fire: 15 + ((hash >> 3) % 150), // 15 to 164
    sad: 2 + ((hash >> 4) % 35),   // 2 to 36
  };

  localStorage.setItem(storageKey, JSON.stringify(reactions));
  return reactions;
}

/**
 * Gets the key of the reaction the user has clicked on for this article (if any).
 */
export function getUserReaction(slug: string): keyof NewsReactions | null {
  const storageKey = `gk_news_user_reaction_${slug}`;
  return localStorage.getItem(storageKey) as keyof NewsReactions | null;
}

/**
 * Saves or updates a user's reaction to an article, adjusting the total counts.
 */
export function saveUserReaction(slug: string, reactionKey: keyof NewsReactions | null): NewsReactions {
  const reactionsKey = `gk_news_reactions_${slug}`;
  const userReactionKey = `gk_news_user_reaction_${slug}`;
  
  const reactions = getSimulatedReactions(slug);
  const oldReaction = getUserReaction(slug);

  if (oldReaction === reactionKey) {
    // Toggling the same reaction: remove it
    if (oldReaction) {
      reactions[oldReaction] = Math.max(0, reactions[oldReaction] - 1);
    }
    localStorage.removeItem(userReactionKey);
  } else {
    // Changing reaction or adding a new one
    if (oldReaction) {
      reactions[oldReaction] = Math.max(0, reactions[oldReaction] - 1);
    }
    if (reactionKey) {
      reactions[reactionKey] += 1;
      localStorage.setItem(userReactionKey, reactionKey);
    } else {
      localStorage.removeItem(userReactionKey);
    }
  }

  localStorage.setItem(reactionsKey, JSON.stringify(reactions));
  return reactions;
}

