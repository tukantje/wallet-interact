import { Account } from "../account";
import { Action } from "../action";
import { Balance } from "../balance";
import { Chain } from "../chain";
import { Disconnect } from "../disconnect";
import { SendTransaction } from "../send-transaction";
import styles from "./account-actions.module.css";

export function AccountActions() {
  return (
    <div className={styles.accountActions}>
      <Account>
        <Action text="Chain Information">
          <Chain />
        </Action>
        <Action text="Balance">
          <Balance />
        </Action>
        <SendTransaction />
        <Disconnect />
      </Account>
    </div>
  );
}
