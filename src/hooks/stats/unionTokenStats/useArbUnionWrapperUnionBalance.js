import { UNION_TOKEN_ADDRESSES, ARB_UNION_WRAPPER } from "constants/variables";
import useChainId from "hooks/useChainId";
import useTokenBalanceOfAccount from "hooks/data/useTokenBalanceOfAccount";

export default function useArbUnionWrapperUnionBalance() {
  const chainId = useChainId();

  return useTokenBalanceOfAccount(
    UNION_TOKEN_ADDRESSES[chainId],
    ARB_UNION_WRAPPER[chainId]
  );
}
