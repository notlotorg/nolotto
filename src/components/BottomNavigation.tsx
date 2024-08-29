import React from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";
import { useLocation, useNavigate } from "react-router-dom";
import homeIcon from "../assets/menu-icons/menu-1.png";
import gameIcon from "../assets/menu-icons/menu-2.png";
import tasksIcon from "../assets/menu-icons/menu-3.png";
import lottoIcon from "../assets/menu-icons/menu-4.png";

const navStyles = createUseStyles({
  navHolder: {
    margin: 0 + " auto",
    backgroundColor: "var(--color-light-grey)",
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
    fontSize: 12,
    userSelect: "none",
    color: "#fff",
  },
  activeNavItem: {
    color: "var(--color-orange)",
  },
  iconHolder: {
    width: 40,
    height: 40,
    "& img": {
      maxWidth: "100%",
      maxHeight: "100%",
      width: "100%",
      height: "100%",
    },
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
      icon: homeIcon,
    },
    {
      id: "game",
      link: "/game",
      icon: gameIcon,
    },
    {
      id: "tasks",
      link: "/tasks",
      icon: tasksIcon,
    },
    {
      id: "lotto",
      link: "/lotto",
      icon: lottoIcon,
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
              <div className={classes.iconHolder}>
                <img src={item.icon} alt={item.id} />
              </div>
              {t(item.id)}
            </div>
          );
        })}
      </div>
    </div>
  );
};
