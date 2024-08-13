import React from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends Omit<RouteProps, "element"> {
  isAuthenticated: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  ...rest
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
