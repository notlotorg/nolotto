import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { ProfilePage } from "../pages/ProfilePage";
import { ApplicationHolderPage } from "../pages/ApplicationHolderPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ApplicationHolderPage />}>
        <Route path="/home" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
