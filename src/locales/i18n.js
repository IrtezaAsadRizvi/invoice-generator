import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json'
import no from './no/translation.json'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: { translation: en },
    no: { translation: no }
};

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        supportedLngs: ['en', 'no'],
        resources,
        detection: {
            order: ['path', 'cookie', 'localStorage', 'navigator'],
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

export const getCurrentLocalePath = () => {
    const currentUrl = window.location.pathname;
    const localePattern = /^\/(en|no)\//;
    
    
    const urlWithoutLocale = currentUrl.replace(localePattern, '/');
    
    return urlWithoutLocale; 
}