import { useState, useEffect } from "react";
import { usePWA } from "../lib/usePWA";

// ─── iOS Detection ──────────────────────────────────────────────
function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function isInStandaloneMode(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true;
}

// ─── Constants ──────────────────────────────────────────────────
const IOS_DISMISSED_KEY = "pwa-ios-dismissed-at";
const DISMISS_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
const SHOW_DELAY_MS = 4000; // Wait for cookie consent to settle

export default function InstallBanner() {
  const { canInstall, triggerInstall, isStandalone } = usePWA();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [visible, setVisible] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  // ── Determine if we should show anything ─────────────────────
  const shouldShowNative = canInstall && !isStandalone;

  const shouldShowIOS = (() => {
    if (!isIOS() || isInStandaloneMode()) return false;
    const dismissedAt = localStorage.getItem(IOS_DISMISSED_KEY);
    if (dismissedAt) {
      const elapsed = Date.now() - parseInt(dismissedAt, 10);
      if (elapsed < DISMISS_COOLDOWN_MS) return false;
    }
    return true;
  })();

  // ── Delay showing to avoid cookie-consent collision ──────────
  useEffect(() => {
    if (!shouldShowNative && !shouldShowIOS) return;

    const cookieChoice = localStorage.getItem("cookie-consent-choice");
    const delay = cookieChoice ? 1200 : SHOW_DELAY_MS;

    const timer = setTimeout(() => {
      if (shouldShowNative) {
        setVisible(true);
      } else if (shouldShowIOS) {
        setShowIOSGuide(true);
        setVisible(true);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [shouldShowNative, shouldShowIOS]);

  // ── Handlers ─────────────────────────────────────────────────
  const handleInstall = async () => {
    await triggerInstall();
    dismiss();
  };

  const dismiss = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
      setAnimateOut(false);
      setShowIOSGuide(false);
    }, 350);
  };

  const handleDismiss = () => {
    if (showIOSGuide) {
      localStorage.setItem(IOS_DISMISSED_KEY, Date.now().toString());
    }
    dismiss();
  };

  if (!visible) return null;

  // ── iOS Guide ────────────────────────────────────────────────
  if (showIOSGuide) {
    return (
      <div
        className={`fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6 flex justify-center ${
          animateOut ? "pwa-slide-down" : "pwa-slide-up"
        }`}
      >
        <div className="w-full max-w-lg rounded-[1.8rem] border border-white/10 bg-surface-container-low/95 backdrop-blur-xl p-5 md:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
              <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                smartphone
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base font-black text-on-surface">
                Ana Ekrana Ekle
              </h4>
              <p className="mt-1.5 text-xs leading-5 text-on-surface-variant">
                Uygulama deneyimi için Safari'de alt menüden{" "}
                <span className="inline-flex items-center align-middle mx-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 3v12M12 3l-4 4M12 3l4 4M4 15v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>{" "}
                <strong className="text-on-surface">Paylaş</strong> butonuna, ardından{" "}
                <strong className="text-on-surface">"Ana Ekrana Ekle"</strong> seçeneğine dokunun.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleDismiss}
              className="px-5 py-2 text-xs font-semibold rounded-xl text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Anladım
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Native Install Banner (Android / Desktop) ────────────────
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6 flex justify-center ${
        animateOut ? "pwa-slide-down" : "pwa-slide-up"
      }`}
    >
      <div className="w-full max-w-lg rounded-[1.8rem] border border-white/10 bg-surface-container-low/95 backdrop-blur-xl p-5 md:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              install_mobile
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-black text-on-surface">
              Uygulamayı Yükle
            </h4>
            <p className="mt-1.5 text-xs leading-5 text-on-surface-variant">
              GenelKultur'ü telefonuna yükle, internet olmadan da kullan. Hızlı erişim, bildirimler ve tam ekran deneyim.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 justify-end">
          <button
            onClick={handleDismiss}
            className="px-5 py-2.5 text-xs font-semibold rounded-[1rem] border border-white/10 hover:border-white/20 text-on-surface-variant hover:text-on-surface bg-surface-container-low transition-all duration-300"
          >
            Daha Sonra
          </button>
          <button
            onClick={handleInstall}
            className="px-6 py-2.5 text-xs font-black rounded-[1rem] bg-primary text-on-primary hover:bg-primary/95 shadow-[0_8px_24px_rgba(242,202,80,0.18)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              download
            </span>
            Yükle
          </button>
        </div>
      </div>
    </div>
  );
}
