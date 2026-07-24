import RouteSkeleton from "@components/common/PageSkeleton";
import Navbar from "@components/layout/Navbar";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// Lazy load pages for better performance
const HomePage = lazy(() => import("@pages/HomePage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ExperiencePage = lazy(() => import("@pages/ExperiencePage"));
const StudiesPage = lazy(() => import("@pages/StudiesPage"));
const Projects = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Suspense fallback={<RouteSkeleton />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
