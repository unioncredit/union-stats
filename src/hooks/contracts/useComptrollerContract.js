import ABI from "constants/abis/comptroller.json";
import V2_ABI from "constants/abis/v2/comptroller.json";
import { COMPTROLLER_ADDRESSES } from "constants/variables";
import { isChainV2 } from "../../util/chain";
import useChainId from "hooks/useChainId";
import useContract from "../useContract";

export default function useComptrollerContract(provider) {
  const chainId = useChainId();

  return useContract(
    COMPTROLLER_ADDRESSES[chainId],
    isChainV2(chainId) ? V2_ABI : ABI,
    provider
  );
}
