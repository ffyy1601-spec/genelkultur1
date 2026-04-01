import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-outline-variant/10 bg-[#041329]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 md:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-lg font-black tracking-tight text-primary">GENELKULTUR.COM</p>
            <p className="max-w-sm text-sm leading-6 text-on-surface-variant">
              Sunucusuz çalışan, giriş istemeyen ve hızlı oynanabilen modern bir genel kültür bilgi yarışması deneyimi.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface">Site</p>
            <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
              <Link to="/" className="hover:text-primary">Ana Sayfa</Link>
              <Link to="/categories" className="hover:text-primary">Kategoriler</Link>
              <Link to="/about" className="hover:text-primary">Hakkında</Link>
              <Link to="/contact" className="hover:text-primary">İletişim</Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-on-surface">Yasal</p>
            <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
              <Link to="/privacy" className="hover:text-primary">Gizlilik Politikası</Link>
              <Link to="/terms" className="hover:text-primary">Kullanım Koşulları</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-outline-variant/10 pt-6 text-xs text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} genelkultur.com. Tüm hakları saklıdır.</p>
          <p>Statik site altyapısı ile hızlı, güvenli ve girişsiz kullanım.</p>
        </div>
      </div>
    </footer>
  );
}
