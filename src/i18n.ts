import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend  from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(HttpBackend )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `./locales/{{lng}}.json`,
    },
    react: {
      useSuspense: false,
    },
    fallbackLng: 'en',
    preload: ['en'],
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export default i18next;
