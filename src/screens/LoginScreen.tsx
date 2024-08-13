import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTranslation } from "react-i18next";

export const LoginScreen = ({ onAutheSuccess }: any) => {
  const { t } = useTranslation();
  return (
    <>
      {t("app.title")}
      <button onClick={() => onAutheSuccess()}>Click me!</button>
      <TonConnectButton />
    </>
  );
};
