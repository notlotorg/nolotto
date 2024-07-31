import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

const AuthRoutes = () => {
  return (
    // <RouterProvider router={createBrowserRouter([{
    //   path: "/login",
    //   element: <LoginPage />
    //   },{
    //   path: "*",
    //   element: <Navigate to={"/login"} />
    // }], {
    //   basename: "/cow-firm-twa"
    // })}>
    //   {/* <Route path="/login" element={<LoginPage />} />
    //   <Route path="*" element={<Navigate to={"/login"} />} /> */}
    // </RouterProvider>
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AuthRoutes;
