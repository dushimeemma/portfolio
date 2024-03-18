import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getBrowserLanguage = (): string => {
  return navigator.language || navigator.languages[0] || "en";
};

const resources = {
  en: {
    translation: {
      welcome: "Hi there",
      intro: "I'm",
      scan: "Scan Me",
      reachout: "Reach out to me",
      experience: "Experience",
      projects: "Projects",
    },
  },
  fr: {
    translation: {
      welcome: "Salut",
      intro: "Je suis",
      scan: "Scannez-moi",
      reachout: "Contactez-moi",
      experience: "Expérience",
      projects: "Projets",
    },
  },
  de: {
    translation: {
      welcome: "Hallo",
      intro: "Ich bin",
      scan: "Scanne mich",
      reachout: "Kontaktiere mich",
      experience: "Erfahrung",
      projects: "Projekte",
    },
  },
};

void i18n.use(initReactI18next).init({
  resources,
  lng: getBrowserLanguage().split("-")[0],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
