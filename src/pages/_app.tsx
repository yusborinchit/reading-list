import PanelContextProvider from "@/components/panel-context";
import "@/styles/globals.css";
import { type AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <PanelContextProvider>
        <Component {...pageProps} />
      </PanelContextProvider>
    </div>
  );
}

export default App;
