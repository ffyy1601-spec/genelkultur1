import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Landing from "./pages/Landing";
import CategorySelect from "./pages/CategorySelect";
import Game from "./pages/Game";
import Results from "./pages/Results";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const BUILD_TAG = "2026-04-03-refresh-2";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div
          className="bg-background text-on-background font-body min-h-screen flex flex-col font-inter selection:bg-primary selection:text-on-primary"
          data-build={BUILD_TAG}
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/categories" element={<CategorySelect />} />
            <Route path="/game" element={<Game />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
