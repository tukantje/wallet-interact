import { ReactElement } from "react";
import { useDisconnect } from "wagmi";
import { Button } from "../ui/button";

export function Disconnect(): ReactElement {
  const { disconnect } = useDisconnect();

  return <Button onClick={disconnect}>Disconnect</Button>;
}
