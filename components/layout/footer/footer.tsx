import { ReactElement } from "react";
import styles from "./footer.module.css";

interface FooterProps {}

export function Footer({}: FooterProps): ReactElement {
  return (
    <footer className={styles.footer}>
      <a
        href="https://twitter.com/tukantje"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made with ❤️ by @tukantje 🥳
      </a>
    </footer>
  );
}
