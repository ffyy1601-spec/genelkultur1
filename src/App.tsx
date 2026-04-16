import { Suspense, lazy, type ReactNode } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
const Landing = lazy(() => import("./pages/Landing"));
const CategorySelect = lazy(() => import("./pages/CategorySelect"));
const ContentHub = lazy(() => import("./pages/ContentHub"));
const GenelKulturSorulari = lazy(() => import("./pages/GenelKulturSorulari"));
const GenelKulturSorulariCevaplari = lazy(() => import("./pages/GenelKulturSorulariCevaplari"));
const GenelKulturTesti = lazy(() => import("./pages/GenelKulturTesti"));
const Game = lazy(() => import("./pages/Game"));
const Results = lazy(() => import("./pages/Results"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const ContentPolicy = lazy(() => import("./pages/ContentPolicy"));
const AdsDisclosure = lazy(() => import("./pages/AdsDisclosure"));
const ZorGenelKulturSorulari = lazy(() => import("./pages/ZorGenelKulturSorulari"));
const TarihSorulari = lazy(() => import("./pages/TarihSorulari"));
const TarihSorulariCevaplari = lazy(() => import("./pages/TarihSorulariCevaplari"));
const BilimSorulari = lazy(() => import("./pages/BilimSorulari"));
const BilimSorulariCevaplari = lazy(() => import("./pages/BilimSorulariCevaplari"));
const SanatSorulari = lazy(() => import("./pages/SanatSorulari"));
const SanatSorulariCevaplari = lazy(() => import("./pages/SanatSorulariCevaplari"));
const Terms = lazy(() => import("./pages/Terms"));
import { LEGACY_ROUTES, ROUTES } from "./lib/routes";
import RouteEffects from "./components/RouteEffects";

const BUILD_TAG = "2026-04-04-seo-pro";

interface AppContentProps {
  includeRouteEffects?: boolean;
}

export function AppContent({ includeRouteEffects = true }: AppContentProps) {
  return (
    <>
      {includeRouteEffects ? <RouteEffects /> : null}
      <div
        className="bg-background text-on-background font-body min-h-screen flex flex-col font-inter selection:bg-primary selection:text-on-primary"
        data-build={BUILD_TAG}
      >
        <Suspense
          fallback={
            <div className="flex min-h-[60vh] items-center justify-center px-6 text-center text-sm font-semibold text-on-surface-variant">
              Icerik yukleniyor...
            </div>
          }
        >
          <Routes>
            <Route path={ROUTES.home} element={<Landing />} />
            <Route path={ROUTES.categories} element={<CategorySelect />} />
            <Route path={ROUTES.contentHub} element={<ContentHub />} />
            <Route path={ROUTES.genelKulturSorulari} element={<GenelKulturSorulari />} />
            <Route path={ROUTES.genelKulturSorulariCevaplari} element={<GenelKulturSorulariCevaplari />} />
            <Route path={ROUTES.genelKulturTesti} element={<GenelKulturTesti />} />
            <Route path={ROUTES.zorGenelKulturSorulari} element={<ZorGenelKulturSorulari />} />
            <Route path={ROUTES.tarihSorulari} element={<TarihSorulari />} />
            <Route path={ROUTES.tarihSorulariCevaplari} element={<TarihSorulariCevaplari />} />
            <Route path={ROUTES.bilimSorulari} element={<BilimSorulari />} />
            <Route path={ROUTES.bilimSorulariCevaplari} element={<BilimSorulariCevaplari />} />
            <Route path={ROUTES.sanatSorulari} element={<SanatSorulari />} />
            <Route path={ROUTES.sanatSorulariCevaplari} element={<SanatSorulariCevaplari />} />
            <Route path={ROUTES.game} element={<Game />} />
            <Route path={ROUTES.results} element={<Results />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.privacy} element={<Privacy />} />
            <Route path={ROUTES.cookies} element={<Cookies />} />
            <Route path={ROUTES.contentPolicy} element={<ContentPolicy />} />
            <Route path={ROUTES.adsDisclosure} element={<AdsDisclosure />} />
            <Route path={ROUTES.terms} element={<Terms />} />

            <Route path={LEGACY_ROUTES.categories} element={<Navigate replace to={ROUTES.categories} />} />
            <Route path={LEGACY_ROUTES.game} element={<Navigate replace to={ROUTES.game} />} />
            <Route path={LEGACY_ROUTES.results} element={<Navigate replace to={ROUTES.results} />} />
            <Route path={LEGACY_ROUTES.about} element={<Navigate replace to={ROUTES.about} />} />
            <Route path={LEGACY_ROUTES.contact} element={<Navigate replace to={ROUTES.contact} />} />
            <Route path={LEGACY_ROUTES.privacy} element={<Navigate replace to={ROUTES.privacy} />} />
            <Route path={LEGACY_ROUTES.terms} element={<Navigate replace to={ROUTES.terms} />} />
            <Route path="*" element={<Navigate replace to={ROUTES.home} />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export function AppProviders({ children }: { children: ReactNode }) {
  return <HelmetProvider>{children}</HelmetProvider>;
}

function App() {
  return (
    <AppProviders>
      <Router>
        <AppContent />
      </Router>
    </AppProviders>
  );
}

export default App;
