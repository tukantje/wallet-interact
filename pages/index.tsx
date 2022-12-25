import Head from "next/head";
import { AccountActions } from "../components/account-actions";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wallet Interact</title>
        <meta name="description" content="Wallet Interact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AccountActions />
      </main>
    </>
  );
}
