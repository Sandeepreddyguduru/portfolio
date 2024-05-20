// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en', // Default language if translation is missing
  debug: true, // Enable debug mode
  resources: {
    en: {
      translation: require('./locales/en.json'), // English translation file
    },
    tel: {
        translation: require('./locales/tel.json'), // Telugu translation file
      },
  },
  lng: ['en'],
  interpolation: {
    escapeValue: false // React already does escaping
  }
});

export default i18n;
