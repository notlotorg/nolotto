import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { MainApp } from "../modules/MainApp";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";
import { TasksPage } from "../pages/TasksPage";
import { LottoPage } from "../pages/LottoPage";
import { ProfilePage } from "../pages/ProfilePage";

// const MainApp = React.lazy(() =>
//   import("../modules/MainApp").then((module) => ({ default: module.MainApp }))
// );

// const HomePage = React.lazy(() =>
//   import("../pages/HomePage").then((module) => ({ default: module.HomePage }))
// );

// const GamePage = React.lazy(() =>
//   import("../pages/GamePage").then((module) => ({ default: module.GamePage }))
// );

// const TasksPage = React.lazy(() =>
//   import("../pages/TasksPage").then((module) => ({ default: module.TasksPage }))
// );

// const ProfilePage = React.lazy(() =>
//   import("../pages/ProfilePage").then((module) => ({
//     default: module.ProfilePage,
//   }))
// );

// const LottoPage = React.lazy(() =>
//   import("../pages/LottoPage").then((module) => ({ default: module.LottoPage }))
// );

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainApp />}>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/lotto" element={<LottoPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/home"} replace />} />
    </Routes>
  );
};

export default AppRoutes;
