import React from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  mainContainer: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    border: "1px solid red",
  },
});

export const LoginScreen = ({ onAutheSuccess }: any) => {
  const classes = styles();
  const { t } = useTranslation();
  return (
    <div className={classes.mainContainer}>
      {t("app.title")}
      <button onClick={() => onAutheSuccess()}>Click me!</button>
    </div>
  );
};
