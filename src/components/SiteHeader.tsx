import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm transition-colors ${isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"}`;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="text-lg font-black tracking-tight text-primary">
          GENELKULTUR.COM
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={linkClass} end>
            Ana Sayfa
          </NavLink>
          <NavLink to="/categories" className={linkClass}>
            Kategoriler
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            Hakkında
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            İletişim
          </NavLink>
        </nav>

        <Link
          to="/categories"
          className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
        >
          Hemen Oyna
        </Link>
      </div>
    </header>
  );
}
