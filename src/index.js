import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import Stats from "views/stats";
import Data from "views/data";

import { Wrapper, ErrorBoundary } from "components";
import "./index.css";

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
            </Routes>
          </BrowserRouter>
        </Wrapper>
      </SWRConfig>
    </ErrorBoundary>
  </React.StrictMode>
);
