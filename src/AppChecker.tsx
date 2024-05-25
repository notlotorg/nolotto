import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRoutes from "./routes/AuthRoutes";
import AppRoutes from "./routes/AppRoutes";

export const AppChecker = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return <>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</>;
};
