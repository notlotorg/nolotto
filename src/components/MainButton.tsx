import React from "react";

type MainButtonProps = {
  onClick?: () => void;
  title?: string;
};

export const MainButton: React.FC<MainButtonProps> = ({ onClick, title }) => {
  return (
    <div
      style={{
        background: "var(--color-orange)",
        width: "100%",
        fontWeight: 700,
        textAlign: "center",
        borderRadius: 16,
        fontSize: 20,
        textTransform: "uppercase",
        padding: "10px 0",
      }}
      onClick={onClick}
    >
      {title}
    </div>
  );
};
