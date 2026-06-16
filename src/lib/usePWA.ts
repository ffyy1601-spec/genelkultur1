import { useState, useEffect, useCallback, useRef } from "react";
import { registerSW } from "virtual:pwa-register";

// ─── Types ──────────────────────────────────────────────────────
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
  prompt(): Promise<void>;
}

interface PWAState {
  /** true when the browser's native install prompt is available */
  canInstall: boolean;
  /** true when a new SW version is waiting to activate */
  needRefresh: boolean;
  /** true when the app is ready for offline use */
  offlineReady: boolean;
  /** true when running as installed PWA (standalone) */
  isStandalone: boolean;
  /** Trigger native install prompt — returns user choice */
  triggerInstall: () => Promise<"accepted" | "dismissed" | "unavailable">;
  /** Accept the waiting SW and reload the page */
  updateApp: () => void;
  /** Dismiss the offline-ready notification */
  dismissOfflineReady: () => void;
  /** Dismiss the update notification */
  dismissRefresh: () => void;
}

// ─── Constants ──────────────────────────────────────────────────
const INSTALL_DISMISSED_KEY = "pwa-install-dismissed-at";
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// ─── Hook ───────────────────────────────────────────────────────
export function usePWA(): PWAState {
  const [canInstall, setCanInstall] = useState(false);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);

  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);
  const updateSWRef = useRef<((reloadPage?: boolean) => Promise<void>) | null>(null);

  // Detect standalone mode
  const isStandalone =
    typeof window !== "undefined" &&
    (window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true);

  // ── Register the service worker ──────────────────────────────
  useEffect(() => {
    // Don't register in development for cleaner DX
    if (import.meta.env.DEV) return;

    const updateSW = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true);
      },
      onOfflineReady() {
        setOfflineReady(true);
      },
      onRegisteredSW(_swUrl, registration) {
        // Check for updates every 60 minutes
        if (registration) {
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
        }
      },
      onRegisterError(error) {
        console.error("SW registration error:", error);
      },
    });

    updateSWRef.current = updateSW;
  }, []);

  // ── Listen for the install prompt ────────────────────────────
  useEffect(() => {
    // Skip if already installed as standalone
    if (isStandalone) return;

    // Check if user recently dismissed
    const dismissedAt = localStorage.getItem(INSTALL_DISMISSED_KEY);
    if (dismissedAt) {
      const elapsed = Date.now() - parseInt(dismissedAt, 10);
      if (elapsed < DISMISS_COOLDOWN_MS) return;
      // Cooldown expired, remove old value
      localStorage.removeItem(INSTALL_DISMISSED_KEY);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      deferredPromptRef.current = e as BeforeInstallPromptEvent;
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Also listen for successful installs to hide the banner
    const installedHandler = () => {
      setCanInstall(false);
      deferredPromptRef.current = null;
    };
    window.addEventListener("appinstalled", installedHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installedHandler);
    };
  }, [isStandalone]);

  // ── Actions ──────────────────────────────────────────────────
  const triggerInstall = useCallback(async (): Promise<
    "accepted" | "dismissed" | "unavailable"
  > => {
    const prompt = deferredPromptRef.current;
    if (!prompt) return "unavailable";

    await prompt.prompt();
    const { outcome } = await prompt.userChoice;

    if (outcome === "dismissed") {
      localStorage.setItem(INSTALL_DISMISSED_KEY, Date.now().toString());
    }

    deferredPromptRef.current = null;
    setCanInstall(false);
    return outcome;
  }, []);

  const updateApp = useCallback(() => {
    updateSWRef.current?.(true);
  }, []);

  const dismissOfflineReady = useCallback(() => {
    setOfflineReady(false);
  }, []);

  const dismissRefresh = useCallback(() => {
    setNeedRefresh(false);
  }, []);

  return {
    canInstall,
    needRefresh,
    offlineReady,
    isStandalone,
    triggerInstall,
    updateApp,
    dismissOfflineReady,
    dismissRefresh,
  };
}
