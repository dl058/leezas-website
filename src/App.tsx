// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./styles/App.css";
import Projects from "./components/Projects"; // ✅ correct path

<Route path="/projects" element={<Projects />} />;

const App: React.FC = () => {
  return (
    <Router>
      <AnimatePresence>
        <div className="container">
          <nav className="navbar">
            <div className="navbar-inner">
              <h1 className="navbar-title">Portfolio</h1>
              <div className="navbar-links">
                <Link to="/" className="nav-link">
                  About
                </Link>
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
                <Link to="/skills" className="nav-link">
                  Skills
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </nav>

          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </AnimatePresence>
    </Router>
  );
};

export default App;
