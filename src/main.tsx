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
import esLang from "./lang/es.json";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { BrowserRouter } from "react-router-dom";

dayjs.extend(utc);
dayjs.extend(timezone);

const defLang = navigator.language || navigator.languages[0] || "en";
const langToUse = defLang.length > 2 ? defLang.slice(0, 2) : defLang;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enLang,
    },
    ru: {
      translation: ruLang,
    },
    es: {
      translation: esLang,
    },
  },
  lng: langToUse,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

WebApp.isVerticalSwipesEnabled = false;
WebApp.isClosingConfirmationEnabled = true;
WebApp.ready();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      {/* <TonConnectUIProvider manifestUrl="https://ddtch.github.io/nolotto/tonconnect-manifest.json"> */}
      <Suspense fallback={<div>Loading...</div>}>
        <AppResolver />
      </Suspense>
    </BrowserRouter>
    {/* </TonConnectUIProvider> */}
  </React.StrictMode>
);
