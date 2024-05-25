import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
