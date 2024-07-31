import { useState } from "react";

import WebApp from "@twa-dev/sdk";
import { AppChecker } from "./AppChecker";
import { BrowserRouter } from "react-router-dom";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://ddtch.github.io/nolotto/tonconnect-manifest.json">
      <BrowserRouter>
        <AppChecker />
      </BrowserRouter>
    </TonConnectUIProvider>
  );
}

export default App;
