import styles from "./account.module.css";
import { useAccount } from "wagmi";
import { createContext, PropsWithChildren, useContext } from "react";

type Address = `0x${string}`;

export const AccountContext = createContext<Address | undefined>(undefined);
export function useAddress() {
  const address = useContext(AccountContext);

  if (!address) {
    throw new Error("No address found.");
  }

  return address;
}

interface AccountProps extends PropsWithChildren {}

export function Account({ children }: AccountProps) {
  const { address, isConnecting, isDisconnected } = useAccount();
  const shouldRenderChildren =
    !isConnecting && !isDisconnected && address !== undefined;

  return (
    <AccountContext.Provider value={address}>
      {isConnecting && <div className={styles.account}>Connecting...</div>}
      {isDisconnected && <div className={styles.account}>Disconnected</div>}
      {shouldRenderChildren && children}
    </AccountContext.Provider>
  );
}
