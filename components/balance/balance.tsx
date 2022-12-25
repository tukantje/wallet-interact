import { useBalance } from "wagmi";
import { useAddress } from "../account";

import styles from "./balance.module.css";

export function Balance() {
  const address = useAddress();
  const { data, isError, isLoading } = useBalance({ address });

  if (isLoading) {
    return <div className={styles.balance}>Loading...</div>;
  }

  if (isError) {
    return <div className={styles.balance}>Error</div>;
  }

  return <div className={styles.balance}>{data?.formatted}</div>;
}
