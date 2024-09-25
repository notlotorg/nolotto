import React, { useEffect, useMemo, useState } from "react";
import { createUseStyles } from "react-jss";
import { CountDown } from "../components/CountDown";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { MainButton } from "../components/MainButton";
import { PagesFooter } from "../components/PagesFooter";
import { tonService } from "../services/ton.service";
import TonWeb from "tonweb";
import { TonConnectUI } from "@tonconnect/ui";
import { connectorUI } from "../main";
import { Spinner } from "../components/Spinner";

const tonweb = new TonWeb();

const styles = createUseStyles({
  homePage: {
    paddingTop: 10,
    maxHeight: "calc(100svh - 180px)",
    overflowY: "auto",
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
    padding: 20,
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
    padding: "0 20px",
  },
});

export const HomePage = () => {
  const classes = styles();
  const { t } = useTranslation();

  const [walletIsConnected, setWalletIsConnected] = useState<
    undefined | boolean
  >(undefined);
  const [walletAddress, setWalletAddress] = useState<string>("");

  const initiateConnect = async () => {
    await connectorUI.openModal();
  };

  useEffect(() => {
    if (!connectorUI) return;
    connectorUI.connector.restoreConnection();

    //@ts-ignore
    setWalletIsConnected(connectorUI.walletInfo !== null);

    connectorUI.connector.onStatusChange(
      (wallet) => {
        if (wallet) {
          setWalletIsConnected(wallet.account.address.length > 0);
          tonweb.getBalance(wallet.account.address).then((balance) => {
            console.log("balance", balance);
          });
          setWalletAddress(wallet.account.address);
        }
      },
      (err) => {
        console.error("error occured", err);
        setWalletIsConnected(false);
      }
    );
    return () => {};
  }, [connectorUI]);

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
        {walletIsConnected === undefined ? (
          <Spinner />
        ) : !walletAddress ? (
          <MainButton
            title={t("app.connect-wallet")}
            onClick={initiateConnect}
          />
        ) : (
          <MainButton
            title={walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4)}
          />
        )}
      </div>

      <PagesFooter
        shownLinks={["game-rules", "smart-contract", "support", "faq"]}
      />
    </div>
  );
};
