import React from "react";
import { createUseStyles } from "react-jss";
import { Typography } from "./Typography";

type FormFieldProps = {
  type?: "text" | "password" | "email" | "number" | "tel";
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  sx?: React.CSSProperties;
  noMargin?: boolean;
  disabled?: boolean;
  required?: boolean;
  hasError?: boolean;
  hint?: string;
  textAlign?: "left" | "center" | "right";
  bold?: boolean;
  value?: string;
};

const styles = createUseStyles({
  label: {
    fontSize: 16,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    fontSize: 18,
    "&:placeholder": {
      fontSize: 18,
    },
    margin: 0,
  },
  hint: {
    color: "var(--color-grey)",
    fontSize: 12,
    marginTop: 4,
  },
});

export const FormField: React.FC<FormFieldProps> = ({
  type = "text",
  label,
  placeholder,
  defaultValue,
  onChange,
  textAlign = "left",
  bold,
  value,
  sx,
  noMargin,
  disabled,
  required,
  hasError,
  hint,
}) => {
  const classes = styles();
  return (
    <div
      style={{
        width: "100%",
        borderRadius: 8,
        marginBottom: noMargin ? 0 : 10,
      }}
    >
      {label && (
        <Typography
          variant="label"
          text={label}
          sx={{
            marginBottom: 4,
            ...(hasError && { color: "red" }),
          }}
        />
      )}
      <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => {
          let valueToSet = e.target.value;
          // if type number allow only number, remove any other characters
          if (type === "number" || type === "tel") {
            valueToSet = e.target.value.replace(/[^0-9]/g, "");
          }
          onChange?.(valueToSet);
        }}
        style={{
          border: `1px solid ${hasError ? "red" : "var(--color-grey)"}`,
          ...sx,
          textAlign: textAlign,
          fontWeight: bold ? "bold" : "normal",
          color: disabled ? "#fff" : "black",
          backgroundColor: disabled ? "rgba(255,255,255,.2)" : "white",
        }}
        disabled={disabled}
        required={required}
        {...(value && { value })}
      />
      {hint && (
        <div
          className={classes.hint}
          style={{
            ...(hasError && { color: "red" }),
          }}
        >
          {hint}
        </div>
      )}
    </div>
  );
};
