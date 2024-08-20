import React from "react";
import { Outlet } from "react-router-dom";
import { BottomNavigation } from "../components/BottomNavigation";
import { createUseStyles } from "react-jss";
import AppRoutes from "../routes/AppRoutes";

const commonCircleIconStyles = {
  width: 50,
  height: 50,
  minHeight: 50,
  minWidth: 50,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  border: "1px solid #fff",
};

const mainAppStyles = createUseStyles({
  mainAppHolder: {
    display: "flex",
    flexDirection: "column",
    height: "var(--tg-viewport-stable-height)",
    // border: "1px solid red",
  },
  mainContentHolder: {
    flexGrow: 1,
    maxHeight: "calc(var(--tg-viewport-stable-height) - 90px)",
    // border: "1px solid blue",
    overflowY: "auto",
    scrollbarWidth: "none",
    WebkitAppearance: "none",
  },
  header: {
    height: 64,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
  },
  footer: {
    position: "fixed",
    bottom: 20,
    left: 0,
    zIndex: 100,
    width: "100%",
  },
  circleIcon: {},
  logo: {
    ...commonCircleIconStyles,
    marginRight: 20,
  },
  profile: {
    ...commonCircleIconStyles,
    marginLeft: 20,
  },
  moneyPanel: {
    display: "flex",
    gap: 40,
  },
  tag: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    fontWeight: 600,
  },
});

export const MainApp = () => {
  const classes = mainAppStyles();

  return (
    <div className={classes.mainAppHolder}>
      <header className={classes.header}>
        <div className={classes.logo}>LO</div>

        <div className={classes.moneyPanel}>
          <div className={classes.tag}>10,000 TKT</div>
          {/* <div className={classes.tag}>100,000,000 LOT</div> */}
          <div className={classes.tag}>100,000 TON</div>
        </div>

        <div className={classes.profile}>PR</div>
      </header>

      <section className={classes.mainContentHolder}>
        <Outlet />
      </section>

      <footer className={classes.footer}>
        <BottomNavigation />
      </footer>
    </div>
  );
};
