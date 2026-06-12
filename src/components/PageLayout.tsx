import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import { SITE_LINKS } from "../lib/seo";
import CookieConsent from "./CookieConsent";

interface PageLayoutProps {
  children: ReactNode;
  showChrome?: boolean;
}

export default function PageLayout({ children, showChrome = true }: PageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!showChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <NavLink to={ROUTES.home} className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-black text-on-primary">
              GK
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.24em] text-primary">GenelKultur</div>
              <div className="text-xs text-on-surface-variant">Bilgi yarışması ve haber platformu</div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-5 md:flex">
            {SITE_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 hover:bg-white/5 text-on-surface md:hidden"
            aria-label="Menü"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-2 p-4">
              {SITE_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition-all ${isActive ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-white/5 hover:text-on-surface"}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {children}

      <footer className="border-t border-white/10 bg-surface-container-low/60">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-black text-on-surface">Genel kültür odaklı, hızlı ve temiz bir bilgi yarışması deneyimi.</h2>
            <p className="mt-3 text-sm leading-7 text-on-surface-variant">
              Genel kültür soruları, kategori bazlı testler ve tekrar oynanabilir quiz turları ile
              bilgini ölçmek ve yeni şeyler öğrenmek için tasarlanan modern bir platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Keşfet</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <NavLink to={ROUTES.categories} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Genel Kültür Testi
              </NavLink>
              <NavLink to={ROUTES.genelKulturSorulari} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Genel Kültür Soruları
              </NavLink>
              <NavLink to={ROUTES.contentHub} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Sorular ve Cevaplar
              </NavLink>
              <NavLink to={ROUTES.genelKulturTesti} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Genel Kültür Testi Sayfası
              </NavLink>
              <NavLink to={ROUTES.kpssList} className="text-on-surface-variant transition-colors hover:text-on-surface">
                KPSS Tarih Konuları
              </NavLink>
              <NavLink to={ROUTES.about} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Hakkımızda
              </NavLink>
              <NavLink to={ROUTES.contact} className="text-on-surface-variant transition-colors hover:text-on-surface">
                İletişim
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Yasal</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <NavLink to={ROUTES.privacy} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Gizlilik Politikası
              </NavLink>
              <NavLink to={ROUTES.cookies} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Çerez Politikası
              </NavLink>
              <NavLink to={ROUTES.contentPolicy} className="text-on-surface-variant transition-colors hover:text-on-surface">
                İçerik Politikası
              </NavLink>
              <NavLink to={ROUTES.adsDisclosure} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Reklam Bilgilendirmesi
              </NavLink>
              <NavLink to={ROUTES.terms} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Kullanım Koşulları
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </>
  );
}
