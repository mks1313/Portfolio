import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import HomePage from "./pages/HomePage";
import StudiesPage from "./pages/StudiesPage";

const App = ()  => {
  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/studies" element={<StudiesPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
