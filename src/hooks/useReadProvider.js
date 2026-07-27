import { useMemo } from "react";

import useChainId from "hooks/useChainId";
import getReadProvider from "util/rpc";

export default function useReadProvider() {
  const chainId = useChainId();
  return useMemo(() => getReadProvider(chainId), [chainId]);
}
