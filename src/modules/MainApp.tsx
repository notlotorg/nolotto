import React from "react";
import { Outlet } from "react-router-dom";

export const MainApp = () => {
  return (
    <div>
      <header>This is main app</header>
      <Outlet />
    </div>
  );
};
