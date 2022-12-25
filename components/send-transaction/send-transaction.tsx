import { parseEther } from "ethers/lib/utils.js";
import { ReactElement } from "react";
import { usePrepareSendTransaction, useSendTransaction } from "wagmi";
import { useAddress } from "../account";
import { Button } from "../ui/button";
import styles from "./send-transaction.module.css";

export function SendTransaction(): ReactElement {
  const address = useAddress();
  const { config, error } = usePrepareSendTransaction({
    request: { to: address, value: parseEther("0") },
  });
  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(config);

  if (error) {
    return (
      <div className={styles.sendTransaction}>{`Error: ${JSON.stringify(
        error
      )}`}</div>
    );
  }

  if (isLoading) {
    return <div className={styles.sendTransaction}>Loading...</div>;
  }

  if (isSuccess) {
    return (
      <div
        className={styles.sendTransaction}
      >{`Transaction hash: ${data?.hash}`}</div>
    );
  }

  if (sendTransaction) {
    return <Button onClick={sendTransaction}>Send Transaction</Button>;
  }

  return <></>;
}
