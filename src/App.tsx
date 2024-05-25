import { useState } from "react";

import WebApp from "@twa-dev/sdk";
import { AppChecker } from "./AppChecker";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AppChecker />
      </BrowserRouter>
    </>
  );
}

export default App;
