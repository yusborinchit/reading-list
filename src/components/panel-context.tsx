import { type Panel } from "@/types";
import {
  createContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

interface PanelContextData {
  panel?: Panel;
  setPanel?: Dispatch<SetStateAction<Panel>>;
}

export const PanelContext = createContext<PanelContextData>({});

function PanelContextProvider({ children }: PropsWithChildren) {
  const [panel, setPanel] = useState<Panel>("all-books");

  return (
    <PanelContext.Provider value={{ panel, setPanel }}>
      {children}
    </PanelContext.Provider>
  );
}

export default PanelContextProvider;
