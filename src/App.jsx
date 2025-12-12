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

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;