import React from "react";
import { TonConnectButton } from "@tonconnect/ui-react";

export const LoginScreen = ({ onAutheSuccess }: any) => {
  return (
    <>
      Hello and welcome to the login page!
      <button onClick={() => onAutheSuccess()}>Click me!</button>
      <TonConnectButton />
    </>
  );
};
