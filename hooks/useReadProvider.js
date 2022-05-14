import useSWR from "swr";
import { JsonRpcProvider } from "@ethersproject/providers";

import { RPC_URLS } from "constants/app";
import useChainId from "hooks/useChainId";

function fetchProvider(_, chainId) {
  return new JsonRpcProvider(RPC_URLS[chainId]);
}

export default function useReadProvider() {
  const chainId = useChainId();

  const shouldFetch = !!chainId;

  const resp = useSWR(
    shouldFetch ? ["ReadProvider", chainId] : null,
    fetchProvider,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return resp.data;
}
