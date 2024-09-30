import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";
import { Typography } from "../components/Typography";
import { Divider } from "../components/Divider";
import { MainButton } from "../components/MainButton";
import { connectorUI } from "../main";
import { Spinner } from "../components/Spinner";
import WebApp from "telegram-mini-app";
import { is } from "@react-three/fiber/dist/declarations/src/core/utils";

const langs = [
  {
    id: "ru",
    title: "Русский",
  },
  {
    id: "en",
    title: "English",
  },
  {
    id: "es",
    title: "Español",
  },
];

const styles = createUseStyles({
  wrapper: {
    padding: 10,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    marginBottom: 8,
  },
});

export const ProfilePage = () => {
  const classes = styles();

  const { t, i18n } = useTranslation();

  const [activeLang, setActiveLang] = React.useState("en");

  const [isConneccted, setIsConnected] = React.useState<boolean | undefined>(
    undefined
  );

  const handleLangChange = (langId: string) => {
    i18n.changeLanguage(langId);
    setActiveLang(langId);
  };

  const getWalletFunds = async () => {};

  const handleDisconnect = async () => {
    try {
      WebApp.showConfirm(
        "Are you sure you want to disconnect?",
        (confirmed) => {
          if (confirmed) {
            connectorUI.disconnect();
          }
        }
      );
    } catch (error) {
      connectorUI.disconnect();
    }
  };

  const handleConnect = async () => {
    connectorUI.openModal();
  };

  useEffect(() => {
    if (!connectorUI) return;
    //@ts-ignore
    setIsConnected(connectorUI.walletInfo !== null);
    connectorUI.onStatusChange(
      (wallet) => {
        const isConneccted =
          wallet !== null && wallet.account.address.length > 0;
        setIsConnected(isConneccted);
        if (isConneccted) {
          try {
            WebApp.showAlert("Congrats! You are connected!");
          } catch (error) {
            alert("Congrats! You are connected!");
          }
        }
      },
      (err) => {
        console.error("error occured", err);
        setIsConnected(false);
      }
    );
  }, []);

  return (
    <div className={classes.wrapper}>
      <Typography
        variant={"subtitle1"}
        text={t("my") + " " + t("balance")}
        sx={{
          textTransform: "capitalize",
        }}
      />

      <Divider />

      <Typography
        variant={"subtitle1"}
        text={t("select-lang")}
        sx={{
          textTransform: "capitalize",
        }}
      />
      <select
        defaultValue={activeLang}
        onChange={(e) => handleLangChange(e.target.value as string)}
      >
        {langs.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.title}
          </option>
        ))}
      </select>
      <Divider />

      {isConneccted === undefined ? (
        <Spinner />
      ) : isConneccted ? (
        <MainButton
          sx={{
            width: "max-content",
            padding: 4,
            fontSize: 14,
            fontWeight: 400,
            borderRadius: 4,
          }}
          title={t("disconnect-wallet")}
          onClick={handleDisconnect}
        />
      ) : (
        <MainButton
          sx={{
            width: "max-content",
            padding: 4,
            fontSize: 14,
            fontWeight: 400,
            borderRadius: 4,
          }}
          title={t("connect-wallet")}
          onClick={handleConnect}
        />
      )}
      {/* <ul className={classes.list}>
        {langs.map((lang) => (
          <li
            key={lang.id}
            className={classes.item}
            style={{
              color: lang.id === activeLang ? "var(--color-orange)" : "#fff",
            }}
            onClick={() => handleLangChange(lang.id)}
          >
            {lang.title}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
