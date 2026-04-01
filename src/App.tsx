import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Landing from "./pages/Landing";
import CategorySelect from "./pages/CategorySelect";
import Game from "./pages/Game";
import Results from "./pages/Results";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="bg-background text-on-background font-body min-h-screen flex flex-col font-inter selection:bg-primary selection:text-on-primary">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/categories" element={<CategorySelect />} />
            <Route path="/game" element={<Game />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
