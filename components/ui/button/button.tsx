import { PropsWithChildren, ReactElement } from "react";
import styles from "./button.module.css";

interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}

export function Button({
  disabled,
  onClick,
  type,
  variant,
  children,
}: ButtonProps): ReactElement {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
      data-variant={variant}
    >
      {children}
    </button>
  );
}
