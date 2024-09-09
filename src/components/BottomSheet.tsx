import React, { PropsWithChildren, useEffect } from "react";
import { createUseStyles } from "react-jss";
import CloseIcon from "../assets/svg/ex-mark.svg";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

type BottomSheetProps = {
  open?: boolean;
  onOpened?: () => void;
  onClosed?: () => void;
  onBackdropClick?: () => void;
};

const styles = createUseStyles({
  backDrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: 0,
    backdropFilter: "blur(0px)",
    zIndex: 999,
    transform: "translateY(0)",
    animation: "$fadeIn 0.3s forwards",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 52,
    padding: "0 10px",
    borderBottom: "1px solid rgba(255,255,255, 0.2)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  bottomSheet: {
    position: "fixed",
    width: "100%",
    height: "90%",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transform: "translateY(0)",
    animation: "$slideIn 0.3s forwards",
    background: "#1f1e1c",
    boxShadow: "0px -6px 10px 4px rgba(0,0,0,.5)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  sheetContent: {
    padding: 10,
    overflowY: "auto",
    height: "calc(100% - 42px)",
    background: "",
    width: "100%",
  },
  closeBtn: {
    display: "flex",
    alignItems: "center",
    opacity: 0.6,
    "& svg": {
      width: 16,
      height: 16,
      marginTop: 3,
      marginLeft: 4,
    },
  },
  hideBackdrop: {
    animation: "$fadeOut 0.3s forwards",
  },
  hideContent: {
    animation: "$slideOut 0.3s forwards",
  },
  "@keyframes fadeIn": {
    "100%": {
      opacity: 1,
      backdropFilter: "blur(2px)",
      visibility: "visible",
    },
  },
  "@keyframes fadeOut": {
    "100%": {
      opacity: 0,
      backdropFilter: "blur(0px)",
      transform: "translateY(100%)",
      visibility: "hidden",
    },
  },
  "@keyframes slideIn": {
    "100%": {
      transform: "translateY(0)",
    },
  },
  "@keyframes slideOut": {
    "100%": {
      transform: "translateY(100%)",
    },
  },
});

export const BottomSheet: React.FC<BottomSheetProps & PropsWithChildren> = ({
  open,
  onOpened,
  onClosed,
  onBackdropClick,
  children,
}) => {
  const classes = styles();
  const { t } = useTranslation();

  const [animateOut, setAnimateOut] = React.useState(false);

  const backdropClasses = classNames(classes.backDrop, {
    [classes.hideBackdrop]: animateOut,
  });

  const contentClasses = classNames(classes.bottomSheet, {
    [classes.hideContent]: animateOut,
  });

  useEffect(() => {
    if (open) {
      setAnimateOut(false);
      onOpened?.();
    }
  }, [open]);

  useEffect(() => {
    if (animateOut) {
      setTimeout(() => {
        onClosed?.();
      }, 320);
    }
  }, [animateOut]);

  return (
    <>
      {!open ? null : (
        <>
          <div
            className={backdropClasses}
            onClick={() => {
              console.log("backdrop click");
              setAnimateOut(true);
            }}
          />
          <div className={contentClasses}>
            <div className={classes.header}>
              <div></div>
              <div
                className={classes.closeBtn}
                onClick={() => setAnimateOut(true)}
              >
                {t("close")}
                <CloseIcon />
              </div>
            </div>
            <div className={classes.sheetContent}>{children}</div>
          </div>
        </>
      )}
    </>
  );
};
