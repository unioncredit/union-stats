import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";
import Stats from "views/stats";
import Data from "views/data";

import { ErrorBoundary, Wrapper } from "components";
import "./index.css";
import { NetworkRedirect } from "components/NetworkRedirect";
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
              <Route path="/" element={<Stats />} />
              <Route path="/members" element={<Data />} />

              <Route
                path="/arbitrum"
                element={<NetworkRedirect to="/" chainId={chain.arbitrum.id} />}
              />
              <Route
                path="/members/arbitrum"
                element={
                  <NetworkRedirect to="/members" chainId={chain.arbitrum.id} />
                }
              />
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </SWRConfig>
    </ErrorBoundary>
  </React.StrictMode>
);
