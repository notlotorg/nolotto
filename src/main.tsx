import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import WebApp from "telegram-mini-app";
import "./index.scss";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AppResolver } from "./components/AppResolver";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import enLang from "./lang/en.json";
import ruLang from "./lang/ru.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const defLang = navigator.language || navigator.languages[0] || "en";
const langToUse = defLang.length > 2 ? defLang.slice(0, 2) : defLang;

i18n.use(initReactI18next).init({
  // the translations
  // (tip move them in a JSON file and import them,
  // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
  resources: {
    en: {
      translation: enLang,
    },
    ru: {
      translation: ruLang,
    },
  },
  lng: langToUse,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://ddtch.github.io/nolotto/tonconnect-manifest.json">
      <Suspense fallback={<div>Loading...</div>}>
        <AppResolver />
      </Suspense>
    </TonConnectUIProvider>
  </React.StrictMode>
);
