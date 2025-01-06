import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { inject } from '@vercel/analytics';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import esAboutTranslations from "./translations/es/about.json";
import esExperienceTranslations from "./translations/es/experience.json";
import esHomeTranslations from "./translations/es/home.json";
import esNavbarTranslations from "./translations/es/navbar.json";
import esStudiesTranslations from "./translations/es/studies.json";
import esProjectsTranslations from "./translations/es/projects.json";

import enAboutTranslations from "./translations/en/about.json";
import enExperienceTranslations from "./translations/en/experience.json";
import enHomeTranslations from "./translations/en/home.json";
import enNavbarTranslations from "./translations/en/navbar.json";
import enStudiesTranslations from "./translations/en/studies.json";
import enProjectsTranslations from "./translations/en/projects.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("lang") ?? "en",
  resources: {
    en: {
      translation: {
        about: enAboutTranslations,
        experience: enExperienceTranslations,
        home: enHomeTranslations,
        navbar: enNavbarTranslations,
        studies: enStudiesTranslations,
        projects: enProjectsTranslations,
      },
    },
    es: {
      translation: {
        about: esAboutTranslations,
        experience: esExperienceTranslations,
        home: esHomeTranslations,
        navbar: esNavbarTranslations,
        studies: esStudiesTranslations,
        projects: esProjectsTranslations,
      },
    },
  },
});

inject('prj_Ycb76wiITijkd5gf7VWqmJkz1M0y');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router>
  </React.StrictMode>
);