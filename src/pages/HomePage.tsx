import React from "react";
import { createUseStyles } from "react-jss";
import { CountDown } from "../components/CountDown";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { MainButton } from "../components/MainButton";

const styles = createUseStyles({
  homePage: {
    paddingTop: 10,
    "& h1": {
      textTransform: "uppercase",
      textAlign: "center",
      margin: 0,
    },
  },
  prize: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "var(--color-orange)",
    marginBottom: 20,
    lineHeight: "24px",
  },
  mainTable: {
    width: "100%",
    padding: 10,
    fontSize: 22,
    "& tr": {
      "& td": {
        borderBottom: "1px solid rgba(255,255,255, 0.06)",
      },
    },
    "& td": {
      borderSpacing: 0,
      textAlign: "left",
      verticalAlign: "top",
      textTransform: "capitalize",
      padding: "14px 0",
      "&:first-child": {
        width: 170,
        fontSize: 20,
      },
      "& span": {
        color: "var(--color-orange)",
        fontWeight: "bold",
      },
    },
  },
  btnWrapper: {
    margin: "20px auto",
    padding: "0 10px",
  },
  footerLinks: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 4,
    margin: "20px auto",
    padding: "0 10px",
    textTransform: "capitalize",
    opacity: 0.5,
    // align right column to the right
    "& div:nth-child(2n)": {
      justifySelf: "end",
    },
  },
});

export const HomePage = () => {
  const classes = styles();
  const { t } = useTranslation();
  return (
    <div className={classes.homePage}>
      <h1>{t("win")}</h1>
      <div className={classes.prize}>100,000 TON</div>
      <CountDown
        till={dayjs(new Date("December 31, 2024 23:59:55")).valueOf()}
      />
      <table className={classes.mainTable} cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td>{t("balance")}</td>
            <td>
              <b>TON</b> <span>20</span>
              <br />
              <b>LOT</b> <span>100,000</span>
            </td>
          </tr>
          <tr>
            <td>{t("status")}</td>
            <td>
              <b>{t("cooper")}</b>
            </td>
          </tr>
          <tr>
            <td>{t("ticket-amount")}</td>
            <td>
              <b>22</b>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={classes.btnWrapper}>
        <MainButton title={t("app.connect-wallet")} />
      </div>

      <div className={classes.footerLinks}>
        <div>{t("game-rules")}</div>
        <div>{t("smart-contract")}</div>
        <div>{t("support")}</div>
        <div>{t("faq")}</div>
      </div>
    </div>
  );
};
