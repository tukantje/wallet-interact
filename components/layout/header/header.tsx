import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps): ReactElement {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <ConnectButton />
    </header>
  );
}
