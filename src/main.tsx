import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import WebApp from "telegram-mini-app";
import "./index.scss";
import { AppResolver } from "./components/AppResolver";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { HashRouter } from "react-router-dom";
import { TonConnectUI } from "@tonconnect/ui";
import LazyImportPlugin from "./LazyImportPlugin";

dayjs.extend(utc);
dayjs.extend(timezone);

i18n
  .use(LazyImportPlugin)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ru", "es"],
    interpolation: {
      escapeValue: false,
    },
  });

WebApp.isVerticalSwipesEnabled = false;
WebApp.isClosingConfirmationEnabled = true;
WebApp.ready();

export const connectorUI = new TonConnectUI({
  manifestUrl: "https://notlotorg.github.io/nolotto/tonconnect-manifest.json",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename={import.meta.env.VITE_BASE_URL}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppResolver />
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);
