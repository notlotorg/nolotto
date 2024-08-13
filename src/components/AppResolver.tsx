import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import "../App.scss";

export const AppResolver = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <LoginScreen onAutheSuccess={() => setIsAuthenticated(true)} />
      ) : null}
    </>
  );
};
