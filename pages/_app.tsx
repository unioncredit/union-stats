import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { Web3ReactProvider } from "@web3-react/core";
import ErrorBoundary from "components-ui/ErrorBoundary";
import { Wrapper } from "components-ui";
import getLibrary from "lib/getLibrary";
import { useEffect } from "react";
import Error from "./_error";
import UnsuportedChainProvider from "providers/UnsupportedChain";

import "../styles/index.css";
import { links } from "constants/app";

export default function UnionApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cookieStore = require("cookie-store");
    }
  }, []);

  return (
    <UnsuportedChainProvider chainIds={[]}>
      <ErrorBoundary fallback={<Error />}>
        <SWRConfig
          value={{
            refreshInterval: 0,
            errorRetryCount: 0,
            shouldRetryOnError: false,
            revalidateOnFocus: true,
            revalidateOnReconnect: false,
            revalidateOnMount: true,
            dedupingInterval: 5000,
          }}
        >
          <Web3ReactProvider getLibrary={getLibrary}>
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
          </Web3ReactProvider>
        </SWRConfig>
      </ErrorBoundary>
    </UnsuportedChainProvider>
  );
}
