import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../lib/routes";
import { SITE_LINKS } from "../lib/seo";

interface PageLayoutProps {
  children: ReactNode;
  showChrome?: boolean;
}

export default function PageLayout({ children, showChrome = true }: PageLayoutProps) {
  if (!showChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          <NavLink to={ROUTES.home} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary font-black text-on-primary">
              GK
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.24em] text-primary">GenelKultur</div>
              <div className="text-xs text-on-surface-variant">Test, soru ve bilgi yarismasi platformu</div>
            </div>
          </NavLink>

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
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-surface-container-low/60">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
          <div className="max-w-xl">
            <h2 className="text-xl font-black text-on-surface">Genel kultur odakli, hizli ve temiz bir bilgi yarismasi deneyimi.</h2>
            <p className="mt-3 text-sm leading-7 text-on-surface-variant">
              Genel kultur sorulari, kategori bazli testler ve tekrar oynanabilir quiz turlari ile
              bilgini olcmek ve yeni seyler ogrenmek icin tasarlanan modern bir platform.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Kesfet</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <NavLink to={ROUTES.categories} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Genel Kultur Testi
              </NavLink>
              <NavLink to={ROUTES.genelKulturSorulari} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Genel Kultur Sorulari
              </NavLink>
              <NavLink to={ROUTES.contentHub} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Sorular ve Cevaplar
              </NavLink>
              <NavLink to={ROUTES.genelKulturTesti} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Genel Kultur Testi Sayfasi
              </NavLink>
              <NavLink to={ROUTES.about} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Hakkimizda
              </NavLink>
              <NavLink to={ROUTES.contact} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Iletisim
              </NavLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-primary">Yasal</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <NavLink to={ROUTES.privacy} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Gizlilik Politikasi
              </NavLink>
              <NavLink to={ROUTES.cookies} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Cerez Politikasi
              </NavLink>
              <NavLink to={ROUTES.contentPolicy} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Icerik Politikasi
              </NavLink>
              <NavLink to={ROUTES.adsDisclosure} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Reklam Bilgilendirmesi
              </NavLink>
              <NavLink to={ROUTES.terms} className="text-on-surface-variant transition-colors hover:text-on-surface">
                Kullanim Kosullari
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
