import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../components/BottomNavigation";
import { createUseStyles } from "react-jss";
import AppRoutes from "../routes/AppRoutes";

const mainAppStyles = createUseStyles({
  mainAppHolder: {
    display: "flex",
    flexDirection: "column",
    height: "var(--tg-viewport-stable-height)",
    border: "1px solid red",
  },
  mainContentHolder: {
    flexGrow: 1,
    maxHeight: "calc(var(--tg-viewport-stable-height) - 90px)",
    border: "1px solid blue",
    overflowY: "auto",
    scrollbarWidth: "none",
    WebkitAppearance: "none",
  },
  header: {
    height: 50,
  },
  footer: {
    position: "fixed",
    bottom: 20,
    left: 0,
    zIndex: 100,
    width: "100%",
  },
});

export const MainApp = () => {
  const classes = mainAppStyles();

  return (
    <div className={classes.mainAppHolder}>
      <header className={classes.header}>This is main app</header>

      <section className={classes.mainContentHolder}>
        <Outlet />
      </section>

      <footer className={classes.footer}>
        <BottomNavigation />
      </footer>
    </div>
  );
};
