import React from "react";
import { createUseStyles } from "react-jss";

const style = createUseStyles({
  spinner: {
    animation: "$rotate 2s linear infinite",
    zIndex: 2,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // margin: "-25px 0 0 -25px",
    width: 25,
    height: 25,
  },

  path: {
    stroke: "rgb(210, 70, 75)",
    strokeLinecap: "round",
    animation: "$dash 1.5s ease-in-out infinite",
  },

  "@keyframes rotate": {
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  "@keyframes dash": {
    "0%": {
      strokeDasharray: "1, 150",
      strokeDashoffset: 0,
    },
    "50%": {
      strokeDasharray: "90, 150",
      strokeDashoffset: -35,
    },
    "100%": {
      strokeDasharray: "90, 150",
      strokeDashoffset: -124,
    },
  },
});

export const Spinner = () => {
  const classes = style();
  return (
    <svg className={classes.spinner} viewBox="0 0 50 50">
      <circle
        className={classes.path}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};
