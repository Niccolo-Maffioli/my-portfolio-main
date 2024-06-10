// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa i file delle traduzioni
import translationEN from './locales/en/translation.json';
import translationIT from './locales/it/translation.json';

// Configurazione delle risorse
const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // lingua di default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
