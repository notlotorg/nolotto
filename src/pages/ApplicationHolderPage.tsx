import React from "react";
import { Outlet } from "react-router-dom";

export const ApplicationHolderPage = () => {
  return (
    <>
      <div>Menu is here</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
