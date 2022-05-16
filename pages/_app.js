import { SWRConfig } from "swr";
import { useEffect } from "react";

import Error from "./_error";
import { Wrapper } from "components";
import ErrorBoundary from "components/ErrorBoundary";

import "../styles/index.css";

export default function UnionApp() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const cookieStore = require("cookie-store");
    }
  }, []);

  return (
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
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </SWRConfig>
    </ErrorBoundary>
  );
}
