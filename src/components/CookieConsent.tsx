import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../lib/routes";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedChoice = localStorage.getItem("cookie-consent-choice");
    if (!savedChoice) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent-choice", choice);
    setVisible(false);

    const win = window as any;
    if (win.gtag) {
      const state = choice === "accepted" ? "granted" : "denied";
      win.gtag("consent", "update", {
        ad_storage: state,
        analytics_storage: state,
        ad_user_data: state,
        ad_personalization: state,
      });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 flex justify-center animate-fade-in">
      <div className="w-full max-w-4xl rounded-[1.8rem] border border-white/10 bg-surface-container-low/95 backdrop-blur-xl p-5 md:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h4 className="text-base font-black text-on-surface flex items-center justify-center md:justify-start gap-2">
            <span className="material-symbols-outlined text-primary text-xl">cookie</span>
            Gizliliğiniz ve Çerez Tercihleriniz
          </h4>
          <p className="text-xs leading-5 text-on-surface-variant max-w-3xl">
            Sitemizde kullanıcı deneyimini iyileştirmek, site trafiğini analiz etmek ve kişiselleştirilmiş reklamlar sunmak amacıyla çerezler (cookies) kullanmaktayız. Detaylı bilgi edinmek için{" "}
            <Link to={ROUTES.cookies} className="text-primary hover:underline font-bold">
              Çerez Politikamızı
            </Link>{" "}
            ve{" "}
            <Link to={ROUTES.privacy} className="text-primary hover:underline font-bold">
              Gizlilik Politikamızı
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 justify-center">
          <button
            onClick={() => handleConsent("rejected")}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-[1rem] border border-white/10 hover:border-white/20 text-on-surface-variant hover:text-on-surface bg-surface-container-low transition-all duration-300"
          >
            Reddet
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-black rounded-[1rem] bg-primary text-on-primary hover:bg-primary/95 shadow-[0_8px_24px_rgba(242,202,80,0.18)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Tümünü Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
