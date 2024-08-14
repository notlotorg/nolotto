import React from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";
import { useLocation, useNavigate } from "react-router-dom";

const navStyles = createUseStyles({
  navHolder: {
    margin: 0 + " auto",
    backgroundColor: "#3b3b3b",
    maxWidth: "90%",
    borderRadius: 60,
    padding: "10px 35px",
  },
  itemsHolder: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    justifySelf: "flex-end",
  },
  navItem: {
    height: 54,
    width: 54,
    borderRadius: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    color: "#fff",
  },
  activeNavItem: {
    color: "#fe6507",
  },
});

type BottomNavigationProps = {};

export const BottomNavigation: React.FC<BottomNavigationProps> = () => {
  const classes = navStyles();
  const location = useLocation();
  const nav = useNavigate();

  const { t } = useTranslation();

  const navItems = [
    {
      id: "home",
      link: "/home",
    },
    {
      id: "game",
      link: "/game",
    },
    {
      id: "tasks",
      link: "/tasks",
    },
    {
      id: "lotto",
      link: "/lotto",
    },
  ];

  return (
    <div className={classes.navHolder}>
      <div className={classes.itemsHolder}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <div
              key={item.id}
              className={`${classes.navItem} ${
                isActive ? classes.activeNavItem : ""
              }`}
              onClick={() => nav(item.link)}
            >
              {t(item.id)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
