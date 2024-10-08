import React, { useEffect, useLayoutEffect } from "react";
import { LoginScreen } from "../screens/LoginScreen";
import "../App.scss";
import WebApp from "telegram-mini-app";
import AppRoutes from "../routes/AppRoutes";

export const AppResolver = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  useLayoutEffect(() => {
    WebApp.expand();
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        <LoginScreen onAutheSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <AppRoutes />
      )}
    </>
  );
};
