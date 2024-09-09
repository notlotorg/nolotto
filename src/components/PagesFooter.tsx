import React from "react";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";

export type FooterLinks =
  | "game-rules"
  | "smart-contract"
  | "support"
  | "faq"
  | "privacy-policy"
  | "terms-and-conditions";

type PagesFooterProps = {
  shownLinks: Array<FooterLinks>;
  wrapperStyles?: React.CSSProperties;
};

const styles = createUseStyles({
  footer: {
    padding: "0 20px",
    // grid 2 columns full width. left column align text left, right col alignt text right
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
    gap: 10,
    marginBottom: 20,
    opacity: 0.6,
  },
  link: {
    color: "var(--color-gret)",
    fontSize: 16,
    textDecoration: "none",
    textTransform: "capitalize",
    "&:nth-child(even)": {
      textAlign: "right",
    },
  },
});

export const PagesFooter: React.FC<PagesFooterProps> = ({
  shownLinks,
  wrapperStyles,
}) => {
  const classes = styles();

  const { t } = useTranslation();

  const availableLinks: Record<FooterLinks, string> = {
    "game-rules": "Game Rules",
    "smart-contract": "Smart Contract",
    support: "Support",
    faq: "FAQ",
    "privacy-policy": "Privacy Policy",
    "terms-and-conditions": "Terms and Conditions",
  };
  return (
    <div
      className={classes.footer}
      style={{
        ...wrapperStyles,
      }}
    >
      {
        // show only links that are in the shownLinks array
        Object.keys(availableLinks).map((link) => {
          if (shownLinks.includes(link as FooterLinks)) {
            return (
              <a key={link} href={`/${link}`} className={classes.link}>
                {t(availableLinks[link as FooterLinks])}
              </a>
            );
          }
          return null;
        })
      }
    </div>
  );
};
