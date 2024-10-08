import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { MainButton } from "../components/MainButton";
import { useTranslation } from "react-i18next";
import { PagesFooter } from "../components/PagesFooter";
import { BottomSheet } from "../components/BottomSheet";
import { FormField } from "../components/FormField";
import WebApp from "telegram-mini-app";
import { connectorUI } from "../main";
import { CHAIN, SendTransactionRequest } from "@tonconnect/ui";
import { tonService } from "../services/ton.service";
import { Cell } from "@ton/core";
import { Typography } from "../components/Typography";
const MOCK_BOC =
  "te6cckEBBAEAtwAB5YgBjMX+8hju03Zm8LshWb3h1acCNfSaeNSbeVfLHBdhQjADm0s7c////+s30VjgAAAAFc6IYYUanEtxSDGH9snK1LtuugVC8DFbw9incBU7rZTKQXRBXJqofaWHYBeofRMOn11mVkst8z79hwZT4Uc8PBcBAgoOw8htAwMCAGhCAHbCh725JT21X5zkt4J1kQgPLl+/uPBJK1sIgV87gzgpoHc1lAAAAAAAAAAAAAAAAAAAAABg1X8t";
const styles = createUseStyles({
  pageHolder: {
    padding: "0 20px",
    overflowY: "auto",
    display: "flex",
    flexFlow: "column nowrap",
    height: "calc(100vh - 180px)",
  },
  banner: {
    width: "100%",
    height: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: 10,
    marginBottom: 20,
  },
  pageFooter: {
    display: "flex",
    flexFlow: "column nowrap",
    marginTop: "auto",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "var(--color-orange)",
    textTransform: "uppercase",
    marginBottom: 20,
  },
});

const fixedPrice = 0.25;

export const LottoPage = () => {
  const classes = styles();
  const { t } = useTranslation();

  const webClient = tonService.getTonWebClient();

  const [purchaseInProgress, setPurchaseInProgress] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [price, setPrice] = useState(fixedPrice);
  const [resp, setResp] = useState("");
  const [err, setErr] = useState("");
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [ticketsCount, setTicketsCount] = useState(1);

  // const _prepareMessage = async (): Promise<string> => {
  //   let cell = new webClient.boc.Cell();
  //   cell.bits.writeUint(0, 32);
  //   cell.bits.writeString("Buy tickets, win LOT with NOTLOT!");
  //   return webClient.utils.bytesToBase64(await cell.toBoc());
  // };

  // const _parseBoC = async (boc: string) => {
  //   const payload = await _prepareMessage();
  //   console.log("payload", payload);
  //   const cell = await webClient.boc.Cell.oneFromBoc(payload).hash();
  //   console.log("cell", cell);
  // };

  const sendTransaction = async () => {
    if (!connectorUI.connected) {
      alert("Please connect wallet to send the transaction!");
    }

    const getNetwork =
      import.meta.env.VITE_ENV === "development"
        ? CHAIN.TESTNET
        : CHAIN.MAINNET;

    const getWalletAddress =
      import.meta.env.VITE_ENV === "development"
        ? "0QDthQ97ckp7ar85yW8E6yIQHly_f3Hgkla2EQK-dwZwU3_f" // testnet address
        : "UQAgQ9MZdO_cFde80Mlna-i3Gh_IjVvvN3p8vuyliUk49MmG"; // lucky real address

    const transaction: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 300, // 5 min
      network: getNetwork,
      messages: [
        {
          address: getWalletAddress,
          amount: webClient.utils.toNano(price.toString()).toString(),
          // payload: await prepareMessage(),
        },
      ],
    };

    // setResp(JSON.stringify(transaction, null, 2));

    try {
      const result = await connectorUI.sendTransaction(transaction, {
        skipRedirectToWallet: "never",
        modals: ["before", "error"],
        notifications: "all",
      });

      if (result.boc.length > 0) {
        setPurchaseInProgress(false);
        setPurchaseSuccess(true);
      }

      setResp(JSON.stringify(result, null, 2));
    } catch (e: any) {
      setErr(JSON.stringify(e, null, 2));
      // if (e instanceof UserRejectedError) {
      //   alert(
      //     "You rejected the transaction. Please confirm it to send to the blockchain"
      //   );
      // } else {
      //   alert("Unknown error happened", e);
      // }
    }
  };

  const handleBuyTickets = () => {
    setPurchaseSuccess(false);
    if (Number(price) === 0) {
      return WebApp.showAlert("Please enter the number of tickets");
    }
    setPurchaseInProgress(true);
  };

  const handlePurchaseClosed = () => {
    setPurchaseInProgress(false);
  };

  const openTicketsList = () => {
    setPurchaseInProgress(false);
    setPurchaseSuccess(false);
    setShowTickets(true);
  };

  const showBocHash = async () => {
    const cell = new webClient.boc.Cell().toBoc();
    const coreCell = Cell.fromBase64(MOCK_BOC);
    console.log("cell core", coreCell.hash());

    // cell.hash().then((hash) => {
    //   console.log("hash", hash);
    // });
    // cell.toBoc().then(async (boc) => {
    //   console.log("boc", boc);
    //   const parsed = await webClient.boc.Cell.fromBoc(MOCK_BOC);
    //   console.log("parsed", parsed);
    // });
    // console.log("cell", cell, MOCK_BOC);
  };

  return (
    <div className={classes.pageHolder}>
      {!purchaseSuccess ? (
        <>
          <div className={classes.banner}>1</div>

          <div className={classes.title}>{t("titles.welcome-to")}</div>
          <div className={classes.subTitle}>{t("titles.new-years-lotto")}</div>
        </>
      ) : (
        <>
          <div
            className={classes.subTitle}
            style={{
              fontSize: 22,
            }}
          >
            {t("app.purchase-success")}
          </div>
          <div className={classes.banner}>1</div>
          <div
            className={classes.title}
            style={{
              fontWeight: "medium",
              fontSize: 18,
            }}
          >
            You purchased {ticketsCount} {t("ticket")}
          </div>
        </>
      )}

      <div>
        <MainButton
          title={t("app.buy-tickets")}
          sx={{
            marginBottom: 20,
          }}
          onClick={handleBuyTickets}
        />
        <MainButton
          secondary
          title={t("app.my-tickets")}
          onClick={openTicketsList}
        />
      </div>

      <div className={classes.pageFooter}>
        <PagesFooter
          shownLinks={["game-rules", "support"]}
          wrapperStyles={{
            padding: 0,
          }}
        />
      </div>

      <BottomSheet open={purchaseInProgress} onClosed={handlePurchaseClosed}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <FormField
            label="Number of tickets"
            type="tel"
            bold
            defaultValue="1"
            textAlign="center"
            onChange={(vl) => {
              const newPrice = parseFloat(vl) * fixedPrice;
              setPrice(isNaN(newPrice) ? 0 : newPrice);
              setTicketsCount(parseInt(vl));
            }}
            sx={{
              fontSize: 18,
            }}
          />
          <FormField
            label="Total price"
            type="text"
            value={price.toString() + " TON"}
            disabled
            textAlign="center"
            bold
          />
        </div>
        <MainButton
          title={t("app.buy-ticket")}
          sx={{
            marginTop: 20,
          }}
          onClick={sendTransaction}
        />
        <div
          style={{
            height: 300,
            overflowY: "auto",
          }}
        >
          <pre>{resp}</pre>
          <br />
          <pre>{err}</pre>
        </div>
      </BottomSheet>

      <BottomSheet open={showTickets} onClosed={() => setShowTickets(false)}>
        tickets list
      </BottomSheet>
    </div>
  );
};
