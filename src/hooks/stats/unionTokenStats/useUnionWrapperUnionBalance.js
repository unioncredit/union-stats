import { ARB_UNION_WRAPPER, UNION_TOKEN_ADDRESSES } from "constants/variables";
import useChainId from "hooks/useChainId";
import useTokenBalanceOfAccount from "hooks/data/useTokenBalanceOfAccount";

export default function useUnionWrapperUnionBalance() {
  const chainId = useChainId();

  return useTokenBalanceOfAccount(
    UNION_TOKEN_ADDRESSES[chainId],
    ARB_UNION_WRAPPER[chainId]
  );
}
