import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";



function App() {
  return (
      <div className="App">
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
