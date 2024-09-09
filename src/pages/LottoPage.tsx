import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { MainButton } from "../components/MainButton";
import { useTranslation } from "react-i18next";
import { PagesFooter } from "../components/PagesFooter";
import { BottomSheet } from "../components/BottomSheet";
import { FormField } from "../components/FormField";
import { Typography } from "../components/Typography";

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

  const [purchaseInProgress, setPurchaseInProgress] = useState(false);
  const [price, setPrice] = useState(fixedPrice);

  const handleBuyTickets = () => {
    setPurchaseInProgress(true);
  };

  const handlePurchaseClosed = () => {
    // alert("purchesed");
    setPurchaseInProgress(false);
  };

  return (
    <div className={classes.pageHolder}>
      <div className={classes.banner}>1</div>

      <div className={classes.title}>{t("welcome-to")}</div>
      <div className={classes.subTitle}>{t("new-years-lotto")}</div>

      <div>
        <MainButton
          title={t("buy-tickets")}
          sx={{
            marginBottom: 20,
          }}
          onClick={handleBuyTickets}
        />
        <MainButton secondary title={t("my-tickets")} />
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
        <FormField
          label="Number of tickets"
          type="tel"
          defaultValue="1"
          onChange={(vl) => {
            const newPrice = parseFloat(vl) * fixedPrice;

            setPrice(isNaN(newPrice) ? 0 : newPrice);
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
      </BottomSheet>
    </div>
  );
};
