import useSWR from "swr";
import { JsonRpcProvider } from "@ethersproject/providers";

import { chain } from "constants/app";
import useChainId from "hooks/useChainId";

function fetchProvider(_, chainId) {
  const network = Object.values(chain).find((value) => value.id === chainId);
  return new JsonRpcProvider(network.rpcUrl);
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
