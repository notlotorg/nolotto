import React from "react";

type MainButtonProps = {
  onClick?: () => void;
  title?: string;
  secondary?: boolean;
  sx?: React.CSSProperties;
  disabled?: boolean;
};

export const MainButton: React.FC<MainButtonProps> = ({
  onClick,
  title,
  secondary,
  sx,
  disabled,
}) => {
  return (
    <div
      style={{
        background: `var(--color-${secondary ? "grey" : "orange"})`,
        width: "100%",
        fontWeight: 700,
        textAlign: "center",
        borderRadius: 16,
        fontSize: 20,
        textTransform: "uppercase",
        padding: "10px 0",
        ...sx,
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
