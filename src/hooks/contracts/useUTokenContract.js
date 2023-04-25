import ABI from "constants/abis/uToken.json";
import V2_ABI from "constants/abis/v2/uToken.json";
import { U_TOKEN_ADDRESSES } from "constants/variables";
import { isChainV2 } from "../../util/chain";
import useChainId from "hooks/useChainId";
import useContract from "../useContract";

export default function useUnionContract(provider) {
  const chainId = useChainId();

  return useContract(
    U_TOKEN_ADDRESSES[chainId],
    isChainV2(chainId) ? V2_ABI : ABI,
    provider
  );
}
