import React from "react";
import { label } from "three/examples/jsm/nodes/Nodes.js";

type TypographyProps = {
  text?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "label"
    | "overline";
  fontWeight?: "normal" | "bold" | "bolder" | "lighter" | "initial" | "inherit";
  color?: string;
  sx?: React.CSSProperties;
};

export const Typography: React.FC<TypographyProps> = ({
  text,
  variant = "body1",
  fontWeight = "normal",
  color = "var(--color-black)",
  sx,
}) => {
  const variants = {
    h1: {
      fontSize: 96,
      fontWeight: "bold",
    },
    h2: {
      fontSize: 60,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 48,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 34,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h6: {
      fontSize: 20,
      fontWeight: "bold",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: "bold",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: "bold",
    },
    body1: {
      fontSize: 16,
      fontWeight: "normal",
    },
    body2: {
      fontSize: 14,
      fontWeight: "normal",
    },
    caption: {
      fontSize: 12,
      fontWeight: "normal",
    },
    overline: {
      fontSize: 10,
      fontWeight: "normal",
    },
    label: {
      fontSize: 14,
      fontWeight: 700,
    },
  };

  return (
    <div
      style={{
        fontSize: variants[variant].fontSize,
        fontWeight: variants[variant].fontWeight,
        color: color,
        ...sx,
      }}
    >
      {text}
    </div>
  );
};
