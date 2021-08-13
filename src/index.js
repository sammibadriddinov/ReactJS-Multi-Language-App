import React, {StrictMode, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import i18n from 'i18next'
import {useTranslation, initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'bootstrap/dist/js/bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr', 'ar', 'uz'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });

const loading = (
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loading}>
    <StrictMode>
      <App/>
    </StrictMode>
  </Suspense>,
  document.getElementById('root')
);
