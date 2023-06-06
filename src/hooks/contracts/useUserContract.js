import ABI from "constants/abis/userManager.json";
import V2_ABI from "constants/abis/v2/userManager.json";
import { USER_MANAGER_ADDRESSES } from "constants/variables";
import useChainId from "hooks/useChainId";
import useContract from "../useContract";
import { isChainV2 } from "../../util/chain";

export default function useUserContract(provider) {
  const chainId = useChainId();

  return useContract(
    USER_MANAGER_ADDRESSES[chainId],
    isChainV2(chainId) ? V2_ABI : ABI,
    provider
  );
}
