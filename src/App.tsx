import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Landing from "./pages/Landing";
import CategorySelect from "./pages/CategorySelect";
import Game from "./pages/Game";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { LEGACY_ROUTES, ROUTES } from "./lib/routes";

const BUILD_TAG = "2026-04-04-seo-pro";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div
          className="bg-background text-on-background font-body min-h-screen flex flex-col font-inter selection:bg-primary selection:text-on-primary"
          data-build={BUILD_TAG}
        >
          <Routes>
            <Route path={ROUTES.home} element={<Landing />} />
            <Route path={ROUTES.categories} element={<CategorySelect />} />
            <Route path={ROUTES.game} element={<Game />} />
            <Route path={ROUTES.results} element={<Results />} />
            <Route path={ROUTES.about} element={<About />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={ROUTES.privacy} element={<Privacy />} />
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
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
