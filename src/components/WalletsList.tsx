import React from "react";
import { IWallet } from "../models/IWallet";
import { Spinner } from "./Spinner";
import { createUseStyles } from "react-jss";
import NextArrow from "../assets/svg/chevron-right.svg";

const filterList = [
  "telegram-wallet",
  "tonkeeper",
  "mytonwallet",
  // "openmask",
  "tonhub",
  // "dewallet",
  // "xtonwallet",
  "tonwallet",
  // "bitgetTonWallet",
  // "safepalwallet",
  // "okxTonWallet",
  // "okxTonWalletTr",
  // "hot",
  // "bybitTonWallet",
  // "GateWallet",
  // "binanceWeb3TonWallet",
];

type WalletsListProps = {
  wallets: IWallet[];
  onWalletClick: (wallet: IWallet) => void;
  listIsLoading: boolean;
};

const styles = createUseStyles({
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "var(--color-grey)",
    borderRadius: 50,
    padding: "0 14px 0 0",
    gap: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "var(--color-orange)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    "& img": {
      width: "100%",
      maxWidth: "100%",
      // maxHeight: "100%",
      // borderRadius: "50%",
    },
  },
  meta: {
    display: "flex",
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  btn: {
    width: 20,
    marginLeft: "auto",
  },
});

export const WalletsList: React.FC<WalletsListProps> = ({
  wallets,
  onWalletClick,
  listIsLoading,
}) => {
  const classes = styles();
  return (
    <>
      {listIsLoading && <Spinner />}
      <ul className={classes.list}>
        {wallets
          .filter((el) => filterList.includes(el.appName))
          .map((wallet) => (
            <li
              key={wallet.name}
              className={classes.item}
              onClick={() => onWalletClick(wallet)}
            >
              <div className={classes.icon}>
                <img src={wallet.imageUrl} alt={wallet.name} />
              </div>
              <div className={classes.title}>
                {wallet.appName === "telegram-wallet" && "Telegram "}
                {wallet.name}
              </div>

              <div className={classes.btn}>
                <NextArrow />
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
