import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import "../App.scss";
import { MainApp } from "../modules/MainApp";

export const AppResolver = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <>
      {!isAuthenticated ? (
        <LoginScreen onAutheSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <MainApp />
      )}
    </>
  );
};
