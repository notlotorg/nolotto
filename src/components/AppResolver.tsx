import React, { useEffect, useLayoutEffect } from "react";
import { LoginScreen } from "../screens/LoginScreen";
import "../App.scss";
import { MainApp } from "../modules/MainApp";
import WebApp from "telegram-mini-app";
import AppRoutes from "../routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

export const AppResolver = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  useLayoutEffect(() => {
    WebApp.expand();
  }, []);

  return (
    <BrowserRouter basename="/notlot">
      {!isAuthenticated ? (
        <LoginScreen onAutheSuccess={() => setIsAuthenticated(true)} />
      ) : (
        <AppRoutes />
      )}
    </BrowserRouter>
  );
};
