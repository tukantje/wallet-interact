import { PropsWithChildren, useState } from "react";
import { Button } from "../ui/button";
import styles from "./action.module.css";

interface ActionProps extends PropsWithChildren {
  text: string;
}

export function Action({ text, children }: ActionProps) {
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => setIsClicked((currentValue) => !currentValue);

  return (
    <div className={styles.action}>
      <Button onClick={onClick}>{text}</Button>
      {isClicked && children}
    </div>
  );
}
