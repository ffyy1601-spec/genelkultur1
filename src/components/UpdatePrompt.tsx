interface UpdatePromptProps {
  pwa: {
    needRefresh: boolean;
    updateApp: () => void;
    dismissRefresh: () => void;
  };
}

export default function UpdatePrompt({ pwa }: UpdatePromptProps) {
  const { needRefresh, updateApp, dismissRefresh } = pwa;

  if (!needRefresh) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[110] w-[calc(100%-2rem)] max-w-md pwa-slide-down-in">
      <div className="rounded-2xl border border-white/10 bg-surface-container-low/95 backdrop-blur-xl px-5 py-4 shadow-[0_16px_48px_rgba(0,0,0,0.35)] flex items-center gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tertiary/15">
          <span
            className="material-symbols-outlined text-tertiary text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            system_update
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-on-surface">Yeni sürüm mevcut</p>
          <p className="text-xs text-on-surface-variant mt-0.5">
            Güncel içerikler için uygulamayı yenileyin.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={dismissRefresh}
            className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all"
            aria-label="Kapat"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
          <button
            onClick={updateApp}
            className="px-4 py-2 text-xs font-black rounded-xl bg-tertiary text-on-tertiary hover:bg-tertiary/90 transition-all duration-300"
          >
            Güncelle
          </button>
        </div>
      </div>
    </div>
  );
}
