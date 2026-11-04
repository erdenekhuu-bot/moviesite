import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import mnTranslation from './locales/mn.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      mn: { translation: mnTranslation },
    },
    lng: 'mn',
    fallbackLng: 'mn',
    supportedLngs: ['en', 'mn'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;