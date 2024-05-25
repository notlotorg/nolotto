import React from "react";
import { Routes, Route, Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

const AuthRoutes = () => {
  return (
    <RouterProvider router={createBrowserRouter([{
      path: "/login",
      element: <LoginPage />
      },{
      path: "*",
      element: <Navigate to={"/login"} />
    }], {
      basename: "/cow-firm-twa"
    })}>
      {/* <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to={"/login"} />} /> */}
    </RouterProvider>
  );
};

export default AuthRoutes;
