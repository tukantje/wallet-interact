import { ReactElement } from "react";
import { useNetwork } from "wagmi";

import styles from "./chain.module.css";

export function Chain(): ReactElement {
  const { chain } = useNetwork();

  return (
    <>
      {chain && (
        <div className={styles.chain}>
          Connected to {chain.name} with ID {chain.id}
        </div>
      )}
    </>
  );
}
