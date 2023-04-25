import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import Stats from "views/stats";
import Data from "views/data";

import { ErrorBoundary, Wrapper } from "components";
import "./index.css";
import { chain } from "./constants/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

// TODO: error component
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={"error"}>
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Stats chainId={chain.mainnet.id} />} />
              <Route
                path="/members"
                element={<Data chainId={chain.mainnet.id} />}
              />

              <Route
                path="/optimism"
                element={<Stats chainId={chain.optimism.id} />}
              />
              <Route
                path="/members/optimism"
                element={<Data chainId={chain.optimism.id} />}
              />

              <Route
                path="/arbitrum"
                element={<Stats chainId={chain.arbitrum.id} />}
              />
              <Route
                path="/members/arbitrum"
                element={<Data chainId={chain.arbitrum.id} />}
              />

              <Route
                path="/opgoerli"
                element={<Stats chainId={chain.opgoerli.id} />}
              />
              <Route
                path="/members/opgoerli"
                element={<Data chainId={chain.opgoerli.id} />}
              />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </SWRConfig>
    </ErrorBoundary>
  </React.StrictMode>
);
