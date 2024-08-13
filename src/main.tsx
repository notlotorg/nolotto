import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import WebApp from "telegram-mini-app";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AppResolver } from "./components/AppResolver";

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
