import useSWR from "swr";
import { JsonRpcProvider } from "@ethersproject/providers";
import useChainId from "hooks/useChainId";
import { RPC_URLS } from "lib/connectors";

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
