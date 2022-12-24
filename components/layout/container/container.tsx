import { PropsWithChildren, ReactElement } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from "./container.module.css";

interface ContainerProps extends PropsWithChildren {}

const APP_NAME = process.env.APP_NAME ?? "Wallet Interact";

export function Container({ children }: ContainerProps): ReactElement {
  return (
    <div className={styles.container}>
      <Header title={APP_NAME} />
      {children}
      <Footer />
    </div>
  );
}
