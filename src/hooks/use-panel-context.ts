import { PanelContext } from "@/components/panel-context";
import { useContext } from "react";

export function usePanelContext() {
  const { panel, setPanel } = useContext(PanelContext);
  return { panel, setPanel };
}
